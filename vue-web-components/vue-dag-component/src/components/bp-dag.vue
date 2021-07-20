<template>
    <div class="phdag">
        <svg id="svg-canvas" width="960" height="990"></svg>
    </div>
</template>

<script>
import * as dagreD3 from "dagre-d3"
import * as d3 from "d3"

export default {
    name: "phdag",
    props: {
        dag: {
            type: Object
        }
    },
    mounted() {
        this.main()
    },
    updated() {
        this.main()
    },
    methods: {
        // @return {String} 随机的id
        guid() {
            return "xxxxx-xxxx-4xxx-yxxx-xxxxx".replace( /[xy]/g, function ( c ) {
                var r = Math.random() * 16 | 0,
                    v = c === "x" ? r : r & 0x3 | 0x8

                return v.toString( 16 )
            } )
        },
        /**
         * @description 增加新节点(只是向graph对象中增加节点，如果要展示出来还需要使用render)
         * @param {Array} nodeData 节点数据
         * @param {Boolean} hasParent 是否包含map中的父节点
        **/
        addNodes(nodeData, g, hasParent) {
            nodeData.forEach( item => {
                let shape = ""
                let style = "fill:#fff;stroke:#000;cursor: pointer"
                let labelStyle,width,labelType

                switch (item.type) {
                case "Start":
                    shape = "rect"
                    style = "fill: #7163C5;cursor: pointer;"
                    labelStyle = "font-family: SFProText-Regular;font-size: 24px;fill: #fff;color: #fff;cursor: pointer;"
                    width = (120-20)
                    break;
                case "End":
                    shape = "rect"
                    style = "fill: #23A959;cursor: pointer;"
                    labelStyle = "font-family: SFProText-Regular;font-size: 24px;fill: #fff;color: #fff;cursor: pointer;"
                    width = (120-20)
                    break;
                default:
                    shape = "rect"
                    labelType = "html"
                    labelStyle = "font-family: SFProText-Light;font-size: 12px;fill: #57565F;letter-spacing: 0.25px;font-weight: 200;cursor: pointer;"
                }
                
                let params = {
                    label: item.label,
                    height: (48-20),
                    shape: shape,
                    style: style,
                    rx: 2,
                    ry: 2,
                    class: 'test_dag_status'  //可以根据不同的状态给不同的class以变化不同的边框颜色
                }

                if (labelStyle) {
                    params['labelStyle'] = labelStyle
                }

                if (width) {
                    params['width'] = width
                }
                if (labelType) {
                    params['labelType'] = labelType
                    params.label = '<div class=icon_dag_container><span class=icon_dag></span>'+`<span style="height:100%;display: inline-block">${params.label}</span></div>`
                }
                g.setNode( item.id, params )
            } )
            // 添加map的父元素
            if (hasParent) {
                nodeData.forEach( node => {
                    node.hasChildren.forEach( childId => {
                        g.setParent(childId, node.id)
                    })
                })
            }
        },
        /**
         * @description 增加新边(只是向graph对象中增加边，如果要展示出来还需要使用render)
         * @param {Array} edgeData 边数据
        **/
        addEdges(edgeData, g) {
            edgeData.forEach( item => {
                g.setEdge( item.source, item.target, {
                    style: "fill:#fff;stroke:#63616B;stroke-width:1px;cursor: pointer",
                    curve: d3.curveBasis
                } )
            } )
        },
        main() {
            // console.log("dag",this.dag);
            // 创建graph对象和渲染器
            let g = new dagreD3.graphlib.Graph({compound:true})
                .setGraph( {
                    rankdir: "LR",
                    marginx: 50,
                    marginy: 50
                } )
                .setDefaultEdgeLabel(function() { return {}; });

            let render = new dagreD3.render(),
                dag = this.dag

            if (dag) {
                /*
                * firstStep {String} 状态机的起始state
                * nodeData {Array} 节点数据
                * edgeData {Array} 边数据
                * mapClusters {Array} 如果存在map的话存放所有的map数据
                */
                let firstStep = dag.StartAt,
                    nodeData = [],
                    edgeData = [],
                    mapClusters = []

                // 添加start节点(如果第一步的type为Parallel就需要把所有的next的名称放到next数组中待生成边时进行处理)
                if (dag.States[firstStep].Type === "Parallel") {
                    let parallel_start_next = []
                    dag.States[firstStep].Branches.forEach(branch => {
                        parallel_start_next.push(branch.StartAt)
                    })
                    nodeData.push({
                        id: this.guid(),
                        label: "START",
                        type: "Start",
                        next: parallel_start_next
                    })
                } else if (dag.States[firstStep].Type === "Map") {
                    nodeData.push({
                        id: this.guid(),
                        label: "START",
                        type: "Start",
                        next: dag.States[firstStep].Iterator.StartAt
                    })
                } else {
                    nodeData.push({
                        id: this.guid(),
                        label: "START",
                        type: "Start",
                        next: firstStep
                    })
                }

                // States中包含了状态机的所有状态
                // 添加state节点数据
                for (let state in dag.States) {
                    let next = dag.States[state].Next ? dag.States[state].Next : "END",
                        catchNext = [],
                        catchNextLength = dag.States[state].Catch ? dag.States[state].Catch.length : 0,
                        type = dag.States[state].Type

                    // 处理next的type为Map情况下的节点数据(普通情况)
                    if (next !== "END" && type != "Parallel" && dag.States[next].Type === "Map") {
                        nodeData.push({
                            id: this.guid(),
                            label: state,
                            type: dag.States[state].Type,
                            next: dag.States[next].Iterator.StartAt,
                            catchNext: []
                        })
                        continue
                    }
                    // 处理next的type为parallel时的节点数据(普通情况)
                    if (next !== "END" && type != "Map" && dag.States[next].Type === "Parallel") {
                        let parallel_next = []
                        dag.States[next].Branches.forEach(branch => {
                            parallel_next.push(branch.StartAt)
                        })
                        nodeData.push({
                            id: this.guid(),
                            label: state,
                            type: dag.States[state].Type,
                            next: parallel_next,
                            catchNext: []
                        })
                        continue
                    }
                    // 处理type为Parallel(并行)情况下的节点数据
                    if ( type === "Parallel") {
                        let branches = dag.States[state].Branches
                        branches.forEach( branch => {
                            for (let parallel_state in branch.States) {
                                let parallel_next = branch.States[parallel_state].Next ? branch.States[parallel_state].Next : next,
                                    parallel_type = branch.States[parallel_state].Type
                                
                                // 处理next的type为Map情况下的节点数据(本身节点为parallel情况下)
                                if (dag.States[parallel_next] && dag.States[parallel_next].Type === "Map") {
                                    nodeData.push({
                                        id: this.guid(),
                                        label: parallel_state,
                                        type: parallel_type,
                                        next: dag.States[parallel_next].Iterator.StartAt,
                                        catchNext: []
                                    })
                                } else {
                                    nodeData.push({
                                        id: this.guid(),
                                        label: parallel_state,
                                        type: parallel_type,
                                        next: parallel_next,
                                        catchNext: []
                                    })
                                }
                            }
                        } )
                        continue
                    }

                    // 处理type为Map(循环)情况下的节点数据
                    if ( type === "Map" ) {
                        let iterator_states = dag.States[state].Iterator.States,
                            map_all_id = []

                        // 将map中的所有节点写入nodeData中
                        for (let map_state in iterator_states) {
                            let map_next = iterator_states[map_state].Next ? iterator_states[map_state].Next : dag.States[state].Next,
                                map_state_id = this.guid()

                            if ( dag.States[map_next] && dag.States[map_next].Type === "Parallel" ) {
                                let state_map_next_parallel = []
                                dag.States[map_next].Branches.forEach(branch => {
                                    state_map_next_parallel.push(branch.StartAt)
                                })
                                map_next = state_map_next_parallel
                            }
                            nodeData.push({
                                id: map_state_id,
                                label: map_state,
                                type: iterator_states[map_state].Type,
                                next: map_next,
                                catchNext: []
                            })
                            map_all_id.push(map_state_id)
                        }
                        // 将包含在一个group中的node写入到mapClusters中
                        mapClusters.push({
                            id: this.guid(),
                            label: "",
                            hasChildren: map_all_id
                        })
                        continue
                    }

                    if ( catchNextLength ) {
                        dag.States[state].Catch.forEach(x => {
                            catchNext.push(x.Next)
                        })
                    }

                    nodeData.push({
                        id: this.guid(),
                        label: state,
                        type: dag.States[state].Type,
                        next: next,
                        catchNext: catchNext
                    })
                }
                // 添加end节点
                nodeData.push({
                    id: this.guid(),
                    label: "END",
                    type: "End",
                    next: ""
                })
                // console.log("nodeData", nodeData);

                // 添加所有的边数据
                for (let node of nodeData) {
                    let target = ""

                    if ( !node.next ) {
                        continue
                    } else if (node.next instanceof Array) {
                        node.next.forEach(x => {
                            nodeData.forEach(y => {
                                if (x === y.label) {
                                    edgeData.push({
                                        source: node.id,
                                        target: y.id
                                    })
                                }
                            })
                        })
                        continue
                    }

                    nodeData.forEach(element => {
                        if (element.label === node.next) {
                            target = element.id
                        }
                    })

                    edgeData.push({
                        source: node.id,
                        target: target
                    })

                    // 如果有catch的话将catch的边添加到edgeData中
                    if (node.catchNext && node.catchNext.length) {
                        node.catchNext.forEach(x => {
                            nodeData.forEach(y => {
                                if (x === y.label) {
                                    edgeData.push({
                                        source: node.id,
                                        target: y.id
                                    })
                                }
                            })
                        })
                    }
                }
                // 使用dagre-d3的api将数据写入到graph中
                this.addNodes(nodeData, g, false)
                if ( mapClusters.length ) {
                    this.addNodes(mapClusters , g, true)
                }
                this.addEdges(edgeData, g)

                window.onload = function() {
                    // let svg = d3.select( document.getElementsByTagName("ph-dag")[0].shadowRoot ).select("#svg-canvas")
                    let svg = d3.select("#svg-canvas")

                    // 绘图的容器
                    let svgGroup = svg.append( "g" )
                    // 开始渲染
                    render( svgGroup, g )

                    let zoom = d3.zoom()
                        .scaleExtent( [.5, 4] )
                        .on( "zoom", function( event ) {
                            svgGroup.attr( "transform", event.transform )
                        } )
                    svg.call( zoom )
                    // console.log("111",svg )
                }
            }
        }
    },
    watch: {
        dag: function(newDag) {
            this.main()
        }
    }
}
</script>

<style lang="scss">
    * {
        box-sizing: border-box;
    }
    #svg-canvas {
        width: 100%;
        height: 100%;
    }

    .icon_dag_container {
        display: flex;
        align-items: center;
    }

    .icon_dag_container .icon_dag {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.87 10.18c0 .2-.205.401-.412.401a.438.438 0 0 1-.413-.4c0-.201.207-.403.413-.403.207 0 .413.101.413.402h-.001zm-1.856 0c0 .802.619 1.404 1.444 1.404s1.444-.602 1.444-1.404c0-.803-.62-1.504-1.444-1.504-.825 0-1.444.701-1.444 1.504zm-1.65-1.404c0-.1 0-.1.103-.1l-.104.1zm8.148-.601a17.816 17.816 0 0 0-5.467-.602h-.62c.723-1.003 1.446-1.906 2.167-2.607 1.135-1.003 1.65-1.103 1.858-1.003.206.1.413 1.003-.103 2.707l1.03.301c.62-2.005.517-3.409-.308-3.81-.515-.302-1.444-.302-3.094 1.103-1.031.802-1.96 2.005-2.888 3.31-.413.1-.723.1-1.135.2-.722-2.006-.722-3.21-.412-3.41.206-.1 1.03.1 2.372 1.404l.722-.702C8.086 3.462 6.848 2.96 6.023 3.462c-1.033.501-.826 2.306-.103 4.412-.517.1-.93.2-1.341.3C2.413 8.777 2 9.579 2 10.18c0 .903 1.135 1.704 3.197 2.206l.206-1.002c-1.65-.402-2.372-.903-2.372-1.103 0-.201.413-.602 1.857-1.104.413-.1.928-.2 1.445-.3.102.3.309.7.515 1.103-.62 1.203-1.134 2.406-1.34 3.51-.517 2.105 0 2.907.514 3.208.207.1.413.2.62.2.72 0 1.753-.6 2.888-1.704l-.722-.7c-1.238 1.302-2.063 1.502-2.27 1.402-.206-.1-.412-.602 0-2.106.104-.902.413-1.805.825-2.808.104.201.207.301.31.502 1.032 1.705 2.166 3.209 3.3 4.211C12.109 16.698 12.83 17 13.449 17c.31 0 .516-.101.619-.202.825-.5.928-1.805.31-3.71a17.847 17.847 0 0 0-1.444-3.31l-.825.503c.618 1.103 1.03 2.206 1.34 3.108.516 1.705.31 2.507.104 2.607-.207.1-.722 0-1.857-1.003-1.031-.902-2.166-2.406-3.094-4.01-.31-.403-.517-.702-.62-1.104.104-.301.31-.601.516-.902.104-.1.207-.302.207-.401h1.34c1.96 0 3.817.2 5.158.601 1.444.402 1.857.903 1.857 1.104 0 .3-.62.802-2.476 1.203l.206 1.003c2.166-.502 3.198-1.305 3.198-2.206.103-.703-.413-1.505-2.476-2.106z' fill='%2357565F' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center/100% !important;
    }
</style>