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

        </div>
    </div>
</template>
<script>
import PhDagDefinitions from './policy/definitions/definitions'
// import ElButton from 'element-ui/packages/button/index'
// import ElInput from 'element-ui/packages/input/index'

export default {
    components: {
        // ElButton,
        // ElInput,
    },
    data() {
        return {

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
                flex-grow: 1;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }

            .topn_divider {
                border: 1px solid grey;
            }

            .topn_right {
                flex-grow: 1;
                display: flex;
                flex-direction: row;
                justify-content: space-around;

            }
        }
    }
</style>

