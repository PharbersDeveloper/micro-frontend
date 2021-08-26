<template>
    <div class="max-saas">
        <div class="header-option">
            <span class="header">项目信息</span>
            <div class="date-button">
                <bp-select-vue beforeSrc="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_chevron-down_12.svg" :choosedValue="choosedYear">
                    <bp-option-vue :text="item" v-for="item in yearArr" @click="clickYear(item)"></bp-option-vue>
                </bp-select-vue>
                <bp-select-vue beforeSrc="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_chevron-down_12.svg" :choosedValue="choosedMonth">
                    <bp-option-vue :text="item" v-for="item in monthArr" @click="clickMonth"></bp-option-vue>
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
                                <ph-table-cell type="upload" :value="row.upload" :date="choosedYear+ '-' +choosedMonth" :project="row" :index="index" @tableClickEvent="tableClickEvent"></ph-table-cell>
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
            <!-- <div class="max-table-body-area"> -->
                <div class="max-table-body">
                    <div class="max-table-row" v-for="(row,index) in allData.projectsData" :key="index">
                        <div class="max-table-cell" id="project-name"><div>{{row.provider}}</div></div>
                        <div class="max-table-cell">
                            <ph-table-cell type="upload" :value="row.upload" :date="choosedYear+ '-' +choosedMonth" :project="parseData(row.actions)" :index="index" @tableClickEvent="tableClickEvent"></ph-table-cell>
                        </div>
                    </div>
                <!-- </div> -->
            </div>
        </div>
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
                <div class="opt-table-body" v-for="opt in optTable" :key="opt.name">
                    <div class="date">{{opt.time}}</div>
                    <div class="optioner">{{opt.optioner}}</div>
                    <div class="optionData">{{opt.data}}</div>
                    <div class="memo">{{opt.memo}}</div>
                    <div class="status">{{opt.status}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import phTableCell from './ph-table-cell.vue'
import bpSelectVue from '../../node_modules/vue-components/src/components/bp-select-vue.vue'
import bpOptionVue from '../../node_modules/vue-components/src/components/bp-option-vue.vue'
import bpButton from '../../node_modules/vue-components/src/components/bp-button.vue'
export default {
    components: {
        phTableCell,
        bpSelectVue,
        bpOptionVue,
        bpButton
    },
    data() {
        return {
            choosedYear: "2020",
            choosedMonth: "01",
            monthArr: [],
            yearArr: ['2021', '2020'],
            nowMonthArr: [],
            lastMonthArr: []
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
                        },
                        {
                            "provider": "Bayer",
                            "time": "1627747200000",
                            "actions": "[{\"owner\":\"5UBSLZvV0w9zh7-lZQap\",\"showName\":\"钱鹏\",\"version\":\"测试文件.xlsx\",\"code\":0,\"jobDesc\":\"success\",\"jobCat\":\"upload\",\"comments\":\"测试数据\",\"message\":\"\",\"date\":1629869854734}]"
                        },
                        {
                            "provider": "Servier",
                            "time": "1627747200000",
                            "actions": "[{\"owner\":\"5UBSLZvV0w9zh7-lZQap\",\"showName\":\"钱鹏\",\"version\":\"测试文件.xlsx\",\"code\":0,\"jobDesc\":\"success\",\"jobCat\":\"upload\",\"comments\":\"测试数据\",\"message\":\"\",\"date\":1629869854734}]"
                        },
                        {
                            "provider": "奥鸿",
                            "time": "1627747200000",
                            "actions": "[{\"owner\":\"5UBSLZvV0w9zh7-lZQap\",\"showName\":\"钱鹏\",\"version\":\"测试文件.xlsx\",\"code\":0,\"jobDesc\":\"success\",\"jobCat\":\"upload\",\"comments\":\"测试数据\",\"message\":\"\",\"date\":1629869854734}]"
                        },
                        {
                            "provider": "泰德",
                            "time": "1627747200000",
                            "actions": "[{\"owner\":\"5UBSLZvV0w9zh7-lZQap\",\"showName\":\"钱鹏\",\"version\":\"测试文件.xlsx\",\"code\":0,\"jobDesc\":\"success\",\"jobCat\":\"upload\",\"comments\":\"测试数据\",\"message\":\"\",\"date\":1629869854734}]"
                        },
                        {
                            "provider": "BMS",
                            "time": "1627747200000",
                            "actions": "[{\"owner\":\"5UBSLZvV0w9zh7-lZQap\",\"showName\":\"钱鹏\",\"version\":\"测试文件.xlsx\",\"code\":0,\"jobDesc\":\"success\",\"jobCat\":\"upload\",\"comments\":\"测试数据\",\"message\":\"\",\"date\":1629869854734}]"
                        },
                        {
                            "provider": "UCB",
                            "time": "1627747200000",
                            "actions": "[{\"owner\":\"5UBSLZvV0w9zh7-lZQap\",\"showName\":\"钱鹏\",\"version\":\"测试文件.xlsx\",\"code\":0,\"jobDesc\":\"success\",\"jobCat\":\"upload\",\"comments\":\"测试数据\",\"message\":\"\",\"date\":1629869854734}]"
                        },
                        {
                            "provider": "倍特",
                            "time": "1627747200000",
                            "actions": "[{\"owner\":\"5UBSLZvV0w9zh7-lZQap\",\"showName\":\"钱鹏\",\"version\":\"测试文件.xlsx\",\"code\":0,\"jobDesc\":\"success\",\"jobCat\":\"upload\",\"comments\":\"测试数据\",\"message\":\"\",\"date\":1629869854734}]"
                        },
                        {
                            "provider": "Amgen",
                            "time": "1627747200000",
                            "actions": "[{\"owner\":\"5UBSLZvV0w9zh7-lZQap\",\"showName\":\"钱鹏\",\"version\":\"测试文件.xlsx\",\"code\":0,\"jobDesc\":\"success\",\"jobCat\":\"upload\",\"comments\":\"测试数据\",\"message\":\"\",\"date\":1629869854734}]"
                        },
                        {
                            "provider": "Lilly",
                            "time": "1627747200000",
                            "actions": "[{\"owner\":\"5UBSLZvV0w9zh7-lZQap\",\"showName\":\"钱鹏\",\"version\":\"测试文件.xlsx\",\"code\":0,\"jobDesc\":\"success\",\"jobCat\":\"upload\",\"comments\":\"测试数据\",\"message\":\"\",\"date\":1629869854734}]"
                        },
                        {
                            "provider": "恩华",
                            "time": "1627747200000",
                            "actions": "[{\"owner\":\"5UBSLZvV0w9zh7-lZQap\",\"showName\":\"钱鹏\",\"version\":\"测试文件.xlsx\",\"code\":0,\"jobDesc\":\"success\",\"jobCat\":\"upload\",\"comments\":\"测试数据\",\"message\":\"\",\"date\":1629869854734}]"
                        },
                        {
                            "provider": "Astellas",
                            "time": "1627747200000",
                            "actions": "[{\"owner\":\"5UBSLZvV0w9zh7-lZQap\",\"showName\":\"钱鹏\",\"version\":\"测试文件.xlsx\",\"code\":0,\"jobDesc\":\"success\",\"jobCat\":\"upload\",\"comments\":\"测试数据\",\"message\":\"\",\"date\":1629869854734}]"
                        },
                        {
                            "provider": "Pfize",
                            "time": "1627747200000",
                            "actions": "[{\"owner\":\"5UBSLZvV0w9zh7-lZQap\",\"showName\":\"钱鹏\",\"version\":\"测试文件.xlsx\",\"code\":0,\"jobDesc\":\"success\",\"jobCat\":\"upload\",\"comments\":\"测试数据\",\"message\":\"\",\"date\":1629869854734}]"
                        }
                    ]
                }
            }
        },
        rows: {
            type: Array,
            default() {
                return [
                    {
                        project: "AZ",
                        upload: "Operator1",
                        import: "Operator2",
                        clean: "Operator3",
                        calculation: "Operator4",
                        report: "Operator5"
                    },
                    {
                        project: "AZ",
                        upload: "Operator1",
                        import: "Operator2",
                        clean: "Operator3",
                        calculation: "Operator4",
                        report: "Operator5"
                    },
                    {
                        project: "AZ",
                        upload: "Operator1",
                        import: "Operator2",
                        clean: "Operator3",
                        calculation: "Operator4",
                        report: "Operator5"
                    },
                    {
                        project: "AZ",
                        upload: "Operator1",
                        import: "Operator2",
                        clean: "Operator3",
                        calculation: "Operator4",
                        report: "Operator5"
                    }
                ]
            }
        },
        optTable: {
            type: Array,
            default: function() {
                return [{
                    time: "111",
                    optioner: "222",
                    data: "222",
                    memo: "333",
                    status: "322"
                }]
            }
        }
    },
    methods: {
        tableClickEvent(data) {
            this.$emit('event', data)
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
        parseData(data) {
            let datas = JSON.parse(data)
            return datas[0]
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
    .max-saas {
        display: flex;
        flex-direction: column;
        padding: 104px 24px 24px;
        width: 100%;
        height: 100%;
        .header-option {
            display: flex;
            justify-content: space-between;
            align-items: center;
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
            min-height: 347px;
            overflow: scroll;
            .max-table-container {
                display: table;
                margin-top: 20px;
                margin-bottom: 28px;
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
                    height: 314px !important;
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
    }
</style>