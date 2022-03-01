<template>
    <div class="page_container">
        <div class="header">
             <div class="title">
                <img :src="python_icon" class="title_icon" alt="">
                <span class="name">computed_{{datasource.outputs[0] ? datasource.outputs[0].name : "test"}}</span>
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
                            <span >{{item.name}}</span>
                            <div>
                                <img :src="icon1" alt="">
                                <img :src="icon2" alt="">
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
                        <div class="ds-item"  v-for="(item, index) in datasource.outputs" :key="index">
                            <span >{{item.name}}</span>
                            <div>
                                <img :src="icon1" alt="">
                                <img :src="icon2" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="coding-pane">
                <div class="coding">
                    <ph-codeditor ref="codeditor" :value="codeBuffer" viewHeight="calc(100vh - 180px)" language="python"/>
                </div>
                <!-- <div class="coding-footer">
                    <button class="button">Run</button>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import PhCodeditorDatasource from "./model/datasource"
import phCodeditor from "./ph-codeditor"
import AWS from "aws-sdk"
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
        // projectId: {
        //     type: String,
        //     default: "JfSmQBYUpyb4jsei"
        // },
        jobId: {
            type: String,
            default: "1qaz4rfv"
        },
        flowVersion: {
            type: String,
            default: "developer"
        },
        // jobName: {
        //     type: String,
        //     default: ""
        // },
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
        }
    },
    data() {
        return {
            codeBuffer: "",
            downloadCode: 0,
            python_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/Python.svg",
            icon1: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6-%E8%A1%A8%E6%A0%BC.svg",
            icon2: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E8%AE%BE%E7%BD%AE_%E5%A1%AB%E5%85%85.svg",
            jobName: "developer_5Tz_f5ro0hOQejU_max_test_dag_test_job_b1",
            projectId: "JfSmQBYUpyb4jsei",
            jobPath: "2020-11-11/jobs/python/phcli/test_dag_developer/test_dag_developer_test_job_a/"
        }
    },
    mounted() {
        let href = window.location.href
        console.log(href)
        let paramArr = href.split("?")[1].split("&")
        this.projectId = paramArr[0].split("=")[1]
        this.jobName = paramArr[1].split("=")[1]
        let jobPathParam = paramArr[2].split("=")[1]
        this.jobPath = jobPathParam.slice(0, jobPathParam.lastIndexOf("/")+1)
        this.file_name = jobPathParam.slice(jobPathParam.lastIndexOf("/")+1)
        //父组件传进来的值
        this.datasource.jobName = decodeURI(this.jobName)
        this.datasource.projectId = this.projectId
        this.datasource.codeKey = this.jobPath
        this.datasource.file_name = this.file_name
        this.datasource.refreshData(this)
    },
    watch: {
        async downloadCode(n, o) {
            let data = await this.queryData()
            // this.codeBuffer = decodeURI(data.message.data)
            this.codeBuffer = data.message.data
        }
    },
    methods: {
        async queryData() {
            let url = "https://api.pharbers.com/phdadataquery"
            const accessToken = this.getCookie("access_token") || "f2082acf7080f24cde807d4650e3129168a6796f7f650976bbf2e6ec02a6abc0"
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
            let url = "https://api.pharbers.com/phdadataupdata"
            const accessToken = this.getCookie("access_token") || "f2082acf7080f24cde807d4650e3129168a6796f7f650976bbf2e6ec02a6abc0"
            let body = {
                "bucket": "ph-platform",
                "key": this.datasource.codeKey,
                "file_name": this.datasource.file_name,
                "bucket": "ph-platform",
                "data": encodeURI(this.$refs.codeditor.editor.getValue()),
                // "data": this.$refs.codeditor.editor.getValue(),
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

            .coding-footer {
                display: flex;
                flex-direction: row;
                .button {
                    width: 57px;
                    height: 23px;
                    border: 1px solid #f2f0f9;
                    background: #f2f0f9;
                    border-radius: 2px;
                    color: #7163C5;
                    position: absolute;
                    bottom: 30px;
                }
            }
        }
    }
}
</style>
