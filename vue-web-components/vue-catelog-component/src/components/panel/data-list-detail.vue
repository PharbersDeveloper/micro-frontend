<template>
    <div class="data-list-detail">
        <div class="data-detail-container">
            <div class="header-area">
                <bp-text class="header-title">{{allData.name}}</bp-text>
                <img :src="closeIcon" class="icon-close" alt="" @click="closeModel">
            </div>
            <div class="body-area" v-if="!showPart">
                <div class="view-part">
                    <bp-text class="last-modify-time">{{lastModifyTime}}: {{allData.lastModifyTime}}
                    </bp-text>
                    <bp-button  :text="viewPart" class="btn_primary" @click="viewPartClick"></bp-button>
                </div>
                <div class="overview">
                    <bp-text class="title">{{overTitle}}</bp-text>
                    <div class="name-value-area">
                        <div class="name-value">
                            <bp-text class="subtitle">名称：</bp-text>
                            <bp-text class="subvalue">{{allData.name}}</bp-text>
                        </div>
                        <div class="name-value">
                            <bp-text class="subtitle">描述：</bp-text>
                            <bp-text class="subvalue">{{allData.describe}}</bp-text>
                        </div>
                        <div class="name-value">
                            <bp-text class="subtitle">数据库：</bp-text>
                            <bp-text class="subvalue">{{allData.database.name}}</bp-text>
                        </div>
                        <div class="name-value">
                            <bp-text class="subtitle">分类：</bp-text>
                            <bp-text class="subvalue">{{allData.source}}</bp-text>
                        </div>
                        <div class="name-value mb-5">
                            <bp-text class="subtitle">上次更新时间：</bp-text>
                            <bp-text class="subvalue">{{allData.lastModifyTime}}</bp-text>
                        </div>
                        <div class="name-value">
                            <bp-text class="subtitle">输入格式：</bp-text>
                            <bp-text class="subvalue">{{allData.inputFormat}}</bp-text>
                        </div>
                        <div class="name-value">
                            <bp-text class="subtitle">输出格式：</bp-text>
                            <bp-text class="subvalue">{{allData.outputFormat}}</bp-text>
                        </div>
                        <div class="name-value">
                            <bp-text class="subtitle">Serde 序列化库：</bp-text>
                            <bp-text class="subvalue">{{allData.serdeLib}}</bp-text>
                        </div>
                    </div>
                </div>
                <div class="property">
                    <div class="name-value-area">
                        <div class="name-value">
                            <bp-text class="subtitle">Serde 参数：</bp-text>
                            <div class="name-value-area">
                                <div class="parameter">
                                    <bp-text class="name">serialization.format</bp-text>
                                    <bp-text class="value">2</bp-text>
                                </div>
                            </div>
                        </div>
                         <div class="name-value">
                            <bp-text class="subtitle">表属性：</bp-text>
                            <div class="name-value-list">
                                <div class="parameter">
                                    <bp-text class="name">CrawlerSchemaSerializerVersion</bp-text>
                                    <bp-text class="value">1.0</bp-text>
                                </div>
                                <div class="parameter">
                                    <bp-text class="name">recordCount</bp-text>
                                    <bp-text class="value">1.0</bp-text>
                                </div>
                                <div class="parameter">
                                    <bp-text class="name">averageRecordSize</bp-text>
                                    <bp-text class="value">1.0</bp-text>
                                </div>
                                <div class="parameter">
                                    <bp-text class="name">CrawlerSchemaDeserializerVersion</bp-text>
                                    <bp-text class="value">1.0</bp-text>
                                </div>
                                <div class="parameter">
                                    <bp-text class="name">compressionType</bp-text>
                                    <bp-text class="value">1.0</bp-text>
                                </div>
                                <div class="parameter">
                                    <bp-text class="name">typeOfData</bp-text>
                                    <bp-text class="value">1.0</bp-text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="architecture">
                    <bp-text class="title">{{architecture}}</bp-text>
                    <div class="architecture-table">
                        <div class="table-title">
                            <span class="index-text"></span>
                            <span class="column-name">列名称
                            </span>
                            <span class="data-type">数据类型
                            </span>
                            <span class="partition">分区键
                            </span>
                            <span class="comment">评论
                            </span>
                        </div>

                        <div class="main-container">
                            <div v-for="(file,index) in allData.table" :key="index" class="OneRecord">
                                <div class="index-text">{{index+1}}</div>
                                <div class="column-name">
                                    <div class="column-name-text overflow-text" :title="file.name">{{formatFileName(file.name)}}</div>
                                </div>

                                <div class="data-type">
                                    <bp-text class="body-primary">{{file.database}}</bp-text>
                                </div>

                                <div class="partition">
                                    <bp-text class="body-tertiary">{{file.location}}</bp-text>
                                </div>

                                <div class="comment">
                                    <bp-text class="body-tertiary">
                                        {{file.time}}
                                    </bp-text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="body-area" v-if="showPart">
                <div class="view-part">
                    <bp-text class="last-modify-time">{{lastModifyTime}}: {{allData.lastModifyTime}}
                    </bp-text>
                    <bp-button  :text="closePart" class="btn_primary" @click="closePartClick"></bp-button>
                </div>
                <div class="architecture">
                    <div class="architecture-table">
                        <div class="table-title">
                            <span class="column-name">提供者
                            </span>
                            <span class="data-type">版本
                            </span>
                            <span class="comment">文件类型
                            </span>
                            <span class="partition"></span>
                        </div>

                        <div class="main-container">
                            <div v-for="(file,index) in allData.table" :key="index" class="OneRecord">
                                <div class="column-name">
                                    <div class="column-name-text overflow-text" :title="file.name">{{formatFileName(file.name)}}</div>
                                </div>

                                <div class="data-type">
                                    <bp-text class="body-primary">{{file.database}}</bp-text>
                                </div>

                                <div class="comment">
                                    <bp-text class="body-tertiary">
                                        {{file.time}}
                                    </bp-text>
                                </div>

                                <div class="partition">
                                    <bp-text class="view-char" @click="viewChar">查看属性</bp-text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <jsonModel v-if="showJson" @closeJsonModal="closeJsonModal"></jsonModel>
    </div>
</template>
<script>
import bpSelectVue from '../../../node_modules/vue-components/src/components/bp-select-vue.vue'
import bpOptionVue from '../../../node_modules/vue-components/src/components/bp-option-vue.vue'
import bpText from '../../../node_modules/vue-components/src/components/bp-text.vue'
import bpButton from '../../../node_modules/vue-components/src/components/bp-button.vue'
import bpImg from '../../../node_modules/vue-components/src/components/bp-img.vue'
import jsonModel from '../panel/view-json.vue'

export default {
    components: {
        bpSelectVue,
        bpOptionVue,
        bpText,
        bpButton,
        bpImg,
        jsonModel
    },
    data() {
        return {
            closeIcon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_close.svg",
            lastModifyTime: "上次更新时间",
            viewPart: "查看分区",
            closePart: "关闭分区",
            overTitle: "概述",
            architecture: "架构",
            showPart: false,
            showJson: false
        }
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    name: "cpa_pha_mapping",
                    database: {
                        name: "datebase"
                    },
                    describe: "String",
                    source: "String",
                    connect: "String",
                    deprecated: "String",
                    lastModifyTime: " YYYY/MM/DD hh:mm ",
                    inputFormat: "String",
                    outputFormat: "String",
                    serdeLib: "String",
                    table: [
                        {
                            name: "cpa_pha_mapping",
                            database: "database",
                            location: "Partition (0)",
                            time: "YYYY/MM/DD hh:mm"
                        },
                        {
                            name: "cpa_pha_mapping",
                            database: "database",
                            location: "Partition (0)",
                            time: "YYYY/MM/DD hh:mm"
                        }
                    ],
                    schemas: [

                    ]
                }
            }
        }
    },
    computed: {
        haveData() {
            if (!this.allData.count) {
                return false
            }
            return true
        },
        allPage() {
            const total = this.allData.count
            const perPage = 10
            if (Math.ceil(total / perPage) <= 1) {
                return 0
            }
            return Math.max(1, Math.ceil(total / perPage))
        },
        curPage() {
            return this.allData.page + 1
        },
        iconSort() {
            if (this.allData.sort.indexOf('-') === -1) {
                return 'https://general.pharbers.com/icon_sorting-ascending.svg'
            } else {
                return 'https://general.pharbers.com/icon_sorting-descending.svg'
            }
        },
        mineSortText() {
            if (this.allData.sort.indexOf('created') === -1) {
                return "Updated Time"
            } else {
                return "Created Time"
            }
        },
        mineSortCreatedTimeIcon() {
            if (this.allData.sort.indexOf('created') != -1) {
                this.mineSortUpdatedTimeIcon = ''
                return 'https://general.pharbers.com/icon_check.svg'
            } else {
                this.mineSortUpdatedTimeIcon = 'https://general.pharbers.com/icon_check.svg'
                return ''
            }
        },
        mineSortDescendingIcon() {
            if (this.allData.sort.indexOf('-') != -1) {
                this.mineSortAscendingIcon = ''
                return 'https://general.pharbers.com/icon_check.svg'
            } else {
                this.mineSortAscendingIcon = 'https://general.pharbers.com/icon_check.svg'
                return ''
            }
        },
        timeDisplay() {
            if (this.allData.sort.indexOf('created') !== -1) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        closeJsonModal() {
            this.showJson = false
        },
        viewChar() {
            this.showJson = true
        },
        closeModel() {
            this.$emit("closeModal")
        },
        viewPartClick() {
            this.showPart = true
        },
        closePartClick() {
            this.showPart = false
        },
        formatFileName(...params) {
            let resname = params[0]
            let len = 0

            if (resname === null) {
                return "nameless"
            }

            for (let i = 0; i < resname.length; i++) {
                if (resname.charCodeAt(i)>127 || resname.charCodeAt(i)==94) {
                    len += 2
                } else {
                    len ++
                }
                if (len > 64) {
                    resname = resname.substring(0, i) + '...'
                    break
                }
            }
            return resname
        },
        formatDateStandard(...params) {
            if(params.length === 2) {
                let date = new Date( params[0] ),
                    Y = date.getFullYear(),
                    M =
                        ( date.getMonth() + 1 < 10 ?
                            `0${date.getMonth() + 1}` :
                            date.getMonth() + 1 ),
                    D0 = ( date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() ),
                    D1 = ( date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() ),

                    h =
                        ( date.getHours() < 10 ? `0${date.getHours()}` : date.getHours() ),
                    m =
                        ( date.getMinutes() < 10 ?
                            `0${date.getMinutes()}` :
                            date.getMinutes() ) ,
                    s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

                // 输出结果：yyyy/mm/dd hh:mm
                if(params[1] === 0){
                    return Y + "/" + M + "/" + D0 + " " + h + ":" + m
                }else if(params[1] === 1) {
                    return Y + "-" + M + "-" + D0 + " " + h + ":" + m
                }
            }
        },
        changeName(file) {
            this.rename = true
            this.renameFile = file
            // 这里需要一个rename的组件
        },
        downloadFileService(file) {
            const event = new Event("event")
            event.args = {
                callback: "service",
                element: this,
                param: {
                    name: 'downloadFile',
                    use: 'downloadFile',
                    file: file
                }
            }
            this.$emit('event', event)
        },
        deleteData(file) {
            const event = new Event("event")
            event.args = {
                callback: "service",
                element: this,
                param: {
                    name: 'deleteFile',
                    use: 'deleteFile',
                    file: file
                }
            }
            this.$emit('event', event)
        },
        changePage(page) {
            const event = new Event("event")
            event.args = {
                callback: "linkToPage",
                element: this,
                param: {
                    name: '/download/my-data',
                    queryParams: `tab=${this.allData.tab}&page=${page - 1}&sort=${this.allData.sort}`
                }
            }
            this.$emit('event', event)
        },
        upload() {
            const event = new Event("event")
            event.args = {
                callback: "service",
                element: this,
                param: {
                    name: 'uploadFile',
                    use: 'uploadFile'
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
    .mb-5 {
        margin-bottom: 20px !important;
    }
    .data-list-detail {
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
        .data-detail-container {
            width: 1080px;
            height: 90%;
            background: #FFFFFF;
            border-radius: 2px;
            overflow-y: auto;
            .header-area {
                height: 56px;
                background: #fbfbfb;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px 20px 12px;
                border-bottom: 1px solid rgba(37,35,45,0.08);
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
            .body-area {
                padding: 12px 20px 20px;
                display: flex;
                flex-direction: column;
                .title {
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #25232D;
                    letter-spacing: 0.25px;
                    text-align: left;
                    line-height: 20px;
                    font-weight: 400;
                    margin-bottom: 12px;
                    display: block;
                }
                .name-value-area {
                    display: flex;
                    flex-direction: column;
                    .name-value {
                        display: flex;
                        margin-bottom: 12px;
                        .name-value-list {
                            display: flex;
                            flex-wrap: wrap;
                        }
                        .subtitle {
                            font-family: SFProText-Regular;
                            font-size: 12px;
                            color: #706F79;
                            letter-spacing: 0.25px;
                            text-align: left;
                            line-height: 16px;
                            font-weight: 400;
                            width: 110px;
                            min-width: 110px;
                        }
                        .subvalue {
                            font-family: SFProText-Regular;
                            font-size: 14px;
                            color: #25232D;
                            letter-spacing: 0.25px;
                            text-align: left;
                            line-height: 20px;
                            font-weight: 400;
                        }
                    }
                }
                .view-part {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 12px;
                    .last-modify-time {
                        font-family: PingFangSC-Thin;
                        font-size: 12px;
                        color: #706F79;
                        letter-spacing: 0.25px;
                        line-height: 16px;
                        font-weight: 200;
                    }
                    .button-density-default {
                        width: 80px;
                        height: 32px;
                        background: #f6f6f7;
                        border-radius: 2px;
                        font-family: SFProText-Medium;
                        font-size: 14px;
                        color: #57565F;
                        letter-spacing: 0;
                        text-align: center;
                        line-height: 20px;
                        font-weight: 500;
                    }
                }
                .overview, .property {
                    border-bottom: 1px solid rgba(37,35,45,0.08);
                    margin-bottom: 12px;
                }
                .property {
                    .parameter {
                        display: flex;
                        align-items: center;
                        margin-right: 20px;
                        margin-bottom: 12px;
                        .name {
                            font-family: SFProText-Regular;
                            font-size: 14px;
                            color: #25232D;
                            letter-spacing: 0.25px;
                            text-align: left;
                            line-height: 20px;
                            font-weight: 400;
                            background: #f6f6f7;
                            height: 20px;
                            padding: 1px 6px;
                            display: flex;
                            align-items: center;
                            border-radius: 2px;
                        }
                        .value {
                            background: #57565F;
                            border-radius: 2px;
                            height: 20px;
                            padding: 1px 6px;
                            display: flex;
                            align-items: center;
                            font-family: SFProText-Regular;
                            font-size: 14px;
                            color: #FFFFFF;
                            letter-spacing: 0.22px;
                            line-height: 24px;
                            font-weight: 400;
                        }
                    }
                }
            }
        }
        .architecture {
            display: flex;
            flex-direction: column;
            .architecture-table {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                min-height: 100px;
                .index-text {
                    width: 100px;
                }
                .table-title {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 33px !important;
                    border-bottom: 0.5px solid rgba(31, 37, 50, 0.08);
                    font-family: SFProText-Regular;
                    font-size: 12px;
                    color: #57565F;
                    letter-spacing: 0.25px;
                    text-align: left;
                    line-height: 16px;
                    font-weight: 400;
                    .column-name {
                        // flex: 1;
                        width: 200px;
                        min-width: 200px;
                    }

                    .data-type {
                        min-width: 200px;
                        width: 200px;
                        padding: 0 8px;
                    }

                    .partition {
                        width: 200px;
                        min-width: 200px;
                        padding: 0 8px;
                    }

                    .comment {
                        flex: 1;
                        min-width: 160px;
                    }
                }

                .main-container {
                    width: 100%;
                    overflow: scroll;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    //隐藏滚动条
                    &::-webkit-scrollbar {
                        width: 0 !important;
                    }
                    -ms-overflow-style: none;

                    .OneRecord {
                        width: 100%;
                        height: 44px;
                        display: flex;
                        align-items: center;
                        border-bottom: 1px solid rgba(37, 35, 45, 0.08);
                        cursor: pointer;
                        font-family: SFProText-Light;
                        font-size: 12px;
                        color: #706F79;
                        letter-spacing: 0.25px;
                        line-height: 16px;
                        font-weight: 200;
                        // 列名
                        .column-name{
                            // flex: 1;
                            width: 200px;
                            min-width: 200px;
                            .column-name-text {
                                font-family: SFProText-Regular;
                                font-size: 14px;
                                color: #25232D;
                                letter-spacing: 0.25px;
                                text-align: left;
                                line-height: 20px;
                                font-weight: 400;
                            }
                            .overflow-text {
                                height: 20px;
                                width: fit-content;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            .data-name-bottom {
                                display: flex;
                                height: 18px;
                                
                                .editable-component {
                                    margin-right: 2px;
                                    &:last-of-type {
                                        margin-right: 0;
                                    }
                                }
                            }
                        }
                        // 数据类型
                        .data-type {
                            min-width: 200px;
                            width: 200px;
                            height: 100%;
                            padding: 0 8px;
                            display: flex;
                            align-items: center;
                            .bp-text {
                                height: 20px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                        }
                        //分区
                        .partition {
                            width: 200px;
                            min-width: 200px;
                            padding: 0 8px;
                            display: flex;
                            align-items: center;

                            .view-char {
                                font-family: PingFangSC-Medium;
                                font-size: 14px;
                                color: #5342B3;
                                letter-spacing: 0;
                                line-height: 20px;
                                font-weight: 500;
                            }
                        }
                        // 评论
                        .comment {
                            flex: 1;
                            min-width: 160px;
                            height: 100%;
                            padding: 0 8px;
                            display: flex;
                            align-items: center;
                        }
                    }
                }
            }
        }
    }
</style>