<template>
    <div>
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="scenario">
            <scenario-nav 
				:scenario="datasource.scenario" 
				@active="activeChange" 
				@save="saveAll"></scenario-nav>
            <div class="scenario-container" v-if="activeName === 'Setting'">
                <detail-form :scenario="datasource.scenario"></detail-form>
                <trigger-lst :triggers="triggerDisplay"
                             :scenario-id="[datasource.scenario['project-id'], datasource.scenario.id].join('_')" />
                <report-lst :triggers="[]"></report-lst>
            </div>
            <div v-else class="scenario-container">
                <scenario-steps :steps="stepDisplay"
                                :scenario-id="[datasource.scenario['project-id'], datasource.scenario.id].join('_')" />
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
import StepPolicy from "./policy/step-policy"
import datasource from "./model/datasource"

export default {
    data() {
        return {
            activeName: "Setting",
            triggerDisplay: [],
            stepDisplay: []
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
        this.datasource.model()
    },
    watch: {
        "datasource.triggers": function() {
            this.triggerAdapter()
        },
        "datasource.steps": function() {
            this.stepAdapter()
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
                result["active"] = x["active"]
                result["scenarioId"] = x["scenario-id"]
                result["id"] = x["id"]
                result["index"] = x["index"]
                result["resourceArn"] = x["resource-arn"]
                result["traceId"] = x["trace-id"]
                result["edited"] = false
                result["deleted"] = false
                return result
            })
        },
        saveAll() {
            let result = true
			const event = new Event("event")
            event.args = {
                callback: "saveScenario",
                element: this,
                param: {
                    name: "saveScenario",
                    projectName: this.allData.projectName,
                    projectId: this.allData.projectId,
                    scenarioName: this.allData.scenarioName,
                    scenarioId: this.allData.scenarioId
                }
            }
            this.$emit('event', event)
            // if (result) {
            //     result = this.deleteTriggers()
            // }
            // if (result) {
            //     result = this.saveEditedTriggers()
            // }

            // if (result) {
            //     result = this.deleteSteps()
            // }
            // if (result) {
            //     result = this.saveEditedSteps()
            // }

            if (result) {
                alert("save success")
            } else {
                alert("save error")
            }
            return result
        },
        saveEditedTriggers() {
            let result = false
            for (let idx = 0; idx < this.triggerDisplay.length; ++idx) {
                const tmp = this.triggerDisplay[idx]
                if (tmp.edited) {
                    if (!this.triggerPolicy.createOrUpdateTriggerResource(tmp)) break
                    if (!this.triggerPolicy.createOrUpdateTriggerIndex(tmp)) break
                }
                result = true
            }
            return result
        },
        saveEditedSteps() {
            let result = false
            for (let idx = 0; idx < this.stepDisplay.length; ++idx) {
                const tmp = this.stepDisplay[idx]
                if (tmp.edited) {
                    if (!this.stepPolicy.createOrUpdateStepIndex(tmp)) break
                }
                result = true
            }
            return result
        },
        deleteTriggers() {
            let result = false
            for (let idx = 0; idx < this.triggerDisplay.length; ++idx) {
                const tmp = this.triggerDisplay[idx]
                if (tmp.deleted) {
                    if (!this.triggerPolicy.deleteTriggerResource(tmp)) break
                    if (!this.triggerPolicy.deleteTriggerIndex(tmp)) break
                }
                result = true
            }
            return result
        },
        deleteSteps() {
            let result = false
            for (let idx = 0; idx < this.stepDisplay.length; ++idx) {
                const tmp = this.stepDisplay[idx]
                if (tmp.deleted) {
                    if (!this.stepPolicy.deleteStepIndex(tmp)) break
                }
                result = true
            }
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
    }

    .scenario-container {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-grow: 1;
    }
</style>
