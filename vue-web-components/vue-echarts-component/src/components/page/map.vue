<template>
  <div id="china_map_box">
      <div id="china_map"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts/map/js/china.js'
import neimenggu from '../../assets/proviceMap/neimenggu.json'
import hulunbeiershi from '../../assets/proviceMap/hulunbeiershi.json'
export default {
    data() {
        return {
            
        }
    },
    methods: {
        getDownMap(){
            let that = this;
            let mapDiv = document.getElementById('china_map');
            let chart = echarts.init(mapDiv);
            let name = "内蒙古";
            let option = {
                geo: {
                    map: name, //使用 registerMap 注册的地图名称
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: 20
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(147, 235, 248, 1)',
                            borderWidth: 1,
                            areaColor: {//背景色
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [{
                                    offset: 0, 
                                    color: 'rgba(4, 129, 181, 0.2)' // 0% 处的颜色
                                }, {
                                    offset: 1, 
                                    color: 'rgba(4, 129, 181, 0.4)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 0
                        }
                    }
                },
                series: [
                    {
                        type: "map",
                        geoIndex: 0,
                        data: []
                    }
                ]
            }

            echarts.registerMap(name,neimenggu);//这句是由于返回的时候点击某个按钮，又执行了这个方法，但是地图不能加载，所以我注册了一下，用的json 数据，可写可不写
            chart.setOption(option);//注意这句要放在registerMap后面，要不然地图就变成了双击才能下钻！！！！md，找了好久原因
            chart.on('click', function(params){
                //如果数组没有代表到了区县，跳出循环
                // if(that.mapList.indexOf(params.name) < 0){
                //     return
                // }
                //根据点击的市，加载不同json
                let mapJson;
                switch(params.name){
                case '呼和浩特市':
                    mapJson = huhehaoteshi;
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
                echarts.registerMap(name,mapJson);
                chart.setOption(option);
            })

        }

    },
    created() {
        // this.setEchartOption();
    },
    mounted() {
        this.$nextTick(()=>{
            this.getDownMap();
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
