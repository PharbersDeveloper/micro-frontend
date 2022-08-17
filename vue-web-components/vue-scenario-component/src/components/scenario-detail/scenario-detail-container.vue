<template>
    <div>
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="scenario">
            <scenario-nav 
				:scenario="datasource.scenario"
				@active="activeChange" 
				@save="saveAll"
				@trigger="trigger"></scenario-nav>
            <div class="scenario-container" v-if="activeName === 'Setting'">
                <detail-form :scenario="datasource.scenario"></detail-form>
                <trigger-lst :triggers="triggerDisplay"
					:scenario-id="datasource.scenario.id" />
                <report-lst :reports="reportDisplay"
                    :scenario-id="datasource.scenario.id"/>
            </div>
            <div v-else class="scenario-container">
                <scenario-steps :steps="stepDisplay"
					:datasets="datasetsDisplay"
					:scenario-id="datasource.scenario.id" />
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

export default {
    data() {
        return {
            activeName: "Setting",
            triggerDisplay: [],
            stepDisplay: [],
			datasetsDisplay: [],
            reportDisplay: []
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
		}
    },
    methods: {
        getUrlParam( value) {
            let href = window.location.href
            let paramArr = href.split("?")[1].split("&")
            let data = paramArr.find(item => item.indexOf(value) > -1)
            return data ? decodeURI(data).split("=")[1] : undefined
        },
        activeChange(n) {
            this.activeName = n
        },
		datasetsAdapter() {
			this.datasetsDisplay = this.datasource.datasets.map(x => x)
		},
        stepAdapter() {
            this.stepDisplay = this.datasource.steps.map((x) => {
                const result = {}
                const tmp = JSON.parse(x["detail"])
                result["recursive"] = tmp["recursive"]
                result["ignore-error"] = tmp["ignore-error"]
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
                // result["value"] = tmp["value"]
                // result["timezone"] = tmp["timezone"]
                result["mode"] = x["mode"]
                result["name"] = x["name"]
                // result["active"] = x["active"]
                result["scenarioId"] = x["scenario-id"]
                result["id"] = x["id"]
                // result["index"] = x["index"]
                // result["resourceArn"] = x["resource-arn"]
                result["traceId"] = x["trace-id"]
                result["edited"] = false
                result["deleted"] = false
				// console.log(result)
                return result
            })
        },
		trigger() {
			this.saveAll("trigger")
		},
        saveAll(type) {
            let result = true
			let stepDisplay = []
			let triggerDisplay = []
            let reportDisplay = []

			triggerDisplay = this.triggerPolicy.dealTriggerDisplay(this.triggerDisplay.filter(it => !it.deleted))
			reportDisplay = this.reportPolicy.dealReportDisplay(this.reportDisplay.filter(it => !it.deleted))
			stepDisplay = this.stepPolicy.dealStepDisplay(this.stepDisplay.filter(it => !it.deleted))

			// triggerDisplayDelete = this.triggerPolicy.dealTriggerDisplay(this.triggerDisplay.filter(it => it.deleted))

			// stepDisplayDelete = this.stepPolicy.dealStepDisplay(this.stepDisplay.filter(it => it.deleted))

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
                    reportPolicy: reportDisplay,
					// triggerDisplayDelete: triggerDisplayDelete,
					// stepDisplayDelete: stepDisplayDelete,
					type: type
                }
            }
			console.log(event)
            this.$emit('event', event)
            return result
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
        padding-top: 60px;
    }
</style>
