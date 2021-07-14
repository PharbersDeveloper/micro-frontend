<template>
    <bpMenu :menu_data="menu_data" class="menu-download-left-part"></bpMenu>
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
                    type: "sub",
                    text: "sub1",
                    src: require("../../../node_modules/vue-components/src/assets/icons/check.svg"),
                    click_event: function () {},
                    item_data: [
                        {
                            text: "sub_item1",
                            src: require("../../../node_modules/vue-components/src/assets/icons/check.svg"),
                            click_event: function () {
                                console.log("sub_item1");
                            }
                        },
                        {
                            text: "sub_item2",
                            click_event: function () {
                                console.log("sub_item2");
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    text: "item2",
                    src: require("../../../node_modules/vue-components/src/assets/icons/check.svg"),
                    click_event: function () {
                        console.log("item2")
                    }
                },
                {
                    type: "sub",
                    text: "sub2",
                    click_event: function () {},
                    item_data: [
                        {
                            text: "sub_item3",
                            click_event: function () {
                                console.log("sub_item3");
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
</style>