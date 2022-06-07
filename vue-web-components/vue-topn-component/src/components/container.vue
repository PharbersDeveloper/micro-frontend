<template>
    <div class="topn">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="topn_header">
            <div class="header_left">
                <!-- 需要一个sync 的icon @wodelu -->
                <img :src="defs.iconsByName('topn')" alt="" />
                <span>Top N</span>
            </div>
            <div class="header_right">
                <el-button class="save" @click="save">保存</el-button>
            </div>
        </div>
        <div class="topn_area">
            <div class="topn_left">
                <el-steps direction="vertical" :active="active" align-center>
                    <el-step >
                        <template slot="title">
                            <el-button type="text" @click="active = 1">Pre-Filter</el-button>
                        </template>
                    </el-step>
                    <el-step >
                        <template slot="title">
                            <el-button type="text" @click="active = 2">Computed Columns</el-button>
                        </template>
                    </el-step>
                    <el-step >
                        <template slot="title">
                            <el-button type="text" @click="active = 3">Top N</el-button>
                        </template>
                    </el-step>
                    <el-step >
                        <template slot="title">
                            <el-button type="text" @click="active = 4">Retrieved Columns</el-button>
                        </template>
                    </el-step>
                    <el-step >
                        <template slot="title">
                            <el-button type="text" @click="active = 5">Outputs</el-button>
                        </template>
                    </el-step>
                </el-steps>
            </div>
            <div class="topn_right">
                <pre-filter></pre-filter>
            </div>
        </div>
    </div>
</template>
<script>
import PhDagDefinitions from './policy/definitions/definitions'
import ElSteps from 'element-ui/packages/steps/index'
import ElStep from 'element-ui/packages/step/index'
import ElButton from 'element-ui/packages/button/index'
import PreFilter from './steps/commands/pre-filter/view'

export default {
    components: {
        ElSteps,
        ElStep,
        ElButton,
        PreFilter
    },
    data() {
        return {
            active: 1
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

    },
    mounted() {
        // this.projectId = this.getUrlParam("projectId")
        // this.projectName = this.getUrlParam("projectName")
        // this.jobName = this.getJobName()
        // this.inputDsName = this.getUrlParam("inputName")
    },
    updated() {

    }
}
</script>
<style lang="scss">
    .topn {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;

        .op-factories {
            // background: red;
        }

        .topn_header {
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

        .topn_area {
            width: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: row;

            .topn_left {
                display: flex;
                flex-direction: row;
                margin-left: 80px;
                justify-content: space-around;
            }

            .topn_right {
                display: flex;
                flex-grow: 1;
                flex-direction: row;
                justify-content: space-around;

            }
        }
    }
</style>

