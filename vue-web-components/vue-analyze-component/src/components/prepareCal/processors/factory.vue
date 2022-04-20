<template>
    <el-drawer title="算子库"
                class="operator"
                :visible.sync="visible"
                direction="btt">
        <div class="operator_content">
            <div class="operator_con">
                <div class="opt" >
                    <div class="opt_item"
                         v-for="item in operatorArr"
                         :key="item.id"
                         @click="operator_opt_click(item)"
                         :class="[{selected_bg: item.id === selectedOpt}]">
                        <div class="name">{{item.opt_name}}</div>
                        <div class="num">{{item.opt_condition_num}}</div>
                    </div>
                </div>
                <div class="opt_condition">
                    <div class="opt_condition_item"
                         :class="[{selected_bg: data.id === selectedOptCondition}]"
                         v-for="data in opt_condition"
                         @mouseover="operator_opt_condition_mouseover(data)"
                         @click="operator_opt_condition_click(data)"
                         :key="data.id+'condition'">{{data.name}}</div>
                </div>
                <div class="opt_desc">
                    <div class="opt_condition_desc">
                        {{opt_condition_desc}}
                        <vue-markdown >{{opt_condition_desc}}</vue-markdown>
                    </div>
                </div>
            </div>
        </div>
    </el-drawer>
</template>

<script>
import { staticFilePath, hostName } from '../../../config/envConfig'
import ElDrawer from 'element-ui/packages/drawer/index'
import VueMarkdown from 'vue-markdown'
import { PhProcessorsDefs } from "./factory-defs"

export default {
    data() {
        return {
            selectedOpt: 1,
            selectedOptCondition: -1,
            opt_condition: [],
            opt_condition_desc: ""
        }
    },
    props: {
        visible: Boolean,
        icons: {
            type: Object,
            default: () => {
                return {
                    del_icon: `${staticFilePath}/delete_r.svg`,
                    drag_prepare_card: `${staticFilePath}/drag_prepare_card.svg`
                }
            }
        },
        operatorArr: {
            type: Array,
            default: function () {
                return PhProcessorsDefs
            }
        }
    },
    components: {
        ElDrawer,
        VueMarkdown
    },
    mounted() {

    },
    methods: {
        operator_opt_click(data) {
            this.selectedOpt = data.id
            this.opt_condition = this.operatorArr.filter(it => it.id === data.id)[0]["opt_condition_data"]
            this.opt_condition_desc = ""
        },
        operator_opt_condition_mouseover(data) {
            this.selectedOptCondition = data.id
            this.opt_condition_desc = this.opt_condition.filter(it => it.id === data.id)[0]["desc"]
            // this.$forceUpdate()
        },
        operator_opt_condition_click(data) {
            this.$emit("newStep", data.type)
        }
    },
    watch: {

    }
}
</script>
<style lang="scss" scoped>
    * {
        letter-spacing: .4px;
        line-height: 1.6;
        box-sizing: border-box;
    }
    .operator {
        /deep/.el-drawer__header {
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
            margin-bottom: 0;
        }
        .operator_content {
            display: flex;
            flex-direction: column;
            height: 100%;
            .operator_con {
                display: flex;
                height: 100%;
            }
            .opt {
                width: 220px;
                overflow: auto;
                border-right: 1px solid #ccc;
                display: flex;
                flex-direction: column;
                // padding: 8px;
                .opt_item {
                    display: flex;
                    justify-content: space-between;
                    cursor: pointer;
                    padding: 4px;
                }
            }
            .selected_bg {
                background: #dddddd !important;
            }
            .opt_condition {
                width: 220px;
                border-right: 1px solid #ccc;
                .opt_condition_item {
                    padding: 4px;
                    cursor: pointer;
                }
                .opt_condition_item:nth-child(2n+1) {
                    background: #f0f0f0;
                }
            }
        }
    }
</style>
