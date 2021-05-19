<template>
    <transition name="fade">
        <div class="vue_container fixed-nav" :class="[
            inverse ? 'navInverse' : 'nav',
            {'bgWhite': bgWhite}]"
        >
            <div 
                class="nav-border" 
                :class="[
                    borderNone ? 'borderNone' : 'bordernavInverse',
                    {'borderNone': borderNone},
                    {'bgWhite': bgWhite}
                ]"
            >
                <img :src="imgSrc" alt="" class="bp-img fixed-nav-icon cursor-pointer" />
                <div class="response-icon-menu" @click="clickMenu"></div>
                <div class="meau-shade" v-if="menu">
                </div>
                <div class="response-menu" v-if="menu">
                    <div class="responsee-menu-item">
                        <span class="ph-H-Small">MAX</span>
                        <span class="ph-body-xsmall">全息市场监测利器</span>
                    </div>
                    <div class="responsee-menu-item">
                        <span class="ph-H-Small">真是数据研究</span>
                        <span class="ph-body-xsmall">来自患者信息的多视角深度挖掘</span>
                    </div>
                    <button class="contact-us">联系我们</button>
                    <button class="login">登录</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
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
    data() {
        return {
            imgSrc: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_theme.svg",
            menu: false,
            bgWhite: false,
            borderNone: false
        }
    },
    props: {
        inverse: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        clickMenu() {
            return this.menu = !this.menu
        }
    }
}
</script>
<style lang="scss" scoped>
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
        background: #666 !important;
        text-align: center;
        font-size: 14px;
    }

    .bgWhite {
        background-color: #fff !important;
    }
    .fixed-nav {
        height: 80px;
        width: 100%;
        background: 0 0;
        display: flex;
        flex-direction: row;
        top: 0;
        padding: 0 100px;
        position: fixed;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
        padding: 0 16px!important;
        
        .nav-border {
            height: 80px;
            width: 100%;
            border-bottom: 1px solid rgba(22,28,57,.12);
            display: flex;
            flex-direction: row;
            align-content: flex-start;
            align-items: center!important;
            justify-content: space-between;

        }
        .bp-img {
            object-fit: cover;
            cursor: pointer!important;
            pointer-events: all;
        }
        .response-icon-menu {
            width: 24px;
            height: 24px;
            background: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 10h20v2H1v-2zm0-7h20v2H1V3zm0 14h20v2H1v-2z' fill='%232D334D' fill-rule='evenodd'/%3E%3C/svg%3E") center/100% no-repeat!important;
        }
        .meau-shade {
            width: 100vw!important;
            // width: 100%;
            height: 100vh!important;
            background: #8b8d9b!important;
            opacity: .8;
            position: absolute;
            top: 80px;
            transform: translateX(-16px);
            overflow: hidden!important;
        }
        .response-menu {
            position: absolute;
            top: 80px;
            background-color: #fff;
            width: 100%!important;
            padding: 40px;
            min-width: 375px;
            left: 0;
            display: flex;
            flex-direction: column;
            align-content: flex-start;
            align-items: stretch;
            justify-content: flex-start;
            height: auto;
            .responsee-menu-item {
                display: flex;
                flex-direction: column;
                align-content: flex-start;
                align-items: flex-start;
                justify-content: flex-start;
                margin-bottom: 24px;
                height: auto;
                width: auto;
                background: 0 0;
                padding: 0;
            }
            .ph-H-Small {
                height: auto;
                width: auto;
                background: 0 0;
                margin-bottom: 4px;
                font-size: 14px;
                color: #2D334D;
                letter-spacing: .35px;
                font-weight: 700;
                padding: 0;
            }
            .ph-body-xsmall{
                height: auto;
                width: auto;
                background: 0 0;
                font-size: 12px;
                color: #A2A5B0;
                padding: 0;
            }
            .contact-us {
                background: #FFDD4D;
                border-radius: 2px;
                border: none;
                width: 100%;
                height: 40px;
                font-size: 14px;
                color: #2D334D;
                letter-spacing: 1px;
                display: block;
                text-align: center;
                margin-bottom: 24px;
                line-height: 24px;
                padding: 0 12px;
                display: flex;
                flex-direction: row;
                align-items: center;
                cursor: pointer;
                outline: 0;
                justify-content: center;
            }
            .login {
                line-height: 40px;
                background: #FFF;
                border-radius: 2px;
                border: 1px solid rgba(22,28,57,.12);
                width: 100%;
                height: 40px;
                font-size: 14px;
                color: #2D334D;
                letter-spacing: 1px;
                display: block;
                text-align: center;
                margin-bottom: 24px;
                line-height: 24px;
                padding: 0 12px;
                display: flex;
                flex-direction: row;
                align-items: center;
                cursor: pointer;
                outline: 0;
                justify-content: center;
            }
        }
    }
</style>