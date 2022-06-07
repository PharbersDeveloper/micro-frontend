<template>
    <div class="pre-filter">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <el-form >
            <el-form-item label="保留符合条件的列">
                <select v-model="showContent">
                    <option v-for="(item, index) in concretDefs.actions" :value="item.cal" :key="index" :label="item.desc" />
                </select>
            </el-form-item>
        </el-form>
        <div class="condition-selection">
            <div class="condition-selection-item" v-for="(item, index) in step.command.cloases" :key="index">
                {{item}}
            </div>
        </div>
    </div>
</template>
<script>
import { PhPreFilterDefs } from "./defs"
import ElForm from 'element-ui/packages/form/index'
import ElFormItem from 'element-ui/packages/form-item/index'
// import PhFilterStep from "./step"

export default {
    data() {
        return {
            showContent: "b"
        }
    },
    props: {
        step: {
            type: Object
        },
        concretDefs: {
            type: Object,
            default: () => {
                return PhPreFilterDefs
            }
        }
    },
    components: {
        ElFormItem,
        ElForm
    },
    mounted() {
        // this.datasource = new PhFilterStep(this.step)
    },
    methods: {

    },
    computed: {

    }
}
</script>
<style lang="scss" scoped>
    * {
        letter-spacing: .4px;
        line-height: 1.6;
        box-sizing: border-box;
    }
    .pre-filter {
        margin-top: 4px;
        /*width: 100%;*/
        min-width: 300px;
        padding: 4px;
        display: flex;
        flex-direction: column;

        .condition-selection {
            margin-top: 30px;

            .condition-selection-item {

            }
        }
    }
</style>
