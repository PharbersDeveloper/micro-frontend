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
            </div>
            <div class="topn-container-sort">
                <h3>排序</h3>
                <div class="topn-sort-item-list" v-for="(item, index) in datasource.command.orders" :key="index">
                    <div class="topn-sort-item">
                        <span class="topn-sort-title">{{item.column}}</span>
                        <div topn-sort-btn-group>
                            <el-switch
                                    class="topn-sort-desc-btn"
                                    v-model="item.desc"
                                    active-text="降序"
                                    active-color="#13ce66" />
                            <el-button class="topn-sort-del-btn" type="text" icon="el-icon-close" @click="sortDeletion(index)" />
                        </div>
                    </div>
                </div>
                <div class="topn-add-btn">
                    <select v-model="placeholderSort" @change="sortInserted">
                        <option v-for="(item, index) in schema" :value="item.src" :key="index" :label="item.src" />
                        <option value="选择列" label="选择列" />
                    </select>
                </div>
            </div>
            <div class="topn-container-group">
                <h3>分组</h3>
                <el-radio-group v-model="datasource.command.isAllCols">
                    <el-radio :label="true">全数据集</el-radio>
                    <el-radio :label="false">按照分组计算</el-radio>
                </el-radio-group>
                <div class="topn-keys disabled" v-if="datasource.command.isAllCols" >
                    <div class="topn-sort-item-list" v-for="(item, index) in datasource.command.keys" :key="index">
                        <div class="topn-sort-item">
                            <span class="topn-sort-title">{{item}}</span>
                        </div>
                    </div>
                    <div class="topn-add-btn">
                        <select v-model="placeholderKey" >
                            <option v-for="(item, index) in schema" :value="item.src" :key="index" :label="item.src" />
                            <option value="选择列" label="选择列" />
                        </select>
                    </div>
                </div>
                <div class="topn-keys" v-else >
                    <div class="topn-sort-item-list" v-for="(item, index) in datasource.command.keys" :key="index">
                        <div class="topn-sort-item">
                            <span class="topn-sort-title">{{item}}</span>
                            <el-button class="topn-sort-del-btn" type="text" icon="el-icon-close" @click="keyDeletion(index)" />
                        </div>
                    </div>
                    <div class="topn-add-btn">
                        <select v-model="placeholderKey" @change="keyInserted">
                            <option v-for="(item, index) in schema" :value="item.src" :key="index" :label="item.src" />
                            <option value="选择列" label="选择列" />
                        </select>
                    </div>
                </div>
            </div>
            <el-divider></el-divider>
            <div class="topn-additional">
                <h3>对每一行进行</h3>
                <el-checkbox v-model="datasource.command.duplicateCount">总行数计数</el-checkbox>
                <el-checkbox v-model="datasource.command.rowNumber">显示行号</el-checkbox>
                <el-checkbox v-model="datasource.command.rank">排序</el-checkbox>
                <el-checkbox v-model="datasource.command.denseRank">密集排序</el-checkbox>
            </div>
        </div>

    </div>
</template>
<script>
import ElButton from 'element-ui/packages/button/index'
import ElCheckbox from 'element-ui/packages/checkbox/index'
import ElDivider from 'element-ui/packages/divider/index'
import ElRadioGroup from 'element-ui/packages/radio-group/index'
import ElRadio from 'element-ui/packages/radio/index'
import ElSwitch from 'element-ui/packages/switch/index'
import ElInputNumber from 'element-ui/packages/input-number/index'
import ElForm from 'element-ui/packages/form/index'
import ElFormItem from 'element-ui/packages/form-item/index'
import { PhTopNDefs } from "./defs"
import PhTopNStep from "./step"

export default {
    data() {
        return {
            datasource: null,
            placeholderSort: "选择列",
            placeholderKey: "选择列"
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
        ElInputNumber,
        ElButton,
        ElCheckbox,
        ElRadioGroup,
        ElRadio,
        ElSwitch,
        ElDivider
    },
    mounted() {
        this.datasource = new PhTopNStep(this.step)
    },
    methods: {
        sortInserted() {
            this.datasource.command.insertSortCloase(this.placeholderSort)
            this.placeholderSort = "选择列"
        },
        sortDeletion(idx) {
            this.datasource.command.deleteSortCloase(idx)
        },
        keyInserted() {
            this.datasource.command.insertKeyCloase(this.placeholderKey)
            this.placeholderKey = "选择列"
        },
        keyDeletion(idx) {
            this.datasource.command.deleteKeyCloase(idx)
        },
        validate() {
            this.$emit('statusChange', true)
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

        .topn-sort-item-list {
            display: flex;
            flex-direction: column;

            .topn-sort-item {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .topn-sort-btn-group {
                    display: flex;
                    flex-direction: row;
                }
            }
        }
        .topn-add-btn {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }

        .topn-container-group {
            display: flex;
            flex-direction: column;

        }

        .disabled {
            pointer-events: none;
            opacity: 0.4;
        }

        .topn-sort-title {
            text-align: center;
            vertical-align: middle;
        }

        .topn-sort-del-btn {
            margin-left: 30px;
        }

        .topn-additional {
            margin-top: 30px;

            display: flex;
            flex-direction: column;
        }
    }
</style>
