<template>
    <VueDragResize v-if="checkEditableShowing()" @onclick="onActive" :isActive="active"
                   :parentLimitation="true"
                   :h="rect.height" :w="rect.width"
                   :x="rect.left" :y="rect.top"
                   @resizestop="onResizstop" @dragstop="onResizstop"
                   v-on:resizing="resize" v-on:dragging="resize">
        <histogram :init-width="rect.width" :init-height="rect.height" :policy="policy"  ref="histogram" />
    </VueDragResize>
    <div class="view" :style="resetInsightPosition()" v-else-if="checkViewableShowing()">
        <histogram :init-width="rect.width" :init-height="rect.height" :policy="policy"  ref="histogram" />
    </div>
</template>
<script>
import VueDragResize from './drag-resize'
import Histogram from './insight'

export default {
    props: {
        policy: {
            type: Object,
            default: function () {
                return null
            }
        },
        // top: Number,
        // left: Number,
        // width: Number,
        // height: Number,
        rect: {
            type: Object,
            default: function() {
                return {
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0
                }
            }
        },
        editable: {
            type: Boolean,
            default: true
        }
    },
    data: () => {
        return {
            name: "draggable-histogram",
            active: false,
            renderTimes: 0,
            isMounted: 0
            // tempRect: {}
        }
    },
    components: {
        VueDragResize,
        Histogram
    },
    mounted () {
        this.isMounted++
    },
    updated() {
        if (this.checkViewableShowing()) {
            this.$refs.histogram.resizeHandler(this.width, this.height)
        }
    },
    methods: {
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
        // ondarg(newRect) {
        //     this.top = newRect.top
        //     this.left = newRect.left
        // },
        resetPolicy(p) {
            this.$refs.histogram.resetPolicy(p)
        },
        refresh() {
            this.$refs.histogram.needRefresh++
        },
        onActive() {
            this.active = !this.active
        },
        onResizstop() {
            this.$emit("resizeStop", this)
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

    }
}
</script>

<style scoped lang="scss">
    .view {
        position: absolute;
    }
</style>
