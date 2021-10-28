<template>
    <div class="upload-dataset">
        <div class="upload_dataset_container">
            <div class="project_name_header">
                <p class="project_name">{{allData.projectName}}</p>
            </div>
            <div class="info">
                <div class="project_info_left">
                    <div class="upload_top">
                        <input type="checkbox" class="checkbox">
                        <input type="text" placeholder="搜索" class="search">
                        <div class="btn">
                            <button @click="toggle">上传文件</button>
                            <p >{{allData.dataName.length}} 个数据集</p>
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
                        <div class="data_content" v-for="(item,index) in allData.dataName" :key="item.id" :class="{bg:index == isActive}" @click="changeBg(index)">
                            <input type="checkbox">
                            <p class="data_name">{{item.name}}</p>
                        </div>
                        <div class="word" v-if="allData.dataName == ''">当前项目无数据</div>
                    </div>
                </div>
                <div class="project_info_right">
                    <div class="view_content">
                        <div class="project_name_view">
                            <span class="space"></span>
                            <p class="project_name_info">
                                Data_0001
                            </p>
                        </div>
                    </div>
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
            viewContent: false,
            isActive: null
        }
    },
    props: {
        allData: {
            type: Object,
            default: () => ({
                projectName: "项目名称",
                dataName: [
                    {id:1,name:'Data_0001'},
                    {id:2,name:'Data_0002'}
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
        changeBg(index) {
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
            font-family: PingFangSC-Medium;
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
        .project_info_right {
            width: 500px;
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
            }
        }
    }
}
</style>