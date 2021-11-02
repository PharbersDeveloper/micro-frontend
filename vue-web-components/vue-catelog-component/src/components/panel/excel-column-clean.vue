<template>
    <div class="upload-dataset">
        <div class="upload_dataset_container">
            <div class="project_name_header">
                <p class="project_name">{{allData.projectName}}</p>
            </div>
             <div class="project_name_header heaber_opt">
                <p class="project_name new_upload">New Uploaded File Dataset</p>
                <bp-button text="运行" class="run"></bp-button>
            </div>
            <div class="content_area">
                <div class="icon_dialog">
                    <div class="dataset_img">
                        <img src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/Database.svg" alt="" class="database">
                    </div>
                    <div class="center-area">
                        <div class="round">
                            <div class="icon">
                                <img :src="oip_icon">
                                <img :src="no_icon" class="no">
                            </div>
                        </div>
                        <div class="input">
                            <bp-select-vue src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_chevron-down_12.svg" :choosedValue="scriptValue">
                                <bp-option-vue text="双源清洗" @click="selectScript(0)"></bp-option-vue>
                                <bp-option-vue text="手动映射" @click="selectScript(1)"></bp-option-vue>
                            </bp-select-vue>
                        </div>
                        <bp-button text="添加映射" v-show="manual"></bp-button>
                    </div>
                   <div class="dataset_img">
                        <img src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/Database.svg" alt="" class="database">
                    </div>
                    <!-- <div class="log">
                        <p>Job failed</p>
                        <p class="job_name">Job name</p>
                        <button>Logs</button>
                    </div> -->
                </div>
                <div class="excel_area">
                    <div class="area">
                        <!-- <p class="file_name">文件名称</p> -->
                        <div class="excel">
                            <bp-excel viewHeight="25vh"></bp-excel>
                        </div>
                    </div>
                    <div class="area column_clean">
                        <!-- <p class="file_name">列清洗</p> -->
                        <div class="excel">
                            <bp-excel viewHeight="25vh"></bp-excel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bpButton from '../../../../vue-basic-component/src/components/bp-button.vue'
import bpExcel from '../../../../vue-excel-component/src/components/bp-excel'
import bpSelectVue from '../../../node_modules/vue-components/src/components/bp-select-vue.vue'
import bpOptionVue from '../../../node_modules/vue-components/src/components/bp-option-vue.vue'
export default {
    data() {
        return {
            showDialog: false,
            cloumnClean: '列清洗_v1',
            oip_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/OIP.png",
            drop_down_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/drop-down-icon.png",
            no_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/NO.png",
            yes_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/Yes.png",
            manual: true,
            scriptValue: "手动映射"
        }
    },
    components: {
        bpExcel,
        bpButton,
        bpSelectVue,
        bpOptionVue
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
        selectScript(data) {
            if(data) {
                this.manual = true
                this.scriptValue = "手动映射"
            } else {
                this.manual = false
                this.scriptValue = "双源映射"
            }
        },
        toggle() {
            this.showDialog = !this.showDialog;
        },
        select(e) {
            // console.log("点击",e);
            this.cloumnClean = e.target.innerHTML;
            this.showDialog = false;
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
    .heaber_opt {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .content_area {
        display: flex;
        background: #f7f7f7;
        .icon_dialog {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: calc(100vh - 110px);
            padding: 120px 0;
            width: 600px;
            margin-left: 100px;
            // margin-top: 100px;
            // margin-left: 300px;
            .center-area {
                display: flex;
                align-items: center;
                // width: 500px;
            }
            .dataset_img {
                // width: 500px;
                .database {
                    width: 82px;
                    height: 82px;
                }
            }
            
            .round {
                position: relative;
                width: 82px;
                height: 82px;
                border-radius: 41px;
                border: 1px solid #979797;
                .icon {
                    position: absolute;
                    top: 12px;
                    left: 12px;
                    width: 56px;
                    height: 56px;
                    img {
                        width: 100%;
                    }
                    .no {
                        width: 16px;
                        height: 16px;
                        position: absolute;
                        top: 48px;
                        right: -20px;
                    }
                }
            }
            .input {
                position: relative;
                margin: 0 15px;
                p {
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    color: #000000;
                    font-weight: 600;
                    margin-left: 6px;
                }
                .drop_down {
                    position: absolute;
                    top: 0;
                    right: 4px;
                    width: 26px;
                    height: 18px;
                    img {
                        width: 100%;
                    }
                }
                .dialog {
                    position: relative;
                    top: 4px;
                    right: 7px;
                    width: 200px;
                    .dialog_select {
                        width: 100%;
                        height: 24px;
                        border: 1px solid #979797;
                        margin-top:-1px;
                        font-family: PingFangSC-Medium;
                        font-size: 14px;
                        color: #000000;
                        font-weight: 600;
                        line-height: 24px;
                        background: #fff;
                        span {
                            display: block;
                            width: 100%;
                            height: 100%;
                            margin-left: 6px;
                        }
                    }
                }
            }
            .button {
                margin-left: 70px;
                margin-top: 25px;
                button {
                    width: 80px;
                    height: 32px;
                    background: #7163C5;
                    border-radius: 2px;
                    border: 0;
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    color: #FFFFFF;
                    font-weight: 600;
                }
            }
            .log {
                position: relative;
                width: 287px;
                height: 66px;
                border: 1px solid #979797;
                margin-left: 250px;
                padding-top: 10px;
                p {
                    margin-left: 20px;
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    color: #000000;
                    font-weight: 600;
                }
                .job_name {
                    margin-top: 5px;
                }
                button {
                    position: absolute;
                    top: 16px;
                    right: 25px;
                    width: 67px;
                    height: 32px;
                    border: 2px solid #f3f2f5;
                    background: #ffffff;
                    color: #7163C5;
                    font-size: 14px;
                    font-weight: 600;
                }
            }
        }
    }
    .run {
        width: 80px;
        height: 32px;
        font-weight: 600;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .project_name_header {
        height: 50px;
        width: 100%;
        border-bottom: 2px solid #ccc;
        padding-right: 20px;
        .project_name {
            margin-left: 30px;
            line-height: 50px;
            font-family: PingFangSC-Medium;
            font-size: 16px;
            color: #000000;
            font-weight: 600;
        }
        .new_upload {
            font-size: 14px;
        }
    }
    .excel_area {
        width: 100%;
        height: calc(100vh - 110px);
        background: #f7f7f7;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 60px;
        .area {
            // margin: 0 auto;
            width: 1400px;
            height: 260px;
            .file_name {
                font-family: PingFangSC-Medium;
                font-size: 12px;
                color: #000000;
                font-weight: 600;
            }
            .excel {
                // padding: 50px;
                margin-top: 5px;
                width: 100%;
                height: 240px;
                // border: 1px solid #979797;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        .column_clean {
            margin-top: 5px;
        }
        
    }
}
</style>