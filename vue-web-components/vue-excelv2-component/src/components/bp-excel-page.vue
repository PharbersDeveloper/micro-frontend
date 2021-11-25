<template>
    <canvas ref="canvas" class="canvas" width="1" height="1"></canvas>
</template>
<script>
import PhDataSource from './model/datasource'
import PhDefaultSizePolicy from './model/sizepolicy'
import PhDefaultPalettePolicy from './model/palettepolicy'
import PhDefaultFontPolicy from './model/fontpolicy'
import PhDefaultRenderPolicy from './model/renderpolicy'
import PhExcelDataSchema from './model/schema'
export default {
    data() {
        return {
            // anchor: {x: 0, y: 0},

            // all states
            needRefresh: 0,
            dataRefresh: 0,
            // dataAppend: 0,
            // cur_row: 0,
            // cur_page: 0,

            renderPolicy: null
        }
    },
    components: {

    },
    props: {
        cur_page: {
            type: Number,
            default: 0
        },
        isNeedPopmenu: {
            type: Boolean,
            default: true
        },
        needFirstRender: {
            type: Boolean,
            default: true
        },
        page_size: {
            type: Number,
            default: 50
        },
        datasource: {
            type: Object,
            default: function () {
                return new PhDataSource('1')
            }
        },
        sizePolicy: {
            type: Object,
            default: function() {
                return new PhDefaultSizePolicy()
            }
        },
        palettePolicy: {
            type: Object,
            default: function() {
                return new PhDefaultPalettePolicy()
            }
        },
        fontPolicy: {
            type: Object,
            default: function() {
                return new PhDefaultFontPolicy()
            }
        },
        schema: {
            type: Object,
            default: function() {
                return new PhExcelDataSchema()
            }
        }
    },
    beforeMount() {
        if(this.needFirstRender) {
            this.datasource.refreshData(this)
        }
    },
    mounted() {
        // this.focusHandler()
        if (this.renderPolicy == null) {
            this.renderPolicy = new PhDefaultRenderPolicy(
                this.$refs.canvas, this.sizePolicy,
                this.datasource, this.palettePolicy,
                this.fontPolicy, this.page_size,
                this.$refs.hidden,
                false
            )
        }
    },
    methods: {
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        }
    },
    watch: {
        needRefresh(n, o) {
            const hit_size = this.renderPolicy.setupLayout()
            // this.$refs.viewport.attributes["style"].value = "height: " + this.viewHeight + "; width: " + (hit_size.width + 8) + "px"
            this.renderPolicy.render(this.cur_row, this.cur_page)
        },
        dataRefresh(n, o) {
            this.datasource.data = []
            this.datasource.refreshData(this)
        },
        dataAppend(n, o) {
            this.datasource.appendData(this)
        }
    }
};
</script>
<style lang="scss">
    .excel-container {
        // TODO: 我只做了chrome 浏览器
        /* 滚动槽（轨道）宽高 */
        ::-webkit-scrollbar {
            width: 8px; /*对垂直流动条有效*/
            height: 8px; /*对水平流动条有效*/
            // background-color:red
        }
        /* 滚动槽（轨道）样式 */
        ::-webkit-scrollbar-track{
            box-shadow: inset 0 0 1px rgba(0,0,0,.3);
            background-color: gray;
            border-radius: 2px;
        }

        /*定义滑块颜色、内阴影及圆角*/
        ::-webkit-scrollbar-thumb{
            border-radius: 2px;
            box-shadow: inset 0 0 1px rgba(0,0,0,.3);
            background-color: #E8E8E8;
        }

        /*定义两端按钮的样式*/
        ::-webkit-scrollbar-button {
            height: 0px;
            width: 0px;
            background-color: gray;
        }

        /*定义右下角汇合处的样式*/
        ::-webkit-scrollbar-corner {
            /* border-radius: 50%; */
            background:khaki;
        }
        ::-webkit-scrollbar-thumb:window-inactive {
            background:rgba(255,0,0,0.4);
        }

        .viewport {
            overflow: auto;
            overflow-y: visible;
            position: relative;
            display: flex;
            .body {
                // overflow: auto;
            }



        }
        .schemas {
            display: flex;
            margin-left: 0px;
            margin-right: 10px;
            overflow: hidden;
            .view {
                display: flex;
            }
        }
        .canvas {
            // margin-top: 46px;
        }
        .hidden {
            position: absolute;
            top:50px;
            left:0;
            margin-left:10px
        }
    }
</style>
