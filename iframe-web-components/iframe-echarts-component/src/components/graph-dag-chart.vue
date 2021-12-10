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
                    <img :src="run_icon" alt="" @click="on_click_runDag">
                </div>
                <div class="sec_icon_row">
                    <img :src="delete_icon" alt="">
                    <img :src="del_icon_black" alt="">
                </div>
            </div>
            <!-- <div class="data_id_area">
                <div class="data_id_opt">
                    <div>数据 ID：</div>
                    <select name="data_id_sel" id="" class="data_id_sel"></select>
                </div>
                <div class="run_btn">
                    <button>Run</button>
                </div>
            </div> -->
            <div class="scripts_area">
                <div class="script_title">脚本</div>
                <div class="scripts">
                    <img :src="py_icon" alt="">
                    <img :src="pySpark_icon" alt="">
                    <img :src="R_icon" alt="">
                    <img :src="sparkR_icon" alt="">
                </div>
            </div>
        </div>
        <run-dag-dialog 
            v-if="showRunJson"
            @confirmeRunDag="confirmeRunDag"
            @closeRunDagDialog="closeRunDagDialog"
        ></run-dag-dialog>
        <div class="job_status" v-if="jobStatus">
            <div class="job_notice">
                <div class="item title">Job failed</div>
                <div class="item">Job name</div>
            </div>
            <button @click="showLogs">Logs</button>
        </div>
        <div v-if="loading">
            <div id="loadingio-spinner-double-ring-ho1zizxmctu">
            <div class="ldio-400lpppmiue">
                <div></div><div></div>
                <div><div></div></div>
                <div><div></div></div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import * as echarts from 'echarts'
import PhDagDatasource from './model/datasource'
import noticeService from './model/notice-service'
import runDagDialog from './run-dag-dialog.vue'

export default {
    data: () => {
        return {
            name: 'dag',
            needRefresh: 0,
            projectId: "",
            projectName: "",
            flowVersion: "",
            jobId: "ETL_Iterator_ETL_Iterator_developer",
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
            run_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E5%BC%80%E5%A7%8B1.svg",
            daName: "datasetName",
            showRunJson: false,
            jobStatus: true,
            jobName: "ETL_Iterator_ETL_Iterator_developer_compute_111out_0Jj6bBGAh6vIqs5",
            runId: "ETL_Iterator_ETL_Iterator_developer_2021-12-10T07_27_48+00_00",
            loading: false
        }
    },
    components: {
        runDagDialog
    },
    props: {
        datasource: {
            type: Object,
            default: function() {
                return new PhDagDatasource('1')
            }
        },
        noticeService: {
            type: Object,
            default: function() {
                return new noticeService('1')
            }
        }
    },
    mounted () {
        let href = window.location.href
        let paramArr = href.split("?")[1].split("&")
        this.projectId = paramArr[0].split('=')[1]
        this.projectName = paramArr[1].split("=")[1]
        this.flowVersion = paramArr[2].split("=")[1]
        this.datasource.projectId = this.projectId || 'JfSmQBYUpyb4jsei'
        this.initChart()
        this.noticeService.observer()
    },
    methods: {
        showLogs() {
            // this.$router.push("/dag-logs")
            this.$router.push({path: "/dag-logs", query:{jobId: this.jobId, runId: this.runId, jobName: this.jobName}});
        },
        async confirmeRunDag(data) {
            /**
             * 1. 调接口触发dag(jobId = projectName + dagName + flowVersion)
             * 2. query notification接收正确或错误消息
             */
            this.loading = true
            this.showRunJson = false
            this.jobId = `${this.projectName}_${this.projectName}_${this.flowVersion}`
            this.noticeService.jobId = this.jobId
            console.log(this.noticeService)
            const url = `http://52.83.9.2:8000/api/dag_run/dag/run/${this.jobId}`
            const accessToken = this.getCookie("access_token") || "34e15f53cf007d615a2cbed55a21041e4da8e7a3b9883eac12ef40e84915afb3"
            let options = {
                method: "GET",
                headers: {
                    "Authorization": accessToken,
                    "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8',
                    "accept": "application/json",
                    "mode":'cors',
                    "access-control-allow-origin": "*"
                }
            }
            let result = await fetch(url).then(res => res.json())
            let queryId = result.run_id
            let timeout = data.args.param.timeout
            this.noticeService.register("notification", queryId, this.runDagCallback, this, this.projectId, timeout)
        },
        runDagCallback(response, ele) {
            let jobCat = response.data[0].attributes["job-cat"]
            this.jobName = JSON.parse(response.data[0].attributes.message).cnotification.jobName //更新状态用
            this.runId = JSON.parse(response.data[0].attributes.message).cnotification.runId
            if(jobCat == "failed") {
                //跳转下一页面
                this.jobStatus = true
            }
            this.loading = false
        },
        on_click_runDag() {
            this.showRunJson = true
        },
        closeRunDagDialog() {
            this.showRunJson = false
        },
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
    // height: calc(100vh - 40px);
    background: #f7f7f7;
    box-sizing: border-box;
    .job_status {
        box-sizing: border-box;
        width: 400px;
        height: 120px;
        background: #FFFFFF;
        border: 1px solid #979797;
        position: absolute;
        bottom: 60px;
        right: 300px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        font-size: 20px;
        .title {
            color: red;
        }
        button {
            width: 59px;
            height: 32px;
            border: 1px solid #EEEDF7;
            border-radius: 2px;
            font-size: 14px;
            color: #7163C5;
            letter-spacing: 0;
            text-align: center;
            line-height: 20px;
            font-weight: 500;
            cursor: pointer;
        }
    }
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
        height: calc(100vh - 90px);
        // height: 100%;
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
                cursor: pointer;
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
        .scripts_area {
            padding: 20px;
            .scripts_title {
                font-family: PingFangSC-Medium;
                font-size: 12px;
                color: #000000;
                text-align: center;
                font-weight: bold;
            }
            .scripts {
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
                img {
                    widows: 30px;
                    height: 30px;
                }
            }
        }
    }
}
/* //界面未加载loading */
@keyframes ldio-400lpppmiue {
    0% {
    transform: rotate(0)
    }

    100% {
    transform: rotate(360deg)
    }
}

.ldio-400lpppmiue div {
    box-sizing: border-box !important
}

.ldio-400lpppmiue>div {
    position: absolute;
    width: 68px;
    height: 68px;
    top: 16px;
    left: 16px;
    border-radius: 50%;
    border: 4px solid #000;
    border-color: #f5c924 transparent #f5c924 transparent;
    animation: ldio-400lpppmiue 1s linear infinite;
}

.ldio-400lpppmiue>div:nth-child(2),
.ldio-400lpppmiue>div:nth-child(4) {
    width: 58px;
    height: 58px;
    top: 21px;
    left: 21px;
    animation: ldio-400lpppmiue 1s linear infinite reverse;
}

.ldio-400lpppmiue>div:nth-child(2) {
    border-color: transparent #747789 transparent #747789
}

.ldio-400lpppmiue>div:nth-child(3) {
    border-color: transparent
}

.ldio-400lpppmiue>div:nth-child(3) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
}

.ldio-400lpppmiue>div:nth-child(3) div:before,
.ldio-400lpppmiue>div:nth-child(3) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 4px;
    height: 4px;
    top: -4px;
    left: 28px;
    background: #f5c924;
    border-radius: 0%;
    box-shadow: 0 64px 0 0 #f5c924;
}

.ldio-400lpppmiue>div:nth-child(3) div:after {
    left: -4px;
    top: 28px;
    box-shadow: 64px 0 0 0 #f5c924;
}

.ldio-400lpppmiue>div:nth-child(4) {
    border-color: transparent;
}

.ldio-400lpppmiue>div:nth-child(4) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
}

.ldio-400lpppmiue>div:nth-child(4) div:before,
.ldio-400lpppmiue>div:nth-child(4) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 4px;
    height: 4px;
    top: -4px;
    left: 23px;
    background: #747789;
    border-radius: 0%;
    box-shadow: 0 54px 0 0 #747789;
}

.ldio-400lpppmiue>div:nth-child(4) div:after {
    left: -4px;
    top: 23px;
    box-shadow: 54px 0 0 0 #747789;
}

#loadingio-spinner-double-ring-ho1zizxmctu {
    backdrop-filter: blur(1px);
    background: rgba(200, 0,0, 0.05);
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
    /* background: none; */
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.ldio-400lpppmiue {
    /* width: 100%;
    height: 100%; */
    position: relative;
    transform: translateZ(0) scale(0.8);
    backface-visibility: hidden;
    transform-origin: 0 0;
    /* see note above */
}

.ldio-400lpppmiue div {
    box-sizing: content-box;
}
</style>
