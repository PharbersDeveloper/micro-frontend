<template>
    <div class="my-data-content-container">
        <div class="tabs">
            <span 
                :class="myDataTab === 0 ? 'label_button_theme tab-active': 'btn_secondary_initial'" 
                class="cursor-pointer mr-3"
                @click="changeTab(0)"
            >
                Mine
            </span>
            <span 
                :class="myDataTab === 1 ? 'label_button_theme tab-active': 'btn_secondary_initial'" 
                class="cursor-pointer"
                @click="changeTab(1)"
            >
                Subscribed
            </span>
        </div>
        <div class="data-main-container">
            <div v-if="haveData" class="myData-mine">
                <div class="subtitle">
                    <span class="heading-xsmall file-name-text">Name</span>
                    <span class="heading-xsmall member-text">Owner</span>
                    <span class="subscribe-number-header"></span>
                    <span class="heading-xsmall time-text">
                        <bp-select-vue beforeSrc="https://general.pharbers.com/icon_chevron-down_12.svg" :src="iconSort" :choosedValue="mineSortText">
                            <bp-option-vue text="Updated Time" :src="mineSortUpdatedTimeIcon" @click="myDataSort('modified', 0)"></bp-option-vue>
                            <bp-option-vue text="Created Time" :src="mineSortCreatedTimeIcon" @click="myDataSort('created', 0)"></bp-option-vue>
                            <div class="option-line mt-1 mb-1"></div>
                            <bp-option-vue text="Ascending" :src="mineSortAscendingIcon" @click="myDataSort('', 1)"></bp-option-vue>
                            <bp-option-vue text="Descending" :src="mineSortDescendingIcon" @click="myDataSort('-', 1)"></bp-option-vue>
                        </bp-select-vue>
                    </span>
                    <span class="blank-action-header"></span>
                </div>

                <div class="main-container">
                    <div v-for="(file,index) in allData.files" :key="index" class="OneRecord">
                        <div class="icon_datafile"></div>
                        <div class="data-name-container">
                            <div class="heading-small overflow-text" data-placement="bottom" data-toggle="tooltip" :title="file.name">{{formatFileName(file.name)}}</div>
                            <div v-if="file.labels.length" class="data-name-bottom">
                                <template v-for="label in file.labels">
                                    <editable-component :tagName="label"></editable-component>
                                </template>
                            </div>
                        </div>

                        <div class="members">
                            <bp-text class="body-primary">{{userName}}</bp-text>
                        </div>

                        <div class="subscribe-number">
                            <div class="icon_subscribed"></div>
                            <bp-text class="body-tertiary"></bp-text>
                        </div>

                        <div class="mine-time">
                            <bp-text class="body-tertiary">
                                {{timeDisplay ? formatDateStandard(file.created, 0) : formatDateStandard(file.modified, 0)}}
                            </bp-text>
                        </div>

                        <div class="action-menu">
                            <bp-select-vue class="bp-select-option" choosedValue="">
                                <bp-option-vue text="Go to Data Instance" class="cursor-not-allow"></bp-option-vue>
                                <div class="option-line"></div>
                                <bp-option-vue text="Edit Tags" class="cursor-not-allow"></bp-option-vue>
                                <bp-option-vue text="Rename" @click="changeName(file)" class="rename-button"></bp-option-vue>
                                <div class="option-line"></div>
                                <bp-option-vue text="Share" class="cursor-not-allow"></bp-option-vue>
                                <bp-option-vue text="Download" @click="downloadFileService(file)" class="download-button"></bp-option-vue>
                                <div class="option-line"></div>
                                <bp-option-vue text="Remove" @click="deleteData(file)" class="remove-file"></bp-option-vue>
                            </bp-select-vue>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else>

            </div>
        </div>
    </div>
    
</template>
<script>
import bpPagination from '../bp-pagination.vue'
import bpSelectVue from '../../../node_modules/vue-components/src/components/bp-select-vue.vue'
import bpOptionVue from '../../../node_modules/vue-components/src/components/bp-option-vue.vue'
import bpText from '../../../node_modules/vue-components/src/components/bp-text.vue'
import editableComponent from '../editable-component.vue'

export default {
    components: {
        bpPagination,
        bpSelectVue,
        bpOptionVue,
        bpText,
        editableComponent
    },
    data() {
        return {
            myDataTab: 0,
            rename: false,
            renameFile: '',
            mineSortUpdatedTimeIcon: '',
            mineSortAscendingIcon: '',
            userName: 'jyan',
            allData: {
                sort: '-created',
                files: [
                    {
                        accessibility: null,
                        created: "2021-02-26T07:16:25.808Z",
                        dateCover: [],
                        description: null,
                        extension: "xlsx",
                        geoCover: [],
                        isNewVersion: true,
                        labels: ['aaa','bbb'],
                        markets: [],
                        modified: "2021-03-09T03:59:30.859Z",
                        molecules: [],
                        name: "test22",
                        owner: "5SCsFDZn09FT4QpaSP6y",
                        partners: "zudIcG_17yj8CEUoCTHg",
                        providers: [],
                        shared: null,
                        size: 8550,
                        source: "user/5SCsFDZn09FT4QpaSP6y/9878d-8ffb-4914-9524-92475/test22.xlsx",
                        type: "file",
                        version: null
                    },
                    {
                        accessibility: null,
                        created: "2021-02-26T07:06:13.700Z",
                        dateCover: [],
                        description: null,
                        extension: "xlsx",
                        geoCover: [],
                        isNewVersion: true,
                        labels: [],
                        markets: [],
                        modified: "2021-02-26T07:06:13.941Z",
                        molecules: [],
                        name: "test1",
                        owner: "5SCsFDZn09FT4QpaSP6y",
                        partners: "zudIcG_17yj8CEUoCTHg",
                        providers: [],
                        shared: null,
                        size: 8550,
                        source: "user/5SCsFDZn09FT4QpaSP6y/b9864-ba60-48ce-8e42-957c6/test1.xlsx",
                        type: "file",
                        version: null
                    }
                ]
            }
        }
    },
    props: {
        // allData: {
        //     type: Object,
        //     default: function() {
        //         return {
        //             sort: '-created'
        //         }
        //     }
        // }
    },
    computed: {
        haveData() {
            // if (!this.allData.files.meta.count) {
            //     return false
            // }
            return true
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
        changeTab(num) {
            this.myDataTab = num
            this.$emit('changeTab', num)
        },
        myDataSort(sortType, type) {
            const event = new Event("event")
            let sortString = ''
            
            if (type === 0) {
                if (this.mineSortDescendingIcon) {
                    sortString = `sort=-${sortType}`
                } else {
                    sortString = `sort=${sortType}`
                }
            } else {
                if (this.mineSortCreatedTimeIcon) {
                    sortString = `sort=${sortType}created`
                } else {
                    sortString = `sort=${sortType}modified`
                }
            }
            
            event.args = {
                callback: "linkToPage",
                element: this,
                param: {
                    name: 'download/mine',
                    index: this.allData.page,
                    params: sortString
                }
            }
            this.$emit('event', event)
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
        }
    } 
}
</script>
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    .cursor-not-allow {
        cursor: not-allowed;
    }

    .heading-xsmall {
        font-family: SFProText-Regular;
        font-size: 12px;
        color: #706F79;
        letter-spacing: .25px;
        line-height: 16px;
        text-align: left;
        font-weight: 500;
    }

    .heading-small {
        font-family: SFProText-Regular;
        font-size: 14px;
        color: #302F39;
        letter-spacing: 0.25px;
        text-align: left;
        line-height: 20px;
    }

    .body-primary {
        font-family: SFProText-Light;
        font-size: 14px;
        color: #302F39;
        letter-spacing: 0.25px;
        line-height: 20px;
    }

    .body-tertiary {
        font-family: SFProText-Light;
        font-size: 12px;
        color: #706F79;
        letter-spacing: 0.25px;
        line-height: 16px;
    }

    @mixin body-primary {
        font-family: SFProText-Light;
        font-size: 14px;
        color: #302F39;
        letter-spacing: 0.25px;
        line-height: 20px;
    }

    @mixin body-primary-red-light {
        font-family: SFProText-Light;
        font-size: 14px;
        color: #DB4D71;
        letter-spacing: 0.25px;
        line-height: 20px;
    }

    @mixin icon_more-v {
        width: 20px;
        height: 20px;
        background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.5 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' fill='%2357565F' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center/100%;
    }

    .icon_datafile {
        width: 24px;
        height: 24px;
        background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M6 2h7l6 6v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z' fill='%23E1DFE9'/%3E%3Cpath d='M13 2l6 6h-5a1 1 0 0 1-1-1V2z' fill='%23A3A1AB'/%3E%3C/g%3E%3C/svg%3E") no-repeat center/100% !important; 
    }

    .icon_subscribed {
        width: 20px;
        height: 20px;
        background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.972 14.586c.812 0 1.471.653 1.471 1.457 0 .805-.659 1.457-1.471 1.457A1.464 1.464 0 0 1 2.5 16.043c0-.804.659-1.457 1.472-1.457zm-.949-6.043c4.624 0 8.372 3.71 8.372 8.288a.52.52 0 0 1-.523.518.52.52 0 0 1-.523-.518c0-4.005-3.28-7.252-7.326-7.252a.52.52 0 0 1-.523-.518.52.52 0 0 1 .523-.518zm0-6.043C11.02 2.5 17.5 8.916 17.5 16.83a.52.52 0 0 1-.523.519.52.52 0 0 1-.524-.518c0-7.343-6.012-13.295-13.43-13.295a.52.52 0 0 1-.523-.518.52.52 0 0 1 .523-.518z' fill='%237163C5' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center/100%;
    }

    .cursor-pointer {
        cursor: pointer;
    }

    .mr-3 {
        margin-right: 16px;
    }

    .label_button_theme {
        font-family: SFProText-Medium;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 20px;
        color: #7163C5;
    }

    .btn_secondary_initial {
        font-family: SFProText-Medium;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 20px;
        color: #57565F;
    }

    .my-data-content-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .tabs {
            height: 24px;
            width: 100%;
            padding: 0 24px 0 20px;
            display: flex;

            .tab-active {
                border-bottom: 2px solid #7163C5;
            }
        }

        .data-main-container {
            display: flex;
            flex-direction: column;
            flex: 1;
            position: relative;

            .myData-mine {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 12px 20px 8px 20px;
                height: 507px;
                min-height: 0;

                .subtitle {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 33px !important;
                    border-bottom: 0.5px solid rgba(31, 37, 50, 0.08);

                    .file-name-text {
                        flex: 1;
                    }

                    .member-text {
                        width: 10%;
                        padding: 0 8px;
                    }

                    .subscribe-number-header {
                        width: 5.3%;
                        height: 100%;
                        padding: 0 8px;
                    }

                    .time-text {
                        display: flex;
                        align-items: center;
                        width: 155px;
                        padding: 0 6px;
                        cursor: pointer;

                        /deep/.bp-select {
                            width: 155px;
                            height: 100%;
                            background-color: #fff;
                            margin-right: 1px;
                            
                            .bp-select-title {
                                padding: 0;
                                display: flex;
                                justify-content: flex-start;

                                .svg-icon {
                                    width: 12px;
                                    height: 12px;
                                }
                            }

                            .bp-option-group {
                                width: 134px;
                                padding: 4px 0;
                                position: absolute;
                                z-index: 98;
                                right: 0;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                .bp-option {
                                    display: flex;
                                    height: 28px;
                                    margin: 0;
                                    padding: 0 0 0 8px;
                                    position: relative;
                                    &:hover {
                                        background: #E5EAEC;
                                    }
                                    .icon {
                                        height: 12px;
                                        width: 12px;
                                    }
                                    &>div {
                                        @include body-primary;
                                        position: absolute;
                                        left: 28px;
                                    }
                                }
                            }
                        }
                    }

                    .blank-action-header {
                        width: 4.8%;
                        height: 100%;
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
                        height: 66px;
                        display: flex;
                        align-items: center;
                        border-bottom: 1px solid rgba(37, 35, 45, 0.08);
                        // 文件logo
                        .icon_datafile {
                            width: 24px;
                            height: 24px;
                            margin-right: 18px;
                        }
                        // 文件名称及tag
                        .data-name-container {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
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
                        // 拥有者owner
                        .members {
                            width: 10%;
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
                        //订阅人数
                        .subscribe-number {
                            width: 5.3%;
                            padding: 0 8px;
                            display: flex;
                            align-items: center;
                        }
                        // 排序功能
                        .mine-time {
                            width: 155px;
                            height: 100%;
                            padding: 0 8px;
                            display: flex;
                            align-items: center;
                            .bp-text {
                                height: 16px;
                            }
                        }
                        // 功能键
                        .action-menu {
                            width: 4.8%;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            /deep/.bp-select-option {
                                width: 20px;
                                height: 20px;
                                background-color: #fff;
                                //在bp-select-title这个div上显示button的图片
                                .bp-select-title {
                                    padding: 0 !important;
                                    @include icon_more-v;
                                }
                                .button-focus {
                                    // @include icon_more-v-focus;
                                }
                                .bp-option-group {
                                    position: absolute;
                                    z-index: 99;
                                    background: #FFFFFF;
                                    box-shadow: 0 0 1px 0 rgba(37, 35, 45, 0.12), 0 4px 8px -2px rgba(37, 35, 45, 0.25);
                                    border-radius: 2px;
                                    right: 0px;
                                    width: 157px !important;
                                    // height: 112px !important;
                                    padding: 0;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    .bp-option {
                                        padding: 0 0 0 12px !important;
                                        height: 28px;
                                        &:hover {
                                            background: #E5EAEC;
                                        }
                                        &:active {
                                            background: #5D6568;
                                            span {
                                                color: rgba(255, 255, 255, 0.95) !important;
                                            }
                                        }
                                        span {
                                            @include body-primary;
                                        }
                                    }

                                    .option-line {
                                        height: 0.5px;
                                        background: rgba(31, 36, 49, 0.08);
                                        margin: 0.5px 0;
                                    }

                                    .remove-file span {
                                        @include body-primary-red-light;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>