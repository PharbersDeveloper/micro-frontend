<template>
    <div class="origin">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="origin-title">
            <div class="origin-title-p">
                <h2>Origin Columns</h2>
            </div>
        </div>

    </div>
</template>
<script>
// import ElSwitch from 'element-ui/packages/switch/index'
// import ElButton from 'element-ui/packages/button/index'
// import ElCheckbox from 'element-ui/packages/checkbox/index'
import { PhStackOriginDefs } from "./defs"
import PhStackOriginStep from "./step"

export default {
    data() {
        return {
            datasource: null,
            // placeholderSort: "选择列"
            // candiData: []
        }
    },
    props: {
        step: Object,
        schema: Array,
        concretDefs: {
            type: Object,
            default: () => {
                return PhStackOriginDefs
            }
        }
    },
    components: {
        // ElSwitch,
        // ElButton,
        // ElCheckbox
    },
    mounted() {
        this.datasource = new PhStackOriginStep(this.step)
    },
    updated() {

    },
    methods: {
        validate() {
            this.$emit('statusChange', true)
        }
    },
    computed: {

    },
    watch: {

    }
}
</script>
<style lang="scss" scoped>
    * {
        letter-spacing: .4px;
        line-height: 1.6;
        box-sizing: border-box;
    }
    .origin {
        margin-top: 4px;
        min-width: 100%;
        /*min-width: 800px;*/
        display: flex;
        flex-direction: column;
		background: #fff;
		height: fit-content;
		padding: 20px;

        .origin-title {
            display: flex;
            flex-direction: column;

            .origin-title-p {
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
