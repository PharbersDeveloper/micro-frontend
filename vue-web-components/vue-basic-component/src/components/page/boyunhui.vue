<template>
    <div class="bp-boyunhui">
        <div class="boyunhui-header">
            <bp-img class="boyunhui-header-img" src="https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_2020-06-04_boyun_00030.jpg"></bp-img>
            <bp-text class="ph-body-small-inverse top-breadcrumb">
                <span>{{translation_data.home}}</span>
                <span class="mr-0 ml-0">/</span>
                <span>{{translation_data.events}}</span>
                <span class="mr-0 ml-0">/</span>
                <!-- <span>{{allData.activities.}}</span> -->
            </bp-text>
            <div class="header-img-mask"></div>
            <bp-text class="ph-H-xLarge-inverse header-title">title</bp-text>
            <bp-text class="ph-H-Large-2-inverse header-subtitle">subTitle</bp-text>

            <div class="activity-position-date-container">
                <div class="activity-date">
                    <div class="icon_date"></div>
                    <bp-text class="ph-H-Medium-inverse ml-3">startDate</bp-text>
                </div>

                <div class="activity-position">
                    <div class="icon_location"></div>
                    <bp-text class="ph-H-Medium-inverse ml-3">location</bp-text>
                </div>
            </div>
        </div>

        <div id="position-introduction"></div>

        <div class="boyunhui-tab">
            <div class="activity-tabs">
                <div class="activity-tab" @click="curTabSelect(0)">
                    <span :class="curTab === 0 ? 'active' : ''">{{translation_data.introduction}}</span>
                </div>

                <div class="activity-tab" @click="curTabSelect(1)">
                    <span :class="curTab === 1 ? 'active' : ''">{{translation_data.released}}</span>
                </div>

                <div class="activity-tab" @click="curTabSelect(2)">
                    <span :class="curTab === 2 ? 'active' : ''">{{translation_data.agendas}}</span>
                </div>

                <div class="activity-tab" @click="curTabSelect(3)">
                    <span :class="curTab === 3 ? 'active' : ''">{{translation_data.speakers}}</span>
                </div>

                <div class="activity-tab" @click="curTabSelect(4)">
                    <span :class="curTab === 4 ? 'active' : ''">{{translation_data.organization}}</span>
                </div>

                <div class="activity-tab" @click="curTabSelect(5)">
                    <span :class="curTab === 5 ? 'active' : ''">{{translation_data.gallery}}</span>
                </div>
            </div>
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
    props: {
        allData: Object
    },
    data() {
        return {
            language: '中文',
            curTab: 0,
            translation_basedata: {
                cn: {
                    home: "主页",
                    events: "活动资讯",
                    introduction: "会议简介",
                    released: "蓝皮书",
                    agendas: "会议议程",
                    speakers: "嘉宾讲者",
                    organization: "合作单位",
                    gallery: "精彩回顾"
                },
                en: {
                    home: "Home",
                    events: "Events",
                    introduction: "Introduction",
                    released: "Released",
                    agendas: "Agendas",
                    speakers: "Speakers",
                    organization: "Sponsor",
                    gallery: "Gallery"
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
    created() {
        window.addEventListener('beforeunload', e => {
            window.scrollTo(0,0)
        });
        let lang = window.localStorage.getItem('lang')
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
    },
    mounted() {
        const that = this;
        window.onresize = () => {
            
        }
        window.addEventListener('setItemEvent', function(e) {
            that.language = e.newValue
        })
    },
    methods: {
        toHome() {
            this.$emit('linkToPage', 'home')
        },
        transDate(param) {
            let date = new Date(param)

            let y = date.getUTCFullYear()
            let d = date.getUTCDate()
            let m = date.getUTCMonth()
            return y + "-" + (m+1) + "-" + d
        },
        curTabSelect(index) {
            switch(index){
            case 0:
                this.curTab = 0
                window.location.hash = "#position-introduction"
                break;
            case 1:
                this.curTab = 1
                window.location.hash = "#position-upcoming"
                break;
            case 2:
                this.curTab = 2
                window.location.hash = "#position-meeting"
                break;    
            case 3:
                this.curTab = 3
                window.location.hash = "#position-speaker"
                break;
            case 4:
                this.curTab = 4
                window.location.hash = "#position-cooperation"
                break;
            case 5:
                this.curTab = 5
                window.location.hash = "#position-gallery"
                break;
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

    .mr-0 {
        margin-right: 2px;
    }

    .ml-0 {
        margin-left: 2px;
    }

    .ml-3 {
        margin-left: 16px;
    }

    .ph-body-small-inverse {
        opacity: .7;
        font-size: 14px;
        color: #FFF !important;
    }

    .ph-H-xLarge-inverse {
        font-size: 40px;
        color: rgba(255,255,255,.9) !important;
    }

    .ph-H-Large-2-inverse {
        font-size: 24px;
        color: rgba(255,255,255,.9);
    }
    .ph-H-Medium-inverse {
        font-size: 16px;
        color: rgba(255,255,255,.9);
    }

    .bp-boyunhui {
        width: 100%;
        min-width: 375px;
        display:flex;
        flex-direction:column;
        align-items:center;

        .boyunhui-header {
            height: 600px;
            width: 100%;
            background: transparent;
            background-image: linear-gradient(rgba(22,28,57,0.5), rgba(22,28,57,0.5));
            padding: 0 100px;
            background-size: cover;
            display: flex;
            justify-content: center;
            flex-direction: column;
            position: relative;

            .boyunhui-header-img {
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
                cursor: pointer;
            }

            .header-img-mask {
                height: 600px;
                width: 100%;
                position: absolute;
                z-index: -1;
                left: 0;
                background: rgba(22,28,57,0.5) !important;
            }

            .header-title {
                margin: 70px 0 16px;
            }

            .header-subtitle {
                width: 771px;
                margin: 8px 0 40px;
            }

            .activity-position-date-container {
                display: flex;
                flex-direction: column;
                padding-top: 38px;
                border-top: 1px solid rgba(255,255,255,0.2);
                width: fit-content;

                .activity-date {
                    margin-bottom: 16px;
                    display: flex;

                    .icon_date {
                        width: 24px;
                        height: 24px;
                        background: url("data:image/svg+xml,%3Csvg width='1024' height='1024' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M810.667 147.2H768V64h-85.333v83.2H341.333V64H256v83.2h-42.667c-47.36 0-84.906 37.44-84.906 83.2L128 812.8c0 45.76 37.973 83.2 85.333 83.2h597.334C857.6 896 896 858.56 896 812.8V230.4c0-45.76-38.4-83.2-85.333-83.2zm0 665.6H213.333V355.2h597.334v457.6zm-512-374.4H512v208H298.667v-208z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E") center/100% no-repeat!important;
                    }
                }
                
                .activity-position {
                    margin-bottom: 32px;
                    display: flex;

                    .icon_location {
                        width: 24px;
                        height: 24px;
                        background: url("data:image/svg+xml,%3Csvg width='1024' height='1024' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M500.136 64c-94.976 0-189.952 36.224-262.4 108.736-145.024 144.896-145.024 379.84 0 524.736L500.136 960l262.4-262.528c145.088-145.024 145.088-379.968 0-524.736C690.152 100.224 595.112 64 500.136 64zm0 512c-35.328 0-67.328-14.4-90.496-37.504-23.168-23.104-37.504-55.104-37.504-90.496 0-70.72 57.28-128 128-128s128 57.28 128 128c0 35.392-14.4 67.392-37.504 90.496S535.464 576 500.136 576z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E") center/100% no-repeat!important;
                    }
                }
            }
        }
        
        .boyunhui-tab {
            width: 100vw;
            height: 48px;
            padding-left: 100px;
            margin-top: 64px;
            margin-bottom: 41px;
            display: flex;
            // justify-content: flex-start;
            font-size: 16px;
            color: #2D334D;
            letter-spacing: 0.4px;
            font-weight: bold;
            position: sticky;
            top: 80px;
            z-index: 999;
            background-color: #fff;

            .activity-tabs {
                display: flex;
                cursor: pointer;
                border-bottom: 2px solid rgba(22,28,57,0.1);

                .activity-tab {
                    margin-right: 24px;
                    white-space: nowrap;
                    line-height: 40px;
                    flex: 1;
                    display: flex;

                    &:nth-last-of-type(1) {
                        margin-right: 0;
                    }
                    transform: translateY(2px);
                    .active {
                        border-bottom: 2px solid rgba(245,201,36,1);
                        color: rgba(245,201,36,1);
                    }
                }
                
            }
        }
    }

@media screen and (max-width: 480px) {
    .bp-boyunhui {
        .boyunhui-header {
            padding: 0 24px;
            overflow-x: hidden;
        }
    }
}
</style>