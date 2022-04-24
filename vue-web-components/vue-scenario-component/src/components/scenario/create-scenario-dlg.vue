<template>
    <el-dialog
            title="创建一个Scenario"
            :visible.sync="dialogVisible"
            width="30%">
        <el-form ref="form" label-width="120px">
            <el-form-item label="Scenario 名称">
                <el-input v-model="scenarioName"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="close">Cancel</el-button>
            <el-button type="primary" @click="save">Confirm</el-button>
        </span>
    </el-dialog>
</template>

<script>
import ElDialog from "element-ui/packages/dialog/index"
import ElForm from "element-ui/packages/form/index"
import ElFormItem from "element-ui/packages/form-item/index"
import ElInput from "element-ui/packages/input/index"
import ElButton from "element-ui/packages/button/index"

export default {
    components: {
        ElDialog,
        ElForm,
        ElFormItem,
        ElInput,
        ElButton
    },
    data() {
        return{
            scenarioName: ""
        }
    },
    props: {
        dialogVisible: Boolean,
        projectId: String,
        index: Number,
        owner: String
    },
    computed: {},
    mounted() {},
    watch: {

    },
    methods: {
        save() {
            if (this.scenarioName.length > 0) {
                const scenario = {
                    "id": [this.projectId, this.scenarioName, this.index.toString()].join("_"),
                    type: "scenario",
                    projectId: this.projectId,
                    scenarioName: this.scenarioName,
                    index: this.index,
                    active: true,
                    args: "",
                    label: [],
                    owner: this.owner,
                    traceId: "123456"
                }
                this.$emit("createScenario", scenario)
            }
        },
        close() {
            this.$emit("cancelCreateScenario")
        }
    }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>
