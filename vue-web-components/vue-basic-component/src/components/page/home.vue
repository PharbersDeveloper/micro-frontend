<template>
    <div class="home-container">
        <navTop v-if="!response" En></navTop>
        <navTopRes v-if="response"></navTopRes>
        <div class="bp-home">
            <div class="home-content-a" ref="aaa">
                <div class="title">
                    <bpText class="ph-H-Display">{{title}}</bpText>
                    <bpText class="ph-body-medium">{{des}}</bpText>
                </div>
                <bpImg :src="src" class="home-header-img"></bpImg>
            </div>
            <div class="content-active-area">
                <div class="active-line">
                    <div class="active-yellow-line"></div>
                </div>
                <bpText class="active-text">{{"EVENTS"}}</bpText>
                <bpCardActive 
                    v-for="card in activeArr"
                    :key="card.title"
                    :bgImg="card.bgImg"
                    :logoImg="card.logoImg"
                    :title="card.title"
                    :date="card.date"
                    :city="card.city"
                ></bpCardActive>
                <div class="content-active-review-more-button">
                    <div class="show-more-button-container">
                        <bpButton text="更多活动" class="button-official-gray-line"></bpButton>
                        <bpImg class="active-button-go" :src="buttonGo"></bpImg>
                    </div>
                </div>
                <div class="content-active-bg-yellow"></div>
                <div class="content-active-bg-line-right"></div>
            </div>
        </div>
    </div>
</template>
<script>
import navTop from '../panel/bp-nav-top'
import navTopRes from '../panel/bp-nav-top-response'
import bpText from '../bp-text'
import bpImg from '../bp-img'
import bpCardActive from '../panel/bp-card-activity'
import bpButton from '../bp-button'
export default {
    name: 'home',
    data() {
        return {
            windowWidth: document.documentElement.clientWidth,
            windowHeight: document.documentElement.clientHeight,
            response: false,
            src: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_home_hero.png",
            buttonGo: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_go_yellow.svg",
            activeArr: [
                {
                    bgImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_2020-06-04_boyun_00030.jpg",
                    logoImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_bylt_v.svg",
                    title: "带量采购对中国医药市场的改变",
                    date: "2020-06-04",
                    city: "苏州"
                },
                {
                    bgImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_abovedata_2020-01-09_00005.jpg",
                    logoImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_above-data.svg",
                    title: "Above Data 2020 第一期",
                    date: "2020-01-09",
                    city: "北京"
                },
                {
                    bgImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_nanjing_2019-10-23_00001.jpg",
                    logoImg: "null",
                    title: "第八届中国医药决策科学峰会暨 CphMRA 2019 年度会议",
                    date: "2019-10-23",
                    city: "南京"
                }
            ]
        }
    },
    props: {
        title: {
            type: String,
            default: "还原真实 可见未来"
        },
        des: {
            type: String,
            default: "医药数据融合与洞见者"
        }
    },
    components: {
        navTop,
        navTopRes,
        bpText,
        bpImg,
        bpCardActive,
        bpButton
    },
    methods: {
        aaa() {
            debugger
        }
    },
    watch: {
        windowWidth(val) {
            if(val <= 480) {
                this.response = true
            } else {
                this.response = false
            }
        },
        windowHeight(val) {
            console.log('height', val, this.windowHeight)
        }
    },
    mounted() {
        const that = this;
        if(this.windowWidth <= 480) {
            this.response = true
        } else {
            this.response = false
        }
        window.onresize = () => {
            return (() => {
                window.windowWidth = document.body.clientWidth;
                window.windowHeight = document.body.clientHeight;
                that.windowWidth = window.windowWidth;
                that.windowHeight = window.windowHeight;
            })()
        }
    }

}
</script>
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    .bp-home {
        width: 100%;
        min-width: 375px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .home-content-a {
            height: 620px;
            max-width: 1200px;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-content: flex-start;
            padding: 80px 100px 0;
            align-items: center;
            .title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: stretch;
                align-content: flex-start;
                height: auto;
                width: auto;
                background: 0 0;
                display: flex;
                padding: 0;
                .ph-H-Display {
                    font-size: 48px;
                    color: #2D334D;
                    letter-spacing: 4px;
                    font-weight: 600;
                    text-shadow: none;
                    white-space: pre-line;
                }
                .ph-body-medium {
                    margin-top: 16px;
                    font-size: 16px;
                    color: #747789;
                }
            }
            .bp-img {
                object-fit: cover;
            }
            .home-header-img {
                height: 366px;
                width: 545px;
                pointer-events: none;
            }
        }

        .content-active-area {
            height: 421px;
            width: 100%;
            min-height: 421px;
            max-width: 1200px;
            background: 0 0;
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-content: flex-start;
            align-items: stretch;
            padding-right: 24px;
            .active-line {
                height: 535px;
                width: 8px;
                background: 0 0;
                border-left: 1px solid rgba(22,28,57,.1);
                position: absolute;
                left: 100px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: stretch;
                align-content: flex-start;
                .active-yellow-line {
                    height: 8px;
                    width: 2px;
                    background: #F5C924;
                    position: relative;
                    left: -1px;
                    opacity: .5;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: stretch;
                    align-content: flex-start;
                }
            }
            .active-text {
                height: 70px;
                width: 22px;
                text-align: right;
                background: 0 0;
                font-size: 16px;
                color: #161C39;
                writing-mode: vertical-rl;
                transform: rotate(180deg);
                opacity: .6;
                position: absolute;
                left: 110px;
            }
            .content-active-review-more-button {
                position: absolute;
                right: 0;
                bottom: 67px;
                z-index: 2;
                height: auto;
                width: auto;
                background: 0 0;
                .show-more-button-container {
                    height: auto;
                    width: auto;
                    background: 0 0;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: stretch;
                    align-content: flex-start;
                    .button-official-gray-line {
                        width: 80px;
                        height: 32px;
                        line-height: 32px;
                        background: linear-gradient(45deg,rgba(22,28,57,.2) 0,rgba(22,28,57,.2) 5%,transparent 5%,transparent 50%,rgba(22,28,57,.2) 50%,rgba(22,28,57,.2) 55%,transparent 55%,transparent)!important;
                        background-size: 10px 10px!important;
                        border: none;
                        font-weight: 500;
                        font-size: 12px;
                        color: #2D334D;
                    }
                    .active-button-go {
                        height: 32px;
                        width: 32px;
                        background: #161C39;
                        padding: 6px;
                        cursor: pointer;
                    }
                }
            }
            .content-active-bg-yellow {
                height: 180px;
                width: 860px;
                background: #F5C924;
                border-radius: 2px;
                right: 0;
                position: absolute;
                z-index: 0;
                opacity: .8;
                top: 240px;
            }
            .content-active-bg-line-right {
                height: 210px;
                width: 1px;
                background: 0 0;
                right: 100px;
                position: absolute;
                z-index: 0;
                opacity: .1;
                top: 325px;
                border-left: 1px solid #161C39;
            }
        }
    }
</style>