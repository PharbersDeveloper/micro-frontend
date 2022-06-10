<template>
    <div class="sync">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="sync_header">
            <div class="header_left">
                <!-- 需要一个sync 的icon @wodelu -->
                <img :src="defs.iconsByName('prepare')" alt="" />
                <span>Sync</span>
            </div>
            <div class="header_right">
                <el-button class="save" @click="save">保存</el-button>
            </div>
        </div>
        <div class="sync_area">
            <div class="sync_left">
                <div class="content">
                    <div class="content-column">
                        <span>Input</span>
                        <el-input readonly v-model="inputDsName"></el-input>
                        <el-button type="primary" @click="changeInputDsName" disabled>更改数据集</el-button>
<!--                        <span class="content-bottom">Version Selection</span>-->
<!--                        <div class="version-tags-container">-->

<!--                        </div>-->
<!--                        <el-input v-model="search"></el-input>-->
<!--                        <div class="version-ds-list">-->

<!--                        </div>-->
                    </div>
                </div>
            </div>
            <div class="sync_divider"></div>
            <div class="sync_right">
                <div class="content">
                    <div class="content-column">
                        <span>Output</span>
                        <el-input readonly v-model="outputDsName"></el-input>
                        <el-button type="primary" @click="changeOutputDsName" disabled>更改数据集</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PhDagDefinitions from './policy/definitions/definitions'
import ElButton from 'element-ui/packages/button/index'
import ElInput from 'element-ui/packages/input/index'

export default {
    components: {
        ElButton,
        ElInput,
    },
    data() {
        return {
            inputDsName: this.getUrlParam("inputName"),
            outputDsName: ""
            // schema: ["1", "2", "3"],
        }
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    projectId: "YZYijD17N9L6LXx",
                    projectName: "autorawdata2021",
                    scriptsParams: null,
                    dss: []
                }
            }
        },
        defs: {
            type: Object,
            default: function() {
                return new PhDagDefinitions(1)
            }
        }
    },
    methods: {
        getUrlParam(value) {
            let href = window.location.href
            let paramArr = href.split("?")[1].split("&")
            let data = paramArr.find(item => item.indexOf(value) > -1)
            return data ? decodeURI(data).split("=")[1] : undefined
        },
        getJobName() {
            let jobShowName = this.getUrlParam("jobShowName") ? this.getUrlParam("jobShowName") : this.getUrlParam("jobName")
            return [this.projectName, this.projectName, this.flowVersion, jobShowName].join("_")
        },

        save() {

        },
        changeInputDsName() {

        },
        changeOutputDsName() {

        }
    },
    mounted() {
        this.projectId = this.getUrlParam("projectId")
        this.projectName = this.getUrlParam("projectName")
        this.jobName = this.getJobName()
        this.inputDsName = this.getUrlParam("inputName")
    },
    updated() {
        this.outputDsName = this.allData.outputs[0]
    }
}
</script>
<style lang="scss">
    .sync {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;

        .op-factories {
            // background: red;
        }

        .sync_header {
            height: 48px;
            padding: 0 15px;
            border-bottom: 1px solid #cccccc;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .header_left {
                display: flex;
                align-items: center;

                img {
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                }

                span {
                    font-size: 20px;
                    color: #000000;
                    letter-spacing: 0.21px;
                    font-weight: 600;
                }
            }

            .header_right {
                /*button {*/
                /*    width: 65px;*/
                /*    height: 26px;*/
                /*    border: 1px solid #57565F;*/
                /*    border-radius: 2px;*/
                /*    background: none;*/
                /*    cursor: pointer;*/
                /*}*/
            }
        }

        .sync_area {
            width: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: row;

            .sync_left {
                flex-grow: 1;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }

            .sync_divider {
                border: 1px solid grey;
            }

            .sync_right {
                flex-grow: 1;
                display: flex;
                flex-direction: row;
                justify-content: space-around;

            }

            .content {
                .content-column {
                    display: flex;
                    flex-direction: column;
                    margin: 50px 50px;

                    span {
                        text-align: left;
                    }

                    select {
                        margin: 30px 0;
                        min-width: 347px;
                        min-height: 53px;
                    }

                    input {
                        margin: 30px 0;
                        min-width: 347px;
                        min-height: 53px;
                    }

                    button {
                        /*margin: 30px 0;*/
                    }
                }

            }

            .content-bottom {
                margin: 30px 0;
            }

            .version-tags-container {
                min-height: 100px;
                border: 1px solid grey;
                display: flex;
                flex-direction: row;

            }
        }
    }
</style>

