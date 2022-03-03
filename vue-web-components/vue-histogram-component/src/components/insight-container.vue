<template>
    <div class="page">
        <div v-if="needTitle" class="title-panel">
            <img src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E9%87%8D%E6%96%B0%E8%BF%90%E8%A1%8C%E5%BD%93%E5%89%8D%E8%84%9A%E6%9C%AC.svg" />
            <h2>{{dashboardTitle}}</h2>
        </div>
        <div class="container" >
            <div class="left">
                <el-tabs v-model="activeName" >
                    <el-tab-pane label="Columns" name="first">
                        <div v-for="(item, index) in lst" :key="index" class="draggable-item" draggable="true"
                            @dragstart="dragStart($event, index, item)"
                            @dragend="dragEnd">
                            <span v-if="isNum(index)" class="num"><b>#</b></span>
                            <span v-else class="text"><b>A</b></span>
                            {{item}}
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="Sampling" name="second">
                        暂不开放
                    </el-tab-pane>
                </el-tabs>
            </div>

            <div class="filter-panel">
                <el-select v-model="policyName" placeholder="图表类型">
                    <el-option
                            v-for="(item, index) in policyCandidate"
                            :key="index"
                            :label="item"
                            :value="item">
                    </el-option>
                </el-select>
                <div class="bottom-filter">
                    <el-collapse v-model="activeCandis" >
                        <el-collapse-item title="Filters" name="1">
                            <el-input
                                    type="textarea"
                                    :rows="2"
                                    placeholder="Please input"
                                    v-model="filterString">
                            </el-input>
                        </el-collapse-item>
                        <el-collapse-item title="Display" name="2">
                            <div>暂不开放</div>
                        </el-collapse-item>
                        <el-collapse-item title="Color" name="3">
                            <div>暂不开放</div>
                        </el-collapse-item>
                        <el-collapse-item title="Animation" name="4">
                            <div>暂不开放</div>
                        </el-collapse-item>
                        <el-collapse-item title="Subcharts" name="5">
                            <div>暂不开放</div>
                        </el-collapse-item>
                        <el-collapse-item title="Tooltip" name="5">
                            <div>暂不开放</div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
            <div class="right">
                <div class="axis-container">
                    <div class="axis">
                        <span class="axis-title">Show</span>
                        <div class="drop" @drop="dropContentY" @dragover.prevent>
                            <span>Y :</span>
                            <p>{{yProperty}}</p>
                        </div>
                    </div>
                    <div class="axis">
                        <span class="axis-title">By</span>
                        <div class="drop" @drop="dropContentX" @dragover.prevent>
                            <span>X :</span>
                            <p>{{xProperty}}</p>
                        </div>
                    </div>
                </div>
                <div class="content" ref="content">
                    <histogram ref="histogram" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import histogram from "../components/insight.vue"
import BarPolicy from "../components/render-policy/bar-policy"
import PiePolicy from "../components/render-policy/pie-policy"
import PhHistogramDatasource from "../components/model/datasource"
import PhHistogramSchema from "../components/model/schema"
import ElSelect from "element-ui/packages/select"
import ElOption from "element-ui/packages/option"
import ElTabs from "element-ui/packages/tabs"
import ElTabPane from "element-ui/packages/tab-pane"
import ElCollapse from "element-ui/packages/collapse"
import ElCollapseItem from "element-ui/packages/collapse-item"
import ElInput from "element-ui/packages/input"
import "element-ui/lib/theme-chalk/index.css"

export default {
    name: "insight-container",
    props: {
        dashboardTitle: {
            type: String,
            default: "alfred test"
        },
        needTitle: {
            type: Boolean,
            default: true
        },
        filterTreeData: {
            type: Array,
            default: function () {
                return [
                    { label: "Filters", children: [ { label: "sub-filters", children: [], leaf: true }] },
                    { label: "Display", children: [ { label: "sub-display", children: [], leaf: true }] },
                    { label: "Color", children: [ { label: "sub-color", children: [], leaf: true }] },
                    { label: "Animation", children: [ { label: "sub-animation", children: [], leaf: true }] },
                    { label: "Subcharts", children: [ { label: "sub-charts", children: [], leaf: true }] },
                    { label: "Tooltip", children: [ { label: "sub-tooltip", children: [], leaf: true }] }
                ]
            }
        },
        defaultProp: {
            type: Object,
            default: function() {
                return {
                    label: "label",
                    children: "children",
                    isLeaf: "leaf"
                }
            }
        }
    },
    data: () => {
        return {
            datasource: new PhHistogramDatasource('1'),
            schema: new PhHistogramSchema('1'),
            policy: null,
            xProperty: "year",
            yProperty: "sales",
            policyName: "bar",
            policyCandidate: ["bar", "pie"],
            draggingItem: null,
            needRefresh: 0,
            lst: [],
            activeName: "first",
            activeCandis: [],
            filterString: "alfredtest"
        }
    },
    components: {
        histogram,
        ElSelect,
        ElOption,
        ElTabPane,
        ElTabs,
        ElCollapse,
        ElCollapseItem,
        ElInput
    },
    mounted() {
        const w = this.$refs.content.offsetWidth
        const h = this.$refs.content.offsetHeight
        this.$refs.histogram.resizeHandler(w, h)

        const that = this
        this.schema.requestSchema().then(_ => {
            that.lst = that.schema.schema
        })

        this.needRefresh++
    },
    methods: {
        refresh() {
            if (!this.policy || this.policy.policyName() !== this.policyName) {
                this.policy = this.createPolicyFactory(this.policyName)
            }
            this.policy.xProperty = this.xProperty
            this.policy.yProperty = this.yProperty
            this.$refs.histogram.resetPolicy(this.policy)
        },
        createPolicyFactory(factoryType) {
            if (factoryType === "pie") {
                return new PiePolicy('1', new PhHistogramDatasource('1'), new PhHistogramSchema('1'),
                    { xProperty: "标准省份名称", yProperty: "sales" })
            } else if (factoryType === "bar") {
                return new BarPolicy('1', new PhHistogramDatasource('1'), new PhHistogramSchema('1'),
                    { xProperty: "标准省份名称", yProperty: "sales" })
            }
        },
        dragStart(event, index, item) {
            this.draggingItem = item
        },
        dragEnd() {
            this.clearDraggingStatus()
        },
        dropContentX(_) {
            this.xProperty = this.draggingItem
            this.clearDraggingStatus()
        },
        dropContentY(_) {
            this.yProperty = this.draggingItem
            this.clearDraggingStatus()
        },
        clearDraggingStatus() {
            if (this.draggingItem) {
                this.draggingItem = null
            }
        },
        isNum(index) {
            return this.schema.dtype[index] !== "Text"
        }
    },
    watch: {
        xProperty(n, o) {
            if (n !== o) {
                this.needRefresh++
            }
        },
        yProperty(n, o) {
            if (n !== o) {
                this.needRefresh++
            }
        },
        policyName(n, o) {
            if (n !== o) {
                this.policy = this.createPolicyFactory(this.policyName)
                this.needRefresh++
            }
        },
        needRefresh(n, o) {
            this.refresh()
        }
    }
}
</script>

<style scoped lang="scss">
    .page {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        .title-panel {
            display: flex;
            flex-direction: row;
            background-color: grey;
            height: 45px;

            img {
                width: 40px;
                height: 40px;
                margin: auto 0;
                border: 2px solid gray;
                padding: 1px;
            }

            h2 {
                margin: auto 0;
            }
        }

        .container {
            flex-grow: 1;
            overflow: hidden;
            display: flex;
            flex-direction: row;

            .left {
                display: flex;
                flex-direction: column;
                width: 300px;
                border: 2px solid grey;
                margin-right: 5px;

                .draggable-item {
                    margin: 5px 10px;
                    padding: 5px 10px;
                    border-radius: 4px;
                    border: 1px solid rgba(0, 0, 0, .12);
                    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
                    font-size: 14px;

                    .num {
                        b {
                            color: darksalmon;
                        }
                    }

                    .text {
                        b {
                            color: darkgoldenrod;
                        }
                    }
                }
            }

            .filter-panel {
                width: 300px;
                padding-top: 30px;

                .bottom-filter {
                    margin: 50px 5px 5px 5px;
                    padding: 5px 0;
                }
            }

            .right {
                flex-grow: 1;
                display: flex;
                flex-direction: column;

                .axis-container {

                    .axis {
                        display: flex;
                        flex-direction: row;

                        .axis-title {
                            margin: auto 0;
                            width: 100px;
                        }

                        span {
                            margin: auto 0;
                            width: 50px;
                        }

                        .drop {
                            display: flex;
                            flex-direction: row;
                            flex-grow: 1;
                            margin-right: 200px;
                            margin-top: 5px;
                            margin-bottom: 5px;
                            padding-left: 20px;
                            border: 1px solid rgba(0, 0, 0, .12);
                            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

                            span {
                                margin: auto 0;
                            }

                            p {
                                flex-grow: 1;
                                text-align: left;
                            }
                        }
                    }
                }

                .content {
                    flex-grow: 1;
                    width: 100%;
                    height: 100%;
                    position: relative;
                    /*background-color: red;*/
                }
            }
        }
    }
</style>
