<template>
    <div class="bp-activity-list">
        <div class="activity-list-header">
            <bpImg :src="aboveDataImg" class="above-data-detail-header-img"></bpImg>
            <bpText class="ph-body-small-inverse top-breadcrumb">
                <span class="mr-0" @click="toHome">{{translation_data.home}}</span>
                <span class="mr-0">/</span>
                <span>{{translation_data.events}}</span>
            </bpText>
            <bpText class="page-header-anton-font-a"> Event </bpText>
            <bpText class="ph-H-xLarge-inverse">{{translation_data.events}}</bpText>
            <bpText class="ph-H-Large-2-inverse"></bpText>
        </div>
        <div class="activity-list-container">
            <bpTabs></bpTabs>
        </div>
    </div>
</template>
<script>
import bpText from '../bp-text'
import bpImg from '../bp-img'
import bpButton from '../bp-button'
import bpTabs from '../bp-tabs'
export default {
    name: "",
    components: {
        bpText,
        bpImg,
        bpButton,
        bpTabs
    },
    data() {
        return {
            language: '中文', // 中英切换
            windowWidth: document.documentElement.clientWidth,
            windowHeight: document.documentElement.clientHeight,
            response: false,
            responseMini: false,
            aboveDataImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_event-list_hero_bg.jpg",
            translation_basedata: {
                cn: {
                    home: "主页",
                    events: "活动资讯",
                    activity: "EVENTS",
                    reviewActivities: "精彩回顾",
                    powerOfAlgorithms: "意会，在“算法时代下的力量”",
                    more: "了解更多",
                    titleA: "Above Data 分享会",
                    titleB: "2020 第一期",
                    position: "北京市 朝阳区",
                    time: "2020-01-09",
                    activityA: {
                        title: "第八届中国医药决策科学峰会",
                        host: "主办方 中国医药市场研究协会",
                        position: "2019-10-23 南京"
                    },
                    activityB: {
                        title: "县域/广阔医药市场准入和营销专家论坛",
                        host: "主办方 E药经理人、法伯科技",
                        position: "2019-05-24 厦门"
                    },
                    moreActivity: "更多活动",
                    register: "立即报名"
                },
                en: {
                    home: "Home",
                    events: "Events",
                    activity: "Events",
                    reviewActivities: "Latest from Pharbers",
                    powerOfAlgorithms: "Power under Algorithms Era",
                    more: "MORE",
                    titleA: "Above Data Seminar",
                    titleB: "2020 1st",
                    position: "Chaoyang District, Beijing",
                    time: "2020-01-09",
                    activityA: {
                        title: "The 8th China Pharmaceutical Decision Science Summit",
                        host: "China Pharmaceutical Market Research Association",
                        position: "2019-10-23 Nanjing"
                    },
                    activityB: {
                        title: "County / Broad Pharmaceutical Marketing Expert Forum",
                        host: "Healthcare excutive & Pharbers",
                        position: "2019-05-24 Xiamen"
                    },
                    moreActivity: "MORE",
                    register: "Meet Us"
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
        },
        windowHeight(val) {
            console.log('height', val, this.windowHeight)
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
                localStorage.setItem('lang', '中文')
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
            this.$emit('linkToPage', 'home')
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
    .bp-activity-list {
        width: 100%;
        min-width: 375px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .activity-list-header  {
            height: 600px;
            width: 100%;
            padding-left: 100px;
            background: transparent;
            background-image: linear-gradient(rgba(22,28,57,0.5), rgba(22,28,57,0.5));
            background-size: cover;
            display: flex;
            justify-content: center;
            flex-direction: column;
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
            .above-data-detail-header-img {
                height: 600px;
                width: 100%;
                position: absolute;
                z-index: -2;
                left: 0;
                object-fit: cover;
            }
            .page-header-anton-font-a {
                font-family: Anton-Regular;
                font-size: 100px;
                color: #FFF;
                letter-spacing: 2.5px;
                background-image: linear-gradient(rgba(255,255,255,.4),rgba(255,255,255,0) 80%);
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .ph-H-xLarge-inverse {
                position: relative;
                top: -80px;
                font-size: 40px;
                color: rgba(255,255,255,.9);
            }
        }
        .activity-list-container {
            display: flex;
            flex-direction: column;
            height: auto;
            width: auto;
            background: 0 0;
            padding: 0;
        }
    }
</style>