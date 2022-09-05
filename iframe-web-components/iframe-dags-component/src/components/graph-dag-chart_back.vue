<template>
    <div class="graphWrap">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="show_area">
            <div class="show_header">
                <div class="show_header_left">
                    <input type="text" />
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
                <img :src="icon_header" alt="" />
                <div class="dataset_name">{{ selectItemName }}</div>
            </div>
            <div class="opt_icon_area">
                <div class="fir_icon_row">
                    <img
                        v-if="!isRunning"
                        :src="defs.iconsByName('run')"
                        alt=""
                        @click="triggerPolicy.runDagSelect()"
                    />
                    <img
                        v-if="isRunning"
                        :src="defs.iconsByName('run', 'disabled')"
                        alt=""
                    />
                    <img
                        v-if="isRunning"
                        :src="defs.iconsByName('stop')"
                        @click="triggerPolicy.stopDag()"
                    />
                    <img
                        v-if="!isRunning"
                        :src="defs.iconsByName('stop', 'disabled')"
                    />
                </div>
            </div>
            <div class="scripts_area">
                <div class="script_title">脚本</div>
                <div class="scripts">
                    <img 
                        v-for="scriptIcon in scriptIconArray"
                        :key="scriptIcon+'icon'"
                        :src="defs.iconsByName(scriptIcon)" alt="" />
                </div>
            </div>
        </div>

        <run-dag-dialog
            v-if="showRunJson"
            :selectRecursive="selectRecursive"
            :textConf="textConf"
            :projectId="projectId"
            @confirmeRunDag="confirmeRunDag"
            @closeRunDagDialog="closeRunDagDialog"
        ></run-dag-dialog>

        <div class="job_status_area">
            <div
                class="job_status"
                v-for="(item, index) in failedLogs"
                :key="index"
            >
                <div class="job_notice">
                    <div class="item title">Job failed</div>
                    <div class="item" :title="jobShowName">
                        {{ item.jobShowName }}
                    </div>
                </div>
                <button @click="logsPolicy.showLogs(item)">
                    Logs
                </button>
            </div>
        </div>

        <div v-if="loading">
            <div id="loadingio-spinner-double-ring-ho1zizxmctu">
                <div class="ldio-400lpppmiue">
                    <div></div>
                    <div></div>
                    <div><div></div></div>
                    <div><div></div></div>
                </div>
            </div>
        </div>

        <progress-bar
            v-if="showProgress"
            @closeProgress="closeProgress"
            :progressOver="progressOver"
        >
        </progress-bar>

        <el-dialog
            :title="getSelectItemName()"
            :visible.sync="runDagSelectVisible"
            width="800px">
            <div class="run-dag-select-dialog">
                <div class="select-area">
                    <div class="select-item"
                        @click="selectRecursive = 'nonRecursive'"
                        :class="[{'run-dag-active': selectRecursive === 'nonRecursive'}]">
                        <div class="title">Non recursive</div>
                        <div class="desc">只运行当前脚本</div>
                    </div>
                    <div class="select-item"
                        @click="selectRecursive = 'recursive'"
                        :class="[{'run-dag-active': selectRecursive === 'recursive'}]">
                        <div class="title">Recursive</div>
                        <div class="desc">运行上游所有脚本</div>
                    </div>
                </div>
                <div class="img">
                    <img 
                        v-if="selectRecursive === 'nonRecursive'" 
                        :src="defs.iconsByName('runDag', 'nonRecursive')" alt="">
                    <img 
                        v-if="selectRecursive === 'recursive'"
                        :src="defs.iconsByName('runDag', 'recursive')" alt="">
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="runDagSelectVisible = false">取消</el-button>
                <el-button type="primary"  @click="triggerPolicy.dagRunPreparing()">确认</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import PhDagDatasource from "./model/datasourcev2";
import PhRenderPolicy from "./policy/render/dag-render-policy";
import PhDagDefinitions from "./policy/definitions/definitions";
import PhLogsPolicy from "./policy/logs/log-policy";
import PhStatusPolicy from "./policy/handler/dagstatushandler";
import PhAirflowPolicy from "./policy/trigger/airflow-trigger-policy";
import PhAlfredPolicy from "./policy/trigger/sm-trigger-policy";
import runDagDialog from "./run-dag-dialog.vue";
// import dagLogsDialog from "./dag-log-dialog.vue";
import progressBar from "./progress-bar-type.vue";
import ElDialog from 'element-ui/packages/dialog/src/component'
import ElButton from 'element-ui/packages/button/index'

export default {
    data: () => {
        return {
            name: "dag",
            needRefresh: 0,
            projectId: "",
            flowVersion: "",
            icon_header: null,
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
            retryButtonShow: false,
            showDagLogs: false,
            isRunning: false, //stop按钮是否可以点击
            isFirstRendering: true,
            offsetLeft: 0,
            offsetTop: 0,
            runDagSelectVisible: false,
            selectRecursive: "recursive"
        };
    },
    components: {
        runDagDialog,
        // dagLogsDialog,
        progressBar,
        ElDialog,
        ElButton
    },
    props: {
        schedulerPolicyName: {
            type: String,
            default: "sm"
        },
        datasource: {
            type: Object,
            default: function () {
                return new PhDagDatasource("1");
            }
        },
        renderPolicy: {
            type: Object,
            default: function () {
                return new PhRenderPolicy("1", this);
            }
        },
        defs: {
            type: Object,
            default: function () {
                return new PhDagDefinitions("1");
            }
        },
        logsPolicy: {
            type: Object,
            default: function () {
                return new PhLogsPolicy("1", this);
            }
        },
        eventPolicy: {
            type: Object,
            default: function () {
                return new PhStatusPolicy("1", this);
            }
        },
        triggerPolicy: {
            type: Object,
            default: function () {
                if (this.schedulerPolicyName === "airflow") {
                    return new PhAirflowPolicy("1", this);
                } else {
                    return new PhAlfredPolicy("1", this);
                }
            }
        },
        scriptIconArray: {
            type: Array,
            default: function () {
                return ["python", "pyspark", "sparkr", "r", "prepare", "sort", "distinct", "sync", "topn", "join", "stack", "group"]
            }
        }
    },
    mounted() {
        let href = window.location.href;
        console.log(href);
        let paramArr = [] //href.split("?")[1].split("&");
        this.projectId = this.getUrlParam(paramArr, "projectId") || "ggjpDje0HUC2JW";
        this.projectName = this.getUrlParam(paramArr, "projectName") || "demo";
        this.flowVersion = this.getUrlParam(paramArr, "flowVersion") || "developer";
        // 判断环境
        this.datasource.projectId = this.projectId;
        this.initChart();
        // window.addEventListener('message', this.eventPolicy.handleForwardMessage)
        window.addEventListener("message", this.handleForwardMessage);
        this.registerJobEventName = "runDag" + new Date().getTime().toString();
    },
    destroyed() {
        // 移除监听
        window.removeEventListener("message", this.handleForwardMessage);
    },
    methods: {
        getSelectItemName() {
            return "构建" + this.selectItemName
        },	
        handleForwardMessage(event) {
            const that = this;
            if (event.data.message) {
                if (event.data.message.cmd === "render_dag") {
                    that.eventPolicy.runDagCallback(event.data.message);
                }
                if (event.data.message.cmd === "finish_dag") {
                    that.eventPolicy.runDagFinishCallback(event.data.message);
                }
            }
        },
        getUrlParam(arr, value) {
            let data = arr.find((item) => item.indexOf(value) > -1);
            return data ? decodeURI(data).split("=")[1] : undefined;
        },
        //关闭进度条
        closeProgress() {
            this.showProgress = false;
        },
        closeRunDagDialog() {
            this.showRunJson = false;
        },
        async initChart() {
            // 初始化echarts实例
            await this.datasource.refreshData(this);
            // 发布前解注
            // document.domain = "pharbers.com"
        },
        // 监听屏幕大小改变
        bindChangeWindow() {
            window.onresize = () => {
                if (this.timer) return;

                this.timer = setTimeout(() => {
                    this.dag.resize();
                    this.timer = null;
                }, 100);
            };
        },
        getCookie(name) {
            let arr,
                reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if ((arr = document.cookie.match(reg))) return arr[2];
            else return null;
        },
        renderDag(data) {
            const that = this
            this.renderPolicy.renderDag(data, (width, height) => {
                if (that.isFirstRendering) {
                    that.isFirstRendering = false
                    const windowHeight = that.$refs.chart.offsetHeight
                    // const height = Math.max(that.datasource.sizeHit[0], windowHeight)
                    const step = Math.round(height / windowHeight)
                    const adjust = height / step / 2
                    that.offsetLeft = 0
                    that.offsetTop = height / 2 - adjust
                }
                that.$refs.viewport.scroll({
                    top: that.offsetTop,
                    left: that.offsetLeft,
                    behavior: "instant"
                })
            });
        },
        confirmeRunDag(data) {
            this.triggerPolicy.runDag(data);
        }
    },
    watch: {
        needRefresh(n, o) {
            this.renderDag();
        },
        selectItem(n, o) {
            this.selectItemName = n.attributes.name;
            this.icon_header = this.defs.iconsByName(n.category);
            this.offsetLeft = this.$refs.viewport.scrollLeft
            this.offsetTop = this.$refs.viewport.scrollTop
            this.isFirstRendering = false
            this.$nextTick(this.datasource.selectOneElement(this));
        }
    }
};
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
    .run-dag-select-dialog {
        display: flex;
        flex-direction: column;
        .select-area {
            display: flex;
            width: 100%;
            justify-content: center;
            .run-dag-active {
                border: 1px solid #7163C5 !important;
            }
            .select-item {
                width: 260px;
                height: 65px;
                border: 1px solid #eee;
                margin: 0 5px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .title {
                    font-size: 16px;
                    margin-bottom: 5px;
                    color: #000;
                }
                .desc {
                    font-size: 12px;
                }
            }
        }
        .img {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
        }
    }
    .job_status_area {
        position: absolute;
        bottom: 60px;
        right: 15px;
        .job_status {
            box-sizing: border-box;
            width: 240px;
            height: 70px;
            background: #ffffff;
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
                border: 1px solid #eeedf7;
                border-radius: 2px;
                font-size: 14px;
                color: #7163c5;
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
            input,
            button {
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
                    color: #bcbac4;
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
                flex-wrap: wrap;
                img {
                    width: 40px;
                    height: 40px;
                    margin: 5px;
                }
            }
        }
    }
}
//界面未加载loading
@keyframes ldio-400lpppmiue {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}

.ldio-400lpppmiue div {
    box-sizing: border-box !important;
}

.ldio-400lpppmiue > div {
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

.ldio-400lpppmiue > div:nth-child(2),
.ldio-400lpppmiue > div:nth-child(4) {
    width: 58px;
    height: 58px;
    top: 21px;
    left: 21px;
    animation: ldio-400lpppmiue 1s linear infinite reverse;
}

.ldio-400lpppmiue > div:nth-child(2) {
    border-color: transparent #747789 transparent #747789;
}

.ldio-400lpppmiue > div:nth-child(3) {
    border-color: transparent;
}

.ldio-400lpppmiue > div:nth-child(3) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
}

.ldio-400lpppmiue > div:nth-child(3) div:before,
.ldio-400lpppmiue > div:nth-child(3) div:after {
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

.ldio-400lpppmiue > div:nth-child(3) div:after {
    left: -4px;
    top: 28px;
    box-shadow: 64px 0 0 0 #f5c924;
}

.ldio-400lpppmiue > div:nth-child(4) {
    border-color: transparent;
}

.ldio-400lpppmiue > div:nth-child(4) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
}

.ldio-400lpppmiue > div:nth-child(4) div:before,
.ldio-400lpppmiue > div:nth-child(4) div:after {
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

.ldio-400lpppmiue > div:nth-child(4) div:after {
    left: -4px;
    top: 23px;
    box-shadow: 54px 0 0 0 #747789;
}

#loadingio-spinner-double-ring-ho1zizxmctu {
    backdrop-filter: blur(1px);
    background: rgba(200, 0, 0, 0.05);
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
