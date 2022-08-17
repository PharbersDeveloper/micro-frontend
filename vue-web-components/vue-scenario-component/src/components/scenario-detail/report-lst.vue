<template>
    <div class="scenario-reports">
        <div class="scenario-reports-create">
            <h2>Reporters</h2>
            <el-select placeholder="ADD Reporter" value="ADD Reporter" ref="addNewReporterSelect"
				@change="addNewReporter"
				@click="addNewReporterClick">
                <el-option
                        v-for="item in options"
                        :key="item.index"
                        :label="item.desc"
                        :value="item.cat"
                        :disabled="item.disable"
                        >{{item.desc}}
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
// import CreateScenarioDlg from "./create-scenario-dlg"
// import ElCollapse from "element-ui/packages/collapse/index"
// import ElCollapseItem from "element-ui/packages/collapse-item/index"
import ElSelect from "element-ui/packages/select/index"
import ElOption from "element-ui/packages/option/index"
// import ElSwitch from "element-ui/packages/switch/index"
// import ElForm from "element-ui/packages/form/index"
// import ElFormItem from "element-ui/packages/form-item/index"
// import ElInput from "element-ui/packages/input/index"
// import ElCol from "element-ui/packages/col/index"

export default {
    data() {
        return {
            options: [
                {
                    index: 0,
                    cat: "email",
                    desc: "Email",
                    disable: false
                }
            ],
            reportsDisplay: []
        }
    },
    props: {
        reports: Array
    },
    components: {
        // ElCollapse,
        // ElCollapseItem,
        ElSelect,
        ElOption
        // ElSwitch,
        // ElForm,
        // ElFormItem,
        // ElInput,
        // ElCol
    },
    computed: {

    },
    mounted() {
        this.reportsDisplay = this.reports
    },
    watch: {
        triggers(n) {
            this.reportsDisplay = n
        }
    },
    methods: {
        change(d) {
            console.log(d)
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

    .scenario-reports {
        // border: 1px solid #666;
        background-color: #fff;
        margin: 1px auto;
        padding: 14px 36px;
        width: 800px;

        display: flex;
        flex-direction: column;


        .scenario-reports-create {
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
