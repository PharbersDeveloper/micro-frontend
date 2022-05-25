<template>
    <div class="tenant-status">
        <span class="tenant-title">资源启动</span>
        <el-divider></el-divider>
        <div class="tenant-status-row">
            <span class="tenant-status-name">{{tenant}}</span>
            <div class="tenant-status-content" v-if="status">
                <div>
                    <i class="el-icon-user"></i>
                    已启动
                </div>
            </div>
            <div class="tenant-status-content">
                <div>
                    <i class="el-icon-user"></i>
                    已停止
                </div>
            </div>
            <div class="tenant-status-operator">
                <el-switch
                        v-model="status"
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
    data() {
        return {
            tenant: "Pharbers",
            status: false
        }
    },
    props: {
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
