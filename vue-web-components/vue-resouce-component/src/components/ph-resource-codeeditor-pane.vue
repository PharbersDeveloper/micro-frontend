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
                    <el-switch 
						v-model="isCodeOn" 
                        @change="switchChanged"
						active-color="#13ce66"></el-switch>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import ElSwitch from 'element-ui/packages/switch/index'
import ElTable from 'element-ui/packages/table/index'
import ElTableColumn from 'element-ui/packages/table-column/index'
import { MessageBox, Message } from 'element-ui'

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
		switchChanged() {
            if (this.datasource.switch) {
                MessageBox.confirm('关闭当前资源会影响其他用户使用！ 是否继续?', '警告', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    // 调用启动前，强制更新一下状态，以免竞争机制
                    this.datasource.refreshStatus(this.tenantId)
                    if (this.datasource.switch) {
                        // MessageBox.alert("现在不支持自动删除，请联系管理员")
						this.datasource.resourceStop(this.tenantId)
                    } else {
                        // 通过新的 trace ID 持续访问状态
                        Message.error("平台已经被另一进程关闭，请等待！！", { duration: 3000} )
                    }
                }).catch(() => {
                    // do nothing ...
                })
            }
            else if (!this.datasource.switch) {
                MessageBox.confirm('是否确认开始资源并开始计费！ 是否继续?', '警告', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    // 调用启动前，强制更新一下状态，以免竞争机制
                    this.datasource.refreshStatus(this.tenantId)
                    if (!this.datasource.switch) {
						this.datasource.resourceStart(this.tenantId)

                    } else {
                        // 通过新的 trace ID 持续访问状态
                        Message.error("平台已经被另一进程启动，请等待！！", { duration: 3000} )
                    }
                }).catch(() => {
                    // do nothing ...
                })
            }

        }
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
