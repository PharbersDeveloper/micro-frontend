<template>
    <div class="stack">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="stack_header">
            <div class="header_left">
                <img :src="defs.iconsByName('stack')" alt="" />
                <span>Sort</span>
            </div>
            <div class="header_right">
                <el-button class="save" @click="save">保存</el-button>
            </div>
        </div>
        <div class="stack_area">
            <div class="stack_left">
                <el-steps direction="vertical" :active="active" align-center >
                    <el-step v-for="(item, index) in stepsDefs" :key="index" :status="item.status">
                        <template slot="title">
                            <el-button type="text" @click="active = item.index" >{{item.title}}</el-button>
                        </template>
                    </el-step>
                </el-steps>
            </div>
            <div class="stack_right" v-if="datasource.isReady && datasource.isMetaReady">
                <pre-filter v-show="active === 1"
                            ref="prefilter"
                            :step="datasource.step"
                            :schema="datasource.schema"
                            @statusChange="preFilterStatus" />
<!--                <computed v-show="active === 2"-->
<!--                          ref="computed"-->
<!--                          :step="datasource.step"-->
<!--                          :schema="datasource.dataset.schema"-->
<!--                          @statusChange="computedStatus" />-->
<!--                <sort v-show="active === 3"-->
<!--                            ref="sort"-->
<!--                            :step="datasource.step"-->
<!--                            :schema="datasource.dataset.schema"-->
<!--                            @statusChange="sortStatus" />-->
<!--                <outputs v-show="active === 4"-->
<!--                                ref="outputs"-->
<!--                                :schema="computedSchema"-->
<!--                                @statusChange="outputsStatus" />-->
            </div>
            <div v-if="datasource.hasNoSchema">
                Schema 不对，找产品处理
            </div>
        </div>
    </div>
</template>
<script>
import PhDagDefinitions from './policy/definitions/definitions'
import ElSteps from 'element-ui/packages/steps/index'
import ElStep from 'element-ui/packages/step/index'
import ElButton from 'element-ui/packages/button/index'
import PhDataSource from './model/datasource'
import PreFilter from './steps/commands/pre-filter/preFilterView'
// import Computed from './steps/commands/computed/computedView'
// import Outputs from './steps/commands/output/outputView'
// import Sort from './steps/commands/sort/sortView'

export default {
    components: {
        ElSteps,
        ElStep,
        ElButton,
        PreFilter,
        // Computed,
        // Outputs,
        // Sort
    },
    data() {
        return {
            computedSchema: [],
            active: 1,
            flowVersion: "developer",
            stepsDefs: [
                {
                    title: "Pre-Filter",
                    index: 1,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Selected Columns",
                    index: 2,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Origin Columns",
                    index: 3,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Post-Filter",
                    index: 4,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Outputs",
                    index: 5,
                    status: "wait"  // wait / process / finish / error / success
                }
            ]
        }
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    projectId: "YZYijD17N9L6LXx",
                    projectName: "autorawdata2021",
                    scriptsParams: null,
                    dss: []
                }
            }
        },
        defs: {
            type: Object,
            default: function() {
                return new PhDagDefinitions(1)
            }
        },
        datasource: {
            type: Object,
            default: function() {
                return new PhDataSource(1, this)
            }
        }
    },
    methods: {
        getUrlParam(value) {
            let href = window.location.href
            let paramArr = href.split("?")[1].split("&")
            let data = paramArr.find(item => item.indexOf(value) > -1)
            return data ? decodeURI(data).split("=")[1] : undefined
        },
        getJobName() {
            let jobShowName = this.getUrlParam("jobShowName") ? this.getUrlParam("jobShowName") : this.getUrlParam("jobName")
            return [this.projectName, this.projectName, this.flowVersion, jobShowName].join("_")
        },
        preFilterStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[0].status = "success"
            } else {
                this.stepsDefs[0].status = "error"
            }
        },
        computedStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[1].status = "success"
            } else {
                this.stepsDefs[1].status = "error"
            }
        },
        sortStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[2].status = "success"
            } else {
                this.stepsDefs[2].status = "error"
            }
        },
        outputsStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[3].status = "success"
            } else {
                this.stepsDefs[3].status = "error"
            }
        },
        computeSchema() {
            const result = []
            for (let idx = 0; idx < this.datasource.dataset.schema.length; ++idx) {
                result.push({
                    "type": this.datasource.dataset.schema[idx]["type"].toLowerCase(),
                    "title": this.datasource.dataset.schema[idx]["src"]
                })
            }
            const addCols = this.$refs.computed.datasource.revert2Defs()
            for (let idx = 0; idx < addCols.length; ++idx) {
                result.push({
                    "type": addCols[idx]["type"].toLowerCase(),
                    "title": addCols[idx]["name"]
                })
            }
            return result
        },
        save() {
            const params = {
                // "preFilter": this.$refs.prefilter.datasource.revert2Defs(),
                // "orders": this.$refs.sort.datasource.revert2Defs().orders,
                // "denseRank": this.$refs.sort.datasource.revert2Defs().denseRank,
                // "rank": this.$refs.sort.datasource.revert2Defs().rank,
                // "rowNumber": this.$refs.sort.datasource.revert2Defs().rowNumber,
                // "computedColumns": this.$refs.computed.datasource.revert2Defs()
            }
            console.log(params)
            // this.datasource.saveAndGenCode(this.projectId, this.jobName, params)
        }
    },
    async mounted() {
        this.projectId = this.getUrlParam("projectId")
        this.projectName = this.getUrlParam("projectName")
        this.projectIdTest = "alfredtest"
        // this.jobName = this.getJobName()
        this.jobName = "stack"
        this.jobId = this.getUrlParam("jobId")
        await this.datasource.queryJob(this.projectId, this.jobId)
        // console.log(this.datasource.job)
        // console.log(this.datasource.datasets)
        this.datasource.refreshData(this.projectIdTest, this.jobName)
        this.datasource.refreshMateData(this.projectId, this.datasource.datasets)
    },
    updated() {

    },
    watch: {
        active() {
            this.$refs.prefilter.validate()
            // this.$refs.computed.validate()
            // this.$refs.sort.validate()
            // this.$refs.outputs.validate()

            // if (n === 4) {
            //     this.computedSchema = this.computeSchema()
            // }
        }
    }
}
</script>
<style lang="scss">
    .stack {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;

        .op-factories {
            // background: red;
        }

        .stack_header {
            height: 48px;
            padding: 0 15px;
            border-bottom: 1px solid #cccccc;
            display: flex;
            align-items: center;
            justify-content: space-between;
			border: 1px solid #ccc;

            .header_left {
                display: flex;
                align-items: center;

                img {
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                }

                span {
                    font-size: 20px;
                    color: #000000;
                    letter-spacing: 0.21px;
                    font-weight: 600;
                }
            }

            .header_right {
                /*button {*/
                /*    width: 65px;*/
                /*    height: 26px;*/
                /*    border: 1px solid #57565F;*/
                /*    border-radius: 2px;*/
                /*    background: none;*/
                /*    cursor: pointer;*/
                /*}*/
            }
        }

        .stack_area {
            width: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: row;
			height: calc(100vh - 100px);

            .stack_left {
                display: flex;
                flex-direction: row;
                padding: 40px;
                justify-content: space-around;
				border-right: 1px solid #ccc;
            }

            .stack_right {
                display: flex;
                flex-grow: 1;
                flex-direction: row;
                justify-content: space-around;
				background: #f2f2f2;
				padding: 20px;

            }
        }
    }
</style>

