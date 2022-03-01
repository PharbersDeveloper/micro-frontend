<template>
    <div>
        <el-tree :data="this.adapter.exec(this.items)" @node-click="handleNodeClick" :render-content="renderNodeContent" />
    </div>
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
        }
    },
    components: {
        ElTree
    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
            data.expanded = !data.expanded
        },
        renderNodeContent(h, { node, data, store }) {
            if (node.expanded) {
                return (
                    <div class="item-line">
                        <img src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/drop_down_icon.svg"
                             class="icon" alt=""/>
                        <div class="content">
                            <p class="title">{data.label}</p>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div class="item-line">
                        <img src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/Database.svg"
                             class="icon" alt=""/>
                        <div class="content">
                            <p class="title">{data.label}</p>
                        </div>
                    </div>
                )
            }
        },

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
