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
            <div class="viewport" ref="viewport">
                <div ref="chart" class="chart"></div>
            </div>
        </div>

        <div class="opt_area">
            <div class="opt_header">
                <img :src="icon_header" alt="">
                <div class="dataset_name">{{selectItemName}}</div>
            </div>
            <div class="opt_icon_area">
                <div class="fir_icon_row">
                    <img :src="this.defs.iconsByName('tag')" alt="">
                    <img :src="this.defs.iconsByName('table')" alt="">
                    <!-- <img :src="this.defs.iconsByName('star')" alt="">
                    <img :src="this.defs.iconsByName('new-document-dashboard')" alt="">
                    <img :src="this.defs.iconsByName('share')" alt="">
                    <img :src="this.defs.iconsByName('hide')" alt=""> -->
                    <img :src="this.defs.iconsByName('run')" alt=""
                        @click="on_click_runDag">
                    <img v-if="retryButtonShow && selectItem"
                        :src="this.defs.iconsByName('run', 'current')" alt=""
                        @click="on_click_retry_dag('self_only')">
                    <img v-if="retryButtonShow && selectItem"
                        :src="this.defs.iconsByName('run', 'to')" alt=""
                        @click="on_click_retry_dag('downstream')">
                    <img v-if="retryButtonShow  && selectItem"
                        :src="this.defs.iconsByName('run', 'from')" alt=""
                        @click="on_click_retry_dag('upstream')">
                    <img v-if="!retryButtonShow || !selectItem"
                        :src="this.defs.iconsByName('run', 'current-reverse')" alt="">
                    <img v-if="!retryButtonShow || !selectItem"
                        :src="this.defs.iconsByName('run', 'from-reverse')" alt="">
                    <img v-if="!retryButtonShow || !selectItem"
                        :src="this.defs.iconsByName('run', 'to-reverse')" alt="">
                    <img v-if="!retryButtonShow || !selectItem"
                        :src="this.defs.iconsByName('stop')" alt="">
                </div>
                <div class="sec_icon_row">
                    <img :src="this.defs.iconsByName('delete_r')" alt="">
                    <img :src="this.defs.iconsByName('del_icon_black')" alt="">
                </div>
            </div>
            <div class="scripts_area">
                <div class="script_title">脚本</div>
                <div class="scripts">
                    <img :src="this.defs.iconsByName('python')" alt="">
                    <img :src="this.defs.iconsByName('pyspark')" alt="">
                    <img :src="this.defs.iconsByName('r')" alt="">
                    <img :src="this.defs.iconsByName('sparkr')" alt="">
                </div>
            </div>
        </div>

        <run-dag-dialog
            v-if="showRunJson"
            :textConf="textConf"
            :projectId="projectId"
            @confirmeRunDag="confirmeRunDag"
            @closeRunDagDialog="closeRunDagDialog"
        ></run-dag-dialog>

        <dag-logs-dialog
            v-if="this.logsPolicy.showDagLogs"
            :runId="runId"
            :jobShowName="jobShowName"
            :projectName="projectName"
            :representId="representId"
            @closeLogDialog="this.logsPolicy.closeLogDialog"
        ></dag-logs-dialog>

        <div class="job_status_area">
            <div class="job_status" v-for="(item, index) in failedLogs" :key="index">
                <div class="job_notice">
                    <div class="item title">Job failed</div>
                    <div class="item" :title="jobShowName">{{item.jobShowName}}</div>
                </div>
                <button @click="showLogs(item.data, item.representId)">Logs</button>
            </div>
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

        <progress-bar
            v-if="showProgress"
            @closeProgress="closeProgress"
            :progressOver="progressOver">
        </progress-bar>

    </div>
</template>
<script>
// import * as d3_base from "d3";
// import * as d3_dag from "d3-dag";
import PhDagDatasource from './model/datasourcev2'
import PhRenderPolicy from './policy/render/dag-render-policy'
import PhDagDefinitions from './definitions/definitions'
import PhLogsPolicy from './policy/logs/log-policy'
import runDagDialog from './run-dag-dialog.vue'
import dagLogsDialog from './dag-log-dialog.vue'
import progressBar from './progress-bar-type.vue'
import { hostName } from "../config/envConfig"
// import noticeService from './model/notice-service'

export default {
    data: () => {
        return {
            name: 'dag',
            needRefresh: 0,
            projectId: "",
            flowVersion: "",
            icon_header: "", //this.defs.iconsByName('DSuploaded'),
            selectItem: null,
            showRunJson: false,
            runId: "",
            representId: "",
            failedLogs: [],
            projectName: "ETL_Iterator",
            loading: false,
            jobShowName: "",
            selectItemName: "", //单击的dag的名字
            responseArr: [],
            showProgress: false, //进度条弹窗是否显示
            textConf: {}, //运行弹框textarea的默认值
            progressOver: false, //进度条是否停止
            registerJobEventName: "",
            retryButtonShow: false
        }
    },
    components: {
        runDagDialog,
        dagLogsDialog,
        progressBar
    },
    props: {
        datasource: {
            type: Object,
            default: function() {
                return new PhDagDatasource('1')
            }
        },
        renderPolicy: {
            type: Object,
            default: function() {
                return new PhRenderPolicy('1', this)
            }
        },
        defs: {
            type: Object,
            default: function() {
                return new PhDagDefinitions('1')
            }
        },
        logsPolicy: {
            type: Object,
            default: function() {
                return new PhLogsPolicy('1', this)
            }
        }
        // noticeService: {
        //     type: Object,
        //     default: function() {
        //         return new noticeService('1')
        //     }
        // },
    },
    mounted () {
        let href = window.location.href
        console.log(href)
        let paramArr = href.split("?")[1].split("&")
        this.projectId = this.getUrlParam(paramArr, "projectId")
        this.projectName = this.getUrlParam(paramArr, "projectName")
        this.flowVersion = this.getUrlParam(paramArr, "flowVersion")
        // 判断环境
        let env = this.getUrlParam(paramArr, "environment")
        this.datasource.projectId = this.projectId
        this.initChart()
        window.addEventListener('message', this.handleMessage)
        this.registerJobEventName = "runDag" + new Date().getTime().toString()
    },
    destroyed () {
        // 注意移除监听！注意移除监听！注意移除监听！
        window.removeEventListener('message', this.handleMessage)
    },
    methods: {
        getUrlParam(arr, value) {
            let data = arr.find(item => item.indexOf(value) > -1)
            return data ? decodeURI(data).split("=")[1] : undefined
        },
        handleMessage(event) {
            let that = this
            if (event.data.message) {
                if (event.data.message.cmd === "render_dag") {
                    console.log("iframe接收的", event.data.message.cmd)
                    that.runDagCallback(event.data.message, that)
                }
                if(event.data.message.cmd === "finish_dag") {
                    console.log("iframe接收的dag finish", event.data.message.cmd)
                    that.runDagFinishCallback(event.data.message, that)
                }
            }
        },
        //关闭进度条
        closeProgress() {
            this.showProgress = false
        },
        //二次trigger清空所有状态
        resetDagStatus(val) {
            let that = this
            // 1.进度条状态
            this.progressOver = false
            this.showProgress = true
            // 2.节点状态
            let data = this.datasource.data
            data.map((it, index) => {
                it.status = it["attributes"]["runtime"]
                that.refreshNodeStatus(it)
            })
            // 3.log弹窗
            this.failedLogs = []
        },
        // 点击trigger，弹窗选择version
        on_click_runDag() {
            let roots = []
            this.datasource.data.forEach(item => {
                if(item.attributes.runtime === "output_index") {
                    roots.push(item)
                } else if(item.attributes.ctype === "node" && item.parentIds.length === 0) {
                    roots.push(item)
                }
            })
            let datasetsArr = []
            roots.forEach(item => {
                datasetsArr.push({
                    "name": item.attributes.name,
                    "representId": item.representId,
                    "version": [],
                    "cat": item["attributes"]["runtime"],
                    "prop": item.attributes.prop !== "" ? this.handlerJSON(item.attributes.prop) : ""
                })
            })
            this.textConf = {
                "datasets": datasetsArr,
                "scripts": [],
                "userConf": {}
            }
            this.showRunJson = true
        },
        /**
         * 1. 触发整体dag运行
         * 2. 进度条清0
         * 3. 清除节点状态
         * 4. 关闭log弹窗
         * 5. 开始正常run dag流程
         */
        async confirmeRunDag(data) {
            this.loading = true
            this.showProgress = false
            const url = `${hostName}/phdagtrigger`
            const accessToken = this.getCookie("access_token") || this.datasource.debugToken
            let confData = data.args.param.jsonValue
            confData.ownerId = this.getCookie("account_id") || "c89b8123-a120-498f-963c-5be102ee9082"
            confData.showName = this.getCookie("user_name_show") ? decodeURI(decodeURI(this.getCookie("user_name_show"))) : "dev环境"
            confData.jobDesc = this.registerJobEventName
            let body = {
                "project_name": this.projectName,
                "flow_version": "developer",
                "conf": confData
            }
            let options = {
                method: "POST",
                headers: {
                    "Authorization": accessToken,
                    "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8',
                    "accept": "application/json"
                },
                body: JSON.stringify(body)
            }
            let results = await fetch(url, options).then(res => res.json())
            if(results.status === "failed") {
                alert("启动出错，请重新运行！")
                this.loading = false
                return false
            }
            const dag_run_id = results.data.dag_run_id.split("_")
            // const time = new Date(dag_run_id.pop()).getTime()
            // const runnerId = dag_run_id.join("_") + "_" + time
            // console.info(runnerId)
            window.parent.postMessage({
                message: {
                    notification: {
                        eventName: this.registerJobEventName,
                        projectId: results.data.dag_id, // results.data.
                        id: results.data.run_id

                    },
                    executionStatus: {
                        // runnerId: results.data.dag_run_id,
                        id: results.data.run_id,
                        // projectId: dag_run_id.pop(),
                        eventName: "executionStatus" //+ runnerId
                    }
                }
            }, '*')
            this.showRunJson = false
            this.loading = false
            this.resetDagStatus("trigger")
        },
        /**
         *  trigger更新实时状态
         */
        runDagCallback(response, ele) {
            let that = this
            let represent_id = ""
            let payloadArr = JSON.parse(response.payload)
            console.log("payloadArr", payloadArr)
            this.responseArr = payloadArr
            let data = ele.datasource.data
            payloadArr.forEach(payload => {
                let status = payload["status"]
                let jobName = JSON.parse(payload.message).cnotification.jobName
                // 1.找到对应job节点并更新状态
                data.forEach((it,index) => {
                    if(jobName.indexOf(it.attributes.name) != -1) {
                        if(status === "success") {
                            it.status = "succeed"
                        } else if(status === "failed") {
                            it.status = "failed"
                            represent_id = it.representId
                        } else if(status === "running") {
                            it.status = "running"
                        }
                    }
                    that.refreshNodeStatus(it)
                })
                // 2.失败时出现弹框
                if(status === "failed") {
                    let showName = JSON.parse(payload.message).cnotification.jobShowName
                    let length = that.failedLogs.filter(it => it.jobShowName === showName)
                    if(length < 1) {
                        that.failedLogs.push({
                            data: payload,
                            jobShowName: showName,
                            representId: represent_id
                        })
                    }
                }
                console.log("failedLogs", that.failedLogs)
            })
        },
        // trigger更新整体状态
        runDagFinishCallback(response, ele) {
            let payload = JSON.parse(response.payload)
            let status = payload["status"]
            if(status != "running") {
                // 更新进度条
                this.progressOver = true
                this.retryButtonShow = true
            }
        },
        //更新节点状态
        refreshNodeStatus(node) {
            const that = this
            const d3 = Object.assign({}, d3_base, d3_dag)
            if (node["attributes"]["cat"] === "job") {
                d3.select("#" + node["attributes"]["name"]).selectAll("image")
                    .attr("xlink:href", ({data}) => {
                        const cat = data.category
                        let result = ""
                        if (data.status === "succeed") {
                            result = cat + "_succeed"
                        } else if (data.status === "failed") {
                            result = cat + "_failed"
                        } else if (data.status === "running"){
                            result = cat + "_running"
                        } else {
                            result = cat
                        }
                        // const reVal = that.statusFlags.find(x => x.name === result)
                        // return reVal.symbol
                        return ""
                    })
            }
        },
        /**
         * retry按钮
         * 1. 有第一次运行状态才可以点retry三个按钮
         * 2. 选择job之后修改名字，点运行时候出现弹窗提示
         */
        async on_click_retry_dag(data) {
            this.showProgress = false
            console.log("responseArr", this.responseArr)
            this.runId = JSON.parse(this.responseArr.message).cnotification.runId
            const url = `${hostName}/phdagtasktrigger`
            const accessToken = this.getCookie("access_token") || this.datasource.debugToken
            let body = {
                "project_name": this.projectName,
                "flow_version": "developer",
                "run_id": this.runId,
                "task_id": this.projectName + "_" + this.projectName + "_developer_" + this.selectItemName,
                "clean_cat": data //向上还是向下
                //  + "_" + this.selectItem["represent-id"]
            }
            let options = {
                method: "POST",
                headers: {
                    "Authorization": accessToken,
                    "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8',
                    "accept": "application/json"
                },
                body: JSON.stringify(body)
            }
            let results = await fetch(url, options).then(res => res.json())
            if(results.status === "failed") {
                alert("重新运行出错，请重新运行！")
                this.loading = false
                return false
            }
            const dag_run_id_retry = this.runId.split("_")
            const time_retry = new Date(dag_run_id_retry.pop()).getTime()
            const runnerId_retry = dag_run_id_retry.join("_") + "_" + time_retry
            window.parent.postMessage({
                message: {
                    dagRunCmd: this.registerJobEventName,
                    dagExecutionCmd: "executionStatus" + runnerId_retry
                }
            }, '*')
            this.showProgress = true
            this.progressOver = false
        },

        handlerJSON(str) {
            if (typeof str == 'string') {
                try {
                    let jsonValue = JSON.parse(str);
                    return jsonValue;
                } catch(e) {
                    return str
                }
            }
        },
        closeRunDagDialog() {
            this.showRunJson = false
        },
        async initChart () {
            // 初始化echarts实例
            await this.datasource.refreshData(this)
            // 发布前解注
            // document.domain = "pharbers.com"
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
        renderDag (data) {
            this.renderPolicy.renderDag(data, () => {
                const windowHeight = this.$refs.chart.offsetHeight
                this.$refs.viewport.scroll({
                    top: windowHeight / 2,
                    left: 0,
                    behavior: 'smooth'
                });
            })
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
.viewport {
    overflow: auto;
}

.graphWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    // height: calc(100vh - 40px);
    background: #f7f7f7;
    box-sizing: border-box;
    .job_status_area {
        position: absolute;
        bottom: 60px;
        right: 15px;
        .job_status {
            box-sizing: border-box;
            width: 240px;
            height: 70px;
            background: #FFFFFF;
            border: 1px solid #979797;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px;
            font-size: 20px;
            margin-bottom: 10px;
            .item {
                width: 120px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                cursor: pointer;
            }
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
        /*background-color: black;*/
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
            .dataset_name {
                width: 180px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
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
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
}
//界面未加载loading
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
