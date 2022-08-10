<template>
   <div class="script-parameters-area">
        <div class="script-param">
            <div class="title">
                <h2>脚本参数</h2>
            </div>
            <div class="search">
                <img :src="defs.iconsByName('search')" class="search_list_icon" alt="">
                <el-input 
                    placeholder="搜索名称" 
                    ref="colSearch" 
                    v-model="paramName" 
                    class="search_list" 
                    @input="searchParamName(paramName)">
                </el-input>
            </div>
            <div class="count">
                <el-button type="primary"  @click="addScriptParamsList">添加</el-button>
                <div>count: {{totalCount}}</div>
            </div>
            <el-table
                ref="table"
                class="script-param-table"
                :data="scriptParamsData"
                style="width: 100%">
                <el-table-column
                    type="index"
                    label="序号"
                    width="120"
                    :index="indexMethod">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="名称">
                </el-table-column>
                <el-table-column
                    prop="default"
                    label="默认值">
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="默认值类型">
                </el-table-column>
                <el-table-column
                    prop="level"
                    label="优先级(同优先级按排列顺序运行)">
                </el-table-column>
                <el-table-column
                    prop="des"
                    label="描述">
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                        <el-button @click="editParams(scope)" type="text" size="medium">编辑</el-button>
                        <el-button type="text" size="medium">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog
            :title="dialogTitle"
            :visible.sync="changeScriptParamsList"
            width="800px">
            <div class="content">
                <el-form ref="form" label-width="80px">
                    <el-form-item label="活动名称">
                        <el-input v-model="content.name"></el-input>
                    </el-form-item>
                    <div class="type-param">
                        <el-form-item label="默认值" class="default">
                            <el-input v-model="content.default"></el-input>
                        </el-form-item>
                        <select name="type" id="" v-model="content.type">
                            <option value="String">String</option>
                            <option value="Bigint">Bigint</option>
                        </select>
                    </div>
                    <div class="level-param">
                        <el-form-item label="优先级">
                            <el-input-number 
                                :min="1"
                                v-model="content.level"></el-input-number>
                        </el-form-item>
                        <div class="desc">（数值越大，优先级越低）</div>
                    </div>
                    <el-form-item label="描述">
                        <el-input type="textarea" v-model="content.des"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="changeScriptParamsList = false">取消</el-button>
                <el-button type="primary"  @click="on_clickChangeScriptParamsList">确认</el-button>
            </span>
        </el-dialog>
   </div>
</template>
<script>
import ElForm from "element-ui/packages/form/index"
import ElFormItem from "element-ui/packages/form-item/index"
import ElInput from "element-ui/packages/input/index"
import ElButton from 'element-ui/packages/button/index'
import ElTable from 'element-ui/packages/table/index'
import ElTableColumn from 'element-ui/packages/table-column/index'
import PhDagDefinitions from "../policy/definitions/definitions"
import ElDialog from 'element-ui/packages/dialog/src/component'
import ElInputNumber from 'element-ui/packages/input-number/index'

export default {
    components: {
        ElInput,
        ElButton,
        ElDialog,
        ElForm,
        ElFormItem,
        ElTable,
        ElInputNumber,
        ElTableColumn,
    },
    data() {
        return {
            paramName: "",
            totalCount: 0,
            changeScriptParamsList: false,
            scriptParamsList: [],
            dialogTitle: "",
			scopeRowIndex: 0,
            content: {
                "name": "",
                "default": "",
                "type": "String",
                "des": "",
                "level": 1, 
                "index": 1
            },
			scopeRowData: {}
        }
    },
    props: {
        defs: {
            type: Object,
            default: function () {
                return new PhDagDefinitions("1");
            }
        },
        scriptParamsData: Array
    },
    methods: {
        addScriptParamsList() {
            this.dialogTitle = "添加参数"
            this.changeScriptParamsList = true
        },
        searchParamName(data) {
            console.log(data)
        },
        indexMethod(index) {
            return index + 1;
        },
        editParams(scope) {
			this.dialogTitle = "修改参数"
            this.scopeRowIndex = scope.$index
            this.content = JSON.parse(JSON.stringify(scope.row))
            this.scopeRowData = scope.row
            this.changeScriptParamsList = true
        },
        on_clickChangeScriptParamsList() {
            if (this.dialogTitle === "添加参数") {
                this.scriptParamsData.push(this.content)
            } else if (this.dialogTitle === "修改参数") {
                this.scopeRowData = this.content
                this.$refs.table.doLayout()
            }
            this.changeScriptParamsList = false
		},
		save() {
            const event = new Event("event")
            event.args = {
                callback: "changeScriptParams",
                element: this,
                param: {
                    content: this.content
                }
            }
            this.$emit('changeScriptParams', event)
        }
    },
    mounted() {
        this.scriptParamsList = this.scriptParamsData
    },
    watch: {
        
    }
}
</script>
<style lang="scss">
    .script-parameters-area {
        width: 100%;
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        height: calc(100vh - 100px);
        background: #f2f2f2;

        /deep/.el-dialog__header {
            border-bottom: 1px solid #ccc;
        }
        /deep/.el-dialog__headerbtn {
            display: none;
        }
        /deep/.el-dialog__wrapper {
            background: rgba(0, 0, 0, 0.31);
        }

        .content {
            .type-param {
                display: flex;

                .default {
                    width: 640px;
                }

                select {
                    height: 40px;
                    width: 100px;
                    margin-left: 20px;
                }
            }

            .level-param {
                display: flex;

                .desc {
                    margin-top: 10px;
                }
            }
        }

        .script-param {
            width: 100%;
            margin: 40px;
            padding: 20px;
            box-sizing: border-box;
            background: #fff;

            .title {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .search {
                margin-bottom: 20px;
                position: relative;
                left: -20px;
                .search_list {
                    width: 500px;
                    input.el-input__inner {
                        padding-left: 40px;
                    }
                }
                .search_list_icon {
                    width: 20px;
                    position: relative;
                    top: 5px;
                    left: 30px;
                    z-index: 2;
                    color: #ccc;
                }
            }

            .count {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 14px;
                margin-bottom: 20px;
            }

            .script-param-table {
                
            }
            
        }
    }
</style>

