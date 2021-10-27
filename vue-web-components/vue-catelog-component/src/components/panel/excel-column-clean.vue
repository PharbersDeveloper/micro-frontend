<template>
    <div class="excel-cloumn-clean">
        <div class="excel_cloumn_clean_area">
            <div class="header_project_name">
                <p class="word">{{allData.projectName}}</p>
            </div>
            <div class="new_upload_file">
                <p class="word">New Uploaded File Dataset</p>
            </div>
            <div class="excel_area">
                <p class="file_name">文件名称</p>
                <div class="excel">
                    <bp-excel></bp-excel>
                </div>
                <p class="file_name">列清洗</p>
                <div class="excel">
                    <bp-excel></bp-excel>
                </div>
                <div class="icon_dialog">
                    <div class="round">
                        <div class="icon">
                            <img :src="oip_icon">
                            <img :src="no_icon" class="no">
                            <!-- <img :src="yes_icon" class="no"> -->
                        </div>
                    </div>
                    <div class="input">
                        <p>{{cloumnClean}}</p>
                        <div class="drop_down" @click="toggle">
                            <img :src="drop_down_icon">
                        </div>
                        <div class="dialog" v-if="showDialog">
                            <p class="dialog_select"><span @click="select">列清洗_v1</span></p>
                            <p class="dialog_select"><span @click="select">列清洗_v2</span></p>
                            <p class="dialog_select"><span @click="select">列清洗_v3</span></p>
                            <p class="dialog_select"><span @click="select">列清洗_v4</span></p>
                        </div>
                    </div>
                    <div class="button">
                        <button>运行</button>
                    </div>
                    <div class="log">
                        <p>Job failed</p>
                        <p class="job_name">Job name</p>
                        <button>Logs</button>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
</template>

<script>
import bpExcel from '../../../../vue-excel-component/src/components/bp-excel'
export default {
    components: {
        bpExcel
    },
    data() {
        return {
            showDialog: false,
            cloumnClean: '列清洗_v1',
            oip_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/OIP.png",
            drop_down_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/drop-down-icon.png",
            no_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/NO.png",
            yes_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/Yes.png"
        }
    },
    props: {
        allData: {
            type: Object,
            default: () => ({
                projectName: '项目名称'
            })
        }
    },
    methods: {
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
.excel-cloumn-clean {
    position: relative;
    width: 100%;
    height: 100vh;
    .excel_cloumn_clean_area {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 1200px;
        height: 768px;
        border: 1px solid #979797;
        .header_project_name {
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #979797;
            .word {
                font-family: PingFangSC-Medium;
                font-size: 16px;
                color: #000000;
                font-weight: 600;
                margin-left: 24px;
                line-height: 50px;
            }
        }
        .new_upload_file {
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #979797;
            .word {
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #000000;
                font-weight: 600;
                margin-left: 14px;
                line-height: 50px;
            }
        }
        .excel_area {
            width: 100%;
            height: 668px;
            background-color: #f7f7f7;
            border-bottom: 1px solid #979797;
            padding: 6px 50px 6px 50px;
            .file_name {
                font-family: PingFangSC-Medium;
                font-size: 12px;
                color: #000000;
                font-weight: 600;
            }
            .excel {
                margin-top: 2px;
                width: 1100px;
                height: 240px;
                border: 1px solid #979797;
                background: #ffffff;
                padding: 40px 54px;
            }
            .icon_dialog {
                display: flex;
                margin-top: 31px;
                margin-left: 88px;
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
                    width: 200px;
                    height: 24px;
                    outline: none;
                    margin-left: 15px;
                    margin-top: 28px;
                    background: #d8d8d8;
                    border: 1px solid #979797;
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
                    margin-left: 210px;
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
}
}
</style>