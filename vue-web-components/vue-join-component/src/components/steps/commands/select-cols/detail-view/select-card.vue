<template>
    <div class="select-card-container">
        <div class="select-card-title" >
            <div class="select-card-ds">
                <span>{{index}}</span>
                &nbsp;
                <span>{{command.ds}}</span>
            </div>
        </div>
        <el-divider></el-divider>
        <el-form label-width="80px">
            <el-form-item label="前缀">
                <el-input v-model="command.prefix"></el-input>
            </el-form-item>
        </el-form>
        <el-divider></el-divider>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</el-checkbox>
        <el-divider></el-divider>
        <el-checkbox-group v-model="command.retrievedCols" @change="handleCheckedChange" class="select-card-checkbox">
            <el-checkbox v-for="(item) in schema" :label="item.src" :key="item.src">{{item.src}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>
<script>
import ElCheckboxGroup from 'element-ui/packages/checkbox-group/index'
import ElCheckbox from 'element-ui/packages/checkbox/index'
import ElDivider from 'element-ui/packages/divider/index'
import ElForm from 'element-ui/packages/form/index'
import ElFormItem from 'element-ui/packages/form-item/index'
import ElInput from 'element-ui/packages/input/index'

export default {
    data() {
        return {
            isIndeterminate: false,
            checkAll: false,
        }
    },
    props: {
        index: Number,
        command: Object,
        schema: Array,
        test: {
            type: Array,
            default: () => ["a", "b", "c"]
        },

    },
    components: {
        ElCheckboxGroup,
        ElCheckbox,
        ElDivider,
        ElForm,
        ElFormItem,
        ElInput
    },
    methods: {
        handleCheckAllChange(val) {
            this.command.retrievedCols = val ? this.schema.map(x => x.src) : [];
            this.isIndeterminate = false;
        },
        handleCheckedChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.command.retrievedCols.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.schema.length;
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

    .select-card-container {
        display: flex;
        flex-direction: column;
        overflow: auto;
        width: 500px;
        margin-right: 3px;
        border: 1px solid red;

        .select-card-title {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .select-card-ds {

            }

            .select-card-op {

            }

        }

        .select-card-checkbox {
            display: flex;
            flex-direction: column;
        }

        .select-card-content {
            flex-grow: 1;
        }
    }
</style>
