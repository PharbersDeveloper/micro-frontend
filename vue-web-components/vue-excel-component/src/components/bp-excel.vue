<template>
<div class="excel_container">
	<div ref="viewport" @click="focusHandler" class="viewport">
		<div class="schemas">
			<div class="schema-item" v-for="(item,index) in cols" :key="index+'schema'">{{item}}</div>
		</div>
		<div class="body" :style="{height: viewHeight+'px'}">
			<canvas ref="canvas" class="canvas"></canvas>
			<div ref="select" class="row-select"></div>
			<select class="hidden" ref="hidden" @keydown="keyPressHandler" style="width: 0px;height: 0px"></select>
		</div>
	</div>
</div>
</template>
<script>
export default {
	data() {
		return {
			sheet_margin: 10,
			sheet_bg_color: "#FFFFFF", // 暂时不支持渐变
			sheet_border_color: "#CFCFCF",
			sheet_border_width: 1,

			header_bg_color: "#FF0000",	// 暂时不支持渐变
			header_border_color: "#00FF00",
			header_border_width: 1,

			cell_bg_color: "#0000FF", // 暂时不支持渐变
			cell_border_color: "#CFCFCF",
			cell_border_width: 1,
			cell_inner_margin: 0,

			select_border_color: "#23A959",
			select_bg_color: "rgba(35,169,89,0.20)",
			select_border_width: 1,

			font_family: "PingFangSC-Light",
			font_size: 14,
			font_color: "#706F79",

			text_Align: "left",

			anchor: { x: 0, y: 0 },

			ctx: null,
			needRefresh: 0,
			cur_row: 0,
			cur_page: 0,

			// 双缓存
			buffer_ctx: null,
			buffer_canvas: null
		}
	},
	components: {

	},
	props: {
		viewHeight: {
			type: Number,
			default: 100
		},
		cols: {
			type: Array,
			default: () => ["pack_id", "mole_name_en", "mole_name_ch", "prod_desc", "prod_name_ch", "corp_name_ch",
				"mnf_name_ch", "dosage", "spec", "pack", "atc4_code"]
		},
		cell_hit_height: {
			type: Number,
			default: 24
		},
		cell_hit_width: {
			type: Number,
			default: 122
		},
		cols_hit_width: {
			type: Array,
			default: () => []
		},
		page_size: {
			type: Number,
			default: 50
		},
		datasource: {
			type: Object,
			default: () => { return {
				data: [],
				sql: "",
				buildQuery: () => {
					return "https://api.pharbers.com/phdatasource"
					// /?query=SELECT%20%2A%20FROM%20prod%20limit%20500
				},
				refreshData: (ele) => {
					const accessToken = ele.getCookie("access_token") || "1d8e01fa0eb856c9979c4f11b9313bae776fa5dab37498bcaef82cf7aa53f407"
					let body = {
						"query": "SELECT * FROM prod LIMIT 100",
						"schema": [
							"pack_id",
							"mole_name_en",
							"mole_name_ch",
							"prod_desc",
							"prod_name_ch",
							"corp_name_ch",
							"mnf_name_ch",
							"dosage",
							"spec",
							"pack",
							"atc4_code"
						]
					}
					let options = {
						method: "POST",
						headers: {
							"Authorization": accessToken,
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
							"accept": "application/json"
							// , text/javascript, */*; q=0.01
						},
						body: JSON.stringify(body)
					}
					fetch(ele.datasource.buildQuery(), options)
						.then((response) => response.json())
						.then((response) => {
							ele.datasource.data = JSON.parse(response.body).map((row) => {
								return [row.pack_id, row.mole_name_en, row.mole_name_ch, row.prod_desc, row.prod_name_ch,
									row.corp_name_ch, row.mnf_name_ch, row.dosage, row.spec, row.pack, row.atc4_code]
							})
							ele.needRefresh++
						})
				},
				appendData: (ele, cb) => {
					fetch(ele.datasource.buildQuery())
						.then((response) => response.json())
						.then((response) => {
							ele.datasource.data = ele.datasource.data.concat(JSON.parse(response.body).map((row) => {
								return [row.pack_id, row.mole_name_en, row.mole_name_ch, row.prod_desc, row.prod_name_ch,
									row.corp_name_ch, row.mnf_name_ch, row.dosage, row.spec, row.pack, row.atc4_code]
							}))
							cb()
						})
				}
			}}
		}
	},
	beforeMount() {
		this.datasource.refreshData(this)
	},
	mounted() {
		this.focusHandler()
	},
	methods: {
		getCookie(name) {
			let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
			if (arr = document.cookie.match(reg))
				return (arr[2]);
			else
				return null;
		},
		sheetHitSize() {
			let cols_hit_width = this.cols_hit_width
			if (this.cols_hit_width.length === 0) {
				cols_hit_width = Array(this.cols.length).fill(this.cell_hit_width)
			}

			// const rows = this.datasource.data.length
			const rows = this.page_size

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
				this.buffer_canvas = document.createElement('canvas')
				this.buffer_ctx = this.buffer_canvas.getContext('2d')
			}
			this.ctx.clearRect(0, 0, canvas.width, canvas.height)
			canvas.height = hit_size.height
			canvas.width = hit_size.width
			this.buffer_canvas.height = hit_size.height
			this.buffer_canvas.width = hit_size.width
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
			this.ctx.drawImage(this.buffer_canvas,
				0, 0, this.buffer_canvas.width, this.buffer_canvas.height,
				0, 0, this.buffer_canvas.width, this.buffer_canvas.height)
		},
		borderRender() {
			const ctx = this.buffer_ctx
			ctx.strokeStyle = this.sheet_border_color
			ctx.lineWidth = this.sheet_border_width
			ctx.save()
			ctx.beginPath()
			ctx.rect(this.sheet_margin, this.sheet_margin,
				this.$refs.canvas.width - 2 * this.sheet_margin,
				this.$refs.canvas.height - 2 * this.sheet_margin)
			ctx.stroke()
			ctx.restore()
		},
		gridRender() {
			const ctx = this.buffer_ctx
			const that = this
			// 横线
			ctx.save()
			ctx.beginPath()
			this.datasource.data.forEach((row, index) => {
				ctx.strokeStyle = that.cell_border_color
				ctx.lineWidth = that.cell_border_width
				{
					const y = index * that.cell_hit_height + that.sheet_margin
					const x1 = that.sheet_margin


					const x2 = that.$refs.canvas.width - 2 * that.sheet_margin
					ctx.moveTo(x1, y)
					ctx.lineTo(x2, y)
				}
			})
			// 纵线
			this.cols.forEach((col, index) => {
				ctx.strokeStyle = that.cell_border_color
				ctx.lineWidth = that.cell_border_width
				{
					const x = index * that.cell_hit_width
					const y1 = that.sheet_margin
					const y2 = that.$refs.canvas.height - 2 * that.sheet_margin
					ctx.moveTo(x, y1)
					ctx.lineTo(x, y2)
				}
			})
			ctx.stroke()
			ctx.restore()
		},
		textRender() {
			const ctx = this.buffer_ctx
			ctx.save()
			ctx.beginPath()

			ctx.font = `${this.font_size}px ${this.font_family}`
			ctx.fillStyle = this.font_color
			ctx.textAlign = this.text_Align

			const that = this
			const start_index = this.cur_page * this.page_size
			this.datasource.data.slice(start_index, start_index + this.page_size).forEach((row, row_index) => {
				row.forEach((col, col_index) => {
					const pos = that.getCellPosition(row_index, col_index)
					const text = that.datasource.data[row_index + start_index][col_index]
					ctx.fillText(text, that.cell_inner_margin + pos.x,
						pos.y + that.font_size / 2 + that.sheet_margin + that.cell_inner_margin, pos.w, pos.h)
				})
			})
			
			ctx.stroke()
			ctx.restore()
		},
		selectRender() {
			const ctx = this.buffer_ctx
			ctx.save()
			ctx.beginPath()

			const x = this.sheet_margin - 1
			const y = this.cur_row * this.cell_hit_height - 1 + this.sheet_margin
			const w = this.$refs.canvas.width /*- 2 * this.select_border_width*/ - 2 * this.sheet_margin
			const h = this.cell_hit_height + 2 * this.select_border_width

			ctx.fillStyle = this.select_bg_color
			ctx.lineWidth = this.select_border_width
			ctx.strokeStyle = this.select_border_color
			ctx.fillRect(x, y, w, h)
			ctx.strokeRect(x, y, w, h)
			this.$refs.hidden.style.top = y + 'px'
		},
		getCellPosition(row, col) {
			const x = this.sheet_margin + col * this.cell_hit_width
			const y = this.sheet_margin + row * this.cell_hit_height
			const w = this.cell_hit_width
			const h = this.cell_hit_width
			return { x: x, y: y, w: w, h: h }
		},
		focusHandler(event) {
			this.$refs.hidden.focus()
		},
		keyPressHandler(event) {
			switch (event.code) {
			case "ArrowDown": {
				this.cur_row++
				this.cur_row = this.cur_row > this.datasource.data.length - 1 ?
					this.datasource.data.length - 1 : this.cur_row
				this.needRefresh++
				break
			}
			case "ArrowUp": {
				this.cur_row--
				this.cur_row = this.cur_row < 0 ? 0 : this.cur_row
				this.needRefresh++
				break
			}
			case "ArrowLeft": {
				this.cur_page--
				this.cur_page = this.cur_page < 0 ? 0 : this.cur_page
				this.needRefresh++
				break
			}
			case "ArrowRight": {
				this.cur_page++
				const that = this
				function cbAddPage() {
					that.cur_page = that.cur_page > that.datasource.data.length / that.page_size - 1 ?
						that.datasource.data.length / that.page_size - 1 : that.cur_page
					that.needRefresh++
				}
				if (this.cur_page > this.datasource.data.length / this.page_size - 1) {
					this.datasource.appendData(this, cbAddPage)
				} else {
					cbAddPage()
				}
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
.excel_container {
	.viewport {
		// height: 800px;
		overflow: hidden;
		// overflow-x: hidden;
		position: relative;
		.body {
			overflow: auto;
		}
	
	}
	.schemas {
		height: 24px;
		display: flex;
		margin-left: 10px;
		.schema-item {
			height: 24px;
			// min-width: 80px;
			min-width: 118px;
			display: flex;
			justify-content: center;
			background: #F0F0F0;
			border: 1px solid #CFCFCF;
			// padding: 0 5px;
			overflow: hidden;
		}
	}
	.canvas {
		// margin-top: 46px;
	}
	.hidden {
		position: absolute;
		top:50px;
		left:0;
		margin-left:10px
	}
}
</style>
