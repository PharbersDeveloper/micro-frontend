<template>
    <VueDragResize v-if="checkEditableShowing()" @onclick="onActive" :isActive="active"
                   :parentLimitation="true"
                   :h="rect.height" :w="rect.width"
                   :x="rect.left" :y="rect.top"
                   @resizestop="resizeStop" @dragstop="resizeStop"
                   v-on:resizing="resize" v-on:dragging="resize">
        <Insight :init-width="rect.width" :init-height="rect.height" :policy="policy"  ref="histogram" />
    </VueDragResize>
    <div class="view" :style="resetInsightPosition()" v-else-if="checkViewableShowing()">
        <Insight :init-width="rect.width" :init-height="rect.height" :policy="policy"  ref="histogram" />
    </div>
</template>

<script>
import BarPolicy from "../components/render-policy/bar-policy"
import PiePolicy from "../components/render-policy/pie-policy"
import PhHistogramDatasource from "../components/model/datasource"
import PhHistogramSchema from "../components/model/schema"
import Insight from "./insight"
import VueDragResize from './drag-resize'

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
        editable: {
            type: Boolean,
            default: true
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
            rect: null,
            timer: null,
            stopTimer: null
        }
    },
    components: {
        Insight,
        VueDragResize
    },
    mounted () {
        this.isMounted++
        this.rect = this.computedRect
    },
    updated() {
        this.rect = this.computedRect
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
        resizeStop() {
            const top = this.rect.top
            const left = this.rect.left
            const width = this.rect.width
            const height = this.rect.height

            const w = this.$parent.$refs.container.offsetWidth
            const h = this.$parent.$refs.container.offsetHeight
            const margin = this.$parent.initGrids.margin
            const columns = this.$parent.initGrids.columns
            const lines = this.$parent.initGrids.lines
            const stepW = (w - margin) / columns - margin
            const stepH = (h - margin) / lines - margin

            if (this.adjustRange(top, this.adjustTop(this.top))) {
                this.top = Math.floor(top / stepH)
                // this.rect.top = this.adjustTop(this.top)
                this.$nextTick(() => {
                    this.rect.top = this.adjustTop(this.top)
                })
            }

            else if (this.adjustRange(height, this.adjustHeight(this.top, this.bottom))) {
                this.bottom = Math.floor((top + height - 2 * margin - 1) / stepH) - 1
                // this.rect.height = this.adjustHeight(this.top, this.bottom)
                this.$nextTick(() => {
                    this.rect.height = this.adjustHeight(this.top, this.bottom)
                })
            }

            else if (this.adjustRange(left, this.adjustLeft(this.left))) {
                this.left = Math.floor(left / stepW)
                // this.rect.left = this.adjustLeft(this.left)
                this.$nextTick(() => {
                    this.rect.left = this.adjustLeft(this.left)
                })
            }

            else if (this.adjustRange(width, this.adjustWidth(this.left, this.right))) {
                this.right = Math.floor((left + width - 2 * margin - 1) / stepW) - 1
                // this.rect.width = this.adjustWidth(this.left, this.right)
                this.$nextTick(() => {
                    this.rect.width = this.adjustWidth(this.left, this.right)
                })
            }

            // if (this.stopTimer)
            //     return
            //
            // const that = this
            // this.stopTimer = setTimeout(() => {
            //     that.positionChanged([that.left, that.top, that.right, that.bottom])
            //     // that.rect = that.computedRect
            //     // that.$refs.histogram.resizeHandler(that.rect.width, that.rect.height)
            //     that.stopTimer = null
            // }, 100)
        },
        adjustRange(l, r, s = 1) {
            return l - r > s || r - l > s
        },
        positionChanged(param) {
            this.activeContent.position = param
        },
        resize(newRect) {
            this.rect.width = newRect.width
            this.rect.height = newRect.height
            this.rect.top = newRect.top
            this.rect.left = newRect.left

            if (this.timer)
                return

            const that = this
            this.timer = setTimeout(() => {
                that.$refs.histogram.resizeHandler(that.rect.width, that.rect.height)
                that.timer = null
            }, 100)
        },
        // resetPolicy(p) {
        //     this.$refs.histogram.resetPolicy(p)
        // },
        // refresh() {
        //     this.$refs.histogram.needRefresh++
        // },
        onActive() {
            this.active = !this.active
        },
        checkEditableShowing() {
            return this.isMounted > 0 && this.editable
        },
        checkViewableShowing() {
            return this.isMounted > 0 && !this.editable
        },
        resetInsightPosition() {
            return "left: " + this.rect.left + "px; top: " + this.rect.top + "px; width: " + this.rect.width + "px; height: " + this.rect.height + "px;"
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
    .view {
        position: absolute;
    }

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
