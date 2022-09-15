<template>
    <div class="executions-logs">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/index.css">
        <div class="job-state-change">
            <div class="title-img">
                <img :src="job_img" alt="" class="">
            </div>
            <span class="job-name">
                {{ datasource.runnerId }}
            </span>
        </div>
        <div class="job">
            <div class="job-flow">
                <!-- <div v-if="!jsonMessage">暂无数据</div>
            <viewJson v-else :JsonData="jsonMessage"></viewJson> -->
                <iframe class="executions-iframe" :src="iframeUrl" frameborder="0"></iframe>
                <div class="execution-conf">
                    <div class="title">
                        运行参数
                    </div>
                    <div class="logs">
                        <div class="logs-container" v-show="!hasError">
                            {{ datasource.dataConf }}
                        </div>
                        <div class="logs-container" v-show="hasError">
                            运行脚本参数已被删除，请联系管理员!
                        </div>
                    </div>
                </div>
            </div>
            <div class="job-activities-logs">
                <div class="job-activities">
                    <div class="title job-activities__header">
                        Activity
                    </div>
                    <div style="height: calc(100% - 75px);overflow-y: auto;">
                        <div :class="focus === index ? 'activity-item active' : 'activity-item'" @click="openActivityLogs(iter,index)"
                            v-for="(iter,index) in executionItem" :key="index">
                            <span class="job-name">
                                <p v-if="iter.status === 'success'" class="el-icon-success status-icon" />
                                <p v-else-if="iter.status==='running'" class="el-icon-loading status-icon" />
                                <p v-else class="el-icon-error status-icon" />
                                {{ iter["job-show-name"] }}
                            </span>
                            <!-- <span>{{ getTimes(executionItem) }}</span> -->
                            <div>
                                <span>{{formatDateStandard(iter["start-at"], 0)}}</span>
                                -
                                <span>{{formatDateStandard(iter["end-at"], 3)}}</span>
                                |
                                <span>{{getTimes(iter)}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="activity-logs">
                    <div class="title">
                        Activity Log
                    </div>
                    <div class="logs" style="height: 100px">
                        <div class="logs-container">
                            {{ logsMessage }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { staticFilePath } from "../../config/envConfig"
import PhExecutionHistory from "./datasource"
import viewJson from "./bp-view-json.vue"
import { Message } from 'element-ui'

export default {
    data() {
        return {
            job_img: `${staticFilePath}` + "/job_button.svg",
            jobIndex: "",
            logsMessage: null,
            jsonMessage: null,
            executionItem: null,
            iframeUrl: "",
            projectName: "",
            executionTemplate: "",
            focus: 0 ,//默认选中第一个activity,
            dagName: '',
            hasError: null,
            runnerId: ''
        }
    },
    components: {
        viewJson
    },
    props: {
        allData: {
            type: Object,
            default: function () {
                return {}
            }
        },
        datasource: {
            type: Object,
            default: function () {
                return new PhExecutionHistory('1')
            }
        }
    },
    mounted() {
        let href = window.location.href
        let paramArr = href.split("?")[1].split("&")
        this.datasource.projectId = this.getUrlParam(paramArr, "projectId")
        this.datasource.runnerId = this.getUrlParam(paramArr, "runnerId")
        this.runnerId = this.getUrlParam(paramArr, "runnerId")
        this.projectName = this.getUrlParam(paramArr, "projectName")
        this.dagName = this.projectName + "_" + this.projectName + "_developer"
        this.datasource.buildActivityQuery(this, this.datasource.runnerId, () => {
            this.executionItem = this.datasource.dataActivity
            if (this.executionItem.length >= 1) {
                this.datasource.jobName = this.executionItem[0]['job-name']
                this.executionTemplate = this.executionItem[0]['execution-template']
                this.datasource.jobIndex = this.executionItem[0]['job-index']
                this.datasource.buildLogsQuery(this)
                this.datasource.buildExecutionQuery(this)
                this.datasource.buildConfQuery(this)
            }
        })
        // this.datasource.buildExecutionQuery(this)
    },
    methods: {
        getUrlParam(arr, value) {
            let data = arr.find(item => item.indexOf(value) > -1)
            return data ? decodeURI(data).split("=")[1] : undefined
        },
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            arr = document.cookie.match(reg)
            if (arr) return (arr[2]);
            else return null;
        },
        dealBuildLogsQuery(response) {
            this.logsMessage = ''
            if (response.status === 0) {
                this.logsMessage = response.message
            } else {
                Message({
                    type: 'error',
                    showClose: true,
                    duration: 3000,
                    message: '数据暂未生成，请刷新重试！'
                })
            }
        },
        dealBuildFlowQuery(response) {
            if (response.status === 0) {
                this.jsonMessage = response.message
            }
        },
        dealBuildExecutionQuery(response) {
            if (response.data.length > 0) {
                this.iframeUrl = `https://executions.pharbers.com/#/history?projectName=${this.projectName}&projectId=${this.datasource.projectId}&jobName=${this.datasource.jobName}&runnerId=${this.datasource.runnerId}&executionTemplate=${this.executionTemplate}`
                // this.datasource.buildLogsQuery(this)
                this.datasource.buildFlowQuery(this)
            }
        },
        openActivityLogs(iter, index){
            this.focus = index
            this.datasource.jobIndex = this.executionItem[index]['job-index']
            this.datasource.buildLogsQuery(this)
            // this.dealBuildLogsQuery(this, iter['job-index'])
        },
        formatDateStandard(...params) {
            if(params.length === 2) {
                let date = new Date( Number(params[0]) ),
                    Y = date.getFullYear(),
                    M =
                        ( date.getMonth() + 1 < 10 ?
                            `0${date.getMonth() + 1}` :
                            date.getMonth() + 1 ),
                    D0 = ( date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() ),
                    D1 = ( date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() ),

                    h =
                        ( date.getHours() < 10 ? `0${date.getHours()}` : date.getHours() ),
                    m =
                        ( date.getMinutes() < 10 ?
                            `0${date.getMinutes()}` :
                            date.getMinutes() ) ,
                    s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

                // 输出结果：yyyy/mm/dd hh:mm
                if(params[1] === 0){
                    return Y + "/" + M + "/" + D0 + " " + h + ":" + m
                } else if(params[1] === 1) {
                    return Y + "-" + M + "-" + D0 + " " + h + ":" + m
                } else if(params[1] === 2) {
                    return Y + "-" + M + "-" + D0
                } else if(params[1] === 3) {
                    return h + ":" + m
                }
            }
        },
        getTimes(data) {
            if (data["end-at"] === "") {
                return "0" + " s"
            }
            let timeDiff = (data["end-at"] - data["start-at"]) / 1000
            if (timeDiff > 60) {
                let min = Math.floor(timeDiff / 60)
                let s = Math.floor(timeDiff % 60)
                return String(min) + " min " + s + " s "
            }
            return String(timeDiff) + " s"
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.active {
    background-color: #ccc;
}

.executions-logs {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 40px);
    flex-grow: 1;

    .job-state-change {
        height: 48px;
        border-bottom: 1px solid #ddd;
        display: flex;
        align-items: center;

        .title-img {
            width: 48px;
            height: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            background: #8541aa;
            margin-right: 10px;
        }
    }

    .job {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        height: calc(100vh - 88px);

        .job-flow {
            overflow: hidden;
            flex-grow: 1;
            height: 50px;
            display: flex;

            .executions-iframe {
                height: 100%;
                // min-height: 350px;
                width: 70%;
                overflow-y: scroll;
            }

            .execution-conf {
                width: 30%;
                height: 100%;
                border-left: 1px solid #ddd;
                padding: 20px;
                .title {
                    padding-bottom: 20px;
                }
                .logs {
                    overflow-y: auto;
                    padding: 10px;
                    height: calc(100% - 30px);
                    .logs-container {
                        font-size: 16px;
                    }
                }
            }
        }

        .job-activities-logs {
            flex-grow: 1;
            display: flex;
            border-top: 1px solid #ddd;
            height: 50px;

            .title {
                height: 60px;
                padding: 20px;
            }

            .job-activities {
                display: flex;
                flex-direction: column;
                border-right: 1px solid #ddd;
                flex: 1;
                height: 100%;
                // min-height: 350px;

                .job-activities__header {
                    background: #f2f2f2;
                    border-bottom: 1px solid #ddd;
                }

                .activity-item {
                    height: 48px;
                    padding: 0 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #f2f2f2;

                    .status-icon {
                        margin-right: 24px;
                    }

                    .el-icon-error {
                        color: red;
                    }

                    .el-icon-success {
                        color: green;
                    }
                }
            }

            .activity-logs {
                height: 100%;
                flex: 1;
                display: flex;
                flex-direction: column;
                overflow: hidden;

                .logs {
                    flex-grow: 1;
                    overflow-x: auto;
                    overflow-y: scroll;
                    font-family: SFProText-Thin;
                    font-size: 14px;
                    color: #25232D;
                    letter-spacing: 0.25px;
                    line-height: 20px;
                    font-weight: 200;
                    white-space: pre-wrap;
                    padding: 20px 40px;
                }
            }
        }
    }

}
</style>
