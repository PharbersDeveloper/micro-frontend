<template>
    <div class="excel-container">
        <div class="schemas" style="width: 100%" ref="schemas">
            <div class="view" ref="headers">
                <header-item v-for="(item, index) in schema.cols" :isNeedPopmenu="isNeedPopmenu" :title="item" :itemWidth="118" :key="index"/>
                <header-item :isNeedPopmenu=false :itemWidth=8 key="placeholder"/>
            </div>
        </div>
        <div ref="viewport" @click="focusHandler" class="viewport" :style="{height: viewHeight}" @scroll="scrollGet($event)">
            <div class="body" :style="{height: page_size * 24 +'px'}">
                <ph-excel-page></ph-excel-page>
            </div>
        </div>
    </div>
</template>
<script>
import PhDataSource from './model/datasource'
import PhDefaultSizePolicy from './model/sizepolicy'
import PhDefaultPalettePolicy from './model/palettepolicy'
import PhDefaultFontPolicy from './model/fontpolicy'
import PhDefaultRenderPolicy from './model/renderpolicy'
import PhExcelDataSchema from './model/schema'
import PhExcelPage from './bp-excel-page'
export default {
    data() {
        return {
            anchor: {x: 0, y: 0},

            // all states
            needRefresh: 0,
            dataRefresh: 0,
            dataAppend: 0,
            cur_row: 0,
            cur_page: 0,

            renderPolicy: null
        }
    },
    components: {
        headerItem:require('./bp-excel-header.vue').default,
        PhExcelPage
    },
    props: {
        isNeedPopmenu: {
            type: Boolean,
            default: true
        },
        needFirstRender: {
            type: Boolean,
            default: true
        },
        isNeedKeyBoardEvent: {
            type: Boolean,
            default: true
        },
        viewHeight: {
            type: String,
            default: '600px'
        },
        page_size: {
            type: Number,
            default: 50
        },
        schema: {
            type: Object,
            default: function() {
                return new PhExcelDataSchema()
            }
        }
    },
    beforeMount() {

    },
    mounted() {

    },
    methods: {
        scrollGet (e) {
            this.$refs.schemas.scrollLeft = e.target.scrollLeft
        }
    },
    watch: {
        needRefresh(n, o) {
            const hit_size = this.renderPolicy.setupLayout()
            this.$refs.viewport.attributes["style"].value = "height: " + this.viewHeight + "; width: " + (hit_size.width + 8) + "px"
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
