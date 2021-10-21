<template>
    <div class="bubbleWrap">
        <div id="chart" class="chart"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: 'bubble',
    data: () => {
        return {
            bubbleChart: null,
            timer: null,
            dataArr: [],
            yearArr: []
        }
    },
    mounted () {
        this.initChart()
    },
    methods: {
        // 初始化数据
        async initChart () {
            // 初始化echarts实例
            this.bubbleChart = echarts.init(document.getElementById('chart'))
            this.bindChangeWindow()

            this.bubbleChart.showLoading()
            // 获取数据
            // await this.queryData()
            this.bubbleChart.hideLoading()
            this.renderbubbleChart()
        },

        // 监听屏幕大小改变
        bindChangeWindow () {
            window.onresize = () => {
                if (this.timer) return

                this.timer = setTimeout(() => {
                    this.bubbleChart.resize()
                    this.timer = null
                }, 100)
            }
        },
        async queryData() {
            const url = "https://api.pharbers.com/phchproxyquery"
            const accessToken = this.getCookie("access_token") || "e20cf44e818d6d07b04bb93745ae9f4b0bbb5477926ef8005008c845cbe68493"
            let body = {"query":"select sum(sales) as sales, sum(units) as units, `标准省份名称` as province, year from phmax.data_wide where province != 'null' group by province,year having year in (2020,2019) order by year","schema":["sales","units", "province", "year"]}
            let options = {
                method: "POST",
                headers: {
                    "Authorization": accessToken,
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    "accept": "application/json"
                },
                body: JSON.stringify(body)
            }
            let result = await fetch(url, options).then(res => res.json())
            let yearGroupArr = []
            let dataArr = []
            result.forEach((item, index) => {
                if(index == 0) {
                    this.yearArr.push(item.year)
                    yearGroupArr.push([Number(item.sales), Number(item.units), Number(item.sales), item.province, item.year])
                } else {
                    if(item.year == yearGroupArr[yearGroupArr.length - 1][4]) {
                        yearGroupArr.push([Number(item.sales), Number(item.units), Number(item.sales), item.province, item.year])
                    } else {
                        this.yearArr.push(item.year)
                        dataArr.push(yearGroupArr)
                        yearGroupArr = []
                        yearGroupArr.push([Number(item.sales), Number(item.units), Number(item.sales), item.province, item.year])
                    }
                }

            })
            dataArr.push(yearGroupArr)
            this.dataArr = dataArr
            console.log(this.dataArr)
            console.log(this.yearArr)
        },
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        },
        renderbubbleChart () {
            let that = this
            this.dataArr = [
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
            ]
            let option = {
                title: {
                    text: 'Basic Graph'
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
                        data: this.dataArr,
                        links: [
                            {
                                source: '数据目录1',
                                target: 'script1'
                            },
                            {
                                source: '数据目录1',
                                target: 'script2'
                            },
                            {
                                source: 'script2',
                                target: 'script3'
                            },
                            {
                                source: 'script3',
                                target: '数据目录3'
                            },
                            {
                                source: '数据目录3',
                                target: 'script4'
                            },
                            {
                                source: 'script4',
                                target: 'script5'
                            },
                            {
                                source: 'script1',
                                target: '数据目录2'
                            },
                            {
                                source: '数据目录2',
                                target: 'script7'
                            },
                            {
                                source: '数据目录2',
                                target: 'script6'
                            },
                            {
                                source: 'script7',
                                target: 'script8'
                            },
                            {
                                source: 'script8',
                                target: 'script5'
                            },
                            {
                                source: 'script5',
                                target: 'script1'
                            }
                        ],
                        lineStyle: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0
                        }
                    }
                ]
            };
            // 绘制图表
            this.bubbleChart.setOption(option)
            this.bubbleChart.on('click', function (params) {
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
