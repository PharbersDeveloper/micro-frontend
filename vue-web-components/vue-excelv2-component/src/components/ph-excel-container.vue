<template>
    <div class="excel-container">
        <div class="schemas" style="width: 100%" ref="schemas">
            <div class="view" ref="headers">
                <header-item v-for="(item, index) in schema.cols" :isNeedPopmenu="isNeedPopmenu" :title="item"
                             :itemWidth="schema.colWidth(index)" :key="index"/>
                <header-item :isNeedPopmenu=false :itemWidth=8 key="placeholder"/>
            </div>
        </div>
        <div v-if="countIsReady > 0" :style="{height: '100%', width: '100%'}"></div>
        <div ref="viewport" class="viewport" :style="style" @scroll="scrollGet($event)">
            <div class="body" :style="{height: page_size * 24 +'px'}">
                <ph-excel-page :page="0" :curPage="curPage"
                               :datasource="datasource"
                               :schema="schema" />
            </div>
        </div>
    </div>
</template>
<script>
import PhDataSource from './model/datasource'
import PhExcelDataSchema from './model/schema'
import PhExcelPage from './bp-excel-page'
export default {
    data() {
        return {
            schemaIsReady: 0,
            countIsReady: 0,
            curPage: [],
            dataCount: 0,
            scrollBarWidth: 8,
            style: ""
        }
    },
    computed: {

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
        viewHeight: {
            type: String,
            default: '600px'
        },
        schema: {
            type: Object,
            default: function() {
                return new PhExcelDataSchema()
            }
        },
        datasource: {
            type: Object,
            default: function() {
                return new PhDataSource('1')
            }
        }
    },
    beforeMount() {

    },
    mounted() {
        // TODO:  这里请求搞定schema
        this.schema.resetSchema(
            ["Index", "Id", "Hospname", "Province", "City", "lHospname", "lHospalias", "lDistrict", "lLevel", "lCat", "lOffweb"],
            ["Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text"],
            [118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118]
        )
        this.schemaIsReady++
    },
    methods: {
        scrollGet (e) {
            this.$refs.schemas.scrollLeft = e.target.scrollLeft
        },
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        }
    },
    watch: {
        schemaIsReady(n, o) {
            let that = this
            this.datasource.queryTotalCount(this).then(count => {
                that.dataCount = parseInt(count)
                that.countIsReady++
            })
            let viewHeight = this.viewHeight
            let schema = this.schema
            this.style = "height: " + viewHeight + ";" + "width: " + (schema.totalWidth() + this.scrollBarWidth) + "px;"
        },
        countIsReady(n, o) {
            this.curPage = [0, 1]
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
