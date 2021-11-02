
export default class PhDefaultSizePolicy {
	constructor() {
		this.cols_hit_width = []
		this.cell_hit_width = 122
		this.sheet_margin = 10
		this.cell_hit_height = 24
	}

	sheetHitSize(cols_num, rows) {
		let cols_hit_width = this.cols_hit_width
		if (this.cols_hit_width.length === 0) {
			cols_hit_width = Array(cols_num).fill(this.cell_hit_width)
		}

		// const rows = this.datasource.data.length
		// const rows = this.page_size

		return {
			width: cols_hit_width.reduce((s, c) => s + c, 0) + 2 * this.sheet_margin,
			height: rows * this.cell_hit_height + 2 * this.sheet_margin
		}
	}
}
