<template>
    <div class="upload-dataset">
        <div class="upload_dataset_container">
            <div class="project_name_header">
                <p class="project_name" @click="linkToPage">{{allData.projectName}}</p>
            </div>
            <div class="project_name_header">
                <p class="project_name new_upload">新上传文件</p>
            </div>
            <div class="upload_file_area">
                
                <div class="upload_area">
                    <div class="file_content_area" v-for="(item,index) in fileList" :key="index">
                        <p>{{item.name}}</p>
                        <button @click="deleteFile(index)">删除</button>
                    </div>
                    <button class="select" v-if="fileList.length == 0" @click="upload">上传文件</button>
                    <div class="next" @click="open" v-if="fileList.length > 0">下一步</div>
                    <input style="display: none;" type="file" name="" ref="file" @change="uploadFiles" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv,.csv,.xlsx,.xls,.xlsm">
                </div>
                <div class="select-area">
                    <span class="title">上传至</span>
                    <bp-select-vue src="https://www.pharbers.com/public/icon_drop.svg" :choosedValue="selectParam">
                        <bp-option-vue @click="changeSelect">本集群</bp-option-vue>
                    </bp-select-vue>
                </div>
            </div>
            
        </div>
        <next-dialog v-if="show" @closeDialog="close" :fileList="fileList" @uploadFilesEvent="uploadFilesEvent" :datasetArr="allData.datasetArr"></next-dialog>
    </div>
</template>

<script>
import nextDialog from './next-dialog'
import bpSelectVue from '../../../node_modules/vue-components/src/components/bp-select-vue.vue'
import bpOptionVue from '../../../node_modules/vue-components/src/components/bp-option-vue.vue'

export default {
    data() {
        return {
            show: false,
            fileList: [],
            selectParam: "本集群"
        }
    },
    components: {
        nextDialog,
        bpSelectVue,
        bpOptionVue
    },
    props: {
        allData: {
            type: Object,
            default: () => ({
                projectName: "项目名称",
                projectId: '',
                datasetArr: []
            })
        },
        random: Number
    },
    watch: {
        random: function() {
            console.log("关闭所有弹框")
            this.show = false
        }
    },
    methods: {
        changeSelect() {},
        open() {
            this.show = true
        },
        close() {
            this.show = false
        },
        deleteFile(index) {
            this.fileList.splice(index,1)
            this.$refs.file.value = null
        },
        upload() {
            this.$refs.file.click()
        },
        uploadFiles() {
            console.log(this.$refs.file.files[0])
            this.fileList.push(this.$refs.file.files[0])
        },
        uploadFilesEvent(data) {
            // this.show = false
            data.args.param.projectName = this.allData.projectName
            data.args.param.projectId = this.allData.projectId
            this.$emit('event', data)
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
.upload_dataset_container {
    width: 100vw;
    height: 100vh;
    // border: 2px solid #ddd;
    .project_name_header {
        height: 50px;
        width: 100%;
        border-bottom: 1px solid #ddd;
        .project_name {
            margin-left: 30px;
            line-height: 50px;
            font-family: PingFangSC-Medium;
            font-size: 16px;
            color: #000000;
            font-weight: 600;
            cursor: pointer;
        }
        .new_upload {
            font-size: 14px;
        }
    }
    .upload_file_area {
        width: 100%;
        padding: 20px;
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
        .select-area {
            width: 100%;
            background: #fff;
            margin-top: 20px;
            display: flex;
            align-items: center;
            padding: 15px;
            border: 1px solid #979797;
            .title {
                width: 70px;
            }
            /deep/.bp-select {
                height: 26px;
            }
            /deep/.bp-select-title{
                background: #fff !important;
                height: 26px;
                border: 1px solid #cccccc;
            }
        }
        .upload_area {
            position: relative;
            // width: 1400px;
            width: 100%;
            height: 184px;
            border: 1px solid #979797;
            margin: 0 auto;
            background: #FFF;
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
                cursor: pointer;
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