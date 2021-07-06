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
                            <bp-option-vue text="Updated Time"></bp-option-vue>
                            <bp-option-vue text="Created Time"></bp-option-vue>
                            <div class="option-line mt-1 mb-1"></div>
                            <bp-option-vue text="Ascending"></bp-option-vue>
                            <bp-option-vue text="Descending"></bp-option-vue>
                        </bp-select-vue>
                    </span>
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

export default {
    components: {
        bpPagination,
        bpSelectVue,
        bpOptionVue
    },
    data() {
        return {
            haveData: true,
            myDataTab: 0
        }
    },
    props: {
        sort: {
            type: String,
            default: "-created"
        }
    },
    computed: {
        iconSort() {
            if (this.sort.indexOf('-') === -1) {
                return 'https://general.pharbers.com/icon_sorting-ascending'
            } else {
                return 'https://general.pharbers.com/icon_sorting-descending'
            }        
        },
        mineSortText() {
            if (this.sort.indexOf('created') === -1) {
                return "Updated Time"
            } else {
                return "Created Time"
            }
        }
    },
    methods: {
        changeTab(num) {
            this.myDataTab = num
            this.$emit('changeTab', num)
        }
    }
}
</script>
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
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
                        padding: 0 9px;
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
                    }
                }
            }
        }
    }
</style>