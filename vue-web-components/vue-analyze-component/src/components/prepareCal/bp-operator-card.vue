<template>
    <div class="bp_operator_card">
        <div class="card" v-if="type === 'filter'">
            <bp-filter-card :step="step" :schema="schema"/>
        </div>
    </div>
</template>
<script>
// import PhStepDefsFactory from "./defs/defs-factory"
import BpFilterCard from "./steps/filter/bp-filter-card"

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
        BpFilterCard
    },
    methods: {

    },
    watch: {

    }
}
</script>
<style lang="scss" scoped>

</style>
