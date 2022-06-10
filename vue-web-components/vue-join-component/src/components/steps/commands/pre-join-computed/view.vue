<template>
    <div class="computed">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="computed-title">
            <div class="computed-title-p">
                <h2>Computed Columns</h2>
            </div>
        </div>
        <div class="multi-computed-c" v-if="datasource">
            <div class="multi-computed-item" v-for="(item, index) in datasource.commands" :key="index">
                <div class="computed-ds-item-title">
                    <h3>{{item.meta.name}}</h3>
                </div>

                <el-divider></el-divider>

                <div class="computed-ds-item-col-list" >
                    <div class="computed-item" v-for="(cur, index) in item.detail.computedCols" :key="index">
                        <div class="computed-item-detail">
                            <span>列名:</span>
                            <span>{{cur.name}}</span>
                            <span>类型:</span>
                            <span>{{cur.type}}</span>
                        </div>
                        <div class="computed-item-operator">
                            <el-button type="text" >修改</el-button>
                            <el-button type="text" >删除</el-button>
                        </div>
                    </div>
                </div>

                <div class="computed-add-button">
                    <el-button type="primary" >添加</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import ElInput from 'element-ui/packages/input/index'
import ElButton from 'element-ui/packages/button/index'
import ElDivider from 'element-ui/packages/divider/index'
// import ElDescriptions from 'element-ui/packages/descriptions/index'
// import ElDescriptionsItem from 'element-ui/packages/descriptions-item/index'
import { PhComputedDefs } from "./defs"
import PhComputedStep from "./step"

export default {
    data() {
        return {
            datasource: null,
            currentIdx: 0,
            currentExpr: ""
        }
    },
    props: {
        step: Object,
        schema: Object,
        concretDefs: {
            type: Object,
            default: () => {
                return PhComputedDefs
            }
        }
    },
    components: {
        ElDivider,
        // ElInput,
        ElButton,
        // ElDescriptions,
        // ElDescriptionsItem
    },
    mounted() {
        this.datasource = new PhComputedStep(this.step)
        // this.currentExpr = this.datasource.command.computedCols[0]["expr"]
    },
    methods: {
        itemClicked(v) {
            this.currentExpr += "`" + v + "`"
        },
        computedClicked(it, idx) {
            this.currentExpr = it.expr
            this.currentIdx = idx
        },
        validate() {
            this.$emit('statusChange', this.datasource.validate())
        }
    },
    computed: {

    },
    watch: {
        currentExpr(n) {
            this.datasource.command.computedCols[this.currentIdx]["expr"] = n
        }
    }
}
</script>
<style lang="scss" scoped>
    * {
        letter-spacing: .4px;
        line-height: 1.6;
        box-sizing: border-box;
    }
    .computed {
        margin-top: 4px;
        width: 100%;
        /*min-width: 800px;*/
        padding: 4px;
        display: flex;
        flex-direction: column;

        .computed-title {
            display: flex;
            flex-direction: column;

            .computed-title-p {
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

        .computed-list {
            display: flex;
            flex-direction: column;
        }

        .computed-item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border: 1px solid greenyellow;

            .computed-item-detail {
                display: flex;
                flex-direction: row;
            }

            .computed-item-operator {
                display: flex;
                flex-direction: row;
            }
        }

        .computed-expression {
            display: flex;
            flex-direction: row;


            .computed-schema-list {
                border: 1px solid grey;
                height: 500px;
                width: 400px;
                overflow: auto;

                li {
                    cursor: pointer;
                }
            }

            .computed-expression-expr {
                margin: 30px 0 0 20px;
            }
        }

        .multi-computed-c {
            display: flex;
            flex-direction: row;

            .multi-computed-item {
                display: flex;
                flex-direction: column;
                width: 500px;

                border: 1px solid grey;
            }

            .computed-ds-item-col-list {
                display: flex;
                flex-direction: column;
                flex-grow: 1;

                .computed-ds-item-col-item {

                }
            }
        }

        .computed-add-button {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
    }
</style>
