<template>
    <div>
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="editor-container">
            <el-table :data="codeeditors" style="width: 100%" class="editor-table">
                <el-table-column fixed prop="ctype" label="程序" width="150"></el-table-column>
                <el-table-column prop="platform" label="依赖平台" width="120"></el-table-column>
                <el-table-column prop="owner" label="所有人" width="120"></el-table-column>
                <el-table-column prop="ownership" label="所绑定项目" width="120"></el-table-column>
                <el-table-column prop="metadata.version" label="版本" width="300"></el-table-column>
                <el-table-column label="Operations" width="120">
                    <el-switch v-model="isCodeOn" active-color="#13ce66"></el-switch>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import ElSwitch from 'element-ui/packages/switch/index'
import ElTable from 'element-ui/packages/table/index'
import ElTableColumn from 'element-ui/packages/table-column/index'

export default {
    components: {
        ElSwitch,
        ElTable,
        ElTableColumn
    },
    data() {
        return {
            isCodeOn: false
        }
    },
    props: {
        codeeditors: Array
    },
    mounted() {
    },
    computed: {

    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
    .right-cluster-controller {
        display: flex;
        flex-direction: row;
    }

    .engine-detail {
        margin: 10px 50px;

        .engine-detail-tags {
            margin-right: 20px;
        }
    }

    .editor-container {
        margin: 10px auto;
    }

    .editor-table {
        margin: 10px 50px;
    }
</style>
