<template>
    <div class="executions-logs">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/index.css">
        <div class="job-state-change">
            <div class="title-img">
                <img :src="job_img" alt="" class="">
            </div>
            <span class="job-name">
                {{ executionItem["job-show-name"] }}
            </span>
        </div>
        <div class="job">
            <div class="job-flow">
                <!-- <div v-if="!jsonMessage">暂无数据</div>
            <viewJson v-else :JsonData="jsonMessage"></viewJson> -->
                <iframe class="executions-iframe" :src="iframeUrl" frameborder="0"></iframe>
            </div>
            <div class="job-activities-logs">
                <div class="job-activities">
                    <div class="title job-activities__header">
                        Activity
                    </div>
                    <div class="activity-item">
                        <span class="job-name">
                            <p v-if="executionItem.status === 'success'" class="el-icon-success status-icon" />
                            <p v-else class="el-icon-error status-icon" />
                            {{ executionItem["job-show-name"] }}
                        </span>
                        <span>{{ getTimes(executionItem) }}</span>
                    </div>
                </div>
                <div class="activity-logs">
                    <div class="title">
                        Activity Log
                    </div>
                    <div class="logs">
                        {{ logsMessage }}
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

export default {
    data() {
        return {
            job_img: `${staticFilePath}` + "/job_button.svg",
            jobIndex: "",
            logsMessage: null,
            jsonMessage: null,
            executionItem: {},
            iframeUrl: "",
            projectName: ""
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
        this.datasource.jobIndex = this.getUrlParam(paramArr, "jobIndex")
        this.datasource.jobName = this.getUrlParam(paramArr, "jobName")
        this.datasource.runnerId = this.getUrlParam(paramArr, "runnerId")
        this.projectName = this.getUrlParam(paramArr, "projectName")
        this.datasource.buildExecutionQuery(this)
    },
    methods: {
        getUrlParam(arr, value) {
            let data = arr.find(item => item.indexOf(value) > -1)
            return data ? decodeURI(data).split("=")[1] : undefined
        },
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        },
        dealBuildLogsQuery(response) {
            if (response.status === 0) {
                this.logsMessage = response.message
            }
        },
        dealBuildFlowQuery(response) {
            if (response.status === 0) {
                this.jsonMessage = response.message
            }
        },
        dealBuildExecutionQuery(response) {
            if (response.data.length > 0) {
                this.executionItem = response.data[0]["attributes"]
                this.executionTemplate = this["executionItem"]["execution-template"]
                this.datasource.jobIndex = this["executionItem"]["job-index"]
                this.iframeUrl = `https://executions.pharbers.com/#/history?projectName=${this.projectName}&projectId=${this.datasource.projectId}&jobName=${this.executionItem["job-name"]}&runnerId=${this.executionItem["runner-id"]}&executionTemplate=${this.executionItem["execution-template"]}`
                this.datasource.buildLogsQuery(this)
                this.datasource.buildFlowQuery(this)
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
    box-sizing: border-box;
}

.executions-logs {
    display: flex;
    flex-direction: column;
    // height: calc(100vh - 40px);
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
        width: 100%;
        flex-grow: 1;
        display: flex;
        flex-direction: column;

        .job-flow {
            flex: 1;
            width: 100%;
            min-height: 350px;
            overflow: hidden;

            .executions-iframe {
                height: 100%;
                min-height: 350px;
                width: 100%;
                overflow-y: scroll;
            }
        }

        .job-activities-logs {
            flex: 1;
            display: flex;
            min-height: 350px;
            border-top: 1px solid #ddd;

            .title {
                height: 60px;
                padding: 20px;
            }

            .job-activities {
                display: flex;
                flex-direction: column;
                border-right: 1px solid #ddd;
                // width: 50%;
                flex: 1;
                height: 100%;
                min-height: 350px;

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
                // width: 50%;
                flex: 1;
                display: flex;
                flex-direction: column;
                overflow: hidden;

                .logs {
                    flex-grow: 1;
                    min-height: 280px;
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