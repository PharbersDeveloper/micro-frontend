<template>
    <div class="dag-page">
        <div class="dag-header">
            <span class="header-text">DAG</span>
            <button>返回列表</button>
        </div>
        
        <div class="dag-main-container">

        </div>
        <bp-dag :dag="dag"></bp-dag>

        <div class="dag-run-container">
            <div class="toggle-panel">
                <div class="icon_chevron-right icon"></div>
            </div>

            <div class="dag-run-content">
                <div class="run-button-container">
                    <button :class="buttonState" @click="runDag">
                        <div class="icon"></div>
                        <span class="run-text">RUN</span>
                    </button>

                    <div v-if="runState" class="run-state-container">
                        <div :class="runIconClass"></div>
                        <span :class="runTextClass">{{runState}}</span>
                    </div>
                </div>

                <div class="dag-message-contaner">
                    <span class="task-id margin-bottom-20">Task_ID:data_matching_cleaning_data_normalization</span>
                    <div class="status-container margin-bottom-20">
                        <span class="heading-small mr-0">Status:</span>
                        <span class="body-tertiary">no_status</span>
                    </div>
                    <div class="run-container mb-2">
                        <span class="heading-small">Run:</span>
                        <span class="body-default">2021-4-29,15:13:24</span>
                    </div>
                    <div class="run-container mb-2">
                        <span class="heading-small">Started:</span>
                        <span class="body-default">2021-4-29,15:13:24</span>
                    </div>
                    <div class="run-container mb-2">
                        <span class="heading-small">Duration:</span>
                        <span class="body-default">1 Hours 10 Min 29.080 Sec</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bpDag from '../bp-dag.vue'
export default {
    components: {
        bpDag
    },
    data() {
        return {
            dag: null,
            startReturn: null,
            dagStatus: null,
            states: ['queued', 'running', 'success', 'failed', 'up_for_retry', 'up_for_reschedule', 'upstream_failed', 'skipped', 'scheduled', 'no_status'],
            buttonState: "finished"
        }
    },
    computed: {
        runState() {
            if (this.buttonState === "default") {
                return
            } else if (this.buttonState === "running") {
                return "Running"
            } else if (this.buttonState === "finished") {
                return "Finished"
            }
        },
        runIconClass() {
            if (this.buttonState === "default") {
                return
            } else if (this.buttonState === "running") {
                return "icon_running"
            } else if (this.buttonState === "finished") {
                return "icon_finished"
            }
        },
        runTextClass() {
            if (this.buttonState === "default") {
                return
            } else if (this.buttonState === "running") {
                return "running-text"
            } else if (this.buttonState === "finished") {
                return "finished-text"
            }
        }
    },
    created() {
        let that = this
        
        fetch("ETL_Iterator.json").then(res => res.json())
            .then(data => {
                that.dag = data
            })
        
    },
    methods: {
        runDag() {
            const accessToken = "bc3679bab4e87dca0dc28bf4716fd0ee7d59582ce9bc744556f1a50d8e41b229"
            const startBody = {
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

            fetch("https://api.pharbers.com/phstartetl", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/vnd.api+json",
                    "Accept": "application/vnd.api+json",
                    "Authorization": accessToken
                },
                body: JSON.stringify(startBody)
            }).then(res => res.json())
                .then(data => {
                    this.startReturn = data
                    storage.setItem("startReturn", JSON.stringify(data))
                    this.cycle()
                })
        },
        checkDagStatus() {
            const accessToken = "bc3679bab4e87dca0dc28bf4716fd0ee7d59582ce9bc744556f1a50d8e41b229"
            let storage = window.localStorage
            if ( storage.getItem("startReturn") ) {
                fetch("https://api.pharbers.com/phstepstatus", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/vnd.api+json",
                        "Accept": "application/vnd.api+json",
                        "Authorization": accessToken
                    },
                    body: storage.getItem("startReturn")
                }).then(res => res.json())
                    .then(data => {
                        this.dagStatus = data
                        console.log(this.dagStatus);
                    })
            }
        },
        cycle() {
            let storage = window.localStorage
            let that = this

            that.checkDagStatus()
            let cycleCheckDagStatus = setInterval(function() {
                that.checkDagStatus()

                if (!storage.getItem("startReturn")) {
                    clearInterval(cycleCheckDagStatus)
                }
                else if (that.dagStatus && that.dagStatus.execution_status !== "RUNNING") {
                    storage.removeItem("startReturn")
                    

                    clearInterval(cycleCheckDagStatus)
                }
            },60000)
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
        font-family: SFProText-Regular;
        font-size: 14px;
        color: #25232D;
        letter-spacing: 0.25px;
        text-align: left;
        line-height: 20px;
        font-weight: 400;
    }

    @mixin body-tertiary {
        font-family: SFProText-Light;
        font-size: 12px;
        color: #706F79;
        letter-spacing: 0.25px;
        text-align: center;
        line-height: 16px;
        font-weight: 200;
    }

    .body-tertiary {
        font-family: SFProText-Light;
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

    .icon_chevron-right {
        width: 20px;
        height: 20px;
        background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.825 14.867L13 10 7.825 5.133a.505.505 0 0 0-.683 0 .435.435 0 0 0-.056.58l.056.063L11.633 10l-4.491 4.224a.435.435 0 0 0-.056.58l.056.063a.507.507 0 0 0 .616.052l.067-.052z' fill='%2357565F' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center/100%;
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

    .icon_finished {
        width: 32px;
        height: 32px;
        background: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h32v32H0z'/%3E%3Cpath d='M16 8c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zm0 1c-3.864 0-7 3.136-7 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm4.354 3.646a.5.5 0 0 1 .057.638l-.057.07-5.854 5.853-2.854-2.853a.5.5 0 0 1 .638-.765l.07.057 2.146 2.147 5.146-5.147a.5.5 0 0 1 .708 0z' fill='%2323A959' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E") no-repeat center/100%;
    }

    .icon_running {
        width: 32px;
        height: 32px;
        background: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h32v32H0z'/%3E%3Cpath d='M15.833 10.587v2.752L19.5 9.67 15.833 6v2.752a7.334 7.334 0 0 0-7.333 7.34c0 1.44.422 2.78 1.137 3.908l1.338-1.34a5.39 5.39 0 0 1-.642-2.568 5.507 5.507 0 0 1 5.5-5.505zM22.363 12l-1.338 1.34c.403.77.642 1.642.642 2.568a5.507 5.507 0 0 1-5.5 5.505V18.66L12.5 22.33 16.167 26v-2.752a7.334 7.334 0 0 0 7.333-7.34A7.28 7.28 0 0 0 22.363 12z' fill='%237163C5'/%3E%3C/g%3E%3C/svg%3E") no-repeat center/100%;
    }

    .running-text {
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #7163C5;
        letter-spacing: 0.25px;
        text-align: right;
        font-weight: 200;
    }

    .finished-text {
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #23A959;
        letter-spacing: 0.25px;
        text-align: right;
        font-weight: 200;
    }

    

    .dag-page {
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        position: relative;
        &::-webkit-scrollbar { 
            width: 0 !important;
            display: none;
        }
        -ms-overflow-style: none;

        .dag-header {
            display: flex;
            justify-content: space-between;
            height: 58px;
            border-bottom: 1px solid rgba(37,35,45,0.08);
            padding: 0 20px;
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
                margin-top: 16px;
            }
        }

        .dag-run-container {
            display: flex;
            position: absolute;
            width: 295px;
            height: calc(100% - 58px);
            top: 58px;
            right: 0;

            .toggle-panel {
                width: 40px;
                height: 100%;
                display: flex;
                justify-content: center;
                border-left: 1px solid rgba(37,35,45,0.08);
                border-right: 1px solid rgba(37,35,45,0.08);

                .icon {
                    margin: 15px 10px 0 10px;
                    cursor: pointer;
                }
            }

            .dag-run-content {
                display: flex;
                flex-direction: column;
                width: 255px;
                padding: 0 20px;

                .run-button-container {
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    border-bottom: 1px solid rgba(37,35,45,0.08);

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

                    button.default {
                        margin-bottom: 20px;
                    }

                    button.default,
                    button.finished {
                        background: #7163C5;

                        .icon {
                            @include icon_play-white;
                        }

                        .run-text {
                            @include btn_primary-initial;
                        }
                    }

                    button.running {
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

                .dag-message-contaner {
                    // overflow: hidden;
                    width: 100%;
                    margin-top: 10px;

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
            }
        }
    }
</style>