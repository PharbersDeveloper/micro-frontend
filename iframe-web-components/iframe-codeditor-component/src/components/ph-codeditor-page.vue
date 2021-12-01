<template>
    <div class="page_container">
        <div class="header">
             <div class="title">
                <img :src="python_icon" class="title_icon" alt="">
                <span class="name">{{scriptName}}</span>
            </div>
            <div class="coding-title">
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
                <div class="coding-footer">
                    <!-- <button class="button">Validate</button> -->
                    <button class="button">Run</button>
                </div>
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
        projectId: {
            type: String,
            default: "JfSmQBYUpyb4jsei"
        },
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
            python_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/Python.svg",
            icon1: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6-%E8%A1%A8%E6%A0%BC.svg",
            icon2: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/%E8%AE%BE%E7%BD%AE_%E5%A1%AB%E5%85%85.svg",
            jobName: "developer_5Tz_f5ro0hOQejU_max_test_dag_test_job_b1"
        }
    },
    mounted() {
        let href = window.location.href
        this.jobName = href.split('jobName=')[1]
        // this.$nextTick(() => {
        //     window.addEventListener('message', function(event) {
        //         //event.data获取传过来的数据
        //         console.log(event.data)
        //     })
        //     // 通知父组件准备好接收消息
        //     window.parent.postMessage({
        //         cmd: 'ready-for-receiving'
        //     }, '*')
        // })

        //父组件传进来的值
        this.datasource.jobName = this.jobName
        this.datasource.refreshData(this)
    },
    watch: {
        downloadCode(n, o) {
            var params = {
                Bucket: this.datasource.bucket,
                Key: this.datasource.codeKey + "phjob.py"
            };
            console.log(this.datasource.codeKey)
            let that = this
            this.s3.getObject(params, function(err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else {
                    that.codeBuffer = String.fromCharCode(...data.Body)
                }
            });
        }
    },
    methods: {
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        },
        saveCode() {
            var params = {
                Body: this.$refs.codeditor.editor.getValue(),
                Bucket: this.datasource.bucket,
                Key: this.datasource.codeKey + "phjob.py"
            }

            console.log(this.datasource.codeKey)
            console.log(this.$refs.codeditor.editor.getValue())
            let that = this
            this.s3.putObject(params, function(err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else {
                    console.log(data);
                    that.downloadCode++
                }
            });
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
        height: calc(100vh - 70px);
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
