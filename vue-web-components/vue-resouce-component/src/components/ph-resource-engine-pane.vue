<template>
    <div>
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <el-descriptions v-if="engine" class="engine-detail" title="计算引擎" :column="3" size="Default" border>
            <template slot="extra">
                <div class="right-cluster-controller">
                    <div v-if="isClusterOn"><span>关闭集群</span></div>
                    <div v-else><span>启动集群</span></div>
                    <el-switch v-model="isClusterOn" active-color="#13ce66"></el-switch>
                </div>
            </template>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>依赖平台
                </template>
                {{engine.platform}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>使用工具
                </template>
                {{engine.ctype}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>承担角色
                </template>
                {{engine.role}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>使用版本
                </template>
                {{engine.applicationVersion}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>依赖版本
                </template>
                <el-tag v-for="(item, index) in engine.applicationLabels" :key="index" class="engine-detail-tags">{{item}}</el-tag>
            </el-descriptions-item>
        </el-descriptions>

        <el-descriptions v-if="engine" class="engine-detail" title="集群主节点" :column="3" size="Default" border>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器型号
                </template>
                {{engine.masterMachineType}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器核心数
                </template>
                {{engine.masterMachineVCore}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器内存
                </template>
                {{engine.masterMachineMem}} G
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器数量
                </template>
                {{engine.masterMachineCount}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器系统存储
                </template>
                {{engine.masterRootVolumeStorage}} G
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器辅助存储
                </template>
                {{engine.masterVolumeStorage}} G
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器辅助存储个数
                </template>
                {{engine.masterVolumeStorageCount}}
            </el-descriptions-item>
        </el-descriptions>

        <el-descriptions v-if="engine" class="engine-detail" title="集群数据节点" :column="3" size="Default" border>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器型号
                </template>
                {{engine.coreMachineType}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器核心数
                </template>
                {{engine.coreMachineVCore}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器内存
                </template>
                {{engine.coreMachineMem}} G
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>集群最少机器数量
                </template>
                {{engine.coreMachineMinCount}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>集群最多机器数量
                </template>
                {{engine.coreMachineMaxCount}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器系统存储
                </template>
                {{engine.coreRootVolumeStorage}} G
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器辅助存储
                </template>
                {{engine.coreVolumeStorage}} G
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器辅助存储个数
                </template>
                {{engine.coreVolumeStorageCount}}
            </el-descriptions-item>
        </el-descriptions>

        <el-descriptions v-if="engine" class="engine-detail" title="集群任务节点" :column="3" size="Default" border>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器型号
                </template>
                {{engine.taskMachineType}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器核心数
                </template>
                {{engine.taskMachineVCore}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器内存
                </template>
                {{engine.taskMachineMem}} G
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>集群最少机器数量
                </template>
                {{engine.taskMachineMinCount}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>集群最多机器数量
                </template>
                {{engine.taskMachineMaxCount}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器系统存储
                </template>
                {{engine.taskRootVolumeStorage}} G
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器辅助存储
                </template>
                {{engine.taskVolumeStorage}} G
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>机器辅助存储个数
                </template>
                {{engine.taskVolumeStorageCount}}
            </el-descriptions-item>
        </el-descriptions>
    </div>
</template>
<script>
// import { staticFilePath } from '../config/envConfig'
// import ElProgress from 'element-ui/packages/progress/index'
import ElDescriptions from 'element-ui/packages/descriptions/index'
import ElDescriptionsItem from 'element-ui/packages/descriptions-item/index'
// import ElButton from 'element-ui/packages/button/index'
import ElSwitch from 'element-ui/packages/switch/index'
import ElTag from 'element-ui/packages/tag/index'
// import ElAlert from 'element-ui/packages/alert/index'

export default {
    components: {
        // ElProgress,
        ElDescriptions,
        ElDescriptionsItem,
        // ElButton,
        ElSwitch,
        ElTag
        // ElAlert
    },
    data() {
        return {
            isClusterOn: false
        }
    },
    props: {
        engine: Object
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
</style>
