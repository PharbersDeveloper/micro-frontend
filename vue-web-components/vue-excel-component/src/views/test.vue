<template>
    <div>
        <bp-excel :data="excelData"></bp-excel>
    </div>
</template>
<script>
import bpExcel from '../components/bp-excel.vue'
export default {
    components: {
        bpExcel
    },
    data() {
        return {
            excelData: [
                [1,2,3,4,5,6,7,8],
                [1,2,3,4,5,6,7,8],
                [1,2,3,4,5,6,7,8]
            ]
        }
    }
}
</script>
<style>
    
</style>