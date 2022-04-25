<template>
    <div class="bp_operator_card">
        <div class="card" v-if="type === 'filter'">
            <filter-on-value-card 
                @delCardItem="delCardItem" :step="step" :schema="schema"/>
        </div>
        <div class="card" v-else>
            <FilterOnNumericalRangeCard :step="step" :schema="schema"/>
        </div>
    </div>
</template>
<script>
import FilterOnValueCard from "./steps/commands/filter-on-value/FOVcard"
import FilterOnNumericalRangeCard from "./steps/commands/filter-on-numerical-range/FONRcard"

export default {
    data() {
        return {

        }
    },
    props: {
        type: String,
        step: Object,
        schema: Array
    },
    components: {
        FilterOnValueCard,
        FilterOnNumericalRangeCard
    },
    methods: {
        delCardItem(data) {
            this.$emit("delCardItem", data)
        }
    },
    watch: {

    }
}
</script>
<style lang="scss" scoped>

</style>
