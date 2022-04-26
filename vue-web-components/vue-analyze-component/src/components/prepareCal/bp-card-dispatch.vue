<template>
    <div class="bp_operator_card">
        <div class="card" v-if="type === 'FilterOnValue'">
            <filterOnValueCard 
                @delCardItem="delCardItem" :step="step" :schema="schema"/>
        </div>
        <div class="card" v-else-if="type === 'FilterOnNumericalRange'">
            <FilterOnNumericalRangeCard
                @delCardItem="delCardItem" :step="step" :schema="schema"/>
        </div>
		<div class="card" v-else-if="type === 'ReplaceValue'">
            <ReplaceValue
                @delCardItem="delCardItem" :step="step" :schema="schema"/>
        </div>
    </div>
</template>
<script>
import FilterOnValueCard from "./steps/commands/filter-on-value/FOVcard"
import FilterOnNumericalRangeCard from "./steps/commands/filter-on-numerical-range/FONRcard"
import ReplaceValue from "./steps/commands/replace-value/RVcard"

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
        FilterOnNumericalRangeCard,
        ReplaceValue
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
