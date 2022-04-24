<template>
    <div>
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <scenario-nav :scenario="datasource.scenario" @active="activeChange"></scenario-nav>
        <div class="scenario-container" v-if="activeName === 'Setting'">
            <detail-form :scenario="datasource.scenario"></detail-form>
            <trigger-lst :triggers="datasource.triggers"></trigger-lst>
            <report-lst :triggers="[]"></report-lst>
        </div>
        <div v-else >
            <h2>steps</h2>
        </div>
    </div>
</template>

<script>
// import { staticFilePath } from '../../config/envConfig'
import DetailForm from "./detail-form"
import ScenarioNav from "./scenario-nav"
import TriggerLst from "./trigger-list"
import ReportLst from "./report-lst"
import datasource from "./model/datasource"

export default {
    data() {
        return {
            activeName: "Setting",
        }
    },
    props: {
        datasource: {
            type: Object,
            default: () => {
                return new datasource('1')
            }
        }
    },
    components: {
        DetailForm,
        ScenarioNav,
        TriggerLst,
        ReportLst
    },
    computed: {

    },
    mounted() {
        this.datasource.model()
    },
    watch: {

    },
    methods: {
        activeChange(n) {
            this.activeName = n
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

    .scenario-container {
        display: flex;
        flex-direction: column;
        overflow: auto;
    }
</style>
