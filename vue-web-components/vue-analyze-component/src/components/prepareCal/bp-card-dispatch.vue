<template>
    <div class="bp_operator_card">
        <div class="card" v-if="type === 'filter'">
            <filter-on-value-card 
                @delCardItem="delCardItem" :step="step" :schema="schema"/>
        </div>
        <!-- <div class="card" v-if="type === 'filter'">
            <filter-on-value-card :step="step" :schema="schema"/>
        </div> -->
    </div>
</template>
<script>
import FilterOnValueCard from "./steps/commands/filter-on-value/card"
// import FilterOnNumericalRangeCard from "./steps/commands/filter-on-value/card"

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
        FilterOnValueCard
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
