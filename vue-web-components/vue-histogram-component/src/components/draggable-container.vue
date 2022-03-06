<template>
    <Histogram v-if="isMounted" class="histogram-item"
               v-on:resizeStop="resizeStop" :init-left="initLeftPx" :init-top="initTopPx"
               :init-width="initWidthPx" :init-height="initHeightPx"
               :init-policy="policy" />
</template>

<script>
import Histogram from "./draggable-histogram"
import BarPolicy from "../components/render-policy/bar-policy"
import PiePolicy from "../components/render-policy/pie-policy"
import PhHistogramDatasource from "../components/model/datasource"
import PhHistogramSchema from "../components/model/schema"

export default {
    props: {
        initTop: {
            type: Number,
            default: 0
        },
        initBottom: {
            type: Number,
            default: 0
        },
        initLeft: {
            type: Number,
            default: 1
        },
        initRight: {
            type: Number,
            default: 1
        }
    },
    data: () => {
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            isMounted: 0,
            name: "draggable-container",
            policy: new BarPolicy('1', new PhHistogramDatasource('1'), new PhHistogramSchema('1'),
                { xProperty: "标准省份名称", yProperty: "sales" })
        }
    },
    components: {
        Histogram
    },
    mounted () {
        if (this.initTop >= 0) {
            this.top = this.initTop
        } else  {
            this.top= 0
        }

        if (this.initLeft >= 0) {
            this.left = this.initLeft
        } else {
            this.left = 0
        }

        if (this.initRight >= 0) {
            this.right = this.initRight
        } else {
            this.right = 300
        }

        if (this.initBottom >= 0) {
            this.bottom = this.initBottom
        } else {
            this.bottom = 300
        }
        this.isMounted++
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
            const top = ele.top
            const left = ele.left
            const width = ele.width
            const height = ele.height

            const w = this.$parent.$refs.container.offsetWidth
            const h = this.$parent.$refs.container.offsetHeight
            const margin = this.$parent.initGrids.margin
            const columns = this.$parent.initGrids.columns
            const lines = this.$parent.initGrids.lines
            const stepW = (w - margin) / columns - margin
            const stepH = (h - margin) / lines - margin

            if (this.adjustRange(top, this.adjustTop(this.top))) {
                this.top = Math.floor(top / stepH)
                ele.top = this.adjustTop(this.top)
            }

            else if (this.adjustRange(height, this.adjustHeight(this.top, this.bottom))) {
                this.bottom = Math.floor((top + height - 2 * margin - 1) / stepH)
                ele.height = this.adjustHeight(this.top, this.bottom)
            }

            else if (this.adjustRange(left, this.adjustLeft(this.left))) {
                this.left = Math.floor(left / stepW)
                ele.left = this.adjustLeft(this.left)
            }

            else if (this.adjustRange(width, this.adjustWidth(this.left, this.right))) {
                this.right = Math.floor((left + width - 2 * margin - 1) / stepW)
                ele.width = this.adjustWidth(this.left, this.right)
            }


        },
        adjustRange(l, r, s = 3) {
            return l - r > s || r - l > s
        }
    },
    computed: {
        initTopPx: function() {
            return this.adjustTop(this.top)
        },
        initLeftPx: function() {
            return this.adjustLeft(this.left)
        },
        initWidthPx: function() {
            return this.adjustWidth(this.left, this.right)
        },
        initHeightPx: function() {
            return this.adjustHeight(this.top, this.bottom)
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
