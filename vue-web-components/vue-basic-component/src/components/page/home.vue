<template>
    <div class="home-container">
        <navTop v-if="!response" En></navTop>
        <navTopRes v-if="response"></navTopRes>
        <div class="bp-home">
            <div class="home-content-area" ref="aaa">
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
            <div class="report-download-container">
                <div class="report-download">
                    <bpImg 
                        :src="reportLeftDown" class="report-download-left-corner"></bpImg>
                    <bpImg 
                        :src="reportRightDown" class="report-download-right-corner"></bpImg>
                    <div class="report-download-img-container">
                        <bpImg 
                            :src="reportDownImg" class="report-down-img"></bpImg>
                        <div class="report-down-img-mask"></div>
                    </div>
                    <div class="report-download-info">
                        <div class="report-right-head">
                            <bpText class="ph-H-small-theme">{{reportThemeSmall}}</bpText>
                            <bpText class="ph-body-small">{{reportBodySmall}}</bpText>
                        </div>
                        <div class="report-right-center">
                            <bpText class="ph-H-large-title">{{reportLargeTitle}}</bpText>
                            <bpText class="pb-body-small-tertiary">{{reportTertiary}}</bpText>
                        </div>
                        <div class="show-more-button-container">
                            <bpButton :text="reportButton" class="report-down-button"></bpButton>
                            <div class="more-reports-button">
                                <div class="more-reports">
                                    <bpText>{{moreReportsText}}</bpText>
                                    <bpImg class="more-reports-img" :src="moreReportsImg"></bpImg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="data-show">
                <bpImg :src="reportConnectImg" class="report-connect-img"></bpImg>
                <bpText class="home-about-us-peoples">{{dataShowAboutUs}}</bpText>
                <bpText class="ph-H-xLarge">{{dataShowTitle}}</bpText>
                <div class="show-more-button-container">
                    <bpButton :text="dataShowMoreButton" class="button-official-yellow-line-compact"></bpButton>
                    <bpImg :src="dataButtonGo" class="button-go"></bpImg>
                </div>
                <div class="data-show-text-part">
                    <bpText class="ph-body-medium_brand">{{dataTextPart1}}</bpText>
                    <div class="home-data-value-text-line"></div>
                    <bpText class="ph-body-medium_brand">{{dataTextPart2}}</bpText>
                    <div class="home-data-value-text-line"></div>
                    <bpText class="ph-body-medium_brand">{{dataTextPart3}}</bpText>
                </div>
                <bpImg class="data-show-img" :src="dataShowImg"></bpImg>
            </div>
            <div class="max-show">
                <div class="max-show-left">
                    <div class="max-show-left-text-line"></div>
                </div>
                <div class="max-show-right-container">

                </div>
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
import BpText from '../bp-text.vue'
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
            ],
            reportLeftDown: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_deco_corner.svg",
            reportRightDown: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_deco_corner.svg",
            reportDownImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_paper-cover_VPB.jpg",
            reportThemeSmall: "最新发布",
            reportBodySmall: "深度医药市场行业分析报告",
            reportLargeTitle: "《带量采购对中国医药市场格局的影响》",
            reportTertiary: "2020年6月5日",
            reportButton: "获取报告",
            moreReportsImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_go.svg",
            moreReportsText: "更多报告",
            reportConnectImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_connect_line.svg",
            dataShowAboutUs: "法伯凝聚顶尖数据分析师与数据科学家",
            dataShowTitle: "重新定义，您的数据价值",
            dataShowImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_corevalue.png",
            dataShowMoreButton: "了解更多",
            dataButtonGo: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_go.svg",
            dataTextPart1: "丰富的数据源",
            dataTextPart2: "强劲算能",
            dataTextPart3: "超群智能算法"
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
        bpButton,
        BpText
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

        .home-content-area {
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

        .report-download-container {
            height: 459px;
            max-width: 1200px;
            width: 100%;
            background: 0 0;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            align-content: flex-start;
            .report-download {
                height: 331px;
                width: 1000px;
                background: 0 0;
                border: 1px solid #e8e9eb;
                padding: 0 32px;
                position: relative;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                align-content: flex-start;
                .report-download-left-corner {
                    height: 11px;
                    width: 11px;
                    background: 0 0;
                    position: absolute;
                    top: -4px;
                    left: -4px;
                }
                .bp-img {
                    object-fit: cover;
                    pointer-events: none;
                }
                .report-download-right-corner {
                    height: 11px;
                    width: 11px;
                    background: 0 0;
                    position: absolute;
                    right: -4px;
                    bottom: -4px;
                    transform: rotate(180deg);
                }
                .report-download-img-container {
                    height: 251px;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    align-content: flex-start;
                    .report-down-img {
                        height: 242px;
                        width: 171px;
                        object-fit: fill;
                        border-radius: 2px;
                        pointer-events: none;
                    }
                    .report-down-img-mask {
                        width: 153px;
                        height: 241px;
                        position: absolute;
                        border-radius: 2px;
                        background: #747789;
                        z-index: -1;
                        box-shadow: 0 5px 7px 0 rgba(22, 28, 57, 0.36);
                        transform-origin: 0 242px;
                        transform: rotate(4deg) translateX(-8px);
                    }
                }
                .report-download-info {
                    height: auto;
                    width: auto;
                    background: 0 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: stretch;
                    align-content: flex-start;
                    .report-right-head, .report-right-center {
                        margin-bottom: 40px;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: stretch;
                        align-content: flex-start;
                        height: auto;
                        width: auto;
                        background: 0 0;
                        padding: 0;
                        .ph-H-small-theme {
                            letter-spacing: .2px;
                            height: 20px;
                            font-size: 14px;
                            color: #F5C924;
                        }
                        .ph-body-small {
                            font-size: 14px;
                            color: #747789;
                        }
                        .ph-H-large-title {
                            margin-bottom: 8px;
                            font-size: 24px;
                            color: #2D334D;
                        }
                        .pb-body-small-tertiary {
                            font-size: 12px;
                            color: #A2A5B0;
                        }
                    }
                    .show-more-button-container {
                        height: auto;
                        width: auto;
                        background: 0 0;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        align-items: stretch;
                        align-content: flex-start;
                        cursor: pointer !important;
                        padding: 0;
                        .report-down-button {
                            width: 240px!important;
                            border-radius: 0!important;
                            background: #FFDD4D;
                            color: #2D334D;
                            border: none;
                            cursor: inherit;    
                            height: 40px!important;
                            text-align: center!important;
                            display: inline-block!important;
                            font-size: 14px;
                            letter-spacing: 1px;
                            line-height: 32px;
                        }
                        .more-reports-button {
                            width: 137px;
                            height: 40px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-left: 16px;
                            margin-right: 22px;
                            .more-reports {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                font-size: 14px;
                                .more-reports-img {
                                    width: 21px;
                                    height: 21px;
                                    margin-left: 8px;
                                }
                            }
                        }
                    }
                }
            }
        }

        .data-show {
            height: 778px;
            width: 1200px;
            padding: 0 100px 12px;
            background: 0 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            align-content: flex-start;
            justify-content: flex-start;
            .report-connect-img {
                height: auto;
                width: auto;
                background: 0 0;
                position: relative;
                top: -30px;
            }
            .home-about-us-peoples {
                font-size: 24px;
                color: #747789;
                letter-spacing: .4px;
                text-align: center;
            }
            .ph-H-xLarge {
                margin-bottom: 32px!important;
                font-size: 40px;
                font-weight: 200;
                color: #2D334D;
            }
            .show-more-button-container {
                height: auto;
                width: auto;
                margin-bottom: 43px;
                background: 0 0;
                cursor: pointer;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: stretch;
                align-content: flex-start;
                .button-official-yellow-line-compact {
                    height: 40px;
                    padding: 0 24px;
                    line-height: 40px;
                    background: linear-gradient(45deg, rgba(255,221,77,.5) 0,rgba(255,221,77,.5) 5%,transparent 5%,transparent 50%,rgba(255,221,77,.5) 50%,rgba(255,221,77,.5) 55%,transparent 55%,transparent)!important;
                    background-size: 8px 8px!important;
                    border: none;
                    font-weight: 500;
                    font-size: 14px;
                    color: #2D334D;
                }
                .button-go {
                    height: 40px;
                    width: 40px;
                    background: #FFDD4D;
                    padding: 8px;
                    cursor: pointer;
                }
            }
            .data-show-text-part {
                height: auto;
                width: 55%;
                margin-bottom: 43px;
                background: 0 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                text-align: center;
                align-content: flex-start;
                .ph-body-medium_brand {
                    font-size: 16px;
                    color: #F5D924;
                }
                .home-data-value-text-line {
                    height: 1px;
                    width: 83px;
                    background: #697786;
                    opacity: .2;
                }
            }
            .data-show-img {
                height: 421px;
                width: 668px;
                object-fit: contain;
                background: 0 0;
            }
        }

        .max-show {
            width: 100%;
            height: auto;
            min-height: 688px;
            max-width: 1200px;
            background: 0 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap-reverse;
            align-content: flex-start;
        }
    }
</style>