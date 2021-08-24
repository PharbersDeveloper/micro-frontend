<template>
<div>
    <div class="fixed-nav nav">
        <div class="nav-border bordernav">
            <img :src="imgSrc" class="bp-img fixed-nav-icon cursor-pointer" @click="toHome" />
            <div class="navButton">
                <img src="https://www.pharbers.com/public/icon_home_user.svg" alt="">
                <span class="name">{{allData.name}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    created() {},
    mounted() {},
    components: {
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    name: "张璐"
                }
            }
        }
    },
    data() {
        return {
            language: '中文',
            borderNone: false,
            contactForm: false,
            menu: false,
            inverse: false,
            bgc: "background: transparent",
            imgSrc: "https://www.pharbers.com/public/img_logo_ph_theme.svg",
            imgSrcLight: "https://www.pharbers.com/public/img_logo_ph_light.svg",
            selectSrc: "https://www.pharbers.com/public/icon_drop.svg",
            selectSrcLight: "https://www.pharbers.com/public/icon_drop_light.svg",
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
                    activity: "活动资讯",
                    contactUs: "联系我们",
                    login: "登录",
                    general: "法伯数据平台",
                    logout: "退出登录",
                    options_data: [
                        {
                            text: "MAX",
                            spanText: "全息市场监测利器",
                            click_event: function() {
                                this.$emit('linkToPage', 'max')
                            }
                        },
                        {
                            text: "真实数据研究",
                            spanText: "来自患者信息的多视角深度挖掘",
                            click_event: function() {
                                this.$emit('linkToPage', 'rw')
                            }
                        },
                        {
                            text: "循证咨询",
                            spanText: "多层面精准预测，营销资源配置与优化",
                            click_event: function() {
                                this.$emit('linkToPage', 'consulting')
                            }
                        }
                    ],
                    links_data: [
                        {
                            text: "活动资讯",
                            click_event: function() {
                                this.$emit('linkToPage', 'activity-list')
                            }
                        },
                        {
                            text: "关于我们",
                            click_event: function() {
                                this.$emit('linkToPage', 'about-us')
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
                    general: "General",
                    logout: "Logout",
                    options_data: [
                        {
                            text: "MAX©",
                            spanText: "Holographic Market Monitoring Tool",
                            click_event: function() {
                                this.$emit('linkToPage', 'max')
                            }
                        },
                        {
                            text: "Real World Research",
                            spanText: "Multi-perspective Deep Mining from Patient Information",
                            click_event: function() {
                                this.$emit('linkToPage', 'rw')
                            }
                        },
                        {
                            text: "Evidence-based Consulting",
                            spanText: "Multi-level Accurate Prediction Allocating and Optimizing Marketing Resource",
                            click_event: function() {
                                this.$emit('linkToPage', 'consulting')
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
        clickMenu() {
            return this.menu = !this.menu
        },
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
            this.$emit('linkToPage', 'about-us')
        },
        toActivity() {
            this.$emit('linkToPage', 'activity-list')
        },
        toHome() {
            this.$emit('linkToPage', 'home')
        },
        linkToPage(value) {
            this.$emit('linkToPage', value)
        },
        clickEvent(value) {
            this.$emit("event", value)
        },
        toGeneral() {
            window.location.href = "http://general.pharbers.com"
        },
        logout() {
            this.$emit('logout')
        },
        returnToTop() {
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
        },
        runClickEvent(click_event) {
            click_event.call(this)
            this.menu = false
        }
    }
};
</script>

<style lang="scss" scoped>
    $spacing-none: 0px;
    $spacing-compact-2x: 2*2px;
    $color-neutrals-n000: #ffffff;
    $color-neutrals-n400: rgba(#091e42,0.71);
    
    * {
        letter-spacing: .4px;
        line-height: 1.6;
        box-sizing: border-box;
    }
    
    .cursor-pointer {
        cursor: pointer;
    }
    
    .bordernav {
        border-bottom: 1px solid rgba(22, 28, 57, 0.12);
    }
    .fixed-nav {
        height: 80px;
        width: 100%;
        display: flex;
        flex-direction: row;
        top: 0;
        // padding: 0 100px;
        position: fixed;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
        .nav-border {
            height: 80px;
            width: 100%;
            display: flex;
            align-content: flex-start;
            align-items: center;
            justify-content: space-between;
            .fixed-nav-icon {
                padding-left: 20px;
            }
        }

        .navButton {
            display: flex;
            align-content: flex-start;
            align-items: center;
            justify-content: flex-start;
            padding-right: 20px;
            .name {
                margin-left: 4px;
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #25232D;
                letter-spacing: 0.25px;
                text-align: left;
                line-height: 20px;
                font-weight: 400;
            }
        }
    }
</style>
