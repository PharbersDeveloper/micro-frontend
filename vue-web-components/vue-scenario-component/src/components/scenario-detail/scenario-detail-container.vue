<template>
    <div>
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="scenario">
            <scenario-nav :scenario="datasource.scenario" @active="activeChange" @save="saveAll"></scenario-nav>
            <div class="scenario-container" v-if="activeName === 'Setting'">
                <detail-form :scenario="datasource.scenario"></detail-form>
                <trigger-lst :triggers="triggerDisplay"></trigger-lst>
                <report-lst :triggers="[]"></report-lst>
            </div>
            <div v-else class="scenario-container">
                <scenario-steps :steps="datasource.steps"></scenario-steps>
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
import datasource from "./model/datasource"

export default {
    data() {
        return {
            activeName: "Setting",
            triggerDisplay: []
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
        this.datasource.model()
    },
    watch: {
        "datasource.triggers": function() {
            this.triggerAdapter()
        }
    },
    methods: {
        activeChange(n) {
            this.activeName = n
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
                result["edited"] = false
                result["scenarioId"] = x["scenario-id"]
                result["index"] = x["index"]
                result["resourceArn"] = x["resource-arn"]
                result["traceId"] = x["trace-id"]
                return result
            })
        },
        saveAll() {
            this.saveEditedTriggers()
        },
        saveEditedTriggers() {
            const that = this
            for (let idx = 0; idx < this.triggerDisplay.length; ++idx) {
                const tmp = this.triggerDisplay[idx]
                if (tmp.edited) {
                    if (!that.triggerPolicy.createOrUpdateTriggerIndex(tmp)) break
                }
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
    }

    .scenario-container {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-grow: 1;
    }
</style>
