<template>
    <div class="stack">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="stack_header">
            <div class="header_left">
                <img :src="defs.iconsByName('stack')" alt="" />
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
        <div class="stack_area"  v-show="activeName === 'Setting'">
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
                            :datasetArray="datasetArray"
                            :schema="datasource.schema"
                            @addDataset="addDataset"
                            @delDataset="delDataset"
                            @statusChange="preFilterStatus" />
                <select-cols v-show="active === 2"
                             ref="select"
                             :step="datasource.step"
                             :schema="datasource.schema"
                             :datasetArray="datasetArray"
                             @statusChange="selectColsStatus" />
                <origin-cols v-show="active === 3"
                             ref="origin"
                             :step="datasource.step"
                             @statusChange="originStatus" />
                <post-filter v-show="active === 4"
                            ref="postfilter"
                            :step="datasource.step"
                            :schema="computedSchema"
                            @statusChange="postFilterStatus" />
                <outputs v-show="active === 5"
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
                :datasetArray="datasetArray"
            />
        </div>
		<el-dialog
			title="Add an input dataset"
			:visible.sync="showAddDialog"
			width="30%" >
			<div>
				<div class="add-ds-content">
					<span>dataset</span>
					<select v-model="newDsName">
						<option v-for="(op, opi) in datasetArray" :key="opi+'addds'" :value="op.name" :label="op.name" />
					</select>
				</div>
				<span slot="footer" class="dialog-footer">
					<el-button @click="showAddDialog = false">Cancel</el-button>
					<el-button type="primary" @click="addDatasetConfirm">Confirm</el-button>
				</span>
			</div>
		</el-dialog>
    </div>
</template>
<script>
import PhDagDefinitions from './policy/definitions/definitions'
import ElSteps from 'element-ui/packages/steps/index'
import ElStep from 'element-ui/packages/step/index'
import ElButton from 'element-ui/packages/button/index'
import PhDataSource from './model/datasource'
import PreFilter from './steps/commands/pre-filter/preFilterView'
import SelectCols from './steps/commands/select-cols/selectColsView'
import OriginCols from './steps/commands/origin-cols/originColsView'
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
        SelectCols,
        OriginCols,
        PostFilter,
        Outputs,
        ElRadioGroup,
        ElRadioButton,
        changeInputOutput
    },
    data() {
        return {
            computedSchema: [],
            active: 2,
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
            ],
            activeName: "Setting",
            inArray: [],
            outArray: [],
            jobShowName: "",
            outputs: [],
            inputs: [],
            datasetArray: [],
            changeDs: false,
			showAddDialog: false,
			newDsName: ""
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
            this.changeDs = true
            const event = data.args.param
            let ns = Object.keys(this.datasource.schema).includes(event.newData.name)
            let os = Object.keys(this.datasource.schema).includes(event.oldData.name)
            if (!os) {
                let obj = this.datasetArray.filter(it => it.name === event.oldData.name)[0]
                this.datasource.schema[event.oldData.name] = JSON.parse(obj["schema"])
            } else if (!ns) {
                let obj = this.datasetArray.filter(it => it.name === event.newData.name)[0]
                this.datasource.schema[event.newData.name] = JSON.parse(obj["schema"])
            }

            this.$refs.prefilter.updateData(event.newData, event.oldData, event.unreset)
            this.$refs.percomputed.updateData(event.newData, event.oldData, event.unreset)
            this.$refs.select.updateData(event.newData, event.oldData, event.unreset)
        },
        delDatasetFromJoin(data) {
            this.changeDs = true
            const event = data.args.param
            this.$refs.prefilter.deleteData(event.datasets, event.dsIdxArr)
            this.$refs.percomputed.deleteData(event.datasets, event.dsIdxArr)
            this.$refs.select.deleteData(event.datasets, event.dsIdxArr)
        },
        addDataset() {
            this.changeDs = true
			this.showAddDialog = true
        },
		addDatasetConfirm() {
			const index = Math.max(this.$refs.prefilter.datasource.commands.map(it => it.meta.index)) + 1
			this.$refs.prefilter.updateData(this.newDsName, index)
			// this.$refs.select.updateData(this.newDsName, index)
		},
        delDataset(name, index) {
            this.changeDs = true
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
        selectColsStatus(data) {
            console.log(data)
            // const status = data.args.param.status, errors = data.args.param.errors

            // this.stepsDefs[1].status = "success"
            // if (status) {
            //     this.stepsDefs[1].status = "wait"
            // } else if (errors){
            //     this.stepsDefs[1].status = "error"
            // }
        },
        originStatus(status) {
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
        postFilterStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[3].status = "success"
            } else {
                this.stepsDefs[3].status = "error"
            }
        },
        computeSchema() {
            const result = []
            const tmp = this.$refs.select.datasource.revert2Defs().selectedColumns
            for (let idx = 0; idx < tmp.length; ++idx) {
                result.push({
                    "title": tmp[idx]
                })
            }
            return result
        },
        resetInputs() {
            this.inputs = []
            this.$refs.join.datasource.datasets.forEach(item => {
                this.inputs = this.inputs.concat(item)
            })
        },
        save() {
            if (this.activeName === "Setting") {

                this.$refs.prefilter.validate()
                this.$refs.select.validate()
                this.$refs.origin.validate()
                this.$refs.postfilter.validate()
                this.$refs.outputs.validate()

                let errors = this.stepsDefs.filter(it => it.status === "error")
                if(errors.length > 0) {
                    Message.error("请修改参数！", { duration: 3000} )
                    return false
                }

                if (this.changeDs) {
                    this.resetInputs()
                }

                const params = {
                    "preFilters": this.$refs.prefilter.datasource.revert2Defs(),
                    "selectedColumns": this.$refs.select.datasource.revert2Defs().selectedColumns,
                    "columnsMatches": this.$refs.select.datasource.revert2Defs().columnsMatches,
                    "originColumn": this.$refs.origin.datasource.revert2Defs(),
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
            
            if (data.args.param.inputsArray.indexOf(outputNameNew) > -1) {
                Message.error("input和output不能相同", { duration: 3000} )
                return false
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
        this.datasource.refreshMateData(this.projectId, this.datasource.datasets)
        this.datasource.refreshInOut(this.projectId, this.jobShowName)
        // this.datasource.refreshDataset(this.projectId)
    },
    updated() {

    },
    watch: {
        active(n) {
            this.$refs.prefilter.validate()
            this.$refs.select.validate()
            this.$refs.origin.validate()
            this.$refs.postfilter.validate()
            this.$refs.outputs.validate()

            if (n === 4 || n === 5) {
                this.computedSchema = this.computeSchema()
            }
        },
        activeName(n) {
            if (n === "input/output") {
                this.resetInputs()
            }
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
    .stack {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;

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
                .content {
                    margin-right: 30px;
                }
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
                // padding: 20px;
            }
        }

		.add-ds-content {
            margin-bottom: 40px;
            span {
                margin-right: 40px;
            }
        }

		.dialog-footer {
            display: flex;
            flex-direction: row-reverse;
        }
    }
</style>

