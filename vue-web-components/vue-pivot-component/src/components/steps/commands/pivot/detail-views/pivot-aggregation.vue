<template>
    <div class="pivot-agg">
        <div class="pivot-agg-title" >
            <h3>聚合</h3>
        </div>
        <el-checkbox v-model="command.globalCount">count of Records</el-checkbox>

        <div class="pivot-agg-content" >
            <div class="pivot-agg-lst">
                <div v-for="(item, index) in valueColumns" :key="index" class="pivot-column-item">
                    <span>{{index}}</span>
                    &nbsp;
                    <span>{{displayValueColumn(item)}}</span>
                    &nbsp;
                    <el-button type="text" @click="editAggCondition(item)">编辑</el-button>
                    &nbsp;
                    <el-button type="text" @click="selectRemoveValueColumn(index)">删除</el-button>
                </div>
            </div>
            <div>
                <select v-model="selectValue" @change="selectInsertValueColumn">
                    <option label="选择添加" value="选择添加" ></option>
                    <option v-for="(op, idx) in selection" :key="idx" :label="op" :value="op" />
                </select>
            </div>
        </div>
        <el-dialog
                title="Aggregation"
                :visible.sync="showEditDialog"
                width="30%"
                :before-close="handleClose">

            <div v-if="currentItem">
                <h3>列名</h3>
                <span>{{currentItem.column}}</span>

                <h3>聚合方法</h3>
                <select v-model="aggMethod" >
                    <option v-for="(item, index) in defs.aggregationMethods" :key="index" :label="item.desc" :value="item.cal" />
                </select>

                <div class="order" v-if="aggMethod === 'first' || aggMethod === 'last'">
                    <h3>Order by</h3>
                    <select v-model="orderColumn" >
                        <option v-for="(item, index) in selection" :key="index" :label="item" :value="item" />
                    </select>
                </div>
                <div class="concat" v-if="aggMethod === 'concat'">
                    <h3>Concat</h3>
                    <div>
                        <span>Concat Separator</span>
                        <el-input v-model="concatSeparator"></el-input>
                    </div>
                    <el-checkbox v-model="concatDistinct">Distinct</el-checkbox>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="showEditDialog = false" >取消</el-button>
                <el-button @click="confirmAggMethod" type="primary">确认</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import ElInput from 'element-ui/packages/input/index'
import ElDialog from 'element-ui/packages/dialog/index'
import ElCheckbox from 'element-ui/packages/checkbox/index'
import ElButton from 'element-ui/packages/button/index'
import { PhPivotDefs } from '../defs'

export default {
    data() {
        return {
            selectValue: "选择添加",
            showEditDialog: false,
            currentItem: null,
            aggMethod: "",
            orderColumn: "",
            concatSeparator: "",
            concatDistinct: false
        }
    },
    props: {
        defs: {
            type: Object,
            default: () => {
                return PhPivotDefs
            }
        },
        command: Object,
        valueColumns: Array,
        selection: Array
    },
    components: {
        ElButton,
        ElCheckbox,
        ElDialog,
        ElInput
    },
    mounted() {

    },
    methods: {
        selectInsertValueColumn() {
            this.command.insertValueColumn(this.selectValue)
            this.selectValue = "选择添加"
            this.$emit("selectionChanged")
        },
        selectRemoveValueColumn(idx) {
            this.command.removeValueColumn(idx)
        },
        editAggCondition(item) {
            console.log(item)
            this.currentItem = item
            this.aggMethod = this.resetAggMethod(this.currentItem)
            this.orderColumn = this.currentItem.orderColumn
            this.concatSeparator = this.currentItem.concatSeparator
            this.concatDistinct = this.currentItem.concatDistinct

            this.showEditDialog = true
        },
        handleClose() {
            this.currentItem = null
            // this.orderColumn = ""
            // this.concatSeparator = ""
            // this.concatDistinct = false
        },
        resetAggMethod(item) {
            if (item.avg) return "avg"
            else if(item.concat) return "concat"
            else if(item.count) return "count"
            else if(item.first) return "first"
            else if(item.last) return "last"
            else if(item.max) return "max"
            else if(item.min) return "min"
            else if(item.stddev) return "stddev"
            else if(item.sum) return "sum"
        },
        displayValueColumn(item) {
            return [this.resetAggMethod(item), '(', item.column, ')'].join('')
        },
        confirmAggMethod() {
            this.currentItem.avg = this.aggMethod === "avg"
            this.currentItem.concat = this.aggMethod === "concat"
            this.currentItem.count = this.aggMethod === "count"
            this.currentItem.first = this.aggMethod === "first"
            this.currentItem.last = this.aggMethod === "last"
            this.currentItem.max = this.aggMethod === "max"
            this.currentItem.min = this.aggMethod === "min"
            this.currentItem.stddev = this.aggMethod === "stddev"
            this.currentItem.sum = this.aggMethod === "sum"


            this.currentItem.orderColumn = this.orderColumn
            this.currentItem.concatSeparator = this.concatSeparator
            this.currentItem.concatDistinct = this.concatDistinct

            this.$emit("selectionChanged")
            this.showEditDialog = false
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
    .pivot-agg {
        /*margin-top: 4px;*/
        display: flex;
        flex-direction: column;
    }

    .pivot-agg-content {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-grow: 1;
    }

    .pivot-agg-op {
        display: flex;
        flex-direction: row;
        /*justify-content: space-around;*/
    }

    .pivot-agg-lst {
        display: flex;
        flex-direction: column;

        .pivot-agg-item {
            display: flex;
            flex-direction: row;
        }
    }

    .ver-mid {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

</style>
