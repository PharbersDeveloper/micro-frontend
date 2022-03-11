<template>
    <Histogram v-if="isMounted" class="histogram-item" :editable="editable"
               v-on:resizeStop="resizeStop" :rect="computedRect"
               :policy="policy" />
</template>

<script>
import Histogram from "./draggable-histogram"
import BarPolicy from "../components/render-policy/bar-policy"
import PiePolicy from "../components/render-policy/pie-policy"
import PhHistogramDatasource from "../components/model/datasource"
import PhHistogramSchema from "../components/model/schema"
import Insight from "./insight"

export default {
    props: {
        activeContent: {
            type: Object,
            default: function() {
                return null
            }
        },
        top: {
            type: Number,
            default: 0
        },
        bottom: {
            type: Number,
            default: 1
        },
        left: {
            type: Number,
            default: 0
        },
        right: {
            type: Number,
            default: 1
        },
        policy: {
            type: Object,
            default: function () {
                return null
            }
        },
        editable: {
            type: Boolean,
            default: true
        }
    },
    data: () => {
        return {
            isMounted: 0,
            name: "draggable-container",
            // initTopPx: 0,
            // initLeftPx: 0,
            // initWidthPx: 300,
            // initHeightPx: 300,
            timer: null
        }
    },
    components: {
        Insight,
        Histogram
    },
    mounted () {
        this.isMounted++
    },
    updated() {

    },
    methods: {
        adjustLeft(l) {
            const w = this.$parent.$refs.container.offsetWidth
            const margin = this.$parent.initGrids.margin
            const columns = this.$parent.initGrids.columns
            const stepW = (w - margin) / columns - margin
            return margin + l * (stepW + margin)
        },
        adjustWidth(l, r) {
            const w = this.$parent.$refs.container.offsetWidth
            const margin = this.$parent.initGrids.margin
            const columns = this.$parent.initGrids.columns
            const stepW = (w - margin) / columns - margin
            const left = margin + l * (stepW + margin)
            const right = margin + (r + 1) * (stepW + margin)
            return right - left
        },
        adjustTop(t) {
            const h = this.$parent.$refs.container.offsetHeight
            const margin = this.$parent.initGrids.margin
            const lines = this.$parent.initGrids.lines
            const stepH = (h - margin) / lines - margin
            return margin + t * (stepH + margin)
        },
        adjustHeight(t, b) {
            const h = this.$parent.$refs.container.offsetHeight
            const margin = this.$parent.initGrids.margin
            const lines = this.$parent.initGrids.lines
            const stepH = (h - margin) / lines - margin
            const top = margin + t * (stepH + margin)
            const bottom = margin + (b + 1) * (stepH + margin)
            return bottom - top
        },
        resizeStop(ele) {

            if (this.timer)
                return

            const that = this
            this.timer = setTimeout(() => {
                const top = ele.rect.top
                const left = ele.rect.left
                const width = ele.rect.width
                const height = ele.rect.height

                const w = this.$parent.$refs.container.offsetWidth
                const h = this.$parent.$refs.container.offsetHeight
                const margin = this.$parent.initGrids.margin
                const columns = this.$parent.initGrids.columns
                const lines = this.$parent.initGrids.lines
                const stepW = (w - margin) / columns - margin
                const stepH = (h - margin) / lines - margin

                if (this.adjustRange(top, this.adjustTop(this.top))) {
                    this.top = Math.floor(top / stepH)
                }

                else if (this.adjustRange(height, this.adjustHeight(this.top, this.bottom))) {
                    this.bottom = Math.floor((top + height - 2 * margin - 1) / stepH) - 1
                }

                else if (this.adjustRange(left, this.adjustLeft(this.left))) {
                    this.left = Math.floor(left / stepW)
                }

                else if (this.adjustRange(width, this.adjustWidth(this.left, this.right))) {
                    this.right = Math.floor((left + width - 2 * margin - 1) / stepW) - 1
                }

                this.positionChanged([this.left, this.top, this.right, this.bottom])
                that.timer = null
            }, 300)
        },
        adjustRange(l, r, s = 1) {
            return l - r > s || r - l > s
        },
        positionChanged(param) {
            this.activeContent.position = param
        }
    },
    watch: {

    },
    computed: {
        computedRect: function() {
            return {
                top: this.adjustTop(this.top),
                left: this.adjustLeft(this.left),
                width: this.adjustWidth(this.left, this.right),
                height: this.adjustHeight(this.top, this.bottom)
            }
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
