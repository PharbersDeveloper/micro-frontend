<template>
    <div>
        <el-dialog
                title="Tips"
                :visible.sync="dialogVisible"
                width="30%" >
            <span>This is a message</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="$emit('cancel')">Cancel</el-button>
                <el-button type="primary" @click="$emit('confirm')">Confirm</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import ElButton from "element-ui/packages/button/index"
// import ElInput from "element-ui/packages/input/index"
import ElDialog from "element-ui/packages/dialog/index"
import PhDagDefinitions from "./policy/definitions/definitions";

export default {
    data() {
        return {

        }
    },
    components: {
        ElButton,
        // ElInput,
        // bpSelectVue,
        // bpOptionVue,
        ElDialog
    },
    props: {
        // datasets: Array,
        // runtime: String,
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

    },
    methods: {

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
