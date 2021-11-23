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
				schemaArr: ["订单号","运单号","客户代码","订单内件数","运输方式","下架类型","州___省","收件人邮编","下单时间","出货时间","分区代码","计费重量","实际重量","体积重量","运费","其它费用","总费用","AUD运费收入","去GST收入","运费成本","去GST成本","利润","客户结算币种","包材","version"],
				datasetName: "两张表",
				projectId: "zrqojSgLfK1PbsmH"
			}
		}
	}
}
</script>
<style>
    
</style>