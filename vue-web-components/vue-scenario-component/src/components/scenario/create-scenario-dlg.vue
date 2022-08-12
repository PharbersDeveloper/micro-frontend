<template>
    <el-dialog
            title="创建一个Scenario"
            :visible.sync="dialogVisible"
            :before-close="close"
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
import { Message } from 'element-ui'
import PhDataSource from '../model/datasource'
// Message.error("超出数量上限,单次最多同时删除10个数据集!", { duration: 0, showClose: true })
//                 return

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
            scenarioName: "",
            AllData: [],
            projectId: ""
        }
    },
    props: {
        dialogVisible: Boolean,
        // projectId: String,
        projectName: String,
        index: Number,
        owner: String,
        datasource: {
            type: Object,
            default: function() {
                return new PhDataSource('1')
            }
        }
    },
    computed: {},
    mounted() {
        this.projectId = this.getUrlParam("projectId")
    },
    watch: {

    },
    methods: {
        getUrlParam(value) {
            let href = window.location.href
            let paramArr = href.split("?")[1].split("&")
            let data = paramArr.find(item => item.indexOf(value) > -1)
            return data ? decodeURI(data).split("=")[1] : undefined
        },
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr === document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        },
        save() {
            if (this.scenarioName.length > 0) {
                if(this.scenarioName.length > 30){
                    Message.error("输入内容过长！", { duration: 0, showClose: true })
                } else {
                    let reg = /^[a-zA-Z0-9_^\u4E00-\u9FA5]{1,}$/
                    if (reg.test(this.scenarioName)) {
                        const scenario = {
                            "id": [this.projectId, this.scenarioName, this.index.toString()].join("_"),
                            type: "scenario",
                            projectId: this.projectId,
                            projectName: this.projectName,
                            scenarioName: this.scenarioName,
                            index: this.index,
                            active: true,
                            args: "",
                            label: "[]",
                            owner: this.owner,
                            traceId: "123456"
                        }
                        this.$emit("createScenario", scenario)
                        this.scenarioName = ''
                    } else {
                        Message.error("请勿输入特殊字符！", { duration: 0, showClose: true })
                    } 
                }
            } else {
                Message.error("Scenario名称不能为空", { duration: 0, showClose: true })
            }
        },
        close(){
            this.scenarioName = ""
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
