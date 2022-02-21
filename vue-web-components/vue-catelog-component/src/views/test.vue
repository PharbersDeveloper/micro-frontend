<template>
    <div>
        <bp-excel-handler :allData="allData"></bp-excel-handler>
    </div>
</template>
<script>
import BpExcelHandler from '../../../vue-analyze-component/src/components/bp-excel-handler.vue'
export default {
    components: {
        BpExcelHandler
    },
    data: {
        allData: {
            
        }
    }
}
</script>
<style>
    
</style>