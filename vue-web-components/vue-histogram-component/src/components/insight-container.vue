<template>
    <div class="page">
        <div class="container" >
            <div class="left">
                <ul>
                    <li v-for="(item, index) in lst" :key="index" class="item" draggable="true"
                        @dragstart="dragStart($event, index, item)"
                        @dragend="dragEnd">
                        {{item}}
                    </li>
                </ul>
                <div class="drop" @drop="dropContentX" @dragover.prevent>
                    <span>x:</span>
                    <p>{{xProperty}}</p>
                </div>
                <div class="drop" @drop="dropContentY" @dragover.prevent>
                    <span>y:</span>
                    <p>{{yProperty}}</p>
                </div>
                <el-select v-model="policyName" placeholder="Select">
                    <el-option
                            v-for="(item, index) in policyCandidate"
                            :key="index"
                            :label="item"
                            :value="item">
                    </el-option>
                </el-select>
            </div>
            <div class="content" ref="content">
                <histogram ref="histogram" />
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
import "element-ui/lib/theme-chalk/index.css"

export default {
    name: "insight-container",
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
            lst: []
        }
    },
    components: {
        histogram,
        ElSelect,
        ElOption
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
    .container {
        display: flex;
        flex-direction: row;
        min-height: 100vh;
        background-color: green;

        .left {
            display: flex;
            flex-direction: column;
            width: 500px;

            .drop {
                display: flex;
                flex-direction: row;
                border:1px solid black;

                span {
                    background-color: #00b8d9;
                    margin: auto 0;
                }

                p {
                    flex-grow: 1;
                }
            }
        }

        .content {
            flex-grow: 1;
            position: relative;
            background-color: red;
        }
    }
</style>
