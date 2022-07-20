<template>
    <div class="pivot">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="pivot_header">
            <div class="header_left">
                <img :src="defs.iconsByName('pivot')" alt="" />
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
        <div class="pivot_area" v-show="activeName === 'Setting'">
            <div class="pivot_left">
                <el-steps direction="vertical" :active="active" align-center >
                    <el-step v-for="(item, index) in stepsDefs" :key="index" :status="item.status">
                        <template slot="title">
                            <el-button type="text" @click="active = item.index" >{{item.title}}</el-button>
                        </template>
                    </el-step>
                </el-steps>
            </div>
            <div class="pivot_right" v-if="datasource.isReady && datasource.isMetaReady">
                <pre-filter v-show="active === 1"
                            ref="prefilter"
                            :step="datasource.step"
                            :schema="datasource.dataset.schema"
                            @statusChange="preFilterStatus" />
                <computed v-show="active === 2"
                              ref="computed"
                              :step="datasource.step"
                              :schema="datasource.dataset.schema"
                              @statusChange="computedStatus" />
                <pivot v-show="active === 3"
                       ref="pivot"
                       :step="datasource.step"
                       :schema="datasource.dataset.schema"
                       @statusChange="pivotStatus" />
                <other-cols v-show="active === 4"
                            ref="other"
                            :step="datasource.step"
                            :selection="selection"
                            :schema="datasource.dataset.schema"
                            @statusChange="otherStatus" />
                <outputs v-show="active === 5"
                                ref="outputs"
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
import Pivot from './steps/commands/pivot/pivotView'
import OtherCols from './steps/commands/other-cols/view'
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
        Pivot,
        OtherCols,
        Outputs,
		ElRadioGroup,
        ElRadioButton,
		changeInputOutput
    },
    data() {
        return {
            outputsSchema: [],
            active: 3,
			flowVersion: "developer",
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
                    title: "Pivot",
                    index: 3,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Other Columns",
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
            selection: []
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
        pivotStatus(errors) {
            if (errors) {
                this.stepsDefs[2].status = "error"
            } else {
                this.stepsDefs[2].status = "success"
            }
        },
        otherStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[3].status = "success"
            } else {
                this.stepsDefs[3].status = "error"
            }
        },
        outputsStatus(status) {
            // @wodelu 我只给你了写了一个状态的例子，这个逻辑是不对的
            if (status) {
                this.stepsDefs[4].status = "success"
            } else {
                this.stepsDefs[4].status = "error"
            }
        },
        genOutputsSchema() {
            const identifiers = this.$refs.pivot.datasource.revert2Defs().identifiers
            const pivotColumns = this.$refs.pivot.datasource.revert2Defs().pivot.keyColumns
            const valueColumns = this.$refs.pivot.datasource.revert2Defs().pivot.valueColumns.map(x => x.column)
            const otherColumns = this.$refs.other.datasource.revert2Defs().map(x => x.column)

            return identifiers.concat(pivotColumns).concat(valueColumns).concat(otherColumns)
        },
        save() {
			if (this.activeName === "Setting") {

				this.$refs.filter.validate()
				this.$refs.computed.validate()
				this.$refs.topn.validate()
				this.$refs.retrieved.validate()
				this.$refs.outputs.validate()

				let errors = this.stepsDefs.filter(it => it.status === "error")
				if(errors.length > 0) {
					Message.error("请修改参数！", { duration: 3000} )
					return false
				}
				
				const params = {
					"preFilter": this.$refs.prefilter.datasource.revert2Defs(),
                    "computedColumns": this.$refs.computed.datasource.revert2Defs(),
                    "identifiers": this.$refs.pivot.datasource.revert2Defs().identifiers,
                    "pivot": this.$refs.pivot.datasource.revert2Defs().pivot,
                    "otherColumns": this.$refs.other.datasource.revert2Defs(),
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
					id: this.jobId
				},
				new: {
					"name": `compute_${outputNameNew}`,
					"runtime": "pivot",
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
        this.datasetId = this.getUrlParam("datasetId")
        this.datasource.refreshData(this.projectId, this.jobName)
        this.datasource.refreshDataset(this.projectId, this.datasetId)
        this.datasource.refreshInOut(this.projectId, this.jobShowName)
    },
    watch: {
        active(n) {
			if (n === 4) {
                this.selection = this.$refs.pivot.datasource.command.selection
                this.$refs.other.datasource.refreshCols(this.selection)
            }
            if (n === 5) {
                this.outputsSchema = this.genOutputsSchema()
            }
			
            this.$refs.prefilter.validate()
            this.$refs.computed.validate()
            this.$refs.pivot.validate()
            this.$refs.other.validate()
            this.$refs.outputs.validate()
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
    .pivot {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;

        .pivot_header {
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

        .pivot_area {
            width: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: row;
			height: calc(100vh - 100px);

            .pivot_left {
                display: flex;
                flex-direction: row;
				padding: 40px;
                justify-content: space-around;
				border-right: 1px solid #ccc;
            }

            .pivot_right {
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

