<template>
    <div class="prepare">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="prepare_header">
            <div class="header_left">
                <img :src="icons.prepare_icon" alt="" />
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
                    <div class="no_operator" v-if="steps.data.length === 0">
                        当前脚本无算子
                    </div>
                    <div v-if="steps.data.length > 0" class="operator_area">
                        <div class="actions">
                            <div class="select_all">
                                <el-checkbox
                                    :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"></el-checkbox>
                                <img :src="icons.icon_dropdown" @click="showMultiSelectActionMenu = !showMultiSelectActionMenu" alt="" />
                                <div class="action_card" v-show="showMultiSelectActionMenu">
                                    <div class="action_item">删除</div>
                                </div>
                            </div>
                            <el-input
                                placeholder="搜索"
                                prefix-icon="el-icon-search"
                                v-model="searchKeyword">
                            </el-input>
                        </div>
                        <ul class="operator_item_area">
                            <li class="operator_item"
                                v-for="(field, index) in steps.data"
                                draggable="true"
                                @dragstart="dragStart($event, index, field)" @dragover="allowDrop"
                                @drop="drop($event, index, field)"
                                :key="index+'operator'">
                                <bp-operator-card
                                    :key="index+'opreator'"
                                    :step="field"
                                    :schema="schema.schema"
                                    :type="field['ctype']"/>
                            </li>
                        </ul>
                    </div>
                    <el-button
                        class="add_new_step"
                        @click="showOpFactories">
                        <img :src="icons.add_icon" alt="" />
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
        <op-factories ref="opFactories" class="op-factories" :visible="drawer" @newStep="newStep"/>
    </div>
</template>
<script>
import { staticFilePath, hostName } from '../../config/envConfig'
import ElButton from 'element-ui/packages/button/index'
import ElInput from 'element-ui/packages/input/index'
import PhStepDataSource from './model/stepDatasource'
import PhStepSchema from './model/stepSchema'
import PhStepModel from './model/stepsModel'
import bpExcel from '../../../../vue-excelv2-component/src/components/ph-excel-container'
import bpOperatorCard from './bp-card-dispatch'
import ElCheckboxGroup from 'element-ui/packages/checkbox-group/index'
import ElCheckbox from 'element-ui/packages/checkbox/index'
import OpFactories from "./processors/factory"
import { PhInitialFOVStepDefs, step2SaveObj } from "./steps/commands/filter-on-value/defs"

export default {
    data() {
        return {
            drawer: false,
            projectId: "ggjpDje0HUC2JW",
            projectName: "demo",
            flowVersion: "developer",
            jobName: "compute_q_out",
            debugToken: "778b1a0da979130bbaa4d62017a4562e84f8f05541a819658e070d9277ac1570",
            // ********* 上部功能区 *************
            showMultiSelectActionMenu: false,
            searchKeyword: "",
            checkAll: false,
            isIndeterminate: true
        }
    },
    components: {
        ElButton,
        bpExcel,
        bpOperatorCard,
        ElCheckboxGroup,
        ElCheckbox,
        ElInput,
        OpFactories
    },
    props: {
        icons: {
            type: Object,
            default: () => {
                return {
                    prepare_icon: `${staticFilePath}` + "/icons/prepare%E6%AD%A3%E5%B8%B8.svg",
                    add_icon: `${staticFilePath}` + "/icons/add_operator_icon.svg",
                    close_icon: `${staticFilePath}` + "/icon_close.svg",
                    icon_dropdown: "https://components.pharbers.com/prod/general/public/icon_dropdown.svg"
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
                return new PhStepDataSource('1')
            }
        },
        schema: {
            type: Object,
            default: function () {
                return new PhStepSchema('1')
            }
        },
        steps: {
            type: Object,
            default: function() {
                return new PhStepModel('1')
            }
        }
    },
    mounted() {
        this.steps.refreshData()
    },
    methods: {
        showOpFactories() {
            this.drawer = true
            this.$refs.opFactories.visibleSync = true
        },
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        },
        // 目标文件表拖动
        dragStart(e, index, field){
            this.clearBakData() // 清空上一次拖动时保存的数据
            // e.dataTransfer.setData('Text', index);
            this.fileMiddleData= field // 设置此次拖动时保存的数据
            this.fileMddleIndex = index //设置此次拖动时保存的数据Index
        },
        allowDrop(e){
            e.preventDefault()
        },
        clearBakData(){
            // 此处写清除各列表的操作
            this.fileMiddleData = ''
            this.fileMddleIndex = -1
        },
        drop(e, index,field){
            // 取消默认行为
            this.allowDrop(e);
            let arr = this.steps.data.concat([])
            let temp = arr[index];
            arr[index] = arr[this.fileMddleIndex];
            arr[this.fileMddleIndex] = temp;

            this.steps.data = arr;
            this.clearBakData()
        },
        handleCheckAllChange(val) {
            // this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        totalCountIsReady(val) {
            this.totalNum = val
        },
        async save() {
            // 保存算子
            let itemArr = []
            let expressionsArr = []
            for (let index = 0; index < 2; ++index) {
                const item = this.steps.data[index]
                item.expressions = JSON.stringify(item.callback.command.revert2Defs())
                expressionsArr.push(JSON.parse(item.expressions))
                itemArr.push(step2SaveObj(item))
            }
            const body = {
                table: "step",
                item: itemArr
            }

            const url = `${hostName}/phdydatasource/put_item`
            let headers = {
                Authorization: this.getCookie("access_token") || this.debugToken,
                "Content-Type": "application/vnd.api+json",
                Accept: "application/vnd.api+json"
            }
            let options = {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            }
            await fetch(url, options)
            
            // 保存脚本
            const event = new Event("event")
            event.args = {
                callback: "prepare",
                element: this,
                param: {
                    name: "prepare",
                    changeParams: this.changeParams,
                    projectId: this.projectId,
                    projectName: this.projectName,
                    itemArr: expressionsArr,
                    message: this.allData.message
                }
            }
            console.log(event)
            this.$emit('event', event)
        },
        changeSchemaTypeEvent(data) {
            data.args.param.projectId = this.allData.projectId
            data.args.param.projectName = this.allData.projectName
            data.args.param.datasetName = this.allData.datasetName
            data.args.param.datasetId = this.allData.datasetId
            this.$emit('event',  data)
        },
        // 新建一个算子
        newStep(stepType) {
            switch (stepType) {
            case "FilterOnValue":
                let ns = Object.assign({}, PhInitialFOVStepDefs)
                ns["attributes"].index = Math.max(...this.steps.data.map(x => x.index)) + 1
                ns["attributes"]["pj-name"] = [this.projectId, this.projectName, this.projectName, this.flowVersion, this.jobName].join("_")
                ns["attributes"]["step-id"] = (ns["attributes"].index).toString()
                ns.id = ns["attributes"].pjName + ns["attributes"].stepId
                this.steps.store.syncRecord(ns)
                break
            case "FilterOnNumericalRange":

            default:
                alert("step type is not implemented")
                break
            }
            this.steps.data = this.steps.store.findAll("steps")
            this.drawer = false
        }
    }
}
</script>
<style lang="scss">
    @font-face {
        font-family: element-icons;
        src: url(https://components.pharbers.com/element-ui/element-icons.woff) format("woff"),url(https://components.pharbers.com/element-ui/element-icons.woff) format("truetype");
        font-weight: 400;
        font-display: "auto";
        font-style: normal
    }
    * {
        letter-spacing: .4px;
        line-height: 1.6;
        box-sizing: border-box;
    }
    .prepare {
        box-sizing: border-box;
        .op-factories {
            // background: red;
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
            top: 123px;
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
                    .no_operator {
                        padding: 30px 0;
                    }
                    .operator_area {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        .actions {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            width: 100%;
                            padding: 4px;
                            border-bottom: 1px solid #ccc;
                            .select_all {
                                display: flex;
                                align-items: center;
                                border: 1px solid #ccc;
                                height: 24px;
                                padding: 4px;
                                img {
                                    cursor: pointer;
                                }
                                .action_card {
                                    position: absolute;
                                    top: 20px;
                                    left: 26px;
                                    border: 1px solid #ccc;
                                    width: 100px;
                                    z-index: 2;
                                    background: #fff;
                                    padding: 10px;
                                    cursor: pointer;
                                }
                            }
                            /deep/.el-input {
                                height: 24px;
                                width: 240px;
                            }
                            /deep/.el-input__inner {
                                height: 24px;
                                display: flex;
                                align-items: center;
                            }
                            /deep/.el-input__icon {
                                line-height: 24px;
                            }
                        }
                        .operator_item_area {
                            overflow: auto;
                            height: calc(100vh - 330px);
                            width: 100%;
                            padding: 0;
                        }
                        .operator_item {
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            overflow: auto;
                            .card {
                                border: 1px solid #ddd;
                            }
                        }
                    }
                    .add_new_step {
                        margin-top: 30px;
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
                // width: calc(100vw - 300px);
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

