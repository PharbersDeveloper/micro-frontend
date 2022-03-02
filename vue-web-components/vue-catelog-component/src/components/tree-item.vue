<template>
    <el-tree :data="this.adapter.exec(this.items)"
             @node-click="handleNodeClick"
             :render-content="renderNodeContent"
             :lazy="isLazy"
             :load="loadExpandedData"
             :props="defaultProp"
    />
</template>

<script>
import ElTree from "element-ui/packages/tree"
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
        handleNodeClick(data) {
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
    .item-line {
        display: flex;
        flex-direction: row;

        .icon {
            width: 32px;
            height: 32px;
        }

        .content {
            display: flex;
            flex-direction: column;
        }
    }
</style>
