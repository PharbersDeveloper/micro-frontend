<template>
    <div class="max-saas-import">
        <div class="header">
            <img src="https://www.pharbers.com/public/img_logo_ph_theme.svg" class="logo" alt="">
            <img src=" " class="user-img" alt="">
        </div>

        <div class="main">
            <div class="import-introduction">
                <div class="import-message">
                    <span class="heading-large">导入<span class="body-secondary ml-2">de522809-937c-5</span></span>
                    <span class="body-tertiary">上次更新时间 17 Oct,2020 22:45</span>
                </div>
                <button>确认导入</button>
            </div>

            <div class="file-main">
                <div class="file-left-container">
                    <span class="heading-small">源文件：cpa_pchc_universe</span>
                    <div class="source-content-container ">
                        <div class="source-border">
                            <bp-excel></bp-excel>
                        </div>

                        <bp-select-vue choosedValue="" src="https://www.pharbers.com/public/icon_home_user.svg" iconClass="">
                        </bp-select-vue>
                    </div>
                    <span class="heading-small">目标文件</span>
                    <div class="target-content-container ">
                        <div class="target-border">
                            <bp-excel></bp-excel>
                        </div>

                        <bp-select-vue choosedValue="" src="https://www.pharbers.com/public/icon_home_user.svg" iconClass="">
                            <bp-option-vue text="自定映射"></bp-option-vue>
                            <bp-option-vue text="显示条目"></bp-option-vue>
                            <bp-option-vue text="换一批"></bp-option-vue>
                            <bp-option-vue text="显示全部"></bp-option-vue>
                        </bp-select-vue>
                    </div>
                </div>

                <div class="file-right-container">
                    <import-file-list></import-file-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import importFileList from '../import-file-list.vue'
import bpExcel from '../bp-excel.vue'
import bpSelectVue from '../../../node_modules/vue-components/src/components/bp-select-vue.vue'
import bpOptionVue from '../../../node_modules/vue-components/src/components/bp-option-vue.vue'
export default {
    components: {
        importFileList,
        bpExcel,
        bpSelectVue,
        bpOptionVue
    }
}
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    .ml-2 {
        margin-left: 8px;
    }

    button {
        border: 0;
        outline: 0;
        cursor: pointer;
    }

    .body-secondary {
        font-family: SFProText-Light;
        font-size: 14px;
        color: #706F79;
        letter-spacing: 0.25px;
        line-height: 20px;
        font-weight: 200;
    }

    .body-tertiary {
        font-family: PingFangSC-Light;
        font-size: 12px;
        color: #706F79;
        letter-spacing: 0.25px;
        line-height: 16px;
        font-weight: 200;
    }

    @mixin btn_primary-initial {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
        line-height: 20px;
        font-weight: 500;
    }

    @mixin body-primary {
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #25232D;
        letter-spacing: 0.25px;
        line-height: 20px;
        font-weight: 200;
    }

    .heading-small {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #25232D;
        letter-spacing: 0.25px;
        text-align: left;
        line-height: 20px;
        font-weight: 400;
    }

    .max-saas-import {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .header {
            display: flex;
            width: 100%;
            height: 72px;
            justify-content: space-between;
            align-items: center;
            background: #FFFFFF;
            box-shadow: 0 0 1px 0 rgba(37,35,45,0.12), 0 1px 1px 0 rgba(37,35,45,0.25);
            padding: 0 20px;
            margin-bottom: 20px;
            flex-shrink: 0;

            .logo {
                width: 100px;
                height: 32px;
            }

            .user-img {
                width: 32px;
                height: 32px;
            }
        }

        .main {
            display: flex;
            flex-direction: column;
            padding: 0 20px;
            margin-bottom: 20px;
            flex: 1;

            .import-introduction {
                display: flex;
                justify-content: space-between;
                margin-bottom: 20px;

                .import-message {
                    display: flex;
                    flex-direction: column;
                }

                button {
                    width: 82px;
                    height: 32px;
                    background: #7163C5;
                    border-radius: 2px;
                    @include btn_primary-initial;
                }
            }

            .file-main {
                display: flex;
                height: 100%;
                flex: 1;

                .file-left-container {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    border-right: 1px solid rgba(37,35,45,0.08);
                    margin-right: 20px;
                    padding-right: 9px;

                    .source-content-container {
                        display: flex;
                        margin-bottom: 20px;
                        width: 100%;

                        .source-border {
                            width: 100%;
                            height: 46px;
                            border: 1px solid rgba(37,35,45,0.12);
                            border-radius: 2px;
                            padding: 4px;
                            margin-right: 4px;
                        }

                        .bp-select {
                            width: 24px;
                            height: 24px;

                            /deep/.bp-select-title {
                                padding: 0;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }
                        }
                    }

                    .target-content-container {
                        display: flex;
                        flex-grow: 1;
                        width: 100%;
                        margin-top: 20px;

                        .target-border {
                            width: 100%;
                            border: 1px solid rgba(37,35,45,0.12);
                            border-radius: 2px;
                            padding: 4px;
                            margin-right: 4px;
                        }

                        .bp-select {
                            width: 24px;
                            height: 24px;

                            /deep/.bp-select-title {
                                padding: 0;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }

                            /deep/.bp-option-group {
                                width: 81px;

                                .bp-option {
                                    padding: 0 12px;
                                    @include body-primary;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>