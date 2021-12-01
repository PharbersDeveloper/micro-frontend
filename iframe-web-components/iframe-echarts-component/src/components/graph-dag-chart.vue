<template>
    <div class="graphWrap">
        <div class="show_area">
            <div class="show_header">
                <div class="show_header_left">
                    <input type="text">
                    <select name="" id=""></select>
                </div>
                <div class="show_header_right">
                    <button>构建DAG</button>
                    <button>脚本</button>
                    <button>数据集</button>
                </div>
            </div>
            <div ref="chart" class="chart"></div>
        </div>
        <div class="opt_area">
            <div class="opt_header">
                <img :src="header_icon" alt="">
                <div class="dataset_name">{{daName}}</div>
            </div>
            <div class="opt_icon_area">
                <div class="fir_icon_row">
                    <img :src="label_icon" alt="">
                    <img :src="table_icon" alt="">
                    <img :src="star_icon" alt="">
                    <img :src="doc_icon" alt="">
                    <img :src="share_icon" alt="">
                    <img :src="hide_icon" alt="">
                </div>
                <div class="sec_icon_row">
                    <img :src="delete_icon" alt="">
                    <img :src="del_icon_black" alt="">
                </div>
            </div>
            <div class="data_id_area">
                <div class="data_id_opt">
                    <div>数据 ID：</div>
                    <select name="data_id_sel" id="" class="data_id_sel"></select>
                </div>
                <div class="run_btn">
                    <button>Run</button>
                </div>
            </div>
            <div class="scripts">
                <img :src="py_icon" alt="">
                <img :src="pySpark_icon" alt="">
                <img :src="R_icon" alt="">
                <img :src="sparkR_icon" alt="">
            </div>
        </div>
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
            projectId: "",
            header_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/DS%E4%B8%8A%E4%BC%A0(1).svg",
            label_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/tag.svg",
            table_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6-%E8%A1%A8%E6%A0%BC(1).svg",
            star_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E6%94%B6%E8%97%8F.svg",
            doc_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/new-document-dashboard.svg",
            share_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/share.svg",
            delete_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/delete_r.svg",
            del_icon_black: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E5%88%A0%E9%99%A4+(1)(1).svg",
            hide_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E9%9A%90%E8%97%8F.svg",
            py_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/Python.svg",
            pySpark_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/PySpark.svg",
            R_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/R.svg",
            sparkR_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/SparkR.svg",
            daName: "datasetName"
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
        this.datasource.projectId = this.projectId || 'JfSmQBYUpyb4jsei'
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
                backgroundColor: '#f7f7f7',
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
.graphWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 40px);
    background: #f7f7f7;
    box-sizing: border-box;
    .show_area {
        width: 100%;
        height: 100%;
        padding: 10px;
        .show_header {
            display: flex;
            justify-content: space-between;
            padding: 20px 10px;
            input, button {
                margin: 0 10px;
            }
        }
    }
    .chart {
        width: calc(100vw - 320px);
        height: 100%;
        // padding: 10px;
    }
    .opt_area {
        width: 300px;
        height: calc(100vh - 40px);
        background: #f5f5f5;
        border-left: 1px solid #979797;
        display: flex;
        flex-direction: column;
        .opt_header {
            display: flex;
            height: 40px;
            align-items: center;
            background: #fff;
            border-bottom: 1px solid #ccc;
            img {
                width: 40px;
                height: 40px;
                margin-right: 10px;
            }
        }
        .opt_icon_area {
            padding: 20px;
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            border-bottom: 1px solid #ccc;
            img {
                width: 25px;
                height: 25px;
                margin: 10px;
            }
        }
        .data_id_area {
            height: 190px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            padding: 20px;
            .data_id_opt {
                .data_id_sel {
                    width: 150px;
                    height: 20px;
                    margin-left: 30px;
                    margin-top: 10px;
                }
            }
            .run_btn {
                display: flex;
                justify-content: flex-end;
                button {
                    width: 80px;
                    height: 24px;
                    background: #ececed;
                    border-radius: 2px;
                    border: none;
                    color: #BCBAC4;
                }
            }
        }
        .scripts {
            display: flex;
            justify-content: space-between;
            padding: 20px;
            img {
                widows: 30px;
                height: 30px;
            }
        }
    }
}
</style>
