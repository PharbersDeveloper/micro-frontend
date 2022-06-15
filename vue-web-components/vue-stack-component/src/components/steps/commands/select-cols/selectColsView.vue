<template>
    <div class="stack-select">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="stack-select-title">
            <div class="stack-select-title-p">
                <h2>Select Columns</h2>
            </div>
        </div>
        <div class="stack-select-ds-panel" v-if="datasource">
            <div class="stack-select-ds-lst">
                <div class="stack-select-ds-item"
                     v-for="(item, index) in datasource.command.ds"
                     :key="index" >
                    <div class="stack-select-ver">
                        <div class="stack-select-ds-left">
                            <span>{{index}}</span>
                            &nbsp;
                            <span>{{item}}</span>
                            &nbsp;
                        </div>
                    </div>
                    <el-button type="text" @click="removeStackDs(item, index)">删除</el-button>
                </div>
            </div>

            <div class="stack-select-hor">
                <el-button type="primary" >添加数据集</el-button>
            </div>
        </div>
        <el-divider></el-divider>
        <div class="stack-select-matches-panel" v-if="datasource">
            <output-cols
                    :columns="datasource.command.columns"
                    :command="datasource.command" />
        </div>
    </div>
</template>
<script>
// import ElInput from 'element-ui/packages/input/index'
import ElButton from 'element-ui/packages/button/index'
import ElDivider from 'element-ui/packages/divider/index'
import OutputCols from './detail-view/output-cols'
import { PhSelectColsDefs } from "./defs"
import PhSelectColsStep from "./step"

export default {
    data() {
        return {
            datasource: null,
        }
    },
    props: {
        step: Object,
        schema: Object,
        concretDefs: {
            type: Object,
            default: () => {
                return PhSelectColsDefs
            }
        }
    },
    components: {
        // ElInput,
        ElButton,
        ElDivider,
        OutputCols
    },
    mounted() {
        this.datasource = new PhSelectColsStep(this.step)
        // this.currentExpr = this.datasource.command.computedCols[0]["expr"]
    },
    methods: {
        validate() {
            this.$emit('statusChange', this.datasource.validate())
        },
        removeStackDs(item, index) {
            this.datasource.command.removeStackDs(item, index)
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
    .stack-select {
        margin-top: 4px;
        width: 100%;
        /*min-width: 800px;*/
        display: flex;
        flex-direction: column;
		background: #fff;
		height: fit-content;
		padding: 20px;

        .stack-select-title {
            display: flex;
            flex-direction: column;

            .stack-select-title-p {
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

        .stack-select-ds-panel {
            display: flex;
            flex-direction: column;

            .stack-select-ds-lst {
                display: flex;
                flex-direction: row;
            }

            .stack-select-ds-item {
                display: flex;
                flex-direction: row;
                min-width: 200px;
                border: 1px solid green;
                margin: 5px;
                justify-content: space-between;

                .stack-select-ds-left {
                    display: flex;
                    flex-direction: row;
                }
            }
        }

        .stack-select-matches-panel {
            display: flex;
            flex-direction: row;

        }

        .stack-select-hor {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }

        .stack-select-ver {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
    }
</style>
