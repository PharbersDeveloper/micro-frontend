<template>
	<div class="excel_container ag-theme-alpine">
		<grid
				:auto-width="autoWidth"
				:cols="cols"
				:language="language"
				:pagination="pagination"
				:rows="rows"
				:search="search"
				:server="server"
				:sort="sort"
				:width="width"
		></grid>
	</div>
</template>
<script>
import Grid from 'gridjs-vue'
export default {
	name: "ph-excel-online-component",
	data() {
		return {
			// REQUIRED:
			// An array containing strings of column headers
			cols: ['pack_id', 'mole_name_en', 'mole_name_ch', 'prod_desc', 'prod_name_ch',
				'corp_name_ch', 'mnf_name_ch', 'spec', 'pack', 'dosage', 'atc4_code'],
			// AND EITHER an array containing row data
			rows: [
				['1234', 'mole', 'mole', 'mole', 'mole', 'mole','mole','mole','mole','mole', 'mole']
			],

			// OR a server settings object
			server: {
			// 	// url: 'http://ec2-69-230-210-235.cn-northwest-1.compute.amazonaws.com.cn:9090/?query=SELECT%20%2A%20FROM%20prod%20limit%20100',
				url: 'https://api.pharbers.com/phdatasource/?query=SELECT%20%2A%20FROM%20prod%20limit%20100',
				then: res => JSON.parse(res.body).map(col => [col.pack_id, col.mole_name_en, col.mole_name_ch, col.prod_desc,
					col.prod_name_ch, col.corp_name_ch, col.mnf_name_ch, col.spec, col.pack, col.dosage, col.atc4_code]),
				handle: res => res.status === 404 ? { data: [] } : res.ok ? res.json() : new Error('Something went wrong')
			},

			// OPTIONAL:

			// Boolean to automatically set table width
			autoWidth: true,

			// Localization dictionary object
			language: {},

			// Boolean or pagination settings object
			pagination: false,

			// Boolean or search settings object
			search: false,

			// Boolean or sort settings object
			sort: false,

			// String with name of theme or 'none' to disable
			theme: 'mermaid',

			// String with css width value
			width: '100%'
		}
	},
	components: {
		Grid
	},
	props: {

	},
	beforeMount() {

	},
	methods: {

	},
	watch: {

	}
};
</script>
<style lang="scss">
	* {
		box-sizing: border-box;
	}
</style>
