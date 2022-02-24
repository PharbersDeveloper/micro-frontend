<template>
    <div class="viewport" ref="viewport" :style="viewportStyle()">
        <div ref="chart" class="chart" ></div>
    </div>
</template>
<script>
import * as d3_base from "d3";
import PhHistogramDatasource from "./model/datasource"
import PhHistogramSchema from "./model/schema"
import BarPolicy from "./render-policy/bar-policy"

export default {
    props: {
        d3: {
            type: Object,
            default: function () {
                return Object.assign({}, d3_base)
            }
        },
        initWidth: {
            type: Number,
            default: 1000
        },
        initHeight: {
            type: Number,
            default: 600
        },
        initPolicy: {
            type: Object,
            default: function () {
                return null
            }
        }
    },
    data: () => {
        return {
            name: "histogram",
            schemaIsReady: 0,
            dataIsReady: 0,
            needRefresh: 0,
            policy: null,
            width: 1000,
            height: 600
        }
    },
    components: {

    },
    mounted () {
        // this.policy = new BarPolicy('1', this.datasource, this.schema,
        //     { width: this.width, height: this.height, xProperty: this.xProperty, yProperty: this.yProperty })
        this.width = this.initWidth
        this.height = this.initHeight
        if (this.initPolicy) {
            this.resetPolicy(this.initPolicy)
        }
    },
    methods: {
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        },
        // 监听屏幕大小改变
        bindChangeWindow () {
            window.onresize = () => {
                if (this.timer) return

                this.timer = setTimeout(() => {
                    this.resizeHandler()
                    this.timer = null
                }, 100)
            }
        },

        viewportStyle() {
            return "width: " + this.width + "px; height: " + this.height + "px;"
        },

        resizeHandler(w, h) {
            if (w) this.width = w
            else this.width = this.$refs.viewport.offsetWidth

            if (h) this.height = h
            else this.height = this.$refs.viewport.offsetHeight

            if (this.policy) {
                this.policy.resetPolicyConstraints({ width: this.width, height: this.height })
            }
            this.needRefresh++
        },

        render() {
            this.d3.select(this.$refs.chart).selectAll("svg").remove()
            this.policy.render(this.d3, this.policy.datasource.data, this.$refs.chart)
        },

        resetPolicy(p) {
            if (p) {
                this.policy = p
                const that = this
                this.policy.resetPolicyConstraints({ width: this.width, height: this.height })
                this.policy.refreshSchema(this).then(_ => {
                    that.schemaIsReady++
                })
            }
        }
    },
    watch: {
        schemaIsReady(n, o) {
            this.policy.refreshData(this)
        },
        dataIsReady(n, o) {
            this.render()
        },
        needRefresh(n, o) {
            this.render()
        }
    }
}
</script>

<style scoped lang="scss">
    .viewport {
        overflow: auto;
    }
</style>
