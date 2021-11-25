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
            data: []
        }
    },
    computed: {
        showing: function() {
            return this.curPage.indexOf(this.page) !== -1
        },
        style: function() {
            return "height: 1200px; width: 1298px;"
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
            default: 50
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
    beforeMount() {
        // this.datasource.refreshData(this)
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
            this.state = "Ready"
        },
        showing(n, o) {
            if (n) {
                this.datasource.refreshData(this)
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
