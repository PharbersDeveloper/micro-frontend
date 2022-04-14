<template>
    <div class="bp_operator_card">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="card" v-if="type === 1">
            <div class="card_header" @click="handleCloseContent">
                <el-checkbox></el-checkbox>
                <div class="card_header_content">
                    <div class="card_header_desc">保留 列名01，值等于10的行</div>
                    <div class="card_header_del">
                        <div class="num">- 378</div>
                        <img :src="icons.del_icon" class="del_icon" alt="">
                    </div>
                </div>
            </div>
            <div class="card_content" v-show="showContent">
                <div class="mb_1">
                    <div class="title">操作</div>
                    <select name="opt" id="" class="sel">
                        <option value="">保留匹配行</option>
                    </select>
                </div>
                <div class="mb_1">
                    <div class="title">多列筛选关系</div>
                    <select name="opt" id="" class="sel">
                        <option value="">AND</option>
                    </select>
                </div>
                <div class="mb_1 filter_col">
                    <div class="title title_space">
                        <div>列</div>
                        <div class="right_title">
                            <div 
                                class="mr_1"
                                @click="clickColType(1)"
                                :class="[{
                                    active: colType === 1
                                }]">单列</div>
                            <div 
                                @click="clickColType(2)"
                                :class="[{
                                    active: colType === 2
                                }]">多列</div>
                        </div>
                    </div>
                    <div class="sel_item" 
                        v-show="colType === 2"
                        v-for="(cols,i) in selColArray"
                        :key="i+'cols'">
                        <select name="opt" id="" class="sel">
                            <option value="">列名1</option>
                        </select>
                        <img :src="icons.del_icon" v-if="i !== 0"  class="del_icon" alt="">
                    </div>
                     <div class="sel_item" 
                        v-show="colType === 1"
                        v-for="(cols,i) in selSingleColArray"
                        :key="i+'cols'">
                        <select name="opt" id="" class="sel">
                            <option value="">列名1</option>
                        </select>
                        <img :src="icons.del_icon" v-if="i !== 0"  class="del_icon" alt="">
                    </div>
                    <el-button @click="addSelCol" type="text" v-show="colType === 2">+ 增加列</el-button>
                </div>
                <div class="mb_1 filter_value">
                    <div class="title_space">
                        <div class="title">has value</div>
                    </div>
                    <div class="sel_item">
                        <el-input class="input"  v-model="input" placeholder="请输入内容"></el-input>
                        <img :src="icons.del_icon"  class="del_icon" alt="">
                    </div>
                    <el-button type="text">+ 增加值</el-button>
                </div>
                <div class="mb_1">
                    <div class="title">筛选模式</div>
                    <select name="opt" id="" class="sel">
                        <option value="">AND</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ElCheckboxGroup from 'element-ui/packages/checkbox-group/index'
import ElCheckbox from 'element-ui/packages/checkbox/index'
import ElInput from 'element-ui/packages/input/index'
import { staticFilePath, hostName } from '../config/envConfig'
import ElButton from 'element-ui/packages/button/index'


export default {
    data() {
        return {
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: ['上海', '北京', '广州', '深圳'],
            isIndeterminate: true,
            showContent: true,
            colType: 1
        }
    },
    props: {
        type: Number,
        icons: {
            type: Object,
            default: () => {
                return {
                    del_icon: `${staticFilePath}/delete_r.svg`
                }
            }
        },
        selColArray: {
            type: Array,
            default: () => {
                return [{
                    id: 1
                },{
                    id: 2
                }]
            }
        },
        selSingleColArray: {
            type: Array,
            default: () => {
                return [{
                    id: 1
                }]
            }
        }
    },
    components: {
        ElCheckboxGroup,
        ElCheckbox,
        ElButton,
        ElInput
    },
    methods: {
        // 增加行
        addSelCol() {
            this.selColArray.push({})
        },
        // 选择单列多列
        clickColType(num) {
            this.colType = num
        },
        // 收起内容
        handleCloseContent() {
            this.showContent = !this.showContent
        },
        handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        }
    }
}
</script>
<style lang="scss" scoped>
    * {
        letter-spacing: .4px;
        line-height: 1.6;
        box-sizing: border-box;
    }
    .bp_operator_card {
        margin-top: 4px;
        display: flex;
        width: 100%;
        padding: 4px;
        .card {
            width: 100%;
            border: 1px solid #ccc;
            background: #F4F8FF;
            .del_icon {
                width: 16px;
                height: 16px;
            }
            .active {
                color: #409EFF;
            }
            .card_header {
                padding: 4px 10px;
                display: flex;
                align-items: center;
                height: 60px;
                border: 1px solid #76787d;
                box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.5);
                cursor: pointer;
                .el-checkbox {
                    margin-right: 10px;
                }
                .card_header_content {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: space-between;
                    .card_header_del {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size: 10px;
                        .num {
                            color: #F50000;
                        }
                    }
                }
            }
            .card_content {
                height: auto;
                padding: 10px;
                display: flex;
                flex-direction: column;
                // align-items: center;
                padding-left: 30px;
                .mb_1 {
                    margin-bottom: 20px;
                }
                .mr_1 {
                    margin-right: 10px;
                }
                .title {
                    font-size: 10px;
                    color: #000000;
                }
                .title_space {
                    display: flex;
                    justify-content: space-between;
                    width: 206px;
                    .right_title {
                        display: flex;
                        cursor: pointer;
                    }
                }
                .sel_item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 6px;
                    select, .input {
                        margin-right: 4px;
                    }
                }
                .filter_col {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .filter_value {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .sel {
                    width: 206px;
                    height: 20px;
                }
                .input {
                    width: 206px;
                    height: 20px;
                }
                /deep/.el-input__inner {
                    height: 20px;
                }
            }
        }
    }
</style>