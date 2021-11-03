<template>
	<div class="eh-container">
		<div class="eh-title">
			<span>{{fileName}}</span>
		</div>
		<div class="eh-preview">
			<bp-excel></bp-excel>
		</div>
		<div class="eh-control-panel">
			<div class="eh-file-btns">
				<div class="eh-justify-type">
					<div class="eh-file-type">
						<table border="0">
							<tr>
								<td class="left"><span>Type</span></td>
								<td><input /></td>
							</tr>
						</table>
					</div>
				</div>
				<div class="eh-refresh-btns">
					<button >Update</button>
					<button >ReDetect</button>
				</div>
			</div>

			<div class="eh-header-panel">
				<div class="eh-first-line-panel">
					<table border="0">
						<tr>
							<td class="left">Skip First Lines</td>
							<td><input /></td>
						</tr>
						<tr>
							<td class="left">&nbsp;</td>
							<td><input type="checkbox" /><span>Parse next line as column headers</span></td>
						</tr>
						<tr>
							<td class="left">Skip Next Lines</td>
							<td><input /></td>
						</tr>
					</table>
				</div>
				<div class="eh-sheet-panel">
					<span>Select Sheet</span>
					<div class="eh-sheet-radio"><input type="radio" name="sheet" value="sheet1"><label >sheet1</label></div>
					<div class="eh-sheet-radio"><input type="radio" name="sheet" value="sheet2"><label >sheet2</label></div>
					<div class="eh-sheet-radio"><input type="radio" name="sheet" value="sheet3"><label >sheet3</label></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import bpExcel from '../../../vue-excel-component/src/components/bp-excel'
export default {
    data() {
        return {

        }
    },
    props: {
        fileName: {
            type: String,
            default: "文件名"
        }
    },
    components: {
    	bpExcel
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
	.eh-container {
		display: flex;
		flex-direction: column;

		.eh-title {
			display: flex;
			flex-direction: row-reverse;
			margin-right: 10px;
			margin-bottom: 20px;
		}

		.eh-preview {

		}

		.eh-control-panel {
			display: flex;
			flex-direction: column;

			.eh-file-btns {
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.eh-justify-type {
					display: flex;
					flex-direction: column;
					justify-content: space-around;

					.eh-file-type {
						td.left {
							width: 250px;
						}
						td {
							width: 400px;
						}
					}
				}

				.eh-refresh-btns {
					display: flex;
					flex-direction: column;
				}
			}

			.eh-header-panel {
				margin-top: 20px;
				display: flex;
				flex-direction: row;

				.eh-first-line-panel {
					display: flex;
					flex-direction: row;

					td.left {
						width: 250px;
					}

					td {
						width: 400px;
					}
				}

				.eh-sheet-panel {
					display: flex;
					flex-direction: column;

					.eh-sheet-radio {
						display: flex;
						flex-direction: row;
					}
				}
			}
		}

	}
</style>
