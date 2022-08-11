<template>
    <div class="topn">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="topn_header">
            <div class="header_left">
                <img :src="defs.iconsByName('topn')" alt="" />
                <span>{{jobShowName}}</span>
            </div>
            <div class="header_right">
                <el-radio-group 
					:value="activeName"
					@input="clickTab"
					class="content">
                    <el-radio-button 
						label="Setting" ></el-radio-button>
                    <el-radio-button label="脚本参数"></el-radio-button>
                    <el-radio-button label="input/output"></el-radio-button>
                </el-radio-group>
                <el-button class="save" @click="savePopup = true">保存</el-button>
            </div>
        </div>
        <div class="topn_area" v-show="activeName === 'Setting'">
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
					ref="filter"
					:step="datasource.step"
					:schema="datasource.dataset.schema"
					@statusChange="preFilterStatus" />
                <computed v-show="active === 2"
					ref="computed"
					:step="datasource.step"
					:schema="datasource.dataset.schema"
					@statusChange="computedStatus" />
                <top-n v-show="active === 3"
					ref="topn"
					:step="datasource.step"
					@statusChange="topnStatus" />
                <retrieved-cols v-show="active === 4"
					ref="retrieved"
					:step="datasource.step"
					:schema="computedSchema"
					@statusChange="retrievedStatus" />
                <outputs v-show="active === 5"
					ref="outputs"
					:schema="outputsSchema"
					@statusChange="outputsStatus" />
            </div>
            <div v-if="datasource.hasNoSchema">
                Schema 不对，找产品处理
            </div>
        </div>
        <div v-show="activeName === '脚本参数'">
			<script-parameters
				ref="scriptParameters"
				@changeScriptParams="changeScriptParams"
				:scriptParamsData="datasource.scriptParamsData"
			/>
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
            title="尚未保存"
            :visible.sync="ScriptParams"
            width="400px">
            <div class="content">
                当前页面的修改尚未保存！
            </div>
            <span slot="footer" class="dialog-footer">
                <!-- <el-button @click="cancelScriptParams">取消</el-button> -->
                <el-button type="primary"  @click="saveScriptParams(0)">不保存并继续</el-button>
                <el-button type="primary"  @click="saveScriptParams(1)">保存并继续</el-button>
            </span>
        </el-dialog>
		<el-dialog
            title="保存"
            :visible.sync="savePopup"
            width="400px">
            <div class="content">
                保存当前页面参数！
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary"  @click="save(0)">保存不跳转</el-button>
                <el-button type="primary"  @click="save(1)">保存并跳转</el-button>
            </span>
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
import Outputs from './steps/commands/output/outputView'
import Computed from './steps/commands/computed/computedView'
import TopN from './steps/commands/top-n/topnView'
import RetrievedCols from './steps/commands/retrieved-cols/retrievedColsView'
import ElRadioGroup from "element-ui/packages/radio-group/index"
import ElRadioButton from "element-ui/packages/radio-button/index"
import changeInputOutput from "./change-input-output"
import ElDialog from 'element-ui/packages/dialog/src/component'
import scriptParameters from "./script-parameters"
import { Message } from 'element-ui'

export default {
    components: {
        ElSteps,
        ElStep,
        ElButton,
        PreFilter,
        Computed,
        TopN,
        RetrievedCols,
        Outputs,
        ElRadioGroup,
        ElRadioButton,
        changeInputOutput,
		scriptParameters,
		ElDialog
    },
    data() {
        return {
            computedSchema: [],
            outputsSchema: [],
            inArray: [],
            outArray: [],
            jobShowName: "",
            outputs: [],
            inputs: [],
            active: 3,
            flowVersion: "developer",
            activeName: "Setting",
			activeNameOld: "",
            datasetArray: [],
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
                    title: "Top N",
                    index: 3,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Retrieved Columns",
                    index: 4,
                    status: "wait"  // wait / process / finish / error / success
                },
                {
                    title: "Outputs",
                    index: 5,
                    status: "wait"  // wait / process / finish / error / success
                }
            ],
			ScriptParams: false,
			activeNameNext: "",
			savePopup: false,
        }
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
					"projectName": "demo",
					"projectId": "ggjpDje0HUC2JW",
					"inputs": [
						"水果"
					],
					"outputs": [
						"t1"
					],
					"jobName": "compute_t1",
					"jobId": "aFOud5mcnHsH9iR",
					"_isVue": true,
					"popupBack": true
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
		// cancelScriptParams() {
		// 	const name = this.activeName
		// 	this.activeName = this.activeNameNext
		// 	// this.activeName = name
		// 	this.ScriptParams = false
		// },
		saveScriptParams(data) {
			if (data) {
				this.save()
			} else {
				this.renderTab()
			}
			this.activeName = this.activeNameNext
			this.ScriptParams = false
		},
		clickTab(name) {
			this.ScriptParams = true
			this.activeNameNext = name
		},
		changeScriptParams(data) {
			this.datasource.saveScriptParams(data, this)
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
        topnStatus(errors) {
            if (errors) {
                this.stepsDefs[2].status = "error"
            } else {
                this.stepsDefs[2].status = "success"
            }
        },
        retrievedStatus(errors) {
            if (errors) {
                this.stepsDefs[3].status = "error"
            } else {
                this.stepsDefs[3].status = "success"
            }
        },
        outputsStatus(errors) {
            if (errors) {
                this.stepsDefs[4].status = "error"
            } else {
                this.stepsDefs[4].status = "success"
            }
        },
        computeSchema() {
            const result = []
			if (this.datasource.dataset) {
				for (let idx = 0; idx < this.datasource.dataset.schema.length; ++idx) {
					result.push({
						"type": this.datasource.dataset.schema[idx]["type"].toLowerCase(),
						"title": this.datasource.dataset.schema[idx]["src"]
					})
				}
				const addCols = this.$refs.computed.datasource.revert2Defs()
				for (let idx = 0; idx < addCols.length; ++idx) {
					if (addCols[idx]["name"] !== "") {
						result.push({
							"type": addCols[idx]["type"].toLowerCase(),
							"title": addCols[idx]["name"]
						})
					}
				}
			}
            return result
        },
        genOutputsSchema() {
            const retrieved = this.$refs.retrieved.datasource.revert2Defs()
            const retrievedType = this.$refs.retrieved.datasource.command.retrievedCols.length === 0
			let result = []
            if (retrievedType) {
                result = this.computedSchema
            } else {
                result = this.computedSchema.filter(x => retrieved.includes(x.title))
            }
			const addtionCols = this.$refs.topn.addtionCols()

			return result.concat(addtionCols)
        },
		renderTab() {
			if (this.activeName === "input/output") {
				this.$refs.changeInputOutput.rerender()
			} else if (this.activeName === "脚本参数") {
				this.$refs.scriptParameters.rerender()
			} else if (this.activeName === "Setting") {
				this.$refs.filter.rerender()
                this.$refs.computed.rerender()
                this.$refs.topn.rerender()
                this.$refs.retrieved.rerender()
                this.$refs.outputs.rerender()
			}
		},
        save(transition) {
			this.savePopup = false
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
                    "firstRows": this.$refs.topn.datasource.revert2Defs().firstRows,
                    "lastRows": this.$refs.topn.datasource.revert2Defs().lastRows,
                    "keys": this.$refs.topn.datasource.revert2Defs().keys,
                    "preFilter": this.$refs.filter.datasource.revert2Defs(),
                    "orders": this.$refs.topn.datasource.revert2Defs().orders,
                    "denseRank": this.$refs.topn.datasource.revert2Defs().denseRank,
                    "duplicateCount": this.$refs.topn.datasource.revert2Defs().duplicateCount,
                    "rank": this.$refs.topn.datasource.revert2Defs().rank,
                    "rowNumber": this.$refs.topn.datasource.revert2Defs().rowNumber,
                    "retrievedColumns": this.$refs.retrieved.datasource.revert2Defs(),
                    "computedColumns": this.$refs.computed.datasource.revert2Defs()
                }
                this.datasource.saveAndGenCode(this.projectId, this.jobName, params, transition)
            } else if (this.activeName === "input/output") {
                this.$refs.changeInputOutput.save(transition)
            } else if (this.activeName === "脚本参数"){
				this.$refs.scriptParameters.save(transition)
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
                    "runtime": "topn",
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
		this.datasource.refreshScriptParameter(this.projectId, this.jobId)
        this.datasource.refreshData(this.projectId, this.jobName, this.jobId)
        this.datasource.refreshDataset(this.projectId, this.datasetId)
        this.datasource.refreshInOut(this.projectId, this.jobShowName)
    },
    watch: {
        active(n) {
			if (n === 4 || n === 5) {
                this.computedSchema = this.computeSchema()
				this.outputsSchema = this.genOutputsSchema()
			}

            this.$refs.filter.validate()
            this.$refs.computed.validate()
            this.$refs.topn.validate()
            this.$refs.retrieved.validate()
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
    .topn {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;

        .topn_header {
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

        .input-output {
            width: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            height: calc(100vh - 100px);
            background: #f2f2f2;
            .pointer {
                cursor: pointer;
            }
            .left {
                flex: 1;
                padding: 20px;
            }
            .right {
                flex: 1;
                padding: 20px;
            }
            .title {
                margin-bottom: 10px;
            }

            .input-selected {
                width: 100%;
                display: flex;
                flex-direction: column;

                .name {
                    height: initial;
                    line-height: 41px;
                    padding: 10px 15px;
                    margin: 2px 15px -2px 15px;
                    background: #ffffff;
                    box-shadow: 1px 1px 4px -1px #dddddd;
                    margin: 5px 0px 5px 0px;
                }

                button {
                    margin: 20px auto;
                    width: 250px;
                }
            }

            .input-for-select {

                .search {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #ccc;

                    .el-form-item {
                        margin-bottom: 0;
                    }
                }

                .list {
                    padding: 0;
                    margin: 0;
                    font-size: 15px;
                    color: #666666;

                    .addInput {
                        list-style: none;
                        height: 41px;
                        line-height: 41px;
                        padding: 0px 28px 0px 28px;
                        box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
                        border-bottom: 1px solid #ccc;
                    }

                    .mr-4 {
                        margin-right: 4px;
                    }
                }
            }
        }

        .topn_area {
            width: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            height: calc(100vh - 100px);

            .topn_left {
                display: flex;
                flex-direction: row;
                padding: 40px;
                justify-content: space-around;
                border-right: 1px solid #ccc;
            }

            .topn_right {
                display: flex;
                flex-grow: 1;
                flex-direction: row;
                justify-content: space-around;
                background: #f2f2f2;
                padding: 20px;
                overflow: auto;
            }
        }
    }
</style>

