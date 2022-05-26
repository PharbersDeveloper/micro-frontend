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
                        v-model="datasource.switch"
                        active-color="#13ce66">
                </el-switch>
            </div>
        </div>

    </div>
</template>
<script>
import ElDivider from 'element-ui/packages/divider/index'
import ElSwitch from 'element-ui/packages/switch/index'
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

    },
    mounted() {
        this.datasource.refreshStatus(this.tenantId)
    }
}
</script>
<style lang="scss" scoped>
    .tenant-status {
        /*height: 200px;*/
        margin: 10px 50px;

        .tenant-label {
            background-color: transparent;
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
