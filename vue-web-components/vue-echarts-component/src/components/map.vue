<template>
  <div id="china_map_box">
      <div id="china_map"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts/map/js/china.js'
import neimenggu from '../assets/proviceMap/neimenggu.json'
export default {
    data() {
        return {
            //echart 配制option  
            options: {
                tooltip: {
                    triggerOn: "mousemove",   //mousemove、click
                    padding:8,
                    borderWidth:1,
                    borderColor:'#409eff',
                    backgroundColor:'rgba(255,255,255,0.7)',
                    textStyle:{
                        color:'#000000',
                        fontSize:13
                    },
                    formatter: function(e, t, n) {
                        let data = e.data;
                        //模拟数据
                        data.specialImportant = Math.random()*1000 | 0;
                        data.import = Math.random()*1000 | 0;
                        data.compare = Math.random()*1000 | 0;
                        data.common = Math.random()*1000 | 0;
                        data.specail = Math.random()*1000 | 0;

                        let context = `
                        <div>
                            <p><b style="font-size:15px;">${data.name}</b>产品表现</b></p>
                            <p class="tooltip_style"><span class="tooltip_left">事件总数</span><span class="tooltip_right">${data.value}</span></p>
                            <p class="tooltip_style"><span class="tooltip_left">特别重大事件</span><span class="tooltip_right">${data.specialImportant}</span></p>
                            <p class="tooltip_style"><span class="tooltip_left">重大事件</span><span class="tooltip_right">${data.import}</span></p>
                            <p class="tooltip_style"><span class="tooltip_left">较大事件</span><span class="tooltip_right">${data.compare}</span></p>
                            <p class="tooltip_style"><span class="tooltip_left">一般事件</span><span class="tooltip_right">${data.common}</span></p>
                            <p class="tooltip_style"><span class="tooltip_left">特写事件</span><span class="tooltip_right">${data.specail}</span></p>
                        </div>
                        `
                        return context;
                    }
                },
                visualMap: {
                    show:true,
                    left: 26,
                    bottom: 40,
                    showLabel:true,
                    inRange: {
                        // 由深到浅
                        color: [
                            '#B29106',
                            '#F9D43F',
                            '#F9D43F',
                            '#FBE074',
                            '#F7E065',
                            '#FCE99D',
                            '#FBF5BA'
                        ]
                    }
                },
                geo: {
                    map: "china",
                    scaleLimit: {
                        min: 1,
                        max: 2
                    },
                    zoom: 1,
                    top: 120,
                    label: {
                        normal: {
                            show:true,
                            fontSize: "14",
                            color: "rgba(0,0,0,0.7)"
                        }
                    },
                    itemStyle: {
                        // 每一块图形设置
                        normal: {
                            // shadowBlur: 50,
                            // shadowColor: 'rgba(0, 0, 0, 0.2)',
                            borderColor: "rgba(0, 0, 0, 0.2)"
                        },
                        //高亮样式
                        emphasis: {
                            areaColor: "#f2d5ad",
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            borderWidth: 0
                        }
                    }
                },
                // 数据集
                series: [
                    {
                        type: "map",
                        geoIndex: 0,
                        data:[]
                    }
                ]
            },
            //echart data
            dataList: [
                {
                    name: "南海诸岛",
                    value: 100,
                    eventTotal:100,
                    specialImportant:10,
                    import:10,
                    compare:10,
                    common:40,
                    specail:20
                },
                {
                    name: "北京",
                    value: 540
                },
                {
                    name: "天津",
                    value: 130
                },
                {
                    name: "上海",
                    value: 400
                },
                {
                    name: "重庆",
                    value: 750
                },
                {
                    name: "河北",
                    value: 130
                },
                {
                    name: "河南",
                    value: 830
                },
                {
                    name: "云南",
                    value: 110
                },
                {
                    name: "辽宁",
                    value: 19
                },
                {
                    name: "黑龙江",
                    value: 150
                },
                {
                    name: "湖南",
                    value: 690
                },
                {
                    name: "安徽",
                    value: 60
                },
                {
                    name: "山东",
                    value: 39
                },
                {
                    name: "新疆",
                    value: 4
                },
                {
                    name: "江苏",
                    value: 31
                },
                {
                    name: "浙江",
                    value: 104
                },
                {
                    name: "江西",
                    value: 36
                },
                {
                    name: "湖北",
                    value: 52
                },
                {
                    name: "广西",
                    value: 33
                },
                {
                    name: "甘肃",
                    value: 7
                },
                {
                    name: "山西",
                    value: 5
                },
                {
                    name: "内蒙古",
                    value: 778
                },
                {
                    name: "陕西",
                    value: 22
                },
                {
                    name: "吉林",
                    value: 4
                },
                {
                    name: "福建",
                    value: 18
                },
                {
                    name: "贵州",
                    value: 5
                },
                {
                    name: "广东",
                    value: 98
                },
                {
                    name: "青海",
                    value: 1
                },
                {
                    name: "西藏",
                    value: 0
                },
                {
                    name: "四川",
                    value: 44
                },
                {
                    name: "宁夏",
                    value: 4
                },
                {
                    name: "海南",
                    value: 22
                },
                {
                    name: "台湾",
                    value: 3
                },
                {
                    name: "香港",
                    value: 5
                },
                {
                    name: "澳门",
                    value: 555
                }
            ]
        };
    },
    methods: {
    //初始化中国地图
        initEchartMap() {
            let that = this
            let mapDiv = document.getElementById('china_map');
            let myChart = echarts.init(mapDiv);
            myChart.setOption(this.options);
            //下面的事件需要写在上面的getDownMap()里
            myChart.on('click', function(params){
                debugger
                //如果数组没有代表到了区县，跳出循环
                // if(that.mapList.indexOf(params.name) < 0){
                //     return
                // }
                //根据点击的市，加载不同json
                let mapJson;
                switch(params.name){
                case "内蒙古":
                    mapJson = neimenggu;
                    break;
                case '包头市':
                    mapJson = baotoushi;
                    break;
                case '乌海市':
                    mapJson = wuhaishi;
                    break;
                case '赤峰市':
                    mapJson = chifengshi;
                    break;
                case '通辽市':
                    mapJson = tongliaoshi;
                    break;
                case '鄂尔多斯市':
                    mapJson = eerduosishi;
                    break;
                case '呼伦贝尔市':
                    mapJson = hulunbeiershi;
                    break;
                case '巴彦淖尔市':
                    mapJson = bayannaoershi;
                    break;
                case '乌兰察布市':
                    mapJson = wulanchabushi;
                    break;
                case '兴安盟':
                    mapJson = xinganmeng;
                    break;
                case '锡林郭勒盟':
                    mapJson = xilinguolemeng;
                    break;
                case '阿拉善盟':
                    mapJson = alashanmeng;
                    break; 
                }
                //下面的name需要为“内蒙古”，而不是具体点击的市
                echarts.registerMap('内蒙古',mapJson);
                myChart.setOption(that.options);
            })
        },
        //修改echart配制
        setEchartOption(){
            this.options.series[0]['data'] = this.dataList;
        }
    },
    created() {
        this.setEchartOption();
    },
    mounted() {
        this.$nextTick(()=>{
            this.initEchartMap();
        })
    
    }
};
</script>

<style scoped>
    #china_map_box {
        height: 100%;
        position: relative;
    }
    #china_map_box #china_map{
        height: 100%;
    }
     #china_map_box .china_map_logo{
        position: absolute;
        top: 0;
        left: 0;
        width:45px;
     }
</style>
<style>
  #china_map .tooltip_style{
      line-height:1.7;
      overflow: hidden;
  }
  #china_map .tooltip_left{
      float: left;
  }
  #china_map .tooltip_right{
      float: right;
  }

</style>
