<template>
    <div class="max-saas-import">
        <!-- <div class="header">
            <img src="https://www.pharbers.com/public/img_logo_ph_theme.svg" class="logo" alt="">
            <img src=" " class="user-img" alt="">
        </div> -->
        <div class="main">
            <div class="import-introduction">
                <div class="import-message">
                    <span class="heading-large">导入<span class="body-secondary ml-2">de522809-937c-5</span></span>
                    <span class="body-tertiary">上次更新时间 17 Oct,2020 22:45</span>
                </div>
                <button @click="confirmImport">确认导入</button>
            </div>

            <div class="file-main">
                <div class="file-left-container">
                    <span class="heading-small">源文件：cpa_pchc_universe</span>
                    <div class="source-content-container ">
                        <div class="source-border">
                            <bp-excel-second :colHeaders="allData.schemasNames"></bp-excel-second>
                        </div>

                         <bp-select-vue choosedValue="" src="https://www.pharbers.com/public/icon_home_user.svg" iconClass="">
                            <bp-option-vue text="自定映射" :disabled=true @click="mappingClick"></bp-option-vue>
                            <bp-option-vue text="显示条目" :disabled=true></bp-option-vue>
                            <bp-option-vue text="换一批" :disabled=true></bp-option-vue>
                            <bp-option-vue text="显示全部" :disabled=true></bp-option-vue>
                        </bp-select-vue>
                    </div>
                    <span class="heading-small">目标文件</span>
                    <div class="target-content-container ">
                        <div class="target-border">
                            <bp-excel-second :colHeaders="allData.targetNames"></bp-excel-second>
                        </div>

                        <bp-select-vue choosedValue="" src="https://www.pharbers.com/public/icon_home_user.svg" iconClass="">
                            <bp-option-vue text="显示条目" :disabled=true></bp-option-vue>
                            <bp-option-vue text="换一批" :disabled=true></bp-option-vue>
                            <bp-option-vue text="显示全部" :disabled=true></bp-option-vue>
                        </bp-select-vue>
                    </div>
                </div>

                <div class="file-right-container">
                    <import-file-list @clickfile="clickfile" :lists="allData.assets"></import-file-list>
                </div>
            </div>
        </div>
        <mapping-box v-if="mappingModelShow" @cancel="closeMappingModal" :fileName="allData.fileName" :sourceList="allData.schemasNames" :targetList="allData.targetNames" @confirmMappingEvent="confirmMappingEvent"></mapping-box>
    </div>
</template>

<script>
import mappingBox from '../mapping-box.vue'
import importFileList from '../import-file-list.vue'
import bpExcelSecond from '../bp-excel-second.vue'
import bpSelectVue from '../../../node_modules/vue-components/src/components/bp-select-vue.vue'
import bpOptionVue from '../../../node_modules/vue-components/src/components/bp-option-vue.vue'
export default {
    components: {
        importFileList,
        bpExcelSecond,
        bpSelectVue,
        bpOptionVue,
        mappingBox
    },
    data() {
        return {
            mappingModelShow: false,
            fileIndex: 0,
            colorList: ["#A660EC", "#F3A250", "#5CA6EF", "#FF8B00", "#E9638F", "#C3DD41", "#BF2600", "#7D67E4", "#21A194", "#42526E", "#49CEEB", "#006644", "#F7D735", "#4ADDC5", "#44E494", "#459DBA", "#4D4B28", "#C5A97B", "#AF9235", "#AC5D83"]
        }
    },
    methods: {
        clickfile(data) {
            this.fileIndex = data.args.param.select
            this.$emit('event', data)
        },
        confirmImport() {
            this.allData.schemasNames = ["sadsad", "safas", "weq"]
        },
        mappingClick() {
            this.mappingModelShow = true
        },
        closeMappingModal() {
            this.mappingModelShow = false
        },
        confirmMappingEvent(data) {
            data.args.param.userData = this.allData.userData
            data.args.param.fileData = this.allData.assets[this.fileIndex]
            this.$emit('event', data)
        }
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    assets: [{
                        name: 'cpa_pchc_universe',
                        provider: 'After dda',
                        state: 'success',
                        labels: [1,2,3,4,5,6]
                    },{
                        name: 'cpa_pchc_universe',
                        provider: 'After dda',
                        state: 'success',
                        labels: [1,2,3,4,5,6]
                    }],
                    schemasNames: ['1','2','3'],
                    targetNames: ['q','s','f'],
                    fileName: '',
                    userData: {}
                }
            }
        },
        random: Number
    },
    watch: {
        random: function() {
            this.$forceUpdate()
        },
        "allData.middleList": function() {
            debugger
        }
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
        margin-bottom: 12px;
    }

    .max-saas-import {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 80px 24px 24px;
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
            margin-bottom: 20px;
            flex: 1;
            .import-introduction {
                display: flex;
                justify-content: space-between;
                margin: 20px 0;
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
                    .source-content-container {
                        display: flex;
                        margin-bottom: 20px;
                        width: 100%;

                        .source-border {
                            width: 100%;
                            height: 52px;
                            border: 1px solid rgba(37,35,45,0.12);
                            border-radius: 2px;
                            padding: 4px;
                            margin-right: 4px;
                        }
                    }

                    .target-content-container {
                        display: flex;
                        flex-grow: 1;
                        width: 100%;
                        .target-border {
                            width: 100%;
                            border: 1px solid rgba(37,35,45,0.12);
                            border-radius: 2px;
                            padding: 4px;
                            margin-right: 4px;
                        }
                    }
                }
            }
        }
    }
</style>