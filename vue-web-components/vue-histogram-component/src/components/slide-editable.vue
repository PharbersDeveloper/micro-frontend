<template>
    <div class="page">
        <div v-if="needTitle" class="title-panel">
            <img src="https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E9%87%8D%E6%96%B0%E8%BF%90%E8%A1%8C%E5%BD%93%E5%89%8D%E8%84%9A%E6%9C%AC.svg" />
            <h2>{{dashboardTitle}}</h2>
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
                    <Histogram />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Histogram from "./draggable-container"
import BarPolicy from "../components/render-policy/bar-policy"
import PiePolicy from "../components/render-policy/pie-policy"
import PhHistogramDatasource from "../components/model/datasource"
import PhHistogramSchema from "../components/model/schema"

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
        }
    },
    data: () => {
        return {
            activeName: "first",
            name: "slide",
            isMounted: 0
        }
    },
    components: {
        Histogram
    },
    mounted () {
        this.isMounted++
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
