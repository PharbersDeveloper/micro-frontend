<template>
    <div>
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="scenario">
            <scenario-nav 
				:scenario="datasource.scenario"
                :activeTrue="activeIsTrue"
				@active="activeChange" 
				@save="saveAll"
				@trigger="trigger"></scenario-nav>
            <div class="scenario-container" v-if="activeName === 'Setting'">
            <!-- <div class="scenario-container" v-if="activeName === ''">  -->
                <detail-form :scenario="datasource.scenario"></detail-form>
                <trigger-lst :triggers="triggerDisplay" @isTriggerTrue="getTriggerTrue"
					:scenario-id="datasource.scenario.id" />
                <report-lst :reports="reportDisplay" @isTrue="getTrue"
                    :scenario-id="datasource.scenario.id"/>
            </div>
            <div v-else class="scenario-container">
                <scenario-steps :steps="stepDisplay"
					:datasets="datasetsDisplay" 
					:scenario-id="datasource.scenario.id" />
                    <!-- @isStepTrue="getSteptrue" -->
            </div>
        </div>
    </div>
</template>

<script>
// import { staticFilePath } from '../../config/envConfig'
import DetailForm from "./detail-form"
import ScenarioNav from "./scenario-nav"
import TriggerLst from "./trigger-list"
import ReportLst from "./report-lst"
import ScenarioSteps from "./scenario-steps"
import TriggerPolicy from "./policy/trigger-policy"
import ReportPolicy from "./policy/report-policy"
import StepPolicy from "./policy/step-policy"
import datasource from "./model/datasource"
import { Message } from 'element-ui'

export default {
    data() {
        return {
            activeName: "Setting",
            triggerDisplay: [],
            stepDisplay: [],
			datasetsDisplay: [],
            reportDisplay: [],
            isTrue: true,
            isTriggerTrue: true,
            isStepTrue: false,
            activeIsTrue: {active: false}
        }
    },
    props: {
        datasource: {
            type: Object,
            default: () => {
                return new datasource('1')
            }
        },
        triggerPolicy: {
            type: Object,
            default: () => {
                return new TriggerPolicy('1')
            }
        },
        reportPolicy: {
            type: Object,
            default: () => {
                return new ReportPolicy('1')
            }
        },
        stepPolicy: {
            type: Object,
            default: () => {
                return new StepPolicy('1')
            }
        },
		allData: {
            type: Object,
            default: () => {
                return {
                    projectName: "",
                    projectId: ""
                }
            }
        }
    },
    components: {
        DetailForm,
        ScenarioNav,
        TriggerLst,
        ReportLst,
        ScenarioSteps
    },
    computed: {

    },
    mounted() {
		this.datasource.projectId = this.getUrlParam("projectId")
		this.datasource.scenarioId = this.getUrlParam("scenarioId")
		this.datasource.scenarioName = this.getUrlParam("scenarioName")
        this.datasource.model()
    },
    watch: {
        "datasource.triggers": function() {
            this.triggerAdapter()
        },
        "datasource.reports": function() {
            this.reportAdapter()
        },
        "datasource.steps": function() {
            this.stepAdapter()
        },
		"datasource.datasets": function() {
			this.datasetsAdapter()
		},
        activeIsTrue:{
            handler(newValue){
                this.activeIsTrue.active = newValue.active
            },
            deep:true
        }
    },
    methods: {
        getTriggerTrue(value){
            if (value.length == 0) {
                this.isTriggerTrue = true
            } else {
                if (value.every(item => item == false)) {
                    this.isTriggerTrue = true
                } else {
                    this.isTriggerTrue = false
                }
            }
        },
        getTrue(value){
            if (value.length == 0) {
                this.isTrue = true
            } else {
                if (value.every(item => item == false)) {
                    this.isTrue = true
                } else {
                    this.isTrue = false
                }
            }
        },
        getUrlParam( value) {
            let href = window.location.href
            let paramArr = href.split("?")[1].split("&")
            let data = paramArr.find(item => item.indexOf(value) > -1)
            return data ? decodeURI(data).split("=")[1] : undefined
        },
        isJSON_test(value) {
            try {
                var obj = JSON.parse(value);
                if (Object.prototype.toString.call(obj) == '[object Object]' && obj) {
                    return false
                } else {
                    return true
                }
            } catch (e) {
                return true
            }
        },
        forStepArray(array) {
            if (array.length == 0) {
                return true
            } else {
                let value = array.every(item => {
                    if (item.detail.name !== "" && item.confData !== "" && !this.isJSON_test(item.confData)) {
                        return true
                    } else {
                        return false
                    }
                })
                return value
            }
        },
        activeChange(n) {
            if (n == 'Steps') { //跳转steps
                if (this.isTrue && this.isTriggerTrue) {
                    this.activeName = n
                    this.activeIsTrue.active  = true
                } else {
                    Message({
                        type: 'error',
                        showClose: true,
                        duration: 3000,
                        message: '请输入正确的setting参数！'
                    })
                    this.activeName = "Setting"
                    this.activeIsTrue.active  = false
                }
            } else {
                let stepDisplay = this.stepPolicy.dealStepDisplay(this.stepDisplay.filter(it => !it.deleted))
                if (this.forStepArray(stepDisplay)) {
                    this.activeName = n
                    this.activeIsTrue.active = true
                } else {
                    Message({
                        type: 'error',
                        showClose: true,
                        duration: 3000,
                        message: '请修改step参数！'
                    })
                    this.activeName = "Steps"
                    this.activeIsTrue.active = false
                }
            }
        },
		datasetsAdapter() {
			this.datasetsDisplay = this.datasource.datasets.map(x => x)
		},
        stepAdapter() {
            this.stepDisplay = this.datasource.steps.map((x) => {
                const result = {}
                const tmp = JSON.parse(x["detail"])
                result["recursive"] = tmp["recursive"]
                result["ignoreError"] = tmp["ignore-error"]
                result["type"] = tmp["type"]
                result["ds"] = tmp["name"]
                result["mode"] = x["mode"]
                result["name"] = x["name"]
                result["scenarioId"] = x["scenario-id"]
                result["id"] = x["id"]
                result["index"] = x["index"]
                result["traceId"] = x["trace-id"]
                result["confData"] = x["conf-data"]
                result["edited"] = false
                result["deleted"] = false
                return result
            })
        },
        triggerAdapter() {
            this.triggerDisplay = this.datasource.triggers.map((x) => {
                const result = {}
                const tmp = JSON.parse(x["detail"])
                result["start"] = tmp["start"]
                result["period"] = tmp["period"]
                result["value"] = tmp["value"]
                result["timezone"] = tmp["timezone"]
                result["mode"] = x["mode"]
                result["name"] = x["name"]
                result["active"] = x["active"]
                result["scenarioId"] = x["scenario-id"]
                result["id"] = x["id"]
                result["index"] = x["index"]
                result["resourceArn"] = x["resource-arn"]
                result["traceId"] = x["trace-id"]
                result["edited"] = false
                result["deleted"] = false
				console.log(result)
                return result
            })
        },
        reportAdapter() {
            this.reportDisplay = this.datasource.reports.map((x) => {
                const result = {}
                const tmp = JSON.parse(x["detail"])
                result["destination"] = tmp["destination"]
                result["type"] = tmp["type"]
                result["mode"] = x["mode"]
                result["name"] = x["name"]
                result["active"] = x["active"]
                result["index"] = x["index"]
                result["scenarioId"] = x["scenario-id"]
                result["id"] = x["id"]
                result["traceId"] = x["trace-id"]
                result["edited"] = false
                result["deleted"] = false
                return result
            })
        },
		trigger() {
			this.saveAll("trigger")
		},
        forArray(array){
            for (let i = 0; i < array.length; i++) {
                array[i].index = i
            }
            return array
        },
        saveAll(type) {
            let result = true
            let stepDisplay = []
            let triggerDisplay = []
            let reportDisplay = []

            triggerDisplay = this.triggerPolicy.dealTriggerDisplay(this.triggerDisplay.filter(it => !it.deleted))
            reportDisplay = this.reportPolicy.dealReportDisplay(this.reportDisplay.filter(it => !it.deleted))
            stepDisplay = this.stepPolicy.dealStepDisplay(this.stepDisplay.filter(it => !it.deleted))
            stepDisplay = this.forArray(stepDisplay)
            let value = this.forStepArray(stepDisplay)
            if (this.isTrue && this.isTriggerTrue) {
                if (value) {
                    const event = new Event("event")
                    event.args = {
                        callback: "saveScenario",
                        element: this,
                        param: {
                            name: "saveScenario",
                            projectName: this.allData.projectName,
                            projectId: this.allData.projectId,
                            scenarioName: this.datasource.scenarioName,
                            scenarioId: this.datasource.scenarioId,
                            triggerDisplay: triggerDisplay,
                            stepDisplay: stepDisplay,
                            reportDisplay: reportDisplay,
                            type: type
                        }
                    }
                    this.$emit('event', event)
                    return result
                } else {
                    Message({
                        type: 'error',
                        showClose: true,
                        duration: 3000,
                        message: '请修改step参数！'
                    })
                }
            } else {
                Message({
                    type: 'error',
                    showClose: true,
                    duration: 3000,
                    message: '请输入正确的setting参数！'
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .scenario {
        display: flex;
        flex-direction: column;
		height: calc(100vh - 40px);
    }

    .scenario-container {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-grow: 1;
        background-color: #f2f2f2;
        // padding-top: 60px;
    }
</style>
