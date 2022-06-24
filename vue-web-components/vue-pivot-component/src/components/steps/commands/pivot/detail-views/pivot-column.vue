<template>
    <div class="pivot-column">
        <div class="pivot-column-title" >
            <h3>列定义</h3>
        </div>
        <div class="pivot-column-content" >
            <div class="pivot-column-lst">
                <div v-for="(item, index) in kc" :key="index" class="pivot-column-item">
                    <span>{{index}}</span>
                    &nbsp;
                    <span>{{item}}</span>
                    &nbsp;
                    <el-button type="text" @click="selectDeleteDeyColumn(index)">删除</el-button>
                </div>
            </div>
            <div>
                <select v-model="selectValue" @change="selectAddKeyColumn">
                    <option label="选择添加" value="选择添加" ></option>
                    <option v-for="(op, idx) in selection" :key="idx" :label="op" :value="op" />
                </select>
            </div>
        </div>
        <div class="pivot-column-op" >
            <span>Pivot Values: &nbsp;</span>
            <select v-model="pivotedColumnType" disabled>
                <option v-for="(item, index) in defs.pivotTypes" :key="index" :label="item.desc" :value="item.cal" />
            </select>
            <el-input style="width: 100px"></el-input>
        </div>
    </div>
</template>
<script>
import ElInput from 'element-ui/packages/input/index'
import ElButton from 'element-ui/packages/button/index'
import { PhPivotDefs } from '../defs'

export default {
    data() {
        return {
            selectValue: "选择添加",
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
        kc: Array,
        selection: Array,
        pivotedColumnType: String
    },
    components: {
        ElButton,
        ElInput
    },
    mounted() {

    },
    methods: {
        selectAddKeyColumn() {
            this.command.insertKeyColumn(this.selectValue)
            this.selectValue = "选择添加"
            this.$emit("selectionChanged")
        },
        selectDeleteDeyColumn(idx) {
            this.command.removeKeyColumn(idx)
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
    .pivot-column {
        /*margin-top: 4px;*/
        display: flex;
        flex-direction: column;
    }

    .pivot-column-content {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-grow: 1;
    }

    .pivot-column-op {
        display: flex;
        flex-direction: row;
        /*justify-content: space-around;*/
    }

    .pivot-column-lst {
        display: flex;
        flex-direction: column;

        .pivot-column-item {
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
