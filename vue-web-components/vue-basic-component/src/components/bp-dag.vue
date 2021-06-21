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
                    label: "Start",
                    type: "Start",
                    next: parallel_start_next
                })
            } else if (dag.States[firstStep].Type === "Map") {
                nodeData.push({
                    id: this.guid(),
                    label: "Start",
                    type: "Start",
                    next: dag.States[firstStep].Iterator.StartAt
                })
            } else {
                nodeData.push({
                    id: this.guid(),
                    label: "Start",
                    type: "Start",
                    next: firstStep
                })
            }

            // States中包含了状态机的所有状态
            // 添加state节点数据
            for (let state in dag.States) {
                let next = dag.States[state].Next ? dag.States[state].Next : "End",
                    catchNext = [],
                    catchNextLength = dag.States[state].Catch ? dag.States[state].Catch.length : 0,
                    type = dag.States[state].Type

                // 处理next的type为Map情况下的节点数据(普通情况)
                if (next !== "End" && type != "Parallel" && dag.States[next].Type === "Map") {
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
                if (next !== "End" && type != "Map" && dag.States[next].Type === "Parallel") {
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
                label: "End",
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
                let svg = d3.select("#svg-canvas") || d3.select( document.getElementsByTagName("ph-dag")[0].shadowRoot ).select("#svg-canvas")
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
                let style = "stroke-dasharray:5 2;fill:#fff;stroke:#000;cursor: pointer"

                switch (item.type) {
                case "Task":
                case "Pass":
                    shape = "rect"
                    break;
                case "Start":
                case "End":
                    shape = "circle"
                    style = "fill:#ffda75;stroke:#000;cursor: pointer"
                    break;
                default:
                    shape = "rect"
                    break;
                }
                g.setNode( item.id, {
                    label: item.label,
                    shape: shape,
                    style: style
                } )
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
                    style: "fill:#fff;stroke:#333;stroke-width:1.5px;cursor: pointer"
                } )
            } )
        }
    }
}
</script>

<style scoped>

</style>