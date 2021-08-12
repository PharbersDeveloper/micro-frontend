<template>
    <div class="dag-page">
        <div class="dag-header">
            <span class="header-text">{{allData.dagDetail.name}}</span>
            <button @click="linkToPage">返回列表</button>
        </div>
        <div class="dag-main-container">
            <bp-dag :dag="dag" :succeed_step="succeed_step" :task_id="task_id" :status="this.maxButtonState" :domid="domid"></bp-dag>
            <div class="dag-run-container">
                <div class="toggle-panel">
                    <div :class="toggleIcon" class="icon" @click="togglePanel"></div>
                </div>

                <div v-if="togglePanelId" class="dag-run-content">
                    <div class="run-button-container">
                        <button :class="maxButtonState ? maxButtonState : 'DEFAULT'" @click="runDag" :disabled="maxButtonState === 'RUNNING'">
                            <div class="icon"></div>
                            <span class="run-text">RUN</span>
                        </button>

                        <div v-if="runState" class="run-state-container">
                            <div :class="runIconClass"></div>
                            <span :class="runTextClass">{{runState}}</span>
                        </div>
                    </div>

                    <div class="dag-message-switch">
                        <span class="heading-small">属性详情</span>
                        <div class="icon" :class="dagMessageIcon" @click="dagMessageId = !dagMessageId"></div>
                    </div>
                    <div v-if="dagMessageId" class="dag-message-contaner">
                        <span class="task-id margin-bottom-20">Task_ID:{{task_id}}</span>
                        <div class="status-container margin-bottom-20">
                            <span class="heading-small mr-0">Status:</span>
                            <span class="body-tertiary">{{status}}</span>
                        </div>
                        <div class="run-container mb-2">
                            <span class="heading-small">Started:</span>
                            <span class="body-default">{{started}}</span>
                        </div>
                        <div class="run-container">
                            <span class="heading-small">Duration:</span>
                            <span class="body-default">{{duration}}</span>
                        </div>
                    </div>

                    <div class="space-line"></div>
                    <div class="dag-plugin-application-switch">
                        <span class="heading-small">插件应用</span>
                        <div class="icon" :class="dagPluginIcon" @click="dagPluginId = !dagPluginId"></div>
                    </div>

                    <div v-if="dagPluginId" class="dag-plugin-application-container">
                        <div class="dag-single-plugin-container" @click="openUploadWindow = true">
                            <div class="dag-single-plugin-icon">
                                <div class="icon icon_project-avatar"></div>
                            </div>
                            <span class="body-tertiary">上传文件</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <upload-file v-if="openUploadWindow" @closeUploadWindow="openUploadWindow = false"></upload-file>
    </div>
</template>

<script>
import bpDag from '../bp-dag.vue'
import uploadFile from '../upload-file.vue'
export default {
    components: {
        bpDag,
        uploadFile
    },
    data() {
        return {
            // dag: null,
            dagData: null,
            startReturn: null,
            dagStatus: null,
            cycleCheckDagStatus: null,
            togglePanelId: true,
            dagMessageId: true,
            dagPluginId: true,
            maxButtonState: "",
            task_id: "",
            status: "",
            started: "",
            duration: "",
            succeed_step: [],
            openUploadWindow: false
        }
    },
    props: {
        domid: String,
        allData: {
            type: Object,
            default: function() {
                return {
                    dagDetail: {
                        meta: {}
                    }
                }
            }
        } 
    },
    computed: {
        dag() {
            if(this.allData.dagDetail.meta.define) {
                this.dagData = JSON.parse(this.allData.dagDetail.meta.define)
                this.cycle()
            }
            console.log(this.dagData)
            return this.dagData
        },
        runState() {
            if (!this.maxButtonState) {
                this.status = "no_status"
                return
            } else {
                this.status = this.maxButtonState.toLowerCase()
                return this.maxButtonState
            }
        },
        runIconClass() {
            if (!this.maxButtonState) {
                return
            } else {
                return `icon_${this.maxButtonState}`
            }
        },
        runTextClass() {
            if (!this.maxButtonState) {
                return
            } else {
                return `${this.maxButtonState}-text`
            }
        },
        toggleIcon() {
            if (this.togglePanelId) {
                return "icon_chevron-right"
            } else {
                return "icon_chevron-left"
            }
        },
        dagMessageIcon() {
            if (this.dagMessageId) {
                return "icon_chevron-up"
            } else {
                return "icon_chevron-down"
            }
        },
        dagPluginIcon() {
            if (this.dagPluginId) {
                return "icon_chevron-up"
            } else {
                return "icon_chevron-down"
            }
        }
    },
    created() {
        // fetch("https://components.pharbers.com/jsonfile/ETL_Iterator.json").then(res => res.json())
        //     .then(data => {
        //         this.dag = data
        //     })
    },
    methods: {
        async runDag() {
            const accessToken = this.getCookie("access_token") || "0496838737ea3ef3227e39dcce5286065d7c90bf10cd63705cf016ebbc76898c"
            const startBody = {
                "dag_name": "ETL_Iterator",
                "parameters": [
                    {
                        "p_input": "s3://ph-max-auto/v0.0.1-2020-06-08/Common_files/extract_data_files/MAX_city_normalize.csv",
                        "p_output": "s3://ph-platform/2020-11-11/etl/readable_files/test",
                        "g_partition": "provider, version",
                        "g_filldefalut": "provider:common,version:20210623_u0079u0079u0077,owner:pharbers",
                        "g_bucket": "NONE",
                        "g_mapping": "NONE",
                        "type": "csv"
                    },
                    {
                        "p_input": "s3://ph-max-auto/v0.0.1-2020-06-08/奥鸿/202012/prod_mapping",
                        "p_output": "s3://ph-platform/2020-11-11/etl/readable_files/test",
                        "g_partition": "provider, version",
                        "g_filldefalut": "provider:奥鸿,version:202012_u0079u0079u0077,owner:pharbers",
                        "g_bucket": "NONE",
                        "g_mapping": "NONE",
                        "type": "parquet"
                    }
                ]
            }
            let storage = window.localStorage

            // 只要点击了run就必然先改变样式的状态为running
            this.maxButtonState = "RUNNING"
            this.task_id = "START"
            this.duration = ""

            let response = await fetch("https://api.pharbers.com/phstartetl", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/vnd.api+json",
                    "Accept": "application/vnd.api+json",
                    "Authorization": accessToken
                },
                body: JSON.stringify(startBody)
            })
            this.startReturn = await response.json()
            storage.setItem("startReturn", JSON.stringify(this.startReturn))
            this.cycle()
        },
        async checkDagStatus() {
            const accessToken = this.getCookie("access_token") || "0496838737ea3ef3227e39dcce5286065d7c90bf10cd63705cf016ebbc76898c"
            let storage = window.localStorage
            if ( storage.getItem("startReturn") ) {
                let response = await fetch("https://api.pharbers.com/phstepstatus", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/vnd.api+json",
                        "Accept": "application/vnd.api+json",
                        "Authorization": accessToken
                    },
                    body: storage.getItem("startReturn")
                })
                this.dagStatus = await response.json()
                this.maxButtonState = this.dagStatus.execution_status
                this.started = this.formatDateStandard(this.dagStatus.execution_startDate)
                if ( this.dagStatus.execution_status === "RUNNING" && !this.dagStatus.steps.length ) {
                    this.task_id = "START"
                } else if ( this.dagStatus.execution_status === "SUCCEEDED" && !this.dagStatus.steps.length ) {
                    this.task_id = "END"
                } else {
                    this.task_id = this.dagStatus.steps[0]
                }
                this.succeed_step = Array.from(new Set(this.dagStatus.succeed_step))

                if (this.dagStatus.execution_stopDate) {
                    this.duration = this.formatDateDuration(new Date(this.dagStatus.execution_stopDate) - new Date(this.dagStatus.execution_startDate))
                }

                if (this.dagStatus.execution_status !== "RUNNING") {
                    storage.removeItem("startReturn")
                    clearInterval(this.cycleCheckDagStatus)
                }
            } else {
                clearInterval(this.cycleCheckDagStatus)
            }
        },
        cycle() {
            let storage = window.localStorage
            let that = this

            if ( storage.getItem("startReturn") ) {
                this.checkDagStatus()
                this.cycleCheckDagStatus = setInterval(function() {
                    that.checkDagStatus()
                },60000)
            }
        },
        togglePanel() {
            this.togglePanelId = !this.togglePanelId
        },
        formatDateStandard(params) {
            let date = new Date( params ),
                Y = date.getFullYear(),
                M =
                    ( date.getMonth() + 1 < 10 ?
                        `0${date.getMonth() + 1}` :
                        date.getMonth() + 1 ),
                D = ( date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() ),

                h =
                    ( date.getHours() < 10 ? `0${date.getHours()}` : date.getHours() ),
                m =
                    ( date.getMinutes() < 10 ?
                        `0${date.getMinutes()}` :
                        date.getMinutes() ) ,
                s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

            return Y + "-" + M + "-" + D + "," + h + ":" + m + ":" + s
        },
        formatDateDuration(result) {
            var h = Math.floor(result / 3600000);
            var m = Math.floor((result % 3600000 / 60000));
            var s = Math.floor((result % 60000 / 1000));
            return h + " Hours " + m + " Min " + s + " Sec";
        },
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        },
        linkToPage() {
            const event = new Event("event")
            event.args = {
                callback: "linkToPage",
                element: this,
                param: {
                    name: '/download/project',
                    route: 'max'
                }
            }
            this.$emit('event', event)
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    span {
        display:block;
    }
    .margin-bottom-20 {
        margin-bottom: 20px;
    }
    .mr-0 {
        margin-right: 2px;
    }
    .mb-2 {
        margin-bottom: 8px;
    }
    @mixin heading-large {
        font-family: SFProText-Regular;
        font-size: 20px;
        color: #25232D;
        letter-spacing: 0.25px;
        line-height: 28px;
        font-weight: 400;
    }

    @mixin btn_secondary_initial {
        font-family: SFProText-Medium;
        font-size: 14px;
        color: #57565F;
        letter-spacing: 0;
        text-align: center;
        line-height: 20px;
        font-weight: 500;
    }

    .body-default {
        font-family: SFProText-Light;
        font-size: 12px;
        color: #706F79;
        letter-spacing: 0.25px;
        line-height: 16px;
        font-weight: 200;
    }

    .heading-small {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #25232D;
        letter-spacing: 0.25px;
        text-align: left;
        line-height: 20px;
        font-weight: 400;
    }

    @mixin body-tertiary {
        font-family: PingFangSC-Light;
        font-size: 12px;
        color: #706F79;
        letter-spacing: 0.25px;
        text-align: center;
        line-height: 16px;
        font-weight: 200;
    }

    .body-tertiary {
        font-family: PingFangSC-Light;
        font-size: 12px;
        color: #706F79;
        letter-spacing: 0.25px;
        text-align: center;
        line-height: 16px;
        font-weight: 200;
    }

    @mixin btn_primary-initial {
        font-family: SFProText-Medium;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 20px;
        font-weight: 500;
    }

    @mixin btn_disabled {
        font-family: SFProText-Medium;
        font-size: 14px;
        color: #BCBAC4;
        text-align: center;
        line-height: 20px;
        font-weight: 500;
    }

    .icon_chevron-up {
        width: 20px;
        height: 20px;
        background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.133 12.175L10 7l4.867 5.175a.505.505 0 0 1 0 .683.435.435 0 0 1-.58.056l-.063-.056L10 8.367l-4.224 4.491a.435.435 0 0 1-.58.056l-.063-.056a.507.507 0 0 1-.052-.616l.052-.067z' fill='%2357565F' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center/100% !important; 
    }

    .icon_chevron-down {
        width: 20px;
        height: 20px;
        background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.133 7.825L10 13l4.867-5.175a.505.505 0 0 0 0-.683.435.435 0 0 0-.58-.056l-.063.056L10 11.633 5.776 7.142a.435.435 0 0 0-.58-.056l-.063.056a.507.507 0 0 0-.052.616l.052.067z' fill='%2357565F' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center/100% !important; 
    }

    .icon_chevron-left {
        width: 20px;
        height: 20px;
        background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.175 14.867L7 10l5.175-4.867a.505.505 0 0 1 .683 0 .435.435 0 0 1 .056.58l-.056.063L8.367 10l4.491 4.224a.435.435 0 0 1 .056.58l-.056.063a.507.507 0 0 1-.616.052l-.067-.052z' fill='%2357565F' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center/100% !important; 
    }

    .icon_chevron-right {
        width: 20px;
        height: 20px;
        background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.825 14.867L13 10 7.825 5.133a.505.505 0 0 0-.683 0 .435.435 0 0 0-.056.58l.056.063L11.633 10l-4.491 4.224a.435.435 0 0 0-.056.58l.056.063a.507.507 0 0 0 .616.052l.067-.052z' fill='%2357565F' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center/100%;
    }

    .icon_project-avatar {
        width: 20px;
        height: 20px;
        background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M4 2h12a1 1 0 0 1 1 1v11l-4.083 4H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z' fill='%23FFFFFF'/%3E%3Cpath d='M10 9v1H5V9h5zm4-3v1H5V6h9z' fill='%23A3A1AB'/%3E%3C/g%3E%3C/svg%3E") no-repeat center/100%;
    }

    @mixin icon_play-white {
        width: 20px;
        height: 20px;
        background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 2.524v14.952a.521.521 0 0 0 .776.455l12.963-7.476a.526.526 0 0 0 0-.91L4.776 2.07A.516.516 0 0 0 4 2.524z' fill='%23FFFFFF' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center/100%;
    }

    @mixin icon_play-gray {
        width: 20px;
        height: 20px;
        background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 2.524v14.952a.521.521 0 0 0 .776.455l12.963-7.476a.526.526 0 0 0 0-.91L4.776 2.07A.516.516 0 0 0 4 2.524z' fill='%23BCBAC4' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center/100%;
    }

    .icon_SUCCEEDED {
        width: 32px;
        height: 32px;
        background: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h32v32H0z'/%3E%3Cpath d='M16 8c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zm0 1c-3.864 0-7 3.136-7 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm4.354 3.646a.5.5 0 0 1 .057.638l-.057.07-5.854 5.853-2.854-2.853a.5.5 0 0 1 .638-.765l.07.057 2.146 2.147 5.146-5.147a.5.5 0 0 1 .708 0z' fill='%2323A959' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E") no-repeat center/100%;
    }

    .icon_RUNNING {
        width: 32px;
        height: 32px;
        background: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h32v32H0z'/%3E%3Cpath d='M15.833 10.587v2.752L19.5 9.67 15.833 6v2.752a7.334 7.334 0 0 0-7.333 7.34c0 1.44.422 2.78 1.137 3.908l1.338-1.34a5.39 5.39 0 0 1-.642-2.568 5.507 5.507 0 0 1 5.5-5.505zM22.363 12l-1.338 1.34c.403.77.642 1.642.642 2.568a5.507 5.507 0 0 1-5.5 5.505V18.66L12.5 22.33 16.167 26v-2.752a7.334 7.334 0 0 0 7.333-7.34A7.28 7.28 0 0 0 22.363 12z' fill='%237163C5'/%3E%3C/g%3E%3C/svg%3E") no-repeat center/100%;
    }

    .icon_FAILED {
        width: 32px;
        height: 32px;
        background: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h32v32H0z'/%3E%3Cpath d='M16 8c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zm0 1c-3.864 0-7 3.136-7 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm-3.073 3.16L16 15.231l3.073-3.073a.543.543 0 1 1 .768.768L16.768 16l3.073 3.073a.543.543 0 1 1-.768.768l-3.074-3.074-3.072 3.074a.543.543 0 1 1-.768-.768l3.072-3.074-3.072-3.072a.543.543 0 1 1 .768-.768z' fill='%23DB4D71' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E") no-repeat center/100%;
    }

    .icon_TIMED_OUT {
        width: 32px;
        height: 32px;
        background: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h32v32H0z'/%3E%3Cpath d='M16 8c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zm0 1c-3.864 0-7 3.136-7 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm0 5.5a.5.5 0 0 1 .492.41l.008.09v4l-.008.09a.5.5 0 0 1-.984 0L15.5 19v-4l.008-.09A.5.5 0 0 1 16 14.5zm0-2.5a.5.5 0 0 1 .492.41l.008.09v.5l-.008.09a.5.5 0 0 1-.984 0L15.5 13v-.5l.008-.09A.5.5 0 0 1 16 12z' fill='%23E0C00B'/%3E%3C/g%3E%3C/svg%3E") no-repeat center/100%;
    }

    .icon_ABORTED {
        width: 32px;
        height: 32px;
        background: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h32v32H0z'/%3E%3Cpath d='M16 8c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zm0 1c-3.864 0-7 3.136-7 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm3.5 6.5a.5.5 0 1 1 0 1h-7a.5.5 0 1 1 0-1h7z' fill='%23DB4D71'/%3E%3C/g%3E%3C/svg%3E") no-repeat center/100%;
    }

    .RUNNING-text {
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #7163C5;
        letter-spacing: 0.25px;
        text-align: right;
        font-weight: 200;
    }

    .SUCCEEDED-text {
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #23A959;
        letter-spacing: 0.25px;
        text-align: right;
        font-weight: 200;
    }

    .FAILED-text {
        font-family: SFProText-Light;
        font-size: 14px;
        color: #DB4D71;
        letter-spacing: 0.25px;
        text-align: right;
        line-height: 20px;
        font-weight: 200;
    }

    .TIMED_OUT-text {
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #E0C00B;
        letter-spacing: 0.25px;
        font-weight: 200;
    }

    .ABORTED-text {
        font-family: SFProText-Light;
        font-size: 14px;
        color: #DB4D71;
        letter-spacing: 0.25px;
        line-height: 20px;
        font-weight: 200;
    }

    .dag-page {
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        &::-webkit-scrollbar { 
            width: 0 !important;
            display: none;
        }
        -ms-overflow-style: none;

        .dag-header {
            display: flex;
            justify-content: space-between;
            height: 72px;
            border-bottom: 1px solid rgba(37,35,45,0.08);
            padding: 0 20px;
            flex-shrink: 0;
            
            .header-text {
                @include heading-large;
                margin-top: 20px;
            }

            button {
                width: 80px;
                height: 32px;
                background: rgba(37, 35, 45, 0.04);
                border-radius: 2px;
                border: none;
                cursor: pointer;
                @include btn_secondary_initial;
                margin-top: 20px;
            }
        }

        .dag-main-container {
            height: 100%;
            display: flex;

            .phdag {
                min-width: 863px;
                height: 288px;
                overflow-y: hidden;
                flex: 1;
                border: 1px solid rgba(37,35,45,0.12);
                border-radius: 2px;
                margin: 20px;
            }

            .dag-run-container {
                display: flex;
                // width: 295px;
                height: 100%;

                .toggle-panel {
                    width: 42px;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    border-left: 1px solid rgba(37,35,45,0.08);
                    border-right: 1px solid rgba(37,35,45,0.08);

                    .icon {
                        margin: 15px 10px 0 10px;
                        cursor: pointer;
                        user-select: none;
                    }
                }

                .dag-run-content {
                    display: flex;
                    flex-direction: column;
                    width: 255px;

                    .run-button-container {
                        display: flex;
                        width: 100%;
                        flex-direction: column;
                        border-bottom: 1px solid rgba(37,35,45,0.08);
                        padding: 0 20px;

                        button {
                            width: 215px;
                            height: 40px;
                            border-radius: 2px;
                            border: none;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-top: 20px;
                            padding: 0;
                            cursor: pointer;

                            .icon {
                                margin-right: 4px;
                            }
                        }
                        
                        button:disabled {
                            cursor: not-allowed;
                        }

                        button.DEFAULT {
                            margin-bottom: 20px;
                        }

                        button.DEFAULT,
                        button.SUCCEEDED,
                        button.FAILED,
                        button.TIMED_OUT,
                        button.ABORTED {
                            background: #7163C5;

                            .icon {
                                @include icon_play-white;
                            }

                            .run-text {
                                @include btn_primary-initial;
                            }
                        }

                        button.RUNNING {
                            background: rgba(37, 35, 45, 0.04);

                            .icon {
                                @include icon_play-gray;
                            }

                            .run-text {
                                @include btn_disabled;
                            }
                        }

                        .run-state-container {
                            display: flex;
                            align-items: center;
                            margin: 7px 0 10px 8px;
                        }
                    }

                    .dag-message-switch {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 10px;
                        padding: 0 20px;

                        .icon {
                            cursor: pointer;
                            user-select: none;
                        }
                    }

                    .dag-message-contaner {
                        width: 100%;
                        margin-top: 20px;
                        padding: 0 20px;

                        .task-id {
                            width: 100%;
                            word-wrap: break-word;
                            margin-bottom: 20px;
                            font-family: SFProText-Regular;
                            font-size: 16px;
                            color: #25232D;
                            letter-spacing: 0.25px;
                            line-height: 24px;
                            font-weight: 400;
                        }

                        .status-container {
                            display: flex;
                            align-items: center;
                        }

                        .run-container {
                            display: flex;
                            flex-direction: column;
                        }
                    }

                    .space-line {
                        height: 1px;
                        width: 100%;
                        background: rgba(0, 0, 0, 0.08);
                        margin-top: 20px;
                    }

                    .dag-plugin-application-switch {
                        display: flex;
                        justify-content: space-between;
                        margin: 10px 0 20px 0;
                        padding: 0 20px;
                        
                        .icon {
                            cursor: pointer;
                            user-select: none;
                        }
                    }

                    .dag-plugin-application-container {
                        display: flex;
                        width: 100%;
                        padding: 0 20px;
                        

                        .dag-single-plugin-container {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            cursor: pointer;

                            .dag-single-plugin-icon {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                width: 32px;
                                height: 32px;
                                background: #7163C5;
                                border-radius: 2px;
                                margin-bottom: 4px;

                                .icon {
                                    user-select: none;
                                }
                            }
                        }
                    }
                }
            }
        }
        
    }
</style>