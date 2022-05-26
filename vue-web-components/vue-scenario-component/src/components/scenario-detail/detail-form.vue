<template>
    <div class="scenario-detail">
        <h2>运行</h2>
        <el-form :model="scenario" label-width="120px">
            <el-form-item label="自动触发" prop="delivery">
                <el-switch v-model="scenario.active"></el-switch>
            </el-form-item>
            <el-form-item label="运行用户名">
                <el-input v-model="scenario['show-name']"></el-input>
            </el-form-item>
            <el-form-item label="配置参数">
                <el-input type="textarea" v-model="scenario.args"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="saveScenario">Save</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
// import { staticFilePath } from '../../config/envConfig'
import ElForm from "element-ui/packages/form/index"
import ElFormItem from "element-ui/packages/form-item/index"
import ElSwitch from "element-ui/packages/switch/index"
import ElInput from "element-ui/packages/input/index"
import ElButton from "element-ui/packages/button/index"
import ScenarioPolicy from "./policy/scenario-policy"

export default {
    components: {
        ElForm,
        ElFormItem,
        ElSwitch,
        ElInput,
        ElButton
    },
    data() {
        return {

        }
    },
    props: {
        scenario: Object,
        policy: {
            type: Object,
            default: () => {
                return new ScenarioPolicy('1')
            }
        }
    },
    computed: {

    },
    mounted() { },
    watch: {

    },
    methods: {
        saveScenario() {
            const result = this.policy.createOrUpdateScenarioIndex(this.scenario)
            if (result) {
                alert("save scenario success")
            } else {
                alert("save scenario error")
            }
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

    .scenario-detail {
        border: 1px solid #666;
        margin: 1px auto;
        padding: 14px 36px;
        width: 800px;
		margin-bottom: 40px;
    }
</style>
