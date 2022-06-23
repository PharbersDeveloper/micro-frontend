<template>
    <div class="pivot-row">
        <div class="pivot-row-title" >
            <h3>行定义</h3>
        </div>
        <div class="pivot-row-content" >
            <div class="pivot-row-lst">
                <div v-for="(item, index) in idf" :key="index" class="pivot-column-item">
                    <span>{{index}}</span>
                    &nbsp;
                    <span>{{item}}</span>
                    &nbsp;
                    <el-button type="text" @click="selectRemoveIdfColumn(index)">删除</el-button>
                </div>
            </div>
            <div>
                <select v-model="selectValue" @change="selectInsertIdfColumn">
                    <option label="选择添加" value="选择添加" ></option>
                    <option v-for="(op, idx) in selection" :key="idx" :label="op" :value="op" />
                </select>
            </div>
        </div>
    </div>
</template>
<script>
// import ElInput from 'element-ui/packages/input/index'
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
        idf: Array,
        selection: Array
    },
    components: {
        ElButton,
        // ElInput
    },
    mounted() {

    },
    methods: {
        selectInsertIdfColumn() {
            this.command.insertIdfColumn(this.selectValue)
            this.selectValue = "选择添加"
            this.$emit("selectionChanged")
        },
        selectRemoveIdfColumn(idx) {
            this.command.removeIdfColumn(idx)
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
    .pivot-row {
        /*margin-top: 4px;*/
        display: flex;
        flex-direction: column;
    }

    .pivot-row-content {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-grow: 1;
    }

    .pivot-row-op {
        display: flex;
        flex-direction: row;
        /*justify-content: space-around;*/
    }

    .pivot-row-lst {
        display: flex;
        flex-direction: column;

        .pivot-row-item {
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
