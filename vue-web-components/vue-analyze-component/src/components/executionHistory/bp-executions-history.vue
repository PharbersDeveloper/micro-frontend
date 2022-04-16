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

            <div class="infinite-list-wrapper" style="overflow: auto">
                <ul class="list"
                    v-infinite-scroll="load"
                    infinite-scroll-disabled="disabled"
                >
                    <li v-for="i in count" class="list-item">
                        {{ i }}
                    </li>
                </ul>
                <p v-if="loading">Loading...</p>
                <p v-if="noMore">No more</p>
                <p v-else>More</p>
            </div>
        </div>
    </div>
    <!--                el-icon-success-->
</template>

<script>
import Vue from 'vue'
import ElAutocomplete from "element-ui/packages/autocomplete"
import infiniteScroll from 'vue-infinite-scroll'
import PhExecutionHistory from "./datasource"
import "element-ui/lib/theme-chalk/infiniteScroll.css"

Vue.use(infiniteScroll)

export default {
    data() {
        return {
            count: 10,
            loading: false,
            curSort: "Newest",
            sortCandidate: ["Newest"],
            curStatus: "Any status",
            statusCandidate: ["Any status", "success", "failed", "canceled", "queued"],
            searchString: ''
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
        }
    }
}
</script>

<style lang="scss" scoped>
    .execution-container {
        display: flex;
        flex-direction: row;

        .execution-search-sort-panel {
            display: flex;
            flex-direction: column;

            .execution-sort-btn-lst {
                display: flex;
                flex-direction: row;
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
