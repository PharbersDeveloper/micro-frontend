<template>
    <div class="group-container">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="group-title">
            <div class="group-title-p">
                <h2>Other Columns</h2>
            </div>
        </div>
        <div class="group-agg-container" v-if="datasource">
            <div class="group-agg-op">
                <el-table :data="notGroupedCommands"
                          ref="table"
                          style="width: 100%"
                          height="calc(100vh - 260px)"
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
                    <el-table-column width="700">
                        <template slot-scope="scope">
                            <div class="group-check-box">
                                <el-checkbox-button v-model="scope.row.countDistinct">Distinct</el-checkbox-button>
                                <el-checkbox-button v-model="scope.row.min">Min</el-checkbox-button>
                                <el-checkbox-button v-model="scope.row.max">Max</el-checkbox-button>
                                <el-checkbox-button v-model="scope.row.sum">Sum</el-checkbox-button>
                                <el-checkbox-button v-model="scope.row.avg">Avg</el-checkbox-button>
                                <el-checkbox-button v-model="scope.row.stddev">Stddev</el-checkbox-button>
                                <el-checkbox-button v-model="scope.row.count">count</el-checkbox-button>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column width="300">
                        <template slot-scope="scope">
                            <div class="group-check-box">
                                <el-checkbox-button v-model="scope.row.first">First</el-checkbox-button>
                                <el-checkbox-button v-model="scope.row.last">Last</el-checkbox-button>
                                <el-checkbox-button v-model="scope.row.concat">Concat</el-checkbox-button>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column width="120">
                        <template slot-scope="scope">
							<div class="popover" v-show="scope.row.showPopover && (scope.row.first || scope.row.last || scope.row.concat)">
                                <div class="popitem" v-show="scope.row.first || scope.row.last">
                                    <div class="label">Order first/last by</div>
                                    <select 
                                        v-model="scope.row.orderColumn">
                                        <option v-for="(item, index) in schema" :label="item.src" :key="index" :value="item.src" />
                                    </select>
                                </div>
                                <div class="popitem" v-show="scope.row.first || scope.row.last">
                                    <div class="label">First/last not null</div>
                                    <el-checkbox v-model="scope.row.firstLastNotNull"></el-checkbox>
                                </div>
                                <div class="popitem" v-show="scope.row.concat">
                                    <div class="label">Concat separator</div>
                                    <el-input v-model="scope.row.concatSeparator"></el-input>
                                </div>
                                <div class="popitem" v-show="scope.row.concat">
                                    <div class="label">Concat distinct</div>
                                    <el-checkbox v-model="scope.row.concatDistinct"></el-checkbox>
                                </div>
                            </div>
                            <div class="group-check-box">
                                <el-button 
                                    :disabled="!scope.row.first && !scope.row.last && !scope.row.concat"
                                    @click="showOptionPopoverClick(scope.row)">option
                                </el-button>
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
// import ElPopover from 'element-ui/packages/popover/index'
import ElInput from 'element-ui/packages/input/index'
// import ElForm from 'element-ui/packages/form/index'
// import ElFormItem from 'element-ui/packages/form-item/index'
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
            checkedKeys: [],
            ignoredClearMsg: false,
			schemasArray: [],
			selection: []
        }
    },
    props: {
        step: Object,
        schema: Array,
        identifiers: Array,
        concretDefs: {
            type: Object,
            default: () => {
                return PhGroupDefs
            }
        }
    },
    components: {
        ElInput,
        ElButton,
        ElTable,
        ElTableColumn,
        ElCheckbox,
        ElCheckboxButton
    },
    mounted() {
        this.datasource = new PhGroupStep(this.step, this.selection, this.schema)
        // this.computedGroupCount = this.datasource.isComputedGroupCount()
		// this.notGroupedCommands = this.resetSelectGroupKeys()
		this.validate()
    },
    methods: {
		showOptionPopoverClick(data) {
            data.showPopover = !data.showPopover
            this.$refs.table.doLayout()
        },
		renderSchema() {
            this.schemasArray = this.$parent.computeSchema()
			this.selection = this.schemasArray.filter(it => !this.identifiers.includes(it))

			this.datasource = new PhGroupStep(this.step, this.selection, this.schemasArray)
            // this.datasource.resetCommands(this.selection)
			// this.datasource.refreshCols(this.selection)
            this.notGroupedCommands = this.resetSelectGroupKeys()
		},
        validate() {
			this.renderSchema()
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

            this.ignoredClearMsg = true
            const that = this
            this.$nextTick(() => {
                res.forEach(x => {
                    if (x.isUsed) {
                        this.ignoredClearMsg = true
                        that.$refs.table.toggleRowSelection(x)
                    }
                })
            })
            return res
        },
        // addSelectedColToKey() {
        //     this.datasource.addCol2Key(this.selectedAdd)
        //     this.selectedAdd = "选中添加"

        //     this.notGroupedCommands = this.resetSelectGroupKeys()
        // },
        // changeComputedGroupCount() {
        //     this.datasource.changeComputedGroupCount(this.computedGroupCount)
        // },
        handleSelectionChange(val) {
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
			this.renderSchema()
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
				// height: calc(100vh - 300px);
				width: calc(100vw - 400px);

				.popover {
                    position: absolute;
                    border: 1px solid #aaa;
                    box-shadow: 0 2px 12px 0  rgba(0, 0, 0, 0.1);
                    z-index: 1;
                    background: #fff;
                    width: 300px;
                    right: 30px;
                    top: 60px;
                    padding: 10px;

                    .popitem {
                        display: flex;
                        align-items: center;

                        .label {
                            width: 150px;
                            max-width: 150px;
                            padding-right: 16px;
                        }

                        /deep/.el-input {
                            width: 120px;
                        }
                    }
                }
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
