<template>
    <div class="join-container">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="join-title">
            <div class="join-title-p">
                <h2>Join</h2>
            </div>
        </div>

    </div>
</template>
<script>
// import ElButton from 'element-ui/packages/button/index'
// import ElCheckbox from 'element-ui/packages/checkbox/index'
// import ElDivider from 'element-ui/packages/divider/index'
// import ElRadioGroup from 'element-ui/packages/radio-group/index'
// import ElRadio from 'element-ui/packages/radio/index'
// import ElSwitch from 'element-ui/packages/switch/index'
// import ElInputNumber from 'element-ui/packages/input-number/index'
// import ElForm from 'element-ui/packages/form/index'
// import ElFormItem from 'element-ui/packages/form-item/index'
import { PhJoinDefs } from "./defs"
import PhJoinStep from "./step"

export default {
    data() {
        return {
            datasource: null,
        }
    },
    props: {
        step: Object,
        schema: Array,
        concretDefs: {
            type: Object,
            default: () => {
                return PhJoinDefs
            }
        }
    },
    components: {
        // ElFormItem,
        // ElForm,
        // ElInputNumber,
        // ElButton,
        // ElCheckbox,
        // ElRadioGroup,
        // ElRadio,
        // ElSwitch,
        // ElDivider
    },
    mounted() {
        this.datasource = new PhJoinStep(this.step)
    },
    methods: {
        sortInserted() {
            this.datasource.command.insertSortCloase(this.placeholderSort)
            this.placeholderSort = "选择列"
        },
        sortDeletion(idx) {
            this.datasource.command.deleteSortCloase(idx)
        },
        keyInserted() {
            this.datasource.command.insertKeyCloase(this.placeholderKey)
            this.placeholderKey = "选择列"
        },
        keyDeletion(idx) {
            this.datasource.command.deleteKeyCloase(idx)
        },
        validate() {
            this.$emit('statusChange', true)
        }
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
    .topn-container {
        margin-top: 4px;
        /*width: 100%;*/
        min-width: 800px;
        padding: 4px;
        display: flex;
        flex-direction: column;

        .topn-title {
            display: flex;
            flex-direction: column;

            .topn-title-p {
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

        .topn-content {

        }

        .topn-sort-item-list {
            display: flex;
            flex-direction: column;

            .topn-sort-item {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .topn-sort-btn-group {
                    display: flex;
                    flex-direction: row;
                }
            }
        }
        .topn-add-btn {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }

        .topn-container-group {
            display: flex;
            flex-direction: column;

        }

        .disabled {
            pointer-events: none;
            opacity: 0.4;
        }

        .topn-sort-title {
            text-align: center;
            vertical-align: middle;
        }

        .topn-sort-del-btn {
            margin-left: 30px;
        }

        .topn-additional {
            margin-top: 30px;

            display: flex;
            flex-direction: column;
        }
    }
</style>
