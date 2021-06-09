<template>
<div class="activity-list-container">
    <div class="activity-in-large" v-for="item in content" :key="item.title">
        <div class="little-space">
            <bpText class="ph-H-Large_2">{{item.title}}</bpText>
            <bpText class="ph-body-small">{{item.subTitle}}</bpText>
            <bpText class="ph-body-small">{{item.time}}</bpText>
            <div class="main-flex-start">
                <bpText class="more-photo-text">查看详情</bpText>
                <bpImg :src="moreIcon" class="icon_go"></bpImg>
            </div>
        </div>
        <div class="activity-img-container">
            <bpImg :src="activityImg" class="activity-img"></bpImg>
        </div>
    </div>
</div>
</template>

<script>
import bpText from './bp-text'
import bpImg from './bp-img'
export default {
    name: 'bpPane',
    componentName: 'bpPane',
    props: {
        content: {
            type: Array,
            default: function() {
                return [{
                    title: "带量采购对中国医药市场的改变",
                    subTitle: "伯云论坛 2020",
                    time: "2020-06-04  |  中国 苏州"
                }]
            }
        }
    },
    components: {
        bpText,
        bpImg
    },
    data() {
        return {
            index: null,
            loaded: false,
            activityImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_2020-06-04_boyun_00030.jpg",
            moreIcon: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_go.svg"
        };
    },

    computed: {
        isClosable() {
            return this.closable || this.$parent.closable;
        },
        active() {
            const active = this.$parent.currentName === (this.name || this.index);
            if (active) {
                this.loaded = true;
            }
            return active;
        },
        paneName() {
            return this.name || this.index;
        }
    },

    updated() {
        this.$parent.$emit('tab-nav-update');
    }
};
</script>

<style lang="scss" scoped>
    .activity-list-container {
        display: flex;
        flex-direction: column;
        .activity-in-large {
            border-bottom: 1px solid rgba(22,28,57,.08);
            padding-bottom: 64px;
            flex: 1;
            width: 1000px;
            height: auto;
            display: flex;
            .little-space {
                margin-top: 108px;
                display: flex;
                flex-direction: column;
                .ph-H-Large_2 {
                    width: 500px;
                    margin-bottom: 16px;
                    font-size: 24px;
                    color: #2D334D;
                }
                .ph-body-small {
                    margin-bottom: 16px;
                    font-size: 14px;
                    color: #747789;
                }
                .main-flex-start {
                    display: flex;
                    cursor: pointer!important;
                    .more-photo-text {
                        font-weight: 600;
                        font-size: 14px;
                        color: #2D334D;
                        letter-spacing: 1px;
                        line-height: 24px;
                        margin-right: 8px;
                        cursor: pointer!important;
                    }
                    .icon_go {
                        width: 24px;
                        height: 24px;
                    }
                }
            }
            .activity-img-container {
                width: 418px;
                height: 235px;
                border-radius: 2px;
                margin-top: 64px;
                display: flex;
                .activity-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 2px;
                }
            }
        }
        .activity-in-large:nth-last-of-type(1) {
            border-bottom: none;
            padding-bottom: 0;
        }
    }
</style>