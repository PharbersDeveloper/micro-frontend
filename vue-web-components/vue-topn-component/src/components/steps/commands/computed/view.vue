<template>
    <div class="computed">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="computed-title">
            <div class="computed-title-p">
                <h2>Computed Columns</h2>
            </div>
        </div>
        <div class="computed-list" v-if="datasource">
            <div class="computed-item"
                 v-for="(item, index) in datasource.command.computedCols"
                 :key="index"
                 @click="computedClicked(item, index)">
                <span>新建列名</span>
                <el-input class="computed-item-title" v-model="item.name"></el-input>
                <span>保存为</span>
                <select v-model="item.type">
                    <option v-for="(op, opi) in concretDefs.typeDefs" :key="opi" :value="op.cal" :label="op.desc" />
                </select>
                <span>模式</span>
                <select v-model="datasource.command.pattern">
                    <option v-for="(op, opi) in concretDefs.pattern" :key="opi" :value="op.cal" :label="op.desc" />
                </select>
                <el-button type="text" @click="datasource.command.removeComputedCol(index)">删除</el-button>
            </div>
        </div>
        <div class="computed-expression" v-if="datasource">
            <ul class="computed-schema-list">
                <li v-for="(item, index) in schema" :key="index" @click="itemClicked(item.src)">{{item.src}}</li>
            </ul>
            <el-input class="computed-expression-expr"
                      type="textarea"
                      :rows="10"
                      v-model="currentExpr"
                      placeholder="Please input" />
        </div>

        <div class="computed-add-button">
            <el-button type="primary" @click="datasource.command.insertComputedCol()">添加</el-button>
        </div>
    </div>
</template>
<script>
import ElInput from 'element-ui/packages/input/index'
import ElButton from 'element-ui/packages/button/index'
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
        schema: Array,
        concretDefs: {
            type: Object,
            default: () => {
                return PhComputedDefs
            }
        }
    },
    components: {
        ElInput,
        ElButton
    },
    mounted() {
        this.datasource = new PhComputedStep(this.step)
        this.currentExpr = this.datasource.command.computedCols[0]["expr"]
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
        /*width: 100%;*/
        min-width: 800px;
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
            cursor: pointer;
            border: 1px solid greenyellow;


            .computed-item-title {
                width: 100px;
            }

            .computed-item-type {

            }

            .computed-item-mode {

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

        .computed-add-button {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
    }
</style>
