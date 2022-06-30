<template>
    <div>
        <el-dialog
                title="Tips"
                :visible.sync="dialogVisible"
				@close='close()'
                width="30%" >
            <el-form label-width="120px">
                <el-form-item label="编译器名称">
                    <el-input v-model="name"></el-input>
                </el-form-item>
                <el-form-item label="集群名称">
                    <el-input value="本集群" disabled></el-input>
                </el-form-item>
                <el-form-item label="集群环境">
                    <el-input value="默认环境" disabled></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="$emit('cancel')">Cancel</el-button>
                <el-button type="primary" @click="confirmCreation">Confirm</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import ElButton from "element-ui/packages/button/index"
// import ElInput from "element-ui/packages/input/index"
import ElDialog from "element-ui/packages/dialog/index"
import ElForm from "element-ui/packages/form/index"
import ElFormItem from "element-ui/packages/form-item/index"
import PhDagDefinitions from "./policy/definitions/definitions"

export default {
    data() {
        return {
            name: "test",
			visible: false
        }
    },
    components: {
        ElButton,
        ElDialog,
        ElForm,
        ElFormItem
    },
    props: {
        initialName: String,
        dialogVisible: Boolean,
        defs: {
            type: Object,
            default: function () {
                return new PhDagDefinitions("1");
            }
        }
    },
    computed: {

    },
    mounted() {
        this.name = this.initialName
    },
    methods: {
		close() {
			this.$emit("cancel")
		},
        confirmCreation() {
            const event = new Event("event")
            event.args = {
                callback: "createNotebook",
                param: {
                    name: this.name
                }
            }
            this.$emit("confirm", event)
        }
    },
	watch: {
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
