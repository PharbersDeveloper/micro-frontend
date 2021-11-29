<template>
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
            <div class="coding-title">
                <button class="button">按钮2</button>
                <button class="button" @click="saveCode">保存</button>
            </div>
            <div class="coding">
                <ph-codeditor ref="codeditor" :value="codeBuffer" viewHeight="600px" language="python"/>
            </div>
            <div class="coding-footer">
                <button class="button">Validate</button>
                <button class="button">Run</button>
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
        projectId: {
            type: String,
            default: "max"
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
            default: "1qaz4rfv_max_test_dag_developer_test_job_a"
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
            downloadCode: 0
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

        .coding-title {
            display: flex;
            flex-direction: row-reverse;
        }

        .coding {
            padding-bottom: 7px;
        }

        .coding-footer {
            display: flex;
            flex-direction: row;
        }
    }
}
</style>
