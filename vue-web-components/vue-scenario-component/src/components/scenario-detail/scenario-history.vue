<template>
    <div class="scenario-history-container">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/index.css">
        <div class="scenario-history-content">
            <div class="scenario-history-search">
                <el-input v-model="searchString" class="search" placeholder="搜索"></el-input>
            </div>
            <div class="scenario-history-listAll">
                <div class="scenario-history-list">
                    <div :class="focus === index ?'scenario-history-item active' : 'scenario-history-item'"
                        v-for="(item, index) in history" :key="index" @click="historyDetail(item,index)">
                        <div class="left">
                            <p v-if="item.status==='success'" class="el-icon-success status-icon" />
                            <p v-else-if="item.status==='running'" class="el-icon-loading status-icon" />
                            <p v-else class="el-icon-error status-icon" />
                            <div class="scenario-history-item-detail">
                                <span class="name"><b>{{item.status}}</b></span>
                                <div class="scenario-history-time">
                                    <span class="start-time">{{item.name === 'unknown' ? name : item.name}}&nbsp;</span>
                                    |
                                    <span>&nbsp;{{formatDateStandard(item["start-at"], 0)}}</span>
                                    -
                                    <span>{{formatDateStandard(item["end-at"], 3)}}</span>
                                    <!-- <span class="start-time">张慧芳</span>
                                    | -->
                                    <!-- <span class="duration">

                                    </span> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p v-if="hasMore" class="scenario-history-loading" @click="loadMoreExecutionHistory">更多</p>
                <p v-if="!hasMore" class="scenario-history-loading">暂无更多</p>
            </div>
        </div>
        <div class="scenario-history-detail">
            <div class="scenario-history-detail-con">
                <div class="scenario-history-detail-top">
                    <div>
                        <span><b>{{detail.name === 'unknown' ? name : detail.name}}&nbsp;</b></span>
                        <span>{{detail.status}}</span>
                    </div>
                    <span>bbbbbb</span>
                    <span>on&nbsp;{{formatDateStandard(detail["start-at"], 0)}}</span>
                    <span>runtime&nbsp;&nbsp;{{getTimes(detail)}}</span>
                </div>
                <div class="scenario-history-detail-bottom">
                    <span><b>detail</b></span>
                    <div class="detail-step">
                        <div>
                            <div class="detail-step-con">
                                <div>
                                    <!-- <p v-if="item.status==='success'" class="el-icon-success status-icon" />
                                <p v-else-if="item.status==='running'" class="el-icon-loading status-icon" /> -->
                                    <p class="el-icon-error status-icon" />
                                    <span>Build - Step</span>
                                </div>
                                <span>bbbbbbb</span>
                                <!-- <span>{{formatDateStandard(detailList["start-at"], 0)}}</span>
                            <span>{{getTimes(detailList)}}</span> -->
                                <span>at&nbsp;11:20</span>
                                <span>20s</span>
                            </div>
                        </div>
                        <div style="margin-left: 100px;">
                            <div>
                                <!-- <p v-if="item.status==='success'" class="el-icon-success status-icon" />
                            <p v-else-if="item.status==='running'" class="el-icon-loading status-icon" /> -->
                                <p class="el-icon-error status-icon" />
                                <span>job</span>
                            </div>
                            <div>
                                <!-- <p v-if="item.status==='success'" class="el-icon-success status-icon" />
                            <p v-else-if="item.status==='running'" class="el-icon-loading status-icon" /> -->
                                <p class="el-icon-error status-icon" />
                                <span>job</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 <script>
//  import ElForm from "element-ui/packages/form/index"
//  import ElFormItem from "element-ui/packages/form-item/index"
 import ElInput from "element-ui/packages/input/index"
//  import ElButton from 'element-ui/packages/button/index'
//  import ElTable from 'element-ui/packages/table/index'
//  import ElTableColumn from 'element-ui/packages/table-column/index'
//  import PhDagDefinitions from "./policy/definitions/definitions"
//  import ElDialog from 'element-ui/packages/dialog/src/component'
//  // import ElTooltip from 'element-ui/packages/tooltip/index'
//  import { Message } from 'element-ui'
//  import ElInputNumber from 'element-ui/packages/input-number/index'
//  import Vue from 'vue'
//  import VTooltip from 'v-tooltip'
 
//  Vue.use(VTooltip)
 
 export default {
     components: {
         ElInput,
        //  ElButton,
        //  ElDialog,
        //  ElForm,
        //  ElFormItem,
        //  ElTable,
        //  ElInputNumber,
        //  ElTableColumn,
         // ElTooltip
     },
     data() {
         return {
            focus: 0,
            name: '未知',
            detail: {}
         }
     },
     props: {
        history: Array,
        hasMore: Boolean,
        detailList: Object
        //  defs: {
        //      type: Object,
        //      default: function () {
        //          return new PhDagDefinitions("1");
        //      }
        //  },
        //  scriptParamsData: Array
     },
    watch: {
        detailList: {
            handler(newValue) {
                this.detail = newValue
            },
            deep: true
        }
     },
     methods: {
        // 点击列表显示detail
        historyDetail(item, index){
            this.focus = index
            this.detail = {}
            this.detail = item
        },
        loadMoreExecutionHistory() {
            this.$emit("getHistory")
        },
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
        formatDateStandard(...params) {
            if(params.length === 2) {
                let date = new Date( Number(params[0]) ),
                    Y = date.getFullYear(),
                    M = ( date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1 ),
                    D0 = ( date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() ),
                    // D1 = ( date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() ),

                    h = ( date.getHours() < 10 ? `0${date.getHours()}` : date.getHours() ),
                    m = ( date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes() ) 
                    // s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

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
     },
     mounted() {
     },
 }
 </script>
 <style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    .active {
        background-color: #f2f2f2;
    } 

    .scenario-history-container {
        display: flex;
        flex-direction: row;
        height: calc(100vh - 90px);
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
        
        .search {
            width: 500px;
            min-width: 500px;
            padding: 10px;
        }
        
        .scenario-history-content {
            // height: calc(100vh - 90px);
            border-right: 1px solid #ddd;
        }

        .scenario-history-search {
            background-color: #f2f2f2;
            border-bottom: 1px solid #ddd;
        }

        .scenario-history-listAll {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            justify-content: space-between;
            overflow: auto;
            border-bottom: 1px solid #ddd;
            height: calc(100vh - 160px);
            overflow-y: auto;

            .scenario-history-list {
                display: flex;
                flex-direction: column;
                flex-grow: 1;

                .scenario-history-item {
                    display: flex;
                    flex-direction: row;
                    height: 60px;
                    align-items: center;
                    padding: 0px 16px;
                    justify-content: space-between;
                    border-bottom: 1px solid #dddddd;
                    cursor: pointer;

                    .left {
                        display: flex;
                        align-items: center;
                    }

                    .scenario-history-item-detail {
                        display: flex;
                        flex-direction: column;

                        .name {
                            // padding-bottom: 10px;
                        }

                        .scenario-history-time {
                            display: flex;
                            align-items: center;
                            flex-direction: row;
                            font-size: 14px;
                            // .start-time {
                            //     margin-right: 4px;
                            // }

                            // .duration {
                            //     margin-left: 4px;
                            // }
                        }
                    }
                }
            }

            .scenario-history-loading {
                text-align: center;
                cursor: pointer;
            }
        }

        .scenario-history-detail {
            display: flex;
            // flex-direction: column;
            justify-content: center;
            border-left: 1px solid #f2f2f2;
            width: calc(100vw - 500px);
            height: calc(100vh - 90px);
            background-color: #f2f2f2;

            .scenario-history-detail-con {
                width: calc(100% - 100px);
                padding: 20px;
                margin-top: 20px;
                background-color: #fff;
                border:1px solid #ddd;

                .scenario-history-detail-top {
                    height: 50px;
                    border-bottom: 1px solid #ddd;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }

                .scenario-history-detail-bottom {
                    display: flex;
                    flex-direction: column;

                    .detail-step {
                        margin-left: 50px;

                        .detail-step-con {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;

                            span {
                                line-height: 54px;
                            }
                        }
                    }
                }
            }
            // .empty {
            //     height: 100%;
            //     display: flex;
            //     justify-content: center;
            //     padding-top: 100px;
            //     text-align: center;
            //     margin-top: 100px;
            //     color: #bbbbbb;
            //     font-weight: 400;
            // }
            // .execution-history-detail-panel-show {
            //     display: flex;
            //     flex-grow: 1;
            //     flex-direction: column;
            //     .execution-history-definition-panel {
            //         flex-grow: 1;
            //         border: 1px solid #dddddd;
            //         overflow: auto;
            //         height: 500px;
            //         .executions-iframe {
            //             width: 100vw;
            //             // height: 500px;
            //             height: 100%;
            //         }
            //     }
            // }
        }
    }
</style>
 
 