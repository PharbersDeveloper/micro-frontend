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
                    <img :src="label_icon" alt="">
                    <img :src="table_icon" alt="">
                    <!-- <img :src="star_icon" alt="">
                    <img :src="doc_icon" alt="">
                    <img :src="share_icon" alt="">
                    <img :src="hide_icon" alt=""> -->
                    <img :src="run_icon" alt=""
                        @click="on_click_runDag">
                    <img v-if="retryButtonShow && selectItem"
                        :src="run_script" alt=""
                        @click="on_click_retry_dag('self_only')">
                    <img v-if="retryButtonShow && selectItem"
                        :src="run_to_script" alt=""
                        @click="on_click_retry_dag('downstream')">
                    <img v-if="retryButtonShow  && selectItem"
                        :src="run_from_script" alt=""
                        @click="on_click_retry_dag('upstream')">
                    <img v-if="!retryButtonShow || !selectItem"
                        :src="run_script_gray" alt="">
                    <img v-if="!retryButtonShow || !selectItem"
                        :src="run_from_script_gray" alt="">
                    <img v-if="!retryButtonShow || !selectItem"
                        :src="run_to_script_gray" alt="">
                    <img v-if="!retryButtonShow || !selectItem"
                        :src="stop_icon" alt="">
                </div>
                <div class="sec_icon_row">
                    <img :src="delete_icon" alt="">
                    <img :src="del_icon_black" alt="">
                </div>
            </div>
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
            :textConf="textConf"
            :projectId="projectId"
            @confirmeRunDag="confirmeRunDag"
            @closeRunDagDialog="closeRunDagDialog"
        ></run-dag-dialog>

        <dag-logs-dialog
            v-if="showDagLogs"
            :runId="runId"
            :jobShowName="jobShowName"
            :projectName="projectName"
            :representId="representId"
            @closeLogDialog="closeLogDialog"
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
import * as d3_base from "d3";
import * as d3_dag from "d3-dag";
import PhDagDatasource from './model/datasourcev2'
import noticeService from './model/notice-service'
import runDagDialog from './run-dag-dialog.vue'
import dagLogsDialog from './dag-log-dialog.vue'
import progressBar from './progress-bar-type.vue'

export default {
    data: () => {
        return {
            name: 'dag',
            needRefresh: 0,
            projectId: "",
            flowVersion: "",
            icon_header: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/DSuploaded.svg",
            label_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/tag.svg",
            table_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6-%E8%A1%A8%E6%A0%BC(1).svg",
            star_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E6%94%B6%E8%97%8F.svg",
            doc_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/new-document-dashboard.svg",
            share_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/share.svg",
            delete_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/delete_r.svg",
            del_icon_black: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E5%88%A0%E9%99%A4+(1)(1).svg",
            hide_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E9%9A%90%E8%97%8F.svg",
            py_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/python%E6%AD%A3%E5%B8%B8.svg",
            pySpark_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/Pyspark%E6%AD%A3%E5%B8%B8.svg",
            R_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/R%E6%AD%A3%E5%B8%B8.svg",
            sparkR_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/sparkR%E6%AD%A3%E5%B8%B8.svg",
            run_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E5%BC%80%E5%A7%8B1.svg",
            run_to_script: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E8%BF%90%E8%A1%8C%E8%87%B3%E5%BD%93%E5%89%8D%E8%84%9A%E6%9C%AC.svg",
            run_from_script: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E7%94%B1%E5%BD%93%E5%89%8D%E8%84%9A%E6%9C%AC%E5%BC%80%E5%A7%8B%E8%BF%90%E8%A1%8C.svg",
            run_script: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E9%87%8D%E6%96%B0%E8%BF%90%E8%A1%8C%E5%BD%93%E5%89%8D%E8%84%9A%E6%9C%AC.svg",
            run_script_gray: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E9%A1%BA%E6%97%B6%E9%92%88%E7%81%B0%E8%89%B2%E5%8D%95%E4%B8%AA.svg",
            run_from_script_gray: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E9%A1%BA%E6%97%B6%E9%92%88%E7%81%B0%E8%89%B2.svg",
            run_to_script_gray: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E9%80%86%E6%97%B6%E9%92%88%E7%81%B0%E8%89%B2.svg",
            stop_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E5%81%9C%E6%AD%A2.svg",
            selectItem: null,
            showRunJson: false,
            runId: "",
            representId: "",
            failedLogs: [],
            projectName: "ETL_Iterator",
            loading: false,
            showDagLogs:false,
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
        noticeService: {
            type: Object,
            default: function() {
                return new noticeService('1')
            }
        },
        statusFlagsHeader: {
            type: Object,
            default: function() {
                return {
                    DSuploaded_header: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/DSuploaded%E5%8F%8D%E8%89%B2.svg",
                    DSIntermediate_header: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/DSIntermediate%E5%8F%8D%E8%89%B2.svg",
                    input_index_header: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/max_1.0_in%E5%8F%8D%E8%89%B2.svg",
                    output_index_header: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/max_1.0_out%E5%8F%8D%E8%89%B2.svg",
                    python3_header: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/python%E5%8F%8D%E8%89%B2.svg",
                    pyspark_header: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/Pyspark%E5%8F%8D%E8%89%B2.svg",
                    sparkr_header: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/sparkR%E5%8F%8D%E8%89%B2.svg",
                    r_header: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/R%E5%8F%8D%E8%89%B2.svg",
                    dataset_header: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/WX20211019-173847.png",
                    job_header: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/WX20211019-163226.png",
                    prepare_header: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/prepare%E5%8F%8D%E8%89%B2.svg",
                    catalog_header: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/catalog_icon%E5%8F%8D%E8%89%B2.svg"
                }
            }
        },
        statusFlags: {
            type: Array,
            default: function() {
                return [
                    {
                        name: 'DSuploaded',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/DSuploaded.svg'
                    },
                    {
                        name: 'DSIntermediate',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/DSIntermediate.svg'
                    },
                    {
                        name: 'Python3',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/python%E6%AD%A3%E5%B8%B8.svg'
                    },
                    {
                        name: 'Python3_failed',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/python%E5%A4%B1%E8%B4%A5.svg'
                    },
                    {
                        name: 'Python3_succeed',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/python%E6%88%90%E5%8A%9F.svg'
                    },
                    {
                        name: 'PySpark',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/Pyspark%E6%AD%A3%E5%B8%B8.svg'
                    },
                    {
                        name: 'PySpark_succeed',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/Pyspark%E6%88%90%E5%8A%9F.svg'
                    },
                    {
                        name: 'PySpark_failed',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/Pyspark%E5%A4%B1%E8%B4%A5.svg'
                    },
                    {
                        name: "PySpark_running",
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/Pyspark%E6%AD%A3%E5%9C%A8%E8%BF%90%E8%A1%8C.svg'
                    },
                    {
                        name: 'SparkR',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/sparkR%E6%AD%A3%E5%B8%B8.svg'
                    },
                    {
                        name: 'SparkR_succeed',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/sparkR%E6%88%90%E5%8A%9F.svg'
                    },
                    {
                        name: 'SparkR_failed',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/sparkR%E5%A4%B1%E8%B4%A5.svg'
                    },
                    {
                        name: 'R',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/R%E6%AD%A3%E5%B8%B8.svg'
                    },
                    {
                        name: 'R_succeed',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/R%E6%88%90%E5%8A%9F.svg'
                    },
                    {
                        name: 'R_failed',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/R%E5%A4%B1%E8%B4%A5.svg'
                    },
                    {
                        name: 'prepare',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/prepare%E6%AD%A3%E5%B8%B8.svg'
                    },
                    {
                        name: 'prepare_succeed',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/prepare%E6%88%90%E5%8A%9F.svg'
                    },
                    {
                        name: 'prepare_failed',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/prepare%E5%A4%B1%E8%B4%A5.svg'
                    },
                    {
                        name: 'prepare_running',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/prepare%E6%AD%A3%E5%9C%A8%E8%BF%90%E8%A1%8C.svg'
                    },
                    {
                        name: 'job',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/WX20211019-163226.png'
                    },
                    {
                        name: 'dataset',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/WX20211019-173847.png'
                    },
                    {
                        name: 'DSInputIndex',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/max_1.0_in.svg'
                    },
                    {
                        name: 'DSOutputIndex',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/max_1.0_out.svg'
                    },
                    {
                        name: 'DSCatalog',
                        symbol: 'https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/catalog_icon.svg'
                    }
                ]
            }
        }
    },
    mounted () {
        let href = window.location.href
        console.log(href)
        let paramArr = href.split("?")[1].split("&")
        this.projectId = this.getUrlParam(paramArr, "projectId")
        this.projectName = this.getUrlParam(paramArr, "projectName")
        this.flowVersion = this.getUrlParam(paramArr, "flowVersion")
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
        closeLogDialog() {
            this.showDagLogs = false
        },
        showLogs(data, representId) {
            this.runId = JSON.parse(data.message).cnotification.runId
            this.jobShowName = JSON.parse(data.message).cnotification.jobShowName
            this.representId = representId
            this.showDagLogs = true
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
            console.log(data)
            data.map((it,index) => {
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
            const url = `https://apiv2.pharbers.com/phdagtrigger`
            const accessToken = this.getCookie("access_token") || this.datasource.debugToken
            let confData = data.args.param.jsonValue
            confData.ownerId = this.getCookie("account_id") || "5UBSLZvV0w9zh7-lZQap"
            confData.showName = this.getCookie("user_name_show") ? decodeURI(decodeURI(this.getCookie("user_name_show"))) : "测试人员"
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
            console.log(body)
            let results = await fetch(url, options).then(res => res.json())
            if(results.status === "failed") {
                alert("启动出错，请重新运行！")
                this.loading = false
                return false
            }
            const dag_run_id = results.data.dag_run_id.split("_")
            const time = new Date(dag_run_id.pop()).getTime()
            const runnerId = dag_run_id.join("_") + "_" + time
            console.info(runnerId)
            window.parent.postMessage({
                message: {
                    dagRunCmd: this.registerJobEventName,
                    dagExecutionCmd: "executionStatus" + runnerId
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
            let payload = JSON.parse(response.payload)
            console.log(payload)
            this.responseArr = payload
            let status = payload["status"]
            let jobName = JSON.parse(payload.message).cnotification.jobName
            let data = ele.datasource.data
            // 1.找到对应job节点并更新状态
            data.map((it,index) => {
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
                        const reVal = that.statusFlags.find(x => x.name === result)
                        return reVal.symbol
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
            console.log("selectItem", this.selectItem)
            this.runId = JSON.parse(this.responseArr.message).cnotification.runId
            const url = `https://apiv2.pharbers.com/phdagtasktrigger`
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
            console.info(runnerId_retry)
            window.parent.postMessage({
                message: {
                    dagRunCmd: this.registerJobEventName,
                    dagExecutionCmd: "executionStatus" + this.runnerId_retry
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
            document.domain = "pharbers.com"
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
        changeHeaderIcon(cat, runtime, ele) {
            if (cat === "dataset" && runtime === "uploaded") {
                ele.icon_header = ele["statusFlagsHeader"]["DSuploaded_header"]
            } else if (cat === "dataset" && runtime === "intermediate") {
                ele.icon_header = ele["statusFlagsHeader"]["DSIntermediate_header"]
            } else if (cat === "dataset" && runtime === "catalog") {
                ele.icon_header = ele["statusFlagsHeader"]["catalog_header"]
            } else if (cat === "dataset" && runtime === "input_index") {
                ele.icon_header = ele["statusFlagsHeader"]["input_index_header"]
            } else if (cat === "dataset" && runtime === "output_index") {
                ele.icon_header = ele["statusFlagsHeader"]["output_index_header"]
            } else if (cat === "job" && runtime === "python3") {
                ele.icon_header = ele["statusFlagsHeader"]["python3_header"]
            } else if (cat === "job" && runtime === "pyspark") {
                ele.icon_header = ele["statusFlagsHeader"]["pyspark_header"]
            } else if (cat === "job" && runtime === "sparkr") {
                ele.icon_header = ele["statusFlagsHeader"]["sparkr_header"]
            } else if (cat === "job" && runtime === "prepare") {
                ele.icon_header = ele["statusFlagsHeader"]["prepare_header"]
            } else if (cat === "job" && runtime === "r") {
                ele.icon_header = ele["statusFlagsHeader"]["r_header"]
            } else if (cat === "dataset") {
                ele.icon_header = ele["statusFlagsHeader"]["dataset_header"]
            } else if (cat === "job") {
                ele.icon_header = ele["statusFlagsHeader"]["job_header"]
            }
        },
        renderDag (data) {
            const that = this

            if (data === null || data === undefined) {
                data = this.datasource.data
            }
            const d3 = Object.assign({}, d3_base, d3_dag);
            const dag = d3.dagStratify()(data);

            const windowWidth = this.$refs.chart.offsetWidth
            const windowHeight = this.$refs.chart.offsetHeight

            const width = Math.max(this.datasource.sizeHit[1], windowWidth)
            const height = Math.max(this.datasource.sizeHit[0], windowHeight)

            const viewportWidth = width
            const viewportHeight = height

            const layout = d3.sugiyama()
                .size([height, width])
                .layering(d3.layeringSimplex())
                .decross(d3.decrossTwoLayer())
                .coord(d3.coordCenter())

            layout(dag);
            draw(dag, data, this.$refs.chart);

            function draw(dag, data, ele) {
                // This code only handles rendering
                const nodeRadius = 25;

                const svgSelection = d3.select(ele)
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .attr("viewBox", `${-nodeRadius} ${nodeRadius} ${viewportWidth + 2 * nodeRadius} ${viewportHeight + 2 * nodeRadius}`);
                const defs = svgSelection.append('defs'); // For gradients

                const steps = dag.size();
                const interp = d3.interpolateRainbow;
                const colorMap = {};
                // dag.each((node, i) => {
                data.forEach((node, i) => {
                    colorMap[node.id] = interp(i / steps);
                });

                // How to draw edges
                const line = d3.line()
                    .curve(d3.curveCatmullRom)
                    .x(d => d.y)
                    .y(d => d.x);

                // Plot edges
                svgSelection.append('g')
                    .selectAll('path')
                    .data(dag.links())
                    .enter()
                    .append('path')
                    .attr('d', (data) => line(data.points))
                    .attr('fill', 'none')
                    .attr('stroke-width', 3)
                    .attr('stroke', ({source, target}) => {
                        const gradId = `${source.data.id}-${target.data.id}`;
                        const grad = defs.append('linearGradient')
                            .attr('id', gradId)
                            .attr('gradientUnits', 'userSpaceOnUse')
                            .attr('x1', source.x)
                            .attr('x2', target.x)
                            .attr('y1', source.y)
                            .attr('y2', target.y);
                        grad.append('stop').attr('offset', '0%').attr('stop-color', colorMap[source.data.id]);
                        grad.append('stop').attr('offset', '100%').attr('stop-color', colorMap[target.data.id]);
                        return `url(#${gradId})`;
                    });

                // Select nodes
                const nodes = svgSelection.append('g')
                    .selectAll('g')
                    .data(dag.descendants())
                    .enter()
                    .append('g')
                    .attr('id', ({data}) => data.attributes.name)
                    .attr('transform', ({x, y}) => `translate(${y}, ${x})`)

                // Plot node circles
                nodes.append('image')
                    .attr("xlink:href", ({data}) => {
                        const cat = data.category
                        if (data.status === "succeed") {
                            cat = cat + "_succeed"
                        } else if (data.status === "failed") {
                            cat = cat + "_failed"
                        }
                        const reVal = that.statusFlags.find(x => {
                            if(x) {
                                return x.name === cat
                            }
                        })
                        return reVal.symbol
                    })
                    .attr("width", "50")
                    .attr("height", "50")
                    .attr('transform', 'translate(-25, -25)')


                // Add text to nodes
                nodes.append('text')
                    .text(d => d.data.attributes.name)
                    .attr('font-weight', 'bold')
                    .attr('font-family', 'sans-serif')
                    .attr('text-anchor', 'middle')
                    .attr('alignment-baseline', 'middle')
                    .attr('fill', 'black')
                    .attr('transform', 'translate(0, 30)')


                //Our new hover effects
                nodes.on('mouseover', function (d, i) {
                    d3.select(this).transition()
                        .duration('50')
                        .attr('opacity', '.85')

                    // TODO: tooltips
                    // d3.select(this).append("circle")
                    //     .attr("r", 20)
                    //     .attr("fill", "black")
                    //     .attr('transform', `translate(30, 30)`)
                }).on('mouseout', function (d, i) {
                    d3.select(this).transition()
                        .duration('50')
                        .attr('opacity', '1');

                    // TODO: remove tooltips
                    // d3.select(this).selectAll("circle").remove()
                }).on('click', function (d, i) {
                    that.selectItem = null
                    that.selectItemName = i.data.attributes.name
                    // 获取选中节点的基本信息
                    let scriptArr = that.datasource.jobArr.filter(it => it.attributes.cat === "job" && it.attributes.name === that.selectItemName)
                    if(scriptArr.length > 0) {
                        that.selectItem = scriptArr[0].attributes
                    }
                    that.changeHeaderIcon(i.data.attributes.cat, i.data.attributes.runtime, that)
                    console.log("selectItem", that.selectItem)
                    // that.$emit('itemClicked', params)
                })

                that.$refs.viewport.scroll({
                    top: windowHeight / 2,
                    left: 0,
                    behavior: 'smooth'
                });
            }
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
