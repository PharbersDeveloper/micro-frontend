<template>
    <div class="my-data-content-container">
        <div class="header">
            <span class="header-large">
                {{title}}
            </span>
        </div>
        <div class="data-main-container">
            <div class="subscribed-container">
                <bpText class="subscribed-title">{{subscribedTitle}}</bpText>
                <div class="subscribed-item" v-for="file in allData.database" :key="file.name">
                    <div class="left-text">
                        <img :src="fileIconDark" class="file-icon-dark" alt="">
                        <div class="text-area" >
                            <bp-text class="title">{{file.name}}</bp-text>
                            <bp-text v-if="file.description" class="subtitle">{{file.description}}</bp-text>
                            <bp-text v-else class="subtitle">暂无描述</bp-text>
                        </div>
                    </div>
                    <bp-text @click="linkToPage(file.name)" class="subscribed-button">{{goDetail}}</bp-text>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import bpPagination from '../bp-pagination.vue'
import bpSelectVue from 'vue-components/src/components/bp-select-vue.vue'
import bpOptionVue from 'vue-components/src/components/bp-option-vue.vue'
import bpText from 'vue-components/src/components/bp-text.vue'
import bpButton from 'vue-components/src/components/bp-button.vue'
import editableComponent from '../editable-component.vue'
import util from '../util.vue'

export default {
    components: {
        bpPagination,
        bpSelectVue,
        bpOptionVue,
        bpText,
        bpButton,
        editableComponent
    },
    data() {
        return {
            userName: util.methods.getCookie('user_name'),
            title: "数据资产",
            subscribedTitle: "文件名称",
            fileIconDark: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_my-data-dark.svg",
            goDetail: "查看详情"
        }
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    sort: '-created',
                    files: [],
                    database: []
                }
            }
        }
    },
    computed: {

    },
    methods: {
        linkToPage(param) {
            const event = new Event("event")
            event.args = {
                callback: "linkToPage",
                element: this,
                param: {
                    name: 'download/data-directory-table',
                    queryParams: `database=${param}`
                }
            }
            this.$emit('event', event)
        },
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return "15920cd6809a2020f78d5121a54a9273d82b389576ecc2bd59fd9bab91a00be7";
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

    @mixin btn_primary-initial {
        font-family: SFProText-Medium;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
        line-height: 20px;
    }

    @mixin btn_disabled {
        font-family: SFProText-Medium;
        font-size: 14px;
        color: #BCBAC4;
        text-align: center;
        line-height: 20px;
    }

    button.btn_primary {
        background: #7163C5 !important;
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        @include btn_primary-initial;

        &:hover {
            background: #9084D2 !important;
            @include btn_primary-initial;
        }

        &:active {
            background: #5342B3 !important;
            @include btn_primary-initial;
        }

        &:disabled {
            background: rgba(37, 35, 45, 0.04) !important;
            @include btn_disabled;
        }
    }

    button.btn_primary_dis {
        background: #f6f6f7 !important;
        color: #AAAAAA !important;
        &:hover {
            background: #f6f6f7 !important;
            @include btn_primary-initial;
        }

        &:active {
            background: #f6f6f7 !important;
            @include btn_primary-initial;
        }
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

    .body-secondary {
        font-family: SFProText-Light;
        font-size: 14px;
        color: #706F79;
        letter-spacing: 0.25px;
        line-height: 20px;
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

    .no_data-icon {
        width: 160px;
        height: 160px;
        background: url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cellipse fill='%23F5F5F6' cx='80' cy='147' rx='56' ry='5'/%3E%3Cpath d='M150.25 47.75v30.5h-12.636c.407.83.636 1.763.636 2.75a6.23 6.23 0 0 1-1.83 4.42 6.23 6.23 0 0 1-4.42 1.83 6.23 6.23 0 0 1-4.42-1.83 6.23 6.23 0 0 1-1.83-4.42c0-.987.229-1.92.636-2.75H9.75v-30.5h140.5z' stroke='%23E6E6E6' stroke-width='.5' fill='%23FFF'/%3E%3Cpath d='M150 48v30h-12.803a6 6 0 1 1-10.395 0H80V48h70z' fill='%23F2F2F3'/%3E%3Cpath d='M150.25 89.75v30.5H34.002c.161.556.248 1.143.248 1.75a6.23 6.23 0 0 1-1.83 4.42 6.23 6.23 0 0 1-4.42 1.83 6.23 6.23 0 0 1-4.42-1.83 6.23 6.23 0 0 1-1.83-4.42c0-.607.087-1.194.248-1.75H9.75v-30.5h116.957a5.731 5.731 0 0 0-.457 2.25c0 1.588.644 3.025 1.684 4.066A5.732 5.732 0 0 0 132 97.75a5.732 5.732 0 0 0 4.066-1.684A5.732 5.732 0 0 0 137.75 92c0-.798-.163-1.559-.457-2.25h12.957z' stroke='%23E6E6E6' stroke-width='.5' fill='%23FFF'/%3E%3Cpath d='M150 90v30H80V90h46.341a6 6 0 1 0 11.317 0H150z' fill='%23F2F2F3'/%3E%3Cpath fill='%23E8E8E9' d='M16 66h64v-8H16zM16 108h64v-8H16z'/%3E%3Cpath fill='%239794A7' d='M80 66h64v-8H80zM80 108h64v-8H80z'/%3E%3Cpath fill='%23E8E8E9' d='M16 72h16v-4H16zM16 114h16v-4H16z'/%3E%3Cpath d='M148 31.75c.621 0 1.184.252 1.591.659.407.407.659.97.659 1.591v14.25H34.002c.161.556.248 1.143.248 1.75a6.23 6.23 0 0 1-1.83 4.42A6.23 6.23 0 0 1 28 56.25a6.23 6.23 0 0 1-4.42-1.83A6.23 6.23 0 0 1 21.75 50c0-.607.087-1.194.248-1.75H9.75V34c0-.621.252-1.184.659-1.591.407-.407.97-.659 1.591-.659z' stroke='%23E6E6E6' stroke-width='.5' fill='%23FFF'/%3E%3Cpath d='M80 32h68a2 2 0 0 1 2 2v14H80V32z' fill='%23F2F2F3'/%3E%3Ccircle fill='%239B9AAB' cx='18' cy='40' r='2'/%3E%3Ccircle fill='%23BEBBC8' cx='24' cy='40' r='2'/%3E%3Ccircle fill='%23DEDDE2' cx='30' cy='40' r='2'/%3E%3C/g%3E%3C/svg%3E") no-repeat center/100%;
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
        .header {
            height: 62px;
            width: 100%;
            padding: 20px 24px 0;
            border-bottom: 1px solid rgba(37,35,45,.08);
            .header-large {
                font-family: SFProText-Regular;
                font-size: 20px;
                color: #302F39;
                letter-spacing: .25px;
                line-height: 28px;
            }
        }

        .data-main-container {
            display: flex;
            flex-direction: column;
            flex: 1;
            position: relative;
            .subscribed-container {
                flex: 1;
                display: flex;
                flex-direction: column;
                padding: 12px 20px 8px 20px;
                height: 507px;
                min-height: 0;
                .subscribed-title {
                    font-family: SFProText-Regular;
                    font-size: 12px;
                    color: #706F79;
                    letter-spacing: 0.25px;
                    text-align: left;
                    line-height: 16px;
                    font-weight: 400;
                    padding: 9px 0;
                    border-bottom: 1px solid  rgba(37,35,45,0.08);
                }
                .subscribed-item {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid  rgba(37,35,45,0.08);
                    padding: 12px 0;
                    .left-text {
                        display: flex;
                        .file-icon-dark {
                            width: 38px;
                            height: 38px;
                            margin-right: 14px;
                        }
                        .text-area {
                            display: flex;
                            flex-direction: column;
                            .title {
                                font-family: SFProText-Regular;
                                font-size: 14px;
                                color: #25232D;
                                letter-spacing: 0.25px;
                                text-align: left;
                                line-height: 20px;
                                font-weight: 400;
                                margin-bottom: 3px;
                            }
                            .subtitle {
                                font-family: SFProText-Light;
                                font-size: 12px;
                                color: #706F79;
                                letter-spacing: 0.25px;
                                line-height: 16px;
                                font-weight: 200;
                            }
                        }
                    }
                    .subscribed-button {
                        width: 80px;
                        height: 32px;
                        background: #f6f6f7;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-family: SFProText-Medium;
                        font-size: 14px;
                        color: #57565F;
                        letter-spacing: 0;
                        text-align: center;
                        line-height: 20px;
                        font-weight: 500;
                        border-radius: 2px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
