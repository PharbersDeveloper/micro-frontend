<template>
    <div class="page_container">
        <div class="header">
             <div class="title">
                <img :src="python_icon" class="title_icon" alt="">
                <span class="name">{{scriptName}}</span>
            </div>
            <div class="coding-title">
                <button class="button btn-fir">按钮2</button>
                <button class="button" @click="saveCode">保存</button>
            </div>
        </div>
        <div class="codeditor-container">
            <div class="code-io-list">
                <div class="code-block-list">
                    <span class="title">inputs</span>
                    <div class="ds-lst">
                        <span class="ds-item" v-for="(item, index) in datasource.inputs" :key="index">{{item.name}}</span>
                    </div>
                </div>
                <div class="code-block-list">
                    <span class="title">outputs</span>
                    <div class="ds-lst">
                        <span class="ds-item" v-for="(item, index) in datasource.outputs" :key="index">{{item.name}}</span>
                    </div>
                </div>
            </div>

            <div class="coding-pane">
                <div class="coding">
                    <ph-codeditor ref="codeditor" :value="codeBuffer" viewHeight="600px" language="python"/>
                </div>
                <div class="coding-footer">
                    <button class="button">Validate</button>
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
        jobName: {
            type: String,
            default: "developer_1qaz8ikm_max_test_dag_test_job_b1"
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
        }
    },
    data() {
        return {
            codeBuffer: "",
            downloadCode: 0,
            python_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/Python.svg"
        }
    },
    mounted() {
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
                margin-right: 10px;
            }
        }
    }
    .codeditor-container {
        display: flex;
        flex-direction: row;

        .code-io-list {
            display: flex;
            flex-direction: column;
            min-width: 180px;
            border: red 1px solid;
            text-align: left;

            .code-block-list {
                display: flex;
                flex-direction: column;

                .title {
                    font-size: 14px;
                    border-top: red 1px solid;
                }

                .ds-lst {
                    display: flex;
                    flex-direction: column;

                    .ds-item {
                        border-top: green 1px solid;
                    }
                }

            }
        }

        .coding-pane {
            width: 100%;
            display: flex;
            flex-direction: column;

            .coding {
                padding-bottom: 7px;
            }

            .coding-footer {
                display: flex;
                flex-direction: row;
            }
        }
    }
}
</style>
