<template>
    <div class="ec-container">
        <link rel="stylesheet" href="https://s3.cn-northwest-1.amazonaws.com.cn/components.pharbers.com/element-ui/element-ui.css">
        <div class="header">
			<span class="project_name" @click="linkToPage('project')">
				{{allData.projectName}}
			</span>
            <div class="expand_bg" @mouseover="focusExpand" @mouseout="focusOutExpand">
                <img src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E6%8B%93%E5%B1%95.svg" alt="" class="expand">
            </div>
        </div>
        <nav class="expang_popup" v-show="expangPopup" @mouseover="focusExpand" @mouseout="focusOutExpand">
            <ul>
                <li @click="linkToPage('flow')">数据流程</li>
                <li @click="linkToPage('datasets')">数据集</li>
                <li @click="linkToPage('scripts')">脚本</li>
            </ul>
        </nav>
        <div class="dataset_header">
            <img :src="dataset_icon" class="dataset_icon" alt="">
            {{allData.datasetName}}
        </div>
        <div class="title-container">
            <div class="title-left">
                <div class="title-span">
                    <span>{{title}}</span>
                </div>
                <div class="disc-span">
                    {{totalNum}} rows, {{totalCols}} cols
                </div>
            </div>
            <div class="btn-groups">
                <button class="btn_chart" @click="dialogDownloadVisible = true">下载当前筛选数据</button>
                <bp-select-vue class="btn_select" :src="selectIcon" choosedValue="显示菜单" @showSelectOption="showSelectOption" :closeTosts="closeTosts">
                    <bp-option-vue class="schema-select-item" text="选择显示行" @click="dialogVersionFilterVisible = true"></bp-option-vue>
                    <bp-option-vue class="schema-select-item" text="选择显示列" @click="dialogCollectionVisible = true"></bp-option-vue>
                    <bp-option-vue class="schema-select-item" text="选择排序列" @click="dialogSortVisible = true"></bp-option-vue>
                </bp-select-vue>
            </div>
        </div>
        <div class="search-container">
            <div class="search-inner">
                <input type="search" ref="search" name="q"
                       aria-label="Search through site content">
                <button class="search-submit" @click="on_searchBtnClicked">Search</button>
            </div>
            <div class="search-result">
                <span>{{matchNum}} matching rows</span>
            </div>
        </div>
        <div class="main_container">
            <bp-excel ref="excel" viewHeight="calc(100vh - 300px)"
                      v-on:countIsReady="totalCountIsReady"
                      :datasource="datasource" :schema="schema" class="excel" />
        </div>
        <el-dialog
                title="显示行"
                :visible.sync="dialogVersionFilterVisible"
                width="450px"
                height="600px"
                @close="on_clickVersionFilterCancel">

            <div class="dlg-version-container">
                <div class="dlg-flex-version" >
                    <div class="dlg-flex-version-item" v-for="(item, index) in versionFilterPolicy.selectVersionTags" :key="item+index">
                        <span>{{item}}</span>
                        <img :src="close_icon" class="close_icon" @click="versionFilterPolicy.removeSelectVersionTags(item)" alt="">
                    </div>
                </div>
                <div class="dlg-version-spliter"></div>
                <el-input placeholder="搜索" v-model="searchRow" @input="searchRowInput(searchRow)" class="search_row"></el-input>
                <img :src="search_row" class="search_row_icon" alt="">
                <div class="dlg-all-version-container">
                    <div class="dlg-flex-version-item" v-for="(item, index) in versionCandidatesShow" :key="item+index" @click="versionFilterPolicy.appendSelectVersionTags(item)">
                        <span>{{item}}</span>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
				<el-button @click="on_clickVersionFilterCancel">取消</el-button>
				<el-button type="primary" @click="on_clickVersionFilterConfirm">确认</el-button>
			</span>
        </el-dialog>
        <el-dialog
                title="显示列"
                :visible.sync="dialogCollectionVisible"
                @close="on_clickCollectionCancel"
                width="30%">

            <div class="dlg-col-container">
                <div class="dlg-col-search-bar">
                    <div class="dlg-col-search-input">
                        <el-input placeholder="搜索" ref="colSearch" v-model="searchList" class="search_list" @input="on_collectionSearchBtnClicked(searchList)"></el-input>
                        <img :src="search_row" class="search_list_icon" alt="">
                    </div>
                </div>
                <div class="dlg-col-cols">
                    <el-checkbox :indeterminate="collectionsPolicy.isIndeterminate" v-model="collectionsPolicy.checkAll" @change="on_collectionCheckAllChange">Check all</el-checkbox>
                    <div style="margin: 15px 0;"></div>
                    <div class="dlg-version-spliter"></div>
                    <div style="margin: 15px 0;"></div>
                    <el-checkbox-group class="dlg-collection-list" v-model="collectionsPolicy.selectCollections" @change="on_handleCheckedColsChange">
                        <el-checkbox class="checkbox" v-for="col in collectionsPolicy.shownCollections" :label="col" :key="col">{{col}}</el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>

            <span slot="footer" class="dialog-footer">
				<el-button @click="on_clickCollectionCancel">取消</el-button>
				<el-button type="primary" @click="on_clickCollectionConfirm">确认</el-button>
			</span>
        </el-dialog>
        <el-dialog
                title="排序列"
                :visible.sync="dialogSortVisible"
                @close="dialogSortVisible"
                width="30%">

            <div class="dlg-sort-container">
                <div class="dlg-sort-nav">
                    <div class="dlg-sort-nav-left">
                        <span class="title">可选列</span>
                        <el-input placeholder="搜索" v-model="searchSort" class="search_list" @input="search(searchSort)"></el-input>
                        <img :src="search_row" class="search_list_icon" alt="">
                        <!-- <div class="dlg-sort-filter">
                            <input type="search" ref="colFilter">
                            <button class="search-submit" @click="search">Search</button>
                        </div> -->
                    </div>
                    <div class="dlg-sort-nav-right">
                        <span>已选列</span>
                        <button @click="on_clearSortCollections">全部清除</button>
                    </div>
                </div>
                <div class="dlg-sort-candi-container">
                    <div class="dlg-sort-candi-items dlg-panel-left">
						<span class="dlg-sort-candi-item" v-for="col in collectionsPolicy.shownCollections"
                              :label="col" :key="'candi' + col" @click="on_clickSortShownCandi(col)">{{col}}</span>
                    </div>
                    <div class="dlg-sort-candi-items dlg-panel-right">
						<span class="dlg-sort-candi-item" v-for="col in collectionsPolicy.sortCollections"
                              :label="col" :key="'select' + col" @click="on_clickSortSelectCandi(col)">{{col}}</span>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
				<el-button @click="on_clickSortCancel">取消</el-button>
				<el-button type="primary" @click="on_clickSortConfirm">确认</el-button>
			</span>
        </el-dialog>

        <el-dialog
                title="下载"
                :visible.sync="dialogDownloadVisible"
                @close="on_clickDownloadConfirm"
                width="600px">

            <div class="dlg-download-container">
                <table border="0">
                    <tr class="first">
                        <td class="download_title">重命名</td>
                        <td>
                            <input type="text" ref="nameRef">
                        </td>
                    </tr>
                    <tr>
                        <td class="download_title">格式</td>
                        <td>
                            <input type="text" ref="suffRef">
                        </td>
                    </tr>
                </table>
            </div>
            <span slot="footer" class="dialog-footer">
    			<!-- <button @click="on_clickDownloadConfirm">Cancel</button>
    			<button type="primary" @click="on_clickDownloadConfirm">Confirm</button> -->
				<el-button @click="on_clickDownloadConfirm">取消</el-button>
				<el-button type="primary" @click="on_clickDownloadConfirm">确认</el-button>
			</span>
        </el-dialog>
    </div>
</template>
<script>
import PhContainerDataSource from './model/containerDatasource'
import PhContainerSchema from './model/containerSchema'
import bpSelectVue from '../../node_modules/vue-components/src/components/bp-select-vue.vue'
import bpOptionVue from '../../node_modules/vue-components/src/components/bp-option-vue.vue'
import PhDlgVersionController from './dlgController/dlgVersionController'
import PhDlgCollectionController from './dlgController/dlgCollectionController'
import ElDialog from 'element-ui/packages/dialog/src/component'
import ElCheckbox from 'element-ui/packages/checkbox/src/checkbox'
import ElCheckboxGroup from 'element-ui/packages/checkbox-group/index'
import ElButton from 'element-ui/packages/button/index'
import ElInput from 'element-ui/packages/input/index'
import bpExcel from '../../../vue-excelv2-component/src/components/ph-excel-container'
export default {
    data() {
        return {
            dialogVersionFilterVisible: false, //显示行
            dialogSortVisible: false, //显示排序
            dialogCollectionVisible: false, //显示列
            dialogDownloadVisible: false, //显示下载
            selectIcon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/drop_down_icon.svg",
            showSelectOptionParam: false,
            closeTosts: false,
            totalNum: 0,
            matchNum: 0,
            dataset_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/Database.svg",
            close_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_close.svg",
            searchRow: '',
            searchList: '',
            search_row: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E6%90%9C%E7%B4%A2.svg",
            versionCandidatesShow: [],
            searchSort: '',
            expangPopup: false
        }
    },
    computed: {
        totalCols: function() {
            return this.schema.cols.length
        }
    },
    components: {
        bpSelectVue,
        bpOptionVue,
        ElDialog,
        ElCheckbox,
        ElCheckboxGroup,
        ElButton,
        ElInput,
        bpExcel
    },
    props: {
        title: {
            type: String,
            default: "预览数据样本"
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
        versionFilterPolicy: {
            type: Object,
            default: function() {
                return new PhDlgVersionController('1')
            }
        },
        collectionsPolicy: {
            type: Object,
            default: function() {
                return new PhDlgCollectionController('1', this.schema.schema)
            }
        },
        allData: {
            type: Object,
            default: function() {
                return {
                    projectName: '',
                    datasetName: 'prod_clean_v2',
                    projectId: '',
                    schemaArr: []
                }
            }
        }
    },
    beforeMount() {

    },
    mounted() {
        //传入数据时渲染表格
        if(this.allData.schemaArr && this.allData.schemaArr.length > 0) {
            // this.descRefresh++
            console.log("refresh excel")
        } else {
            this.schema.resetSchema(
                ["Index", "Id", "Hospname", "Province", "City", "lHospname", "lHospalias", "lDistrict", "lLevel", "lCat", "lOffweb"],
                ["Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text"],
                [118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118]
            )
        }
    },
    methods: {
        linkToPage(name) {
            let sel = confirm("您还没有保存更改，确认返回吗?")
            if(sel) {
                const event = new Event("event")
                event.args = {
                    callback: "linkToPage",
                    element: this,
                    param: {
                        "name": name,
                        "projectName": this.allData.projectName,
                        "projectId": this.allData.projectId
                    }
                }
                this.$emit('event', event)
            }
        },
        focusOutExpand() {
            this.expangPopup = false
        },
        focusExpand() {
            this.expangPopup = true
        },
        search(data) {
            console.log(data)
        },
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        },
        on_searchBtnClicked() {
            this.matchNum = this.datasource.clientSideSearch(this, this.$refs.search.value)
        },
        showSelectOption() {
            this.showSelectOptionParam = true
        },
        //显示行取消
        on_clickVersionFilterCancel() {
            this.dialogVersionFilterVisible = false
            this.searchRow = ""
            // this.versionFilterPolicy.selectVersionTags = []
        },
        // 显示行确认
        on_clickVersionFilterConfirm() {
            this.searchRow = ""
            this.dialogVersionFilterVisible = false
            const condi = this.versionFilterPolicy.selectVersionTags
            if(condi.length > 0) {
                let condi_str = "`version` in ["
                for (var idx in condi) {
                    console.log(idx)
                    if (idx > 0) {
                        condi_str = condi_str + ","
                    }
                    console.log(condi[idx])
                    if(typeof(condi[idx]) === 'string') {
                        condi_str = condi_str + "'" + condi[idx] + "'"
                    }
                    console.log(condi_str)
                }
                condi_str = condi_str + "]"
                this.datasource.pushFilterCondition("version", condi_str)
                this.$refs.excel.dataRefresh++
            }
        },
        //选择列确认
        on_clickCollectionConfirm() {
            this.dialogCollectionVisible = false
            this.datasource.cols = this.collectionsPolicy.resetShowingCollections()
            this.$refs.excel.dataRefresh++
            this.searchList = ""
        },
        //选择列取消
        on_clickCollectionCancel() {
            this.dialogCollectionVisible = false
            this.searchList = ""
        },
        on_collectionCheckAllChange(val) {
            this.collectionsPolicy.checkAllCollections(val)
        },
        on_handleCheckedColsChange(val) {
            this.collectionsPolicy.checkCollectionsItem(val)
        },
        on_collectionSearchBtnClicked(data) {
            this.collectionsPolicy.filterCollectionsByChar(data)
        },
        on_clickSortSelectCandi(col) {
            this.collectionsPolicy.popSortCols(col)
        },
        on_clickSortShownCandi(col) {
            this.collectionsPolicy.pushSortCols(col)
        },
        on_clearSortCollections() {
            this.collectionsPolicy.sortCollections = []
            this.collectionsPolicy.clearShownCollectionFilter()
        },
        //sort取消
        on_clickSortCancel() {
            this.dialogSortVisible = false
            this.searchSort = ""
        },
        // sort确认
        on_clickSortConfirm() {
            this.searchSort = ""
            this.dialogSortVisible = false
            this.datasource.clearSortCondition()
            for (var idx in this.collectionsPolicy.sortCollections) {
                if(typeof(this.collectionsPolicy.sortCollections[idx]) === 'string') {
                    this.datasource.pushSortCondition(this.collectionsPolicy.sortCollections[idx], 1)
                }
            }
            this.$refs.excel.dataRefresh++
        },
        on_clickDownloadCancel() {
            this.dialogDownloadVisible = false
        },
        on_clickDownloadConfirm() {
            this.dialogDownloadVisible = false
            // TODO
        },
        searchRowInput(data) {
            this.versionCandidatesShow = this.versionFilterPolicy.versionCandidates.filter(it => it.indexOf(data) > -1)
        },
        totalCountIsReady(val) {
            this.totalNum = val
        }
    },
    watch: {
        // 首次加载触发，请求Excel数据
        'allData.schemaArr': {
            immediate: true,
            handler:function(n, o) {
                const length = this.allData.schemaArr.length
                this.schema.resetSchema(this.allData.schemaArr, Array(length).fill("Text"), Array(length).fill(118))
                this.datasource.name = this.allData.datasetName
                this.datasource.projectId = this.allData.projectId
                if (this.datasource.projectId.length > 0)
				    this.datasource.resetUrl("https://apiv2.pharbers.com/phdadatasource")
            }
        },
        //显示行请求接口
        dialogVersionFilterVisible(n, o) {
            let that = this
            if (this.versionCandidatesShow.length === 0) {
                that.datasource.queryDlgDistinctCol(this, "`version`").then((provinces) => {
                    //完整的显示行列表数据
                    this.versionCandidatesShow = provinces
                    that.versionFilterPolicy.versionCandidates = provinces
                })
            }
        },
        // 显示列请求接口
        dialogCollectionVisible(n, o) {
            if (this.collectionsPolicy.collections.length === 0)
                this.collectionsPolicy.resetCollections(this.datasource.schema)

            if (n) {
                if (this.$refs.colSearch)
                    this.$refs.colSearch.value = ""
                this.collectionsPolicy.clearShownCollectionFilter()
            }
        },
        dialogSortVisible(n, o) {
            if (this.collectionsPolicy.collections.length === 0)
                this.collectionsPolicy.resetCollections(this.datasource.schema)

            if (n) {
                if (this.$refs.colFilter)
                    this.$refs.colFilter.value = ""
                this.collectionsPolicy.clearShownCollectionFilter()
                this.collectionsPolicy.resetSortCollections()
            }
        }
    }
};
</script>
<style lang="scss">
    @font-face {
        font-family: element-icons;
        src: url('https://s3.cn-northwest-1.amazonaws.com.cn/components.pharbers.com/element-ui/element-icons.woff') format('woff'), url('https://s3.cn-northwest-1.amazonaws.com.cn/components.pharbers.com/element-ui/element-icons.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    .el-dialog__wrapper {
        background: rgba(0, 0, 0, 0.31);
    }
    .ec-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        box-sizing: border-box;
        .project_name {
            cursor: pointer;
        }
        .el-dialog__wrapper {
            .el-dialog__header {
                border-bottom: 1px solid #ccc;
            }
        }
        .header {
            // width: 100vw;
            height: 40px;
            background: #222;
            color: #fff;
            display: flex;
            align-items: center;
            font-size: 20px;
            padding: 0 20px;
            .expand_bg {
                width: 40px;
                height: 40px;
                background: #28a9dd;
                margin-left: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                .expand {
                    width: 20px;
                    height: 20px;
                }
            }
        }
        .expang_popup {
            background-color: #333333;
            box-shadow: 0 5px 5px -3px rgba(34, 34, 34, 0.2), 0 3px 14px 2px rgba(34, 34, 34, 0.12), 0 8px 10px 1px rgba(34, 34, 34, 0.14);
            width: 200px;
            height: auto;
            position: absolute;
            left: 62px;
            top: 40px;
            // transition: height 150ms ease-out;
            // display: none;
            z-index: 3001;
            font-size: 14px;
            font-weight: 400px;
            ul, li {
                list-style: none;
                padding-left: 0;
                margin: 0 auto;
            }
            li {
                color: #ffffff;
                width: 200px;
                padding: 10px;
                border-bottom: 1px solid #444;
                cursor: pointer;
            }
            li:hover {
                background: #444;
            }
        }
        .dataset_header {
            height: 48px;
            background: #ffffff;
            border-bottom: 1px solid #dddddd;
            margin: 0 !important;
            color: #333333;
            display: flex;
            padding: 0 20px;
            align-items: center;
            .dataset_icon {
                width: 24px;
                height: 24px;
                margin-right: 10px;
            }
        }
        .title-container{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #ffffff;
            border-bottom: 1px solid #dddddd;
            padding-left: 20px;
            padding-right: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
            margin-top: 0px;
            .title-left {
                display: flex;
                flex-direction: column;
                .title-span {
                    font-family: "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif;
                    font-size: 24px;
                    display: flex;
                    flex-direction: row;
                    width: 98px;
                    height: 22px;
                    font-family: Helvetica;
                    font-size: 16px;
                    color: #000000;
                    letter-spacing: 0.17px;
                    font-weight: 400;
                    .title-link {
                        font-family: ".SF NS Mono";
                        font-size: 10px;
                        display: flex;
                        flex-direction: column-reverse;
                    }
                }
                .disc-span {
                    font-family: 'Noto Sans JP', sans-serif;
                    height: 14px;
                    opacity: 0.5;
                    font-family: PingFangSC-Semibold;
                    font-size: 10px;
                    color: #000000;
                    letter-spacing: 0.1px;
                    font-weight: 600;
                    margin-top: 7px;
                }
            }

            .btn-groups {
                display: flex;
                flex-direction: row;
                .btn_chart {
                    height: 26px;
                    border-radius: 2px;
                    background: #f6f6f7;
                    font-family: 'PingFangSC-Regular';
                    font-size: 14px;
                    color: #57565F;
                    letter-spacing: 0;
                    text-align: center;
                    line-height: 20px;
                    font-weight: 400;
                    border: none;
                }
                .btn_select {
                    width: 100px;
                    height: 26px;
                    border: 1px solid #57565F;
                    border-radius: 2px;
                    margin-left: 20px;
                    font-family: 'PingFangSC-Regular';
                    font-size: 12px;
                    color: #000000;
                    letter-spacing: 0.12px;
                    font-weight: 400;
                }
                .btn-display {
                    font-size: 14px;
                    border-width: 1px;
                }
            }
        }



        .search-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 20px;
            align-items: center;
            .search-inner {
                display: flex;
                flex-direction: row;
                width: 179px;
                height: 26px;
                background: #FFFFFF;
                border: 1px solid #f6f6f7;
            }

            .search-result {
                font-family: 'Advent Pro', sans-serif;
                font-size: 14px;
                color: #57565F;
            }
        }
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

    .dlg-version-container {
        display: flex;
        flex-direction: column;

        .dlg-flex-version {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            max-height: 150px;
            overflow: auto;
            .dlg-flex-version-item {
                font-size: 12px;
                border: 1px solid #ccc;
                display: flex;
                align-items: center;
                padding: 5px;
                border-bottom: 1px solid #ccc;
                .close_icon {
                    width: 16px;
                    height: 16px;
                    margin-left: 5px;
                    cursor: pointer;
                }
            }

        }

        .dlg-all-version-container {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            overflow: auto;
            max-height:250px;
            .dlg-flex-version-item {
                cursor: pointer;
                padding: 5px;
                border-bottom: 1px solid #ccc;
            }
        }
    }

    .dlg-collection-list {
        display: flex;
        flex-direction: column;
        max-height: 200px;
        overflow: auto;
        .checkbox {
            border-bottom: 1px solid #ccc;
            padding: 5px
        }
    }

    .dlg-version-spliter {
        height: 1px;
        background-color: #2c3e50;
        margin: 20px 0;
    }
    .search_list {
        input.el-input__inner {
            padding-left: 40px;
        }
    }
    .search_list_icon {
        width: 20px;
        position: relative;
        top: -30px;
        left: 10px;
    }
    .search_row {
        margin-bottom: 20px;
        input.el-input__inner {
            padding-left: 40px;
        }
    }
    .search_row_icon {
        width: 20px;
        position: relative;
        top: -50px;
        left: 10px;
    }
    .dlg-sort-container {
        display: flex;
        flex-direction: column;

        .dlg-sort-nav {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .dlg-sort-nav-left {
                width: 50%;
                .title {
                    display: block;
                    margin-bottom: 10px;
                }
            }
            .dlg-sort-nav-right {
                width: 50%;
                display: flex;
                justify-content: space-between;
                button {
                    height: 20px;
                    border: none;
                    background: none;
                    color: #409eff;
                    cursor: pointer;
                }
            }
        }

        .dlg-sort-filter {
            display: flex;
            flex-direction: row;
        }

        .dlg-sort-candi-container {
            display: flex;
            flex-direction: row;
            .dlg-panel-left {
                max-height: 250px;
                overflow: auto;
            }
            .dlg-sort-candi-items{
                display: flex;
                flex-direction: column;
                border: 1px solid #ccc;
                width: 50%;
                .dlg-sort-candi-item {
                    font-size: 14px;
                    margin: 5px;
                    cursor: pointer;
                }
            }
        }
    }
    .dlg-download-container {
        display: flex;
        justify-content: space-around;
        table {
            height: 100px;
            input {
                width: 230px;
                height: 24px;
                border: 1px solid #979797;
            }
        }
        .first {
            margin-bottom: 20px;
        }
        .download_title {
            width: 70px;
            text-align: right;
            padding-right: 20px;
        }
    }
</style>
