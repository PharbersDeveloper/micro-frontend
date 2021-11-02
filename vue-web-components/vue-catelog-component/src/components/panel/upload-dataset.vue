<template>
    <div class="upload-dataset">
        <div class="upload_dataset_container">
            <div class="project_name_header">
                <p class="project_name">{{allData.projectName}}</p>
            </div>
            <div class="info">
                <div class="project_info_left">
                    <div class="upload_top">
                        <div class="checkbox_all" >
                            <input type="checkbox" class="checkbox" v-model="all" ref="all">
                            <span class="action">选项</span>
                            <span class="drop_down_icon" @click="dropShow">
                                <img :src="dropDownIcon"  >
                            </span>
                            <div class="drop_dialog" v-if="dropDialogShow">
                                <div class="label_icon">
                                    <span>
                                        <img :src="label_icon" alt="">
                                    </span>
                                    <p>标签</p>
                                </div>
                                <div class="label_icon border_none none">
                                    <span>
                                        <img :src="clear_data_icon" alt="">
                                    </span>
                                    <p @click='cleardialogopen'>清空数据</p>
                                </div>
                                <div class="label_icon border_none">
                                    <span>
                                        <img :src="delete_icon" alt="">
                                    </span>
                                    <p @click='deletedialogopen'>删除数据集</p>
                                </div>
                            </div>
                        </div>
                        <div class="search_area">
                            <img :src="search_icon" class="search_icon">
                            <input type="text" placeholder="搜索" class="search">
                        </div>
                        <div class="btn">
                            <button @click="toggle">上传文件</button>
                            <p >{{allData.dataName.length}} 个数据集</p>
                        </div>
                        <div class="dialog" v-show="showDialog">
                                <div>
                                    <p @click="upload">本地上传</p>
                                </div>
                        </div>
                        <div class="select_area">
                                <!-- <img :src="descending_order" class="sorting"> -->
                                <img :src="ascending_order" class="sorting">
                                <p @click="nameShow">最近一次编辑
                                    <img :src="dropDownIcon" alt="" class="drop_size">
                                </p>
                                <div class="name" v-if="nameShowDialog">
                                    名称
                                </div>
                                <!-- <img :src="dropDownIcon" alt=""> -->
                                <span class="dividing_line">|</span>
                                <p @click="labelShow">标签
                                    <img :src="dropDownIcon" alt="" class="drop_size">
                                </p>
                                <div class="label_selected" v-if="labelShowDialog">
                                    <div class="label_name">
                                        <span></span>
                                        <div class="tags_name">lallaalla</div>
                                    </div>
                                    <div class="label_name">
                                        <span class="green"></span>
                                        <div class="tags_name">lallaalla</div>
                                    </div>
                                    <div class="management">
                                        <div class="manage_label">管理标签</div>
                                    </div>
                                </div>
                        </div>
                    </div>
                      <div class="upload_bottom">
                        <div class="data_content" v-for="(item,index) in allData.dataName" :key="item.id"  :class="{bg: item.checked == true}" @click="changeBg(index)">
                            <input type="checkbox" v-model="item.checked" ref="data">
                            <p class="data_name">{{item.name}}</p>
                        </div>
                        <div class="word" v-if="allData.dataName == ''">当前项目无数据</div>
                    </div>
                </div>
                <div class="project_info_right">
                    <div class="view_content" v-if="viewContent" >
                        <div class="project_name_view">
                            <span class="space"></span>
                            <p class="project_name_info">
                                Data_0001
                            </p>
                        </div>
                        <div class="project_info_view">
                            <div class="operation">
                                <span class="about">关于:</span>
                                <p class="data_tm_nm" v-if="editShow == false">{{allData.projectInfo}}</p>
                                 <input type="text" class="edit_input" v-if="editShow" ref="input" @keyup.enter="submit">
                                <div class="edit_icon" @click="editInfo('edit')">
                                    <img :src="edit_icon" alt="">
                                </div>
                            </div>
                            <div class="time">
                                <div class="create_time">
                                    <span class="create_word">创建时间</span>
                                    <p class="create_tm">5 mins ago by</p>
                                </div>
                                <div class="last_time_edit_time">
                                    <span class="last_word">上一次编辑时间</span>
                                    <p class="last_tm">3 mins ago by</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p v-if="viewContent == false" class="click_look">单击对象查看详细信息</p>
                </div>
            </div>
        </div>
        <clear-dataset-dialog  v-if="cleardialogshow" @closeClearDialog="closeClearDialog"></clear-dataset-dialog>
        <clear-delete v-if="deletedialogshow" @closeDeleteDialog="closeDeleteDialog"></clear-delete>
    </div>
</template>

<script>
import clearDatasetDialog from './clear-dataset-dialog.vue'
import clearDelete from './delete-dialog.vue'
export default {
    data() {
        return {
            label_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/label.png",
            search_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/search.png",
            dropDownIcon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/drop-down-icon.png",
            edit_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/edit_icon.png",
            delete_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/delete.png",
            clear_data_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/clear_data.png",
            descending_order: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/descending_order.png",
            ascending_order: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/ascending_order.png",
            showDialog: false,
            state: '', 
            editShow: false,
            viewContent: false,
            isActive: null,
            dropDialogShow: false,
            nameShowDialog: false,
            labelShowDialog: false,
            cleardialogshow: false,
            deletedialogshow: false
        }
    },
    props: {
        allData: {
            type: Object,
            default: () => ({
                projectName: "项目名称",
                dataName: [
                    {id:1,name:'Data_0001',checked:false},
                    {id:2,name:'Data_0002',checked:false}
                ],
                projectInfo: '2020.1 - 2021.12 Pfizer raw data'
            })
        }
    },
    components: {
        clearDatasetDialog,
        clearDelete
    },
    computed: {
        all: {
            get() {
                return this.allData.dataName.every( item => item.checked === true )
            },
            set(newVal) {
                // console.log(newVal);
                this.allData.dataName.forEach(item => {
                    item.checked = newVal
                })
            }
        }
    },
    methods: {
        closeDeleteDialog() {
            this.deletedialogshow = false;
        },
        deletedialogopen() {
            this.deletedialogshow = true;
        },
        closeClearDialog() {
            this.cleardialogshow = false;
        },
        cleardialogopen(){
            this.cleardialogshow = true
        },
        labelShow() { 
            this.labelShowDialog = !this.labelShowDialog
        },
        nameShow() {
            this.nameShowDialog = !this.nameShowDialog
        },
        dropShow() {
            this.dropDialogShow = !this.dropDialogShow
        },
        upload() {
            this.$router.push('/select-file')
        },
        toggle() {
            this.showDialog = !this.showDialog
        },
        editInfo(val) {
            if(val == 'edit') {
                this.editShow = true
                this.$nextTick(() => {
                    this.$refs.input.focus()
                    this.$refs.input.value = this.allData.projectInfo
                }) 
            }
        },
        submit() {
            if(this.$refs.input.value == '') {
                alert('不能为空')
                return false
            }else {
                this.editShow = false
                this.$nextTick(() => {
                    this.allData.projectInfo = this.$refs.input.value
                })
            }
        },
        changeBg(e) {
            this.isActive = index
            this.viewContent = true
        } 
        

    }
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}
.bg {
    background: #dfe7ff;
    }
.upload_dataset_container {
    width: 100vw;
    height: 100vh;
    border: 2px solid #979797;
    .project_name_header {
        height: 50px;
        width: 100%;
        border-bottom: 2px solid #979797;
        .project_name {
            margin-left: 30px;
            line-height: 50px;
            font-family: SourceSansPro;
            font-size: 16px;
            color: #000000;
            font-weight: 600;
        }
    }
    .info {
        display: flex;
        width: 100%;
        height: calc(100vh - 60px);
        .project_info_left {
            flex: 1;
            border-right: 2px solid #979797;
            .upload_top {
                display: flex;
                position: relative;
                height: 100px;
                background: #f2f2f2;
                border-bottom: 2px solid #979797;
				p {
					cursor: pointer;
				}
                .checkbox_all {
                    position: relative;
                    width: 80px;
                    height: 26px;
                    border: 1px solid #dddddd;
                    margin-top: 20px;
                    margin-left: 28px;
                    .drop_down_icon {
                        position: absolute;
                        top: 4px;
                        right: 4px;
                        img {
                            width: 15px;
                            height: 15px;
                        }
                    }
                    .drop_dialog {
                        position: absolute;
                        top: 25px;
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
                .checkbox {
                    position: absolute;
                    top: -20px;
                    left: 5px;
                    margin-top: 25px;
                }
                .action {
                    font-size: 12px;
                    text-transform: uppercase;
                    color: #333333;
                    font-weight: 400;
                    vertical-align: middle;
                    margin-left: 25px;
                }
                .search_area {
                    display: flex;
                    border: 1px solid #dddddd;
                    height: 31px;
                    width: 313px;
                    margin-left: 22px;
                    margin-top: 15px;
                    .search {
                        display: inline-block;
                        width: 282px;
                        height: 30px;
                        outline:none;
                        padding-left: 18px;
                       
                    }
                    img {
                        width: 30px;
                        height: 30px;
                        border: 1px solid #dddddd;
                    }
                }
                
                .process_area {
                    position: absolute;
                    top: 72px;
                    left: 0;
                    button {
                        width: 87px;
                        height: 27px;
                        background: #fff;
                        border: 1px solid #979797;
                        font-family: 'PingFangSC-Medium';
                        font-size: 10px;
                        color: #000000;
                        font-weight: 600;
                    }
                }
                 .dialog {
                    position: absolute;
                    top: 50px;
                    right: 47px;
                    width: 227px;
                    height: 81px;
                    border: 2px solid #979797;
                    background: #fff;
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
                .btn {
                    position: absolute;
                    top: 18px;
                    right: 47px;
                    button {
                        display: inline-block;
                        width: 82px;
                        height: 32px;
                        background: #ffffff;
                        border: 2px solid #eeedf7;
                        font-family: PingFangSC-Medium;
                        font-size: 14px;
                        font-weight: 600;
                        color: #7163C5;
                        margin-bottom: 16px;
                    }
                    p {
                        font-family: PingFangSC-Medium;
                        font-size: 14px;
                        color: #000000; 
                        font-weight: 600;
                    }
                }
                .select_area {
                    display: flex;
                    position: absolute;
                    bottom: 10px;
                    left: 130px;
                    .dividing_line {
                        margin: 0 10px;
                        color: #c0cfe4;
                    }
                    img {
                        margin-top: 3px;
                        width: 20px;
                        height: 20px;
                    }
                    p {
                        background: #dddddd;
                        font-size: 14px;
                        // height: 25px;
                        // line-height: 25px;
                        padding: 5px 5px 5px 5px;
                        .drop_size {
                            line-height: 25px;
                            width: 15px;
                            height: 15px;
                        }
                    }
                    .name {
                        position: absolute;
                        top: 32px;
                        left: 41px;
                        width: 91px;
                        height: 28px;
                        line-height: 28px;
                        background: #fff;
                        border: 1px solid #979797;
                        padding-left: 10px;
                        font-size: 14px;
                    }
                    .label_selected {
                        // display: flex;
                        position: absolute;
                        top: 32px;
                        left: 157px;
                        width: 128px;
                        // height: 72px;
                        border: 1px solid #dddddd;
                        background: #fff;
                        padding-top: 10px;
                        .management {
                                margin-top: 5px;
                                width: 128px;
                                height: 30px;
                                border-top: 1px solid #dddddd;
                                .manage_label {
                                    font-size: 14px;
                                    // text-align: center;
                                    font-weight: 600;
                                    margin-left: 25px;
                                    margin-top: 5px;
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
                                background: #1bc2ac;
                                margin-top: 8px;
                                margin-right: 8px;
                               
                            }
                            .green {
                                background: #00a65a;
                            }
                            .tags_name {
                                font-size: 16px;
                                margin-bottom: 5px;
                            }
                           
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
                .data_content {
                    display: flex;
                    width: 100%;
                    height: 80px;
                    border-bottom: 1px solid #979797;
                    padding: 30px 0 30px 20px;
                    .data_name {
                        margin-left: 40px;
                        font-family: PingFangSC-Medium;
                        font-size: 14px;
                        color: #000000;
                        font-weight: 600;
                    }
                    
                    
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
                border-bottom: 2px solid #979797;
                .project_name_view {
                    display: flex;
                    width: 100%;
                    height: 60px;
                    border-bottom: 2px solid #979797;
                    .space {
                        display: inline-block;
                        width: 60px;
                        height: 60px;
                        background: #dfe7ff;
                        border-bottom: 2px solid #979797;
                        border-right: 2px solid #979797;
                    }
                    .project_name_info {
                        margin-left: 20px;
                        line-height: 60px;
                        font-family: PingFangSC-Medium;
                        font-size: 14px;
                        color: #000000;
                        font-weight: 600;
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
                    border-bottom: 2px solid #979797;
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
</style>