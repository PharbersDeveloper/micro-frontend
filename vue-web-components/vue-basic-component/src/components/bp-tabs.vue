<template>
<div>
    <div class="fixed-tabs">
        <div class="activity-tabs">
            <div class="activity-tab"  v-for="(item, index) in cardArr" :key="index" @click="
            whichIndex = index;
            componentId = item.componentId;
            content = item.list;
            ">
                <bpText :class="{ highLight: whichIndex == index }">{{ item.componentName }}</bpText>
            </div>
        </div>
    </div>
    <keep-alive>
        <bpPane :is="componentId" :content="content"></bpPane>
    </keep-alive>
</div>
</template>

<script>
import bpPane from "./bp-tabs-pane"
export default {
    components: {
        bpPane
    },
    data() {
        return {
            whichIndex: 0,
            componentId: "bpPane",
            content: [{
                title: "带量采购对中国医药市场的改变",
                subTitle: "伯云论坛 2020",
                time: "2020-06-04  |  中国 苏州"
            }],
            cardArr: [
                {
                    componentName: "动态组件一",
                    componentId: "bpPane",
                    list: [{
                        title: "带量采购对中国医药市场的改变",
                        subTitle: "伯云论坛 2020",
                        time: "2020-06-04  |  中国 苏州"
                    }]
                },
                {
                    componentName: "动态组件二",
                    componentId: "bpPane",
                    list: [{
                        title: "222",
                        subTitle: "伯云论坛 2020",
                        time: "2020-06-04  |  中国 苏州"
                    }]
                },
                {
                    componentName: "动态组件三",
                    componentId: "bpPane",
                    list: [{
                        title: "333",
                        subTitle: "伯云论坛 2020",
                        time: "2020-06-04  |  中国 苏州"
                    },{
                        title: "444",
                        subTitle: "伯云论坛 2020",
                        time: "2020-06-04  |  中国 苏州"
                    }]
                }
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
* {
    letter-spacing: .4px;
    line-height: 1.6;
    box-sizing: border-box;
}
.fixed-tabs {
    top: 80px;
    height: 66px;
    background-color: #fff!important;
    position: sticky;
    z-index: 999;
    display: flex;
    .activity-tabs {
        border-bottom: 2px solid rgba(22,28,57,.1);
        margin-bottom: 0!important;
        padding-bottom: 0!important;
        display: flex;
        align-items: flex-end;
        .activity-tab {
            height: 30px;
            margin-right: 24px;
            line-height: 30px;
            flex: 1;
            display: flex;
            align-items: flex-start;
            transform: translateY(-3px);
            white-space: nowrap;
            cursor: pointer;
            .avtive {

            }
        }
        .activity-tab:nth-last-of-type(1) {
            margin-right: 0;
        }
        .highLight {
            border-bottom: 2px solid #f5c924;
            color: #f5c924;
            padding-bottom: 8px;
        }
    }
}
    
</style>
