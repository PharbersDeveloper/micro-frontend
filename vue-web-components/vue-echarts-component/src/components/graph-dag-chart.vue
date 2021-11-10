<template>
    <div class="bubbleWrap">
      <div ref="chart" class="chart"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: 'dag',
    data: () => {
        return {
            timer: null,
            dataArr: [],
            yearArr: []
        }
    },
    props: {
    	datasource: {
    		type: Object,
            default: function() {
                return {
                    nodes: [
                        {
                            name: 'script1',
                            x: 360,
                            y: 170,
                            category: 'code'
                        },
                        {
                            name: 'script2',
                            x: 360,
                            y: 220,
                            category: 'code'
                        },
                        {
                            name: '数据目录1',
                            x: 320,
                            y: 200,
                            category: 'file'
                        },
                        {
                            name: 'script3',
                            x: 380,
                            y: 220,
                            category: 'code'
                        },
                        {
                            name: '数据目录2',
                            x: 380,
                            y: 150,
                            category: 'file'
                        },
                        {
                            name: 'script4',
                            x: 420,
                            y: 220,
                            category: 'code'
                        },
                        {
                            name: 'script5',
                            x: 440,
                            y: 200,
                            category: 'code'
                        },
                        {
                            name: '数据目录3',
                            x: 400,
                            y: 220,
                            category: 'file'
                        },
                        {
                            name: 'script6',
                            x: 400,
                            y: 160,
                            category: 'code'
                        },
                        {
                            name: 'script7',
                            x: 400,
                            y: 130,
                            category: 'code'
                        },
                        {
                            name: 'script8',
                            x: 420,
                            y: 130,
                            category: 'code'
                        }
                    ],
                    links: [
                        {
                            source: '数据目录0',
                            target: 'script0'
                        },
                        {
                            source: '数据目录0',
                            target: 'script1'
                        },
                        {
                            source: 'script1',
                            target: 'script2'
                        },
                        {
                            source: 'script2',
                            target: '数据目录2'
                        },
                        {
                            source: '数据目录2',
                            target: 'script3'
                        },
                        {
                            source: 'script3',
                            target: 'script4'
                        },
                        {
                            source: 'script0',
                            target: '数据目录1'
                        },
                        {
                            source: '数据目录1',
                            target: 'script6'
                        },
                        {
                            source: '数据目录1',
                            target: 'script5'
                        },
                        {
                            source: 'script6',
                            target: 'script7'
                        },
                        {
                            source: 'script7',
                            target: 'script4'
                        },
                        {
                            source: 'script4',
                            target: 'script0'
                        }
                    ],
                    title: "Basic Graph"
                }
            }
        }
    },
    mounted () {
        this.initChart()
    },
    methods: {
        // 初始化数据
        async initChart () {
            // 初始化echarts实例
            this.dag = echarts.init(this.$refs.chart)
            this.bindChangeWindow()

            this.dag.showLoading()
            // 获取数据
            // await this.queryData()
            this.dag.hideLoading()
            this.renderDag()
        },

        // 监听屏幕大小改变
        bindChangeWindow () {
            window.onresize = () => {
                if (this.timer) return

                this.timer = setTimeout(() => {
                    this.dag.resize()
                    this.timer = null
                }, 100)
            }
        },
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        },
        renderDag () {
            let that = this
            let option = {
                title: {
                    text: this.title
                },
                backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                    offset: 0,
                    color: '#f7f8fa'
                }, {
                    offset: 1,
                    color: '#cdd0d5'
                }]),
                tooltip: {},
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series: [
                    {
                        type: 'graph',
                        layout: 'none',
                        symbolSize: 50,
                        roam: true,
                        symbol: 'rect',
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [5, 10],
                        itemStyle: {
                            color: '#24a861'
                        },
                        label: {
                            show: true,
                            fontSize: 16,
                            position: 'bottom'
                        },
                        edgeLabel: {
                            fontSize: 20
                        },
                        categories: [
                            {
                                name: 'code',
                                symbol: 'image://https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/WX20211019-163226.png'
                            },
                            {
                                name: 'file',
                                symbol: 'image://https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/WX20211019-173847.png'
                            }
                        ],
                        data: this.datasource.nodes,
                        links: this.datasource.links,
                        lineStyle: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0
                        }
                    }
                ]
            };
            // 绘制图表
            this.dag.setOption(option)
            this.dag.on('click', function (params) {
                //选中状态
                that.dataArr.forEach(item => {
                    item.itemStyle = {}
                    if (params.dataType == 'node' && item.name === params.name) {
                        item.itemStyle = {
                            shadowColor: 'blue',
                            shadowBlur: 3
                        }
                    }
                })
                that.bubbleChart.setOption(option)
            })
        }
    },
    watch: {
        needRefresh(n, o) {
            this.renderDag()
        }
    }
}
</script>

<style scoped lang="scss">
.bubbleWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 90vh;
    .chart {
        width: 100%;
        height: 100%;
        padding: 10px;
    }
}
</style>
