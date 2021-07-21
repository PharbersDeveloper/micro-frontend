<template>
    <div class="json-area">
        <div class="json-data-area">
            <div class="header-area">
                <bp-text class="header-title">属性</bp-text>
                <img :src="closeIcon" class="icon-close" alt="" @click="closeJsonModel">
            </div>
            <div class="json-show">
                <JsonViewer :value="allData" copyable expand-depth="5" :expanded="true"></JsonViewer>
            </div>
        </div>
    </div>
</template>
<script>
import JsonViewer from 'vue-json-viewer'
import bpText from '../../../node_modules/vue-components/src/components/bp-text.vue'

export default {
    components: {
        JsonViewer,
        bpText
    },
    data() {
        return {
            closeIcon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_close.svg"
        }
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    "data": [
                        {
                            "type": "databases",
                            "id": "phdatacat",
                            "attributes": {
                                "id": "phdatacat",
                                "name": "phdatacat",
                                "describe": ""
                            }
                        },
                        {
                            "type": "databases",
                            "id": "phdatatemp",
                            "attributes": {
                                "id": "phdatatemp",
                                "name": "phdatatemp",
                                "describe": "存放中间文件"
                            }
                        },
                        {
                            "type": "databases",
                            "id": "phresult",
                            "attributes": {
                                "id": "phresult",
                                "name": "phresult",
                                "describe": "存放数据结果"
                            }
                        }
                    ]
                }
            }
        }
    },
    computed: {
    },
    methods: {
        closeJsonModel() {
            this.$emit("closeJsonModal")
        }
    } 
}
</script>
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    .json-area {
        height: 100vh;
        width: 100vw;
        background: rgba(37,35,45,0.55);
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
        .json-data-area {
            height: 500px;
            width: 600px;
            background: #FFFFFF;
            border-radius: 2px;
            overflow-y: auto;
        }
        .header-area {
            height: 56px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 20px 12px;
            .icon-close {
                cursor: pointer;
            }
            .header-title {
                font-family: SFProText-Regular;
                font-size: 16px;
                color: #25232D;
                letter-spacing: 0.25px;
                line-height: 24px;
                font-weight: 400;
            }
        }
        .json-show {
            margin: 20px;
            border: 1px solid #E1DFE9;
            border-radius: 2px;
            height: 404px;
            overflow-y: auto;
        }
    }
</style>