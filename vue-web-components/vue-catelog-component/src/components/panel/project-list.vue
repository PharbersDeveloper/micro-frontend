<template>
    <div class="my-data-content-container">
        <div class="header">
            <span class="header-large">
                {{title}}
            </span>
        </div>
        <div class="data-main-container">
            <template >
                <div class="project-list-container">
                    <div class="project-list-header">
                        <bp-text>DAG 名称</bp-text>
                        <div class="opt-icon">
                            <bp-text v-if="toggle">更新时间</bp-text>
                            <div class="icon">
                                <div @click="toggleClickCard">
                                    <bp-img :src="cardIcon"  v-if="toggle"></bp-img>
                                </div>
                                <div @click="toggleClickCard">
                                    <bp-img :src="cardIconSelect" v-if="!toggle"></bp-img>
                                </div>
                                <div @click="toggleClickList">
                                    <bp-img :src="listIconSelect" v-if="toggle"></bp-img>
                                </div>
                                <div @click="toggleClickList">
                                    <bp-img :src="listIcon" v-if="!toggle"></bp-img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <template v-if="toggle">
                        <div class="project-list-item" v-for="(file,index) in allData.projects" :key="index+'list'" @click="linkToPage(file)">
                            <div class="left-text">
                                <img :src="fileIconDark" class="file-icon-dark" alt="">
                                <div class="text-area" >
                                    <bp-text class="title">{{file.name}}</bp-text>
                                    <bp-text class="subtitle">{{file.provider}}</bp-text>
                                </div>
                            </div>
                            <bp-text class="subtitle right-text">{{formatDateStandard(file.created,0)}}</bp-text>
                        </div>
                    </template>
                    <div v-if="!toggle" class="project-card">
                        <div class="project-card-item" v-for="(file,index) in allData.projects" :key="index+'card'" @click="linkToPage(file)">
                            <div class="text-area" >
                                <bp-text class="title">{{file.name}}</bp-text>
                                <bp-text class="subtitle">{{file.provider}}</bp-text>
                            </div>
                            <div class="last-date">
                                <bp-text class="subtitle bottom-text">{{formatDateStandard(file.created,0)}}</bp-text>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
    
</template>
<script>
import bpText from '../../../node_modules/vue-components/src/components/bp-text.vue'
import bpImg from '../../../node_modules/vue-components/src/components/bp-img.vue'

export default {
    components: {
        bpText,
        bpImg
    },
    data() {
        return {
            title: "工作平台",
            fileIconDark: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_dag+list.svg",
            cardIcon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_card_initial.svg",
            listIcon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_list_initial.svg",
            listIconSelect: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_list_slelect.svg",
            cardIconSelect: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_card_slelect.svg",
            toggle: false
        }
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    projects: []
                }
            }
        }
    },
    computed: {
        haveData() {
            if (!this.allData.count) {
                return false
            }
            if(this.allData.curTab == 1) {
                this.myDataTab = 1
            }
            return true
        }
    },
    methods: {
        toggleClickCard() {
            this.toggle = false
        },
        toggleClickList() {
            this.toggle = true
        },
        linkToPage(params) {
            const event = new Event("event")
            event.args = {
                callback: "linkToPage",
                element: this,
                param: {
                    name: '/download/project/',
                    route: params.name
                }
            }
            this.$emit('event', event)
        },
        formatDateStandard(...params) {
            if(params.length === 2) {
                let date = new Date( Number(params[0]) ),
                    Y = date.getFullYear(),
                    M =
                        ( date.getMonth() + 1 < 10 ?
                            `0${date.getMonth() + 1}` :
                            date.getMonth() + 1 ),
                    D0 = ( date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() ),
                    D1 = ( date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() ),

                    h =
                        ( date.getHours() < 10 ? `0${date.getHours()}` : date.getHours() ),
                    m =
                        ( date.getMinutes() < 10 ?
                            `0${date.getMinutes()}` :
                            date.getMinutes() ) ,
                    s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

                // 输出结果：yyyy/mm/dd hh:mm
                if(params[1] === 0){
                    return Y + "/" + M + "/" + D0 + " " + h + ":" + m + ":" + s
                }else if(params[1] === 1) {
                    return Y + "-" + M + "-" + D0 + " " + h + ":" + m
                }
            }
        }
    } 
}
</script>
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    .my-data-content-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .header {
            height: 62px;
            width: 100%;
            padding: 20px 24px 0;
            border-bottom: 1px solid rgba(37,35,45,.08);
            .header-large {
                font-family: SFProText-Regular;
                font-size: 20px;
                color: #302F39;
                letter-spacing: .25px;
                line-height: 28px;
            }
        }

        .data-main-container {
            display: flex;
            flex-direction: column;
            flex: 1;
            position: relative;
            .project-list-container {
                flex: 1;
                display: flex;
                flex-direction: column;
                padding: 27px 20px 8px 20px;
                height: 507px;
                min-height: 0;
                .project-list-header {
                    display: flex;
                    justify-content: space-between;
                    font-family: PingFangSC-Regular;
                    font-size: 12px;
                    color: #57565F;
                    letter-spacing: 0.25px;
                    text-align: left;
                    line-height: 16px;
                    font-weight: 400;
                    border-bottom: 1px solid  rgba(37,35,45,0.08);
                    .opt-icon {
                        width: 160px;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        .icon {
                            display: flex;
                            cursor: pointer;
                            width: 110px;
                            justify-content: flex-end;
                        }
                    }
                }
                .project-card {
                    display: grid;
                    width: 100%;
                    gap: 20px;
                    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
                    list-style: none;
                    margin-bottom: 24px;
                    margin-top: 12px;
                    .project-card-item {
                        width: 225px;
                        height: 100px;
                        border: 1px solid #f1f1f2;
                        border-radius: 2px;
                        background: url("https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/dag_card.png");
                        background-size: cover;
                        padding: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
						cursor: pointer;
                        .text-area {
                            display: flex;
                            flex-direction: column;
                            .title {
                                font-family: PingFangSC-Regular;
                                font-size: 20px;
                                color: #25232D;
                                letter-spacing: 0.25px;
                                line-height: 28px;
                                font-weight: 400;
                                margin-bottom: 3px;
                            }
                            .subtitle {
                                font-family: PingFangSC-Light;
                                font-size: 12px;
                                color: #706F79;
                                line-height: 16px;
                                font-weight: 200;
                                width: 132px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }
                        .last-date {
                            display: flex;
                            justify-content: flex-end;
                            font-family: PingFangSC-Light;
                            font-size: 12px;
                            color: #706F79;
                            letter-spacing: 0.25px;
                            line-height: 16px;
                            font-weight: 200;
                        }
                    }
                }
                .project-list-item {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid  rgba(37,35,45,0.08);
                    padding: 12px 0;
					cursor: pointer;
                    .subtitle {
                        font-family: SFProText-Light;
                        font-size: 14px;
                        color: #706F79;
                        letter-spacing: 0.25px;
                        line-height: 16px;
                        font-weight: 200;
                    }
                    .right-text {
                        width: 160px;
                    }
                    .left-text {
                        display: flex;
                        .file-icon-dark {
                            width: 38px;
                            height: 38px;
                            margin-right: 14px;
                        }
                        .text-area {
                            display: flex;
                            flex-direction: column;
                            .title {
                                font-family: SFProText-Regular;
                                font-size: 14px;
                                color: #25232D;
                                letter-spacing: 0.25px;
                                text-align: left;
                                line-height: 20px;
                                font-weight: 400;
                                margin-bottom: 3px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>