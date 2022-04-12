<template>
    <div class="prepare">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="prepare_header">
            <div class="header_left">
                <img :src="icons.prepare_icon" alt="">
                <span>Prepare</span>
            </div>
            <div class="header_right">
                <button class="save" @click="save">保存</button>
            </div>
        </div>
        <div class="prepare_tab">
            <span class="tab">
                设置
            </span>
            <span>|</span>
            <span class="tab">
                输入/输出
            </span>
        </div>
        <div class="prepare_area">
            <div class="prepare_area_left">
                <div class="left_title">
                    脚本
                </div>
                <div class="tab_content">
                    <div class="no_script">
                        当前脚本无算子
                    </div>
                    <el-button 
                        class="add_new_step"
                        @click="drawer = true">
                        <img :src="icons.add_icon" alt="">
                        添加一个新算子
                    </el-button>
                </div>
            </div>
            <div class="prepare_area_right">
                <div class="main_container">
                    <bp-excel ref="excel" viewHeight="calc(100vh - 300px)"
                        v-on:countIsReady="totalCountIsReady"
                        @countIsReady="totalCountIsReady"
                        @changeSchemaTypeEvent="changeSchemaTypeEvent"
                        :datasource="datasource" :schema="schema" class="excel" />
                </div>
            </div>
        </div>
        <el-drawer
            title="算子库"
            class="operator"
            :visible.sync="drawer"
            :direction="direction">
            <div class="operator_content" v-for="item in operatorArr" :key="item.opt_name">
                <div class="operator_con">
                    <div class="opt" 
                        @click="operator_opt_click(item)"
                        :class="[{selected_bg: item.id == selected}]">
                        <div class="name">{{item.opt_name}}</div>
                        <div class="num">{{item.opt_condition_num}}</div>
                    </div>
                    <div class="opt_condition">
                        <div class="opt_condition_item" v-for="data in item.opt_condition"
                        :key="data.name">{{data.name}}</div>
                    </div>
                    <div class="opt_desc">
                        <div class="opt_condition_desc" 
                            v-for="data in item.opt_condition"
                            :key="data.name+'desc'">
                            <vue-markdown>{{opt_condition_desc}}</vue-markdown>
                        </div>
                    </div>
                </div>
            </div>
        </el-drawer>
    </div>
</template>
<script>
import { staticFilePath, hostName } from '../config/envConfig'
import ElButton from 'element-ui/packages/button/index'
import ElDrawer from 'element-ui/packages/drawer/index'
import PhContainerDataSource from './model/containerDatasource'
import PhContainerSchema from './model/containerSchema'
import bpExcel from '../../../vue-excelv2-component/src/components/ph-excel-container'
import VueMarkdown from 'vue-markdown' 
import md from "./model/test.md"

export default {
    data() {
        return {
            drawer: true,
            direction: "btt",
            opt_condition_desc: "",
            selected: -1,
            opt_condition_array: [
                [{   
                    name: "Filter on Value",
                    id: 1
                },{
                    name: "Filter on Numerical Range",
                    id: 2
                }],
                [{   
                    name: "Filter1",
                    id: 1
                },{
                    name: "Filter2",
                    id: 2
                }]
            ],
            opt_condition: []
        }
    },
    components: {
        ElButton,
        bpExcel,
        ElDrawer,
        VueMarkdown
    },
    props: {
        icons: {
            type: Object,
            default: () => {
                return {
                    prepare_icon: `${staticFilePath}` + "/icons/prepare%E6%AD%A3%E5%B8%B8.svg",
                    add_icon: `${staticFilePath}` + "/icons/add_operator_icon.svg",
                    close_icon: `${staticFilePath}` + "/icon_close.svg"
                }
            }
        },
        allData: {
            type: Object,
            default: function() {
                return {
                    projectId: "YZYijD17N9L6LXx",
                    projectName: "autorawdata2021",
                    datasetName: "wodeluTest_勿删",
                    datasetId: "549b3658122543003bdd84b97dfaf8af.xlsx"
                }
            }
        },
        datasource: {
            type: Object,
            default: function () {
                return new PhContainerDataSource('1')
            }
        },
        schema: {
            type: Object,
            default: function () {
                return new PhContainerSchema('1')
            }
        },
        operatorArr: {
            type: Array,
            default: function () {
                return [{
                    id: 1,
                    opt_name: "Filter data",
                    opt_condition_num: 1,
                    opt_condition: [
                        {   
                            name: "Filter on Value",
                            desc: md,
                            id: 1
                        },{
                            name: "Filter on Numerical Range",
                            desc: "111",
                            id: 2
                        }
                    ]
                },{
                    id: 2,
                    opt_name: "Filter data",
                    opt_condition_num: 2,
                    opt_condition: [
                        {   
                            name: "Filter on Value",
                            desc: md,
                            id: 1
                        },{
                            name: "Filter on Numerical Range",
                            desc: "111",
                            id: 2
                        }
                    ]
                }]
            }
        }
    },
    methods: {
        totalCountIsReady(val) {
            this.totalNum = val
        },
        save() {

        },
        operator_opt_click(item) {
            this.selected = item.id
        },
        changeSchemaTypeEvent(data) {
            data.args.param.projectId = this.allData.projectId
            data.args.param.projectName = this.allData.projectName
            data.args.param.datasetName = this.allData.datasetName
            data.args.param.datasetId = this.allData.datasetId
            this.$emit('event',  data)
        }
    }
}
</script>
<style lang="scss" scoped>
    @font-face {
        font-family: element-icons;
        src: url(https://components.pharbers.com/element-ui/element-icons.woff) format("woff"),url(https://components.pharbers.com/element-ui/element-icons.woff) format("truetype");
        font-weight: 400;
        font-display: "auto";
        font-style: normal
    }
    .prepare {
        box-sizing: border-box;
        .operator {
            /deep/.el-drawer__header {
                border-bottom: 1px solid #ccc;
                padding-bottom: 10px;
                margin-bottom: 0;
            }
            .operator_content {
                display: flex;
                flex-direction: column;
                // height: 100%;
                .operator_con {
                    display: flex;
                    height: 100%;
                }
                .opt {
                    width: 220px;
                    border-right: 1px solid #ccc;
                    display: flex;
                    justify-content: space-between;
                    padding: 8px;
                    display: flex;
                    align-items: center;
                }
                .selected_bg {
                    background: #ccc;
                }
                .opt_condition {
                    width: 220px;
                    border-right: 1px solid #ccc;
                    .opt_condition_item {
                        height: 24px;
                        line-height: 24px;
                        padding: 0 5px;
                    }
                    .opt_condition_item:nth-child(2n+1) {
                        background: #f0f0f0;
                    }
                }
            }
        }
        .prepare_header {
            height: 48px;
            padding: 0 15px;
            border-bottom: 1px solid #cccccc;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .header_left {
                display: flex;
                align-items: center;
                img {
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                }
                span {
                    font-size: 20px;
                    color: #000000;
                    letter-spacing: 0.21px;
                    font-weight: 600;
                }
            }
            .header_right {
                button {
                    width: 65px;
                    height: 26px;
                    border: 1px solid #57565F;
                    border-radius: 2px;
                    background: none;
                    cursor: pointer;
                }
            }
        }
        .prepare_tab {
            height: 35px;
            border-bottom: 1px solid #cccccc;
            padding: 0 20px;
            display: flex;
            align-items: center;
            .tab {
                padding: 0 15px;
                cursor: pointer;
                font-size: 14px;
                color: #000000;
                letter-spacing: 0.15px;
                font-weight: 400;
            }
        }
        .prepare_area {
            display: flex;
            position: absolute !important;
            top: 82px;
            bottom: 0;
            left: 0;
            right: 0;
            .prepare_area_left {
                width: 300px;
                height: 100%;
                border-right: 1px solid #cccccc;
                display: flex;
                flex-direction: column;
                font-size: 14px;
                color: #000000;
                .left_title {
                    height: 40px;
                    display: flex;
                    align-items: center;
                    padding-left: 50px;
                    border-bottom: 1px solid #ccc;
                }
                .tab_content {
                    padding: 0;
                    overflow: auto;
                    margin: 0;
                    flex: 1 1 0;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .no_script {
                        padding: 60px 0;
                    }
                    .add_new_step {
                        width: 216px;
                        height: 25px;
                        background: #F8D634;
                        box-shadow: 1px 2px 4px 0px rgba(0,0,0,0.5);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                        color: #000000;
                    }
                }
            }
            .prepare_area_right {
                padding: 20px;
                .main_container {
                    display: flex;
                    justify-content: center;
                    .excel {
                        display: inline-grid;
                        margin: 10px;
                        overflow: auto;
                        width: 98%;
                    }
                }
            }
        }
    }
</style>

