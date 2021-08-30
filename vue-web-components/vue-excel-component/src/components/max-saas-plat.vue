<template>
    <div class="max-saas">
        <div class="header-option">
            <span class="header">项目信息</span>
            <div class="date-button">
                <bp-select-vue beforeSrc="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_chevron-down_12.svg" :choosedValue="choosedYear">
                    <bp-option-vue :text="item" :key="index+'year'" v-for="(item,index) in yearArr" @click="clickYear(item)"></bp-option-vue>
                </bp-select-vue>
                <bp-select-vue beforeSrc="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_chevron-down_12.svg" :choosedValue="choosedMonth">
                    <bp-option-vue :text="item" :key="index+'month'" v-for="(item, index) in monthArr" @click="clickMonth"></bp-option-vue>
                </bp-select-vue>
                <bp-button class="create" text="新建Max项目"></bp-button>
            </div>
        </div>
        <div class="table-container">
            <div class="max-table-container">
                <div class="max-table-header">
                    <div class="max-table-row">
                        <div class="max-table-cell" id="project-name-text">项目名</div>
                        <div class="max-table-cell">上传</div>
                        <div class="max-table-cell">导入</div>
                        <div class="max-table-cell">人工清洗</div>
                        <div class="max-table-cell">数据计算</div>
                        <div class="max-table-cell">数据报告</div>
                    </div>
                </div>
                <!-- <div class="max-table-body-area"> -->
                <div class="max-table-body">
                    <div class="max-table-row" v-for="(row,index) in allData.projectsData" :key="index">
                        <div class="max-table-cell" id="project-name"><div>{{row.provider}}</div></div>
                        <div class="max-table-cell">
                            <ph-table-cell type="upload" :value="row.upload" :date="choosedYear+ '-' +choosedMonth" :project="parseData(row.actions, 'upload')" :index="index"  :provider="row.provider" :projectId="row.id" @tableClickEvent="tableClickEvent"></ph-table-cell>
                        </div>
                        <div class="max-table-cell">
                            <ph-table-cell type="import" :value="row.import"  :date="choosedYear+ '-' +choosedMonth" :project="row" :index="index" @tableClickEvent="tableClickEvent"></ph-table-cell>
                        </div>
                        <div class="max-table-cell">
                            <ph-table-cell type="clean" :value="row.clean" :date="choosedYear+ '-' +choosedMonth" :project="row" :index="index" @tableClickEvent="tableClickEvent"></ph-table-cell>
                        </div>
                        <div class="max-table-cell">
                            <ph-table-cell type="calculation" :value="row.calculation" :date="choosedYear+ '-' +choosedMonth" :project="row" :index="index" @tableClickEvent="tableClickEvent"></ph-table-cell>
                        </div>
                        <div class="max-table-cell">
                            <ph-table-cell type="report" :value="row.report" :date="choosedYear+ '-' +choosedMonth" :project="row" :index="index" @tableClickEvent="tableClickEvent"></ph-table-cell>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="header-option">
                <span class="header">操作信息</span>
            </div>
            <div class="otp-table">
                <div class="opt-table-header">
                    <div class="date">时间</div>
                    <div class="optioner">操作者</div>
                    <div class="optionData">操作信息</div>
                    <div class="memo">备注</div>
                    <div class="status">操作状态</div>
                </div>
                <div class="opt-table-body-area">
                    <div class="opt-table-body" v-for="(opt,index) in allData.jobLogs" :key="index">
                        <div class="date">{{formatDateStandard(opt.time, 0)}}</div>
                        <div class="optioner">{{opt.provider}}</div>
                        <div class="optionData">{{opt.message}}</div>
                        <div class="memo">{{opt.comments}}</div>
                        <div class="status">{{opt.jobDesc}}</div>
                    </div>
                </div>
            </div>
            <div v-if="allPage && curPage" class="page-container">
                <bp-pagination :curPage="curPage" :pages="allPage" @changePage="changePage"></bp-pagination>
            </div>
        </div>
        <uploadBox :JsonData="JsonData" v-if="showUpload" @cancel="closeUploadModal" @confirm="confirmUpload" @selectFile="selectFile" :fileName="fileName"></uploadBox>

        <div v-if="closeuploadToast == '0'"
            class="upload-toast" 
            :class="[
                {'upload-toast-border-green': uploadToastBorder == 'green'},
                {'upload-toast-border-blue': uploadToastBorder == 'blue'},
                {'upload-toast-border-red': uploadToastBorder == 'red'}
            ]">
            <div class="upload-toast-img-container">
                <div :class="[
                    {'check_circle-24px': uploadToastBorder == 'green'},
                    {'upload-24px': uploadToastBorder == 'blue'},
                    {'cancel-24px': uploadToastBorder == 'red'}
                ]"></div>
            </div>
            <bp-text class="size-14-6B7376">{{uploadTextStatus}}</bp-text>
            <bp-text class="size-12-6B7376">{{uploadText}}</bp-text>
            <bp-text class="size-12-6B7376" v-if="showProgress == '1'">
                {{formatFileSize(uploadLoadedSize)}} / {{formatFileSize(uploadFileSize)}}
            </bp-text>
            <div class="upload-toast-close-container" @click="closeToast" v-if="uploadToastBorder != 'blue'">
                <div class="cross"></div>
            </div>
        </div>
    </div>
</template>

<script>
import bpPagination from './bp-pagination.vue'
import phTableCell from './ph-table-cell.vue'
import uploadBox from './upload-box.vue'
import bpSelectVue from '../../node_modules/vue-components/src/components/bp-select-vue.vue'
import bpOptionVue from '../../node_modules/vue-components/src/components/bp-option-vue.vue'
import bpButton from '../../node_modules/vue-components/src/components/bp-button.vue'
import bpText from '../../node_modules/vue-components/src/components/bp-text.vue'
export default {
    components: {
        phTableCell,
        bpSelectVue,
        bpOptionVue,
        bpButton,
        bpPagination,
        uploadBox,
        bpText
    },
    data() {
        return {
            choosedYear: "2020",
            choosedMonth: "01",
            monthArr: [],
            yearArr: ['2021', '2020'],
            nowMonthArr: [],
            lastMonthArr: [],
            showUpload: false,
            JsonData: {},
            clickProjectEvent: {}
        }
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    projectsData: [
                        {
                            "provider": "汇宇",
                            "time": "1627747200000",
                            "actions": "[{\"owner\":\"5UBSLZvV0w9zh7-lZQap\",\"showName\":\"钱鹏\",\"version\":\"测试文件.xlsx\",\"code\":0,\"jobDesc\":\"success\",\"jobCat\":\"upload\",\"comments\":\"测试数据\",\"message\":\"\",\"date\":1629869854734}]"
                        }
                    ],
                    jobsCount: 78,
                    jobLogs: [
                        {
                            "provider": "倍特",
                            "owner": "5UBSLZvV0w9zh7-lZQap",
                            "time": "2021-02-28T16:00:00.000Z",
                            "version": "测试文件.xlsx",
                            "code": 0,
                            "jobDesc": "success",
                            "jobCat": "upload",
                            "comments": "测试数据",
                            "message": null,
                            "date": "1629869854734"
                        }
                    ]
                }
            }
        },
        random: Number,
        fileName: String,
        uploadToastBorder: String,
        uploadTextStatus: String,
        uploadText: String,
        closeuploadToast: {
            type: String,
            default: '1'
        },
        showProgress: String,
        uploadLoadedSize: Number,
        uploadFileSize: Number
    },
    computed: {
        allPage() {
            const total = this.allData.jobsCount
            const perPage = 10
            if (Math.ceil(total / perPage) <= 1) {
                return 0
            }
            return Math.max(1, Math.ceil(total / perPage))
        },
        curPage() {
            return this.allData.page + 1
        }
    },
    watch: {
        random: function() {
            this.$forceUpdate()
        }
    },
    created() {
        const rangeArray = (start, end) => Array(end - start + 1).fill(0).map((v, i) => i + start)
        const currentDate = new Date()
        const year = currentDate.getFullYear()
        const month = currentDate.getMonth() + 1
        // let month  =3
        this.choosedYear = String(year)
        this.choosedMonth = '0'+String(month)
        let yearArr = []
        let monthArr = []
        let nowMonthArr = []
        let lastMonthArr = []
        if(month > 5) {
            monthArr = rangeArray(month - 5, month)
            yearArr.push(year)
            this.nowMonthArr = monthArr.map(item => {
                item = String(item)
                if(item.length  == 1) {
                    return '0' + item
                } else {
                    return item
                }
            })
        } else {
            yearArr.push(year) //当年年份
            yearArr.push(Number(year) - 1) //去年年份
            nowMonthArr = rangeArray(1, month) //当年月份
            let monthList = rangeArray(1, 12) //定义月份列表
            lastMonthArr = monthList.slice((6 - nowMonthArr.length) * -1) //去年月份
            this.nowMonthArr = nowMonthArr.map(item => {
                item = String(item)
                if(item.length  == 1) {
                    return '0' + item
                } else {
                    return item
                }
            })
            this.lastMonthArr = lastMonthArr.map(item => {
                item = String(item)
                if(item.length  == 1) {
                    return '0' + item
                } else {
                    return item
                }
            })
        }
        this.yearArr = yearArr.map(item => String(item))
        this.monthArr = this.nowMonthArr
    },
    methods: {
        closeToast() {
            const event = new Event("event")
            event.args = {
                callback: "closeToast",
                element: this,
                param: {
                    name: 'closeToast',
                    value: 0
                }
            }
            this.$emit('event', event)
        },
        formatFileSize(...params) {
            if ( !params[0] ) {
                return 0
            }
            let fsize = params[0]
            if ( fsize < 0.1 * 1024 ) {
                fsize = fsize.toFixed( 2 ) + "B"
            } else if ( fsize < 0.1 * 1024 * 1024 ) {
                fsize = ( fsize / 1024 ).toFixed( 2 ) + "KB"
            } else if ( fsize < 0.1 * 1024 * 1024 * 1024 ) {
                fsize = ( fsize / ( 1024 * 1024 ) ).toFixed( 2 ) + "MB"
            } else {
                fsize = ( fsize / ( 1024 * 1024 * 1024 ) ).toFixed( 2 ) + "GB"
            }
            return fsize
        },
        selectFile() {
            this.$emit('event', this.clickProjectEvent)
        },
        confirmUpload(data) {
            let confirmEvent = this.clickProjectEvent;
            confirmEvent.args.param.memo = data;
            confirmEvent.args.callback = "confirmUpload";
            this.$emit('event', confirmEvent)
            this.showUpload = false

        },
        tableClickEvent(data) {
            if(data.args.param.type == "upload") {
                this.showUpload = true
            }
            this.clickProjectEvent = data
        },
        clickYear(data) {
            this.choosedYear = data
            if(Number(data) == new Date().getFullYear()) {
                this.monthArr = this.nowMonthArr
            } else {
                this.monthArr = this.lastMonthArr
            }
            this.choosedMonth = this.monthArr[this.monthArr.length - 1]
        },
        clickMonth(data) {
            this.choosedMonth = data
        },
        parseData(data, type) {
            let datas = JSON.parse(data)
            let filterData = datas.filter( it => it.jobCat == type)
            return filterData[0]
        },
        changePage(page) {
            const event = new Event("event")
            event.args = {
                callback: "changePage",
                element: this,
                param: {
                    name: '/max-saas',
                    page: page - 1
                }
            }
            this.$emit('event', event)
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
        closeUploadModal() {
            this.showUpload = false
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    @mixin heading-xsmall {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #706F79;
        letter-spacing: 0.25px;
        line-height: 16px;
        font-weight: 400;
    }
    .page-container {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .max-saas {
        display: flex;
        flex-direction: column;
        padding: 80px 24px 24px;
        width: 100%;
        height: 100%;
        .header-option {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            margin-top: 28px;
            .header {
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #25232D;
                letter-spacing: 0.25px;
                text-align: left;
                line-height: 20px;
                font-weight: 400;
            }
            .date-button {
                display: flex;
                align-items: center;
                .create {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 125px;
                    height: 24px;
                    background: #7163C5;
                    border-radius: 2px;
                    font-family: SFProText-Medium;
                    font-size: 14px;
                    color: #FFFFFF;
                    line-height: 20px;
                    font-weight: 500;
                }
                .bp-select {
                    width: 104px;
                    height: 24px;
                    margin-right: 8px;
                    /deep/.bp-select-title {
                        font-family: PingFangSC-Medium;
                        font-size: 14px;
                        color: #57565F;
                        letter-spacing: 0;
                        text-align: center;
                        line-height: 20px;
                        font-weight: 500;
                    }
                }
            }
        }
        .table-container {
            width: 100%;
            min-height: 400px;
            height:347px;
            overflow: scroll;
            .max-table-container {
                display: table;
                // margin-top: 20px;
                margin-bottom: 28px;
                width: 100%;
                .max-table-header {
                    display: table-header-group;
                    height: 32px;
                    .max-table-row {
                        display: table-row;
                        #project-name-text {
                            padding-right: 2px;
                        }
                        .max-table-cell {
                            display: table-cell;
                            vertical-align: middle;
                            text-align: center;
                            border-bottom: 1px solid rgba(37,35,45,0.08);
                            @include heading-xsmall;

                            &:last-of-type {
                                width: 211px;
                                padding-right: 0;
                            }
                        }
                    }
                }

                .max-table-body {
                    display: table-row-group;
                    // height: 314px !important;
                    overflow: hidden;
                    .max-table-row {
                        display: table-row;
                        height: 44px;

                        #project-name {
                            width: 97px;
                            padding-right: 2px;
                            @include heading-xsmall;
                        }

                        .max-table-cell {
                            display: table-cell;
                            vertical-align: middle;
                            text-align: center;
                            padding: 0 2px;
                            width: 213px;
                            border-bottom: 1px solid rgba(37,35,45,0.08);

                            &:last-of-type {
                                width: 211px;
                                padding-right: 0;
                            }
                        }
                    }
                }
            }
        }
        
        .otp-table {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            .opt-table-header {
                display: flex;
                font-family: SFProText-Regular;
                font-size: 12px;
                color: #706F79;
                letter-spacing: 0.25px;
                text-align: left;
                line-height: 16px;
                font-weight: 400;
                border-bottom: 1px solid rgba(37,35,45,0.08);
                height: 33px;
            }
            .date {
                width: 250px;
                min-width: 250px;
            }
            .optioner {
                width: 250px;
                min-width: 250px;
            }
            .optionData {
                flex: 1;
                min-width: 300px;
                min-width: 300px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-right: 20px;
            }
            .memo {
                width: 300px;
                min-width: 300px;
            }
            .status {
                width: 150px;
                min-width: 150px;
            }
            .opt-table-body-area {
                height: 220px;
                overflow: auto;
                .opt-table-body {
                    display: flex;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    font-family: SFProText-Light;
                    font-size: 14px;
                    color: #706F79;
                    letter-spacing: 0.25px;
                    line-height: 20px;
                    font-weight: 200;
                    border-bottom: 1px solid rgba(37,35,45,0.08);
                    .optioner {
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
        }
        //与upload-toast是一体的
        .upload-toast-border-blue {
            border-left: 2px solid #1C9DD9;
        }

        .upload-toast-border-green {
            border-left: 2px solid #78A013;
        }

        .upload-toast-border-red {
            border-left: 2px solid #E74D32;
        }

        .upload-toast {
            display: flex;
            position: absolute;
            bottom: 24px;
            right: 24px;
            width: 320px;
            height: 36px;
            background: #FFF;
            box-shadow: 0 0 1px 0 rgba(7, 10, 14, 0.12), 0 8px 16px -4px rgba(9, 30, 66, 0.25);
            border-radius: 2px; 
            span {
                display: flex;
                align-items: center;
            }
            .upload-toast-img-container {
                display: flex;
                align-items: center;
                margin: 0 8px 0 16px;
                //底部上传弹窗小icon
                .check_circle-24px {
                    width: 16px;
                    height: 16px;
                    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' fill='%2378A013' /%3E%3C/svg%3E") no-repeat center/100% !important;
                }
                .cancel-24px {
                    width: 16px;
                    height: 16px;
                    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none' opacity='.87'/%3E%3Cpath d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z' fill='%23E74D32' /%3E%3C/svg%3E") no-repeat center/100% !important;
                }
                .upload-24px {
                    width: 16px;
                    height: 16px;
                    background: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cpath d='M384 682.667v-256H213.333L512 128l298.667 298.667H640v256H384M213.333 853.333V768h597.334v85.333H213.333z' fill='%231C9DD9' /%3E%3C/svg%3E") no-repeat center/100% !important;
                }
            }
            .size-14-6B7376 {
                font-size: 14px;
                color: #6B7376;
                margin-right: .5rem!important;
            }
            .size-12-6B7376 {
                font-family: Lato-Regular;
                font-size: 12px;
                color: #6B7376;
                line-height: 16px;
            }
            .upload-toast-close-container {
                position: absolute;
                right: 16px;
                top: 10px;
                .cross {
                    width: 16px;
                    height: 16px;
                    background: url("data:image/svg+xml,%3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%2351585C' d='M512 451.66l225.83-225.83c16.662-16.662 43.678-16.662 60.34 0 16.662 16.662 16.662 43.678 0 60.34L572.34 512l225.83 225.83c16.662 16.662 16.662 43.678 0 60.34-16.662 16.662-43.678 16.662-60.34 0L512 572.34 286.17 798.17c-16.662 16.662-43.678 16.662-60.34 0-16.662-16.662-16.662-43.678 0-60.34L451.66 512 225.83 286.17c-16.662-16.662-16.662-43.678 0-60.34 16.662-16.662 43.678-16.662 60.34 0L512 451.66z'/%3E%3C/svg%3E") no-repeat center/100%;
                }
            }
        }
    }
</style>