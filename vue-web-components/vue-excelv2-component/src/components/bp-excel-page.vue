<template>
    <div class="ph-excel-page">
        <ph-row v-for="(item, index) in datasource.data" :value="item" :state="state" :schema="schema" :key="index"></ph-row>
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
            dataIsReady: 0
        }
    },
    components: {
        PhRow
    },
    props: {
        cur_page: {
            type: Number,
            default: 0
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
        schema: {
            type: Object,
            default: function() {
                return new PhExcelDataSchema()
            }
        }
    },
    beforeMount() {
        this.datasource.refreshData(this)
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
    .excel-page {
        display: flex;
        flex-direction: column;
    }
</style>
