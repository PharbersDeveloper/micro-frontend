<template>
    <div class="outputs">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="outputs-title">
            <div class="outputs-title-p">
                <h2>Outputs Column Names</h2>
            </div>
        </div>
        <div v-if="datasource">
        </div>
    </div>
</template>
<script>
// import ElCheckbox from 'element-ui/packages/checkbox/index'
// import ElInput from 'element-ui/packages/input/index'
// import { staticFilePath } from '../../../../config/envConfig'
// import ElButton from 'element-ui/packages/button/index'
import { PhOutputsDefs } from "./defs"
import PhOutputsStep from "./step"

export default {
    data() {
        return {
            datasource: null
        }
    },
    props: {
        step: Object,
        schema: Array,
        concretDefs: {
            type: Object,
            default: () => {
                return PhOutputsDefs
            }
        }
    },
    components: {
        // ElCheckbox,
        // ElButton,
        // ElInput
    },
    mounted() {
        this.datasource = new PhOutputsStep(this.step)
    },
    methods: {

    },
    computed: {

    }
}
</script>
<style lang="scss" scoped>
    * {
        letter-spacing: .4px;
        line-height: 1.6;
        box-sizing: border-box;
    }
    .outputs {
        margin-top: 4px;
        /*width: 100%;*/
        min-width: 800px;
        padding: 4px;
        display: flex;
        flex-direction: column;

        .outputs-title {
            display: flex;
            flex-direction: column;

            .outputs-title-p {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .ver-center {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                }
            }
        }
    }
</style>
