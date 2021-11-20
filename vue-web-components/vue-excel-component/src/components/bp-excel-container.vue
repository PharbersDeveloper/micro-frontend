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
					<div class="dlg-flex-version-item" v-for="(item, index) in versionFilterPolicy.versionCandidates" :key="item" @click="versionFilterPolicy.appendSelectVersionTags(item)">
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
				:before-close="on_clickCollectionConfirm">

			<div class="dlg-col-container">
				<div class="dlg-col-search-bar">
					<div class="dlg-col-search-input">
						<input type="search" ref="colSearch" name="q"
							   aria-label="Search through site content">
						<button class="search-submit" @click="on_collectionSearchBtnClicked">Search</button>
					</div>
				</div>
				<div class="dlg-col-cols">
					<el-checkbox :indeterminate="collectionsPolicy.isIndeterminate" v-model="collectionsPolicy.checkAll" @change="on_collectionCheckAllChange">Check all</el-checkbox>
					<div style="margin: 15px 0;"></div>
					<div class="dlg-version-spliter"></div>
					<div style="margin: 15px 0;"></div>
					<el-checkbox-group class="dlg-collection-list" v-model="collectionsPolicy.selectCollections" @change="on_handleCheckedColsChange">
						<el-checkbox v-for="col in collectionsPolicy.shownCollections" :label="col" :key="col">{{col}}</el-checkbox>
					</el-checkbox-group>
				</div>
			</div>

			<span slot="footer" class="dialog-footer">
<!--    			<button @click="dialogCollectionVisible = false">Cancel</button>-->
    			<button type="primary" @click="on_clickCollectionConfirm">Confirm</button>
			</span>
		</el-dialog>
		<el-dialog
				title="排序列"
				:visible.sync="dialogSortVisible"
				width="30%"
				:before-close="on_clickSortConfirm">


			<div class="dlg-sort-container">
				<div class="dlg-sort-nav">
					<span>可选列</span>
					<span>已选列</span>
					<button @click="on_clearSortCollections">全部清除</button>
				</div>
				<div class="dlg-sort-filter">
					<input type="search" ref="colFilter" name="q"
						   aria-label="Search through site content">
					<button class="search-submit" @click="">Search</button>
				</div>
				<div class="dlg-sort-candi-container">
					<div class="dlg-sort-candi-items dlg-panel-left">
						<span class="dlg-sort-candi-item" v-for="col in collectionsPolicy.shownCollections"
							  :label="col" :key="'candi' + col" @click="on_clickSortShownCandi(col)">{{col}}</span>
					</div>
					<div class="dlg-sort-candi-items dlg-panel-right">
						<span class="dlg-sort-candi-item" v-for="col in collectionsPolicy.sortCollections"
							  :label="col" :key="'select' + col" @click="on_clickSortSelectCandi(col)">{{col}}</span>
					</div>
				</div>
			</div>
			<span slot="footer" class="dialog-footer">
<!--    			<button @click="dialogSortVisible = false">Cancel</button>-->
    			<button type="primary" @click="on_clickSortConfirm">Confirm</button>
			</span>
		</el-dialog>
	</div>
</template>
<script>
import PhContainerDataSource from './model/containerDatasource'
import bpSelectVue from '../../node_modules/vue-components/src/components/bp-select-vue.vue'
import bpOptionVue from '../../node_modules/vue-components/src/components/bp-option-vue.vue'
import PhDlgVersionController from './dlgController/dlgVersionController'
import PhDlgCollectionController from './dlgController/dlgCollectionController'
import ElDialog from 'element-ui/packages/dialog/src/component'
import ElCheckbox from 'element-ui/packages/checkbox/src/checkbox'
import ElCheckboxGroup from 'element-ui/packages/checkbox-group/index'
export default {
	data() {
		return {
			dialogVersionFilterVisible: false,
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
		ElCheckbox,
		ElCheckboxGroup,
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
		},
		collectionsPolicy: {
			type: Object,
			default: function() {
				return new PhDlgCollectionController('1', this.datasource.schema)
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
		on_clickCollectionConfirm() {
			this.dialogCollectionVisible = false
			this.datasource.cols = this.collectionsPolicy.resetShowingCollections()
			this.$refs.excel.dataRefresh++
		},
		on_collectionCheckAllChange(val) {
			this.collectionsPolicy.checkAllCollections(val)
		},
		on_handleCheckedColsChange(val) {
			this.collectionsPolicy.checkCollectionsItem(val)
		},
		on_collectionSearchBtnClicked() {
			const v = this.$refs.colSearch.value
			if (v && v.length > 0)
				this.collectionsPolicy.filterCollectionsByChar(v)
		},
		on_clickSortSelectCandi(col) {
			this.collectionsPolicy.popSortCols(col)
		},
		on_clickSortShownCandi(col) {
			this.collectionsPolicy.pushSortCols(col)
		},
		on_clearSortCollections() {
			this.collectionsPolicy.sortCollections = []
			this.collectionsPolicy.clearShownCollectionFilter()
		},
		on_clickSortConfirm() {
			this.dialogSortVisible = false
			this.datasource.clearSortCondition()
			for (var idx in this.collectionsPolicy.sortCollections) {
				this.datasource.pushSortCondition(this.collectionsPolicy.sortCollections[idx], 1)
			}
			this.$refs.excel.dataRefresh++
		}
	},
	watch: {
		descRefresh(n, o) {
			let that = this
			this.datasource.queryTotalCount(this).then((count) => {
				that.totalNum = Number(count)
			})
			that.totalCols = that.datasource.schema.length
		},
		dialogVersionFilterVisible(n, o) {
			let that = this
			if (this.versionFilterPolicy.versionCandidates.length === 0) {
				that.datasource.queryDlgDistinctCol(this, "Province").then((provinces) => {
					that.versionFilterPolicy.versionCandidates = provinces
				})
			}
		},
		dialogCollectionVisible(n, o) {
			if (this.collectionsPolicy.collections.length === 0)
				this.collectionsPolicy.resetCollections(this.datasource.schema)

			if (n) {
				if (this.$refs.colSearch)
					this.$refs.colSearch.value = ""
				this.collectionsPolicy.clearShownCollectionFilter()
			}
		},
		dialogSortVisible(n, o) {
			if (this.collectionsPolicy.collections.length === 0)
				this.collectionsPolicy.resetCollections(this.datasource.schema)

			if (n) {
				if (this.$refs.colFilter)
					this.$refs.colFilter.value = ""
				this.collectionsPolicy.clearShownCollectionFilter()
				this.collectionsPolicy.resetSortCollections()
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
	}

	.dlg-collection-list {
		display: flex;
		flex-direction: column;
	}

	.dlg-version-spliter {
		height: 1px;
		background-color: #2c3e50;
	}

	.dlg-sort-container {
		display: flex;
		flex-direction: column;

		.dlg-sort-nav {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

		.dlg-sort-filter {
			display: flex;
			flex-direction: row;
		}

		.dlg-sort-candi-container {
			display: flex;
			flex-direction: row;

			.dlg-sort-candi-items{
				display: flex;
				flex-direction: column;
				border: 2px solid gray;
				width: 50%;

				.dlg-sort-candi-item {
					font-size: 14px;
					margin: 5px;
				}
			}
		}
	}
</style>
