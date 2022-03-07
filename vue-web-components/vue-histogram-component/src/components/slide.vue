<template>
    <div class="page">
        <div v-if="needTitle" class="title-panel">
            <img src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E9%87%8D%E6%96%B0%E8%BF%90%E8%A1%8C%E5%BD%93%E5%89%8D%E8%84%9A%E6%9C%AC.svg" />
            <h2>{{dashboardTitle}}</h2>
            <el-button class="save-button" type="primary" plain @click="saveContentPosition">Save</el-button>
            <el-tabs v-model="activeName" >
                <el-tab-pane label="View" name="first" ></el-tab-pane>
                <el-tab-pane label="Edit" name="second" ></el-tab-pane>
            </el-tabs>
        </div>
        <div class="edit-container" ref="container">
            <div class="mid-container">
                <div v-if="isMounted" class="grid-container" ref="grid">
                    <div class="grid-item"
                         v-for="index in this.initGrids.columns * this.initGrids.lines"
                         :style="gridItemLayout(index - 1)" >
                        &nbsp
                    </div>
                </div>
            </div>
            <div v-if="isMounted" class="high-container">
                <div class="histogram-container" :style="draggableLayout()">
                    <Histogram v-for="(item, index) in contentModel.content"
                               :key="index"
                               :editable="isEditable()"
                               :ref="item.index"
                               :init-left="item.position[0]"
                               :init-top="item.position[1]"
                               :init-right="item.position[2]"
                               :init-bottom="item.position[3]"
                               :policy="createPolicyWithinContent(item)" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ElButton from "element-ui/packages/button"
import ElTabs from "element-ui/packages/tabs"
import ElTabPane from "element-ui/packages/tab-pane"
import Histogram from "./draggable-container"
import BarPolicy from "../components/render-policy/bar-policy"
import PiePolicy from "../components/render-policy/pie-policy"
import PhHistogramDatasource from "../components/model/datasource"
import PhHistogramSchema from "../components/model/schema"
import PhSlideModel from "../components/slide-model/slide-model"
import "element-ui/lib/theme-chalk/index.css"

export default {
    props: {
        initGrids: {
            type: Object,
            default: function () {
                return { columns: 12, lines: 6, margin: 3 }
            }
        },
        needTitle: {
            type: Boolean,
            default: true
        },
        dashboardTitle: {
            type: String,
            default: "alfred test"
        },
        contentModel: {
            type: Object,
            default: function() {
                return new PhSlideModel(1)
            }
        }
    },
    data: () => {
        return {
            name: "slide",
            isMounted: 0,
            activeName: "first"
        }
    },
    components: {
        Histogram,
        ElButton,
        ElTabs,
        ElTabPane
    },
    mounted () {
        this.isMounted++
        this.contentModel.querySlideContent()
    },
    methods: {
        gridItemLayout(index) {
            const w = this.$refs.container.offsetWidth
            const h = this.$refs.container.offsetHeight
            const margin = this.initGrids.margin
            const columns = this.initGrids.columns
            const lines = this.initGrids.lines
            const stepW = (w - margin) / columns - margin
            const stepH = (h - margin) / lines - margin
            const cy = Math.floor(index / columns)
            const cx = index % columns
            const top = margin + cy * (stepH + margin)
            const left = margin + cx * (stepW + margin)
            return "top: " + top + "px; left: " + left + "px; width: " + stepW + "px; height: " + stepH + "px;"
        },
        draggableLayout() {
            const w = this.$refs.container.offsetWidth
            const h = this.$refs.container.offsetHeight
            return "width: " + w + "px; height: " + h + "px;"
        },
        createPolicyWithinContent(content) {
            // TODO: 这个是一个工厂类，在写的时候，可以运用外部单例，因为这个函数会被多次用到
            // 不会写就多写cv次这个函数吧
            if (content.policyName === "bar") {
                return new BarPolicy(content.index, new PhHistogramDatasource(content.index), new PhHistogramSchema(content.index),
                    { xProperty: content.x, yProperty: content.y })
            }
            else if (content.policyName === "pie") {
                return new PiePolicy(content.index, new PhHistogramDatasource(content.index), new PhHistogramSchema(content.index),
                    { xProperty: content.x, yProperty: content.y })
            }
            else {
                // TODO: other histogrm
            }
        },
        saveContentPosition() {
            const keys = Object.keys(this.contentModel.content)
            for (let idx = 0; idx < keys.length; ++idx) {
                const cur = this.$refs[this.contentModel.content[keys[idx]].index][0]
                this.contentModel.content[keys[idx]].x = cur.policy.xProperty
                this.contentModel.content[keys[idx]].y = cur.policy.yProperty
                this.contentModel.content[keys[idx]].position = [cur.left, cur.top, cur.right, cur.bottom]
            }
            this.contentModel.save()
        },
        isEditable() {
            return this.activeName === "second"
        }

    },
    watch: {

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

        .edit-container {
            flex-grow: 1;

            .mid-container {
                position: absolute;
                z-index: -2;


                .grid-container {
                    position: relative;
                    z-index: -1;

                    .grid-item {
                        position: absolute;
                        background-color: beige;
                    }
                }
            }

            .high-container {
                position: absolute;

                .histogram-container {
                    position: relative;
                    z-index: 99;
                }
            }
        }
    }
</style>
