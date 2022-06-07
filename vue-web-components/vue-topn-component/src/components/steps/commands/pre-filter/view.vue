<template>
    <div class="pre-filter">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <el-form v-if="datasource">
            <el-form-item label="保留符合条件的列">
                <select v-model="datasource.command.action">
                    <option v-for="(item, index) in concretDefs.actions" :value="item.cal" :key="index" :label="item.desc" />
                </select>
            </el-form-item>
        </el-form>
        <div class="condition-selection" v-if="datasource">
            <div class="condition-selection-item" v-for="(cur, index) in datasource.command.cloases" :key="index">
                <div class="condition-selection-content">
                    <select v-model="cur['left']">
                        <!--                    <option v-for="(item, index) in concretDefs.includes" :value="item.cal" :key="index" :label="item.desc" />-->
                        <option value="age" label="age" />
                    </select>
                    <select v-model="cur['op']">
                        <option v-for="(item, index) in concretDefs.includes" :value="item.cal" :key="index" :label="item.desc" />
                    </select>
                    <el-input v-if="cur['op'] !== 'EXISTS' && cur['op'] !== 'NOT-EXISTS'" :value="cur['right']" ></el-input>
                    <el-input v-else disabled ></el-input>
                </div>
                <el-button v-if="index > 0" type="text" @click="datasource.command.delcloases(index)">删除</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { PhPreFilterDefs } from "./defs"
import ElForm from 'element-ui/packages/form/index'
import ElFormItem from 'element-ui/packages/form-item/index'
import ElInput from 'element-ui/packages/input/index'
import ElButton from 'element-ui/packages/button/index'
import PhFilterStep from "./step"

export default {
    data() {
        return {
            datasource: null
        }
    },
    props: {
        step: {
            type: Object
        },
        concretDefs: {
            type: Object,
            default: () => {
                return PhPreFilterDefs
            }
        }
    },
    components: {
        ElFormItem,
        ElForm,
        ElInput,
        ElButton
    },
    mounted() {
        this.datasource = new PhFilterStep(this.step)
    },
    methods: {

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
    .pre-filter {
        margin-top: 4px;
        /*width: 100%;*/
        min-width: 300px;
        padding: 4px;
        display: flex;
        flex-direction: column;

        .condition-selection {
            margin-top: 30px;

            .condition-selection-item {
                display: flex;
                flex-direction: row;

            }

            .condition-selection-content {
                display: flex;
                flex-direction: row;

            }
        }
    }
</style>
