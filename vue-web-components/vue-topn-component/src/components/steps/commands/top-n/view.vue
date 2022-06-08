<template>
    <div class="topn-container">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="topn-title">
            <div class="topn-title-p">
                <h2>Top N</h2>
            </div>
        </div>
        <div class="topn-content" v-if="datasource">
            <div class="topn-container-rows">
                <h3>检索</h3>
                <el-form label-width="120px" >
                    <el-form-item label="顶部行">
                        <el-input-number v-model="datasource.command.firstRows"></el-input-number>
                    </el-form-item>
                    <el-form-item label="底部行">
                        <el-input-number v-model="datasource.command.lastRows"></el-input-number>
                    </el-form-item>
                </el-form>
                <h3>排序</h3>

            </div>
            <div class="topn-container-sort">
<!--                <el-form label-width="120px">-->
<!--                    <el-form-item label="Activity name">-->
<!--                        <el-input v-model="form.name"></el-input>-->
<!--                    </el-form-item>-->
<!--                </el-form>-->
            </div>
        </div>
        <div class="topn-additional">

        </div>
    </div>
</template>
<script>
// import ElCheckbox from 'element-ui/packages/checkbox/index'
// import ElInput from 'element-ui/packages/input/index'
// import { staticFilePath } from '../../../../config/envConfig'
// import ElButton from 'element-ui/packages/button/index'
import ElInputNumber from 'element-ui/packages/input-number/index'
import ElForm from 'element-ui/packages/form/index'
import ElFormItem from 'element-ui/packages/form-item/index'
import { PhTopNDefs } from "./defs"
import PhTopNStep from "./step"

export default {
    data() {
        return {
            datasource: null
        }
    },
    props: {
        step: Object,
        schema: Array,
        concretDefs: {
            type: Object,
            default: () => {
                return PhTopNDefs
            }
        }
    },
    components: {
        ElFormItem,
        ElForm,
        ElInputNumber
    },
    mounted() {
        this.datasource = new PhTopNStep(this.step)
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
    .topn-container {
        margin-top: 4px;
        /*width: 100%;*/
        min-width: 800px;
        padding: 4px;
        display: flex;
        flex-direction: column;

        .topn-title {
            display: flex;
            flex-direction: column;

            .topn-title-p {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .ver-center {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                }
            }
        }

        .topn-content {

        }

        .topn-additional {
            margin-top: 30px;
            border: 1px solid grey;
        }
    }
</style>
