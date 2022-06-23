<template>
    <div class="group-container">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="group-title">
            <div class="group-title-p">
                <h2>Other Columns</h2>
            </div>
        </div>
<!--        <div class="group-keys">-->
<!--            <div class="group-key-title">-->
<!--                <h3>Group Keys</h3>-->
<!--            </div>-->
<!--            <div class="group-key-container" v-if="datasource">-->
<!--                <div class="group-key-list" >-->
<!--                    <div class="group-key-item" v-for="(item, index) in datasource.keys" :key="index">-->
<!--                        <p class="group-key-item-col">{{item}}</p>-->
<!--                        <el-button type="text" >删除</el-button>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="group-key-add-btn" >-->
<!--                    <select v-model="selectedAdd" @change="addSelectedColToKey">-->
<!--                        <option label="选中添加" value="选中添加" />-->
<!--                        <option v-for="(item, index) in schema" :label="item.src" :key="index" :value="item.src" />-->
<!--                    </select>-->
<!--                </div>-->
<!--                <el-checkbox v-model="computedGroupCount" @change="changeComputedGroupCount">计算每个分组的总数</el-checkbox>-->
<!--            </div>-->
<!--        </div>-->
        <div class="group-agg-container" v-if="datasource">
<!--            <div class="group-agg-title">-->
<!--                <h3>Aggregation</h3>-->
<!--            </div>-->
            <div class="group-agg-op">
                <el-table :data="notGroupedCommands"
                          ref="table"
                          style="width: 100%"
                          @selection-change="handleSelectionChange">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            label="列名"
                            prop="column"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            label="类型"
                            prop="type"
                            width="120">
                    </el-table-column>
                    <el-table-column width="400">
                        <template slot-scope="scope">
                            <div class="group-check-box">
                                <el-checkbox-button v-model="scope.row.countDistinct">Distinct</el-checkbox-button>
                                <el-checkbox-button v-model="scope.row.min">Min</el-checkbox-button>
                                <el-checkbox-button v-model="scope.row.max">Max</el-checkbox-button>
                                <el-checkbox-button v-model="scope.row.sum">Sum</el-checkbox-button>
                                <el-checkbox-button v-model="scope.row.avg">Avg</el-checkbox-button>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column width="400">
                        <template slot-scope="scope">
                            <div class="group-check-box">
                                <el-checkbox-button v-model="scope.row.first">First</el-checkbox-button>
                                <el-checkbox-button v-model="scope.row.last">Last</el-checkbox-button>
                                <el-checkbox-button v-model="scope.row.stddev">Stddev</el-checkbox-button>
                                <el-checkbox-button v-model="scope.row.concat">Concat</el-checkbox-button>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column width="120">
                        <template slot-scope="scope">
                            <div class="group-check-box">
                                <el-popover
                                        placement="top-start"
                                        width="500"
                                        trigger="hover">
                                    <el-form label-width="200px">
                                        <el-form-item label="Order first/last by">
                                            <el-input v-model="scope.row.orderColumn"></el-input>
                                        </el-form-item>
                                        <el-form-item label="First/last not null">
                                            <el-checkbox v-model="scope.row.firstLastNotNull"></el-checkbox>
                                        </el-form-item>
                                        <el-form-item label="Concat separator">
                                            <el-input v-model="scope.row.concatSeparator"></el-input>
                                        </el-form-item>
                                        <el-form-item label="Concat distinct">
                                            <el-checkbox v-model="scope.row.concatDistinct"></el-checkbox>
                                        </el-form-item>
                                    </el-form>
                                    <el-button slot="reference">option</el-button>
                                </el-popover>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
import ElButton from 'element-ui/packages/button/index'
import ElCheckbox from 'element-ui/packages/checkbox/index'
import ElCheckboxButton from 'element-ui/packages/checkbox-button/index'
import ElPopover from 'element-ui/packages/popover/index'
import ElInput from 'element-ui/packages/input/index'
import ElForm from 'element-ui/packages/form/index'
import ElFormItem from 'element-ui/packages/form-item/index'
import ElTable from 'element-ui/packages/table/index'
import ElTableColumn from 'element-ui/packages/table-column/index'
import { PhGroupDefs } from "./defs"
import PhGroupStep from "./step"

export default {
    data() {
        return {
            datasource: null,
            selectedAdd: "选中添加",
            computedGroupCount: true,
            isIndeterminate: false,
            checkAll: false,
            notGroupedCommands: [],
            // notGroupedTypes: [],
            checkedKeys: [],
            ignoredClearMsg: false
        }
    },
    props: {
        step: Object,
        schema: Array,
        selection: Array,
        concretDefs: {
            type: Object,
            default: () => {
                return PhGroupDefs
            }
        }
    },
    components: {
        ElFormItem,
        ElForm,
        ElInput,
        ElButton,
        ElTable,
        ElTableColumn,
        ElCheckbox,
        ElCheckboxButton,
        ElPopover,
    },
    mounted() {
        this.datasource = new PhGroupStep(this.step, this.selection, this.schema)
        this.computedGroupCount = this.datasource.isComputedGroupCount()
        // this.notGroupedCommands = this.resetSelectGroupKeys()
        // this.ignoredClearMsg = false
    },
    methods: {
        validate() {
            this.$emit('statusChange', true)
        },
        resetSelectGroupKeys() {
            const res = []
            for (let idx = 0; idx < this.datasource.commands.length; ++idx) {
                if (this.datasource.keys.includes(this.datasource.commands[idx].column)) {
                    res.push(this.datasource.commands[idx])
                } else {
                    this.datasource.commands[idx].isUsed = false
                }
            }

            console.log(1)
            console.log(this.datasource.commands)
            this.ignoredClearMsg = true
            const that = this
            this.$nextTick(() => {
                console.log(2)
                res.forEach(x => {
                    console.log(x)
                    console.log(x.isUsed)
                    if (x.isUsed) {
                        that.$refs.table.toggleRowSelection(x)
                    }
                })
            })
            return res
        },
        addSelectedColToKey() {
            this.datasource.addCol2Key(this.selectedAdd)
            this.selectedAdd = "选中添加"

            this.notGroupedCommands = this.resetSelectGroupKeys()
        },
        changeComputedGroupCount() {
            this.datasource.changeComputedGroupCount(this.computedGroupCount)
        },
        handleSelectionChange(val) {
            console.log(3)
            console.log(this.ignoredClearMsg)
            console.log(this.datasource.commands)
            if (!this.ignoredClearMsg) {
                this.datasource.commands.forEach(x => {
                    x.isUsed = val.includes(x);
                })
            } else {
                this.ignoredClearMsg = false
            }
        },
    },
    computed: {

    },
    watch: {
        "datasource.needRefresh": function() {
            this.notGroupedCommands = this.resetSelectGroupKeys()
            // this.ignoredClearMsg = true
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
    .group-container {
        margin-top: 4px;
        /*width: 100%;*/
        min-width: 1600px;
        padding: 4px;
        display: flex;
        flex-direction: column;

        .group-title {
            display: flex;
            flex-direction: column;

            .group-title-p {
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

        .group-keys {
            .group-key-title {

            }

            .group-key-container {
                display: flex;
                flex-direction: column;
                /*overflow: auto;*/
                /*height: 100vh;*/

                border: 1px solid green;
            }


            .group-key-list {
                display: flex;
                flex-direction: column;

                .group-key-item {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
            }

            .group-key-add-btn {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
        }

        .group-agg-container {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            /*flex-grow: 1;*/

            .group-agg-title {
                display: flex;

            }

            .group-agg-op {
                overflow: auto;
                /*flex-grow: 1;*/
            }


            .group-agg-list {
                display: flex;
                flex-direction: column;

                .group-agg-item {
                    display: flex;
                    flex-direction: row;
                }
            }
        }
    }
</style>
