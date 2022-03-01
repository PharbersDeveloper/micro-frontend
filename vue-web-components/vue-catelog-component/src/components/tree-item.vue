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
        // <bp-text @click="linkToPage(file.name)" class="subscribed-button">{{goDetail}}</bp-text>
        handleNodeClick(data) {
            console.log(data);
        },
        renderNodeContent(h, { node, data, store }) {
            return (
            <div class="left-text">
                <img src="" class="file-icon-dark" alt="" />
                <div class="text-area">
                    <p class="title">{data.label}</p>
                </div>
            </div>
            )
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
