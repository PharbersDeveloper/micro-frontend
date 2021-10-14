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
            data: []
        }
    },
    mounted () {
        this.initChart()
    },
    methods: {
        // 显示左侧名称
        initDataName(){
            var nameList = []
            for (var i = 0; i < this.data.length; i++) {
                nameList.push(this.data[i].name)
            }
            return nameList
        },
        //计算统计值和最高值
        initData(val){
            var serie = [];
            for (var i = 0; i < this.data.length; i++) {
                var num = 0
                if(val == 'tjz'){//计算统计值
                    num = this.data[i].tjz
                }else if (val == 'zgz') {//计算最高值
                    num = this.data[i].zgz
                }
                var total = (parseFloat(this.data[i].tjz) + parseFloat(this.data[i].zgz)).toFixed(2);
                var numcount = this.Percentage(num,total)
                serie.push(numcount);
            }
            return serie;
        },
        //计算两者占比
        Percentage(num, total) {
            return (Math.round(num / total * 10000) / 100.00);// 小数点后两位百分比
        },
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
            const accessToken = this.getCookie("access_token") || "78ab2dc53134441a1b66c03db716c790cdc1ef180ae8eb88da8a9a7ed4d7806b"
            let body = {"query":"select max(sales) as maxsalex, avg(sales) as avgsales, avg(units) as avgunits, `标准省份名称` as province from phmax.data_wide where province != 'null' group by province","schema":["maxsalex","avgsales", "avgunits", "province"]}
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
            this.data = [
                { "name": "testOne", "tjz": 13, "zgz": 271},
                { "name": "testTwo", "tjz": 68.28, "zgz": 78.6},
                { "name": "testThree", "tjz": 85, "zgz": 291}
            ]
            let option = {
                color: ['#81C1DC', '#3488AD', '#00557C'],//设置颜色
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function(params) {// 这里鼠标悬浮显示对应item的每项数值
                        var relVal = params[0].name;
                        relVal += '<br/>' + params[0].marker + params[0].seriesName + ' : ' + that.data[params[0].dataIndex].tjz;// 统计值
                        relVal += '<br/>' + params[1].marker + params[1].seriesName + ' : ' + that.data[params[0].dataIndex].zgz;// 最高值
                        return relVal;
                    }
                },
                // 顶部显示
                legend: {
                    data: ['统计值', '最高值']
                },
                // 设置下方图标的位置
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    top:'7%',
                    containLabel: true
                },
                // 设置X轴的参数
                xAxis: {
                    type: 'category',
                    data: this.initDataName()// 这里是显示名称
                },
                // 设置Y轴的参数
                yAxis: [
                    {  
                        type: 'value',
                        max : 100,// 设置最大值是多少
                        splitNumber: 5,// 设置分几段显示
                        axisLabel: {  
                            show: true,  
                            interval: 'auto',  
                            formatter: '{value} %'  // 给每个数值添加%
                        },  
                        show: true
                    }
                ],
                // 设置每个item的参数
                series: [{
                    name: '统计值',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 20,
                    label: {
                        show: true,
                        position: 'insideLeft',//在左边显示
                        formatter: '{c}%'// 给计算后的数值添加%
                    },
                    //data: [13, 68.28, 85]
                    data: this.initData('tjz')// 计算对应的百分比
                },
                {
                    name: '最高值',
                    barWidth: 20,
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: true,
                        position: 'insideRight',// 在右边显示
                        formatter: '{c}%'
                    },
                    data: this.initData('zgz')
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
