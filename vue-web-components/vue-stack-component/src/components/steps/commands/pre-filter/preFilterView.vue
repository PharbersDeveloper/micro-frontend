<template>
    <div class="pre-filter">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="condition-title">
            <div class="condition-title-p">
                <h2>Pre Filters</h2>
            </div>
        </div>
        <div class="condition-ds-container" v-if="datasource">
            <div class="condition-ds-item" v-for="(item, index) in datasource.commands" :key="index">
                <div class="condition-ds-item-title">
                    <h3>{{item.meta.name}}</h3>
                    <div class="ver-center" >
                        <el-switch v-model="item.meta.enabled" ></el-switch>
                    </div>
                </div>
                <el-form >
                    <el-form-item label="保留符合条件的列">
                        <select v-model="item.detail.action">
                            <option v-for="(it, index) in concretDefs.actions" :value="it.cal" :key="index" :label="it.desc" />
                        </select>
                    </el-form-item>
                </el-form>
                <div class="condition-selection" >
                    <div class="condition-selection-item" v-for="(cur, index) in item.detail.cloases" :key="index">
                        <div class="condition-selection-content">
                            <select v-model="cur['left']">
                                <option v-for="(it, index) in schema[item.meta.name]" :value="it.src" :key="index" :label="it.src" />
                            </select>
                            <select v-model="cur['op']">
                                <option v-for="(item, index) in concretDefs.includes" :value="item.cal" :key="index" :label="item.desc" />
                            </select>
                            <el-input v-if="cur['op'] !== 'EXISTS' && cur['op'] !== 'NOT-EXISTS'" v-model="cur['right']" ></el-input>
                            <el-input v-else disabled ></el-input>
                        </div>
                        <el-button type="text" @click="item.detail.delcloases(index)">删除</el-button>
                    </div>
                </div>
                <div class="condition-add-button">
                    <el-button type="primary" @click="item.detail.insertcloases()">添加</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { PhPreFilterDefs } from "./defs"
    import ElForm from 'element-ui/packages/form/index'
    import ElFormItem from 'element-ui/packages/form-item/index'
    import ElInput from 'element-ui/packages/input/index'
    import ElButton from 'element-ui/packages/button/index'
    import ElSwitch from 'element-ui/packages/switch/index'
    import PhFilterStep from "./step"

    export default {
        data() {
            return {
                datasource: null
            }
        },
        props: {
            step: Object,
            schema: Object,
            concretDefs: {
                type: Object,
                default: () => {
                    return PhPreFilterDefs
                }
            }
        },
        components: {
            ElFormItem,
            ElForm,
            ElInput,
            ElButton,
            ElSwitch
        },
        // updated() {
        mounted() {
            this.datasource = new PhFilterStep(this.step)
            this.$emit('statusChange', true)
        },
        methods: {
            validate() {
                this.$emit('statusChange', this.datasource.enabled)
            }
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
        min-width: 800px;
        display: flex;
        flex-direction: column;
		background: #fff;
		height: fit-content;
		padding: 20px;

        .condition-title {
            display: flex;
            flex-direction: column;

            .condition-title-p {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
        }

        .condition-selection {
            margin-top: 30px;

            .condition-selection-item {
                display: flex;
                flex-direction: row;

            }

            .condition-selection-content {
                display: flex;
                flex-direction: row;

            }
        }

        .condition-ds-container {
            display: flex;
            flex-direction: row;
        }

        .condition-ds-item {
            width: 500px;
            border: 1px solid grey;
            margin: 1px;

            .condition-ds-item-title {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .ver-center {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                }
            }

            .condition-add-button {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                margin-top: 80px;
            }
        }
    }
</style>
