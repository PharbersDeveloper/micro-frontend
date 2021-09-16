<template>
	<div ref="viewport" class="excel_container ag-theme-alpine viewport">
		<canvas ref="canvas" class="canvas"></canvas>
		<select ref="hidden" @keydown="keyPressHandler" style="width: 0;height: 0"></select>
	</div>
</template>
<script>
export default {
	name: "ph-excel-online-component",
	data() {
		return {
			sheet_margin: 10,
			sheet_bg_color: "#FFFFFF", // 暂时不支持渐变
			sheet_border_color: "#FF0000",
			sheet_border_width: 3,

			header_bg_color: "#FF0000",	// 暂时不支持渐变
			header_border_color: "#00FF00",
			header_border_width: 2,

			cell_bg_color: "#0000FF", // 暂时不支持渐变
			cell_border_color: "#00F0FF",
			cell_border_width: 1,
			cell_inner_margin: 20,

			select_border_color: "#FFFF00",
			select_bg_color: "#FFFFF0F0",
			select_border_width: 5,

			font_family: "sans-serif",
			font_size: 48,
			font_color: "#F000FF",

			text_Align: "left",

			anchor: { x: 0, y: 0 },

			ctx: null,
			needRefresh: 0,
			cur_row: 0
		}
	},
	components: {

	},
	props: {
		cols: {
			type: Array,
			default: () => ["pack_id", "mole_name_en", "mole_name_ch", "prod_desc", "prod_name_ch", "corp_name_ch",
				"mnf_name_ch", "dosage", "spec", "pack", "atc4_code"]
		},
		cell_hit_height: {
			type: Number,
			default: 100
		},
		cell_hit_width: {
			type: Number,
			default: 1000
		},
		cols_hit_width: {
			type: Array,
			default: () => []
		},
		datasource: {
			type: Object,
			default: () => { return {
				data: [],
				sql: "",
				buildQuery: () => {
					return "https://api.pharbers.com/phdatasource/?query=SELECT%20%2A%20FROM%20prod%20limit%20100"
				},
				refreshData: (ele) => {
					fetch(ele.datasource.buildQuery())
						.then((response) => response.json())
						.then((response) => {
							ele.datasource.data = JSON.parse(response.body).map((row) => {
								return [row.pack_id, row.mole_name_en, row.mole_name_ch, row.prod_desc, row.prod_name_ch,
									row.corp_name_ch, row.mnf_name_ch, row.dosage, row.spec, row.pack, row.atc4_code]
							})
							ele.needRefresh++
						})
				}
			}}
		}
	},
	beforeMount() {
		this.datasource.refreshData(this)
	},
	mounted() {
		this.$refs.hidden.focus()
	},
	methods: {
		sheetHitSize() {
			let cols_hit_width = this.cols_hit_width
			if (this.cols_hit_width.length === 0) {
				cols_hit_width = Array(this.cols.length).fill(this.cell_hit_width)
			}

			const rows = this.datasource.data.length

			return {
				width: cols_hit_width.reduce((s, c) => s + c, 0) + 2 * this.sheet_margin,
				height: rows * this.cell_hit_height + 2 * this.sheet_margin
			}
		},
		beforeRender() {
			const hit_size = this.sheetHitSize()
			const canvas = this.$refs.canvas
			if (this.ctx === null) {
				this.ctx = canvas.getContext('2d')
			}
			canvas.height = hit_size.height
			canvas.width = hit_size.width
		},
		render() {
			this.beforeRender()
			this.borderRender()
			this.gridRender()
			this.textRender()
			this.selectRender()
			this.afterRender()
		},
		afterRender() {

		},
		borderRender() {
			this.ctx.strokeStyle = this.sheet_border_color
			this.ctx.lineWidth = this.sheet_border_width
			this.ctx.save()
			this.ctx.beginPath()
			this.ctx.rect(this.sheet_margin, this.sheet_margin,
				this.$refs.canvas.width - 2 * this.sheet_margin,
				this.$refs.canvas.height - 2 * this.sheet_margin)
			this.ctx.stroke()
			this.ctx.restore()
		},
		gridRender() {
			const that = this
			// 横线
			this.ctx.save()
			this.ctx.beginPath()
			this.datasource.data.forEach((row, index) => {
				that.ctx.strokeStyle = that.cell_border_color
				that.ctx.lineWidth = that.cell_border_width
				{
					const y = index * that.cell_hit_height
					const x1 = that.sheet_margin
					const x2 = that.$refs.canvas.width - 2 * that.sheet_margin
					that.ctx.moveTo(x1, y)
					that.ctx.lineTo(x2, y)
				}
			})
			// 纵线
			this.cols.forEach((col, index) => {
				that.ctx.strokeStyle = that.cell_border_color
				that.ctx.lineWidth = that.cell_border_width
				{
					const x = index * that.cell_hit_width
					const y1 = that.sheet_margin
					const y2 = that.$refs.canvas.height - 2 * that.sheet_margin
					that.ctx.moveTo(x, y1)
					that.ctx.lineTo(x, y2)
				}
			})
			this.ctx.stroke()
			this.ctx.restore()
		},
		textRender() {
			this.ctx.save()
			this.ctx.beginPath()

			this.ctx.font = `${this.font_size}px ${this.font_family}`
			this.ctx.fillStyle = this.font_color
			this.ctx.textAlign = this.text_Align

			const that = this
			this.datasource.data.forEach((row, row_index) => {
				row.forEach((col, col_index) => {
					const pos = that.getCellPosition(row_index, col_index)
					const text = that.datasource.data[row_index][col_index]
					that.ctx.fillText(text, that.cell_inner_margin + pos.x,
						pos.y + that.font_size / 2 + that.cell_inner_margin, pos.w, pos.h)
				})
			})

			this.ctx.stroke()
			this.ctx.restore()
		},
		selectRender() {
			this.ctx.save()
			this.ctx.beginPath()

			const x = 1
			const y = this.cur_row * this.cell_hit_height - 1
			const w = this.$refs.canvas.width - 2
			const h = this.cell_hit_height + 2

			this.ctx.fillStyle = this.select_bg_color
			this.ctx.lineWidth = this.select_border_width
			this.ctx.strokeStyle = this.select_border_color
			this.ctx.fillRect(x, y, w, h)
			this.ctx.stroke()
			this.ctx.restore()
		},
		getCellPosition(row, col) {
			const x = this.sheet_margin + col * this.cell_hit_width
			const y = this.sheet_margin + row * this.cell_hit_height
			const w = this.cell_hit_width
			const h = this.cell_hit_width
			return { x: x, y: y, w: w, h: h }
		},
		keyPressHandler(event) {
			switch (event.code) {
			case "ArrowDown": {
				this.cur_row++
				this.cur_row = this.cur_row > this.datasource.data.length - 1 ?
					this.datasource.data.length - 1 : this.cur_row
				this.render()
				break
			}
			case "ArrowUp": {
				this.cur_row--
				this.cur_row = this.cur_row < 0 ? 0 : this.cur_row
				this.render()
				break
			}}
		}
	},
	watch: {
		needRefresh(n, o) {
			this.render()
		},
		"datasource.sql"(n, o) {
			this.datasource.refreshData(this)
		}
	}
};
</script>
<style lang="scss">
	.viewport {
		overflow: scroll;
	}
</style>
