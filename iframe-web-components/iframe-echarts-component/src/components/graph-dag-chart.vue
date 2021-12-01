<template>
    <div class="bubbleWrap">
      <div ref="chart" class="chart"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
import PhDagDatasource from './model/datasource'
export default {
    data: () => {
        return {
            name: 'dag',
            needRefresh: 0,
            projectId: ""
        }
    },
    props: {
    	datasource: {
    		type: Object,
            default: function() {
                return new PhDagDatasource('1')
            }
        }
    },
    mounted () {
        let href = window.location.href
        this.projectId = href.split('projectId=')[1]
        this.datasource.projectId = this.projectId
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
            await this.datasource.refreshData(this)
            this.dag.hideLoading()
            this.renderDag()
            const that = this
            document.domain = "pharbers.com"
            this.dag.on('click', function(params) {
                console.log('alfredyang test')
                that.$emit('itemClicked', params)
            })
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
                        roam: false, // 缩放
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
                                name: 'DSuploaded',
                                symbol: 'image://https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/DSuploaded.svg'
                            },
                            {
                                name: 'DSIntermediate',
                                symbol: 'image://https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/DSIntermediate.svg'
                            },
                            {
                                name: 'Python3',
                                symbol: 'image://https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/Python3.svg'
                            },
                            {
                                name: 'PySpark',
                                symbol: 'image://https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/PySpark.svg'
                            },
                            {
                                name: 'SparkR',
                                symbol: 'image://https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/SparkR.svg'
                            },
                            {
                                name: 'R',
                                symbol: 'image://https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/R.svg'
                            },
                            {
                                name: 'job',
                                symbol: 'image://https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/WX20211019-163226.png'
                            },
                            {
                                name: 'dataset',
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
