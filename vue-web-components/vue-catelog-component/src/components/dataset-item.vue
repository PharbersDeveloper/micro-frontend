<template>
    <div>
        <el-tree :data="options" @node-click="handleNodeClick"></el-tree>
    </div>
</template>

<script>
import ElTree from 'element-ui/packages/tree'

export default {
    data() {
        return {
            options: [{
                label: 'Level one 1',
                children: [{
                    label: 'Level two 1-1',
                    children: [{
                        label: 'Level three 1-1-1'
                    }]
                }]
            }, {
                label: 'Level one 2',
                children: [{
                    label: 'Level two 2-1',
                    children: [{
                        label: 'Level three 2-1-1'
                    }]
                }, {
                    label: 'Level two 2-2',
                    children: [{
                        label: 'Level three 2-2-1'
                    }]
                }]
            }, {
                label: 'Level one 3',
                children: [{
                    label: 'Level two 3-1',
                    children: [{
                        label: 'Level three 3-1-1'
                    }]
                }, {
                    label: 'Level two 3-2',
                    children: [{
                        label: 'Level three 3-2-1'
                    }]
                }]
            }],
            defaultProps: {
                children: "children",
                label: "label"
            }
        }
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    fileName: "filename",
                    projectName: "projectName",
                    scriptName: "test"
                }
            }
        }
    },
    components: {
        ElTree
    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
