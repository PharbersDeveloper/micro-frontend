<template>
    <div class="topn">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="topn_header">
            <div class="header_left">
                <img :src="defs.iconsByName('topn')" alt="" />
                <span>Distinct</span>
            </div>
            <div class="header_right">
                <el-button class="save" @click="save">保存</el-button>
            </div>
        </div>
        <div class="topn_area">
            <div class="topn_left">
                <el-steps direction="vertical" :active="active" align-center >
                    <el-step v-for="(item, index) in stepsDefs" :key="index" :status="item.status">
                        <template slot="title">
                            <el-button type="text" @click="active = item.index" >{{item.title}}</el-button>
                        </template>
                    </el-step>
                </el-steps>
            </div>
            <div class="topn_right" v-if="datasource.isReady && datasource.isMetaReady">
                <pre-filter v-show="active === 1"
                            ref="prefilter"
                            :step="datasource.step"
                            :schema="datasource.dataset.schema"
                            @statusChange="preFilterStatus" />
                <distinct v-show="active === 2"
                            ref="distinct"
                            :step="datasource.step"
                            :schema="datasource.dataset.schema"
                            @statusChange="distinctStatus" />
                <post-filter v-show="active === 3"
                                ref="postfilter"
                                :step="datasource.step"
                                :schema="datasource.dataset.schema"
                                @statusChange="postFilterStatus" />
                <outputs v-show="active === 4"
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
import PreFilter from './steps/commands/pre-filter/preFilterView'
import PostFilter from './steps/commands/post-filter/postFilterView'
import Distinct from './steps/commands/distinct/distinctView'
import Outputs from './steps/commands/output/outputView'

export default {
    components: {
        ElSteps,
        ElStep,
        ElButton,
        PreFilter,
        PostFilter,
        Distinct,
        Outputs
    },
    data() {
        return {
            active: 1,
            flowVersion: "developer",
            stepsDefs: [
                {
                    title: "Pre-Filter",
                    index: 1,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Distinct",
                    index: 2,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Post-Filter",
                    index: 3,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Outputs",
                    index: 4,
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
        distinctStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[1].status = "success"
            } else {
                this.stepsDefs[1].status = "error"
            }
        },
        postFilterStatus(status) {
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
        save() {
            const params = {
                "keys": this.$refs.distinct.datasource.revert2Defs().keys,
                "preFilter": this.$refs.prefilter.datasource.revert2Defs(),
                "postFilter": this.$refs.postfilter.datasource.revert2Defs(),
                "globalCount": this.$refs.distinct.datasource.revert2Defs().globalCount
            }
            this.datasource.saveAndGenCode(this.projectId, this.jobName, params)
        }
    },
    mounted() {
        this.projectId = this.getUrlParam("projectId")
        this.projectName = this.getUrlParam("projectName")
        // this.projectIdTest = "alfredtest"
        // this.jobName = "distinct"
		this.jobName = this.getJobName()
        // this.inputDsName = this.getUrlParam("inputName")
        this.datasetId = this.getUrlParam("datasetId")
        this.datasource.refreshData(this.projectId, this.jobName)
        this.datasource.refreshMateData(this.projectId, this.datasetId)
    },
    updated() {

    },
    watch: {
        active() {
            this.$refs.prefilter.validate()
            this.$refs.distinct.validate()
            this.$refs.postfilter.validate()
            this.$refs.outputs.validate()
        }
    }
}
</script>
<style lang="scss">
    .topn {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;

        .op-factories {
            // background: red;
        }

        .topn_header {
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

        .topn_area {
            width: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: row;

            .topn_left {
                display: flex;
                flex-direction: row;
                margin-left: 80px;
                justify-content: space-around;
            }

            .topn_right {
                display: flex;
                flex-grow: 1;
                flex-direction: row;
                justify-content: space-around;

            }
        }
    }
</style>

