<template>
    <div class="bp-max">
        <div class="max-header">
            <bpImg :src="maxHeaderImg" class="above-data-detail-header-img"></bpImg>
            <bpText class="ph-body-small-inverse top-breadcrumb">
                <span class="mr-0" @click="toHome">{{translation_data.home}}</span>
                <span class="mr-0">/</span>
                <span>{{translation_data.max}}</span>
            </bpText>
            <bpText class="page-header-anton-font">{{translation_data.maxEn}}</bpText>
            <bpText class="max-header-slogan-b">{{translation_data.max}}</bpText>
            <bpText class="max-header-slogan-c">{{translation_data.sloganA}}</bpText>
            <bpText class="max-header-slogan-c">{{translation_data.sloganB}}</bpText>
        </div>
        <div class="max-text-info">
            <bpImg :src="maxConnectImg" class="max-connect-img"></bpImg>
            <bpText class="max-text-info-title">{{translation_data.MAXTitle}}</bpText>
            <bpText class="max-text-info-text">{{translation_data.MAXDescription.descA}}</bpText>
            <bpText class="max-text-info-text">{{translation_data.MAXDescription.descB}}</bpText>
            <div class="rw-text-card-container">
                <div class="max-text-card">
                    <div class="max-text-card-line"></div>
                    <bpText class="max-text-card-tilte">{{translation_data.MAXFeature.featureA.title}}</bpText>
                    <bpText class="max-text-card-content">{{translation_data.MAXFeature.featureA.textA1}}</bpText>
                    <bpText class="max-text-card-content">{{translation_data.MAXFeature.featureA.textA2}}</bpText>
                    <bpText class="max-text-card-content">{{translation_data.MAXFeature.featureA.textA3}}</bpText>
                </div>
                <div class="max-text-card">
                    <div class="max-text-card-line"></div>
                    <bpText class="max-text-card-tilte">{{translation_data.MAXFeature.featureB.title}}</bpText>
                    <bpText class="max-text-card-content">{{translation_data.MAXFeature.featureB.textB1}}</bpText>
                    <bpText class="max-text-card-content">{{translation_data.MAXFeature.featureB.textB2}}</bpText>
                    <div class="max-card-tag-row">
                        <bpText class="max-card-tag">{{translation_data.MAXFeature.featureB.textB3}}</bpText>
                        <bpText class="max-card-tag">{{translation_data.MAXFeature.featureB.textB4}}</bpText>
                        <bpText class="max-card-tag">{{translation_data.MAXFeature.featureB.textB5}}</bpText>
                        <bpText class="max-card-tag">{{translation_data.MAXFeature.featureB.textB6}}</bpText>
                    </div>
                </div>
                <div class="max-text-card">
                    <div class="max-text-card-line"></div>
                    <bpText class="max-text-card-tilte">{{translation_data.MAXFeature.featureC.title}}</bpText>
                    <div class="max-card-row">
                        <div class="max-card-row-1">
                            <bpText class="max-card-row-a">{{translation_data.MAXFeature.featureC.numberC1}}</bpText>
                            <bpText class="max-card-row-b-1">{{translation_data.MAXFeature.featureC.textC4}}</bpText>
                        </div>
                        <div class="max-card-row-2">
                            <bpText class="max-card-row-a">{{translation_data.MAXFeature.featureC.numberC2}}</bpText>
                            <bpText class="max-card-row-b-2">{{translation_data.MAXFeature.featureC.textC5}}</bpText>
                        </div>
                        <div class="max-card-row-1">
                            <bpText class="max-card-row-b">{{translation_data.MAXFeature.featureC.textC3}}</bpText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-advantage-card-container">
            <!-- <bpImg :src="maxAdvantageImg" class="max-advantage-card-container-img"></bpImg> -->
            <bpImg :src="maxConnectImg" class="max-connect-img"></bpImg>
            <bpText class="rw-advantage-container-title">{{translation_data.advantages.advantagesText}}</bpText>
            <div class="max-cards-row-a">
                <div class="max-advantage-card">
                    <bpImg :src="maxAdvantageIcon" class="max-advantage-card-icon"></bpImg>
                    <bpText class="max-advantage-card-title">01</bpText>
                    <div class="max-advantage-card-title-line"></div>
                    <bpText class="max-advantage-card-desc-a">{{translation_data.advantages.advantageA.title}}</bpText>
                    <bpText class="max-advantage-card-desc-b">{{translation_data.advantages.advantageA.textA1}}</bpText>
                    <bpText class="max-advantage-card-desc-b">{{translation_data.advantages.advantageA.textA2}}</bpText>
                    <bpText class="max-advantage-card-desc-b">{{translation_data.advantages.advantageA.textA3}}</bpText>
                </div>
                <div class="max-advantage-card">
                    <bpImg :src="maxAdvantageIcon" class="max-advantage-card-icon"></bpImg>
                    <bpText class="max-advantage-card-title">02</bpText>
                    <div class="max-advantage-card-title-line"></div>
                    <bpText class="max-advantage-card-desc-a">{{translation_data.advantages.advantageB.title}}</bpText>
                    <bpText class="max-advantage-card-desc-b">{{translation_data.advantages.advantageB.text}}</bpText>
                </div>
                <div class="max-advantage-card">
                    <bpImg :src="maxAdvantageIcon" class="max-advantage-card-icon"></bpImg>
                    <bpText class="max-advantage-card-title">03</bpText>
                    <div class="max-advantage-card-title-line"></div>
                    <bpText class="max-advantage-card-desc-a">{{translation_data.advantages.advantageC.title}}</bpText>
                    <bpText class="max-advantage-card-desc-b">{{translation_data.advantages.advantageC.text}}</bpText>
                </div>
            </div>
            <div class="max-cards-row-b">
                <div class="max-advantage-card">
                    <bpImg :src="maxAdvantageIcon" class="max-advantage-card-icon"></bpImg>
                    <bpText class="max-advantage-card-title">04</bpText>
                    <div class="max-advantage-card-title-line"></div>
                    <bpText class="max-advantage-card-desc-a">{{translation_data.advantages.advantageD.title}}</bpText>
                    <bpText class="max-advantage-card-desc-b">{{translation_data.advantages.advantageD.text}}</bpText>
                </div>
                <div class="max-advantage-card">
                    <bpImg :src="maxAdvantageIcon" class="max-advantage-card-icon"></bpImg>
                    <bpText class="max-advantage-card-title">05</bpText>
                    <div class="max-advantage-card-title-line"></div>
                    <bpText class="max-advantage-card-desc-a">{{translation_data.advantages.advantageE.title}}</bpText>
                    <bpText class="max-advantage-card-desc-b">{{translation_data.advantages.advantageE.text}}</bpText>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import bpText from '../bp-text'
import bpImg from '../bp-img'
import { staticFilePath } from '../../config/envConfig'
import bpButton from '../bp-button'
export default {
    name: "max",
    components: {
        bpText,
        bpImg,
        bpButton
    },
    data() {
        return {
            language: '??????', // ????????????
            windowWidth: document.documentElement.clientWidth,
            windowHeight: document.documentElement.clientHeight,
            response: false,
            responseMini: false,
            maxHeaderImg: `${staticFilePath}` + "/img_detail-page_head_MAX.jpg",
            maxConnectImg: `${staticFilePath}` + "/img_connect_line.svg",
            maxAdvantageIcon: `${staticFilePath}` + "/icon_point.svg",
            maxAdvantageImg: `${staticFilePath}` + "/img_bg_doublehexagon.svg",
            translation_basedata: {
                cn: {
                    home: "??????",
                    max: "MAX",
                    maxEn: " Market Analytic Box",
                    sloganA: "??????????????????CHC???????????????????????????",
                    sloganB: "????????????????????????",
                    MAXTitle: "Market Analytic Box ????????????????????????????????????????????????\n?????????????????????????????????????????????",
                    MAXDescription: {
                        descA: "MAX?????????????????????????????????????????????????????????????????????CHC???????????????340??????????????????31??????????????????????????????????????????????????????????????????",
                        descB: "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
                    },
                    MAXFeature: {
                        featureA: {
                            title: "?????????????????????",
                            textA1: "????????????",
                            textA2: "????????????",
                            textA3: "??????????????????"
                        },
                        featureB: {
                            title: "?????????????????????",
                            textB1: "??????????????????",
                            textB2: "????????????",
                            textB3: "?????????",
                            textB4: "?????????",
                            textB5: "??????",
                            textB6: "????????????"
                        },
                        featureC: {
                            title: "?????????????????????",
                            numberC1: "340+",
                            numberC2: "31",
                            textC3: "??????",
                            textC4: "?????????",
                            textC5: "??????"
                        }
                    },
                    advantages: {
                        advantagesText: "???????????????",
                        advantageA: {
                            title: "???????????????????????????",
                            textA1: "2,000+ ??????????????????",
                            textA2: "1,200+ ????????????",
                            textA3: "2,000+ ????????????????????????"
                        },
                        advantageB: {
                            title: "??????????????????CHC??????",
                            text: "??????????????????16,000?????????????????????12,000?????????????????????????????????10,000?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
                        },
                        advantageC: {
                            title: "?????????????????????",
                            text: "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
                        },
                        advantageD: {
                            title: "????????????????????????",
                            text: "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
                        },
                        advantageE: { 
                            title: "??????????????????",
                            text: "???????????????????????????????????????????????????????????????????????????&?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
                        }
                    }
                },
                en: {
                    home: "Home",
                    max: "MAX??",
                    maxEn: " Market Analytic Box",
                    sloganA: "Cities, Counties, and CHC \n Keeping Tracking Market Trends",
                    sloganB: "Holographic Market Monitoring Tool",
                    MAXTitle: "MAX?? is a Data Product Developed for Pharmaceutical Market Analysis and Product Performance Tracking.",
                    MAXDescription: {
                        descA: "More than 340 prefecture-level cities and 31 provinces can be provided at city hospital,county hospital and CHC channels for data analysis.",
                        descB: "Help pharmaceutical enterprises to fill the gap of market monitoring."
                    },
                    MAXFeature: {
                        featureA: {
                            title: "Sales Channel All Contained",
                            textA1: "City hospitals",
                            textA2: "County hospitals",
                            textA3: "CHC channels"
                        },
                        featureB: {
                            title: "Treatment Fields All Included",
                            textB1: "All treatment Fields",
                            textB2: "All products",
                            textB3: "Molecule",
                            textB4: "Products",
                            textB5: "Vender",
                            textB6: "SKU"
                        },
                        featureC: {
                            title: "Geographic Latitude All Covered",
                            numberC1: "340+",
                            numberC2: "31",
                            textC3: "Nationwide",
                            textC4: "Cities",
                            textC5: "Provinces"
                        }
                    },
                    advantages: {
                        advantagesText: "Capabilities and Strengths",
                        advantageA: {
                            title: "Integrate Multiple Exclusive Data Sources",
                            textA1: "2,000+ Major city hospitals",
                            textA2: "1,200+ County hospitals",
                            textA3: "2,000+ CHCs"
                        },
                        advantageB: {
                            title: "Sophisticated Hospital and CHC Universe",
                            text: "16,000+ city hospitals, 12,000+ county hospitals, 10,000+ CHCs.Data covers basic terminal information and key parameter variables:beds & doctor number, medicine income, outpatient amount, permanent resident number in the CHC located street, etc."
                        },
                        advantageC: {
                            title: "Advanced Algorithm Model",
                            text: "Amplify sample data with scientific statistical method and machine learning model.Obtain optimal model after rigorous cross validation and multiple tests.Meanwhile, combine with actual business situation and optimize learning results to obtain reliable data products."
                        },
                        advantageD: {
                            title: "Flexible Customized Output",
                            text: "Through the underlying data, we can flexibly relate the hospital level product and market data according to the internal organizational structure of the enterprise,so as to help the enterprise fully understand the real market performance of each region."
                        },
                        advantageE: { 
                            title: "Multidimensional and Multilayer Analysis",
                            text: "From sales channel, organizational structure, time dimension, products (competitions), volume & value ... realize the level-by-level analysis and in-depth mining from the nationwide, region, province to city, so as to discover the most core problem."
                        }
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
    .bp-max {
        width: 100%;
        min-width: 375px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .max-header {
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
            .ph-body-small-inverse {
                opacity: .7;
                font-size: 14px;
                color: #FFF;
                cursor: pointer!important;
            }
            .top-breadcrumb {
                position: absolute;
                top: 104px;
            }
            .mr-0 {
                margin-right: 2px;
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
            .max-header-slogan-b {
                height: auto;
                width: auto;
                margin-top: 20px;
                background: 0 0;
                font-size: 40px;
                color: #FFF;
                position: relative;
                top: -95px;
            }
            .max-header-slogan-c {
                height: auto;
                width: auto;
                margin-top: 4px;
                background: 0 0;
                font-size: 24px;
                color: #FFF;
                opacity: .9;
                position: relative;
                top: -50px;
                white-space: pre-line;
            }
        }
        .max-text-info {
            height: 710px;
            width: 1200px;
            background: 0 0;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .max-connect-img {
                height: auto;
                width: auto;
                background: 0 0;
                position: absolute;
                top: -40px;
                object-fit: cover;
            }
            .max-text-info-title {
                height: auto;
                width: 640px;
                margin-bottom: 32px;
                background: 0 0;
                font-size: 24px;
                color: #2D334D;
            }
            .max-text-info-text {
                height: auto;
                width: 640px;
                margin-bottom: 32px;
                background: 0 0;
                font-size: 16px;
                color: #747789;
            }
            .rw-text-card-container {
                height: auto;
                width: 946px;
                background: 0 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .max-text-card {
                    height: 246px;
                    width: 300px;
                    padding: 32px 32px 0;
                    border-radius: 2px;
                    box-shadow: 0 4px 10px 0 rgba(22, 28, 57, 0.1), 0 -1px 0 0 rgba(22, 28, 57, 0.02);
                    display: flex;
                    flex-direction: column;
                    background: linear-gradient(rgba(22,28,57,.08) 1px,transparent 0),linear-gradient(90deg,rgba(22,28,57,.08) 1px,transparent 0);
                    background-size: 100px 100px,70px 70px;
                    .max-text-card-line {
                        height: 2px;
                        width: 16px;
                        margin-bottom: 24px;
                        background: #F5C924;
                    }
                    .max-text-card-tilte {
                        height: auto;
                        width: auto;
                        margin-bottom: 32px;
                        background: 0 0;
                        color: #2D334D;
                        font-size: 16px;
                        font-weight: 500;
                    }
                    .max-text-card-content {
                        height: auto;
                        width: auto;
                        margin-bottom: 8px;
                        background: 0 0;
                        color: #747789;
                        font-size: 14px;
                    }
                    .max-card-tag-row {
                        height: auto;
                        width: auto;
                        background: 0 0;
                        display: flex;
                        flex-direction: row;
                        flex-flow: wrap;
                        .max-card-tag {
                            height: 22px;
                            width: auto;
                            margin-right: 4px;
                            background: #F6F6F7;
                            font-size: 12px;
                            color: #747789;
                            padding: 2px 6px;
                            border: 1px solid rgba(22,28,57,.08);
                            display: flex;
                            align-items: center;
                        }
                    }
                    .max-card-row {
                        justify-content: space-between;
                        height: auto;
                        width: auto;
                        margin-bottom: 8px;
                        background: 0 0;
                        display: flex;
                        flex-direction: row;
                        .max-card-row-1 {
                            display: flex;
                            flex-direction: column;
                            
                            .max-card-row-b-1 {
                                height: auto;
                                width: auto;
                                background: 0 0;
                                font-size: 12px;
                                color: #A2A5B0;
                            }
                        }
                        .max-card-row-2 {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        }
                        .max-card-row-a {
                            height: auto;
                            width: auto;
                            background: 0 0;
                            font-size: 24px;
                            color: #2D334D;
                            font-weight: 300;
                        }
                        .max-card-row-b-2 {
                            height: auto;
                            width: auto;
                            background: 0 0;
                            font-size: 12px;
                            color: #A2A5B0;
                        }
                        .max-card-row-b {
                            height: auto;
                            width: auto;
                            margin-right: 0;
                            background: 0 0;
                            font-size: 24px;
                            color: #2D334D;
                            font-weight: 300;
                        }
                    }
                }
            }
        }
        .max-advantage-card-container {
            height: auto;
            width: 1200px;
            padding-top: 104px;
            background: -40% top no-repeat,linear-gradient(173deg,#3C3F53 5%,#1B1F35 98%);
            position: relative;
            align-items: center;
            display: flex;
            flex-direction: column;
            .max-advantage-card-container-img {
                position: absolute;
                width: 100%;
                object-fit: cover;
            }
            .max-connect-img {
                height: auto;
                width: auto;
                background: 0 0;
                position: absolute;
                top: -40px;
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
            .max-cards-row-a {
                height: auto;
                width: 998px;
                margin-bottom: 64px;
                background: 0 0;
                justify-content: space-between;
                display: flex;
            }
            .max-cards-row-b {
                height: auto;
                width: 652px;
                margin-bottom: 64px;
                background: 0 0;
                display: flex;
                justify-content: space-between;
            }
            .max-advantage-card {
                height: auto;
                width: 306px;
                background: rgba(255,255,255,.05);
                box-shadow: 0 8px 10px 0 rgba(8, 11, 26, 0.21);
                border-radius: 2px;
                padding: 40px 32px;
                position: relative;
                display: flex;
                flex-direction: column;
                .max-advantage-card-icon {
                    height: 22px;
                    width: 19px;
                    background: 0 0;
                    position: absolute;
                    left: -10px;
                    top: 55px;
                }
                .max-advantage-card-title {
                    height: auto;
                    width: auto;
                    margin-bottom: 32px;
                    background: 0 0;
                    font-size: 40px;
                    color: #FFF;
                    opacity: .4;
                    font-weight: 100;
                }
                .max-advantage-card-title-line {
                    height: 1px;
                    width: 49px;
                    margin-bottom: 32px;
                    background: #F5C924;
                    opacity: .8;
                }
                .max-advantage-card-desc-a {
                    height: auto;
                    width: auto;
                    margin-bottom: 25px;
                    background: 0 0;
                    font-size: 16px;
                    opacity: .9;
                    color: #FFF;
                }
                .max-advantage-card-desc-b {
                    height: auto;
                    width: auto;
                    margin-bottom: 8px;
                    background: 0 0;
                    font-size: 12px;
                    opacity: .7;
                    color: #FFF;
                }
            }
        }
    }
    @media (max-width: 992px) {
        ::-webkit-scrollbar-thumb {
            background: transparent;
        }
        .max-header {
            padding: 0 60px !important;
            .page-header-anton-font {
                font-size: 60px !important;
            }
        }
        .max-text-info {
            width: 100% !important;
            height: auto !important;
            padding: 100px 60px !important;

            .max-text-info-text, .max-text-info-title {
                width: 100% !important;
            }

            .rw-text-card-container {
                flex-wrap: wrap;
                width: 100% !important;
                height: auto !important;
                justify-content: space-between !important;

                .max-text-card {
                    padding-bottom: 24px !important;
                    width: 30% !important;
                    height: auto !important;

                    .max-card-row {
                        flex-wrap: wrap !important;
                    }
                }
            }
        }
        .max-advantage-card-container {
            width: 100% !important;

            .max-cards-row-a, .max-cards-row-b {
                width: 100% !important;
                padding: 0 24px !important;
                overflow: scroll;

                .max-advantage-card {
                    margin: 0 12px;
                    flex-shrink: 0;
                }
            }

            .max-cards-row-b {
                justify-content: center !important;
            }

        }
    }
    @media (max-width: 768px) {
        ::-webkit-scrollbar-thumb {
            background: transparent;
        }
        .max-header {
            padding: 0 40px !important;
        }
        .max-advantage-card-container {
            .max-cards-row-b {
                justify-content: space-between !important;
            }
        }
        .max-card-tag {
            word-break: keep-all;
        }
    }
    @media (max-width: 549px), (width: 549px) {
        .max-header {
            padding: 0 24px !important;

            .max-header-slogan-b {
                top: -70px !important;
            }
            .page-header-anton-font {
                font-size: 60px !important;
                line-height: 80px;
            }
        }
        .max-text-info {
            width: 100% !important;
            padding: 100px 24px !important;
        }

        .max-text-info .max-text-info-title,
        .max-text-info .max-text-info-text {
            width: 100% !important;
            padding: 0 24px !important;
        }

        .max-text-info .rw-text-card-container {
            flex-wrap: wrap;
            justify-content: center !important;
        }
        
        .max-text-info .rw-text-card-container {
            width: 100% !important;
            height: auto !important;
        }

        .max-text-info {
            height: auto !important;
        }

        .max-text-info .rw-text-card-container .max-text-card {
            height: 246px !important;
            width: 300px !important;
            margin-bottom: 24px!important;
        }

        .max-advantage-card-container {
            width: 100% !important;

            .max-cards-row-a, .max-cards-row-b {
                width: 100% !important;
                padding: 0 24px !important;
                overflow: scroll;

                .max-advantage-card {
                    margin: 0 12px;
                    flex-shrink: 0;
                }
            }

        }
    }
</style>