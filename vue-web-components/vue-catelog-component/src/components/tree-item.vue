<template>
	<div>
		<link rel="stylesheet" href="https://s3.cn-northwest-1.amazonaws.com.cn/components.pharbers.com/element-ui/index.css">
		<el-tree :data="this.adapter.exec(this.items)"
             @node-click="handleNodeClick"
             :render-content="renderNodeContent"
             :lazy="isLazy"
             :load="loadExpandedData"
             :props="defaultProp"
             check-strictly
    	/>
	</div>
</template>

<script>
import ElTree from "element-ui/packages/tree"
// import "element-ui/lib/theme-chalk/index.css"
import adapter from "./adapter/tree-node-adapter"

export default {
    data() {
        return {

        }
    },
    props: {
        items: {
            type: Array,
            default: function() {
                return []
            }
        },
        adapter: {
            type: Object,
            default: function() {
                return new adapter("1")
            }
        },
        defaultProp: {
            type: Object,
            default: function() {
                return {
                    label: "label",
                    children: "children",
                    isLeaf: "leaf"
                }
            }
        },
        isLazy: {
            type: Boolean,
            default: true
        },
        tenantId: {
            type: String,
            default: "zudIcG_17yj8CEUoCTHg"
        }
    },
    components: {
        ElTree
    },
    methods: {
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        },
        handleNodeClick(data, node, b) {
            console.log(data)
        },
        renderNodeContent(h, { node, data, store }) {
            return this.adapter.render(...arguments)
        },
        loadExpandedData(node, resolve) {
            this.adapter.resetTenantId(this.tenantId)
            this.adapter.lazyLoadWithLevel(this, node, resolve)
        }
    }
}
</script>

<style lang="scss" >
	@font-face {
		font-family: element-icons;
		src: url(https://s3.cn-northwest-1.amazonaws.com.cn/components.pharbers.com/element-ui/element-icons.woff) format("woff"), url(https://s3.cn-northwest-1.amazonaws.com.cn/components.pharbers.com/element-ui/element-icons.ttf) format("truetype");
		font-weight: 400;
		font-display: "auto";
		font-style: normal
	}
    .item-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-grow: 1;
        .button {
            height: 26px;
            margin: auto 0;
        }
    }
</style>
