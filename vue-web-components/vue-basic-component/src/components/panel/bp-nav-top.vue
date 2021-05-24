<template>
<!-- 淡入淡出动画 -->
<transition name="fade">
    <div class="fixed-nav" 
        :class="[inverse ? 'navInverse' : 'nav', {'bgWhite': bgWhite}]"
    >
        <div :class="[
            borderNone ? 'borderNone' : 'bordernavInverse',
            {'borderNone': borderNone},
            {'bgWhite': bgWhite}]"
            class="nav-border"
        >
            <img :src="imgSrc" alt="" class="bp-img fixed-nav-icon cursor-pointer" @click="toHome" />
            <div class="selectMenu">
                <bpSelect 
                    :disSelected="true"
                    src='https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_drop.svg'
                    :choosed_value="translation_data.choosed_value" :options_data="translation_data.options_data"></bpSelect>
                <span class="bp-text" @click="toAboutUs">{{translation_data.aboutUs}}</span>
            </div>
            <div class="navButton">
                <bpButton :text="translation_data.contactUs" class="concact" @click="contactUs"></bpButton>
                <bpButton :text="translation_data.login" class="login"></bpButton>
            </div>
        </div>
        <bp-modal-form v-if="contactForm" :translation_data="translation_data" @closeModal="closeModal" @submitClientData="submitClientData"/>
    </div>
</transition>
</template>

<script>
import bpSelect from '../bp-select.vue'
import bpButton from '../bp-button.vue'
import bpSelectVue from '../bp-select-vue.vue'
import bpOptionVue from '../bp-option-vue.vue'
import bpModalForm from './bp-modal-form.vue'
export default {
    created() {
        let curLang = window.localStorage.getItem('lang')

        this.language = curLang
    },
    mounted() {
        const that = this
        window.onscroll = () => {
            let top = document.scrollingElement.scrollTop; //触发滚动条
            if (top == 0) {
                //回到页面顶部
                that.bgWhite = false;
                that.borderNone = false
            } else {
                //不在页面顶部
                that.bgWhite = true;
                that.borderNone = true
            }
        }

        window.addEventListener('setItemEvent', function(e) {
            that.language = e.newValue
        })
    },
    components: {
        bpSelect,
        bpButton,
        bpSelectVue,
        bpOptionVue,
        bpModalForm
    },
    props: {
        inverse: {
            //是否背景透明
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {
            language: '中文',
            bgWhite: false,
            borderNone: false,
            contactForm: false,
            imgSrc: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_theme.svg",
            translation_basedata: {
                cn: {
                    MAX: {
                        max: "Max"
                    },
                    consulting: {
                        consult: "循证咨询"
                    },
                    choosed_value: "产品与服务",
                    aboutUs: "关于我们",
                    contactUs: "联系我们",
                    login: "登录",
                    options_data: [
                        {
                            text: "MAX",
                            spanText: "全息市场监测利器",
                            click_event: function() {
                                this.$emit('toMax', 'max')
                            }
                        },
                        {
                            text: "真实数据研究",
                            spanText: "来自患者信息的多视角深度挖掘",
                            click_event: function() {
                                this.$emit('toRW', 'rw')
                            }
                        },
                        {
                            text: "循证咨询",
                            spanText: "多层面精准预测，营销资源配置与优化",
                            click_event: function() {
                                this.$emit('toConsulting', 'consulting')
                            }
                        }
                    ],
                    modalForm: {
                        download: "下载报告",
                        contactUs: "联系我们",
                        name: "如何称呼您",
                        nameBlank: "请填写您的姓名",
                        company: "您所在的团队",
                        companyBlank: "请填写您的团队名称",
                        department: "您所在的部门",
                        position: "您的职位",
                        email: "您的工作邮箱",
                        emailBlank: "请填写您的邮箱",
                        emailWrong: "邮箱格式有误，请填写正确的邮箱地址",
                        intention: "您感兴趣的内容",
                        dataService: "数据研究服务",
                        submit: "提交",
                        'submit&download': "提交并下载",
                        submitSuccess: "提交成功",
                        submitFeedback: "已收到您的信息，我们将尽快与您联系",
                        ok: "好的"
                    }
                },
                en: {
                    MAX: {
                        max: "MAX©"
                    },
                    consulting: {
                        consult: "Evidence-based Consulting"
                    },
                    choosed_value: "PRODUCTS",
                    aboutUs: "COMPANY",
                    contactUs: "Contact Us",
                    login: "Log in",
                    options_data: [
                        {
                            text: "MAX©",
                            spanText: "Holographic Market Monitoring Tool",
                            click_event: function() {
                                this.$emit('toMax', 'max')
                            }
                        },
                        {
                            text: "Real World Research",
                            spanText: "Multi-perspective Deep Mining from Patient Information",
                            click_event: function() {
                                this.$emit('toRW', 'rw')
                            }
                        },
                        {
                            text: "Evidence-based Consulting",
                            spanText: "Multi-level Accurate Prediction Allocating and Optimizing Marketing Resource",
                            click_event: function() {
                                this.$emit('toConsulting', 'consulting')
                            }
                        }
                    ],
                    modalForm:{
                        download: "Download Report",
                        contactUs: "Contact Us",
                        name: "Full Name",
                        nameBlank: "Please enter your first and last name.",
                        company: "Company",
                        companyBlank: "Please enter your company name.",
                        department: "Department",
                        position: "Job Title",
                        email: "Work Email",
                        emailBlank: "Please enter your work email.",
                        emailWrong: "Please enter a vaild email.",
                        intention: "Which one is your interested part?",
                        dataService: "Data Service",
                        submit: "Submit",
                        'submit&download': "Submit and Download",
                        submitSuccess: "Submitted successfully",
                        submitFeedback: "Information received and we will contact you as soon as possible",
                        ok: "OK"
                    }
                }
            }
        }
    },
    computed: {
        translation_data: function() {
            if (this.language === '中文') {
                return this.translation_basedata.cn
            } else if (this.language === 'English') {
                return this.translation_basedata.en
            }
        }
    },
    methods: {
        contactUs() {
            this.contactForm = true
        },
        closeModal() {
            this.contactForm = false
        },
        submitClientData(value) {
            this.$emit('submitClientData', value)
        },
        toAboutUs() {
            this.$emit('toAboutUs', 'about-us')
        },
        toHome() {
            this.$emit('toHome', 'home')
        }
    }
};
</script>

<style lang="scss" scoped>
    $spacing-none: 0px;
    $spacing-compact-2x: 2*2px;
    $color-neutrals-n000: #ffffff;
    $color-neutrals-n400: rgba(#091e42,0.71);
    .borderNone {
        border-bottom: 0px !important;
    }

    .nav {
        background: #fff;
        // border-bottom: 1px solid rgba(22, 28, 57, 0.12);
        text-align: center;
        font-size: 14px;
    }
    
    .bordernavInverse {
        border-bottom: 1px solid rgba(22, 28, 57, 0.12);
    }

    .navInverse {
        background: #666;
        text-align: center;
        font-size: 14px;
    }

    .bgWhite {
        background-color: #fff !important;
    }
    .fixed-nav {
        height: 80px;
        width: 100%;
        display: flex;
        flex-direction: row;
        top: 0;
        padding: 0 100px;
        position: fixed;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
        .selectMenu {
            height: auto;
            width: auto;
            background: 0 0;
            color: #FFF;
            font-size: 14px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            display: flex;
            align-content: flex-start;
            padding: 0;
            .bp-select {
                height: 40px;
                width: max-content;
                background: 0 0;
                padding: 0;
                margin: 0;
                position: relative;
                cursor: pointer;
                box-sizing: border-box;
                color: #2D334D;
            }
            .bp-select:hover {
                background: transparent;
            }
            .bp-select:focus {
                outline: none;
            }
            /deep/.bp-select .bp-option {
                height: auto;
                min-height: 32px;
                width: 100%;
                background: 0 0;
                color: #344563;
                display: flex;
                padding: 0 16px;
                align-items: center;
                margin-bottom: 16px;
                text-align: left;
            }

            .bp-select .bp-option:hover {
                background-color: #EBECF0;
            }
            /deep/.bp-select-title {
                height: 100%;
                // width: 170px !important;
                width: max-content !important;
                display: flex;
                align-items: center;
                padding: 0 8px;
                justify-content: space-between;
            }
            /deep/.bp-option-group {
                position: absolute;
                width: max-content !important;
                background: #fff;
                padding-top: 16px;
                max-width: 300px;
                margin: 0;
                padding: 4px 0;
                border-radius: 3px;
                box-shadow: 0 4px 8px -2px rgba(9, 30, 66, 0.25);
            }
            .bp-option:hover {
                background-color: #EBECF0;
            }
            .option-active {
                color: $color-neutrals-n000 !important;
                background-color: $color-neutrals-n400 !important;
            }
            .option-active .icon path {
                fill: $color-neutrals-n000;
            }
            .bp-text {
                height: auto;
                width: auto;
                background: 0 0;
                color: #2D334D!important;
                font-size: 14px;
                letter-spacing: 0;
                margin-left: 32px;
                cursor: pointer!important;
                padding: 0;
            }
        }

        

        .nav-border {
            height: 80px;
            width: 100%;
            display: flex;
            align-content: flex-start;
            align-items: center;
            justify-content: space-between;
        }

        .navButton {
            display: flex;
            align-content: flex-start;
            align-items: stretch;
            justify-content: flex-start;
            .concact {
                background: #FFDD4D!important;
                border: none;
                border-radius: 40px!important;
                line-height: 32px!important;
                height: 32px!important;
                color: #2D334D!important;
                text-align: center!important;
                display: inline-block!important;
                padding: 0 10px;
                font-size: 14px;
                margin-right: 8px;
            }
            .login {
                color: #2D334D!important;
                border: 1px solid rgba(22,28,57,.12)!important;
                border-radius: 40px!important;
                line-height: 32px!important;
                height: 32px!important;
                width: 80px!important;
                background: 0 0!important;
                text-align: center!important;
                display: inline-block!important;
                font-size: 14px;
            }
        }
    }
    @media screen and (max-width: 992px) and (min-width: 769px) {
        ::-webkit-scrollbar-thumb {
            background: transparent;
        }
        .fixed-nav {
            padding: 0 60px !important;
        }
    }
    @media screen and (max-width: 768px) and (min-width: 480px) {
        ::-webkit-scrollbar-thumb {
            background: transparent;
        }
        .fixed-nav, .fixed-nav-inverse {
            padding: 0 40px !important;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 1s;
    }
</style>
