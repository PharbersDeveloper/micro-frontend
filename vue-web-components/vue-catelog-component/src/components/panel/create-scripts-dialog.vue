<template>
    <div>
        <link rel="stylesheet" href="https://s3.cn-northwest-1.amazonaws.com.cn/components.pharbers.com/element-ui/element-ui.css">
        <div class="clear_dialog_container">
            <div class="dialog_area">
               <div class="header">
                    <div class="left">
                        <p class="dataset_name">新建 {{name}} 脚本</p>
                    </div>
                    <img src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_close.svg" alt="" class="close_icon" @click="close">
               </div>
               <div class="prompt">
                    <div class="left">
                        <div class="title">输入数据</div>
                        <div class="left_content content_area">
                            <div class="select_dataset_list" v-show="!datasetListShow">
                                <div class="select_dataset" v-for="(item,index) in addDatasetList" :key="item+index">
                                    <div class="sel_name">
                                        <img :src="sel_dataset_icon" alt="" class="sel_dataset_icon">
                                        <span class="title title_name">{{item.name}}</span>
                                    </div>
                                    <img :src="del_icon" class="del_icon" @click="on_clickdeldataset(item)" alt="">
                                </div>
                                <el-button class="add" type="primary" @click="on_clickAddInput">增加</el-button>
                            </div>
                            <div class="addInput" v-show="datasetListShow">
                                <el-input placeholder="搜索" v-model="searchDataset"  class="search_row"></el-input>
                                <img :src="search_row" class="search_row_icon" alt="">
                                <div class="dataset_list">
                                    <div @click="addDataset(item)" class="dataset" v-for="(item,index) in remainDatasetList" :key="item+index">
                                        <img :src="add_icon" alt="" class="add_icon">
                                        <span class="name">{{item.name}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="title">输出数据</div>
                        <div class="right_content" v-show="!datasetOutputListShow  && showOldDataset">
                            <div class="add_ds">
                                <span class="ds_title">添加数据集</span>
                            </div>
                            <div class="input_area">
                                <div class="input_list">
                                    <span class="label">名称</span>
                                    <el-input v-model="dsName.name" placeholder=""></el-input>
                                </div>
                                <div class="input_list">
                                    <span class="label">存储到</span>
                                    <el-input placeholder="" value="本集群" :disabled="true">></el-input>
                                </div>
                                <div class="input_list">
                                    <span class="label">格式</span>
                                    <el-input placeholder="" value="SQL" :disabled="true">></el-input>
                                </div>
                            </div>
                            <div class="btn_area">
                                <el-button class="add_input" :disabled="dsName.length  == 0" type="primary" @click="on_clickAddOutput">增加</el-button>
                            </div>
                            <div class="tab">
                                <div class="new_data" @click="satasetTab('new')">新数据集</div>
                                 ｜ 
                                <div class="old_data" @click="satasetTab('old')">现有数据集</div>
                            </div>
                        </div>
                        <div class="change" v-show="datasetOutputListShow && showOldDataset">
                            <div class="select_dataset">
                                <div class="sel_name">
                                    <img :src="sel_dataset_icon" alt="" class="sel_dataset_icon">
                                    <span class="title">{{dsName.name}}</span>
                                </div>
                                <img :src="del_icon" class="del_icon" @click="on_clickChangeOutput(item)" alt="">
                            </div>
                            <div class="btn_area">
                                <el-button class="add_input" :disabled="dsName.length  == 0" type="primary" @click="on_clickChangeOutput">更改</el-button>
                            </div>
                        </div>
                        <div class="oldDatasetList" v-show="!showOldDataset">
                             <el-input placeholder="搜索" v-model="searchDataset"  class="search_row"></el-input>
                            <img :src="search_row" class="search_row_icon" alt="">
                            <div class="dataset_list">
                                <div @click="addOldDataset(item)" class="dataset" v-for="(item,index) in remainDatasetListOutputs" :key="item+index">
                                    <img :src="add_icon" alt="" class="add_icon">
                                    <span class="name">{{item.name}}</span>
                                </div>
                            </div>
                            <div class="tab">
                                <div class="new_data" @click="satasetTab('new')">新数据集</div>
                                 ｜ 
                                <div class="old_data" @click="satasetTab('old')">现有数据集</div>
                            </div>
                        </div>
                    </div>
               </div>
              <div class="btn">
                    <button class="cancel" @click="close">取消</button>
                    <button class="save" @click="save">保存</button>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import ElButton from 'element-ui/packages/button/index'
import ElInput from 'element-ui/packages/input/index'

export default {
    data() {
        return{
            label_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/tag.svg",
            search_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/search.png",
            add_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/components.pharbers.com/add.svg",
            enter_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/components.pharbers.com/enter.svg",
            search_row: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E6%90%9C%E7%B4%A2.svg",
            searchValue: '',
            tagsArrayShow: [], //展示的tag数组
            selectedTags: [], //选中的tag数组
            newTagsArray: [], //新增的tag数组
            datasetListShow: false,
            datasetOutputListShow: false, //显示选中的output
            searchDataset: '',
            addDatasetList: [], //已经选中的dataset list
            remainDatasetList: [], //剩余未选中的dataset list
            sel_dataset_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E7%BB%93%E6%9E%9CDS.svg",
            del_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E5%88%A0%E9%99%A4+(1).svg",
            dsName: {
                name: ''
            },
            oldDatasetList: [], //现有数据集
            showOldDataset: true
        }
    },
    components: {
        ElButton,
        ElInput
    },
    props: {
        datasets: Array
    },
    computed: {},
    mounted() {
        this.remainDatasetList = JSON.parse(JSON.stringify(this.datasets))
        this.remainDatasetListOutputs = JSON.parse(JSON.stringify(this.datasets))
    },
    watch: {
        searchValue: function() {
            let that = this
            if(this.searchValue.trim() == '') {
                if(this.tagsArrayShow.length < this.tagsArray.length) {
                    this.tagsArrayShow = this.tagsArray
                }
            } else {
                this.tagsArrayShow = []
                let allArray = this.tagsArray.concat(this.newTagsArray)
                allArray.forEach(item => {
                    let idx = item.indexOf(that.searchValue)
                    if(idx == 0) {
                        this.tagsArrayShow.push(item)
                    }
                })
            }
        },
        datasetList: function(n, o) {
            this.datasetList = JSON.parse(JSON.stringify(n))
        }
    },
    methods: {
        save() {
            const event = new Event("event")
            event.args = {
                callback: "addTags",
                element: this,
                param: {
                    name: "addTags",
                    selectedTags: this.selectedTags
                }
            }
            this.$emit('addTagsEvent', event)
        },
        close() {
            this.tagsArrayShow = []
            this.tagsArrayShow = this.tagsArray
            this.$emit('closeCreateDialog');
        },
        submit() {
            if(this.searchValue.trim() != '' && this.tagsArrayShow.indexOf(this.searchValue) == -1) {
                this.tagsArrayShow = this.tagsArray.filter(it => it != '')
                this.selectedTags.push(this.searchValue) //默认选中新增tag
                this.newTagsArray.push(this.searchValue) //关闭弹框前新增的tag array
                this.tagsArrayShow = this.tagsArrayShow.concat(this.newTagsArray) //将新增tag添加到tagShow数组
                this.searchValue = ''
            }
        },
        checkedOneTag(tag) {
            let idIndex = this.selectedTags.indexOf(tag)
            if(idIndex >= 0) {
                this.selectedTags.splice(idIndex, 1)
            } else {
                this.selectedTags.push(tag)
            }
        },
        on_clickAddInput() {
            //增加input
            this.datasetListShow = true
        },
        on_clickAddOutput() {
            //增加output
            if(dsName.name && dsName.name !== "") {
                this.datasetOutputListShow = true
            }
        },
        on_clickChangeOutput() {
            this.datasetOutputListShow = false
            this.dsName.name = ''
        },
        addDataset(data) {
            this.datasetListShow = false
            //增加dataset list
            this.addDatasetList.unshift(data)
            this.remainDatasetList.splice(this.remainDatasetList.indexOf(data), 1)
        },
        on_clickdeldataset(data) {
            //删除dataset
            this.remainDatasetList.unshift(data)
            this.addDatasetList.splice(this.remainDatasetList.indexOf(data), 1)
        },
        satasetTab(data) {
            //切换tab
            if(data == 'old') {
                this.showOldDataset = false
            } else {
                this.showOldDataset = true
            }
        },
        addOldDataset(data) {
            this.dsName = data
            this.showOldDataset = true
            this.datasetOutputListShow = true
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.clear_dialog_container {
    height: 100vh;
    width: 100vw;
    // background: rgba(37,35,45,0.55);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9999;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.31);
}
.dialog_area {
    width: 560px;
    height: 560px;
    border: 1px solid #ddd;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
}
.header {
    height: 60px;
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    padding: 20px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
        display: flex;
        align-items: center;
        .label {
            width: 20px;
            height: 20px;
            margin-right: 5px;
        }
        .dataset_name {
            height: 60px;
            white-space: nowrap;
            overflow: hidden;
            width: 400px;
            text-overflow: ellipsis;
            line-height: 60px;
            cursor: pointer;
        }
    }
    .close_icon {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
}
.prompt {
    height: 440px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    display: flex;
    .title {
        height: 40px;
        display: flex;
        justify-content: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
    }
    .title_name {
        border-bottom: none;
        font-size: 14px;
    }
    .content_area {
        padding: 20px;
        button {
            width: 100%;
            height: 40px;
        }
        .select_dataset_list {
            display: flex;
            flex-direction: column;
        }
        .select_dataset {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #ccc;
            padding: 10px;
            height: 40px;
            margin-bottom: 10px;
            border-radius: 5px;
            .sel_name {
                display: flex;
                align-items: center;
            }
            .del_icon {
                cursor: pointer;
            }
            img {
                width: 14px;
                height: 14px;
            }
        }
        /deep/input.el-input__inner {
            padding-left: 40px;
        }
        .search_row_icon {
            width: 20px;
            position: relative;
            top: -30px;
            left: 10px;
        }
        .dataset_list {
            display: flex;
            flex-direction: column;
            font-size: 14px;
            .dataset {
                display: flex;
                align-items: center;
                padding: 10px 0;
                border-top: 1px solid #ccc;
                cursor: pointer;
                .add_icon {
                    width: 12px;
                    height: 12px;
                    margin-right: 10px;
                }
            }
            .dataset:hover {
                color: #0088cc
            }
            .dataset:last-of-type {
                border-bottom: 1px solid #ccc;
            }
        }
    }
    .right {
        width: 280px;
        .select_dataset {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #ccc;
            padding: 10px;
            height: 40px;
            margin-bottom: 10px;
            border-radius: 5px;
            margin: 20px;
            .sel_name {
                display: flex;
                align-items: center;
            }
            .del_icon {
                cursor: pointer;
            }
            img {
                width: 14px;
                height: 14px;
            }
        }

        .btn_area {
            width: 100%;
            display: flex;
            justify-content: center;
            .add_input {
                margin: 0 20px;
                width: 100%;
                text-align: center;
                height: 40px;
            }
        }
        .oldDatasetList {
            padding: 20px;
            /deep/input.el-input__inner {
                padding-left: 40px;
            }
            .tab {
                display: flex;
                margin-top: 55px;
                justify-content: center;
                font-size: 12px;
                cursor: pointer;
            }
            .search_row_icon {
                width: 20px;
                position: relative;
                top: -30px;
                left: 10px;
            }
            .dataset_list {
                display: flex;
                flex-direction: column;
                font-size: 14px;
                height: 230px;
                .dataset {
                    display: flex;
                    align-items: center;
                    padding: 10px 0;
                    border-top: 1px solid #ccc;
                    cursor: pointer;
                    .add_icon {
                        width: 12px;
                        height: 12px;
                        margin-right: 10px;
                    }
                }
                .dataset:hover {
                    color: #0088cc
                }
                .dataset:last-of-type {
                    border-bottom: 1px solid #ccc;
                }
            }
        }
    }
    .right_content {
        .add_ds {
            height: 40px;
            line-height: 40px;
            padding-left: 20px;
            border-bottom: 1px solid #ccc;
        }
        .input_area {
            padding: 10px 20px;
        }
        .btn_area {
            width: 100%;
            display: flex;
            justify-content: center;
            .add_input {
                margin: 0 20px;
                width: 100%;
                text-align: center;
            }
        }
        .tab {
            display: flex;
            margin-top: 55px;
            justify-content: center;
            font-size: 12px;
            cursor: pointer;
        }
        .input_list {
            .label {
                font-size: 14px;
                display: block;
                margin: 5px 0;
            }
        }
    }
    .left {
        width: 280px;
        border-right: 1px solid #ccc;
    }
    .tags_name {
        color: #111;
        font-size: 12px;
        font-weight: 600;
        margin-left: 27px;
        margin-top: 10px;
    }
    .tags_list {
        height: 350px;
        overflow: auto;
    }
    .tags {
        display: flex;
        margin-top: 10px;
        width: 100%;
        cursor: pointer;
        .checkout {
            margin-top: 5px;
        }
        .round {
            display: inline-block;
            min-width: 14px;
            width: 14px;
            height: 14px;
            border-radius: 7px;
            background: #7163C5;
            margin-top: 5px;
            margin-left: 15px;
        }
        .create_tags {
            font-size: 14px;
            margin-left: 15px;
            margin-top: 2px;
            max-width: 450px;
            overflow: hidden;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
        .green {
            background: green;
        }
        .blue {
            background: #28aadd;
        }
    }
}
.text_input {
    height: 24px;
    width: 520px;
    padding-left: 30px;
    outline: none;
    border: 1px solid #dddddd;
}
.btn {
    position: absolute;
    right: 23px;
    bottom: 15px;
    button {
        width: 60px;
        height: 28px;
        border: 0;
        cursor: pointer;
    }
}
.useing {
    color: #111;
    font-size: 12px;
    font-weight: 600;
    margin-left: 27px;
    margin-top: 10px;
    position: absolute;
    right: 80px;
    top: 105px;
}
.num_tags {
    position: absolute;
    right: 100px;
}
.cancel {
    margin-right: 20px;
    // background-color:#DB4D71;
    color: #7163C5;
}
.save {
    background-color: #7163C5;
    color: #fff;
}
.search {
    height: 20px;
    width: 20px;
    position: absolute;
    left: 45px;
    top: 82px;
}
.create {
    display: flex;
    position: relative;
    width: 520px;
    height: 30px;
    line-height: 30px;
    padding-left: 30px;
    font-size: 12px;
    margin-top: 10px;
    .add {
        position: absolute;
        top: 7px;
        left: 5px;
        // margin-top: 5px;
        width: 15px;
        height: 15px;

    }
    .enter {
        position: absolute;
        top: 7px;
        right: 10px;
        // margin-top: 5px;
        width: 15px;
        height: 15px;
    }
    // background-color: pink;
}
.create:hover {
    background-color: #e8e8e8;
    cursor: pointer;
}
</style>