<template>
    <div class="join">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="join_header">
            <div class="header_left">
                <img :src="defs.iconsByName('join')" alt="" />
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
        <div class="join_area" v-show="activeName === 'Setting'">
            <div class="join_left">
                <el-steps direction="vertical" :active="active" align-center >
                    <el-step v-for="(item, index) in stepsDefs" :key="index" :status="item.status">
                        <template slot="title">
                            <el-button type="text" @click="active = item.index" >{{item.title}}</el-button>
                        </template>
                    </el-step>
                </el-steps>
            </div>
            <div class="join_right" v-if="datasource.isReady && datasource.isMetaReady">
                <pre-filter v-show="active === 1"
                    ref="prefilter"
                    :step="datasource.step"
                    :datasetArray="datasetArray"
                    :schema="datasource.schema"
					@addDataset="addDataset"
					@delDataset="delDataset"
                    @statusChange="preFilterStatus" />
                <pre-computed v-show="active === 2"
                    ref="percomputed"
                    :step="datasource.step"
                    :schema="datasource.schema"
                    @statusChange="preComputedStatus" />
                <join 
					v-show="active === 3"
                    ref="join"
                    :datasetArray="datasetArray"
                    :step="datasource.step"
                    :schema="datasource.schema"
					@addDatasetFromJoin="addDatasetFromJoin"
					@delDatasetFromJoin="delDatasetFromJoin"
                    @statusChange="joinStatus" />
                <select-cols v-show="active === 4"
                    ref="select"
                    :step="datasource.step"
                    :schema="datasource.schema"
                    @statusChange="selectStatus" />
                <post-computed v-show="active === 5"
                    ref="postcomputed"
                    :step="datasource.step"
                    :schema="computedSchema"
                    @statusChange="postComputedStatus" />
                <post-filter v-show="active === 6"
                    ref="postfilter"
                    :step="datasource.step"
                    :schema="computedSchema"
                    @statusChange="postFilterStatus" />
                <outputs v-show="active === 7"
                    ref="outputs"
                    :schema="computedSchema"
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
import PreComputed from './steps/commands/pre-join-computed/preJoinComputedView'
import Join from './steps/commands/join/joinView'
import SelectCols from './steps/commands/select-cols/selectColsView'
import PostComputed from './steps/commands/post-join-computed/postJoinComputedView'
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
        PreComputed,
        Join,
        SelectCols,
        PostComputed,
        PostFilter,
        Outputs,
        ElRadioGroup,
        ElRadioButton,
        changeInputOutput
    },
    data() {
        return {
            computedSchema: [],
            active: 3,
            flowVersion: "developer",
            stepsDefs: [
                {
                    title: "Pre-Filter",
                    index: 1,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Pre-join Computed Columns",
                    index: 2,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Join",
                    index: 3,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Select Columns",
                    index: 4,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Post-join Computed Columns",
                    index: 5,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Post Filter",
                    index: 6,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Outputs",
                    index: 7,
                    status: "wait"  // wait / process / finish / error / success
                }
            ],
            activeName: "Setting",
            inArray: [],
            outArray: [],
            jobShowName: "",
            outputs: [],
            inputs: [],
            datasetArray: []
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
		addDatasetFromJoin(data) {
			const event = data.args.param
			this.$refs.prefilter.updateData(event.newData, event.oldData, event.unreset)
			this.$refs.percomputed.updateData(event.newDat, event.oldData, event.unreset)
			this.$refs.select.updateData(event.newData, event.oldData, event.unreset)
		},
		delDatasetFromJoin(data) {
			const event = data.args.param
			this.$refs.prefilter.deleteData(event.datasets, event.dsIdxArr)
			this.$refs.percomputed.deleteData(event.datasets, event.dsIdxArr)
			this.$refs.select.deleteData(event.datasets, event.dsIdxArr)
		},
		addDataset(name, index) {
			this.active = 3
			if (name) {
				this.$refs.join.addDataset(name, index)
			} else {
				this.$refs.join.showAddDialog = true
			}
		},
		delDataset(name, index) {
			this.active = 3
			this.$refs.join.delDataset(name, index)
		},
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
			/**
			 * 1. only dis open ==> success
			 * 2. no open ==> wait
			 * 3. open filter ===> 判断对错
			 */
            const status = data.args.param.status, errors = data.args.param.errors

			this.stepsDefs[0].status = "success"
			if (status) {
                this.stepsDefs[0].status = "wait"
            } else if (errors){
                this.stepsDefs[0].status = "error"
            }
        },
        preComputedStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[1].status = "success"
            } else {
                this.stepsDefs[1].status = "error"
            }
        },
        joinStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[2].status = "success"
            } else {
                this.stepsDefs[2].status = "error"
            }
        },
        selectStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[3].status = "success"
            } else {
                this.stepsDefs[3].status = "error"
            }
        },
        postComputedStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[4].status = "success"
            } else {
                this.stepsDefs[4].status = "error"
            }
        },
        postFilterStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[5].status = "success"
            } else {
                this.stepsDefs[5].status = "error"
            }
        },
        outputsStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[6].status = "success"
            } else {
                this.stepsDefs[6].status = "error"
            }
        },
        computeSchema() {
            const result = []
            const selectCols = this.$refs.select.datasource.revert2Defs()
            for (let idx = 0; idx < selectCols.length; ++idx) {
                for (let idn = 0; idn < selectCols[idx]["columns"].length; ++idn) {
                    result.push(selectCols[idx]["prefix"] + selectCols[idx]["columns"][idn])
                }
            }
            return result
        },
        computePostFilterSchema() {
            const result = this.computeSchema()
            const computedCols = this.$refs.postcomputed.datasource.revert2Defs()
            for (let idx = 0; idx < computedCols.length; ++idx) {
                result.push(computedCols[idx]["name"])
            }
            console.log(result)
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
            if (this.activeName === "Setting") {
                const params = {
                    "preFilters": this.$refs.prefilter.datasource.revert2Defs(),
                    "preJoinComputedColumns": this.$refs.percomputed.datasource.revert2Defs(),
                    "joins": this.$refs.join.datasource.revert2Defs(),
                    "selectedColumns": this.$refs.select.datasource.revert2Defs(),
                    "postJoinComputedColumns": this.$refs.postcomputed.datasource.revert2Defs(),
                    "postFilter": this.$refs.postfilter.datasource.revert2Defs()
                }
                this.datasource.saveAndGenCode(this.projectId, this.jobName, params)
            } else {
                this.$refs.changeInputOutput.save()
            }
        },
        changScriptInputOutput(data) {
            let dssInputsOld = []
            let dssInputsNew = []
            let dssInputs = {}

            this.allData.inputs.forEach(item => {
                let inputNameOld = item
                let inputCatOld = this.datasetArray.filter(it => it.name === inputNameOld)[0]["cat"]
                dssInputsOld.push({
                    name: inputNameOld,
                    cat: inputCatOld
                })
            })
            dssInputs.old = dssInputsOld

            data.args.param.inputsArray.forEach(item => {
                let inputNameNew = item
                let inputCatNew = this.datasetArray.filter(it => it.name === inputNameNew)[0]["cat"]
                dssInputsNew.push({
                    name: inputNameNew,
                    cat: inputCatNew
                })
            })
            dssInputs.new = dssInputsNew

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
                    id: this.allData.jobId
                },
                new: {
                    "name": `compute_${outputNameNew}`,
                    "runtime": "topn",
                    "inputs": JSON.stringify(data.args.param.inputsArray),
                    "output": outputNameNew
                }
            }

            if (data.args.param.inputsArray.indexOf(outputNameNew) > -1) {
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
    async mounted() {
        this.projectId = this.getUrlParam("projectId")
        this.projectName = this.getUrlParam("projectName")
        this.jobName = this.getJobName()
        this.jobId = this.getUrlParam("jobId")
        await this.datasource.queryJob(this.projectId, this.jobId)
        this.datasource.refreshData(this.projectId, this.jobName)
        this.datasource.refreshInOut(this.projectId, this.jobShowName)
        // this.datasource.refreshDataset(this.projectId, this.datasource.datasets)
        this.datasource.refreshMateData(this.projectId, this.datasource.datasets)
    },
    watch: {
        active(n) {
            this.$refs.prefilter.validate()
            this.$refs.percomputed.validate()
            this.$refs.join.validate()
            this.$refs.select.validate()
            this.$refs.postcomputed.validate()
            this.$refs.postfilter.validate()
            this.$refs.outputs.validate()

            if (n === 5) {
                this.computedSchema = this.computeSchema()
                // this.outputsSchema = this.genOutputsSchema()
            }

            if (n === 6 || n === 7) {
                this.computedSchema = this.computePostFilterSchema()
            }
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
    .join {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        // overflow: hidden;

        .op-factories {
            // background: red;
        }

        .join_header {
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
                .content {
                    margin-right: 30px;
                }
            }
        }

        .join_area {
            width: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            height: calc(100vh - 100px);

            .join_left {
                display: flex;
                flex-direction: row;
                padding: 40px;
                justify-content: space-around;
                border-right: 1px solid #ccc;
            }

            .join_right {
                display: flex;
                flex-grow: 1;
                flex-direction: row;
                justify-content: space-around;
                background: #f2f2f2;
                // padding: 20px;
            }
        }
    }
</style>

