<template>
<div>
    <div class="bp-rw">
        <div class="rw-content-a">
            <bpImg :src="rwContentImg" class="above-data-detail-header-img"></bpImg>
            <bpText class="ph-body-small-inverse top-breadcrumb">
                    <span class="mr-0" @click="toHome">{{translation_data.home}}</span>
                    <span class="mr-0">/</span>
                    <span>{{translation_data.realWorldResearch}}</span>
            </bpText>
            <bpText class="page-header-anton-font">{{translation_data.realWorldResearchEN}}</bpText>
            <bpText class="rw-content-slogan-b">{{translation_data.realWorldResearch}}</bpText>
            <bpText class="rw-content-slogan-c">{{translation_data.multiPerspectiveDeepMining}}</bpText>
            <bpText class="rw-content-slogan-c">{{translation_data.findDifferent}}</bpText>
        </div>
        <div class="rw-text-info">
            <bpImg class="rw-connect-img" :src="rwConnectImg"></bpImg>
            <bpText class="rw-text-info-title">{{translation_data.realWorldTitle}}</bpText>
            <bpText class="rw-text-info-text">{{translation_data.realWordDescription}}</bpText>
            <div class="rw-text-card-container">
                <div class="rw-text-card-a">
                    <bpImg :src="rwCardAImg" class="rw-text-card-a-img"></bpImg>
                    <div class="rw-text-card-line"></div>
                    <bpText class="rw-text-card-tilte">{{translation_data.feature.featureA.title}}</bpText>
                    <div class="rw-card-row">
                        <div class="rw-card-flex-1">
                            <bpText class="rw-card-row-a">{{translation_data.feature.featureA.numberA1}}</bpText>
                            <bpText class="rw-card-row-b-1">{{translation_data.feature.featureA.textA4}}</bpText>
                        </div>
                        <div class="rw-card-flex-1">
                            <bpText class="rw-card-row-a">{{translation_data.feature.featureA.numberA2}}</bpText>
                            <bpText class="rw-card-row-b-1">{{translation_data.feature.featureA.textA5}}</bpText>
                        </div>
                        <div class="rw-card-flex-1">
                            <bpText class="rw-card-row-a">{{translation_data.feature.featureA.numberA3}}</bpText>
                            <bpText class="rw-card-row-b-1">{{translation_data.feature.featureA.textA6}}</bpText>
                        </div>
                    </div>
                </div>
                <div class="rw-text-card-b">
                    <bpImg class="rw-text-card-b-img" :src="rwTextBImg"></bpImg>
                    <div class="rw-text-card-line"></div>
                    <bpText class="rw-text-card-tilte">{{translation_data.feature.featureB.title}}</bpText>
                    <div class="rw-card-tag-row-a">
                        <bpText class="rw-card-tag">{{translation_data.feature.featureB.textB1}}</bpText>
                        <bpText class="rw-card-tag">{{translation_data.feature.featureB.textB2}}</bpText>
                    </div>
                    <div class="rw-card-tag-row-a">
                        <bpText class="rw-card-tag">{{translation_data.feature.featureB.textB3}}</bpText>
                        <bpText class="rw-card-tag">{{translation_data.feature.featureB.textB4}}</bpText>
                        <bpText class="rw-card-tag">{{translation_data.feature.featureB.textB5}}</bpText>
                    </div>
                    <div class="rw-card-tag-row-b">
                         <bpText class="rw-card-tag">{{translation_data.feature.featureB.textB6}}</bpText>
                        <bpText class="rw-card-tag">{{translation_data.feature.featureB.textB7}}</bpText>
                    </div>
                </div>
            </div>
        </div>
        <div class="rw-advantage-card-container">
            <!-- <bpImg class="rw-advantage-card-container-img" :src="rwAdvantageImg"></bpImg> -->
            <bpImg class="rw-connect-img" :src="rwConnectImg"></bpImg>
            <bpText class="rw-advantage-container-title">{{translation_data.advantages.advantagesText}}</bpText>
            <div class="rw-cards-row">
                <div class="rw-advantage-card">
                    <bpImg :src="rwCardIcon" class="rw-advantage-card-icon"></bpImg>
                    <bpText class="rw-advantage-card-title">01</bpText>
                    <div class="rw-advantage-card-title-line"></div>
                    <bpText class="rw-advantage-card-desc">{{translation_data.advantages.advantageA}}</bpText>
                </div>
                <div class="rw-advantage-card">
                    <bpImg :src="rwCardIcon" class="rw-advantage-card-icon"></bpImg>
                    <bpText class="rw-advantage-card-title">02</bpText>
                    <div class="rw-advantage-card-title-line"></div>
                    <bpText class="rw-advantage-card-desc">{{translation_data.advantages.advantageB}}</bpText>
                </div>
                <div class="rw-advantage-card">
                    <bpImg :src="rwCardIcon" class="rw-advantage-card-icon"></bpImg>
                    <bpText class="rw-advantage-card-title">03</bpText>
                    <div class="rw-advantage-card-title-line"></div>
                    <bpText class="rw-advantage-card-desc">{{translation_data.advantages.advantageC}}</bpText>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import bpText from '../bp-text'
import bpImg from '../bp-img'
import bpButton from '../bp-button'
import navTop from '../panel/bp-nav-top'
import navTopRes from '../panel/bp-nav-top-response'
import { staticFilePath } from '../../config/envConfig'
import bpPageBottom from '../panel/bp-page-bottom'
export default {
    name: "",
    components: {
        bpText,
        bpImg,
        bpButton,
        navTop,
        navTopRes,
        bpPageBottom
    },
    data() {
        return {
            language: '??????', // ????????????
            windowWidth: document.documentElement.clientWidth,
            windowHeight: document.documentElement.clientHeight,
            response: false,
            responseMini: false,
            rwContentImg: `${staticFilePath}` + "/img_detail-page_head_realwr.jpg",
            rwConnectImg: `${staticFilePath}` + "/img_connect_line.svg",
            rwCardAImg :`${staticFilePath}` + "/img_realwr_cover_00.png",
            rwTextBImg: `${staticFilePath}` + "/img_realwr_info_01.png",
            rwAdvantageImg: `${staticFilePath}` + "/img_bg_doublehexagon.svg",
            rwCardIcon: `${staticFilePath}` + "/icon_point.svg",
            translation_basedata: {
                cn: {
                    home: "??????",
                    realWorldResearch: "????????????????????????",
                    realWorldResearchEN: "REAL WORLD RESEARCH",
                    multiPerspectiveDeepMining: "??????????????????????????????????????????",
                    findDifferent: "????????????",
                    realWorldTitle: "??????????????????????????????????????????????????????",
                    realWordDescription: "\n????????????????????????????????????????????????????????? (?????????????????????????????????????????????????????????????????????)?????????????????????(??????CT??????????????????MRI???????????????????????????????????????????????????????????????)?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
                    feature: {
                        featureA: {
                            title: "??????????????????",
                            numberA1: "800+",
                            numberA2: "31",
                            numberA3: "210",
                            textA4: "????????????",
                            textA5: "??????",
                            textA6: "?????????"
                        },
                        featureB: {
                            title: "????????????????????????",
                            textB1: "??????????????????",
                            textB2: "??????????????????",
                            textB3: "????????????",
                            textB4: "????????????",
                            textB5: "????????????",
                            textB6: "????????????",
                            textB7: "????????????"
                        }
                    },
                    advantages:{
                        advantagesText: "???????????????",
                        advantageA: "???????????????????????????????????????????????????????????????????????????",
                        advantageB: "?????????????????????????????????????????????????????????????????????",
                        advantageC: "????????????????????????????????????????????????????????????"
                    }
                },
                en: {
                    home: "Home",
                    realWorldResearch: "Real World Research",
                    realWorldResearchEN: "REAL WORLD RESEARCH",
                    multiPerspectiveDeepMining: "Multi-perspective Deep Mining from Patient Information",
                    findDifferent: "Find Differences",
                    realWorldTitle: "Real World Research combining information from multiple data source.",
                    realWordDescription: "Real World Research covers structured data (including information on desensitized patients and doctors, medications, departments, clinical tests) and unstructured data( including CT examinations, magnetic resonance MRI, ultrasound diagnosis, pathology reports, imaging data, and patients information, etc).\n\nWe unify information standards with data intelligence technology to provide enterprises with innovative solutions. Relevant research has been completed in the fields of chronic diseases such as hypertension, endocrine diseases such as hyperthyroidism, neurological diseases such as epilepsy, anti-infection, and tumor. ",
                    feature: {
                        featureA: {
                            title: "Amounts of sample data",
                            numberA1: "800+",
                            numberA2: "31",
                            numberA3: "210",
                            textA4: "Sample Hospital",
                            textA5: "Provinces",
                            textA6: "Prefecture-level Cities"
                        },
                        featureB: {
                            title: "Type of sample data",
                            textB1: "Hospital",
                            textB2: "Patient",
                            textB3: "Doctor",
                            textB4: "Therapy",
                            textB5: "Diagnosis",
                            textB6: "Drug info",
                            textB7: "Expense"
                        }
                    },
                    advantages: {
                        advantagesText: "Capabilities and Strengths",
                        advantageA: "Unify multi-factor isomerous patient information, extract efficiently, and keep data updating",
                        advantageB: "Improve data samples' magnitude, data coverage, and information comprehensiveness",
                        advantageC: "Display objective panorama of market and provide comprehensive evidence for corporate decisions"
                    }
                }
            }
        }
    },
    computed: {
        translation_data: function() {
            if (this.language === '??????') {
                return this.translation_basedata.cn
            } else if (this.language === 'English') {
                return this.translation_basedata.en
            }
        }
    },
    watch: {
        windowWidth(val) {
            if(val < 1100) {
                this.response = true
            } else {
                this.response = false
            }
            if(val <= 549) {
                this.responseMini = true
            } else {
                this.responseMini = false
            }
        }
    },
    created() {
        window.addEventListener('beforeunload', e => {
            window.scrollTo(0,0)
        });
        let originalSetItem = localStorage.setItem,
            lang = window.localStorage.getItem('lang')
        if (!lang) {
            lang = navigator.language || navigator.userLanguage
            if (lang === 'English') {
                localStorage.setItem('lang', 'English')
            } else {
                localStorage.setItem('lang', '??????')
            }
        } else {
            this.language = lang
        }
        localStorage.setItem = function(key,newValue){
            let event = new Event("setItemEvent");
            event.key = key;
            event.newValue = newValue;
            window.dispatchEvent(event);
            originalSetItem.apply(this,arguments);
        }
    },
    mounted() {
        const that = this;
        if(this.windowWidth < 1100) {
            this.response = true
        } else {
            this.response = false
        }
        if(this.windowWidth <= 549) {
            this.responseMini = true
        } else {
            this.responseMini = false
        }
        window.onresize = () => {
            return (() => {
                window.windowWidth = document.body.clientWidth;
                window.windowHeight = document.body.clientHeight;
                that.windowWidth = window.windowWidth;
                that.windowHeight = window.windowHeight;
            })()
        }
        window.addEventListener('setItemEvent', function(e) {
            that.language = e.newValue
        })
    },
    methods: {
        toHome() {
            const event = new Event("event")
            event.args = {
                callback: "linkToPage",
                element: this,
                param: 'home'
            }
            this.$emit('event', event)
        }
    }
}
</script>
<style lang="scss" scoped>
    * {
        letter-spacing: .4px;
        line-height: 1.6;
        box-sizing: border-box;
    }
    .bp-rw {
        width: 100%;
        min-width: 375px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .rw-content-a {
            height: 600px;
            width: 100%;
            padding-left: 100px;
            background: 0 0;
            background-image: linear-gradient(rgba(22,28,57,.5),rgba(22,28,57,.5));
            background-size: cover;
            display: flex;
            justify-content: center;
            flex-direction: column;
            .above-data-detail-header-img {
                height: 600px;
                width: 100%;
                position: absolute;
                z-index: -2;
                left: 0;
                object-fit: cover;
            }
            .top-breadcrumb {
                position: absolute;
                top: 104px;
            }
            .ph-body-small-inverse {
                opacity: .7;
                font-size: 14px;
                color: #FFF;
                cursor: pointer!important;
            }
            .page-header-anton-font {
                font-family: Anton-Regular;
                font-size: 100px;
                color: #FFF;
                letter-spacing: 2.5px;
                background-image: linear-gradient(rgba(255,255,255,.4),rgba(255,255,255,0) 80%);
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .rw-content-slogan-b {
                width: auto;
                margin-top: 20px;
                font-size: 40px;
                color: #FFF;
                top: -95px;
                position: relative;
                height: auto;
                background: 0 0;
            }
            .rw-content-slogan-c {
                width: auto;
                margin-top: 4px;
                font-size: 24px;
                color: #FFF;
                opacity: .9;
                top: -50px;
                position: relative;
                height: auto;
                background: 0 0;
            }
        }
        .rw-text-info {
            width: 1200px;
            padding: 104px 0 120px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            height: auto;
            background: 0 0;
            .rw-connect-img {
                height: auto;
                width: auto;
                background: 0 0;
                position: absolute;
                top: -40px;
                object-fit: cover;
            }
            .rw-text-info-title {
                height: auto;
                width: 640px;
                margin-bottom: 32px;
                background: 0 0;
                font-size: 24px;
                color: #2D334D;
            }
            .rw-text-info-text {
                height: auto;
                width: 640px;
                margin-bottom: 32px;
                background: 0 0;
                font-size: 16px;
                color: #747789;
                white-space: pre-line;
            }
            .rw-text-card-container {
                height: auto;
                width: 650px;
                background: 0 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                display: flex;
                .rw-text-card-line {
                    height: 2px;
                    width: 16px;
                    margin-bottom: 24px;
                    background: #F5C924;
                }
                .rw-text-card-tilte {
                    height: auto;
                    width: auto;
                    margin-bottom: 32px;
                    background: 0 0;
                    color: #2D334D;
                    font-size: 16px;
                    font-weight: 500;
                }
                .rw-text-card-a {
                    height: auto;
                    width: 300px;
                    background: 0 0;
                    background-size: cover;
                    flex-direction: column;
                    position: relative;
                    padding: 32px;
                    border-radius: 2px;
                    box-shadow: 0 4px 10px 0 rgba(22, 28, 57, 0.1), 0 -1px 0 0 rgba(22, 28, 57, 0.02);
                    display: flex;
                    .rw-text-card-a-img {
                        position: absolute;
                        z-index: -2;
                        width: 100%;
                        transform: translate(-32px,-32px);
                        object-fit: cover;
                    }
                    
                    .rw-card-row {
                        justify-content: space-between;
                        height: auto;
                        width: auto;
                        background: 0 0;
                        display: flex;
                        flex-direction: row;
                        .rw-card-flex-1 {
                            display: flex;
                            flex-direction: column;
                            flex: 1;
                            .rw-card-row-a {
                                height: auto;
                                width: auto;
                                background: 0 0;
                                font-size: 24px;
                                color: #2D334D;
                                font-weight: 300;
                                text-align: center;
                            }
                            .rw-card-row-b-1 {
                                height: auto;
                                width: auto;
                                background: 0 0;
                                font-size: 12px;
                                color: #A2A5B0;
                                text-align: center;
                            }
                        }
                    }
                }
                .rw-text-card-b {
                    height: auto;
                    width: 300px;
                    background: 0 0;
                    background-size: cover;
                    flex-direction: column;
                    position: relative;
                    padding: 32px;
                    border-radius: 2px;
                    box-shadow: 0 4px 10px 0 rgba(22, 28, 57, 0.1), 0 -1px 0 0 rgba(22, 28, 57, 0.02);
                    display: flex;
                    .rw-text-card-b-img {
                        position: absolute;
                        z-index: -2;
                        width: 100%;
                        transform: translate(-32px,-32px);
                    }
                    .rw-card-tag-row-a {
                        height: auto;
                        width: auto;
                        background: 0 0;
                        display: flex;
                        flex-direction: row;
                        margin-bottom: 6px;
                    }
                    .rw-card-tag-row-b {
                        height: auto;
                        width: auto;
                        background: 0 0;
                        display: flex;
                        flex-direction: row;
                    }
                    .rw-card-tag {
                        height: 22px;
                        width: auto;
                        margin-right: 9px;
                        background: #F6F6F7;
                        font-size: 12px;
                        color: #747789;
                        padding: 0 6px;
                        border: 1px solid rgba(22,28,57,.08);
                        display: table;
                    }
                }
            }
        }
        .rw-advantage-card-container {
            height: auto;
            width: 1200px;
            padding: 104px 0 80px;
            background: -40% top no-repeat,linear-gradient(173deg,#3C3F53 5%,#1B1F35 98%);
            position: relative;
            align-items: center;
            display: flex;
            flex-direction: column;
            .rw-advantage-card-container-img {
                position: absolute;
                width: 100%;
                object-fit: cover;
            }
            .rw-connect-img {
                height: auto;
                width: auto;
                background: 0 0;
                position: absolute;
                top: -40px;
                object-fit: cover;
            }
            .rw-advantage-container-title {
                height: auto;
                width: auto;
                margin-bottom: 69px;
                background: 0 0;
                font-size: 24px;
                color: #FFF;
                opacity: .9;
            }
            .rw-cards-row {
                height: auto;
                width: 866px;
                background: 0 0;
                display: flex;
                justify-content: space-between;
                .rw-advantage-card {
                    height: auto;
                    width: 262px;
                    background: rgba(255,255,255,.05);
                    box-shadow: 0 8px 10px 0 rgba(8, 11, 26, 0.21);
                    border-radius: 2px;
                    padding: 40px 32px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    .rw-advantage-card-icon {
                        height: 22px;
                        width: 19px;
                        background: 0 0;
                        position: absolute;
                        left: -10px;
                        top: 55px;
                    }
                    .rw-advantage-card-title {
                        height: auto;
                        width: auto;
                        margin-bottom: 40px;
                        background: 0 0;
                        font-size: 40px;
                        color: #FFF;
                        opacity: .4;
                        font-weight: 100;
                        display: flex;
                    }
                    .rw-advantage-card-title-line {
                        height: 1px;
                        width: 49px;
                        margin-bottom: 56px;
                        background: #F5C924;
                        opacity: .8;
                    }
                    .rw-advantage-card-desc {
                        height: auto;
                        width: 198px;
                        background: 0 0;
                        font-size: 14px;
                        opacity: .7;
                        color: #FFF;
                    }
                }
            }
        }
        @media (max-width: 992px) {
            .rw-content-a {
                padding-left: 60px !important;
                .page-header-anton-font {
                    font-size: 60px!important;
                }
            }
            .rw-text-info {
                width: 100% !important;

                .rw-text-info-title, .rw-text-info-text {
                    width: 100% !important;
                    padding: 0 64px !important;
                }
                .rw-text-card-container {
                    width: 100% !important;
                    padding: 0 64px !important;
                    flex-wrap: wrap;
                    justify-content: space-between !important;
                }
            }
            .rw-advantage-card-container {
                width: 100% !important;

                .rw-cards-row {
                    width: 100% !important;
                    padding: 0 64px !important;
                    flex-wrap: wrap;

                    .rw-advantage-card {
                        margin-bottom: 40px !important;
                    }
                }
            }
        }
        @media (max-width: 768px)  {
            .rw-content-a {
                padding-left: 40px !important;
            }
            .rw-text-card-a {
                margin-bottom: 20px;
            }
        }
        @media (max-width: 549px), (width: 549px) {
            .rw-content-a {
                padding-left: 24px !important;
                .rw-content-slogan-b {
                    top: -70px !important;
                }
            }
            .rw-text-info {
                .rw-text-info-title, .rw-text-info-text {
                    padding: 0 24px !important;
                }
                .rw-text-card-container {
                    padding: 0 24px !important;
                    justify-content: center !important;

                    .rw-text-card-a {
                        margin-bottom: 24px !important;
                    }
                }
            }
            .rw-advantage-card-container {
                .rw-cards-row {
                    padding: 0 24px !important;
                    overflow: scroll;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                }
                .rw-advantage-card {
                    margin: 0 12px !important;
                    &:nth-last-of-type(1) {
                        margin: 0 0 40px 12px !important;
                    }
                }
            }
        }
    }
    
</style>