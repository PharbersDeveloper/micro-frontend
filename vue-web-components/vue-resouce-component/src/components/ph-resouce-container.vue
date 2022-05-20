<template>
    <div class="resource-main-container">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="header">
            <span class="header-large">
                {{title}}
            </span>
        </div>
        <div class="resource-container">
            <el-tabs type="border-card" class="resource-category-tabs">
                <el-tab-pane label="User">User</el-tab-pane>
                <el-tab-pane label="Config">Config</el-tab-pane>
                <el-tab-pane label="Role">Role</el-tab-pane>
                <el-tab-pane label="Task">Task</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
// import { staticFilePath } from '../config/envConfig'
import ElTabs from 'element-ui/packages/tabs/index'
import ElTabPane from 'element-ui/packages/tab-pane/index'

export default {
    components: {
        ElTabs,
        ElTabPane
    },
    data() {
        return {
            title: "资源管理"
        }
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    projects: [{
                        name: "name",
                        provider: "provider",
                        meta: {}
                    }]
                }
            }
        }
    },
    computed: {

    },
    methods: {
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr === document.cookie.match(reg))
                return (arr[2]);
            else
                return "a7a2c65be73561582553d62de756806cdc0a360bec40cf40a5971be345ed0360";
        },
        linkToPage(params) {
            const event = new Event("event")
            event.args = {
                callback: "linkToPage",
                element: this,
                param: {
                    name: params["name"],
                    pid: params.id
                }
            }
            this.$emit('event', event)
        },
    }
}
</script>
<style lang="scss" scoped>
    .resource-main-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .header {
            height: 62px;
            width: 100%;
            padding: 20px 24px 0;
            border-bottom: 1px solid rgba(37,35,45,.08);
            .header-large {
                font-family: SFProText-Regular;
                font-size: 20px;
                color: #302F39;
                letter-spacing: .25px;
                line-height: 28px;
            }
        }

        .resource-container {
            margin: 10px;
            padding: 0 10px;
            display: flex;
            flex-grow: 1;

            .resource-category-tabs {
                width: 100%;
            }
        }
    }
</style>
