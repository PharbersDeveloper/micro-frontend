<template>
    <div class="upload-dataset">
        <div class="upload_dataset_container">
            <div class="project_name_header">
                <p class="project_name">{{allData.projectName}}</p>
            </div>
            <div class="project_name_header">
                <p class="project_name new_upload">新上传文件</p>
            </div>
            <div class="upload_file_area">
                
                <div class="upload_area">
                    <div class="file_content_area" v-for="(item,index) in fileName" :key="index">
                        <p>{{item}}</p>
                        <button @click="deleteFile(index)">删除</button>
                    </div>
                    <button class="select">上传文件</button>
                    <div class="next" @click="open">下一步</div>
                    <input type="file" class="select_input">
                </div>
            </div>
        </div>
        <next-dialog v-if="show" @closeDialog="close"></next-dialog>
    </div>
</template>

<script>
import nextDialog from './next-dialog'
export default {
    data() {
        return {
            show: false,
            fileName: ['File_name.xsl','File_name.xsl']
        }
    },
    components: {
        nextDialog
    },
    props: {
        allData: {
            type: Object,
            default: () => ({
                projectName: "项目名称"
            })
        }
    },
    methods: {
        open() {
            this.show = true
        },
        close() {
            this.show = false
        },
        deleteFile(index) {
            this.fileName.splice(index,1)
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
        .new_upload {
            font-size: 14px;
        }
    }
    .upload_file_area {
        width: 100%;
        height: calc(100vh - 110px);
        background: #f7f7f7;
        padding-top: 50px;
        .file_content_area {
            display: flex;
            position: relative;
            width: 1064px;
            height: 20px;
            border: 1px solid #979797;
            margin: 17px auto;
            p {
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #000000;
                font-weight: 600;
                margin-left: 7px;
                line-height: 18px;
            }
            button {
                position: absolute;
                top: 0;
                right: 28px;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #000000;
                font-weight: 600;
                border: none;
                background: none;
            }
        }
        .upload_area {
            position: relative;
            width: 1400px;
            height: 400px;
            border: 1px solid #979797;
            margin: 0 auto;
            background: #d8d8d8;
            .select {
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                margin: auto;
                display: inline-block;
                width: 82px;
                height: 32px;
                background: #7163C5;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #FFFFFF;
                font-weight: 600;
                border: 0;
                border-radius: 4px;
            }
            .next {
                position: absolute;
                margin: auto;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                // display: inline-block;
                width: 82px;
                height: 32px;
                background: #7163C5;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #FFFFFF;
                font-weight: 600;
                border-radius: 4px;
                line-height: 32px;
                text-align: center;
            }
            .select_input {
                position: absolute;
                top: 186px;
                left: 664px;
                opacity: 0;
            }
        }
        
    }
}
</style>