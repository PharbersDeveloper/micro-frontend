<template>
    <div class="ph-excel-page">
        <div v-if="showing" :style="style">
            <ph-row v-for="(item, index) in data" :value="item" :state="state"
                    :schema="schema" :key="index"></ph-row>
        </div>
        <div class="ph-placeholder" v-else :style="style">&nbsp;</div>
    </div>
</template>
<script>
import PhDataSource from './model/datasource'
import PhExcelDataSchema from './model/schema'
import PhRow from './bp-excel-row'
export default {
    data() {
        return {
            state: "loading",
            dataIsReady: 0,
            data: [],
            needRefresh: 0
        }
    },
    computed: {
        showing: function() {
            const tmp = this.curPage.indexOf(this.page) !== -1
            this.needRefresh++
            // if (tmp) {
            //     if (this.dataIsReady === 0)
            //         this.datasource.refreshData(this, this.page, this.schema)
            // } else {
            //     this.data = []
            //     this.dataIsReady = 0
            // }
            return tmp
        },
        style: function() {
            // return "height: 2400px; width: 1298px;"
            return "height: " + this.pageHeight + "px; width: " + this.pageWidth + "px;"
        }
    },
    components: {
        PhRow
    },
    props: {
        page: {
            type: Number,
            default: 0
        },
        curPage: {
            type: Array,
            default: []
        },
        pageSize: {
            type: Number,
            default: 100
        },
        pageHeight: {
            type: Number,
            default: 2400
        },
        pageWidth: {
            type: Number,
            default: 1298
        },
        datasource: {
            type: Object,
            default: function () {
                return new PhDataSource('1')
            }
        },
        schema: {
            type: Object,
            default: function() {
                return new PhExcelDataSchema()
            }
        }
    },
    mounted() {

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
        dataIsReady(n, o) {
            if (n !== 0) {
                this.state = "Ready"
            } else this.state = "Loading"
        },
        needRefresh(n, o) {
            if (this.showing) {
                this.dataIsReady = 0
                this.datasource.refreshData(this, this.page, this.schema)
            } else {
                this.data = []
                this.dataIsReady = 0
            }
        }
    }
};
</script>
<style lang="scss">
    .ph-excel-page {
        display: flex;
        flex-direction: column;

        .ph-placeholder {
            background: red;
        }
    }
</style>
