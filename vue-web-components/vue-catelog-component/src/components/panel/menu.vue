<template>
<div class="menu-container">
    <bpMenu :menu_data="menu_data" class="menu-download-left-part"></bpMenu>
</div>
</template>
<script>
import bpMenu from "../../../node_modules/vue-components/src/components/bp-menu.vue";
export default {
    components: {
        bpMenu
    },
    data() {
        return {
            menu_data: [
                {
                    type: "item",
                    text: "数据资产",
                    click_event: function () {
                        console.log("数据资产")
                    }
                },
                {
                    type: "item",
                    text: "开放资源",
                    click_event: function () {
                        console.log("开放资源")
                    }
                },
                {
                    type: "item",
                    text: "联络名单",
                    click_event: function () {
                        console.log("联络名单")
                    }
                },
                {
                    type: "sub",
                    text: "工作平台",
                    src: require("../../../node_modules/vue-components/src/assets/icons/check.svg"),
                    click_event: function () {},
                    item_data: [
                        {
                            text: "MAX自动化",
                            src: require("../../../node_modules/vue-components/src/assets/icons/check.svg"),
                            click_event: function () {
                                console.log("MAX自动化");
                            }
                        },
                        {
                            text: "数据提数",
                            click_event: function () {
                                console.log("数据提数");
                            }
                        }
                    ]
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.menu-container {
	.menu-download-left-part {
		width: 200px;
		min-height: 100vh;
		background: #595574 !important;
		padding-top: 20px;
		position: relative;
		/deep/.bp-menu-item {
			color: #fff !important;
		}
		/deep/.bp-sub-menu {
			color: #fff !important;
		}	
	}

}
</style>