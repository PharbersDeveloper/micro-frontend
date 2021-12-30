<template>
    <div class="ph-row">
        <ph-cell v-for="(item, index) in value" :value="item" :cellWidth="cellWidth(index)"
                 :cellHeight="rowHeight" :state="state" :dtype="dtype(index)" :key="index"/>
    </div>
</template>
<script>

import PhExcelDataSchema from './model/schema'
import PhCell from './bp-excel-cell'

export default {
    data() {
        return {

        }
    },
    computed: {

    },
    components: {
        PhExcelDataSchema,
        PhCell
    },
    props: {
        schema: {
            type: Object,
            default: new PhExcelDataSchema('1')
        },
        state: {
            type: String,
            default: "loading"
        },
        rowHeight: {
            type: Number,
            default: 24
        },
        value: {
            type: Array,
            default: []
        }
    },
    beforeMount() {

    },
    mounted() {

    },
    methods: {
        dtype: function(index) {
            return this.schema.dtype[index]
        },
        cellWidth: function(index) {
            return this.schema.cellWidth[index]
        }
    },
    watch: {

    }
};
</script>
<style lang="scss" scoped>
    .ph-row {
        display: flex;
        flex-direction: row;

    }
</style>
