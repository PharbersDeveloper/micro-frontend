<template>
    <div class="scenario-steps-container">
        <div class="scenario-step-lst">
            <ul>
                <li v-for="(item, index) in steps" :key="index" class="scenario-step-lst-item" v-show="item.deleted === false" @click="selectStep = item">
                    <p class="el-icon-s-operation" >{{index}}</p>
                    <span><b>运行</b></span>
                    <span style="flex-grow: 1"><b>{{item.name}}</b></span>
                    <el-button class="el-icon-delete-solid" @click="deleteStep" ></el-button>
                </li>
            </ul>
            <el-button
                    class="add_new_step"
                    @click="addNewStep">
                <img :src="add_icon" alt="" />
                添加一个新算子
            </el-button>
        </div>
        <el-divider direction="vertical" class="divider"></el-divider>
        <div class="scenario-step-detail" v-if="selectStep.deleted === false">
            <el-form label-width="120px">
                <el-form-item label="重命名">
                    <el-input v-model="selectStep.name" placeholder="step name" @change="selectStep.edited = true"></el-input>
                </el-form-item>
                <el-form-item label="数据集">
                    <div class="scenario-step-ds-item">
                        <span><b>{{selectStep.ds}}</b></span>
                        <el-button class="el-icon-delete-solid" @click="deleteStepDatasetName" />
                    </div>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="primary" @click="dialogVisible = true">添加目标数据集</el-button>
                </el-form-item>
                <el-form-item label="运行模式">
                    <el-select v-model="selectStep.recursive" placeholder="" @change="selectStep.edited = true">
                        <el-option
                                v-for="iter in options"
                                :key="iter.index"
                                :label="iter.desc"
                                :value="iter.cat">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="忽略失败">
                    <el-checkbox v-model="selectStep['ignore-error']" @change="selectStep.edited = true">失败的脚本不会标记Scenario 运行失败</el-checkbox>
                </el-form-item>
            </el-form>
        </div>
        <el-dialog
                title="输入数据集名称"
                :visible.sync="dialogVisible"
                width="30%">
            <el-form label-width="120px">
                <el-form-item label="数据集名称">
                    <el-input v-model="dsName" ></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="changeDataset">Confirm</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { staticFilePath } from '../../config/envConfig'
import ElButton from "element-ui/packages/button/index"
import ElInput from "element-ui/packages/input/index"
import ElForm from "element-ui/packages/form/index"
import ElFormItem from "element-ui/packages/form-item/index"
import ElDivider from "element-ui/packages/divider/index"
import ElSelect from "element-ui/packages/select/index"
import ElOption from "element-ui/packages/option/index"
import ElCheckbox from "element-ui/packages/checkbox/index"
import ElDialog from "element-ui/packages/dialog/index"

export default {
    data() {
        return {
			add_icon: `${staticFilePath}` + "/add.svg",
            dialogVisible: false,
            dsName: '',
            selectStep: {},
            selectIndex: -1,
            options: [
                {
                    index: 0,
                    cat: false,
                    desc: "单步运行"
                },
                {
                    index: 1,
                    cat: true,
                    desc: "递归运行"
                }
            ]
        }
    },
    props: {
        steps: Array,
        scenarioId: String
    },
    components: {
        ElButton,
        ElForm,
        ElFormItem,
        ElInput,
        ElDivider,
        ElSelect,
        ElOption,
        ElCheckbox,
        ElDialog
    },
    computed: {

    },
    mounted() {
        if (this.steps.length > 0) {
            this.selectStep = this.steps[0]
            this.selectIndex = 0
        }
    },
    watch: {

    },
    methods: {
        deleteStep() {
            if (this.selectStep) {
                this.selectStep.deleted = true
                this.selectStep = {}
            }
        },
        deleteStepDatasetName() {
            if (this.selectStep) {
                this.selectStep.ds = ""
                this.edited = true
            }
        },
        changeDataset() {
            if (this.selectStep && this.dsName) {
                this.selectStep.ds = this.dsName
                this.selectStep.edited = true
            }
            this.dialogVisible = false
        },
        addNewStep() {
            const result = {}
            result["recursive"] = false
            result["ignore-error"] = false
            result["type"] = "dataset"
            result["ds"] = ""
            result["mode"] = "dataset"
            result["name"] = "change me"
            result["scenarioId"] = this.scenarioId
            result["index"] = 1 + Math.max(...this.steps.map(x => x.index))
            result["traceId"] = "alfred"
            result["edited"] = true
            result["deleted"] = false
            this.steps.push(result)
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

    .add_new_step {
        margin-top: 30px;
        width: 216px;
        height: 25px;
        background: #F8D634;
        box-shadow: 1px 2px 4px 0px rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #000000;
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

            .scenario-step-ds-item {
                display: flex;
                flex-direction: row;
                border: 1px solid grey;

                span {
                    flex-grow: 1;
                }
            }
        }
    }

</style>
