<template>
    <!-- 这个width 是bug -->
    <VueDragResize :isActive="active" :parentLimitation="true" :x="initLeft" :y="initTop" :h="initHeight" :w="width"  v-on:resizing="resize" v-on:dragging="resize">
        <histogram :init-width="width" :init-height="height" :init-policy="initPolicy"  ref="histogram" />
    </VueDragResize>
</template>
<script>
import VueDragResize from 'vue-drag-resize'
import Histogram from './insight'

export default {
    props: {
        initPolicy: {
            type: Object,
            default: function () {
                return null
            }
        },
        initWidth: {
            type: Number,
            default: undefined
        },
        initHeight: {
            type: Number,
            default: undefined
        },
        initTop: {
            type: Number,
            default: undefined
        },
        initLeft: {
            type: Number,
            default: undefined
        }
    },
    data: () => {
        return {
            name: "dragable",
            top: undefined,
            left: undefined,
            width: undefined,
            height: undefined,
            policy: null,
            active: false
        }
    },
    components: {
        VueDragResize,
        Histogram
    },
    mounted () {
        if (this.initTop > 0) {
            this.top = this.initTop
        } else  {
            this.top= 0
        }

        if (this.initLeft > 0) {
            this.left = this.initLeft
        } else {
            this.left = 0
        }

        if (this.initWidth > 0) {
            this.width = this.initWidth
        } else {
            this.width = 300
        }

        if (this.initHeight > 0) {
            this.height = this.initHeight
        } else {
            this.height = 300
        }
    },
    methods: {
        resize(newRect) {
            this.width = newRect.width
            this.height = newRect.height
            this.top = newRect.top
            this.left = newRect.left

            if (this.timer)
                return

            this.timer = setTimeout(() => {
                this.$refs.histogram.resizeHandler(this.width, this.height)
                this.timer = null
            }, 100)
        },
        ondarg(newRect) {
            this.top = newRect.top
            this.left = newRect.left
        },
        resetPolicy(p) {
            this.$refs.histogram.resetPolicy(p)
        }
    },
    watch: {

    }
}
</script>

<style scoped lang="scss">

</style>
