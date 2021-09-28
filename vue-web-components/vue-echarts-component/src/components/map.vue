<template>
  <div id="china_map_box">
      <div id="china_map"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts/map/js/china.js'
import neimenggu from '../assets/proviceMap/neimenggu.json'
import hulunbeiershi from '../assets/proviceMap/hulunbeiershi.json'
export default {
    data() {
        return {
            
        }
    },
    methods: {
        //初始化中国地图
        initEchartMap() {
            let that = this
            let mapDiv = document.getElementById('china_map');
            let chart = echarts.init(mapDiv);
            let name = "内蒙古";

            chart.resize({
                animation: {
                    duration: 1
                }
            })
            // let dataList = [
            //     {
            //         name: "南海诸岛",
            //         value: 100,
            //         eventTotal:100,
            //         specialImportant:10,
            //         import:10,
            //         compare:10,
            //         common:40,
            //         specail:20
            //     },
            //     {
            //         name: "北京",
            //         value: 1
            //     },
            //     {
            //         name: "内蒙古",
            //         value: 600
            //     }
            // ]
            let options = {
                // tooltip: {
                //     triggerOn: "mousemove",   //mousemove、click
                //     padding:8,
                //     borderWidth:1,
                //     borderColor:'#409eff',
                //     backgroundColor:'rgba(255,255,255,0.7)',
                //     textStyle:{
                //         color:'#000000',
                //         fontSize:13
                //     },
                //     formatter: function(e, t, n) {
                //         let data = e.data ? e.data : {};
                //         //模拟数据
                //         data.specialImportant = Math.random()*1000 | 0;
                //         data.import = Math.random()*1000 | 0;
                //         data.compare = Math.random()*1000 | 0;
                //         data.common = Math.random()*1000 | 0;
                //         data.specail = Math.random()*1000 | 0;

                //         let context = `
                //         <div>
                //             <p><b style="font-size:15px;">${data.name}</b>产品表现</b></p>
                //             <p class="tooltip_style"><span class="tooltip_left">事件总数</span><span class="tooltip_right">${data.value}</span></p>
                //             <p class="tooltip_style"><span class="tooltip_left">特别重大事件</span><span class="tooltip_right">${data.specialImportant}</span></p>
                //             <p class="tooltip_style"><span class="tooltip_left">重大事件</span><span class="tooltip_right">${data.import}</span></p>
                //             <p class="tooltip_style"><span class="tooltip_left">较大事件</span><span class="tooltip_right">${data.compare}</span></p>
                //             <p class="tooltip_style"><span class="tooltip_left">一般事件</span><span class="tooltip_right">${data.common}</span></p>
                //             <p class="tooltip_style"><span class="tooltip_left">特写事件</span><span class="tooltip_right">${data.specail}</span></p>
                //         </div>
                //         `
                //         return context;
                //     }
                // },
                // visualMap: {
                //     show:true,
                //     left: 26,
                //     bottom: 40,
                //     showLabel:true,
                //     inRange: {
                //         // 由深到浅
                //         color: [
                //             '#B29106',
                //             '#F9D43F',
                //             '#F9D43F',
                //             '#FBE074',
                //             '#F7E065',
                //             '#FCE99D',
                //             '#FBF5BA'
                //         ]
                //     }
                // },
                geo: {
                    map: "china",
                    // roam: true,
                    // zoom: 1,
                    layoutCenter: ['50%', '50%'],
                    layoutSize: '50%',
                    scaleLimit: {
                        min: 0.5,
                        max: 2
                    },
                    top: 200,
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
                        geoIndex: 0
                    }
                ]
            }
            echarts.registerMap(name,neimenggu);
            chart.setOption(options);
            chart.on('click', function(params){
                //根据点击的市，加载不同json
                let mapJson;
                switch(params.name){
                case '呼和浩特市':
                    mapJson = huhehaoteshi;
                    break;
                case '内蒙古':
                    options.geo.map = '内蒙古'
                    mapJson = neimenggu;
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
                //下面的name需要为“内蒙古”
                echarts.registerMap(name,mapJson);
                chart.setOption(options);
            })
        }
    },
    mounted() {
        this.$nextTick(()=>{
            this.initEchartMap();
        })
    
    }
};
</script>

<style>
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
