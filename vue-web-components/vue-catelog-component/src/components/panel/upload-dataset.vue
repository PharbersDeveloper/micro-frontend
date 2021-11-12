<template>
    <div class="upload-dataset">
        <div class="upload_dataset_container">
            <div class="project_name_header">
                <p class="project_name" @click="linkToPage">{{allData.projectName}}</p>
            </div>
            <div class="info">
                <div class="project_info_left">
                    <div class="upload_top">
                        <div class="selected_search">
                            <div class="selected"
                                :class="[
                                    {'bg_disabled': datasetcheckedIds.length == 0}]">
                                <input type="checkbox" class="checkbox" ref="all" @click='chechedAllDataset()' :checked="datasetcheckedIds.length === allData.dss.length">
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
                                            <p >删除数据集</p>
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
                            <button class="upload_btn" @click="toggle">上传文件</button>
                            <div class="dialog" v-show="showDialog">
                            <div>
                                <p @click="upload">本地上传</p>
                            </div>
                        </div>
                        </div>

                        <div class="tag_selected">
                            <div class="sort">
                                <img :src="descending_order" alt="" v-if="ascending" @click="sort('ascending')">
                                <img :src="ascending_order" alt="" v-if="descending" @click="sort('descending')">
                            </div>
                            <div class="down_sel" >
                                <bp-select-vue :src="selectIcon" :choosedValue="scriptValue" @showSelectOption="showSelectOption" :closeTosts="closeTosts">
                                    <!-- <bp-option-vue text="最后一次编辑" @click="selectScript(0)"></bp-option-vue> -->
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
                                <p>{{allData.dss.length}} 条数据集</p>
                            </div>
                        </div>
                    </div>
                    <div class="upload_bottom">
                        <div class="data_content" v-for="(dataset,index) in searchData" :key="index" ref="content" :class="{bg: datasetcheckedIds.indexOf(dataset.id) > -1}" @click="clickOnlyOne(dataset, index)">
                            <input type="checkbox" ref="data" name="datasetList" :checked="datasetcheckedIds.indexOf(dataset.id) > -1" @click.stop="checkedOneDataset(dataset)">
                            <div class="item_list">
                                <span class="dataset_icon">
                                    <img :src="dataset_icon" alt="">
                                </span>
                                <p class="data_name">{{dataset.name}}</p>
                                <div class="tag_area">
                                    <div v-for="(tag,inx) in dataset.label" :key="inx">
                                        <span v-if="dataset.label !== ''">
                                            <p 
                                                :title="tag"
                                                class="tag_bg" 
                                                :style="{background: tagsColorArray[allData.tagsArray.indexOf(tag)]}">{{tag}}
                                            </p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="word" v-if="allData.dss == ''">当前项目无数据</div>
                    </div>
                </div>
                <div class="project_info_right">
                    <div class="view_content" v-if="datasetcheckedIds.length > 0" >
                        <div class="project_name_view">
                            <span class="space">
                                <img :src="dataset_icon" alt="">
                            </span>
                            <div class="show-name" v-if="datasetcheckedIds.length == 1">
                                <p class="project_name_info" >
                                {{datasetcheckedNames[0]}}
                                </p>
                            </div>
                           <div class="show-name">
                               <p class="project_name_info" v-if="datasetcheckedIds.length > 1">
                                    {{datasetcheckedIds.length}} 条数据集
                                </p>
                           </div>
                        </div>
                        <div class="view_func">
                            <span @click="createTagsOpen" class="view_list">
                                <img class='tags_imgs_tag' :src="label_icon" alt="">
                                <span class='tags_func'>标签</span>
                            </span>
                            <span @click="clearDialogOpen" class="view_list">
                                <img class='tags_imgs_tag' :src="clear_data_icon" alt="">
                                <span class='tags_func'>清除数据</span>
                            </span>
                            <span  @click='deletedialogopen' class="view_list">
                                <img class='tags_imgs_tag' :src="delete_icon" alt="">
                                <span class='tags_func'>删除</span>
                            </span>
                        </div>
                    </div>
                    <p v-if="datasetcheckedIds.length == 0" class="click_look">单击对象查看详细信息</p>
                </div>
            </div>
        <!-- 清除数据集数据 -->
        <clear-dataset-dialog  
            v-if="cleardialogshow" 
            :datasetcheckedIds="datasetcheckedIds"
            :datasetcheckedNames="datasetcheckedNames"
            @clearTagsEvent="clearTags"
            @closeClearDialog="closeClearDialog">
        </clear-dataset-dialog>
        <!-- 删除数据集 -->
        <clear-delete 
            v-if="deletedialogshow" 
            :datasetcheckedIds="datasetcheckedIds"
            :datasetcheckedNames="datasetcheckedNames"
            @deleteDatasetsEvent="deleteDataset"
            @closeDeleteDialog="closeDeleteDialog">
        </clear-delete>
        <!-- 添加tag -->
        <create-tags-dialog 
            v-if="showCreateTagsDialog"
            :datasetcheckedIds="datasetcheckedIds"
            :datasetcheckedNames="datasetcheckedNames"
            :datasets="allData.dss"
            :tagsArray="allData.tagsArray"
            :tagsColorArray="tagsColorArray"
            @addTagsEvent="addTagsEvent"
            @closeCreateDialog="closeCreateDialog">
        </create-tags-dialog>
        <!-- 管理标签 -->
        <delete-tags-dialog :tags="tags" v-if="deleteTagsDia" @closeDeleteTags="closeDeleteTags"></delete-tags-dialog>
    </div>
    </div>
</template>

<script>
import clearDatasetDialog from './clear-dataset-dialog.vue'
import clearDelete from './delete-dialog.vue'
import createTagsDialog from './create-tags-dialog.vue'
import deleteTagsDialog from './delete-tags-dialog.vue'
import bpSelectVue from '../../../node_modules/vue-components/src/components/bp-select-vue.vue'
import bpOptionVue from '../../../node_modules/vue-components/src/components/bp-option-vue.vue'
export default {
    data() {
        return {
            label_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/tag.svg",
            search_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/search.png",
            dropDownIcon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/drop_down_icon.svg",
            edit_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/edit_icon.png",
            delete_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/delete.png",
            clear_data_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/clear_data.png",
            descending_order: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/descending_order.png",
            ascending_order: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/ascending_order.png",
            selectIcon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/drop_down_icon.svg",
            delete_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/delete_r.svg",
            clear_data_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/delete_b.svg",
            descending_order: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/down.svg",
            ascending_order: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/top.svg",
            dataset_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/Database.svg",
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
            deleteTagsDia: false,
            searchValue: '',
            ascending: false,
            descending: true,
            tags: ['name','description','啦啦啦'],
            ary: [],
            checked: false,
            manual: true,
            scriptValue: "名称",
            isCheckedAllDataset: false,
            datasetcheckedIds: [], //选中项id
            datasetcheckedNames: [], //选中项name
            color: ['#133883','#90a8b7','#94be8e','#ff21ee','#1ac2ab','#77bec2','#c7c7c7','#a088bd','#d66b9b','#5354ec','#acacff','#1e8103', '#ec7211','#ec7211', '#ea1c82','#2bb1ac', '#3c498c', '#000', 'blue', '#666'],
            tagsColorArray: ['#133883', '#90a8b7', '#94be8e', '#ff21ee', '#1ac2ab']
        }
    },
    props: {
        allData: {
            type: Object,
            default: () => ({
                projectName: "项目名称",
                dss: [
                    {id: '1', projectId:1,name:'Data_0001',label: ['zzz','aaaaaaaaaaaaaaaaaaaaaaaa']},
                    {id: '2', projectId:2,name:'Data_0002',label: ['qqqqqqqqqqqqqqqqqqqqqqqq','sss']},
                    {id: '3', projectId:3,name:'Data_0003',label: ['eee','sss']}
                ],
                tagsArray: ["qqqqqqqqqqqqqqqqqqqqqqqq", "aaaaaaaaaaaaaaaaaaaaaaaa", "zzz", "sss", "eee"]
            })
        }
    },
    components: {
        clearDatasetDialog,
        clearDelete,
        createTagsDialog,
        deleteTagsDialog,
        bpSelectVue,
        bpOptionVue
    },
    computed: {
        searchData: function() {
            let searchValue = this.searchValue
            this.state = 'search'
            if(searchValue) {
                return this.allData.dss.filter(item => item.name.indexOf(searchValue) > -1)
            }
            return this.allData.dss
        }
    },
    mounted() {
        let that = this
    },
    watch: {
        "allData.tagsArray": function() {
            this.tagsColorArray = []
            this.allData.tagsArray.forEach((item, index) => {
                this.tagsColorArray.push(this.color[Math.floor(Math.random()*10+Math.random()*10)])
            })
            console.log("colorArr", this.tagsColorArray)
        }
    },
    methods: {
        //增加tag
        addTagsEvent(data) {
            data.args.param.selectedDatasets = this.datasetcheckedIds
            data.args.param.datasetArray = this.allData.dss
            data.args.param.projectName = this.allData.projectName,
            data.args.param.projectId = this.allData.projectId
            this.$emit('event', data)
            this.showCreateTagsDialog = false;
        },
        //清除数据集中数据
        clearTags(data) {
            data.args.param.selectedDatasets = this.datasetcheckedIds
            data.args.param.datasetArray = this.allData.dss
            data.args.param.projectName = this.allData.projectName,
            data.args.param.projectId = this.allData.projectId
            this.$emit('event', data)
            this.cleardialogshow = false;
        },
        //删除数据集
        deleteDataset(data) {
            data.args.param.selectedDatasets = this.datasetcheckedIds
            data.args.param.datasetArray = this.allData.dss
            data.args.param.projectName = this.allData.projectName,
            data.args.param.projectId = this.allData.projectId
            this.$emit('event', data)
            this.deletedialogshow = false;
        },
        //点击list主体
        clickOnlyOne(dataset, index) {
            this.datasetcheckedIds = []
            this.datasetcheckedNames = []
            this.datasetcheckedIds.push(dataset.id)
            this.datasetcheckedNames.push(dataset.name)
        },
        //点击list多选框
        checkedOneDataset(dataset) {
            let idIndex = this.datasetcheckedIds.indexOf(dataset.id)
            if(idIndex >= 0) {
                this.datasetcheckedIds.splice(idIndex, 1)
                this.datasetcheckedNames.splice(idIndex, 1)
            } else {
                this.datasetcheckedIds.push(dataset.id)
                this.datasetcheckedNames.push(dataset.name)
            }
        },
        //全选list
        chechedAllDataset() {
            this.isCheckedAllDataset = true
            if(this.datasetcheckedIds.length == this.allData.dss.length) {
                this.isCheckedAllDataset = false
            }
            this.datasetcheckedIds = []
            this.datasetcheckedNames = []
            //全选状态
            if(this.isCheckedAllDataset) {
                this.allData.dss.forEach(item => {
                    this.datasetcheckedIds.push(item.id)
                    this.datasetcheckedNames.push(item.name)
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
                this.ascending = false
                this.descending = true
                this.allData.dss.sort()
            }else if (val == 'descending') {
                this.descending = false
                this.ascending = true
                this.allData.dss.reverse()
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
        //打开tag添加弹框
        createTagsOpen() {
            this.showCreateTagsDialog = true;
        },
        //关闭tag添加弹框
        closeCreateDialog() {
            this.showCreateTagsDialog = false;
        },
        //关闭删除数据集弹框
        closeDeleteDialog() {
            this.deletedialogshow = false;
        },
        //打开删除数据集弹框
        deletedialogopen() {
            this.deletedialogshow = true;
        },
        //关闭清除数据集弹框
        closeClearDialog() {
            this.cleardialogshow = false;
        },
        //打开清除数据集弹框
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
            if(this.datasetcheckedIds.length < 1) {
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
    height: 81px;
    border: 2px solid #dddddd;
    background: #fff;
    z-index: 9999;
    cursor: pointer;
    div {
        border-bottom: 2px solid #979797;
        p {
            margin-left: 10px;
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #000000;
            font-weight: 600;
        }
    }
}
.upload_dataset_container {
    width: 100vw;
    height: 100vh;
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
                    height: 60px;
                    border-bottom: 1px solid #dddddd;
                    padding: 20px 0 20px 20px;
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
                        top: -8px;
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
                        max-width: 100px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        padding: 0 10px;
                    }
                    .item_list {
                        display: flex;
                    }
                    .dataset_icon {
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
                    }
                    .tag_area {
                        display: flex;
                        flex-wrap: wrap;
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
                    margin-top: 100px;
                    display: flex;
                    justify-content: space-between;
                    padding: 0 30px;
                    .view_list {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 75px;
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
                        border-bottom: 2px solid #979797;
                        border-right: 2px solid #979797;
                        height: 44px;
                        width: 44px;
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
                    border-bottom: 2px solid #dddddd;

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
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-bottom: 5px;
}
</style>
