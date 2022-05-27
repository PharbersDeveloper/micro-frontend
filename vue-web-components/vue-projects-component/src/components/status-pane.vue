<template>
    <div class="tenant-status">
        <span class="tenant-title">资源启动</span>
        <el-divider></el-divider>
        <div class="tenant-status-row">
            <span class="tenant-status-name">{{tenantName}}</span>
            <div class="tenant-status-content" v-if="datasource.statusCode === 2">
                <div>
                    <i class="el-icon-user"></i>
                    已启动
                </div>
            </div>
            <div class="tenant-status-content" v-if="datasource.statusCode === 0">
                <div>
                    <i class="el-icon-user"></i>
                    已停止
                </div>
            </div>
            <div class="tenant-status-content" v-if="datasource.statusCode === 4">
                <div>
                    <i class="el-icon-user"></i>
                    关闭中
                </div>
            </div>
            <div class="tenant-status-content" v-if="datasource.statusCode === 1">
                <div>
                    <i class="el-icon-user"></i>
                    启动中
                </div>
            </div>
            <div class="tenant-status-operator">
                <el-switch
                        :value="datasource.switch"
                        @change="switchChanged"
                        active-color="#13ce66">
                </el-switch>
            </div>
        </div>

    </div>
</template>
<script>
import ElDivider from 'element-ui/packages/divider/index'
import ElSwitch from 'element-ui/packages/switch/index'
import { MessageBox, Message } from 'element-ui'
import PhProjectDatasource from './model/datasource'


export default {
    components: {
        ElDivider,
        ElSwitch
    },
    props: {
        tenantName: String,
        tenantId: String,
        datasource: {
            type: Object,
            default: function() {
                return new PhProjectDatasource(1)
            }
        },
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
                        // TODO: 调用关闭资源接口
                        console.log("wodelu")
                        MessageBox.alert("现在不支持自动删除，请联系管理员")

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
                        // TODO: 调用启动资源接口
                        console.log("wodelu")
                        MessageBox.alert("现在不支持自动创建，请联系管理员")

                    } else {
                        // 通过新的 trace ID 持续访问状态
                        Message.error("平台已经被另一进程启动，请等待！！", { duration: 3000} )
                    }
                }).catch(() => {
                    // do nothing ...
                })
            }

        }
    },
    mounted() {
        this.datasource.refreshStatus(this.tenantId)
    }
}
</script>
<style lang="scss" scoped>
    .tenant-status {
        /*height: 200px;*/
        margin: 10px 20px;

		.tenant-title {
			font-size: 12px;
		}

        .tenant-label {
            background-color: transparent;
        }

		.el-divider--horizontal {
			margin: 5px 0 24px !important;
		}

        .tenant-status-row {
            display: flex;
            flex-direction: row;
            /*align-content: space-between;*/

            .tenant-status-name {

            }

            .tenant-status-content {
                flex-grow: 1;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }

            .tenant-status-operator {

            }
        }
    }
</style>
