<template>
    <div class="group">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="group_header">
            <div class="header_left">
                <img :src="defs.iconsByName('group')" alt="" />
                <span>{{jobShowName}}</span>
            </div>
            <div class="header_right">
                <el-radio-group v-model="activeName" class="content">
                    <el-radio-button label="Setting"></el-radio-button>
                    <el-radio-button label="input/output"></el-radio-button>
                </el-radio-group>
                <el-button class="save" @click="save">保存</el-button>
            </div>
        </div>
        <div class="group_area" v-show="activeName === 'Setting'">
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
                        :schemaDafault="datasource.dataset.schema"
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
                        :schema="outputsSchema"
                        @statusChange="postFilterStatus" />
                <outputs v-show="active === 6"
                        ref="output"
                        :schema="outputsSchema"
                        @statusChange="outputsStatus" />
            </div>
            <div v-if="datasource.hasNoSchema">
                Schema 不对，找产品处理
            </div>
        </div>
        <div v-show="activeName === 'input/output'">
            <change-input-output
                ref="changeInputOutput"
                :inputs="inputs"	
                :outputs="outputs"
                :inArray="inArray"
                :outArray="outArray"
                @changScriptInputOutput="changScriptInputOutput"
                :datasetArray="datasetArray"
            />
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
import Computed from './steps/commands/computed/computedView'
import Group from './steps/commands/group/groupView'
import CustomAgg from './steps/commands/custom-agg/customAggView'
import PostFilter from './steps/commands/post-filter/postFilterView'
import Outputs from './steps/commands/output/outputView'
import ElRadioGroup from "element-ui/packages/radio-group/index"
import ElRadioButton from "element-ui/packages/radio-button/index"
import changeInputOutput from "./change-input-output"
import { Message } from 'element-ui'

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
        Outputs,
        ElRadioGroup,
        ElRadioButton,
        changeInputOutput
    },
    data() {
        return {
            computedSchema: [],
            outputsSchema: [],
            active: 3,
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
            ],
            activeName: "Setting",
            inArray: [],
            outArray: [],
            jobShowName: "",
            outputs: [],
            inputs: [],
            datasetArray: [],
            flowVersion: "developer",
            needRefresh: 0
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
            this.jobShowName = jobShowName
            return [this.projectName, this.projectName, this.flowVersion, jobShowName].join("_")
        },
        preFilterStatus(data) {
            const status = data.args.param.status, errors = data.args.param.errors
            this.stepsDefs[0].status = "success"
            if (!status) {
                this.stepsDefs[0].status = "wait"
            } else if (errors){
                this.stepsDefs[0].status = "error"
            }
        },
        computedStatus(data) {
            const status = data.args.param.status, errors = data.args.param.errors
            this.stepsDefs[1].status = "success"
            if (!status) {
                this.stepsDefs[1].status = "wait"
            } else if (errors){
                this.stepsDefs[1].status = "error"
            }
        },
        groupStatus(errors) {
            if (errors) {
                this.stepsDefs[2].status = "error"
            } else {
                this.stepsDefs[2].status = "success"
            }
        },
        customAggStatus() {
            this.stepsDefs[3].status = "wait"
        },
        postFilterStatus(data) {
            const status = data.args.param.status, errors = data.args.param.errors
            this.stepsDefs[4].status = "success"
            if (!status) {
                this.stepsDefs[4].status = "wait"
            } else if (errors){
                this.stepsDefs[4].status = "error"
            }
        },
        outputsStatus() {
            this.stepsDefs[5].status = "success"
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
            const groupedCommands = this.$refs.group.notGroupedCommands
            const keys = this.$refs.group.datasource.keys
            this.outputsSchema = this.datasource.dataset.schema.filter(it => keys.includes(it.src))

            // "concatDistinct", "count", "firstLastNotNull"
            const vals = ["avg", "concat", "first", "countDistinct", "last", "max", "min", "stddev", "sum"]
            groupedCommands.forEach(item => {
                for (const i in item) {
                    if (vals.includes(i) && item[i]) {
                        this.outputsSchema.push({
                            des: item.column + '_' + i,
                            src: item.column + '_' + i,
                            type: item.type,
                        })
                    }
                } 
            })

            if (this.$refs.group.computedGroupCount) {
                this.outputsSchema.push({
                    des: "count",
                    src: "count",
                    type: "bigint",
                })
            }
            return this.outputsSchema
        },
        save() {
            if (this.activeName === "Setting") {

                this.$refs.filter.validate()
                this.$refs.computed.validate()
                this.$refs.group.validate()
                this.$refs.customagg.validate()
                this.$refs.postfilter.validate()
                this.$refs.output.validate()

                let errors = this.stepsDefs.filter(it => it.status === "error")
                if(errors.length > 0) {
                    Message.error("请修改参数！", { duration: 3000} )
                    return false
                }

                let globalCount = true
                if (this.$refs.group.datasource.commands.length > 0) {
                    globalCount =  this.$refs.group.datasource.commands[0].count
                }
                const params = {
                    "globalCount": globalCount,
                    "preFilter": this.$refs.filter.datasource.revert2Defs(),
                    "computedColumns": this.$refs.computed.datasource.revert2Defs(),
                    "keys": this.$refs.group.datasource.revert2Defs().keys,
                    "values": this.$refs.group.datasource.revert2Defs().values,
                    "postFilter": this.$refs.postfilter.datasource.revert2Defs(),
                }

                this.datasource.saveAndGenCode(this.projectId, this.jobName, params)
            } else {
                this.$refs.changeInputOutput.save()
            }
        },
        changScriptInputOutput(data) {
            let inputNameOld = this.allData.inputs[0]
            let inputCatOld = this.datasetArray.filter(it => it.name === inputNameOld)[0]["cat"]
            let inputNameNew = data.args.param.inputsArray[0]
            let inputCatNew = this.datasetArray.filter(it => it.name === inputNameNew)[0]["cat"]
            let dssInputs = {
                old: [{
                    name: inputNameOld,
                    cat: inputCatOld
                }],
                new: [{
                    name: inputNameNew,
                    cat: inputCatNew
                }]
            }
            let outputNameOld = this.allData.outputs[0]
            let outputCatOld = this.datasetArray.filter(it => it.name === outputNameOld)[0]["cat"]
            let outputNameNew = data.args.param.outputsArray[0]
            let outputCatNew = this.datasetArray.filter(it => it.name === outputNameNew)[0]["cat"]
            
            let dssOutputs = {
                old: {
                    name: outputNameOld,
                    cat: outputCatOld
                },
                new: {
                    name: outputNameNew,
                    cat: outputCatNew
                }
            }

            let script = {
                old: {
                    name: this.allData.jobName,
                    id: this.jobId
                },
                new: {
                    "name": `compute_${outputNameNew}`,
                    "runtime": "group",
                    "inputs": JSON.stringify(data.args.param.inputsArray),
                    "output": outputNameNew
                }
            }

            if (inputNameNew === outputNameNew) {
                Message.error("input和output不能相同", { duration: 3000} )
                return false
            }
            
            const event = new Event("event")
            event.args = {
                callback: "changScriptInputOutput",
                element: this,
                param: {
                    name: "changScriptInputOutput",
                    projectId: this.projectId,
                    projectName: this.projectName,
                    dssOutputs: dssOutputs,
                    dssInputs: dssInputs,
                    script: script
                }
            }
            this.$emit('event', event)
        }
    },
    mounted() {
        this.projectId = this.getUrlParam("projectId")
        this.projectName = this.getUrlParam("projectName")
        this.jobName = this.getJobName()
        this.jobId = this.getUrlParam("jobId")
        this.datasetId = this.getUrlParam("datasetId")
        this.datasource.refreshData(this.projectId, this.jobName, this.jobId)
        this.datasource.refreshInOut(this.projectId, this.jobShowName)
        this.datasource.refreshDataset(this.projectId, this.datasetId)
    },
    watch: {
        active(n) {
            if (n === 3) {
                this.computedSchema = this.computeSchema()
            }
            
            if (n === 5 || n === 6) {
                this.outputsSchema = this.genOutputsSchema()
            }

            this.$refs.filter.validate()
            this.$refs.computed.validate()
            this.$refs.group.validate()
            this.$refs.customagg.validate()
            this.$refs.postfilter.validate()
            this.$refs.output.validate()
            
        },
        activeName(n) {
            this.$emit("active", n)
        },
        "allData.inputs": function(n) {
            this.inputs = n
        },
        "allData.outputs": function(n) {
            this.outputs = n
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
        
        .group_header {
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
                .content {
                    margin-right: 30px;
                }
            }
        }

        .group_area {
            width: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            height: calc(100vh - 100px);

            .group_left {
                display: flex;
                flex-direction: row;
                padding: 40px;
                justify-content: space-around;
                border-right: 1px solid #ccc;
            }

            .group_right {
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

