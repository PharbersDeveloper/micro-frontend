<template>
    <div class="bp-industry-activity-detail">
        <!-- eventAll: {{allData.eventAll}}
        data: {{allData.data}}
        participantList: {{allData.participantList}}
        galleryShow: {{allData.galleryShow}}
        galleryList: {{allData.galleryList}}
        imageList: {{allData.imageList}} -->
        <div class="industry-activity-detail-header">
            <bpImg class="industry-activity-detail-header-img" :src="headerImg"></bpImg>
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
            <bpText class="ph-H-Large-2-inverse">{{allData.data[0].subTitle}}</bpText>
            <div class="industry-activity-detail-header-info-row">
                <div class="industry-activity-detail-header-divider">
                    <div class="date">
                        <div class="icon_date"></div>
                        <bpText class="ph-H-Medium-inverse">{{allData.data[0].startDate}}</bpText>
                    </div>
                    <div class="address">
                        <div class="icon_location"></div>
                        <bpText class="ph-H-Medium-inverse">{{allData.data[0].location}}</bpText>
                    </div>
                </div>
            </div>
        </div>
        <div class="industry-activity-detail-desc">
            <bpImg :src="lineImg" class="industry-activity-detail-img"></bpImg>
            <bpText class="ph-H-Large_2">{{allData.data[0].contentTitle}}</bpText>
            <bpText class="ph-body-medium">{{allData.data[0].contentDesc}}</bpText>
        </div>
        <div class="main-flex-start">
            <bpImg class="line-img" :src="lineImg"></bpImg>
        </div>
        <div class="main-flex-start">
            <bpText class="ph-H-Large_2">{{translation_data.speaker}}</bpText>
        </div>
        <div class="industry-activity-detail-speaker-container">
            <div class="industry-activity-detail-speaker" v-for="(speaker, index) in allData.eventAll" :key="index" :class="[index == 0?'self-cross-flex-end':'self-cross-flex-start']">
                <div class="speaker-info-left">
                    <div class="pharbers-speaker-bg"></div>
                    <bpImg class="pharbers-speaker-avatar" :src="'https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com'+speaker.image.path"></bpImg>
                    <bpText class="ph-H-Medium">{{speaker.speaker}}</bpText>
                </div>
                <div class="speaker-info-right">
                    <bpImg class="quotation-marks-img" :src="quotataion"></bpImg>
                    <bpText class=" ph-H-Large_brand activity-speaker-content">{{speaker.event.title}}</bpText>
                    <bpText class="ph-body-small activity-speaker-content">{{speaker.event.description}}</bpText>
                </div>
            </div>
        </div>
        <div class="main-flex-start">
            <bpImg class="line-img" :src="lineImg"></bpImg>
        </div>
        <div class="main-flex-start">
            <bpText class="ph-H-Large_2 mb-64">{{translation_data.gallery}}</bpText>
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
            headerImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_nanjing_2019-10-23_00001.jpg",
            lineImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_connect_line.svg",
            headTest: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/avatar_cl.png",
            quotataion: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_bg_view.svg",
            translation_basedata: {
                cn: {
                    home: "主页",
                    activityList: "活动资讯",
                    speaker: "法伯讲者",
                    gallery: "精彩回顾"
                },
                en: {

                }
            }
        }
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    "eventAll": [
                        {
                            "event": {
                                "title": "从全渠道到患者层面数据看4+7",
                                "subTitle": "",
                                "description": "随着我国人口老龄化、城镇化和工业化进程加快，高血压、高血脂、糖尿病等慢性疾病已成为公共卫生问题，造成沉重的社会经济负担。为应对这一现状，国家制定出一系列预防和管理慢性病相关战略，不断加强医药卫生体制改革，提高公共卫生和基层医疗卫生体系建设，完善配套的药品采购及医疗保障政策。这些政策都将对药品销售格局产生深远的影响。",
                                "startDate": null,
                                "endDate": null,
                                "language": 1
                            },
                            "image": {
                                "path": "/public/avatar_cl.png",
                                "tag": "",
                                "report": null
                            },
                            "speaker": "连春玲"
                        },
                        {
                            "event": {
                                "title": "多渠道数据分析赋能医药营销",
                                "subTitle": "",
                                "description": "随着药企新药研发成本的不断提升，以及原研药品过了专利保护期后面临的专利悬崖，那么在新药上市之后如何快速地获得极大的产出成为药企不得不考虑的问题。多渠道数据分析正是基于提升营销效率的角度来解决这个问题。多渠道数据分析从企业内部已有的数据出发，通过对现有数据进行整合和挖掘，能够达到优化现有营销组合方式，合理配置营销预算，以及精准预测甚至干预销售目标的目的。",
                                "startDate": null,
                                "endDate": null,
                                "language": 1
                            },
                            "image": {
                                "path": "/public/avatar_hx.png",
                                "tag": "",
                                "report": null
                            },
                            "speaker": "黄鑫"
                        }
                    ],
                    "data": [
                        {
                            "title": "第八届中国医药决策科学峰会暨 CphMRA 2019 年度会议",
                            "subTitle": "数据智能驱动，洞见精准增效",
                            "startDate": "2019-10-23T00:00:00.000Z",
                            "endDate": "2019-10-25T00:00:00.000Z",
                            "location": "南京紫金山庄（环陵路18号）\r\n",
                            "city": "南京",
                            "activityType": "industry",
                            "contentTitle": "南京紫金山庄召开的“第八届中国医药决策科学峰”，本届峰会的主题是:“数据智能驱动，洞见精准增效”。",
                            "contentDesc": "本届峰会邀请到跨国制药公司和国内优秀医药厂商，以及国内外顶尖的医药信息服务公司、市场研究、行业咨询公司、医药大数据、商业智能分析软件企业，近 300 多行业同仁参加。共同商讨了在 5G 物联网，大数据与人工智能赋能年代，如何“多快好省”的为 企业持续创造价值，是中国医药大数据、市场研究、医药信息咨询行业的又一次盛会。本届峰会在以下五个方面进行了深入的探讨与交流:\r\n本届峰会在以下五个方面进行了深入的探讨与交流:\r\n1、数说医药政策影响与行业变革\r\n2、以客户为中心的洞察创新\r\n3、医药大数据助力营销创新\r\n4、人工智能与高级分析\r\n5、数据可视化与智能精细化决策分析平台\r\n法伯作为参会者在会上分享了自己的精彩观点。",
                            "language": 1,
                            "gallery": [
                                "_IX49SHWn_3qpCzZSnm6",
                                "fhD3VLEuHbkz3NAnVCmh",
                                "UfufIx5rAB1eG9DU5Uvs",
                                "vmoOcZ0K74qkPbAiuskL",
                                "njfJCsBN9KDVTCXlix1P",
                                "0yIfZdHXQZv-wKdZxLZs",
                                "3MfVbRnZEfnKjEdmwPil",
                                "jexQJc7PzOovNQOsN1hI",
                                "h2xu3wfrDuGfCdrjUCJd",
                                "1uKQJ2CncVpnNd2TWXVx",
                                "54B_RocSDda79EzGQAFP",
                                "YzklueXuZh2MZNFBfuAT",
                                "YUVs9p560dSfoyndI6Sp",
                                "3y3zioFwN2KCLkaJ_3gg"
                            ],
                            "agendas": [
                                "eSbRGIMvyJO75omN_wOj"
                            ],
                            "logo": null,
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
                            "event": "pDFNHIfSOXl98tLxKLPd",
                            "zone": null
                        },
                        {
                            "name": "黄鑫",
                            "title": "",
                            "occupation": "法伯科技",
                            "language": 1,
                            "avatar": "BUn8XLTOOG4z7wbSjYAp",
                            "event": "zNZ6X6BWOwls-MzymRiu",
                            "zone": null
                        }
                    ],
                    "galleryShow": [
                        {
                            "f": "/public/photo_events_nanjing_2019-10-23_00007.jpg",
                            "d": "/public/photo_events_nanjing_2019-10-23_00010.jpg",
                            "e": "/public/photo_events_nanjing_2019-10-23_00004.jpg",
                            "c": "/public/photo_events_nanjing_2019-10-23_00002.jpg",
                            "a": "/public/photo_events_nanjing_2019-10-23_00011.jpg",
                            "b": "/public/photo_events_nanjing_2019-10-23_00005.jpg"
                        }
                    ],
                    "galleryList": [
                        {
                            "path": "/public/photo_events_nanjing_2019-10-23_00007.jpg",
                            "tag": "galleryshow-f",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_nanjing_2019-10-23_00009.jpg",
                            "tag": "",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_nanjing_2019-10-23_00000.jpg",
                            "tag": "",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_nanjing_2019-10-23_00010.jpg",
                            "tag": "galleryshow-d",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_nanjing_2019-10-23_00008.jpg",
                            "tag": "",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_nanjing_2019-10-23_00004.jpg",
                            "tag": "galleryshow-e",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_nanjing_2019-10-23_00012.jpg",
                            "tag": "",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_nanjing_2019-10-23_00002.jpg",
                            "tag": "galleryshow-c",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_nanjing_2019-10-23_00011.jpg",
                            "tag": "galleryshow-a",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_nanjing_2019-10-23_00005.jpg",
                            "tag": "galleryshow-b",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_nanjing_2019-10-23_00001.jpg",
                            "tag": "cover",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_nanjing_2019-10-23_00013.jpg",
                            "tag": "",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_nanjing_2019-10-23_00006.jpg",
                            "tag": "",
                            "report": null
                        },
                        {
                            "path": "/public/photo_events_nanjing_2019-10-23_00003.jpg",
                            "tag": "",
                            "report": null
                        }
                    ],
                    "imageList": [
                        {
                            "path": "/public/avatar_hx.png",
                            "tag": "",
                            "report": null
                        },
                        {
                            "path": "/public/avatar_cl.png",
                            "tag": "",
                            "report": null
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
            this.$emit('linkToPage', 'home')
        },
        transDate(param) {
            let date = new Date(param)
            let hour = date.getUTCHours() < 10 ? "0" + date.getUTCHours() : date.getUTCHours()
            let minute = date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes()
            return hour + ":" + minute
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
    .bp-industry-activity-detail {
        width: 100%;
        min-width: 375px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .industry-activity-detail-header {
            height: 600px;
            width: 100%;
            background: 0 0;
            background-image: linear-gradient(rgba(22,28,57,.5),rgba(22,28,57,.5));
            padding: 0 100px;
            background-size: cover;
            display: flex;
            justify-content: center;
            flex-direction: column;
            .industry-activity-detail-header-img {
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
            .ph-H-Large-2-inverse {
                width: 771px;
                margin-top: 8px;
                font-size: 24px;
                color: rgba(255,255,255,.9);
            }
            .industry-activity-detail-header-info-row {
                display: flex;
                flex-direction: row;
                .industry-activity-detail-header-divider {
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
        .industry-activity-detail-desc {
            height: auto;
            width: 640px;
            background: 0 0;
            padding: 104px 0 64px;
            position: relative;
            align-items: center;
            display: flex;
            flex-direction: column;
            .industry-activity-detail-img {
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
                margin-bottom: 32px!important;
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
            .mb-64 {
                margin-bottom: 64px !important;
            }
        }
        .industry-activity-detail-speaker-container {
            height: auto;
            width: 1200px;
            background: 0 0;
            padding: 0 100px;
            display: flex;
            flex-direction: column;
            .self-cross-flex-end {
                align-self: flex-end;
            }
            .self-cross-flex-start {
                align-self: flex-start;
            }
            .industry-activity-detail-speaker {
                height: auto;
                width: auto;
                margin-bottom: 64px;
                background: 0 0;
                display: flex;
                .speaker-info-left {
                    height: auto;
                    width: 156px;
                    margin-right: 62px;
                    background: 0 0;
                    position: relative;
                    align-items: center;
                    margin-top: 16px;
                    display: flex;
                    flex-direction: column;
                    .pharbers-speaker-bg {
                        height: 281px;
                        width: 281px;
                        background: #F5DD24;
                        position: absolute;
                        left: 34px;
                        opacity: .1;
                        border-radius: 50%;
                        box-shadow: 0 7px 9px 0 rgba(255, 201, 0, 0.49);
                        z-index: -1;
                        top: -16px;
                    }
                    .pharbers-speaker-avatar {
                        height: 156px;
                        width: 156px;
                        background: 0 0;
                        border-radius: 50%;
                    }
                    .ph-H-Medium {
                        margin-top: 24px;
                        margin-bottom: 8px;
                        font-size: 16px;
                        color: #2D334D!important;
                        font-weight: 700;
                    }
                }
                .speaker-info-right {
                    display: flex;
                    flex-direction: column;
                    .quotation-marks-img {
                        height: 48px;
                        width: 58px;
                        background: 0 0;
                        object-fit: cover;
                    }
                    .activity-speaker-content {
                        width: 420px;
                    }
                    .ph-H-Large_brand {
                        padding-left: 16px;
                        margin-bottom: 24px;
                        font-size: 24px;
                        color: #F5C924;
                    }
                    .ph-body-small {
                        padding-left: 16px;
                        font-size: 14px;
                        color: #747789;
                    }
                }
            }
        }
    }
</style>