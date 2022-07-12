<template>
    <div class="stack-output">
        <div class="stack-output-title">
            <h3>Output Columns</h3>
            <div class="stack-output-op">
                <el-button type="text" @click="addSelectColumn">添加</el-button>
                <el-button type="text" >删除全部</el-button>
            </div>
        </div>
        <el-divider class="divider"></el-divider>
        <div class="stack-output-list">
            <div class="stack-output-item" v-for="(item, index) in columns" :key="index">
                <!-- <span>{{index}}</span> -->
                <el-input v-model="item.name"></el-input>
                <el-button type="text" @click="deleteSelectColumn(index)">删除</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import ElButton from 'element-ui/packages/button/index'
import ElDivider from 'element-ui/packages/divider/index'
import ElInput from 'element-ui/packages/input/index'

export default {
    data() {
        return {

        }
    },
    props: {
        columns: Array,
        command: Object
    },
    components: {
        ElInput,
        ElButton,
        ElDivider
    },
    methods: {
        addSelectColumn() {
            this.command.addSelectColumn()
        },
        deleteSelectColumn(index) {
            this.command.deleteSelectColumn(index)
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

    .stack-output {
        display: flex;
        flex-direction: column;
        min-width: 300px;
        border-right: 1px solid #ddd;

        .stack-output-title {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-right: 10px;

            .stack-output-op {
                display: flex;
                flex-direction: row;
            }
        }

        .divider {
            margin-top: 0;
        }

        .stack-output-list {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            margin-right: 10px;

            .stack-output-item {
                display: flex;
                flex-direction: row;
                height: 50px;
                align-items: center;
            }
        }
    }
</style>
