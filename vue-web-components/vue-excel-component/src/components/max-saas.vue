<template>
    <div class="max-saas">
        <div class="header-option">
            <span class="header">项目信息</span>
            <div class="date-button">
                <bp-select-vue beforeSrc="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_chevron-down_12.svg" :choosedValue="year">
                    <bp-option-vue text="2020年" ></bp-option-vue>
                </bp-select-vue>
                <bp-select-vue beforeSrc="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_chevron-down_12.svg" :choosedValue="month">
                    <bp-option-vue text="1月" ></bp-option-vue>
                </bp-select-vue>
                <bp-button class="create" text="新建Max项目"></bp-button>
            </div>
        </div>
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
            <div class="max-table-body">
                <div class="max-table-row" v-for="(row,index) in rows" :key="index">
                    <div class="max-table-cell" id="project-name"><div>{{row.project}}</div></div>
                    <div class="max-table-cell"><ph-table-cell type="upload" :value="row.upload"></ph-table-cell></div>
                    <div class="max-table-cell"><ph-table-cell type="import" :value="row.import"></ph-table-cell></div>
                    <div class="max-table-cell"><ph-table-cell type="clean" :value="row.clean"></ph-table-cell></div>
                    <div class="max-table-cell"><ph-table-cell type="calculation" :value="row.calculation"></ph-table-cell></div>
                    <div class="max-table-cell"><ph-table-cell type="report" :value="row.report"></ph-table-cell></div>
                </div>
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
            year: "2020年",
            month: "1月"
        }
    },
    props: {
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
        padding: 24px;
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