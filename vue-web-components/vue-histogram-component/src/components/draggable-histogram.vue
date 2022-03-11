<template>
    <VueDragResize v-if="checkEditableShowing()" @onclick="onActive" :isActive="active"
                   :parentLimitation="true"
                   :h="height" :w="width"
                   :x="left" :y="top"
                   @resizestop="onResizstop" @dragstop="onResizstop"
                   v-on:resizing="resize" v-on:dragging="resize">
        <histogram :init-width="width" :init-height="height" :policy="policy"  ref="histogram" />
    </VueDragResize>
    <div class="view" :style="resetInsightPosition()" v-else-if="checkViewableShowing()">
        <histogram :init-width="width" :init-height="height" :policy="policy"  ref="histogram" />
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
        top: Number,
        left: Number,
        width: Number,
        height: Number,
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
            isMounted: 0,
            tempRect: {}
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
            this.tempRect.width = newRect.width
            this.tempRect.height = newRect.height
            this.tempRect.top = newRect.top
            this.tempRect.left = newRect.left

            if (this.timer)
                return

            const that = this
            this.timer = setTimeout(() => {
                that.$refs.histogram.resizeHandler(that.tempRect.width, that.tempRect.height)
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
            this.$emit("rectChanged", this.tempRect)
        },
        checkEditableShowing() {
            return this.isMounted > 0 && this.editable
        },
        checkViewableShowing() {
            return this.isMounted > 0 && !this.editable
        },
        resetInsightPosition() {
            return "left: " + this.left + "px; top: " + this.top + "px; width: " + this.width + "px; height: " + this.height + "px;"
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
