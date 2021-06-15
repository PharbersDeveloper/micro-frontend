<template>
    <div class="bp-industry-activity-detail">
        <!-- eventList: {{allData.eventList}}
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
            <bpImg :src="lineImg" class="above-data-connect-img"></bpImg>
        </div>
    </div>
</template>
<script>
import bpText from '../bp-text'
import bpImg from '../bp-img'
import bpButton from '../bp-button'
export default {
    name: "",
    components: {
        bpText,
        bpImg,
        bpButton
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
            translation_basedata: {
                cn: {
                    home: "主页",
                    activityList: "活动资讯"
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
                    "eventList": [
                        {
                            "title": "从全渠道到患者层面数据看4+7",
                            "subTitle": "",
                            "description": "随着我国人口老龄化、城镇化和工业化进程加快，高血压、高血脂、糖尿病等慢性疾病已成为公共卫生问题，造成沉重的社会经济负担。为应对这一现状，国家制定出一系列预防和管理慢性病相关战略，不断加强医药卫生体制改革，提高公共卫生和基层医疗卫生体系建设，完善配套的药品采购及医疗保障政策。这些政策都将对药品销售格局产生深远的影响。",
                            "startDate": null,
                            "endDate": null,
                            "language": 1
                        },
                        {
                            "title": "多渠道数据分析赋能医药营销",
                            "subTitle": "",
                            "description": "随着药企新药研发成本的不断提升，以及原研药品过了专利保护期后面临的专利悬崖，那么在新药上市之后如何快速地获得极大的产出成为药企不得不考虑的问题。多渠道数据分析正是基于提升营销效率的角度来解决这个问题。多渠道数据分析从企业内部已有的数据出发，通过对现有数据进行整合和挖掘，能够达到优化现有营销组合方式，合理配置营销预算，以及精准预测甚至干预销售目标的目的。",
                            "startDate": null,
                            "endDate": null,
                            "language": 1
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
                            "contentDesc": "中国医药大数据、市场研究、医药信息咨询行业的又一次盛会。\r\n本届峰会在以下五个方面进行了深入的探讨与交流:\r\n1、数说医药政策影响与行业变革\r\n2、以客户为中心的洞察创新\r\n3、医药大数据助力营销创新\r\n4、人工智能与高级分析\r\n5、数据可视化与智能精细化决策分析平台\r\n法伯作为参会者在会上分享了自己的精彩观点。",
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
</style>