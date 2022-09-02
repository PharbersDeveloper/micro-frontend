<template>
    <div class="page_container">
        <div class="show_area">
            <div class="show_header">
                <div class="show_header_left">
                    <input type="text" />
                    <select name="" id=""></select>
                </div>
                <div class="show_header_right">
                    <button>构建DAG</button>
                    <button>脚本</button>
                    <button>数据集</button>
                </div>
            </div>
            <iframe ref="dag" id="dag" class="main_iframe" :src="iframeUrl" frameborder="0"></iframe>
        </div>

        <div class="opt_area">
            <div class="opt_header">
                <img :src="icon_header" alt="" />
                <div class="dataset_name">{{ selectItemName }}</div>
            </div>
            <div class="opt_icon_area">
                <div class="fir_icon_row">
                    <img
                        v-if="!isRunning"
                        :src="defs.iconsByName('run')"
                        alt=""
                        @click="triggerPolicy.runDagSelect()"
                    />
                    <img
                        v-if="isRunning"
                        :src="defs.iconsByName('run', 'disabled')"
                        alt=""
                    />
                    <img
                        v-if="isRunning"
                        :src="defs.iconsByName('stop')"
                        @click="triggerPolicy.stopDag()"
                    />
                    <img
                        v-if="!isRunning"
                        :src="defs.iconsByName('stop', 'disabled')"
                    />
                </div>
            </div>
            <div class="scripts_area">
                <div class="script_title">脚本</div>
                <div class="scripts">
                    <img 
                        v-for="scriptIcon in scriptIconArray"
                        :key="scriptIcon+'icon'"
                        :src="defs.iconsByName(scriptIcon)" alt="" />
                </div>
            </div>
        </div>


        
    </div>
</template>

<script>
import PhCodeditorDatasource from "./model/datasource"
import PhDagDefinitions from "./policy/definitions/definitions";


export default {
    name: 'dag-page',
    components: {
    },
    props: {
        iframeUrl: {
            type: String,
            default: "http://localhost:8080/graph/"
            // default: "https://codeditor.pharbers.com/phcodeditor"
        },
        datasource: {
            type: Object,
            default: function() {
                return new PhCodeditorDatasource('1', this.projectId, this.jobId, this)
            }
        },
        defs: {
            type: Object,
            default: function () {
                return new PhDagDefinitions("1");
            }
        },
        scriptIconArray: {
            type: Array,
            default: function () {
                return ["python", "pyspark", "sparkr", "r", "prepare", "sort", "distinct", "sync", "topn", "join", "stack", "group"]
            }
        }
    },
    data() {
        return {
            isRunning: false, //stop按钮是否可以点击
            downloadCode: 0,
            projectId: "",
            flowVersion: "",
            projectName: "",
            icon_header: "",
            selectItemName: ""
        }
    },
    mounted() {
        // let href = window.location.href
        // let paramArr = href.split("?")[1].split("&")
        // this.projectId = this.getUrlParam(paramArr, "projectId")
        // this.jobId = this.getUrlParam(paramArr, "jobId")
        // //父组件传进来的值
        // this.datasource.jobId = this.jobId //decodeURI(this.jobName)
        // this.datasource.projectId = this.projectId
		// 将datasource注册到window中，iframe传递消息this指向为window
		window["datasource"] = this.datasource
        this.initGraphDag("ggjpDje0HUC2JW", "developer", "demo")

        
    },
    watch: {
    },
    methods: {
        registerEvent() {
			this.unRegisterEvent()
            // 注册获取 Dag 点击 Node 的事件
            window.addEventListener("message", this.datasource.getClickNodeEvent);
            window.addEventListener("message", this.datasource.iframeComplete);
        },
        unRegisterEvent() {
            window.removeEventListener("message", this.datasource.getClickNodeEvent);
            window.removeEventListener("message", this.datasource.iframeComplete);
        },
        initGraphDag(projectId, flowVersion, projectName) {
            const iframe = this.$refs.dag
            iframe.onload = function () {
                iframe.contentWindow.postMessage({
                    dagParameters: {
                        dagId: "dagId",
                        projectId,
                        flowVersion,
                        projectName
                    }
                }, "*")
            }
            this.registerEvent()
        },
        getUrlParam(arr, value) {
            let data = arr.find(item => item.indexOf(value) > -1)
            return data ? decodeURI(data).split("=")[1] : undefined
        },
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
            arr = document.cookie.match(reg)
            if (arr) return (arr[2])
            else return null
        },
    },
    beforeDestroy() {
        this.unRegisterEvent()
    }
}
</script>

<style lang='scss' scoped>
.page_container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    
    .show_area {
        width: 100%;
        height: 100%;
        padding: 10px;
        .show_header {
            display: flex;
            justify-content: space-between;
            padding: 20px 10px;
            input,
            button {
                margin: 0 10px;
            }
        }
    }

    .opt_area {
        width: 300px;
        height: calc(100vh - 40px);
        background: #f5f5f5;
        border-left: 1px solid #979797;
        display: flex;
        flex-direction: column;
        .opt_header {
            display: flex;
            height: 40px;
            align-items: center;
            background: #fff;
            border-bottom: 1px solid #ccc;
            .dataset_name {
                width: 180px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            img {
                width: 40px;
                height: 40px;
                margin-right: 10px;
            }
        }
        .opt_icon_area {
            padding: 20px;
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            border-bottom: 1px solid #ccc;
            img {
                width: 25px;
                height: 25px;
                margin: 10px;
                cursor: pointer;
            }
        }
        .data_id_area {
            height: 190px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            padding: 20px;
            .data_id_opt {
                .data_id_sel {
                    width: 150px;
                    height: 20px;
                    margin-left: 30px;
                    margin-top: 10px;
                }
            }
            .run_btn {
                display: flex;
                justify-content: flex-end;
                button {
                    width: 80px;
                    height: 24px;
                    background: #ececed;
                    border-radius: 2px;
                    border: none;
                    color: #bcbac4;
                }
            }
        }
        .scripts_area {
            padding: 20px;
            .scripts_title {
                font-family: PingFangSC-Medium;
                font-size: 12px;
                color: #000000;
                text-align: center;
                font-weight: bold;
            }
            .scripts {
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                img {
                    width: 40px;
                    height: 40px;
                    margin: 5px;
                }
            }
        }
    }

    .main_iframe {
        width: 100vw;
        height: calc(100vh - 50px);
    }
}
</style>
