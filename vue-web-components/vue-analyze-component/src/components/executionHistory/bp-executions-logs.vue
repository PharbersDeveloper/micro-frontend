<template>
    <div class="executions-logs">
        <div class="job-state-change">
            <div class="title-img">
                <img :src="job_img" alt="" class="">
            </div>
            <span class="job-name">
                {{jobShowName}}
            </span>
        </div>
        <div class="job-flow">
            <viewJson :JsonData="jsonMessage"></viewJson>
        </div>
        <div class="job-activities-logs">
            <div class="job-activities">
                <div class="title job-activities__header">
                    Activity
                </div>
                <div class="activity-item">
                    <span class="job-name">
                        {{jobShowName}}
                    </span>
                    <span>{{jobRunTime}}</span>
                </div>
            </div>
            <div class="activity-logs">
                <div class="title">
                    Activity Log 
                </div>
                <div class="logs">
                    {{logsMessage}}
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
    data () {
        return {
            job_img: `${staticFilePath}` + "/job_button.svg",
            jobIndex: "",
            logsMessage: null,
            jsonMessage: null,
            jobShowName: ""
        }
    },
    components: {
        viewJson
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    jobShowName: ""
                }
            }
        },
        datasource: {
            type: Object,
            default: function() {
                return new PhExecutionHistory('1')
            }
        }
    },
    mounted() {
        let href = window.location.href
        let paramArr = href.split("?")[1].split("&")
        this.datasource.projectId = this.getUrlParam(paramArr, "projectId")
        this.jobIndex = this.getUrlParam(paramArr, "jobIndex")
        this.jobShowName = this.getUrlParam(paramArr, "jobShowName")
        this.datasource.buildLogsQuery(this)
        this.datasource.buildFlowQuery(this)
    },
    methods: {
        getUrlParam (arr, value) {
            let data = arr.find(item => item.indexOf(value) > -1)
            return data ? decodeURI(data).split("=")[1] : undefined
        },
        getCookie (name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        },
        dealBuildLogsQuery(response) {
            if (response.status === 0) {
                this.logsMessage = response.message[0]
            }
        },
        dealBuildFlowQuery(response) {
            if (response.status === 0) {
                this.jsonMessage = response.message
            }
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
        height: calc(100vh - 40px);
        flex-grow: 1;
        overflow: hidden;
        .job-state-change {
            height: 48px;
            min-height: 48px;
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
        .job-flow {
            display: flex;
            flex-grow: 1;
            min-height: 350px;
            height: 350px;
            overflow: auto;
        }
        .job-activities-logs {
            display: flex;
            border-top: 1px solid #ddd;
            .title {
                height: 60px;
                padding: 20px;
            }
            .job-activities {
                display: flex;
                flex-direction: column;
                border-right: 1px solid #ddd;
                min-width: 400px;
                width: 50%;
                .job-activities__header {
                    background: #f2f2f2;
                    border-bottom: 1px solid #ddd;
                }
                .activity-item {
                    height: 48px;
                    padding-left: 10px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #f2f2f2;
                }
            }
            .activity-logs {
                display: flex;
                flex-direction: column;
                height: 70%;
                width: 50%;
                .logs {
                    height: 100%;
                    overflow: auto;
                    font-family: SFProText-Thin;
                    font-size: 14px;
                    color: #25232D;
                    letter-spacing: 0.25px;
                    line-height: 20px;
                    font-weight: 200;
                    white-space: pre-wrap;
                    padding: 20px 40px;
                    margin-bottom: 100px;
                }
            }
        }
    }
</style>