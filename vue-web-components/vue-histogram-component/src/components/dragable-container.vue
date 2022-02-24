<template>
    <VueDragResize :isActive="true" :parentLimitation="true" :w="width" :h="height" v-on:resizing="resize" v-on:dragging="resize">
        <histogram :init-width="width" :init-height="height" :init-policy="initPolicy"  ref="histogram" />
    </VueDragResize>
</template>
<script>
import VueDragResize from 'vue-drag-resize'
import Histogram from './histogram'

export default {
    props: {
        initPolicy: {
            type: Object,
            default: function () {
                return null
            }
        }
    },
    data: () => {
        return {
            name: "dragable",
            top: 0,
            left: 0,
            width: 1000,
            height: 600,
            policy: null
        }
    },
    components: {
        VueDragResize,
        Histogram
    },
    mounted () {

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
