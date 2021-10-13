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
            timer: null
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
            await this.queryData()
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
            const accessToken = this.getCookie("access_token") || "d0fcdb3bf8fe8dd91cdb4ef64815013e1cce9444bb6d44dc981b554cab3c12c4"
            let body = {"query":"select sum(sales) as sales, sum(units) as units, `标准省份名称` as province, year from phmax.data_wide where province != 'null' group by province,year having year in (2020,2019)","schema":["sales","units", "province", "year"]}
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
            result.forEach((item, index) => {

            })
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
            const data = [
                [
                    [17096869, 77, 17096869, 'Australia', 1990],
                    [27662440, 77.4, 27662440, 'Canada', 1990],
                    [1154605773, 68, 1154605773, 'China', 1990]
                ],
                [
                    [23968973, 81.8, 23968973, 'Australia', 2015],
                    [35939927, 81.7, 35939927, 'Canada', 2015],
                    [1376048943, 76.9, 1376048943, 'China', 2015]
                ]
            ];
            let option = {
                title: {
                    text: '省份-销量 气泡图',
                    left: '5%',
                    top: '3%'
                },
                legend: {
                    right: '10%',
                    top: '3%',
                    data: ['2019', '2020']
                },
                grid: {
                    left: '8%',
                    top: '10%'
                },
                xAxis: {
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },
                yAxis: {
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    scale: true
                },
                series: [
                    {
                        name: '2019',
                        data: data[0],
                        type: 'scatter',
                        symbolSize: function (data) {
                            return Math.sqrt(data[2]) / 5e2;
                        },
                        emphasis: {
                            focus: 'series',
                            label: {
                                show: true,
                                formatter: function (param) {
                                    return param.data[3];
                                },
                                position: 'top'
                            }
                        },
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(120, 36, 50, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(251, 118, 123)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(204, 46, 72)'
                                }
                            ])
                        }
                    },
                    {
                        name: '2020',
                        data: data[1],
                        type: 'scatter',
                        symbolSize: function (data) {
                            return Math.sqrt(data[2]) / 5e2;
                        },
                        emphasis: {
                            focus: 'series',
                            label: {
                                show: true,
                                formatter: function (param) {
                                    return param.data[3];
                                },
                                position: 'top'
                            }
                        },
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(25, 100, 150, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(129, 227, 238)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(25, 183, 207)'
                                }
                            ])
                        }
                    }
                ]
            };
            // 绘制图表
            this.bubbleChart.setOption(option)
        }
    }
}
</script>

<style scoped lang="scss">
.bubbleWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 90vh;
    .chart {
        width: 100%;
        height: 100%;
        padding: 10px;
    }
}
</style>
