<!--<template>-->
<!--    <div class="excel_container ag-theme-alpine">-->
<!--        <ag-grid-vue-->
<!--            style="height: 24px"-->
<!--            class="table"-->
<!--            :columnDefs="columnDefs"-->
<!--            :rowData="rowData"-->
<!--            :grid-options="gridOptions"-->
<!--            @grid-ready="onGridReady"-->
<!--        >-->
<!--        </ag-grid-vue>-->
<!--    </div>-->
<!--</template>-->
<!--<script>-->
<!--import { AgGridVue } from "ag-grid-vue";-->
<!--export default {-->
<!--	name: "App",-->
<!--	data() {-->
<!--		return {-->
<!--			columnDefs: null,-->
<!--			rowData: null,-->
<!--			gridApi: null,-->
<!--			gridColumnApi: null,-->
<!--			gridOptions: null-->
<!--		}-->
<!--	},-->
<!--	components: {-->
<!--		AgGridVue-->
<!--	},-->
<!--	props: {-->
<!--		schemas: Object,-->
<!--		sourceData: Array-->
<!--	},-->
<!--	beforeMount() {-->
<!--		this.columnDefs = [-->
<!--			{ field: 'pack_id' },-->
<!--			{ field: 'mole_name_en' },-->
<!--			{ field: 'mole_name_ch' },-->
<!--			{ field: 'prod_desc' },-->
<!--			{ field: 'prod_name_ch' },-->
<!--			{ field: 'corp_name_ch' },-->
<!--			{ field: 'mnf_name_ch' },-->
<!--			{ field: 'spec' },-->
<!--			{ field: 'pack' },-->
<!--			{ field: 'dosage' },-->
<!--			{ field: 'atc4_code' }-->
<!--		]-->
<!--		this.gridOptions = {-->
<!--			defaultColDef: {-->
<!--				sortable: true,-->
<!--				resizable: true,-->
<!--				width: 150,-->
<!--				enableRowGroup: true,-->
<!--				enablePivot: true,-->
<!--				enableValue: true-->
<!--			},-->
<!--			sideBar: {-->
<!--				toolPanels: ['columns']-->
<!--			},-->
<!--			rowGroupPanelShow: 'always',-->
<!--			pivotPanelShow: 'always',-->
<!--			debug: true-->
<!--			// columnDefs: this.columnDefs,-->
<!--			// rowData: this.sourceData-->
<!--		}-->
<!--		this.rowData = []-->
<!--	},-->
<!--	methods: {-->
<!--		onGridReady(params) {-->
<!--			this.gridApi = params.api;-->
<!--			this.gridColumnApi = params.columnApi;-->
<!--			if(this.gridApi) {-->
<!--				this.gridApi.hideOverlay();-->
<!--			}-->
<!--		}-->
<!--	},-->
<!--	watch: {-->
<!--		schemas: function (data) {-->
<!--			if(!data) return false-->
<!--			let headers = [];-->
<!--			if (data.headers && data.headers.length > 0) {-->
<!--				data.headers.forEach((item, index) => {-->
<!--					if (item) {-->
<!--						headers.push({ headerName: item }); //表头数据-->
<!--					}-->
<!--				});-->
<!--			}-->
<!--			this.columnDefs = headers;-->
<!--			this.gridOptions.columnDefs = headers;-->
<!--			console.log("this.gridOption:", this.gridOptions)-->
<!--			if(this.gridApi) {-->
<!--				this.gridApi.hideOverlay()-->
<!--			}-->
<!--		},-->
<!--		sourceData: function(data) {-->
<!--			console.log("sourceData", data)-->
<!--			this.rowData = data-->
<!--			this.gridOptions.rowData = data;-->
<!--		}-->
<!--	}-->
<!--};-->
<!--</script>-->
<!--<style lang="scss">-->
<!--* {-->
<!--    box-sizing: border-box;-->
<!--}-->
<!--.ag-header-row-column,.ag-theme-alpine {-->
<!--    height: 24px !important;-->
<!--}-->
<!--.ag-header-viewport {-->
<!--    overflow: auto; -->
<!--}-->
<!--@import "../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";-->
<!--@import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";-->
<!--</style>-->
