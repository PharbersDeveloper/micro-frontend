<template>
    <div class="bp-above-data-detail">
        <!-- eventList: {{allData.eventList}}
        data: {{allData.data}}
        participantList: {{allData.participantList}}
        galleryShow: {{allData.galleryShow}}
        galleryList: {{allData.galleryList}}
        imageList: {{allData.imageList}}
        participantListAll: {{allData.participantListAll}} -->
        <div class="above-data-detail-header">
            <bpImg class="above-data-detail-header-img" :src="headerImg"></bpImg>
            <bpText class="ph-body-small-inverse top-breadcrumb">
                <span class="mr-0" @click="toHome">{{translation_data.home}}</span>
                <span class="mr-0">/</span>
                <span class="mr-0" @click="toActivityList">{{translation_data.activityList}}</span>
                <span class="mr-0">/</span>
                <span>{{allData.data[0].title}}</span>
            </bpText>
            <div class="header-img-mask">
            </div>
            <bpText class="ph-H-xLarge-inverse">{{allData.data[0].title}}</bpText>
            <div class="above-data-detail-header-info-row">
                <div class="above-data-detail-header-divider">
                    <div class="date">
                        <div class="icon_date"></div>
                        <bpText class="ph-H-Medium-inverse">{{transDate(allData.data[0].startDate, 0)}}</bpText>
                    </div>
                    <div class="address">
                        <div class="icon_location"></div>
                        <bpText class="ph-H-Medium-inverse">{{allData.data[0].location}}</bpText>
                    </div>
                </div>
            </div>
        </div>
        <div class="above-data-detail-desc">
            <bpImg :src="lineImg" class="above-data-connect-img"></bpImg>
            <bpText class="ph-H-Large_2">{{allData.data[0].contentTitle}}</bpText>
            <bpText class="ph-body-medium">{{allData.data[0].contentDesc}}</bpText>
        </div>
        <div class="main-flex-start">
            <bpImg class="line-img" :src="lineImg"></bpImg>
        </div>
        <div class="main-flex-start">
            <bpText class="ph-H-Large_2">{{translation_data.agenda}}</bpText>
        </div>
        <div class="agenda-container">
            <div class="main-center" v-for="(agenda,index) in allData.eventListAll" :key="index">
                <!-- translation_data.agendas -->
                <bpText class="ph-body-xsmall-tertiary">
                    {{transDate(agenda.eventList.startDate, 1)}}~{{transDate(agenda.eventList.endDate, 1)}}
                </bpText>
                <div class="main-flex-start">
                    <div class="agenda-dot">
                    </div>
                </div>
                <div class="agenda-text-box">
                    <bpText class="ph-H-Medium">{{agenda.eventList.title}}</bpText>
                    <bpText class="ph-body-medium">{{agenda.speaker}}</bpText>
                </div>
            </div>
        </div>
        <div class="main-flex-start">
            <bpImg class="line-img line-img-speaker" :src="lineImg"></bpImg>
        </div>
        <div class="main-flex-start">
            <bpText class="ph-H-Large_2">{{translation_data.speaker}}</bpText>
        </div>
        <div class="speaker-img-container">
            <div class="speaker-img-box" v-for="(speaker,index) in allData.participantListAll" :key="index">
                <bpImg class="speaker-img" :src="'https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com'+speaker.image.path"></bpImg>
                <div class="speaker-img-info">
                    <bpText class="ph-H-Medium">{{speaker.participant.name}}</bpText>
                    <bpText class="ph-body-small">{{speaker.participant.occupation}}</bpText>
                    <bpText class="ph-body-small">{{speaker.participant.title}}</bpText>
                </div>
            </div>
        </div>
        <div class="main-flex-start">
            <bpImg class="line-img line-img-gallery" :src="lineImg"></bpImg>
        </div>
        <div class="gallery-text-container">
            <bpText class="ph-H-Large_2">{{translation_data.gallery}}</bpText>
        </div>
        <bpPhoto :galleryShow="allData.galleryShow[0]" :galleryList="allData.galleryList"></bpPhoto>
    </div>
</template>
<script>
import bpText from '../bp-text'
import bpImg from '../bp-img'
import bpButton from '../bp-button'
import bpPhoto from '../panel/bp-gallery-image'
export default {
    name: "",
    components: {
        bpText,
        bpImg,
        bpButton,
        bpPhoto
    },
    data() {
        return {
            language: '中文', // 中英切换
            windowWidth: document.documentElement.clientWidth,
            windowHeight: document.documentElement.clientHeight,
            response: false,
            responseMini: false,
            headerImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_abovedata_2020-01-09_00005.jpg",
            lineImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_connect_line.svg",
            head: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/avatar_cl.png",
            translation_basedata: {
                cn: {
                    home: "主页",
                    activityList: "活动资讯",
                    agenda: "会议议程",
                    speaker: "嘉宾讲者",
                    gallery: "精彩回顾"
                },
                en: {
                    home: "Home",
                    activityList: "Events",
                    agenda: "Agendas",
                    speaker: "Speakers",
                    gallery: "Gallery"
                }
            }
        }
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    "eventList": [
                        {
                            "title": "嘉宾签到",
                            "subTitle": "",
                            "description": "",
                            "startDate": "2020-01-09T13:30:00.000Z",
                            "endDate": "2020-01-09T14:00:00.000Z",
                            "language": 1
                        },
                        {
                            "title": "开场",
                            "subTitle": "",
                            "description": "",
                            "startDate": "2020-01-09T14:00:00.000Z",
                            "endDate": "2020-01-09T14:10:00.000Z",
                            "language": 1
                        },
                        {
                            "title": "医疗大数据简介及行业应用",
                            "subTitle": "",
                            "description": "",
                            "startDate": "2020-01-09T14:10:00.000Z",
                            "endDate": "2020-01-09T14:40:00.000Z",
                            "language": 1
                        },
                        {
                            "title": "Real World Data",
                            "subTitle": "",
                            "description": "",
                            "startDate": "2020-01-09T14:40:00.000Z",
                            "endDate": "2020-01-09T15:10:00.000Z",
                            "language": 1
                        },
                        {
                            "title": "茶歇",
                            "subTitle": "",
                            "description": "",
                            "startDate": "2020-01-09T15:10:00.000Z",
                            "endDate": "2020-01-09T15:30:00.000Z",
                            "language": 1
                        },
                        {
                            "title": "大数据到Insight之间的三道弯",
                            "subTitle": "",
                            "description": "",
                            "startDate": "2020-01-09T15:30:00.000Z",
                            "endDate": "2020-01-09T16:00:00.000Z",
                            "language": 1
                        },
                        {
                            "title": "大数据应用Case分享",
                            "subTitle": "",
                            "description": "",
                            "startDate": "2020-01-09T16:00:00.000Z",
                            "endDate": "2020-01-09T16:30:00.000Z",
                            "language": 1
                        },
                        {
                            "title": "交流讨论",
                            "subTitle": "",
                            "description": "",
                            "startDate": "2020-01-09T16:30:00.000Z",
                            "endDate": "2020-01-09T16:50:00.000Z",
                            "language": 1
                        }
                    ],
                    "data": [
                        {
                            "title": "Above Data 2020 第一期",
                            "subTitle": "",
                            "startDate": "2020-01-09T00:00:00.000Z",
                            "endDate": null,
                            "location": "北京市 朝阳区 东外56号文创园A座 屋顶露台咖啡厅",
                            "city": "北京",
                            "activityType": "Above Data",
                            "contentTitle": "ABOVE DATA已经伴我们走过了一年的时间",
                            "contentDesc": "2019年来自辉瑞、拜耳、赛诺菲、施维雅等10余家顶级公司市场部门的同仁及多位行业专家在ABOVE DATA的活动中分享了数据应用方面的心得以及新政策下的思考。在2020年，ABOVE DATA第一期活动中，将从HIS系统、真实世界数据应用案例分析等角度，对当下大家感兴趣的真实世界数据及其应用，提供分享、沟通和交流的平台。",
                            "language": 1,
                            "gallery": [
                                "hAfmFr18f-PjEd6iRlSa",
                                "tlUL2KoztDvYHzICj2Lk",
                                "sdNF2XK96PFe6PqJFta1",
                                "nFH05r2L5NPg0L0cGntx",
                                "tgjUgHp5Afd210qWEuGo",
                                "9E_HVJZkb-ipp33wOpon",
                                "VcX1_q_hpFWGWsWkapd1",
                                "PEJxfZ52pfLSPPTuBROg",
                                "u2ZPA2TG5aWESp4PQBZY",
                                "dzb2E2zwlgw2THoyHr40"
                            ],
                            "agendas": [
                                "cY-ohk2RotoF410CmPwC"
                            ],
                            "logo": "Md1Q6SGSVOEwZ5waMePL",
                            "logoOnTime": null,
                            "partners": []
                        }
                    ],
                    "participantList": [
                        {
                            "name": "连春玲",
                            "title": "",
                            "occupation": "法伯科技·法伯研究院院长",
                            "language": 1,
                            "avatar": "Dn2xhyf-otCf1sf4HPaG",
                            "event": "1dc46xzlBmNlOpzLlZoN",
                            "zone": null
                        },
                        {
                            "name": "王威",
                            "title": "",
                            "occupation": "拜耳制药·数据洞察总监",
                            "language": 1,
                            "avatar": "pzo_JVUmUUYUYwQqcR9C",
                            "event": "CMIPx2Mecphi6us92I48",
                            "zone": null
                        },
                        {
                            "name": "向娟",
                            "title": "",
                            "occupation": "医联·高级总监",
                            "language": 1,
                            "avatar": "1lfaRhn8LhXXz9Q18Kzp",
                            "event": "xwYNwi8k7dyPxEUB2-bu",
                            "zone": null
                        },
                        {
                            "name": "常宇航",
                            "title": "",
                            "occupation": "国华网络科技·医疗事业部总监",
                            "language": 1,
                            "avatar": "HcqnXchiiFhwdGtJjDyR",
                            "event": "aJSVO-rKkHS8-IaQSbEw",
                            "zone": null
                        },
                        {
                            "name": "薛林桐",
                            "title": "",
                            "occupation": "法伯科技·创始人",
                            "language": 1,
                            "avatar": "Vfa5jGc5dnlS72H72_Sn",
                            "event": "2gsP2Ik2F6pA96U_qK31",
                            "zone": null
                        }
                    ],
                    "galleryShow": [
                        {
                            "f": "/public/photo_events_abovedata_2020-01-09_00006.jpg",
                            "d": "/public/photo_events_abovedata_2020-01-09_00007.jpg",
                            "c": "/public/photo_events_abovedata_2020-01-09_00008.jpg",
                            "a": "/public/photo_events_abovedata_2020-01-09_00000.jpg",
                            "e": "/public/photo_events_abovedata_2020-01-09_00004.jpg",
                            "b": "/public/photo_events_abovedata_2020-01-09_00003.jpg"
                        }
                    ],
                    "galleryList": [
                        {
                            "path": "/public/photo_events_abovedata_2020-01-09_00005.jpg",
                            "tag": "cover",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_abovedata_2020-01-09_00006.jpg",
                            "tag": "galleryshow-f",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_abovedata_2020-01-09_00007.jpg",
                            "tag": "galleryshow-d",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_abovedata_2020-01-09_00008.jpg",
                            "tag": "galleryshow-c",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_abovedata_2020-01-09_00000.jpg",
                            "tag": "galleryshow-a",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_abovedata_2020-01-09_00009.jpg",
                            "tag": "",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_abovedata_2020-01-09_00002.jpg",
                            "tag": "",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_abovedata_2020-01-09_00001.jpg",
                            "tag": "",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_abovedata_2020-01-09_00004.jpg",
                            "tag": "galleryshow-e",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_abovedata_2020-01-09_00003.jpg",
                            "tag": "galleryshow-b",
                            "report": null
                        }
                    ],
                    "imageList": [
                        {
                            "path": "/public/avatar_ww.png",
                            "tag": "",
                            "report": null
                        },
                        {
                            "path": "/public/avatar_xj.png",
                            "tag": "",
                            "report": null
                        },
                        {
                            "path": "/public/avatar_cyh.png",
                            "tag": "",
                            "report": null
                        },
                        {
                            "path": "/public/avatar_xlt.png",
                            "tag": "",
                            "report": null
                        },
                        {
                            "path": "/public/avatar_cl.png",
                            "tag": "",
                            "report": null
                        }
                    ],
                    "participantListAll": [
                        {
                            "participant": {
                                "name": "连春玲",
                                "title": "",
                                "occupation": "法伯科技·法伯研究院院长",
                                "language": 1,
                                "avatar": "Dn2xhyf-otCf1sf4HPaG",
                                "event": "1dc46xzlBmNlOpzLlZoN",
                                "zone": null
                            },
                            "image": {
                                "path": "/public/avatar_cl.png",
                                "tag": "",
                                "report": null
                            }
                        },
                        {
                            "participant": {
                                "name": "王威",
                                "title": "",
                                "occupation": "拜耳制药·数据洞察总监",
                                "language": 1,
                                "avatar": "pzo_JVUmUUYUYwQqcR9C",
                                "event": "CMIPx2Mecphi6us92I48",
                                "zone": null
                            },
                            "image": {
                                "path": "/public/avatar_ww.png",
                                "tag": "",
                                "report": null
                            }
                        },
                        {
                            "participant": {
                                "name": "向娟",
                                "title": "",
                                "occupation": "医联·高级总监",
                                "language": 1,
                                "avatar": "1lfaRhn8LhXXz9Q18Kzp",
                                "event": "xwYNwi8k7dyPxEUB2-bu",
                                "zone": null
                            },
                            "image": {
                                "path": "/public/avatar_xj.png",
                                "tag": "",
                                "report": null
                            }
                        },
                        {
                            "participant": {
                                "name": "常宇航",
                                "title": "",
                                "occupation": "国华网络科技·医疗事业部总监",
                                "language": 1,
                                "avatar": "HcqnXchiiFhwdGtJjDyR",
                                "event": "aJSVO-rKkHS8-IaQSbEw",
                                "zone": null
                            },
                            "image": {
                                "path": "/public/avatar_cyh.png",
                                "tag": "",
                                "report": null
                            }
                        },
                        {
                            "participant": {
                                "name": "薛林桐",
                                "title": "",
                                "occupation": "法伯科技·创始人",
                                "language": 1,
                                "avatar": "Vfa5jGc5dnlS72H72_Sn",
                                "event": "2gsP2Ik2F6pA96U_qK31",
                                "zone": null
                            },
                            "image": {
                                "path": "/public/avatar_xlt.png",
                                "tag": "",
                                "report": null
                            }
                        }
                    ]
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
        },
        toActivityList() {
            this.$emit('linkToActivity', 'activity-list')
        },
        transDate(param, type) {
            let date = new Date(param)
            let y = date.getUTCFullYear()
            let d = date.getUTCDate()
            let m = date.getUTCMonth() 

            if(type == 1) {
                let hour = date.getUTCHours() < 10 ? "0" + date.getUTCHours() : date.getUTCHours()
                let minute = date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes()
                return hour + ":" + minute
            } else if(type == 0) {
                m = m + 1 < 10 ? "0" + (m+1) : m+1
                d = d < 10 ? "0"+ d : d   
                return y + "-" + m + "-" + d
            }
            
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
.bp-above-data-detail {
    width: 100%;
    min-width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .above-data-detail-header {
        height: 600px;
        width: 100%;
        background: 0 0;
        background-image: linear-gradient(rgba(22,28,57,.5),rgba(22,28,57,.5));
        padding: 0 100px;
        background-size: cover;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .above-data-detail-header-img {
            object-fit: cover;
            height: 600px;
            width: 100%;
            position: absolute;
            z-index: -2;
            left: 0;
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
        .header-img-mask {
            height: 600px!important;
            width: 100%!important;
            position: absolute;
            z-index: -1;
            left: 0;
            background: rgba(22,28,57,.5)!important;
            display: flex;
        }
        .ph-H-xLarge-inverse {
            margin-bottom: 32px!important;
            font-size: 40px;
            color: rgba(255,255,255,.9);
        }
        .above-data-detail-header-info-row {
            display: flex;
            flex-direction: row;
            .above-data-detail-header-divider {
                padding-top: 38px;
                margin-top: 40px;
                border-top: 1px solid rgba(255,255,255,.2);
                display: flex;
                flex-direction: column;
                .date {
                    display: flex;
                    flex-direction: row;
                    margin-bottom: 16px;
                    .icon_date {
                        background: url("data:image/svg+xml,%3Csvg width='1024' height='1024' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M810.667 147.2H768V64h-85.333v83.2H341.333V64H256v83.2h-42.667c-47.36 0-84.906 37.44-84.906 83.2L128 812.8c0 45.76 37.973 83.2 85.333 83.2h597.334C857.6 896 896 858.56 896 812.8V230.4c0-45.76-38.4-83.2-85.333-83.2zm0 665.6H213.333V355.2h597.334v457.6zm-512-374.4H512v208H298.667v-208z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center/100% !important;
                        width: 24px;
                        height: 24px;
                    }
                }
                .address {
                    display: flex;
                    flex-direction: row;
                    .icon_location {
                        background: url("data:image/svg+xml,%3Csvg width='1024' height='1024' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M500.136 64c-94.976 0-189.952 36.224-262.4 108.736-145.024 144.896-145.024 379.84 0 524.736L500.136 960l262.4-262.528c145.088-145.024 145.088-379.968 0-524.736C690.152 100.224 595.112 64 500.136 64zm0 512c-35.328 0-67.328-14.4-90.496-37.504-23.168-23.104-37.504-55.104-37.504-90.496 0-70.72 57.28-128 128-128s128 57.28 128 128c0 35.392-14.4 67.392-37.504 90.496S535.464 576 500.136 576z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center/100% !important;
                        width: 24px;
                        height: 24px;
                    }
                }
                .ph-H-Medium-inverse {
                    margin-left: 16px;
                    font-size: 16px;
                    color: rgba(255,255,255,.9);
                }
            }
        }
    }
    .above-data-detail-desc {
        height: auto;
        width: 640px;
        background: 0 0;
        padding: 104px 0 64px;
        position: relative;
        align-items: center;
        display: flex;
        flex-direction: column;
        .above-data-connect-img {
            height: auto;
            width: auto;
            background: 0 0;
            position: absolute;
            top: -40px;
            object-fit: cover;
        }
        .ph-H-Large_2 {
            margin-bottom: 32px!important;
            font-size: 24px;
            color: #2D334D;
            align-self: flex-start;
            display: flex;
        }
        .ph-body-medium {
            white-space: pre-line;
            font-size: 16px;
            color: #747789;
            display: flex;
        }
    }
    .main-flex-start {
        display: flex;
        height: auto;
        width: auto;
        background: 0 0;
        display: flex;
        padding: 0;
        .line-img {
            object-fit: cover;
            margin-bottom: 32px!important;
        }
        .ph-H-Large_2 {
            font-size: 24px;
            margin-top: 32px;
            margin-bottom: 40px;
            color: #2D334D;
        }
        .line-img-speaker {
            margin-top: 32px;
        }
        .line-img-gallery {
            margin-bottom: 0px !important;
        }
    }
    .agenda-container {
        height: auto;
        width: 100%;
        background: 0 0;
        justify-content: center;
        display: flex;
        flex-direction: column;
        .main-center {
            display: flex;
            flex-direction: row;
            align-items: center!important;
            justify-content: center;
            .ph-body-xsmall-tertiary {
                line-height: 104px;
                width: 70px!important;
                margin-right: 32px;
                font-size: 12px;
                color: #A2A5B0;
            }
            .agenda-dot {
                height: 7px;
                width: 7px;
                background: #F5C924;
                border-radius: 50%;
                display: flex;
            }
            .agenda-text-box {
                height: 104px;
                width: 420px;
                margin: 16px 0 16px 64px;
                padding: 0 24px;
                background: rgba(22,28,57,.02);
                border-left: 1px solid #F5C924;
                justify-content: center;
                display: flex;
                flex-direction: column;
                .ph-H-Medium {
                    font-size: 16px;
                    color: #2D334D!important;
                    margin-bottom: 8px;
                    font-weight: 700;
                }
                .ph-body-medium {
                    font-size: 16px;
                    color: #747789;
                }
            }
        }
    }
    .speaker-img-container {
        height: auto;
        width: 848px;
        background: 0 0;
        justify-content: space-between;
        flex-wrap: wrap;
        display: flex;
        flex-direction: row;
        .speaker-img-box {
            height: auto;
            width: 349px;
            margin-bottom: 100px;
            background: 0 0;
            display: flex;
            flex-direction: row;
            .speaker-img {
                height: 200px;
                width: 200px;
                margin-right: 48px;
                background: 0 0;
                box-shadow: 8px 8px 0 0 #161c39, 14px 14px 12px 0 rgba(22, 28, 57,0.22);
            }
            .speaker-img-info {
                height: auto;
                background: 0 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: auto;
                max-width: 100px;
                .ph-H-Medium {
                    margin-bottom: 8px;
                    font-size: 16px;
                    color: #2D334D!important;
                    font-weight: 700;
                }
                .ph-body-small {
                    font-size: 14px;
                    color: #747789;
                }
            }
        }
    }
    .gallery-text-container {
        height: auto;   
        width: auto;
        background: 0 0;
        margin: 64px 0;
        .ph-H-Large_2 {
            font-size: 24px;
            margin-top: 32px;
            margin-bottom: 40px;
            color: #2D334D;
        }
    }

    @media (max-width: 992px) and (min-width: 769px) {
        .above-data-detail-header {
            padding: 0 60px !important;
        }
        .above-data-detail-desc {
            width: 100% !important;
            padding: 100px 18% !important;
        }

        .agenda-container {
            padding: 0 16px;
            
            .agenda-text-box {
                height: auto !important;
                padding: 24px !important;
                margin-left: 24px !important;
                margin-right: 0 !important;
            }
        }
    }

    @media (max-width: 768px) and (min-width: 550px) {
        .above-data-detail-header {
            padding: 0 40px !important;
        }
        .above-data-detail-desc {
            width: 100% !important;
            padding: 100px 40px !important;
        }
        .speaker-img-container {
            width: 100% !important;
            padding: 0 16px !important;
            .speaker-img-box {
                width: 50% !important;
                margin-bottom: 40px !important;
                flex-wrap: wrap;
                align-content: center !important;
                flex-direction: column !important;
                .speaker-img {
                    width: 115px !important;
                    height: 115px !important;
                    margin-bottom: 24px !important;
                    margin-right: 0 !important;
                }
            }
        }
        .agenda-container {
            padding: 0 16px;
            
            .agenda-text-box {
                height: auto !important;
                padding: 24px !important;
                margin-left: 24px !important;
                margin-right: 0 !important;
            }

            .agenda-time-line {
                height: 0 !important;
            }
        }
    }
    @media (max-width: 549px), (width: 549px)  {
        .above-data-detail-header {
            padding: 0 24px !important;
        }
        .above-data-detail-desc {
            width: 100% !important;
            padding: 100px 24px !important;
        }
        .speaker-img-container {
            width: 100% !important;
            padding: 0 16px !important;
            .speaker-img-box {
                width: 50% !important;
                margin-bottom: 40px !important;
                flex-wrap: wrap;
                align-content: center !important;
                flex-direction: column !important;
                .speaker-img {
                    width: 115px !important;
                    height: 115px !important;
                    margin-bottom: 24px !important;
                    margin-right: 0 !important;
                }
            }
        }
        .agenda-container {
            padding: 0 16px;
            
            .agenda-text-box {
                height: auto !important;
                padding: 24px !important;
                margin-left: 24px !important;
                margin-right: 0 !important;
            }

            .agenda-time-line {
                height: 0 !important;
            }
        }
    }
}
</style>