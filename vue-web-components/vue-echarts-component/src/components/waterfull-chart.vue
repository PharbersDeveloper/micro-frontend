<template>
    <div class="waterfullWrap">
        <div id="chart" class="chart"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: 'waterfull',
    data: () => {
        return {
            waterfullChart: null,
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
            this.waterfullChart = echarts.init(document.getElementById('chart'))
            this.bindChangeWindow()

            this.waterfullChart.showLoading()
            // 获取数据
            this.waterfullChart.hideLoading()
            this.renderWaterfullChart()
        },

        // 监听屏幕大小改变
        bindChangeWindow () {
            window.onresize = () => {
                if (this.timer) return

                this.timer = setTimeout(() => {
                    this.waterfullChart.resize()
                    this.timer = null
                }, 100)
            }
        },

        renderWaterfullChart (mapName, partData, geoJson) {
            debugger
            // const seriesData = this.getSeriesByPart(partData, geoJson)
            // const visualMapMax = this.getVisualMapMax(seriesData)
            let option = {
                title: {
                    text: 'Waterfall Chart'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    formatter: function (params) {
                        let tar;
                        if (params[1].value !== '-') {
                            tar = params[1];
                        } else {
                            tar = params[0];
                        }
                        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                    }
                },
                legend: {
                    data: ['Expenses', 'category']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : {
                    type : 'value',
                    min:2015,
                    max:2021,
                    axisLabel:{
                        formatter: function (value) {
                            var texts = [];
                            texts.push(String(value))
                            return texts;
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    data: ['辉瑞', '恩华', '阿斯泰来', '倍特', 'BMS', 'Lilly', '泰德']
                },
                series: [
                    {
                        name: 'Placeholder',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: {
                            borderColor: 'transparent',
                            color: 'transparent'
                        },
                        emphasis: {
                            itemStyle: {
                                borderColor: 'transparent',
                                color: 'transparent'
                            }
                        },
                        data: [2016, 2015, 2017, 2018, 2020, 2019, 2015]
                    },
                    {
                        name: 'Expenses',
                        type: 'bar',
                        stack: 'Total',
                        label: {
                            show: true,
                            position: 'bottom'
                        },
                        data: [4, 7, 4, 3, 1, 2, 6]
                    }
                ]
            }
            // 绘制图表
            this.waterfullChart.setOption(option)
            // 入栈
            // this.pushStack(mapName, partData, geoJson)
        }
    }
}
</script>

<style scoped lang="scss">
.waterfullWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    height: 800px;
    .chart {
        width: 100%;
        height: 100%;
        padding: 10px;
    }
}
</style>
