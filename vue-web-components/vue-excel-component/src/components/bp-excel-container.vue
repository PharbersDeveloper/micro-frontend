<template>
	<div class="ec-container">
		<div class="title-container">
			<div class="title-left">
				<div class="title-span">
					<span>{{title}}</span>
					<span class="title-link">
						Configure Sample
					</span>
				</div>
				<div class="disc-span">
					{{totalNum}} rows, {{totalCols}} cols
				</div>
			</div>
			<div class="btn-groups">
				<button class="btn-chart" @click="">下载当前筛选数据</button>
				<bp-select-vue class="btn-chart" src="selectIcon" choosedValue="显示菜单" @showSelectOption="showSelectOption" :closeTosts="closeTosts">
					<bp-option-vue class="schema-select-item" text="选择显示行" @click="dialogVersionFilterVisible = true"></bp-option-vue>
					<bp-option-vue class="schema-select-item" text="选择显示列" @click="dialogCollectionVisible = true"></bp-option-vue>
					<bp-option-vue class="schema-select-item" text="选择排序列" @click="dialogSortVisible = true"></bp-option-vue>
				</bp-select-vue>
			</div>
		</div>
		<div class="search-container">
			<div class="search-inner">
				<input type="search" ref="search" name="q"
					   aria-label="Search through site content">
				<button class="search-submit" @click="on_searchBtnClicked">Search</button>
			</div>
			<div class="search-result">
				<span>{{matchNum}} matching rows</span>
			</div>
		</div>
		<bp-excel ref="excel" viewHeight="300px" :datasource="datasource" class="excel" :isNeedKeyBoardEvent=false></bp-excel>
		<el-dialog
				title="显示行"
				:visible.sync="dialogVersionFilterVisible"
				width="30%"
				:before-close="on_clickVersionFilterConfirm">

			<div class="dlg-version-container">
				<div class="dlg-flex-version" >
					<div class="dlg-flex-version-item" v-for="(item, index) in versionFilterPolicy.selectVersionTags" :key="item">
						<span>{{item}}</span>
						<button @click="versionFilterPolicy.removeSelectVersionTags(item)">X</button>
					</div>
				</div>
				<div class="dlg-version-spliter"></div>
				<div class="dlg-all-version-container">
					<div class="dlg-flex-version-item" v-for="(item, index) in versionCandidates" :key="item" @click="versionFilterPolicy.appendSelectVersionTags(item)">
						<span>{{item}}</span>
					</div>
				</div>
			</div>
			<span slot="footer" class="dialog-footer">
<!--    			<button @click="on_clickVersionFilterCancel">Cancel</button>-->
    			<button type="primary" @click="on_clickVersionFilterConfirm">Confirm</button>
			</span>
		</el-dialog>
		<el-dialog
				title="显示列"
				:visible.sync="dialogCollectionVisible"
				width="30%"
				:before-close="handleCollectionVisible">

			<span>This is a message</span>
			<span slot="footer" class="dialog-footer">
    			<button @click="dialogCollectionVisible = false">Cancel</button>
    			<button type="primary" @click="dialogCollectionVisible = false">Confirm</button>
			</span>
		</el-dialog>
		<el-dialog
				title="排序列"
				:visible.sync="dialogSortVisible"
				width="30%"
				:before-close="handleCollectionVisible">

			<span>This is a message</span>
			<span slot="footer" class="dialog-footer">
    			<button @click="dialogSortVisible = false">Cancel</button>
    			<button type="primary" @click="dialogSortVisible = false">Confirm</button>
			</span>
		</el-dialog>
	</div>
</template>
<script>
import PhContainerDataSource from './model/containerDatasource'
import bpSelectVue from '../../node_modules/vue-components/src/components/bp-select-vue.vue'
import bpOptionVue from '../../node_modules/vue-components/src/components/bp-option-vue.vue'
import ElDialog from 'element-ui/packages/dialog/src/component'
import PhDlgVersionController from './dlgController/dlgVersionController'
export default {
	data() {
		return {
			dialogVersionFilterVisible: false,
			versionCandidates: [],
			dialogSortVisible: false,
			dialogCollectionVisible: false,
			selectIcon: "https://general.pharbers.com/drop_down_icon.svg",
			showSelectOptionParam: false,
			closeTosts: false,
			descRefresh: 0,
			totalNum: 0,
			totalCols: 0,
			matchNum: 0
		}
	},
	components: {
		bpSelectVue,
		bpOptionVue,
		ElDialog,
		bpExcel: require('./bp-excel.vue').default
	},
	props: {
		title: {
			type: String,
			default: "Viewing dataset sample"
		},
		datasource: {
			type: Object,
			default: function () {
				return new PhContainerDataSource('1')
			}
		},
		versionFilterPolicy: {
			type: Object,
			default: function() {
				return new PhDlgVersionController('1')
			}
		}
	},
	beforeMount() {

	},
	mounted() {
		this.descRefresh++
	},
	methods: {
		getCookie(name) {
			let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
			if (arr = document.cookie.match(reg))
				return (arr[2]);
			else
				return null;
		},
		on_searchBtnClicked() {
			this.matchNum = this.datasource.clientSideSearch(this, this.$refs.search.value)
		},
		showSelectOption() {
			this.showSelectOptionParam = true
		},
		on_clickVersionFilterCancel() {
			this.dialogVersionFilterVisible = false
		},
		on_clickVersionFilterConfirm() {
			this.dialogVersionFilterVisible = false
			// debugger
			const condi = this.versionFilterPolicy.selectVersionTags
			let condi_str = "Province in ["
			for (var idx in condi) {
				if (idx > 0)
					condi_str = condi_str + ","

				condi_str = condi_str + "'" + condi[idx] + "'"
			}
			condi_str = condi_str + "]"
			this.datasource.pushFilterCondition("version", condi_str)
			this.$refs.excel.dataRefresh++
		},
		handleCollectionVisible() {
			console.log("show collection")
		},
		handleSortVisible() {
			console.log("show sort")
		}
	},
	watch: {
		descRefresh(o, n) {
			let that = this
			this.datasource.queryTotalCount(this).then((count) => {
				that.totalNum = Number(count)
			})
			that.totalCols = that.datasource.schema.length
		},
		dialogVersionFilterVisible(o, n) {
			let that = this
			if (this.versionCandidates.length === 0) {
				that.datasource.queryDlgDistinctCol(this, "Province").then((provinces) => {
					that.versionCandidates = provinces
				})
			}
		}
	}
};
</script>
<style lang="scss">
	.ec-container {
		display: flex;
		flex-direction: column;

		.title-container{
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			.title-left {
				display: flex;
				flex-direction: column;
				.title-span {
					font-family: "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif;
					font-size: 24px;
					display: flex;
					flex-direction: row;
					.title-link {
						font-family: ".SF NS Mono";
						font-size: 10px;
						display: flex;
						flex-direction: column-reverse;
					}
				}
				.disc-span {
					font-family: 'Noto Sans JP', sans-serif;
					font-size: 12px;
					margin-left: 10px;
				}
			}

			.btn-groups {
				display: flex;
				flex-direction: row;

				.btn-display {
					font-size: 14px;
					border-width: 1px;
				}
			}
		}

		.search-container {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin: 10px;

			.search-inner {
				display: flex;
				flex-direction: row;
			}

			.search-result {
				font-size: 18px;
				font-family: 'Advent Pro', sans-serif;
			}
		}
		.excel {
			display: inline-grid;
			margin: 10px
		}
	}

	.dlg-version-container {
		display: flex;
		flex-direction: column;

		.dlg-flex-version {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;

			.dlg-flex-version-item {
				font-size: 12px;
				border: #00a3bf;
			}

		}

		.dlg-all-version-container {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;

			.dlg-flex-version-item {
				margin: 5px;
			}
		}

		.dlg-version-spliter {
			height: 1px;
			background-color: #2c3e50;
		}
	}
</style>
