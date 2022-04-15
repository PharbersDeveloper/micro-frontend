<template>
    <div class="bp_operator_card">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="card" v-if="type === 1">
            <div class="card_header" @click="handleCloseContent">
                <img :src="icons.drag_prepare_card" class="drag_prepare_card" alt="">
                <el-checkbox></el-checkbox>
                <div class="card_header_content">
                    <div class="card_header_desc">{{title}}</div>
                    <div class="card_header_del">
                        <div class="num">- 378</div>
                        <img :src="icons.del_icon" class="del_icon" alt="">
                    </div>
                </div>
            </div>
            <div class="card_content" v-show="showContent">
                <div class="mb_1">
                    <div class="title">操作</div>
                    <select id="" class="sel">
                        <option 
                            v-for="(item,i) in filterOnValue.option"
                            :key="i+'filterOnValue_options'"
                            :value="item">{{item}}</option>
                    </select>
                </div>
                <div class="mb_1">
                    <div class="title">多列筛选关系</div>
                     <select id="" class="sel">
                        <option 
                            v-for="(item,i) in filterOnValue.multiColumnFilter"
                            :key="i+'filterOnValue_options'"
                            :value="item">{{item}}</option>
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
                    <!-- 多列 -->
                    <div class="sel_item" 
                        v-show="colType === 2"
                        v-for="(cols,i) in selColArrayNew"
                        :key="i+'cols'">
                        <select id="" class="sel">
                            <option 
                                v-for="(item,i) in schemaArray.schema"
                                :key="i+'schema'"
                                :value="item">{{item}}</option>
                        </select>
                        <img 
                            :src="icons.del_icon" 
                            @click="delCol(cols, i)" 
                            v-if="i !== 0"  
                            class="del_icon" alt=""/>
                    </div>
                    <!-- 单列 -->
                    <div class="sel_item" v-show="colType === 1">
                        <select id="" class="sel">
                            <option 
                                v-for="(item,i) in schemaArray.schema"
                                :key="i+'schema'"
                                :value="item">{{item}}</option>
                        </select>
                    </div>
                    <el-button 
                        @click="addSelCol" 
                        type="text" 
                        v-show="colType === 2">+ 增加列</el-button>
                </div>
                <div class="mb_1 filter_value">
                    <div class="title_space">
                        <div class="title">值</div>
                    </div>
                    <div class="sel_item"
                        v-for="(val,i) in hasValueArrayNew"
                        :key="i+'val'">
                        <el-input class="input"  placeholder="请输入内容"></el-input>
                        <img 
                            :src="icons.del_icon" 
                            @click="delSelVal(val, i)"
                            v-if="i != 0"
                            class="del_icon" alt="">
                    </div>
                    <el-button 
                        @click="addSelVal"
                        type="text">+ 增加值</el-button>
                </div>
                <div class="mb_1">
                    <div class="title">筛选模式</div>
                    <select id="" class="sel">
                       <option 
                            v-for="(item,i) in filterOnValue.filterPattern"
                            :key="i+'filterPattern'"
                            :value="item">{{item}}</option>
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
            isIndeterminate: true,
            showContent: true,
            colType: 1, 
            selColArrayNew: [],
            hasValueArrayNew: []
        }
    },
    props: {
        type: Number,
        icons: {
            type: Object,
            default: () => {
                return {
                    del_icon: `${staticFilePath}/delete_r.svg`,
                    drag_prepare_card: `${staticFilePath}/drag_prepare_card.svg`
                }
            }
        },
        schemaArray: {
            type: Object,
            default: () => {
                return {
                    schema: []
                }
            }
        },
        filterOnValue: {
            type: Object,
            default: () => {
                return {
                    option: [
                        "只保留匹配行",
                        "去除匹配行",
                        "清除匹配单元格",
                        "清除不匹配单元格"
                    ],
                    multiColumnFilter: [
                        "All match（AND）",
                        "Any match（OR）"
                    ],
                    filterPattern: [
                        "完全匹配",
                        "不完全匹配",
                        "正则表达式"
                    ]
                }
            }
        },
        selColArray: {
            type: Array,
            default: () => {
                return [{
                    name: 1
                }]
            }
        },
        selSingleCol: {
            type: String,
            default: "通用名称"
        },
        hasValueArray: {
            type: Array,
            default: () => {
                return [{
                    name: 1
                }]
            }
        },
        title: String
    },
    components: {
        ElCheckboxGroup,
        ElCheckbox,
        ElButton,
        ElInput
    },
    mounted() {
        this.selColArrayNew = this.selColArray
        this.hasValueArrayNew = this.hasValueArray
    },
    methods: {
        //删除值
        delSelVal(data, i) {
            this.hasValueArrayNew.splice(i, 1)
        },
        //增加值
        addSelVal() {
            this.hasValueArrayNew.push({})
        },
        //删除行
        delCol(data, i) {
            this.selColArrayNew.splice(i, 1)
        },
        // 增加行
        addSelCol() {
            this.selColArrayNew.push({})
        },
        // 选择单列多列
        clickColType(num) {
            this.colType = num
        },
        // 收起内容
        handleCloseContent() {
            this.showContent = !this.showContent
        }
    },
    watch: {
        // selColArray(n, w) {
        //     debugger
        //     this.selColArrayNew = n
        // },
        // "schemaArray.schema"(n, o) {
        //     debugger
        //     this.needRefresh++
        // }
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
        .selected_border {
            border-color: #3b99fc !important;
        }
        .selected_background {
            background: #e7f3ff !important;
        }
        .error_border {
            border-color: #fb9292 !important;
        }
        .error_background {
            background: #fff8f8 !important;
        }
        .card {
            width: 100%;
            border: 1px solid #ccc;
            // background: #F4F8FF;
            .del_icon {
                width: 16px;
                height: 16px;
            }
            .active {
                color: #409EFF;
            }
            .card_header {
                padding: 4px;
                display: flex;
                align-items: center;
                height: 60px;
                border-bottom: 1px solid #ccc;
                box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.5);
                cursor: pointer;
                .drag_prepare_card {
                    height: 18px;
                    margin-right: 4px;
                    cursor: move;
                }
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