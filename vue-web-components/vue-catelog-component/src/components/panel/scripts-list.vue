<template>
    <div class="upload-recipt">
        <link rel="stylesheet" href="https://s3.cn-northwest-1.amazonaws.com.cn/components.pharbers.com/element-ui/element-ui.css">
        <div class="upload_dataset_container">
            <div class="info">
                <div class="project_info_left">
                    <div class="upload_top">
                        <div class="selected_search">
                            <div class="selected"
                                :class="[
                                    {'bg_disabled': reciptcheckedIds.length == 0}]">
                                <input type="checkbox" class="checkbox" ref="all" @click='chechedAllDataset()' :checked="reciptcheckedIds.length === allData.dcs.length">
                                <div class="opt-area" @click="dropShow">
                                    <span class="action" >选项</span>
                                    <img :src="dropDownIcon" alt="" class="d_icon">
                                    <div class="drop_dialog" v-if="dropDialogShow">
                                        <div class="label_icon" @click="createTagsOpen">
                                            <span class="tag_icon">
                                                <img :src="label_icon" alt="">
                                            </span>
                                            <p>标签</p>
                                        </div>
                                        <div class="label_icon border_none none" @click="clearDialogOpen">
                                            <span>
                                                <img :src="clear_data_icon" alt="">
                                            </span>
                                            <p >清除数据</p>
                                        </div>
                                        <div class="label_icon border_none" @click="deletedialogopen">
                                            <span>
                                                <img :src="delete_icon" alt="">
                                            </span>
                                            <p >删除脚本</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="search_area">
                                   <div class="search_icon">
                                       <img :src="search_icon">
                                   </div>
                                   <input type="text" placeholder="搜索" class="text_input" v-model="searchValue">
                            </div>
                            <button class="upload_btn" @click="toggle">新建脚本</button>
                            <div class="dialog" v-show="showDialog">
                                <div class="list" @click="selectScripts('python3')">
                                    <img src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/Python.svg" alt="">
                                    <p>python</p>
                                </div>
                                <div class="list" @click="selectScripts('pyspark')">
                                    <img src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/PySpark.svg" alt="">
                                    <p>PySpark</p>
                                </div>
                                <div class="list" @click="selectScripts('r')">
                                    <img src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/R.svg" alt="">
                                    <p>R</p>
                                </div>
                                <div class="list" @click="selectScripts('sparkr')">
                                    <img src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/SparkR.svg" alt="">
                                    <p>sparkR</p>
                                </div>
                                <div class="list last" @click="selectScripts('prepare')">
                                    <img src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E4%B8%8B%E8%BD%BD.svg" alt="">
                                    <p>prepare</p>
                                </div>
                            </div>
                        </div>

                        <div class="tag_selected">
                            <div class="sort">
                                <!-- 升序 -->
                                <img :src="ascending_order" alt="" v-if="ascending" @click="sort('ascending')">
                                <!-- 降序(默认) -->
                                <img :src="descending_order" alt="" v-if="!ascending" @click="sort('descending')">
                            </div>
                            <div class="down_sel" >
                                <bp-select-vue :src="selectIcon" :choosedValue="scriptValue" @showSelectOption="showSelectOption" :closeTosts="closeTosts">
                                    <bp-option-vue text="名称" @click="selectScript(1)"></bp-option-vue>
                                </bp-select-vue>
                            </div>
                            <div class="line">|</div>
                            <div class="down_sel tags_down_sel" >
                                <p class="sel" @click="labelShow">标签</p>
                                <span class="drop_icon" @click="labelShow">
                                    <img :src="dropDownIcon" alt="">
                                </span>
                                <div class="label_selected" v-if="labelShowDialog">
                                    <div class="tag_arr">
                                        <div class="label_name" v-for="(item,index) in allData.tagsArray" :key="index">
                                            <span  :style="{background: tagsColorArray[allData.tagsArray.indexOf(item)]}"></span>
                                            <div class="tags_name">{{item}}</div>
                                        </div>
                                    </div>
                                    <div class="management">
                                        <div class="manage_label">管理标签</div>
                                    </div>
                                </div>
                            </div>
                            <div class="clear_sea" @click="clearSearch" v-if="searchValue">清空搜索项</div>
                            <div class="dataset_number">
                                <p>{{allData.dcs.length}} 条脚本</p>
                            </div>
                        </div>
                    </div>
                    <div class="upload_bottom">
                        <div class="data_content" v-for="(recipt,index) in searchData" :key="index" ref="content" :class="{bg: reciptcheckedIds.indexOf(recipt.id) > -1}" @click="clickOnlyOne(recipt, index)">
                            <input type="checkbox" ref="data" name="reciptList" :checked="reciptcheckedIds.indexOf(recipt.id) > -1" @click.stop="checkedOneDataset(recipt)">
                            <div class="item_list">
                                <span class="script_icon">
                                    <img :src="selectScriptIcon(recipt.runtime)" alt="">
                                </span>
                                <p class="data_name" @click.stop="clickReciptName(recipt)" :title="recipt.jobShowName">{{recipt.jobShowName}}</p>
                                <div class="tag_area" ref="tagsArea">
                                    <div v-for="(tag,inx) in recipt.label" :key="inx">
                                        <span v-if="recipt.label !== ''">
                                            <p
                                                :title="tag"
                                                class="tag_bg"
                                                :style="{background: tagsColorArray[allData.tagsArray.indexOf(tag)]}">{{tag}}
                                            </p>
                                        </span>
                                    </div>
                                    <!-- tag的更多按钮，暂时隐藏 -->
                                    <!-- <img src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E6%9B%B4%E5%A4%9A.svg" alt="" class="more_tags" ref="moreTags"> -->
                                </div>
                            </div>
                        </div>
                        <div class="word" v-if="allData.dcs == ''">当前项目无数据</div>
                    </div>
                </div>
                <div class="project_info_right">
                    <div class="view_content" v-if="reciptcheckedIds.length > 0" >
                        <div class="project_name_view">
                            <span class="space">
                                <img :src="script_icon" alt="">
                            </span>
                            <div class="show-name" v-if="reciptcheckedIds.length == 1">
                                <p class="project_name_info" :title="reciptcheckedNames[0]">
                                {{reciptcheckedNames[0]}}
                                </p>
                            </div>
                           <div class="show-name">
                               <p class="project_name_info" v-if="reciptcheckedIds.length > 1">
                                    {{reciptcheckedIds.length}} 条脚本
                                </p>
                           </div>
                        </div>
                        <div class="view_func">
                            <span @click="edit" class="view_list" v-if="this.reciptcheckedIds.length == 1">
                                <img class='tags_imgs_tag' :src="edit_icon" alt="">
                                <span class='tags_func'>编辑</span>
                            </span>
                            <span @click="createTagsOpen" class="view_list">
                                <img class='tags_imgs_tag' :src="label_icon" alt="">
                                <span class='tags_func'>标签</span>
                            </span>
                            <span class="view_list" v-if="this.reciptcheckedIds.length == 1">
                                <img class='tags_imgs_tag' :src="run_icon" alt="">
                                <span class='tags_func'>运行</span>
                            </span>
                            <span class="view_list">
                                <img class='tags_imgs_tag' :src="star_icon" alt="">
                                <span class='tags_func'>收藏</span>
                            </span>
                            <span class="view_list" v-if="this.reciptcheckedIds.length == 1">
                                <img class='tags_imgs_tag' :src="copy_icon" alt="">
                                <span class='tags_func'>复制</span>
                            </span>
                             <span class="view_list">
                                <img class='tags_imgs_tag' :src="hide_icon" alt="">
                                <span class='tags_func'>隐藏</span>
                            </span>
                            <span  @click='deletedialogopen' class="view_list">
                                <img class='tags_imgs_tag' :src="delete_icon" alt="">
                                <span class='tags_func'>删除</span>
                            </span>
                        </div>
                    </div>
                    <p v-if="reciptcheckedIds.length == 0" class="click_look">单击对象查看详细信息</p>
                </div>
            </div>
        <!-- 清除脚本数据 -->
        <clear-recipt-dialog
            v-if="cleardialogshow"
            :reciptcheckedIds="reciptcheckedIds"
            :reciptcheckedNames="reciptcheckedNames"
            @clearTagsEvent="clearTags"
            @closeClearDialog="closeClearDialog">
        </clear-recipt-dialog>
        <!-- 删除脚本 -->
        <clear-delete
            v-if="deletedialogshow"
            :reciptcheckedIds="reciptcheckedIds"
            :datasetcheckedNames="reciptcheckedNames"
            @deleteDatasetsEvent="deleteDataset"
            @closeDeleteDialog="closeDeleteDialog">
        </clear-delete>
        <!-- 添加tag -->
        <create-tags-dialog
            v-if="showCreateTagsDialog"
            :reciptcheckedIds="reciptcheckedIds"
            :datasetcheckedNames="reciptcheckedNames"
            :datasets="allData.dcs"
            :tagsArray="allData.tagsArray"
            :tagsColorArray="tagsColorArray"
            @addTagsEvent="addTagsEvent"
            @closeCreateDialog="closeCreateDialog">
        </create-tags-dialog>
        <!-- 管理标签 -->
        <delete-tags-dialog :tags="tags" v-if="deleteTagsDia" @closeDeleteTags="closeDeleteTags"></delete-tags-dialog>
        <!-- 新建脚本 -->
        <create-scripts-dialog
            v-if="showCreateScriptsDialog"
            :datasets="allData.dss"
            :runtime="runtime"
            @createScripts="createScripts"
            @closeCreateDialog="closeScriptDialog">
        </create-scripts-dialog>
    </div>
    </div>
</template>

<script>
import clearReciptDialog from './clear-dataset-dialog.vue'
import clearDelete from './delete-dialog-script.vue'
import createTagsDialog from './create-tags-dialog.vue'
import deleteTagsDialog from './delete-tags-dialog.vue'
import createScriptsDialog from './create-scripts-dialog.vue'
import bpSelectVue from '../../../node_modules/vue-components/src/components/bp-select-vue.vue'
import bpOptionVue from '../../../node_modules/vue-components/src/components/bp-option-vue.vue'
import ElButton from 'element-ui/packages/option/index'

export default {
    data() {
        return {
            hide_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E9%9A%90%E8%97%8F.svg",
            copy_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/copy.svg",
            star_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E6%94%B6%E8%97%8F.svg",
            run_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E5%BC%80%E5%A7%8B1.svg",
            edit_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/edit.svg",
            label_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/tag.svg",
            search_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/search.png",
            dropDownIcon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/drop_down_icon.svg",
            delete_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/delete.png",
            clear_data_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/clear_data.png",
            selectIcon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/drop_down_icon.svg",
            delete_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/delete_r.svg",
            clear_data_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/delete_b.svg",
            ascending_order: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/down.svg",
            descending_order: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/top.svg",
            script_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/script_select.svg",
            prepare_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/script_select.svg",
            prepare_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/prepare_icon.svg",
            pyspark_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/pyspark_icon.svg",
            python_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/python_icon.svg",
            R_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/R_icon.svg",
            sparkR_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/sparkR_icon.svg",
            showDialog: false,
            state: '',
            editShow: false,
            dropDialogShow: false,
            labelShowDialog: false,
            cleardialogshow: false,
            deletedialogshow: false,
            showSelectOptionParam: false,
            closeTosts: false,
            showCreateTagsDialog: false, //添加tag弹框
            showCreateScriptsDialog: false,
            deleteTagsDia: false,
            searchValue: '',
            ascending: false,
            tags: ['name','description','啦啦啦'],
            ary: [],
            checked: false,
            manual: true,
            scriptValue: "名称",
            isCheckedAllDataset: false,
            reciptcheckedIds: [], //选中项id
            reciptcheckedNames: [], //选中项name
            color: ['#133883','#90a8b7','#94be8e','#ff21ee','#1ac2ab','#77bec2','#c7c7c7','#a088bd','#d66b9b','#5354ec','#acacff','#1e8103', '#ec7211','#ec7211', '#ea1c82','#2bb1ac', '#3c498c', '#000', 'blue', '#666'],
            tagsColorArray: ['#133883','#90a8b7','#94be8e','#ff21ee','#1ac2ab','#77bec2','#c7c7c7','#a088bd','#d66b9b','#5354ec','#acacff','#1e8103', '#ec7211','#ec7211', '#ea1c82','#2bb1ac', '#3c498c', '#000', 'blue', '#666'],
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }],
            value: '',
            dialogVisible: false,
            runtime: ""
        }
    },
    props: {
        allData: {
            type: Object,
            default: () => ({
                "projectName": "ETL_Iterator",
                "projectId": "JfSmQBYUpyb4jsei",
                "dcs": [
                    {
                        "flowVersion": "developer",
                        "jobPath": "2020-11-11/jobs/python/phcli/ETL_Iterator_ETL_Iterator_developer/ETL_Iterator_ETL_Iterator_developer_compute_weqw_FYMh8QYDX7FcUns/phjob.py",
                        "jobName": "developer_FYMh8QYDX7FcUns_ETL_Iterator_ETL_Iterator_compute_weqw",
                        "version": null,
                        "dagName": "ETL_Iterator",
                        "jobShowName": "compute_weqw",
                        "inputs": "[{\"name\":\"test01\", \"id\":\"0884a2df032a4e07a6fac05cf96df517\"}]",
                        "jobDisplayName": "ETL_Iterator_ETL_Iterator_developer_compute_weqw_FYMh8QYDX7FcUns",
                        "jobId": "FYMh8QYDX7FcUns",
                        "jobVersion": "weqw_version1",
                        "outputs": "[{\"name\":\"weqw\", \"id\":\"6277ab179aaa405aa9dc408d5ce42a44\"}]",
                        "owner": "张璐",
                        "projectId": "JfSmQBYUpyb4jsei",
                        "runtime": "python3",
                        "targetJobId": "[]",
                        "timeout": "1000"
                    },
                    {
                        "flowVersion": "developer",
                        "jobPath": "2020-11-11/jobs/python/phcli/ETL_Iterator_ETL_Iterator_developer/ETL_Iterator_ETL_Iterator_developer_compute_ss_NBdN5esAxvuhFnE/phjob.py",
                        "jobName": "developer_NBdN5esAxvuhFnE_ETL_Iterator_ETL_Iterator_compute_ss",
                        "version": null,
                        "dagName": "ETL_Iterator",
                        "jobShowName": "compute_ss",
                        "inputs": "[{\"name\":\"test01\", \"id\":\"0884a2df032a4e07a6fac05cf96df517\", \"cat\":\"input_index\"}]",
                        "jobDisplayName": "ETL_Iterator_ETL_Iterator_developer_compute_ss_NBdN5esAxvuhFnE",
                        "jobId": "NBdN5esAxvuhFnE",
                        "jobVersion": "ss_version1",
                        "outputs": "[{\"name\":\"ss\", \"id\":\"cb36ad3c0f3444c3a699b546a4e077a8\"}]",
                        "owner": "张璐",
                        "projectId": "JfSmQBYUpyb4jsei",
                        "runtime": "python3",
                        "targetJobId": "[]",
                        "timeout": "1000"
                    },
                    {
                        "flowVersion": "developer",
                        "jobPath": "2020-11-11/jobs/python/phcli/ETL_Iterator_ETL_Iterator_developer/ETL_Iterator_ETL_Iterator_developer_compute_3333_na4WCUxbdERSeWZ/phjob.py",
                        "jobName": "developer_na4WCUxbdERSeWZ_ETL_Iterator_ETL_Iterator_compute_3333",
                        "version": null,
                        "dagName": "ETL_Iterator",
                        "jobShowName": "compute_3333",
                        "inputs": "[{\"name\":\"test01\", \"id\":\"0884a2df032a4e07a6fac05cf96df517\"}]",
                        "jobDisplayName": "ETL_Iterator_ETL_Iterator_developer_compute_3333_na4WCUxbdERSeWZ",
                        "jobId": "na4WCUxbdERSeWZ",
                        "jobVersion": "3333_version1",
                        "outputs": "[{\"name\":\"3333\", \"id\":\"ce8b455328604e61bd0a86d34c075e35\"}]",
                        "owner": "张璐",
                        "projectId": "JfSmQBYUpyb4jsei",
                        "runtime": "python3",
                        "targetJobId": "[]",
                        "timeout": "1000"
                    }
                ],
                "dss": [
                    {
                        "projectId": null,
                        "schema": "[]",
                        "version": "max1.0",
                        "name": "test01",
                        "label": "",
                        "cat": "input_index",
                        "path": "/wer/wer"
                    },
                    {
                        "projectId": null,
                        "schema": "[]",
                        "version": null,
                        "name": "3333",
                        "label": "",
                        "cat": "normal",
                        "path": ""
                    },
                    {
                        "projectId": null,
                        "schema": "[]",
                        "version": null,
                        "name": "weqw",
                        "label": "",
                        "cat": "normal",
                        "path": ""
                    },
                    {
                        "projectId": null,
                        "schema": "[]",
                        "version": null,
                        "name": "ss",
                        "label": "",
                        "cat": "normal",
                        "path": ""
                    }
                ],
                "tagsArray": [],
                "_isVue": true
            })
        }
    },
    components: {
        clearReciptDialog,
        clearDelete,
        createTagsDialog,
        deleteTagsDialog,
        createScriptsDialog,
        bpSelectVue,
        bpOptionVue,
        ElButton
    },
    computed: {
        searchData: function() {
            let searchValue = this.searchValue
            this.state = 'search'
            if(searchValue) {
                return this.allData.dcs.filter(item => item.jobShowName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
            }
            this.sort("ascending")
            return this.allData.dcs
        }
    },
    mounted() {
        let that = this
        if(this.$refs.tagsArea) {
            this.$refs.tagsArea.forEach((item, index) => {
                item.style["height"] = "40px"
            })
        }
    },
    watch: {
        "allData.tagsArray": function() {
            this.tagsColorArray = []
            this.allData.tagsArray.forEach((item, index) => {
                this.tagsColorArray.push(this.color[Math.floor(Math.random()*10+Math.random()*10)])
            })
        }
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？').then(_ => {
                done();
            }).catch(_ => {});
        },
        //打开script弹框
        selectScripts(data) {
            this.showDialog = false
            this.runtime = data
            this.showCreateScriptsDialog = true
        },
        //增加tag
        addTagsEvent(data) {
            data.args.param.selectedDatasets = this.reciptcheckedIds
            data.args.param.datasetArray = this.allData.dcs
            data.args.param.projectName = this.allData.projectName,
            data.args.param.projectId = this.allData.projectId
            this.$emit('event', data)
            this.showCreateTagsDialog = false;
        },
        //清除脚本中数据
        clearTags(data) {
            data.args.param.selectedDatasets = this.reciptcheckedIds
            data.args.param.datasetArray = this.allData.dcs
            data.args.param.projectName = this.allData.projectName,
            data.args.param.projectId = this.allData.projectId
            this.$emit('event', data)
            this.cleardialogshow = false;
        },
        //删除脚本
        deleteDataset(data) {
            data.args.param.selectedDatasets = this.reciptcheckedIds
            data.args.param.datasetArray = this.allData.dcs
            data.args.param.projectName = this.allData.projectName,
            data.args.param.projectId = this.allData.projectId
            this.$emit('event', data)
            this.deletedialogshow = false;
        },
        //点击list主体
        clickOnlyOne(recipt, index) {
            this.reciptcheckedIds = []
            this.reciptcheckedNames = []
            this.reciptcheckedIds.push(recipt.id)
            this.reciptcheckedNames.push(recipt.name)
        },
        //点击list多选框
        checkedOneDataset(recipt) {
            let idIndex = this.reciptcheckedIds.indexOf(recipt.id)
            if(idIndex >= 0) {
                this.reciptcheckedIds.splice(idIndex, 1)
                this.reciptcheckedNames.splice(idIndex, 1)
            } else {
                this.reciptcheckedIds.push(recipt.id)
                this.reciptcheckedNames.push(recipt.name)
            }
        },
        //点击dataset name
        clickReciptName(recipt) {
            const event = new Event("event")
            event.args = {
                callback: "linkToPage",
                element: this,
                param: {
                    name: "codeditor",
                    projectName: this.allData.projectName,
                    projectId: this.allData.projectId,
                    recipt: recipt
                }
            }
            this.$emit('event', event)
        },
        //全选list
        chechedAllDataset() {
            this.isCheckedAllDataset = true
            if(this.reciptcheckedIds.length == this.allData.dcs.length) {
                this.isCheckedAllDataset = false
            }
            this.reciptcheckedIds = []
            this.reciptcheckedNames = []
            //全选状态
            if(this.isCheckedAllDataset) {
                this.allData.dcs.forEach(item => {
                    this.reciptcheckedIds.push(item.id)
                    this.reciptcheckedNames.push(item.name)
                })
            }
        },
        //排序条件下拉框
        showSelectOption() {
            this.showSelectOptionParam = true
        },
        //清空list搜索框
        clearSearch() {
            this.searchValue = ''
        },
        //排序
        sort(val) {
            if(val == 'ascending') {
                // 升序->降序
                this.ascending = false
                // this.allData.dcs.sort()
                this.allData.dcs.sort(
                    function compareFunction(param1, param2) {
                        if(param1.jobName) {
                            return param1.jobName.localeCompare(param2.name);
                        }
                        return
                    }
                )
            }else if (val == 'descending') {
                // 降序->升序
                this.ascending = true
                this.allData.dcs.reverse()
            }
        },
        //排序条件下拉框
        selectScript(data) {
            this.scriptValue = "名称"
        },
        //关闭tag删除弹框
        closeDeleteTags() {
            this.deleteTagsDia = false;
        },
        //编辑脚本
        edit() {
            let tid = this.reciptcheckedIds[0]
            let recipt = this.allData.dcs.filter(it => it.id == tid)
            const event = new Event("event")
            event.args = {
                callback: "linkToPage",
                element: this,
                param: {
                    name: "codeditor",
                    projectName: this.allData.projectName,
                    projectId: this.allData.projectId,
                    recipt: recipt[0]
                }
            }
            this.$emit('event', event)
        },
        //打开tag添加弹框
        createTagsOpen() {
            this.showCreateTagsDialog = true;
        },
        //关闭tag添加弹框
        closeCreateDialog() {
            this.showCreateTagsDialog = false;
        },
        //关闭scripts弹框
        closeScriptDialog() {
            this.showCreateScriptsDialog = false
        },
        //增加scripts
        createScripts(data) {
            data.args.param.projectName = this.allData.projectName
            data.args.param.projectId = this.allData.projectId
            data.args.param.runtime = this.runtime
            this.$emit('event', data)
            this.showCreateScriptsDialog = false
        },
        //关闭删除脚本弹框
        closeDeleteDialog() {
            this.deletedialogshow = false;
        },
        //打开删除脚本弹框
        deletedialogopen() {
            this.deletedialogshow = true;
        },
        //关闭清除脚本弹框
        closeClearDialog() {
            this.cleardialogshow = false;
        },
        //打开清除脚本弹框
        clearDialogOpen(){
            this.cleardialogshow = true
        },
        //标签下拉框
        labelShow() {
            this.labelShowDialog = !this.labelShowDialog
            this.dropDialogShow = false;
            this.nameShowDialog = false;
        },
        //左上角选项下拉框
        dropShow() {
            if(this.reciptcheckedIds.length < 1) {
                this.dropDialogShow = false
            } else {
                this.dropDialogShow = !this.dropDialogShow
                this.nameShowDialog = false
                this.labelShowDialog = false
            }
        },
        //上传文件按钮
        upload() {
            const event = new Event("event")
            event.args = {
                callback: "linkToPage",
                element: this,
                param: {
                    name: "localUpload",
                    projectName: this.allData.projectName,
                    projectId: this.allData.projectId
                }
            }
            this.$emit('event', event)
        },
        linkToPage() {
            const event = new Event("event")
            event.args = {
                callback: "linkToPage",
                element: this,
                param: {
                    name: "linkToProject",
                    projectName: this.allData.projectName,
                    projectId: this.allData.projectId
                }
            }
            this.$emit('event', event)
        },
        toggle() {
            this.showDialog = !this.showDialog
        },
        selectScriptIcon(runtime) {
            switch (runtime) {
            case "python3":
                return this.python_icon
            case "pyspark":
                return this.pyspark_icon
            case "r":
                return this.R_icon
            case "sparkr":
                return this.sparkR_icon
            case "prepare":
                return this.prepare_icon
            default:
                return this.script_icon
            }
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.bg {
    background: #dfe7ff;
}
.name {
    position: absolute;
    top: 25px;
    left: 24px;
    width: 110px;
    height: 60px;
    line-height: 28px;
    background: #fff;
    // border: 1px solid #dddddd;
    box-shadow: 2px 4px 6px #dddddd;
    padding-left: 10px;
    font-size: 14px;
}
 .dialog {
    position: absolute;
    top: 30px;
    right: 40px;
    width: 150px;
    // height: 130px;
    border: 1px solid #333;
    background: #fff;
    z-index: 9999;
    cursor: pointer;
    div {
        border-bottom: 1px solid #979797;
        p {
            margin-left: 10px;
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #000000;
            font-weight: 600;
        }
    }
    .list {
        display: flex;
        padding: 5px;
        img {
            width: 20px;
            height: 20px;
        }
    }
    .last {
        border-bottom: none;
    }

}
.script-opt {
    padding: 0 10px;
    border-bottom: 1px solid #ccc;
}
.script-opt-last {
    border-bottom: none;
}
.upload_dataset_container {
    width: 100vw;
    height: calc(100vh - 40px);
    // border: 2px solid #dddddd;
    .project_name_header {
        height: 50px;
        width: 100%;
        // background: rgba(0,0,0,.2);
        border-bottom: 1px solid #dddddd;
        .project_name {
            // width: 200px;
            margin-left: 30px;
            line-height: 50px;
            font-family: SourceSansPro;
            font-size: 16px;
            color: #000000;
            font-weight: 600;
            cursor: pointer;
        }
    }
    .info {
        display: flex;
        width: 100%;
        height: calc(100vh - 60px);

        .project_info_left {
            flex: 1;
            border-right: 1px solid #dddddd;

            .upload_top {
                height: 100px;
                border-bottom: 1px solid #dddddd;
                padding-left: 20px;
                padding-top: 20px;
                background: #f2f2f2;
                box-sizing: border-box;

                .selected_search {
                    display: flex;
                    position: relative;
                    .bg_disabled {
                        background: #eee !important;
                    }
                    .selected {
                        position: relative;
                        width: 90px;
                        height: 25px;
                        border: 1px solid #dddddd;
                        background: #fff;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        .opt-area {
                            display: flex;
                        }
                        .checkbox {
                            margin-left: 10px;
                        }

                        .action {
                            margin-left: 10px;
                        }

                        .d_icon {
                            position: absolute;
                            top: 4px;
                            right: 5px;
                            width: 15px;
                            height: 15px;
                        }

                        .drop_dialog {
                            position: absolute;
                            top: 24px;
                            left: 0;
                            width: 120px;
                            height: 90px;
                            background: #fff;
                            // border: 1px solid #000;
                            .label_icon {
                                display: flex;
                                border-bottom: 1px solid #dddddd;

                                img {
                                    margin-left: 10px;
                                    margin-top: 5px;
                                    width: 15px;
                                    height: 15px;
                                }

                                p {
                                    margin-left: 10px;
                                    margin-top: 2px;
                                    font-size: 14px;
                                }
                            }

                            .border_none {
                                border-bottom: none;
                            }
                        }
                    }

                    .sele {
                        width: 50px;
                    }
                }

                .search_area {
                    position: relative;
                    width: 300px;
                    height: 28px;
                    display: flex;
                    margin-left: 20px;
                    border: 1px solid #dddddd;

                    .search_icon {
                        width: 26px;
                        height: 26px;

                        img {
                            width: 26px;
                            height: 26px;
                        }
                    }

                    .text_input {
                        flex: 1;
                        display: inline-block;
                        height: 100%;
                        outline: none;
                        border: 1px solid #dddddd;
                        padding-left: 10px;
                    }
                }

                .upload_btn {
                    position: absolute;
                    top: 0px;
                    right: 40px;
                    display: inline-block;
                    width: 82px;
                    height: 32px;
                    background: #ffffff;
                    border: 1px solid #eeedf7;
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    font-weight: 600;
                    color: #7163C5;
                    margin-bottom: 16px;
                }

                .upload_btn_new {
                    position: absolute;
                    top: 0px;
                    right: 40px;
                    width: 100px;
                    height: 26px;
                    /deep/.el-input {
                        height: 26px !important;
                    }
                    /deep/.el-input__inner {
                        height: 26px !important;
                        box-sizing: border-box;
                        display: inline-block;
                        width: 100px;
                        background: #ffffff;
                        border: 1px solid #eeedf7;
                        font-family: PingFangSC-Medium;
                        font-size: 14px;
                        font-weight: 600;
                        color: #7163C5;
                        margin-bottom: 16px;
                        color: #333333;
                        border: 1px solid #cccccc;
                        padding-right: 10px;
                    }
                    /deep/input::placeholder {
                        color: #333;
                    }
                }

                .tag_selected {
                    display: flex;
                    position: relative;
                    margin-top: 10px;
                    // width: 400px;
                    // height: 20px;
                    // border: 2px solid #111;
                    margin-left: 125px;

                    .clear_sea {
                        color: #3b99fc;
                        font-size: 12px;
                        margin-left: 20px;
                        margin-top: 8px;
                        // text-decoration: none;
                        cursor: pointer;
                    }

                    .sort {
                        width: 25px;
                        height: 25px;
                        cursor: pointer;
                        img {
                            width: 100%;
                        }
                    }

                    .line {
                        margin-left: 10px;
                        color: #dddddd;
                    }

                    .down_sel {
                        height: 30px;
                        display: flex;
                        width: 120px;
                        font-size: 14px;

                        /deep/ .bp-select {
                            height: 30px;
                            background: #f2f2f2;
                        }

                        /deep/ .bp-select:hover {
                            background: #ddd;
                        }

                        cursor: pointer;
                        // border-right: 1px solid #c0cfe4;
                        .sel {
                            font-size: 14px;
                            margin-left: 5px;
                            margin-top: 4px;
                        }

                        .drop_icon {
                            margin-top: 4px;
                            width: 15px;
                            height: 15px;

                            img {
                                width: 100%;
                            }
                        }
                    }

                    .down_sel:hover {
                        background: #dddddd;
                    }

                    .tags_down_sel {
                        border: 0;
                        margin-left: 10px;
                        width: 50px;
                        .label_selected {
                            box-shadow: 2px 4px 6px #dddddd;
                            // display: flex;
                            position: absolute;
                            top: 25px;
                            left: 168px;
                            width: 150px;
                            // height: 72px;
                            border: 1px solid #dddddd;
                            background: #fff;
                            padding-top: 10px;
                            z-index: 3333;
                            .tag_arr {
                                height: 150px;
                                overflow: auto;
                            }
                            .management {
                                margin-top: 5px;
                                width: 150px;
                                height: 30px;
                                border-top: 1px solid #dddddd;
                                background: #e6e6e6;
                                .manage_label {
                                    font-size: 14px;
                                    // text-align: center;
                                    font-weight: 600;
                                    margin-left: 40px;
                                    margin-top: 5px;
                                }
                            }

                            .management:hover {
                                background: #e6e6e6;
                            }
                        }

                        .label_name {
                            display: flex;
                            margin-left: 10px;

                            span {
                                display: inline-block;
                                width: 10px;
                                height: 10px;
                                border-radius: 5px;
                                // background: #1bc2ac;
                                margin-top: 8px;
                                margin-right: 8px;
                            }

                            .tags_name {
                                font-size: 14px;
                                margin-bottom: 5px;
                            }

                        }

                        .label_name:hover {
                            background: #fff99d;
                        }
                    }

                    .dataset_number {
                        position: absolute;
                        top: 0;
                        right: 45px;
                        // margin-left: 700px;

                        p {
                            font-size: 14px;
                            font-weight: 600;
                        }
                    }
                }
            }

            .upload_bottom {
                height: calc(100vh - 280px);
                overflow: auto;
                .word {
                    width: 100%;
                    height: 618px;
                    line-height: 618px;
                    text-align: center;
                    font-family: PingFangSC-Medium;
                    font-size: 20px;
                    color: #000000;
                    font-weight: 500;
                }

                .data_content:hover {
                    background-color: #f2f2f2;
                    cursor: pointer;
                }

                .data_content {
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    // height: 60px;
                    border-bottom: 1px solid #dddddd;
                    padding: 10px 0 10px 10px;
                    align-items: center;
                    input{
                        cursor: pointer;
                    }
                    .tag_bg:hover::after {
                        content: attr(data-title);    //取到data-title属性的值
                        display: inline-block;
                        padding: 10px 14px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        position: absolute;
                        top: -50px;
                        left: -30px;
                    }
                    .tag_bg {
                        position: relative;
                        // top: -8px;
                        left: 0px;
                        font-size: 12px;
                        color: #fff;
                        height: 16px;
                        text-align: center;
                        padding: 0 8px;
                        border-radius: 10px;
                        margin-left: 10px;
                        margin-bottom: 5px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        max-width: 120px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        padding: 0 10px;
                    }
                    .item_list {
                        display: flex;
                    }
                    .script_icon {
                        margin-left: 27px;
                        width: 30px;
                        max-width: 30px;
                        height: 30px;

                        img {
                            width: 30px;
                            height: 30px;
                        }
                    }
                    .data_name {
                        margin-left: 27px;
                        font-family: PingFangSC-Medium;
                        font-size: 14px;
                        color: #000000;
                        font-weight: 600;
                        width: 168px;
                        min-width: 168px;
                        height: 40px;
                        line-height: 40px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .tag_area {
                        display: flex;
                        flex-wrap: wrap;
                        overflow: hidden;
                        img {
                            width: 20px;
                            height: 20px;
                        }
                        .more_tags {
                            display: none;
                            position: relative;
                            top: -8px;
                            margin-left: 10px;
                        }
                    }
                }

                .tip {
                    background: #f0edc5;
                    color: #000;
                    font-size: 14px;
                    font-weight: 600;
                    // height: 80px;

                }
            }
        }

        .project_info_right {
            width: 500px;

            .click_look {
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #838383;
                text-align: center;
                line-height: 800px;
            }

            .view_content {
                width: 100%;
                height: 260px;
                border-bottom: 1px solid #dddddd;

                .view_func {
                    margin-top: 20px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    // padding: 0 30px;
                    .view_list {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 75px;
                        margin-bottom: 20px;
                    }
                }

                .tags_func {
                    cursor: pointer;
                }

                .project_name_view {
                    display: flex;
                    width: 100%;
                    height: 60px;
                    border-bottom: 1px solid #979797;
                    height: 44px;
                    .space {
                        display: flex;
                        width: 60px;
                        height: 60px;
                        background: #dfe7ff;
                        border-bottom: 1px solid #979797;
                        border-right: 1px solid #979797;
                        height: 44px;
                        width: 44px;
                        min-width: 44px;
                        justify-content: center;
                        align-items: center;
                        img {
                            width: 24px;
                            height: 24px;
                        }
                    }
                    .show-name {
                        line-height: 44px;
                        .project_name_info {
                            margin-left: 20px;
                            font-family: PingFangSC-Medium;
                            font-size: 14px;
                            color: #000000;
                            font-weight: 600;
                            height: 44px;
                            white-space: nowrap;
                            overflow: hidden;
                            width: 350px;
                            text-overflow: ellipsis;
                            cursor: pointer;
                        }
                    }
                }

                .project_info_view {
                    // display: flex;
                    position: relative;
                    padding: 14px;
                    padding-left: 50px;
                    background: #f5f5f5;
                    width: 100%;
                    height: 100%;
                    border-bottom: 1px solid #dddddd;

                    .edit_input {
                        position: absolute;
                        // margin-left: 20px;
                        top: 6px;
                        right: 192px;
                        display: inline-block;
                        width: 216px;
                        height: 74px;
                    }

                    .operation {
                        display: flex;

                        .about {
                            font-family: PingFangSC-Medium;
                            font-size: 14px;
                            color: #000000;
                            font-weight: 600;

                        }

                        .data_tm_nm {
                            margin-left: 15px;
                            font-family: PingFangSC-Medium;
                            font-size: 12px;
                            color: #000000;
                            font-weight: 600;
                        }

                        .edit_icon {
                            position: absolute;
                            right: 140px;
                            top: 12px;
                            width: 20px;
                            height: 20px;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }

                .time {
                    margin-top: 100px;

                    .create_time {
                        display: flex;

                        .create_word {
                            font-family: PingFangSC-Medium;
                            font-size: 14px;
                            color: #000000;
                            font-weight: 600;
                        }

                        .create_tm {
                            margin-left: 60px;
                            font-family: PingFangSC-Medium;
                            font-size: 12px;
                            color: #000000;
                            font-weight: 600;
                        }
                    }

                    .last_time_edit_time {
                        display: flex;
                        margin-top: 20px;

                        .last_word {
                            font-family: PingFangSC-Medium;
                            font-size: 14px;
                            color: #000000;
                            font-weight: 600;
                        }

                        .last_tm {
                            margin-left: 20px;
                            font-family: PingFangSC-Medium;
                            font-size: 12px;
                            color: #000000;
                            font-weight: 600;
                        }
                    }
                }
            }
        }
    }
}
.tags_imgs_tag {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-bottom: 5px;
}
</style>
