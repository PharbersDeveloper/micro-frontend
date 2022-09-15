<template>
    <div class="execution-container">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/index.css">
        <div class="execution-search-sort-panel ">
            <div class="execution-sort-btn-lst-search">
                <el-input 
                    v-model="searchString"
                    class="search" 
                    @input="inputSearch(searchString)"
                    placeholder="搜索"></el-input>
                <div class="execution-sort-btn-lst">
                    <select v-model="curSort">
                        <option v-for="(item,index) in sortCandidate" v-bind:value="item" v-text="item"
                            :key="index+'type'"></option>
                    </select>
                    <span class="part">|</span>
                    <select v-model="curStatus">
                        <option v-for="(item,index) in statusCandidate" v-bind:value="item" v-text="item"
                            :key="index+'type'"></option>
                    </select>
                </div>
            </div>

            <div class="execution-history-list-panel">
                <div class="execution-history-list">
                    <div v-for="(item, index) in dataShow" :key="index" @click="clickExecutionItem(item, index)"
                        class="execution-history-item">
                        <div class="left">
                            <p v-if="item.status==='success'" class="el-icon-success status-icon" />
                            <p v-else-if="item.status==='running'" class="el-icon-loading status-icon" />
                            <p v-else class="el-icon-error status-icon" />
                            <div class="execution-history-detail">
                                <span class="name"><b>{{item["runner-id"]}}_{{item.owner}}</b></span>
                                <div class="execution-history-time">
                                    <span class="start-time">
                                        <!-- {{formatDateStandard(item["start-at"], 2)}} -->
                                        {{item.owner}}
                                    </span>
                                    |
                                    <span class="duration">
                                        {{rTime(item.date)}}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <el-button type="text" @click.stop="viewLogs(item)"
                            v-if="executionItem && executionItem.status !== 'running' && index === isActive">
                            View Logs</el-button>
                    </div>
                </div>
                <p v-if="hasMore" class="execution-history-loading" @click="loadMoreExecutionHistory">更多</p>
                <p v-if="!hasMore" class="execution-history-loading">暂无更多</p>
            </div>
        </div>
        <div class="execution-history-detail-panel">
            <div class="empty" v-if="!executionItem">
                点击一个条目查看细节
            </div>
            <div class="execution-history-detail-panel-show" v-if="executionItem">
                <div class="execution-history-definition-panel">
                    <!-- <div v-if="JSON.stringify(jsonMessage) == '{}'">暂无数据</div>
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
                <div class="execution-history-logs-panel">
                    <div class="title">Activity</div>
                    <div style="height: calc(100% - 60px);overflow-y: auto;">
                        <div class="execution-history-logs-panel-item" v-for="(iter,index) in executionItem"
                            :key="index">
                            <div class="execution-history-logs-panel-item-title">
                                <p v-if="iter.status==='success'" class="el-icon-success status-icon" />
                                <p v-else-if="iter.status==='running'" class="el-icon-loading status-icon" />
                                <p v-else class="el-icon-error status-icon" />
                                <span class="name"><b>{{iter["job-show-name"]}}</b></span>
                            </div>
                            <div class="execution-history-logs-panel-item-time">
                                <span>
                                    {{formatDateStandard(iter["start-at"], 0)}}
                                </span>
                                -
                                <span>
                                    {{formatDateStandard(iter["end-at"], 3)}}
                                </span>
                                |
                                <span>
                                    {{getTimes(iter)}}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import ElInput from "element-ui/packages/input"
import ElButton from "element-ui/packages/button"
import PhExecutionHistory from "./datasource"
import "element-ui/lib/theme-chalk/infiniteScroll.css"
// import viewJson from "./bp-view-json.vue"

export default {
    data() {
        return {
            count: 10,
            loading: false,
            curSort: "Newest",
            sortCandidate: ["Newest"],
            curStatus: "Any status",
            statusCandidate: ["Any status", "success", "failed", "canceled", "queued"],
            searchString: '',
            hasMore: true,
            executionItem: null,
            // jsonMessage: null,
            jobIndex: "",
            executionTemplate: "",
            projectName: "",
            runnerId: "",
            iframeUrl: "",
            jobName: "",
            isActive: null,
            dataShow: [],
            dagName: '',
            hasError: null
        }
    },
    components: {
        ElInput,
        ElButton
        // viewJson
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
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
        this.projectName = this.getUrlParam(paramArr, "projectName")
        this.datasource.appendExecutionHistory(this)
    },
    methods: {
        inputSearch(data) {
            if (data.length === 0) {
                this.dataShow = this.datasource.data
            } else {
                this.dataShow = this.datasource.data.filter(it => it.owner.indexOf(data) > -1 || this.rTime(it.date).indexOf(data) > -1)
            }
        },
        dealBuildLogsQuery() {
            // if(response.status !== 0) {
            //     alert("数据暂未生成，请刷新重试！")
            // } else if(response.status === 0) {
            const event = new Event("event")
            event.args = {
                callback: "linkToPage",
                element: this,
                param: {
                    "name": "executions-logs",
                    "projectName": this.projectName,
                    "projectId": this.datasource.projectId,
                    "runnerId": this.runnerId
                }
            }
            this.$emit('event', event)
            // }
        },
        clickExecutionItem(data,index) {
            this.isActive = index
            this.runnerId = data["runner-id"]
            this.executionItem = []
            this.datasource.buildActivityQuery(this,data["runner-id"], ()=>{
                // this.executionItem = data
                this.executionItem = this.datasource.dataActivity 
                // this.runnerId = data["runner-id"]
                this.jobName = this.executionItem.length >= 1 ? this.executionItem[0]["job-name"] : ''
                this.jobIndex = this.executionItem.length >= 1 ? this.executionItem['job-index'] : ''
                this.executionTemplate = this.executionItem.length >= 1 ? this.executionItem["execution-template"] : ''
                // https://executions.pharbers.com
                this.iframeUrl = `https://executions.pharbers.com/#/history?projectName=${this.projectName}&projectId=${this.datasource.projectId}&jobName=${this.jobName}&runnerId=${this.runnerId}&executionTemplate=${this.executionTemplate}` 
                // this.datasource.buildFlowQuery(this) 
                this.dagName = this.projectName + "_" + this.projectName + "_developer"
                this.datasource.buildConfQuery(this)
            })
        },
        // dealBuildFlowQuery(response) {
        //     if (response.status === 0) {
        //         this.jsonMessage = response.message
        //     }
        // },
        viewLogs(data) {
            // this.datasource.buildLogsQuery(this)
            this.dealBuildLogsQuery()
        },
        linkToPage (name) {
            const event = new Event("event")
            event.args = {
                callback: "linkToPage",
                element: this,
                param: {
                    "name": name,
                    "projectName": this.allData.projectName,
                    "projectId": this.allData.projectId
                }
            }
            this.$emit('event', event)
        },
        rTime(date) {
            var json_date = new Date(date).toJSON();
            return new Date(new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
        },
        getTimes (data) {
            if(data["end-at"] === "") {
                return "0" + " s"
            }
            let timeDiff = (data["end-at"] - data["start-at"]) / 1000
            if(timeDiff > 60) {
                let min = Math.floor(timeDiff / 60)
                let s = Math.floor(timeDiff % 60)
                return String(min) + " min " + s + " s "
            }
            return String(timeDiff) + " s"
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
        noMore () {
            return this.count >= 20
        },
        disabled () {
            return this.loading || this.noMore
        },
        load () {
            this.loading = true
            setTimeout(() => {
                this.count += 2
                this.loading = false
            }, 2000)
        },
        querySearchAsync (queryString, cb) {
            // const links = this.links;
            // const results = queryString ? links.filter(this.createFilter(queryString)) : links
            //
            // clearTimeout(this.timeout)
            // this.timeout = setTimeout(() => {
            //     cb(results)
            // }, 3000 * Math.random())
        },
        handleSelect (item) {
            console.log(item)
        },
        loadMoreExecutionHistory () {
            this.datasource.appendExecutionHistory(this)
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    .execution-container {
        display: flex;
        flex-direction: row;
        height: calc(100vh - 40px);
        overflow: hidden;
        .status-icon {
            margin-right: 24px;
        }

        .el-icon-error {
            color: red;
        }

        .el-icon-success {
            color: green;
        }
        .execution-search-sort-panel {
            display: flex;
            flex-direction: column;
            width: 500px;
            min-width: 500px;
            .execution-sort-btn-lst-search {
                display: flex;
                flex-direction: column;
                background: #f2f2f2;
                border-bottom: 1px solid #dddddd;
                .search {
                    padding: 10px;
                }

                .execution-sort-btn-lst {
                    display: flex;
                    background: #f2f2f2;
                    align-items: center;
                    margin-bottom: 10px;

                    select {
                        border: none;
                        background: #f2f2f2;
                        margin: 0 20px;
                    }

                    .part {
                        color: #bbbbbb;
                    }
                }
            }

            .execution-history-list-panel {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                justify-content: space-between;
                overflow: auto;

                .execution-history-list {
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;

                    .execution-history-item {
                        display: flex;
                        flex-direction: row;
                        height: 80px;
                        align-items: center;
                        padding: 16px;
                        justify-content: space-between;
                        border-bottom: 1px solid #dddddd;
                        cursor: pointer;

                        .left {
                            display: flex;
                            align-items: center;
                        }

                        .execution-history-detail {
                            display: flex;
                            flex-direction: column;
                            .execution-history-time {
                                display: flex;
                                align-items: center;
                                flex-direction: row;
                                font-size: 14px;
                                .start-time {
                                    margin-right: 4px;
                                }

                                .duration {
                                    margin-left: 4px;
                                }
                            }
                        }
                    }
                }

                .execution-history-loading {
                    text-align: center;
                    cursor: pointer;
                }
            }
        }

        .execution-history-detail-panel {
            display: flex;
            flex-direction: column;
            border-left: 1px solid #dddddd;
            width: calc(100vw - 500px);
            .empty {
                height: 100%;
                display: flex;
                justify-content: center;
                padding-top: 100px;
                text-align: center;
                margin-top: 100px;
                color: #bbbbbb;
                font-weight: 400;
            }
            .execution-history-detail-panel-show {
                display: flex;
                flex-grow: 1;
                flex-direction: column;
                height: calc(100vh - 40px);
                .execution-history-definition-panel {
                    flex-grow: 1;
                    display: flex;
                    border: 1px solid #dddddd;
                    overflow: auto;
                    height: 50%;
                    .executions-iframe {
                        width: 70%;
                        // height: 500px;
                        height: 100%;
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
                .execution-history-logs-panel {
                    flex-grow: 1;
                    border: 1px solid #dddddd;
                    min-height: 30%;
                    height: 50%;
                    .title {
                        height: 40px;
                        background: #f2f2f2;
                        padding-left: 10px;
                        border-bottom: 1px solid #dddddd;
                        display: flex;
                        align-items: center;
                        font-weight: bold;
                    }
                    .execution-history-logs-panel-item {
                        height: 52px;
                        padding: 0 24px;
                        border-bottom: 1px solid #f2f2f2;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                }
            }
        }

        .execution-lst {
            display: flex;
            flex-direction: column;
        }
    }
</style>
