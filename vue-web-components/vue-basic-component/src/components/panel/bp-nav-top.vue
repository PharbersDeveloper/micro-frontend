<template>
<!-- 淡入淡出动画 -->
<transition name="fade">
    <!-- 导航条 -->
    <div class="fixed-nav" :class="[
            inverse ? 'navInverse' : 'nav',
            {'borderNone': borderNone},
            {'bgWhite': bgWhite}]">
        <div :class="[
            inverse ? 'bordernavInverse' : 'nav',
            {'borderNone': borderNone},
            {'bgWhite': bgWhite}
            ]"
            class="nav-border" >
            <img :src="imgSrc" alt="" class="bp-img fixed-nav-icon cursor-pointer" />
            <div class="selectMenu">
                <bpSelect 
                    :disSelected="true"
                    :src="require('../../assets/icons/down.svg')"
                    :choosed_value="choosed_value" :options_data="options_data"></bpSelect>
                <span class="bp-text">关于我们</span>
            </div>
            <div class="navButton">
                <bpButton text="联系我们" class="concact"></bpButton>
                <bpButton text="登录" class="login"></bpButton>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
import bpSelect from '../bp-select.vue'
import bpButton from '../bp-button.vue'
import bpSelectVue from '../bp-select-vue.vue'
import bpOptionVue from '../bp-option-vue.vue'
export default {
    mounted() {
        window.onscroll = () => {
            let top = document.scrollingElement.scrollTop; //触发滚动条
            //回到页面顶部
            if (top == 0) {
                this.bgWhite = false;
                this.borderNone = false
            } else {
                //不在页面顶部
                this.bgWhite = true;
                this.borderNone = true
            }
        }
    },
    components: {
        bpSelect,
        bpButton,
        bpSelectVue,
        bpOptionVue
    },
    props: {
        inverse: {
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {
            bgWhite: false,
            borderNone: false,
            imgSrc: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_theme.svg",
            choosed_value: "产品与服务",
            options_data: [
                {
                    text: "MAX",
                    spanText: "自患者信息的多视角深度挖掘",
                    click_event: function() {
                        console.log("http://www.baidu.com")
                    }
                },
                {
                    text: "真实数据研究",
                    spanText: "自患者信息的多视角深度挖掘",
                    click_event: function() {
                        console.log("http://www.google.com")
                    }
                },
                {
                    text: "韩文",
                    spanText: "自患者信息的多视角深度挖掘",
                    click_event: function() {
                        console.log("http://www.jd.com")
                    }
                }
            ]
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
        border-bottom: 1px solid rgba(22, 28, 57, 0.12);
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
    @media (max-width: 992px) and (min-width: 769px) {
        ::-webkit-scrollbar-thumb {
            background: transparent;
        }
        .fixed-nav {
            padding: 0 60px !important;
        }
    }
    @media (max-width: 768px) and (min-width: 480px) {
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
