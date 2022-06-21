<template>
    <div class="upload-notebooks">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="upload_notebooks_container">
            <div class="info">
                <div class="project_info_left">
                    <div class="upload_top">
                        <div class="selected_search">
                            <div class="selected"
                                :class="[{'bg_disabled': notebookscheckedIds.length === 0}]">
                                <input type="checkbox" class="checkbox" ref="all" @click='chechedAllnotebooks()' :checked="notebookscheckedIds.length === allData.dns.length">
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
                            <button class="upload_btn" @click.stop="showCreationDialog = true">新建编译器</button>
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
                                        <div class="manage_label" @click="createTagsOpen">管理标签</div>
                                    </div>
                                </div>
                            </div>
                            <div class="clear_sea" @click="clearSearch" v-if="searchValue">清空搜索项</div>
                            <div class="notebooks_number">
                                <p>{{allData.dns.length}} 条</p>
                            </div>
                        </div>
                    </div>
<!--                    <div class="upload_bottom" v-if="datasource.isReady">-->
                    <div class="upload_bottom" >
                        <div class="data_content" v-for="(notebook,index) in searchData" :key="index" ref="content" :class="{bg: notebookscheckedIds.indexOf(notebook.id) > -1}" @click="clickOnlyOne(notebook, index)">
                            <div class="content-left">
                                <div style="display: flex; flex-direction: column; justify-content: space-around">
                                    <input type="checkbox" ref="data" name="notebooksList" :checked="notebookscheckedIds.indexOf(notebook.detail.id) > -1" @click.stop="checkedOnenotebooks(notebook.detail)">
                                </div>
                                <div class="item_list">
                                <span class="script_icon">
                                    <img :src="defs.iconsByName(notebook.ctype)" alt="">
                                </span>
                                    <p class="data_name" @click.stop="clicknotebooksName(notebook)" :title="notebook.name">{{notebook.detail.name}}</p>
                                    <div class="tag_area" ref="tagsArea">
                                        <div v-for="(tag, inx) in notebook.detail.label" :key="inx">
                                        <span v-if="notebook.label !== ''">
                                            <p
                                                    :title="tag"
                                                    class="tag_bg"
                                                    :style="{background: tagsColorArray[allData.tagsArray.indexOf(tag)]}">{{tag}}
                                            </p>
                                        </span>
                                        </div>
                                        <!-- tag的更多按钮，暂时隐藏 -->
                                        <!-- <img src=`${staticFilePath}` + "/%E6%9B%B4%E5%A4%9A.svg" alt="" class="more_tags" ref="moreTags"> -->
                                    </div>
                                </div>
                            </div>
                            <el-switch v-if="notebook.editable"
                                    v-model="notebook.switch"
                                    active-color="#13ce66"
                                    @change="resetStatus(notebook)"/>
                            <el-switch v-else disabled
                                       v-model="notebook.switch"
                                       active-color="#13ce66" />
                        </div>
                        <div class="word" v-if="allData.dns === ''">当前项目无注册编辑器</div>
                    </div>
                </div>
                <div class="project_info_right">
                    <div class="view_content" v-if="notebookscheckedIds.length > 0" >
                        <div class="project_name_view">
                            <span class="space">
                                <img :src="script_icon_show" alt="">
                            </span>
                            <div class="show-name" v-if="notebookscheckedIds.length === 1">
                                <p class="project_name_info" :title="notebookscheckedNames[0]">
                                {{notebookscheckedNames[0]}}
                                </p>
                            </div>
                           <div class="show-name">
                               <p class="project_name_info" v-if="notebookscheckedIds.length > 1">
                                    {{notebookscheckedIds.length}} 条
                                </p>
                           </div>
                        </div>
                        <div class="view_func">
                            <span @click="createTagsOpen" class="view_list">
                                <img class='tags_imgs_tag' :src="label_icon" alt="">
                                <span class='tags_func'>标签</span>
                            </span>
                            <span  @click='deletedialogopen' class="view_list">
                                <img class='tags_imgs_tag' :src="delete_icon" alt="">
                                <span class='tags_func'>删除</span>
                            </span>
                        </div>
                    </div>
                    <p v-if="notebookscheckedIds.length === 0" class="click_look">单击对象查看详细信息</p>
                </div>
            </div>
            <!-- 添加tag -->
            <create-tags-dialog
                v-if="showCreateTagsDialog"
                :datasetchecked-ids="notebookscheckedIds"
                :datasetchecked-names="notebookscheckedNames"
                :datasets="allData.dns"
                :tagsArray="allData.tagsArray"
                :tagsColorArray="tagsColorArray"
                @addTagsEvent="addTagsEvent"
                @closeCreateDialog="closeCreateDialog">
            </create-tags-dialog>
            <!-- 新建NoteBook -->
            <create-notebook-dialog
                    :dialog-visible="showCreationDialog"
                    @cancel="showCreationDialog = false"
                    @confirm="createNotebook">
            </create-notebook-dialog>
        </div>
    </div>
</template>

<script>
import createTagsDialog from './create-tags-dialog.vue'
import createNotebookDialog from './create-notebook-dialog.vue'
import bpSelectVue from '../../node_modules/vue-components/src/components/bp-select-vue.vue'
import bpOptionVue from '../../node_modules/vue-components/src/components/bp-option-vue.vue'
// import ElButton from 'element-ui/packages/option/index'
// import { MessageBox, Message } from 'element-ui'
import { MessageBox } from 'element-ui'
import { staticFilePath } from '../config/envConfig'
import PhDagDefinitions from "./policy/definitions/definitions"
import ElSwitch from "element-ui/packages/switch/index"
import PhDataSource from "./model/datasource"

export default {
    data() {
        return {
            label_icon: `${staticFilePath}` + "/tag.svg",
            search_icon: `${staticFilePath}` + "/search.png",
            dropDownIcon: `${staticFilePath}` + "/drop_down_icon.svg",
            delete_icon: `${staticFilePath}` + "/delete.png",
            selectIcon: `${staticFilePath}` + "/drop_down_icon.svg",
            ascending_order: `${staticFilePath}` + "/down.svg",
            descending_order: `${staticFilePath}` + "/top.svg",
            script_icon: `${staticFilePath}` + "/script_select.svg",
            script_icon_show: "",
            // showDialog: false,
            state: '',
            dropDialogShow: false,
            labelShowDialog: false,
            showSelectOptionParam: false,
            closeTosts: false,
            showCreateTagsDialog: false, //添加tag弹框
            showCreationDialog: false,
            searchValue: '',
            ascending: false,
            tags: ['name','description','啦啦啦'],
            checked: false,
            manual: true,
            scriptValue: "名称",
            isCheckedAllnotebooks: false,
            notebookscheckedIds: [], //选中项id
            notebookscheckedNames: [], //选中项name
            color: ['#133883','#90a8b7','#94be8e','#ff21ee','#1ac2ab','#77bec2','#c7c7c7','#a088bd','#d66b9b','#5354ec','#acacff','#1e8103', '#ec7211','#ec7211', '#ea1c82','#2bb1ac', '#3c498c', '#000', 'blue', '#666'],
            tagsColorArray: ['#133883','#90a8b7','#94be8e','#ff21ee','#1ac2ab','#77bec2','#c7c7c7','#a088bd','#d66b9b','#5354ec','#acacff','#1e8103', '#ec7211','#ec7211', '#ea1c82','#2bb1ac', '#3c498c', '#000', 'blue', '#666'],
        }
    },
    props: {
        allData: {
            type: Object,
            default: () => ({
                "projectName": "ETL_Iterator",
                "projectId": "JfSmQBYUpyb4jsei",
                "dns": [],
                "tagsArray": [],
                "_isVue": true
            })
        },
        defs: {
            type: Object,
            default: function () {
                return new PhDagDefinitions("1");
            }
        },
        datasource: {
            type: Object,
            default: function() {
                return new PhDataSource("1", this)
            }
        }
    },
    components: {
        createTagsDialog,
        // deleteTagsDialog,
        createNotebookDialog,
        bpSelectVue,
        bpOptionVue,
        ElSwitch
        // ElButton
    },
    computed: {
        searchData: function() {
            let searchValue = this.searchValue
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.state = 'search'
            if(searchValue) {
                // return this.allData.dns.filter(item => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
                return this.datasource.model.filter(item => item.detail.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
            }
            this.sort("ascending")
            return this.datasource.model
        }
    },
    mounted() {
        // let that = this
        if(this.$refs.tagsArea) {
            this.$refs.tagsArea.forEach((item) => {
                item.style["height"] = "40px"
            })
        }
    },
    watch: {
        "allData.tagsArray": function() {
            this.tagsColorArray = []
            this.allData.tagsArray.forEach(() => {
                // this.allData.tagsArray.forEach((item, index) => {
                this.tagsColorArray.push(this.color[Math.floor(Math.random()*10+Math.random()*10)])
            })
        },
        "allData.dns": function() {
            this.datasource.refreshPlaceholders(this.allData.dns)
            const dnsIds = this.allData.dns.map(x => x.id)
            this.datasource.refreshStatus(this.allData.tenantId, dnsIds)
        }
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？').then(() => {
                done();
            }).catch(() => {});
        },
        addTagsEvent(data) {
            data.args.param.selectednotebooks = this.notebookscheckedIds
            data.args.param.notebooksArray = this.allData.dns
            data.args.param.projectName = this.allData.projectName
            data.args.param.projectId = this.allData.projectId
            this.$emit('event', data)
            this.showCreateTagsDialog = false;
        },
        //删除脚本
        deleteScript(data) {
            console.log(data)
        //     data.args.param.selectedScripts = this.notebookscheckedIds
        //     data.args.param.scriptArray = this.allData.dns
        //     data.args.param.projectName = this.allData.projectName,
        //     data.args.param.projectId = this.allData.projectId
        //     this.$emit('event', data)
        //     this.deletedialogshow = false;
        },
        //点击list主体
        clickOnlyOne(notebook) {
            this.script_icon_show = this.defs.iconsByName(notebook.ctype)
            this.notebookscheckedIds = []
            this.notebookscheckedNames = []
            this.notebookscheckedIds.push(notebook.id)
            this.notebookscheckedNames.push(notebook.name)
        },
        //点击list多选框
        checkedOnenotebooks(notebook) {
            let idIndex = this.notebookscheckedIds.indexOf(notebook.id)
            if(idIndex >= 0) {
                this.notebookscheckedIds.splice(idIndex, 1)
                this.notebookscheckedNames.splice(idIndex, 1)
            } else {
                this.notebookscheckedIds.push(notebook.id)
                this.notebookscheckedNames.push(notebook.name)
            }
        },
        //点击notebooks name
        clicknotebooksName(notebook) {
            console.log(notebook)
            // const inputName = JSON.parse(notebooks.inputs)[0]
            // const inputDS = this.allData.dss.filter(it => it.name === inputName)
            // const event = new Event("event")
            // event.args = {
            //     callback: "linkToPage",
            //     element: this,
            //     param: {
            //         name: "codeditor",
            //         projectName: this.allData.projectName,
            //         projectId: this.allData.projectId,
            //         notebooks: notebooks,
            //         inputDS: inputDS
            //     }
            // }
            // this.$emit('event', event)
        },
        //全选list
        chechedAllnotebooks() {
            this.isCheckedAllnotebooks = this.notebookscheckedIds.length !== this.allData.dns.length;
            this.notebookscheckedIds = []
            this.notebookscheckedNames = []
            //全选状态
            if(this.isCheckedAllnotebooks) {
                this.allData.dns.forEach(item => {
                    this.notebookscheckedIds.push(item.id)
                    this.notebookscheckedNames.push(item.name)
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
            if(val === 'ascending') {
                // 升序->降序
                this.ascending = false
                // this.allData.dns.sort()
                this.allData.dns.sort(
                    function compareFunction(param1, param2) {
                        if(param1.jobName) {
                            return param1.jobName.localeCompare(param2.name);
                        }
                    }
                )
            }else if (val === 'descending') {
                // 降序->升序
                this.ascending = true
                this.allData.dns.reverse()
            }
        },
        //排序条件下拉框
        selectScript() {
            this.scriptValue = "名称"
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
        // closeScriptDialog() {
        //     this.showCreationDialog = false
        // },
        //增加 notebook
        createNotebook (data) {
            data.args.param.projectId = this.allData.projectId
            this.$emit('event', data)
            this.showCreationDialog = false
        },
        //关闭删除脚本弹框
        closeDeleteDialog() {
            this.deletedialogshow = false;
        },
        //打开删除脚本弹框
        deletedialogopen() {
            // this.deletedialogshow = true;
            MessageBox.confirm('释放删除资源将丢失所有数据！ 是否继续?', '警告', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                // 调用启动前，强制更新一下状态，以免竞争机制
                // this.datasource.refreshStatus(this.tenantId)
                // if (this.datasource.switch) {
                //     // MessageBox.alert("现在不支持自动删除，请联系管理员")
                // 	this.datasource.resourceStop(this.tenantId)
                // } else {
                //     // 通过新的 trace ID 持续访问状态
                //     Message.error("平台已经被另一进程关闭，请等待！！", { duration: 3000} )
                // }
                // this.datasource.resourceStop(this.tenantId, row)
            }).catch(() => {
            })
        },
        //关闭清除脚本弹框
        closeClearDialog() {
            this.cleardialogshow = false;
        },
        //标签下拉框
        labelShow() {
            this.labelShowDialog = !this.labelShowDialog
            this.dropDialogShow = false;
            this.nameShowDialog = false;
        },
        //左上角选项下拉框
        dropShow() {
            if(this.notebookscheckedIds.length < 1) {
                this.dropDialogShow = false
            } else {
                this.dropDialogShow = !this.dropDialogShow
                this.nameShowDialog = false
                this.labelShowDialog = false
            }
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
        dealResourceStart(data) {
            this.$emit('event', data)
        },
        dealResourceStop(data) {
            this.$emit('event', data)
        },
        // 启停
        resetStatus(notebook) {
            this.datasource.resourceStart(this.allData.tenantId, notebook)
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
		.dis {
			color: #ccc;
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
.upload_notebooks_container {
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

                    .notebooks_number {
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
                    justify-content: space-between;
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
                        width: 400px;
                        min-width: 400px;
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
                    /*justify-content: space-;*/
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
                        // border-bottom: 1px solid #979797;
                        // border-right: 1px solid #979797;
                        height: 44px;
                        width: 44px;
                        min-width: 44px;
                        justify-content: center;
                        align-items: center;
                        img {
                            width: 40px;
                            height: 40px;
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

    .content-left {
        display: flex;
        flex-direction: row;
    }
}
.tags_imgs_tag {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-bottom: 5px;
}
</style>
