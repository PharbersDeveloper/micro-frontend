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
        resizeStop(ele) {
            const top = ele.top
            const left = ele.left
            const width = ele.width
            const height = ele.height
            const right = ele.left + ele.width
            const bottom = ele.top + ele.height
            const that = this

            function pointAdjust(x, y, tp) {
                function pointInRect(x, y) {
                    const w = that.$parent.$refs.container.offsetWidth
                    const h = that.$parent.$refs.container.offsetHeight
                    const margin = that.$parent.initGrids.margin
                    const columns = that.$parent.initGrids.columns
                    const lines = that.$parent.initGrids.lines
                    const stepW = (w - margin) / columns - margin
                    const stepH = (h - margin) / lines - margin
                    const column = Math.floor(x / stepW)
                    const line = Math.floor(y / stepH)
                    return { x: column, y: line }
                }

                function resetSize(point, tp) {

                }

                pointInRect(x, y)
            }
            pointAdjust(left, top)
        }
    },
    computed: {
        initTopPx: function() {
            const h = this.$parent.$refs.container.offsetHeight
            const margin = this.$parent.initGrids.margin
            const lines = this.$parent.initGrids.lines
            const stepH = (h - margin) / lines - margin
            const result = margin + this.top * stepH
            console.log("top: ")
            console.log(result)
            return result
        },
        initLeftPx: function() {
            const w = this.$parent.$refs.container.offsetWidth
            const margin = this.$parent.initGrids.margin
            const columns = this.$parent.initGrids.columns
            const stepW = (w - margin) / columns - margin
            const result = margin + this.left * stepW
            console.log("left: ")
            console.log(result)
            return result
        },
        initWidthPx: function() {
            const w = this.$parent.$refs.container.offsetWidth
            const margin = this.$parent.initGrids.margin
            const columns = this.$parent.initGrids.columns
            const stepW = (w - margin) / columns - margin
            const left = margin + this.left * stepW
            const right = margin + (this.right + 1) * stepW
            const result = right - left
            console.log("width: ")
            console.log(result)
            return result
        },
        initHeightPx: function() {
            const h = this.$parent.$refs.container.offsetHeight
            const margin = this.$parent.initGrids.margin
            const lines = this.$parent.initGrids.lines
            const stepH = (h - margin) / lines - margin
            const top = margin + this.top * stepH
            const bottom = margin + (this.bottom + 1) * stepH
            const result = bottom - top
            console.log("height: ")
            console.log(result)
            return result
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
