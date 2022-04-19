<template>
    <div class="execution-container">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/index.css">
        <div class="execution-search-sort-panel ">
            <!-- <el-autocomplete
                    v-model="searchString"
                    :fetch-suggestions="querySearchAsync"
                    placeholder="Search jobs ..."
                    @select="handleSelect"
            ></el-autocomplete> -->
            <div class="execution-sort-btn-lst-search">
                <el-input v-model="searchString" class="search" placeholder="搜索"></el-input>
                <div class="execution-sort-btn-lst">
                    <select v-model="curSort">
                        <option
                            v-for="(item,index) in sortCandidate"
                            v-bind:value="item" v-text="item"
                            :key="index+'type'" ></option>
                    </select>
                    <span class="part">|</span>
                    <select v-model="curStatus">
                        <option
                            v-for="(item,index) in statusCandidate"
                            v-bind:value="item" v-text="item"
                            :key="index+'type'" ></option>
                    </select>
                </div>
            </div>

            <div class="execution-history-list-panel" >
                <div class="execution-history-list" >
                    <div 
                        v-for="(item, index) in datasource.data" 
                        :key="index"
                        @click="clickExecutionItem(item)"
                        class="execution-history-item" >
                        <div class="left">
                            <p v-if="item.status==='success'" class="el-icon-success status-icon" />
                            <p v-else class="el-icon-error status-icon" />
                            <div class="execution-history-detail">
                                <span class="name"><b>{{item["job-show-name"]}}</b></span>
                                <div class="execution-history-time">
                                    <span class="start-time">
                                        {{formatDateStandard(item["start-at"], 2)}}
                                    </span>
                                    |
                                    <span class="duration">
                                        {{getTimes(item)}}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <el-button type="text" v-if="item.status==='failed'" >View Logs</el-button>
                    </div>
                </div>
                <p v-if="hasMore" class="execution-history-loading" @click="loadMoreExecutionHistory">More</p>
            </div>
        </div>
        <div class="execution-history-detail-panel" >
            <div class="empty" v-if="!executionItem">
                点击一个条目查看细节
            </div>
            <div class="execution-history-detail-panel-show" v-if="executionItem">
                <div class="execution-history-definition-panel" >
                </div>
                <div class="execution-history-logs-panel" >
                </div>
            </div>
        </div>
    </div>
    <!--                el-icon-success-->
</template>

<script>
import Vue from 'vue'
import ElAutocomplete from "element-ui/packages/autocomplete"
import ElInput from "element-ui/packages/input"
import ElButton from "element-ui/packages/button"
import PhExecutionHistory from "./datasource"
import "element-ui/lib/theme-chalk/infiniteScroll.css"

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
            executionItem: null
        }
    },
    components: {
        ElAutocomplete,
        ElInput,
        ElButton
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    fileName: "filename",
                    projectName: "projectName"
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
        this.datasource.appendExecutionHistory(this)
    },
    methods: {
        clickExecutionItem(data) {
            this.executionItem = data
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
        getTimes (data) {
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
        min-height: 100%;

        .execution-search-sort-panel {
            display: flex;
            flex-direction: column;
            width: 700px;
            
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

                        .execution-history-detail {
                            display: flex;
                            flex-direction: column;

                            .name {
                                padding-bottom: 10px;
                            }

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
                }
            }
        }

        .execution-history-detail-panel {
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            border-left: 1px solid #dddddd;
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
                .execution-history-definition-panel {
                    flex-grow: 1;
                    border: 1px solid #dddddd;

                }
                .execution-history-logs-panel {
                    flex-grow: 1;
                    border: 1px solid #dddddd;
                }
            }
        }

        .execution-lst {
            display: flex;
            flex-direction: column;
        }
    }
</style>
