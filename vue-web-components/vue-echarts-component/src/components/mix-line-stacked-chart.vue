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
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    bottom:'-5',
                    data:['111','222','333','444','555','百度','谷歌','必应','其他']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        splitLine:false
                    }
					
                ],
                series : [
                    {
                        name:'111',
                    	barWidth: 20,
                        type:'bar',
                        stack: '广告',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'222',
                        type:'bar',
                    	barWidth: 20,
                        stack: '广告',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'333',
                        type:'bar',
                    	barWidth: 20,
                        stack: '广告',
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'444',
                        type:'line',
                        stack: '广告',
                        data:[150, 232, 201, 154, 190, 330, 410]
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
