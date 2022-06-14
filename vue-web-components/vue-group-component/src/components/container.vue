<template>
    <div class="group">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="group_header">
            <div class="header_left">
                <img :src="defs.iconsByName('group')" alt="" />
                <span>Group</span>
            </div>
            <div class="header_right">
                <el-button class="save" @click="save">保存</el-button>
            </div>
        </div>
        <div class="group_area">
            <div class="group_left">
                <el-steps direction="vertical" :active="active" align-center >
                    <el-step v-for="(item, index) in stepsDefs" :key="index" :status="item.status">
                        <template slot="title">
                            <el-button type="text" @click="active = item.index" >{{item.title}}</el-button>
                        </template>
                    </el-step>
                </el-steps>
            </div>
            <div class="group_right" v-if="datasource.isReady && datasource.isMetaReady">
                <pre-filter v-show="active === 1"
                            ref="filter"
                            :step="datasource.step"
                            :schema="datasource.dataset.schema"
                            @statusChange="preFilterStatus" />
                <computed v-show="active === 2"
                            ref="computed"
                            :step="datasource.step"
                            :schema="datasource.dataset.schema"
                            @statusChange="computedStatus" />
                <group v-show="active === 3"
                          ref="group"
                          :step="datasource.step"
                          :schema="datasource.dataset.schema"
                          @statusChange="groupStatus" />
                <custom-agg v-show="active === 4"
                       ref="customagg"
                       :step="datasource.step"
                       :schema="datasource.dataset.schema"
                       @statusChange="customAggStatus" />
                <post-filter v-show="active === 5"
                            ref="postfilter"
                            :step="datasource.step"
                            :schema="datasource.dataset.schema"
                            @statusChange="postFilterStatus" />
                <outputs v-show="active === 6"
                                ref="outputs"
                                :schema="datasource.dataset.schema"
                                @statusChange="outputsStatus" />
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
import PreFilter from './steps/commands/pre-filter/view'
import Computed from './steps/commands/computed/view'
import Group from './steps/commands/group/view'
import CustomAgg from './steps/commands/custom-agg/view'
import PostFilter from './steps/commands/post-filter/view'
import Outputs from './steps/commands/output/view'

export default {
    components: {
        ElSteps,
        ElStep,
        ElButton,
        PreFilter,
        Computed,
        Group,
        CustomAgg,
        PostFilter,
        Outputs
    },
    data() {
        return {
            computedSchema: [],
            outputsSchema: [],
            active: 1,
            stepsDefs: [
                {
                    title: "Pre-Filter",
                    index: 1,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Computed Columns",
                    index: 2,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Group",
                    index: 3,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Custom aggregation",
                    index: 4,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Post Filter",
                    index: 5,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Outputs",
                    index: 6,
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
                return new PhDataSource(1)
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
        groupStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[2].status = "success"
            } else {
                this.stepsDefs[2].status = "error"
            }
        },
        customAggStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[3].status = "success"
            } else {
                this.stepsDefs[3].status = "error"
            }
        },
        postFilterStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[4].status = "success"
            } else {
                this.stepsDefs[4].status = "error"
            }
        },
        outputsStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[5].status = "success"
            } else {
                this.stepsDefs[5].status = "error"
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
        genOutputsSchema() {
            const retrieved = this.$refs.retrieved.datasource.revert2Defs()
            let result = []
            if (retrieved.length === 0) {
                result = this.computedSchema
            } else {
                result = this.computedSchema.filter(x => retrieved.includes(x.title))
            }
            return result
        },
        save() {
            const params = {
                "preFilter": this.$refs.filter.datasource.revert2Defs(),
                "computedColumns": this.$refs.computed.datasource.revert2Defs(),
                "keys": this.$refs.group.datasource.revert2Defs().keys,
                "values": this.$refs.group.datasource.revert2Defs().values,
                "postFilter": this.$refs.postfilter.datasource.revert2Defs(),
            }

            console.log(params)
            // this.datasource.saveAndGenCode(this.projectIdTest, this.jobName, params)
        },
    },
    mounted() {
        this.projectId = this.getUrlParam("projectId")
        this.projectName = this.getUrlParam("projectName")
        this.projectIdTest = "alfredtest"
        // this.jobName = this.getJobName()
        this.jobName = "group"
        // this.inputDsName = this.getUrlParam("inputName")
        this.datasetId = this.getUrlParam("datasetId")
        this.datasource.refreshData(this.projectIdTest, this.jobName)
        this.datasource.refreshMateData(this.projectId, this.datasetId)
    },
    updated() {

    },
    watch: {
        active() {
            this.$refs.filter.validate()
            this.$refs.computed.validate()
            this.$refs.group.validate()
            this.$refs.customagg.validate()
            this.$refs.postFilter.validate()
            this.$refs.output.validate()
            //
            // if (n === 4 || n === 5) {
            //     this.computedSchema = this.computeSchema()
            // }
            //
            // if (n === 5) {
            //     this.outputsSchema = this.genOutputsSchema()
            // }
        }
    }
}
</script>
<style lang="scss">
    .group {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;

        .op-factories {
            // background: red;
        }

        .group_header {
            height: 48px;
            padding: 0 15px;
            border-bottom: 1px solid #cccccc;
            display: flex;
            align-items: center;
            justify-content: space-between;

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

        .group_area {
            width: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: row;

            .group_left {
                display: flex;
                flex-direction: row;
                margin-left: 80px;
                justify-content: space-around;
            }

            .group_right {
                display: flex;
                flex-grow: 1;
                flex-direction: row;
                justify-content: space-around;

            }
        }
    }
</style>

