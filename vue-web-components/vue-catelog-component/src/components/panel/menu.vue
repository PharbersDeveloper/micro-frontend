<template>
<div class="menu-download-left-part">
    <div class="user-info">
        <div class="user-name-container">
            <bpText class="inverse-heading-medium">{{username}}</bpText>
            <div id="icon_notification" class="icon_notification-initial"></div>
        </div>
        <bpText class="body-tertiary-inverse">{{company}}</bpText>
    </div>
    <div class="upload-button">
        <span class="fileinput-button">
            <div class="icon_upload"></div>
            <span class="btn_secondary_initial">
                数据上传
            </span>
        </span>
    </div>
    <bpMenu :menu_data="menu_data" class="" :activeIndex="activeIndex" :activeSubIndex="activeSubIndex" :menuType="menuType"></bpMenu>
</div>
</template>
<script>
import bpMenu from "../../../node_modules/vue-components/src/components/bp-menu.vue";
import bpText from "../../../node_modules/vue-components/src/components/bp-text.vue";
export default {
    components: {
        bpMenu,
        bpText
    },
    props: {
        company: {
            type: String,
            default: "法伯宏业科技发展有限公司"
        },
        username: {
            type: String,
            default: "username"
        }
    },
    data() {
        return {
            activeIndex: 0,
            activeSubIndex: 0,
            menuType: "",
            menu_data: [
                {
                    type: "item",
                    text: "数据资产",
                    src: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_my-data.svg",
                    content: this,
                    click_event: function (data) {
                        this.content.activeIndex = data
                        this.content.menuType = this.type

                        const event = new Event("event")
                        event.args = {
                            callback: "linkToPage",
                            element: this.content,
                            param: {
                                name: this.text,
                                index: 0
                            }
                        }
                        this.content.$emit('event', event)
                    }
                },
                {
                    type: "item",
                    text: "开放资源",
                    src: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_enterprise-open.svg",
                    content: this,
                    click_event: function (data) {
                        this.content.activeIndex = data
                        this.content.menuType = this.type
                        const event = new Event("event")
                        event.args = {
                            callback: "linkToPage",
                            element: this.content,
                            param: {
                                name: this.text,
                                index: 1
                            }
                        }
                        this.content.$emit('event', event)
                    }
                },
                {
                    type: "item",
                    text: "联络名单",
                    src: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_cooperation.svg",
                    content: this,
                    click_event: function (data) {
                        this.content.activeIndex = data
                        this.content.menuType = this.type
                    }
                },
                {
                    type: "sub",
                    text: "工作平台",
                    content: this,
                    src: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icon_projects-fill.svg",
                    click_event: function (data) {},
                    item_data: [
                        {
                            text: "MAX自动化",
                            content: this,
                            type: "subitem",
                            click_event: function (subIndex,itemIndex) {
                                this.content.activeIndex = itemIndex
                                this.content.activeSubIndex = subIndex
                                this.content.menuType = this.type
                            }
                        },
                        {
                            text: "数据提数",
                            content: this,
                            type: "subitem",
                            click_event: function (subIndex,itemIndex) {
                                this.content.activeIndex = itemIndex
                                this.content.activeSubIndex = subIndex
                                this.content.menuType = this.type
                            }
                        }
                    ]
                }
            ]
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
    .menu-download-left-part {
        width: 200px;
        min-height: 100vh;
        background: #595574 !important;
        padding-top: 20px;
        position: relative;
        /deep/.bp-menu-item, /deep/.bp-sub-menu {
            font-family: SFProText-Medium;
            font-size: 14px;
            letter-spacing: 0;
            line-height: 20px;
            color: #fff !important;
        }
        /deep/.bp-menu-item {
            height: 28px !important;
            border-radius: 2px;
            height: 28px;
            margin: 1px 0;
            padding: 0 12px;
            display: flex;
        }
        .user-info {
            background: #595574;
            height: 44px;
            margin: 0 12px;
            .user-name-container {
                height: 24px;
                background: #595574;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .inverse-heading-medium {
                    color: rgba(255,255,255,.95);
                }
                .icon_notification-initial {
                    width: 20px;
                    height: 20px;
                    background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath d='M10 18c.825 0 1.5-.692 1.5-1.538h-3C8.5 17.308 9.168 18 10 18zm4.5-4.615V9.538c0-2.361-1.23-4.338-3.375-4.861V3h-2.25v1.677C6.723 5.2 5.5 7.169 5.5 9.538v3.847L4 14.923v.77h12v-.77l-1.5-1.538z' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E") no-repeat center/100% !important;
                }
            }
            .body-tertiary-inverse {
                color: rgba(255,255,255,.55);
                letter-spacing: .25px;
                font-size: 12px;
                line-height: 16px;
                font-family: SFProText-Light;
            }
         }
        .upload-button {
            width: 176px;
            height: 32px;
            margin: 20px 12px;
            .btn_secondary_initial {
                color: #57565F!important;
                font-family: SFProText-Medium;
                font-size: 14px;
                letter-spacing: 0;
                line-height: 20px;
            }
        }
        .fileinput-button {
            height: 32px;
            width: 100%;
            position: relative;
            background: #fff;
            border-radius: 2px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .icon_upload {
            width: 20px;
            height: 20px;
            background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2357565F' fill-rule='evenodd'%3E%3Cpath d='M14.358 7.74l-4-4.091-.048-.043-.103-.063-.094-.032-.07-.011h-.086l-.09.016-.089.034-.067.04-.069.059-4 4.09a.5.5 0 0 0 .647.758l.069-.058 3.141-3.213.001 7.772a.5.5 0 0 0 .992.09l.008-.09-.001-7.774 3.143 3.215a.5.5 0 0 0 .773-.63l-.057-.07z'/%3E%3Cpath d='M16 10.5a.5.5 0 0 1 .492.41l.008.09v5.5h-13V11a.5.5 0 0 1 .992-.09L4.5 11v4.5h11V11a.5.5 0 0 1 .41-.492L16 10.5z'/%3E%3C/g%3E%3C/svg%3E") no-repeat center/100% !important; 
        }
    }
</style>