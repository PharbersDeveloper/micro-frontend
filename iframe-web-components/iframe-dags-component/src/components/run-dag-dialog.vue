<template>
    <div>
        <div class="clear_dialog_container">
            <div class="dialog_area">
                <div class="header">
                        <span>运行</span>
                </div>
                <div class="prompt" v-show="steps === 0">
                    <span>数据版本参数</span>
                    <!-- <textarea name="runJson" id=""  cols="30" rows="10" class="run_json" v-model="datasetsConf"></textarea> -->
                    <div class="data_version">
                        <table>
                            <tr>
                                <th class="input">input数据集</th>
                                <th class="version">数据版本</th>
                                <th class="cat">Category</th>
                            </tr>
                            <tr v-for="(item, index) in datasetsConf" :key="index">
                                <td class="input" :title="item.name">{{item.name}}</td>
                                <td class="version" >
                                    <span :title="item.version.toString()">{{item.version.toString()}}</span>
                                    <img v-if="item.cat === 'uploaded'" class="add_version" src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E5%8A%A0%E5%8F%B7.svg" @click="addVersion(item.name, item.version)"/>
                                </td>
                                <td class="cat">{{item.cat}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="prompt" v-show="steps === 1">
                    <span>低代码脚本参数</span>
                    <textarea name="runJson" disabled id="" cols="30" rows="10" class="run_json" v-model="scriptsConf"></textarea>
                </div>
                <div class="prompt" v-show="steps === 2">
                    <span>用户配置参数</span>
                    <textarea name="runJson" id="" cols="30" rows="10" class="run_json" v-model="userConf"></textarea>
                </div>
                <div class="btn">
                    <div class="timeout">
                        <div class="title">超时时间: </div>
                        <select name="time" id="" v-model="selectTimeout">
                            <option value="60mins">60mins</option>
                        </select>
                    </div>
                    <div class="">
                        <button class="cancel" @click="close">取消</button>
                        <button class="save btn-margin" v-show="steps !== 0" @click="back">上一步</button>
                        <button class="save btn-margin" @click="next" v-show="steps !== 2">下一步</button>
                        <button class="save btn-margin" @click="save"  v-show="steps === 2">确定</button>
                    </div>
              </div>
            </div>
        </div>
        <select-version 
            v-if="selectDataVersion"
            @closeSelVersionDialog="closeSelVersionDialog"
            @selectVersionConfirm="selectVersionConfirm"
            :projectId="projectId"
            :dsVersion="dsVersion"
            :datasetName="dsName"
        ></select-version>
    </div>
</template>

<script>
import selectVersion from "./select-version.vue"

export default {
    data() {
        return{
            selectTimeout: "60mins",
            jsonValue: "",
            steps: 0,
            datasetsConf: "",
            scriptsConf: "",
            userConf: "",
            selectDataVersion: false,
            dsName: "",
            dsVersion: []
        }
    },
    props: {
        textConf: Object,
        projectId: String
    },
    components: {
        selectVersion
    },
    computed: {},
    mounted() {
        this.jsonValue = JSON.stringify(this.textConf)
        this.datasetsConf = this.textConf.datasets
        this.scriptsConf = JSON.stringify(this.textConf.scripts)
        this.userConf = JSON.stringify(this.textConf.userConf)
    },
    watch: {
    },
    methods: {
        selectVersionConfirm(data) {
            let version = data.args.param.versionArr
            let name = data.args.param.datasetName
            this.datasetsConf.forEach(item => {
                if(item.name === name) {
                    item.version = version
                }
            })
            this.selectDataVersion = false
        }, 
        closeSelVersionDialog() {
            this.selectDataVersion = false
        },
        addVersion(dsName, dsVersion) {
            this.dsName = dsName
            this.dsVersion = dsVersion
            this.selectDataVersion = true
        },
        isJSON_test(str) {
            if (typeof str == 'string') {
                try {
                    this.jsonValue = JSON.parse(str);
                    return true;
                } catch(e) {
                    if(str != "") {
                        alert("请输入JSON字符串！")
                        return false;
                    } else {
                        return true
                    }
                }
            }
        },
        back() {
            this.steps--
        },
        next() {
            this.steps++
        },
        save() {
            this.jsonValue = {}
            if(this.steps === 2) {
                this.jsonValue["datasets"] = this.datasetsConf
                this.jsonValue["scripts"] = JSON.parse(this.scriptsConf)
                this.jsonValue["userConf"] = JSON.parse(this.userConf)
            }
            let isJSON = this.isJSON_test(JSON.stringify(this.jsonValue))
            if(!isJSON) return false
            const event = new Event("event")
            event.args = {
                callback: "runDag",
                element: this,
                param: {
                    name: "runDag",
                    timeout: parseFloat(this.selectTimeout),
                    jsonValue: this.jsonValue == "" ? {} : this.jsonValue
                }
            }
            this.$emit('confirmeRunDag', event)
        },
        close() {
            this.$emit('closeRunDagDialog');
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.clear_dialog_container {
    height: 100vh;
    width: 100vw;
    // background: rgba(37,35,45,0.55);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9999;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.31);
}
.dialog_area {
    width: 600px;
    height: 560px;
    border: 1px solid #ddd;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
}
.header {
    height: 60px;
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    padding: 20px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .close_icon {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
}
.prompt {
    height: 440px;
    padding-left: 40px;
    padding-top: 20px;
    box-sizing: border-box;
    .data_version {
        width: 520px;
        height: 350px;
        border: 1px solid #ccc;
        overflow: auto;
        padding: 24px 30px;
        .input {
            max-width: 160px;
            width: 160px;
        }
        .version {
            max-width: 180px;
            width: 180px;
            span {
                max-width: 150px;
                display: inline-block;
                width: 150px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .add_version {
                position: relative;
                cursor: pointer;
            }
        }
        .cat {
            max-width: 120px;
            width: 120px;
        }
        table {
            border-collapse: collapse;
            text-align: left;
            font-size: 14px;
            color: #000000;
        }
        th {
            height: 24px;
            font-weight: normal;
        }
        td {
            border: 1px solid #ccc;
            height: 24px;
            padding: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    span {
        font-size: 14px;
        color: #000000;
    }
    textarea {
        font-size: 14px;
    }
    .run_json {
        width: 520px;
        height: 350px;
        background: #FFFFFF;
        border: 1px solid #ccc;
        resize: none;
    }
}
.btn {
    position: absolute;
    right: 23px;
    bottom: 15px;
    display: flex;
    justify-content: space-between;
    width: 530px;
    box-sizing: border-box;
    .timeout {
        display: flex;
        select {
            width: 72px;
            height: 24px;
            background: #FFFFFF;
            border: 0.5px solid #979797;
            margin-left: 10px;
        }
    }
    button {
        width: 60px;
        height: 28px;
        border: 0;
        cursor: pointer;
    }
    .cancel {
        margin-right: 5px;
        // background-color:#DB4D71;
        color: #7163C5;
    }
    .save {
        background-color: #7163C5;
        color: #fff;
    }
    .btn-margin {
        margin: 5px;
    }
}
</style>