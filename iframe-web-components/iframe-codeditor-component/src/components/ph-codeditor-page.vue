<template>
    <div class="page_container">
        <div class="header">
             <div class="title">
                <img :src="defs.iconsByName(runtime)" class="title_icon" alt="">
                <span class="name">computed_{{datasource.outputs}}</span>
            </div>
            <div class="coding-title">
                <button class="button btn-fir">运行</button>
                <button class="button btn-fir">操作</button>
                <button class="button" @click="saveCode">保存</button>
            </div>
        </div>
        <div class="codeditor-container">
            <div class="code-io-list">
                <div class="dataset">数据集</div>
                <div class="code-block-list">
                    <div class="ints">
                        <span class="title">Inputs</span>
                        <span class="line"></span>
                    </div>
                    <div class="ds-lst">
                        <div class="ds-item" v-for="(item, index) in datasource.inputs" :key="index">
                            <span >{{item}}</span>
                            <div>
                                <img :src="defs.iconsByName('codeditor', 'table')" alt="">
                                <img :src="defs.iconsByName('codeditor', 'setting')" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="code-block-list code-block-list-last">
                    <div class="ints">
                        <span class="title">Output1</span>
                        <span class="line"></span>
                    </div>
                    <div class="ds-lst">
                        <div class="ds-item">
                            <span >{{datasource.outputs}}</span>
                            <div>
                                 <img :src="defs.iconsByName('codeditor', 'table')" alt="">
                                <img :src="defs.iconsByName('codeditor', 'setting')" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="coding-pane">
                <div class="coding">
                    <ph-codeditor ref="codeditor" :value="codeBuffer" viewHeight="calc(100vh - 180px)" language="python"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PhCodeditorDatasource from "./model/datasource"
import phCodeditor from "./ph-codeditor"
import PhDagDefinitions from "./policy/definitions/definitions";
import AWS from "aws-sdk"
import { staticFilePath, hostName } from "../config/envConfig"

export default {
    name: 'codeditor-page',
    components: {
        phCodeditor
    },
    props: {
        scriptName: {
            type: String,
            default: "脚本名称"
        },
        jobId: {
            type: String,
            default: "1qaz4rfv"
        },
        flowVersion: {
            type: String,
            default: "developer"
        },
        datasource: {
            type: Object,
            default: function() {
                return new PhCodeditorDatasource('1',
                    this.projectId, this.jobId, this.flowVersion, this.jobName)
            }
        },
        s3: {
            type: Object,
            default: function() {
                return new AWS.S3({
                    accessKeyId: "AKIAWPBDTVEAMBDRQWIQ",
                    secretAccessKey: "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",
                    region: "cn-northwest-1"
                })
            }
        },
        defs: {
            type: Object,
            default: function () {
                return new PhDagDefinitions("1");
            }
        }
    },
    data() {
        return {
            codeBuffer: "",
            downloadCode: 0,
            jobName: "",
            projectId: "",
            jobPath: "",
            runtime: ""
        }
    },
    mounted() {
        let href = window.location.href
        console.log(href)
        let paramArr = href.split("?")[1].split("&")
        this.projectId = this.getUrlParam(paramArr, "projectId")
        this.projectName = this.getUrlParam(paramArr, "projectName")
        this.jobName = this.getUrlParam(paramArr, "jobName")
        this.runtime = this.getUrlParam(paramArr, "runtime")
        //父组件传进来的值
        this.datasource.jobName = decodeURI(this.jobName)
        this.datasource.projectId = this.projectId
        this.datasource.refreshData(this)
    },
    watch: {
        async downloadCode(n, o) {
            let data = await this.queryData()
            this.codeBuffer = data.message.data
        }
    },
    methods: {
        getUrlParam(arr, value) {
            let data = arr.find(item => item.indexOf(value) > -1)
            return data ? decodeURI(data).split("=")[1] : undefined
        },
        async queryData() {
            let url = `${hostName}/phqueryjobcode`
            const accessToken = this.getCookie("access_token") || this.datasource.debugToken
            let body = {
                "bucket": "ph-platform",
                "key": this.datasource.codeKey,
                "file_name": this.datasource.file_name
            }
            let options = {
                method: "POST",
                headers: {
                    "Authorization": accessToken,
                    'Content-Type': 'application/json; charset=UTF-8',
                    "accept": "application/json"
                },
                body: JSON.stringify(body)
            }
            let result = await fetch(url, options).then(res => res.json())
            return result
        },
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        },
        async saveCode() {
            let url = `${hostName}/phupdatejobcode`
            const accessToken = this.getCookie("access_token") || this.datasource.debugToken
            let body = {
                "bucket": "ph-platform",
                "key": this.datasource.codeKey,
                "file_name": this.datasource.file_name,
                "bucket": "ph-platform",
                "data": encodeURI(this.$refs.codeditor.editor.getValue()),
                "timespan": new Date().getTime()
            }
            let options = {
                method: "POST",
                headers: {
                    "Authorization": accessToken,
                    'Content-Type': 'application/json; charset=UTF-8',
                    "accept": "application/json"
                },
                body: JSON.stringify(body)
            }
            let result = await fetch(url, options).then(res => res.json())
            if(result.status === 1) {
                alert("保存成功!")
            } else {
                alert("保存失败!")
            }
            this.downloadCode++
        }
    }
}
</script>

<style lang='scss' scoped>
.page_container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding: 0 20px;
        border-bottom: 1px solid #979797;
        .title_icon {
            height: 30px;
            width: 30px;
        }
        .title {
            display: flex;
            align-items: center;
            .title_icon {
                margin-right: 10px;
            }
        }
        .coding-title {
            display: flex;
            flex-direction: row-reverse;
            .button {
                width: 87px;
                height: 26px;
                border: 1px solid #57565F;
                border-radius: 2px;
                background: #fff;
                cursor: pointer;
            }
            .btn-fir {
                margin-left: 10px;
            }
        }
    }
    .codeditor-container {
        display: flex;
        flex-direction: row;
        height: calc(100vh - 80px);
        .code-io-list {
            display: flex;
            flex-direction: column;
            min-width: 180px;
            border-right: 1px solid #ccc;
            text-align: left;
            .dataset {
                height: 40px;
                margin-left: 20px;
                margin-top: 10px;
            }
            .code-block-list-last {
                margin-top: 20px;
            }
            .code-block-list {
                display: flex;
                flex-direction: column;
                .ints {
                    display: flex;
                    align-items: center;
                    margin-left: 5px;
                    font-size: 14px;
                }
                .title {
                    font-size: 14px;
                    margin-right: 3px;
                }
                .line {
                    width: 30px;
                    border-bottom: 1px solid #ddd;
                    height: 0;
                    display: block;
                    width: 140px;
                }

                .ds-lst {
                    display: flex;
                    flex-direction: column;

                    .ds-item {
                        font-size: 12px;
                        margin-left: 20px;
                        height: 40px;
                        line-height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        span {
                            display: block;
                            white-space: nowrap;
                            width: 100px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        img {
                            width: 10px;
                            height: 10px;
                            padding-right: 10px;
                        }
                    }
                }

            }
        }

        .coding-pane {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 30px;
            .coding {
                padding-bottom: 7px;
            }
        }
    }
}
</style>
