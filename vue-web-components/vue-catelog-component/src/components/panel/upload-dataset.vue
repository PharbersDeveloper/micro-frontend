<template>
    <div class="upload-dataset">
        <div class="upload_dataset_container">
            <div class="project_name_header">
                <p>{{allData.projectName}}</p>
            </div>
            <div class="upload_area">
                <div class="dataset_left">
                    <div class="upload_top">
                        <input type="checkbox" class="checkbox">
                        <input type="text" placeholder="搜索" class="search">
                        <div class="btn">
                            <button @click="toggle">上传文件</button>
                            <p>0 个数据集</p>
                        </div>
                        <div class="process_area">
                            <button>输入数据</button>
                            <button>过程数据</button>
                            <button>输出数据</button>
                        </div>
                        <div class="dialog" v-show="showDialog">
                                <div>
                                    <p @click="$router.push('/select-file')">本地上传</p>
                                </div>
                        </div>
                    </div>
                    <div class="upload_bottom">
                        
                        <div class="data_content" v-for="item in allData.dataName" :key="item.id" ref="change" @click="changeBg">
                            <input type="checkbox">
                            <p class="data_name">{{item.name}}</p>
                        </div>
                        <div class="word" v-if="allData.dataName == ''">当前项目无数据</div>
                    </div>
                </div>
                <div class="datadet_right">
                    <div v-if="viewContent">
                        <div class="data_nm">
                        <span></span>
                        <p class="da_name">Data_0001</p>
                    </div>
                    <div class="data_info" >
                       <div class="operation">
                           <span class="about">关于:</span>
                           <p class="time_datainfo" v-if="editShow == false">{{allData.projectInfo}}</p>
                           <input type="text" class="edit_input" v-if="editShow" ref="input" @keyup.enter="submit">
                           <div class="edit_icon" @click="editInfo('edit')">
                               <img :src="edit_icon" alt="">
                           </div>
                       </div>
                       <div class="creation_time">
                           <span class="creation_tm">创建时间</span>
                           <span class="time">5 mins ago by</span>
                       </div>
                       <div class="last_time">
                           <span class="last_time_word">上一次编辑时间</span>
                           <span class="last_tm">3 mins ago by</span>
                       </div>
                    </div>
                    </div>
                    <p v-if="viewContent == false" class="info">单击对象查看详细信息</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showDialog: false,
            edit_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/edit_icon.png",
            state: '', 
            editShow: false,
            viewContent: true,
            index: 0
        }
    },
    props: {
        allData: {
            type: Object,
            default: () => ({
                projectName: "项目名称",
                dataName: [
                    {id:1,name:'Data_0001'}
                    // {id:2,name:'Data_0002'}
                ],
                projectInfo: '2020.1 - 2021.12 Pfizer raw data'
            })
        }
    },
    methods: {
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
        changeBg() {
            this.index = 1
            console.log(this.$refs.change)
            if(this.index == 1) {
                this.$refs.change.style.background = 'red'
            }
        } 
        

    }
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}
.upload-dataset {
    width: 100%;
    height: 100%;
    position: relative;
    .upload_dataset_container {
    width: 1200px; 
    height: 768px;
    border: 2px solid #979797;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    .project_name_header {
        height: 50px;
        line-height: 50px;
        border-bottom: 2px solid #979797;
        p {
            margin-left: 24px;
            color: #000000;
            font-size: 16px;
            font-weight: 600;
            font-family: PingFangSC-Medium;
        }
    }
    .upload_area {
        display: flex;
        height: 718px;
        .dataset_left {
            width: 940px;
            border-right: 2px solid #979797;
            height: 100%;
            .upload_top {
                display: flex;
                position: relative;
                height: 100px;
                border-bottom: 2px solid #979797;
                .checkbox {
                    margin-left: 21px;
                    margin-top: 25px;
                }
                .search {
                    display: inline-block;
                    width: 282px;
                    height: 31px;
                    outline:none;
                    padding-left: 18px;
                    margin-left: 22px;
                    margin-top: 15px;
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
                        font-family: PingFangSC-Medium;
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
        .datadet_right {
            height: 100%;
            width: 260px;
            .data_nm {
                display: flex;
                width: 100%;
                height: 40px;
                border-bottom: 2px solid #979797;
                span {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    background: #DFE7FF;
                    border-right: 2px solid #979797;
                    border-bottom: 2px solid #979797;
                }
                .da_name {
                    margin-left: 21px;
                    line-height: 40px;
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    color: #000000;
                    font-weight: 600;
                }
            }
            .data_info {
                    position: relative;
                    width: 100%;
                    height: 200px;
                    background: #f5f5f5;
                    border-bottom: 2px solid #979797;
                    // padding: 15px 15px 32px 15px;
                    .operation {
                        display: flex;
                        width: 100%;
                        height: 20px;
                        margin-left: 10px;
                        margin-top: 15px;
                        .edit_input {
                            width: 173px;
                            height: 88px;
                        }
                        .about {
                            width: 36px;
                            height: 17px;
                            font-family: PingFangSC-Medium;
                            font-size: 12px;
                            color: #000000;
                            font-weight: 600;
                        }
                        .time_datainfo {
                            width: 170px;
                            height: 14px;
                            font-family: PingFangSC-Medium;
                            font-size: 10px;
                            color: #000000;
                            margin-left: 8px;
                            font-weight: 400;
                        }
                        .edit_icon {
                            margin-left: 4px;
                            width: 20px;
                            height: 20px;
                            img {
                                width: 100%;
                            }
                        }
                    }
                    .creation_time {
                        margin-left: 15px;
                        margin-top: 80px;
                        .creation_tm {
                            font-family: PingFangSC-Medium;
                            font-size: 12px;
                            color: #000000;
                            font-weight: 600;
                        }
                        .time {
                            font-family: PingFangSC-Medium;
                            font-size: 12px;
                            color: #000000;
                            font-weight: 500;
                            margin-left: 75px;
                        }
                    }
                    .last_time {
                        margin-left: 15px;
                        margin-top: 20px;
                        .last_time_word {
                            font-family: PingFangSC-Medium;
                            font-size: 12px;
                            color: #000000;
                            font-weight: 600;
                        }
                        .last_tm {
                            font-family: PingFangSC-Medium;
                            font-size: 12px;
                            color: #000000;
                            font-weight: 500;
                            margin-left: 40px;
                        }

                    }
                }
            .info {
                text-align: center;
                line-height: 718px;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #838383; 
                font-weight: 500;
            }
            
        }
    }
}
}
</style>