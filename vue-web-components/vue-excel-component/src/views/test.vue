<template>
    <div>
        <bp-excel :allData="allData"></bp-excel>
    </div>
</template>
<script>
import bpExcel from '../components/bp-excel-container.vue'
export default {
	components: {
		bpExcel
	},
	data() {
		return {
			allData: {
				schemaArr: ["年","月份","季度","省份","城市","区县","医院库类型","医院级别","医院名称","通用名","药品名","匹配名","商品名","剂型","规格","包装","生产企业","价格","数量","金额","价格转换比","最小使用单位数量","备注","version"],
				datasetName: "测试重复2",
				projectId: "JfSmQBYUpyb4jsei"
			}
		}
	}
}
</script>
<style>
    
</style>