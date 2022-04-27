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
                                v-for="(item, index) in steps.data"
                                draggable="true"
                                @dragstart="handleDragStart($event, item)"
                                @dragover.prevent="handleDragOver($event, item)"
                                @dragenter="handleDragEnter($event, item)"
                                @dragend="handleDragEnd($event, item)"
                                :key="index+'operator'">
                                <bp-operator-card
                                    :key="index+'opreator'"
                                    :step="item"
                                    :schema="schema.schema"
                                    @delCardItem="delCardItem"
                                    :type="item['ctype']"/>
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
                        :isNeedPopmenu="false"
                        v-on:countIsReady="totalCountIsReady"
                        @countIsReady="totalCountIsReady"
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
import { PhInitialFONRStepDefs } from "./steps/commands/filter-on-numerical-range/defs"
import { PhInitialRVStepDefs } from "./steps/commands/replace-value/defs"
import { PhInitialFEWVEStepDefs } from "./steps/commands/fill-empty-with-value/defs"

export default {
    data() {
        return {
            drawer: false,
            projectId: "",
            projectName: "",
            flowVersion: "developer",
            jobName: "compute_q_out",
            debugToken: "50d581afd4147919a140f23ccf6f8cb0a998294ceaf10f4fc9fa09c278f6b115",
            // ********* 上部功能区 *************
            showMultiSelectActionMenu: false,
            searchKeyword: "",
            checkAll: false,
            isIndeterminate: true,
            deleteStepsArray: [],
            uriMessage: null,
            dragging: null //正在拖拽的 元素
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
                return new PhStepSchema('1', this)
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
        this.projectId = this.getUrlParam("projectId")
        this.projectName = this.getUrlParam("projectName")
        this.uriMessage = JSON.parse(
            unescape(this.getUrlParam("message"))
        )
        this.jobName = this.getJobName()
        this.steps.refreshData()
    },
    methods: {
        getJobName() {
            let uriMessage = JSON.parse(
                unescape(this.getUrlParam("message"))
            )
            let jobShowName = uriMessage.jobShowName ? uriMessage.jobShowName : uriMessage.jobName
            return [this.projectName, this.projectName, this.flowVersion, jobShowName, "out"].join("_")
        },
        getUrlParam( value) {
            let href = window.location.href
            console.log(href)
            let paramArr = href.split("?")[1].split("&")
            let data = paramArr.find(item => item.indexOf(value) > -1)
            return data ? decodeURI(data).split("=")[1] : undefined
        },
        getUriInputName() {
            let uriMessage = JSON.parse(
                unescape(this.getUrlParam(paramArr, "message"))
            )
            return uriMessage["inputs"][0]["name"]
        },
        delCardItem(datas) {
            let model = datas.args.param.data
            this.deleteStepsArray.push(model)
            this.steps.store.destroy(model)
            this.steps.data = this.steps.store.findAll("steps")
        },
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
        
        /** 拖拽 **/

        // 进行拖拽的元素
        handleDragStart(e,item){
            this.dragging = item;
        },
        handleDragEnter(e,item){
            //为需要移动的元素设置dragstart事件
            e.dataTransfer.effectAllowed = "move"
            if(item === this.dragging) {
                return
            }
            const newItems = [...this.steps.data]
            const src = newItems.indexOf(this.dragging)
            const dst = newItems.indexOf(item)
            newItems.splice(dst, 0, ...newItems.splice(src, 1))
            this.steps.data = newItems;
        },
        //首先把div变成可以放置的元素，即重写dragenter/dragover
        handleDragOver(e) {
            e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
        },
        handleDragEnd(e,item){
            this.dragging = null
        },
        /** 拖拽 **/
        
        handleCheckAllChange(val) {
            // this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        totalCountIsReady(val) {
            this.totalNum = val
        },
        async deleteStep(ele) {
            const body = {
                table: "step",
                conditions: {
                    pjName: ele["pj-name"],
                    stepId: ele["step-id"]
                }
            }

            const url = `${hostName}/phdydatasource/delete_item`
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
            const result = await fetch(url, options)
            return result.status === 200
        },
        async save() {
            //删除算子
            for (let idx = 0; idx< this.deleteStepsArray.length; ++idx) {
                // await this.deleteStepsArray[idx].delete(this)
                await this.deleteStep(this.deleteStepsArray[idx])
            }
            // 保存算子
            let itemArr = []
            let expressionsArr = []
            for (let index = 0; index < this.steps.data.length; ++index) {
                const item = this.steps.data[index]
                item.expressions = JSON.stringify(item.callback.command.revert2Defs())
                expressionsArr.push(JSON.parse(item.expressions))
                itemArr.push(step2SaveObj(item))
            }
            itemArr = itemArr.sort((l, r) => l["index"] - r["index"])
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
            this.$emit('event', event)
        },
        // 新建一个算子
        newStep(stepType) {
            let indexNum = this.steps.data.length > 0 ? Math.max(...this.steps.data.map(x => x.index)) + 1 : 1
            switch (stepType) {
            case "FilterOnValue":
                let ns = Object.assign({}, PhInitialFOVStepDefs)
                ns["attributes"].index = indexNum
                ns["attributes"]["pj-name"] = [this.projectId, this.jobName].join("_")
                ns["attributes"]["step-id"] = (ns["attributes"].index).toString()
                ns.id = ns["attributes"][["pj-name"]] + ns["attributes"]["step-id"]
                this.steps.store.syncRecord(ns)
                break
            case "FilterOnNumericalRange":
                let FONRns = Object.assign({}, PhInitialFONRStepDefs)
                FONRns["attributes"].index = indexNum
                FONRns["attributes"]["pj-name"] = [this.projectId, this.jobName].join("_")
                FONRns["attributes"]["step-id"] = (FONRns["attributes"].index).toString()
                FONRns.id = FONRns["attributes"][["pj-name"]] + FONRns["attributes"]["step-id"]
                this.steps.store.syncRecord(FONRns)
                break
            case "ReplaceValue":
                let RVns = Object.assign({}, PhInitialRVStepDefs)
                RVns["attributes"].index = indexNum
                RVns["attributes"]["pj-name"] = [this.projectId,this.jobName].join("_")
                RVns["attributes"]["step-id"] = (RVns["attributes"].index).toString()
                RVns.id = RVns["attributes"][["pj-name"]] + RVns["attributes"]["step-id"]
                this.steps.store.syncRecord(RVns)
                break
            case "FillEmptyWithValue":
                let FEWVns = Object.assign({}, PhInitialFEWVEStepDefs)
                FEWVns["attributes"].index = indexNum
                FEWVns["attributes"]["pj-name"] = [this.projectId,this.jobName].join("_")
                FEWVns["attributes"]["step-id"] = (FEWVns["attributes"].index).toString()
                FEWVns.id = FEWVns["attributes"][["pj-name"]] + FEWVns["attributes"]["step-id"]
                this.steps.store.syncRecord(FEWVns)
                break
            default:
                alert("step type is not implemented")
                break
            }
            this.steps.data = this.steps.store.findAll("steps")
            console.log(this.steps.data)
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
                min-width: 300px;
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
                        width: 100%;
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
                                height: 40px;
                                padding: 4px;
                                img {
                                    cursor: pointer;
                                }
                                .action_card {
                                    position: absolute;
                                    top: 36px;
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
                            background: white;
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

