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
            const tmp = this.curPage.indexOf(this.page) !== -1
            if (tmp) {
                this.datasource.refreshData(this)
            } else this.data = []
            return tmp
        },
        style: function() {
            return "height: 2400px; width: 1298px;"
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
            this.state = "Ready"
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
