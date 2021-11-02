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
					{{desc}}
				</div>
			</div>
			<div class="btn-groups">
				<button class="btn-display">display(下拉框)</button>
				<button class="btn-excel">列表</button>
				<button class="btn-header">表头编辑</button>
				<button class="btn-chart">图表</button>
			</div>
		</div>
		<div class="search-container">
			<div class="search-inner">
				<input type="search" refs="search" name="q"
					   aria-label="Search through site content">
				<button class="search-submit">Search</button>
			</div>
			<div class="search-result">
				<span>xxxx matching rows</span>
			</div>
		</div>
		<bp-excel></bp-excel>
	</div>
</template>
<script>
export default {
	data() {
		return {
			desc: "xxx rows, xxx cols"
		}
	},
	components: {
		bpExcel: require('./bp-excel.vue').default
	},
	props: {
		title: {
			type: String,
			default: "Viewing dataset sample"
		}
	},
	beforeMount() {

	},
	mounted() {

	},
	methods: {

	},
	watch: {

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
	}
</style>
