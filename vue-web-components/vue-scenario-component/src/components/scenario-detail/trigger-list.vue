<template>
    <div class="scenario-triggers">
        <div class="scenario-trigger-create">
            <h2>Triggers</h2>
            <el-select placeholder="ADD Trigger" value="ADD Trigger" @change="change">
                <el-option
                        v-for="item in options"
                        :key="item.index"
                        :label="item.desc"
                        :value="item.cat">
                </el-option>
            </el-select>
        </div>
        <el-collapse >
            <el-collapse-item v-for="(item, index) in triggerDisplay" :key="index">
                <template slot="title">
                    <div class="scenario-trigger-item-title">
                        <el-select v-model="item.mode" @change="change">
                            <el-option
                                    v-for="iter in options"
                                    :key="iter.index"
                                    :label="iter.desc"
                                    :value="iter.cat">
                            </el-option>
                        </el-select>
                    </div>
                </template>
                <el-form :model="item" label-width="120px">
                    <el-form-item label="自动触发">
                        <el-switch v-model="item.active"></el-switch>
                    </el-form-item>
                    <el-form-item label="重复时间间隔">
                        <el-col :span="11">
                            <el-input ></el-input>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-select value="" placeholder="时间间隔">
                                <el-option
                                        v-for="iter in period"
                                        :key="iter"
                                        :label="iter"
                                        :value="iter">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="开始时间">
                        <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="时区">
                        <el-input disabled value="UTC"></el-input>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
// import CreateScenarioDlg from "./create-scenario-dlg"
import ElCollapse from "element-ui/packages/collapse/index"
import ElCollapseItem from "element-ui/packages/collapse-item/index"
import ElSelect from "element-ui/packages/select/index"
import ElOption from "element-ui/packages/option/index"
import ElSwitch from "element-ui/packages/switch/index"
import ElForm from "element-ui/packages/form/index"
import ElFormItem from "element-ui/packages/form-item/index"
import ElInput from "element-ui/packages/input/index"
import ElCol from "element-ui/packages/col/index"

export default {
    data() {
        return {
            options: [
                {
                    index: 0,
                    cat: "timer",
                    desc: "基于时间自动运行"
                },
                {
                    index: 1,
                    cat: "dataset",
                    desc: "基于数据集更新的自动运行"
                }
            ],
            triggerDisplay: [],
            period: [
                "秒", "分钟", "小时", "天", "周", "月"
            ]
        }
    },
    props: {
        triggers: Array
    },
    components: {
        ElCollapse,
        ElCollapseItem,
        ElSelect,
        ElOption,
        ElSwitch,
        ElForm,
        ElFormItem,
        ElInput,
        ElCol
    },
    computed: {

    },
    mounted() {
        this.triggerDisplay = this.triggers
    },
    watch: {
        triggers(n) {
            this.triggerDisplay = n
        }
    },
    methods: {
        change(d) {
            console.log(d)
        },
        triggerTitle(mode) {
            if (mode === "timer") {
                return "Time-Based"
            } else return "Not Implemented"
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

    .scenario-triggers {
         border: 1px solid red;
         margin: 1px auto;
         padding: 14px 36px;
         width: 800px;

        display: flex;
        flex-direction: column;


        .scenario-trigger-create {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .scenario-trigger-item-title {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .scenario-trigger-item-switch {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
     }
</style>
