<template>
    <div class="scenario-steps-container">
        <div class="scenario-step-lst">
            <ul>
                <li v-for="(item, index) in steps" :key="index" class="scenario-step-lst-item">
                    <p class="el-icon-s-operation" />
                    <span><b>运行</b></span>
                    <span style="flex-grow: 1"><b>{{item.name}}</b></span>
                    <el-button class="el-icon-delete-solid" @click="deleteStep(item)" />
                </li>
            </ul>
        </div>
        <el-divider direction="vertical" class="divider"></el-divider>
        <div class="scenario-step-detail">
            <el-form label-width="120px">
                <el-form-item label="重命名">
                    <el-input v-model="selectStep.name" placeholder="step name"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="primary">添加目标数据集</el-button>
                </el-form-item>
                <el-form-item label="运行模式">
                    <el-select value="" placeholder="">
                        <el-option
                                v-for="iter in options"
                                :key="iter.index"
                                :label="iter.desc"
                                :value="iter.cat">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="忽略失败">
                    <el-checkbox v-model="selectStep.checked">失败的脚本不会标记Scenario 运行失败</el-checkbox>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import ElButton from "element-ui/packages/button/index"
import ElInput from "element-ui/packages/input/index"
import ElForm from "element-ui/packages/form/index"
import ElFormItem from "element-ui/packages/form-item/index"
import ElDivider from "element-ui/packages/divider/index"
import ElSelect from "element-ui/packages/select/index"
import ElOption from "element-ui/packages/option/index"
import ElCheckbox from "element-ui/packages/checkbox/index"

export default {
    data() {
        return {
            selectStep: {},
            options: [
                {
                    index: 0,
                    cat: "non-recursive",
                    desc: "单步运行"
                },
                {
                    index: 1,
                    cat: "recursive",
                    desc: "递归运行"
                }
            ]
        }
    },
    props: {
        steps: Array
    },
    components: {
        ElButton,
        ElForm,
        ElFormItem,
        ElInput,
        ElDivider,
        ElSelect,
        ElOption,
        ElCheckbox
    },
    computed: {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        deleteStep(item) {
            console.log(item)
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .scenario-steps-container {
        display: flex;
        flex-direction: row;

        .divider {
            height: auto;
        }

        .scenario-step-lst {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            min-width: 200px;
            max-width: 600px;

            padding: 30px;

            .scenario-step-lst-item {
                display: flex;
                flex-direction: row;
                border: 1px solid grey;
            }
        }

        .scenario-step-detail {
            display: flex;
            flex-direction: column;
            flex-grow: 2;

            /*margin: 1px auto;*/
            padding: 14px 36px;
            max-width: 800px;
        }
    }

</style>
