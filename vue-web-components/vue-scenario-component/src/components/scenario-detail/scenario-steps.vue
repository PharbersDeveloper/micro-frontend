<template>
    <div class="scenario-steps-container">
        <div class="scenario-step-lst">
            <ul>
                <li v-for="(item, index) in steps" :key="index" class="scenario-step-lst-item" v-show="item.deleted === false" @click="selectStep = item">
                    <!-- <p class="el-icon-s-operation" >{{index}}</p> -->
                    <span><b>运行</b></span>
                    <span style="flex-grow: 1"><b>{{item.name}}</b></span>
                    <el-button class="el-icon-delete-solid border-none" @click="deleteStep" ></el-button>
                </li>
            </ul>
            <el-button
				class="add_new_step"
				@click="addNewStep">
                <img class="add" :src="add_icon" alt="" />
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
                        <el-button class="el-icon-delete-solid border-none" @click="deleteStepDatasetName" />
                    </div>
                </el-form-item>
                <el-form-item label="">
                    <el-button class="add-ds" type="primary" @click="dialogVisible = true">添加目标数据集</el-button>
                </el-form-item>
				<el-form-item label="配置参数">
					<el-input 
						type="textarea"
						:rows="4"
						placeholder="请输入配置参数"
						v-model="selectStep.confData"></el-input>
				</el-form-item>
                <el-form-item label="运行模式">
                    <select 
                        class="select-pattern"
                        v-model="selectStep.recursive"
                        @change="selectStep.edited = true">
                        <option v-for="iter in options"
                            :key="iter.index"
                            :label="iter.desc"
                            :value="iter.cat">
                        </option>
                    </select>
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
                    <!-- <el-input v-model="dsName" ></el-input> -->
                    <select 
                        class="select-pattern"
                        v-model="dsName">
                        <option v-for="(iter,index) in datasets"
                            :key="iter.name + index"
                            :label="iter.name"
                            :value="iter.name">
                        </option>
                    </select>
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
        scenarioId: String,
        datasets: Array
    },
    components: {
        ElButton,
        ElForm,
        ElFormItem,
        ElInput,
        ElDivider,
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
            // let stepsArr = this.steps.filter(it => it.deleted === false)
            // if(stepsArr.length > 0) {
            //     return false
            // }
            const idx = this.steps.length > 0 ? 1 + Math.max(...this.steps.map(x => x.index)) : 0
            const result = {}
            const num = this.steps.length + 1
            result["recursive"] = false
            result["ignore-error"] = false
            result["type"] = "dataset"
            result["ds"] = ""
            result["mode"] = "dataset"
            result["name"] = "step" + num
            result["scenarioId"] = this.scenarioId
            result["index"] = idx
            result["traceId"] = this.genId()
            result["edited"] = true
            result["deleted"] = false
            result["id"] = this.genId()
            this.steps.push(result)
        },
        genId(len=16, radix=16) {
            const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            let uuid = [], i;
            radix = radix || chars.length;

            if (len) {
                // Compact form
                for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
            } else {
                // rfc4122, version 4 form
                var r;

                // rfc4122 requires these characters
                uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                uuid[14] = '4';

                // Fill in random data.  At i==19 set the high bits of clock sequence as
                // per rfc4122, sec. 4.1.5
                for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                        r = 0 | Math.random()*16;
                        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
                    }
                }
            }

            return uuid.join('');
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
        margin: 30px auto;
        width: 216px;
        height: 25px;
        background: #F8D634;
        box-shadow: 1px 2px 4px 0px rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #000000;
        .add {
            height: 12px;
        }
    }

    .scenario-steps-container {
        display: flex;
        flex-direction: row;

		.select-pattern {
			width: 120px;
			height: 40px;
			border: 1px solid #dcdfe6;
		}

        .border-none {
            border: none;
        }

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
                align-items: center;
                flex-direction: row;
                border: 1px solid grey;
                margin-bottom: 10px;
                height: 40px;
            }
        }

        .scenario-step-detail {
            display: flex;
            flex-direction: column;
            flex-grow: 2;
            padding: 14px 36px;
            max-width: 800px;

            .el-form-item {
                margin-top: 20px;
            }

            .add-ds {
                width: 120px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .scenario-step-ds-item {
                display: flex;
                flex-direction: row;
                border: 1px solid #dcdfe6;
                height: 40px;
                span {
                    flex-grow: 1;
                }
            }
        }
    }

</style>
