<template>
    <div class="execution-container">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/index.css">
        <div class="execution-search-sort-panel ">
            <el-autocomplete
                    v-model="searchString"
                    :fetch-suggestions="querySearchAsync"
                    placeholder="Search jobs ..."
                    @select="handleSelect"
            ></el-autocomplete>

            <div class="execution-sort-btn-lst">
                <select v-model="curSort">
                    <option
                            v-for="(item,index) in sortCandidate"
                            v-bind:value="item" v-text="item"
                            :key="index+'type'" ></option>
                </select>
                <select v-model="curStatus">
                    <option
                            v-for="(item,index) in statusCandidate"
                            v-bind:value="item" v-text="item"
                            :key="index+'type'" ></option>
                </select>
            </div>

            <div class="execution-history-list-panel" >
                <div class="execution-history-list" >
                    <div 
						v-for="(item, index) in datasource.data" 
						:key="index"
						class="execution-history-item" >
                        <p v-if="item.status==='success'" class="el-icon-success" />
                        <p v-else class="el-icon-error" />
                        <div class="execution-history-detail">
                            <span><b>item.jobName</b></span>
                            <div class="execution-history-time">
                                <span>{{item.startAt}}</span>
                                <span>{{item.endAt}}</span>
                            </div>
                        </div>
                        <button v-if="item.status==='failed'" >View Logs</button>
                    </div>
                </div>
                <p v-if="hasMore" class="execution-history-loading" @click="loadMoreExecutionHistory">More</p>
            </div>

        </div>

        <div class="execution-history-detail-panel" >
            <div class="execution-history-definition-panel" >
            </div>
            <div class="execution-history-logs-panel" >
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import ElAutocomplete from "element-ui/packages/autocomplete"
import PhExecutionHistory from "./datasource"


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
            hasMore: true
        }
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
    components: {
        ElAutocomplete
    },
    mounted() {
        // this.datasource.appendExecutionHistory(this)
    },
    methods: {
        linkToPage(name) {
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
        querySearchAsync(queryString, cb) {
            // const links = this.links;
            // const results = queryString ? links.filter(this.createFilter(queryString)) : links
            //
            // clearTimeout(this.timeout)
            // this.timeout = setTimeout(() => {
            //     cb(results)
            // }, 3000 * Math.random())
        },
        handleSelect(item) {
            console.log(item)
        },
        loadMoreExecutionHistory() {
            this.datasource.appendExecutionHistory(this)
        }
    }
}
</script>

<style lang="scss" scoped>
    .execution-container {
        display: flex;
        flex-direction: row;
        min-height: 100%;

        .execution-search-sort-panel {
            display: flex;
            flex-direction: column;

            .execution-sort-btn-lst {
                display: flex;
                flex-direction: row;
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

                    border: 1px solid red;

                    .execution-history-item {
                        display: flex;
                        flex-direction: row;

                        .execution-history-detail {
                            display: flex;
                            flex-direction: column;

                            .execution-history-time {
                                display: flex;
                                flex-direction: row;

                                .stat-time {

                                }

                                .duration {

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
            border: 1px solid green;

            .execution-history-definition-panel {
                flex-grow: 1;
                border: 1px solid green;

            }
            .execution-history-logs-panel {
                flex-grow: 1;
                border: 1px solid green;
            }
        }


        .execution-lst {
            display: flex;
            flex-direction: column;

            execution-item {

            }
        }
    }
</style>
