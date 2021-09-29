<template>
	<div class="excel_container">
		<div ref="viewport" @click="focusHandler" class="viewport">
			<div class="schemas">
				<div class="schema-item" @click="sortHandler" v-for="(item,index) in cols" :key="index+'schema'">{{item}}</div>
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
			dataRefresh: 0,
			dataAppend: 0,
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
		isNeedKeyBoardEvent: {
			type: Boolean,
			default: true
		},
		viewHeight: {
			type: Number,
			default: 100
		},
		cols: {
			type: Array,
			default: () => ["pkc", "gn", "pn", "mn", "do", "sp", "pk", "pku", "dt"]
		},
		schema: {
			type: Array,
			default: () => ["id", "pkc", "gn", "pn", "mn", "do", "sp", "pk", "pku", "dt", "measure", "provider", "version", "owner"]
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
		dt: String,
		provider: String,
		datasource: {
			type: Object,
			default: function() {
				let that = this
				return {
					data: [],
					sort: {},
					filter: {
						provider:that.provider,
						dt: that.dt
					},
					name: "clean_source",
					batch_size: 200,
					adapter: (row) => [row.id, row.pkc ? row.pkc : '', row.gn ? row.gn : '', row.pn ? row.pn : '', row.mn ? row.mn : '', row.do ? row.do : '', row.sp ? row.sp : '', row.pk ? row.pk : '', row.pku ? row.pku : '', row.dt ? row.dt : ''],
					buildQuery: (ele, isAppend=false) => {
						function buildQueryString() {
							let sql_str = "SELECT "
							sql_str = sql_str + ele.schema.toString() + " FROM " + ele.datasource.name

							// filter
							let firstFilter = Object.keys(ele.datasource.filter)[0]
							let filterParam = " WHERE "
							for (const key in ele.datasource.filter) {
								if(key != firstFilter) {
									filterParam = " AND "
								}
								sql_str = sql_str + filterParam + key + " LIKE '%" + ele.datasource.filter[key]+ "%'"
							}

							// sorts
							for (const key in ele.datasource.sort) {
								sql_str = sql_str + " ORDER BY " + key
								if (ele.datasource.sort[key] < 0) {
									sql_str = sql_str + " desc "
								}
							}

							// pages
							sql_str = sql_str + " LIMIT " + ele.datasource.batch_size
							sql_str = sql_str + " OFFSET " + (isAppend ? ele.datasource.data.length : 0).toString()
							return sql_str
						}

						const url = "https://api.pharbers.com/phchproxyquery"
						const accessToken = ele.getCookie("access_token") || "40b497e35c1ed944d72b796d317610a0d42ffe22914976741a2b90c085287e15"
						let body = {
							"query": buildQueryString(),
							"schema": ele.schema
						}
						let options = {
							method: "POST",
							headers: {
								"Authorization": accessToken,
								'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
								"accept": "application/json"
							},
							body: JSON.stringify(body)
						}
						return fetch(url, options)
					},
					refreshData: (ele) => {
						ele.datasource.buildQuery(ele)
							.then((response) => response.json())
							.then((response) => {
								ele.datasource.data = response.map(ele.datasource.adapter)
								ele.needRefresh++
							})
					},
					appendData: (ele) => {
						ele.datasource.buildQuery(ele, true)
							.then((response) => response.json())
							.then((response) => {
								ele.datasource.data = ele.datasource.data.concat(response.map(ele.datasource.adapter))
								ele.cur_page++
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
					// 没有请求接口的数据
					if(this.datasource.adapter && col_index === row.length - 1) {
						return
					}
					const pos = that.getCellPosition(row_index, col_index)
					let text
					if(this.datasource.adapter) {
						text = that.datasource.data[row_index + start_index][col_index+1]
					} else {
						text = that.datasource.data[row_index + start_index][col_index]
					}
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
			if (this.isNeedKeyBoardEvent) {
				this.$refs.hidden.focus()
			}
		},
		sortHandler(event) {
			if (this.isNeedKeyBoardEvent) {
				this.$refs.hidden.focus()
				// 暂时只能一个排序
				const tmp = this.datasource.sort[event.target.firstChild.data]
				if (tmp && tmp > 0) {
					this.datasource.sort[event.target.firstChild.data] = -1
				} else {
					this.datasource.sort = {}
					this.datasource.sort[event.target.firstChild.data] = 1
				}
				this.dataRefresh++
			}
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

				if (this.cur_page > this.datasource.data.length / this.page_size - 1) {
					this.dataAppend++
				} else {
					that.cur_page = that.cur_page > that.datasource.data.length / that.page_size - 1 ?
						that.datasource.data.length / that.page_size - 1 : that.cur_page
					that.needRefresh++
				}
				break
			}
			case "Space": {
				let cur_page_row = this.cur_page * this.page_size + this.cur_row
				let cur_data = this.datasource.data[cur_page_row]
				const event = new Event("event")
				event.args = {
					callback: "modelData",
					element: this,
					param: {
						data: cur_data
					}
				}
				this.$emit('showModel', event)
				break
			}}
		}
	},
	watch: {
		needRefresh(n, o) {
			this.render()
		},
		dataRefresh(n, o) {
			this.datasource.data = []
			this.datasource.refreshData(this)
		},
		dataAppend(n, o) {
			this.datasource.appendData(this)
		}
	}
};
</script>
<style lang="scss">
	.excel_container {
		.viewport {
			overflow-x: auto;
			position: relative;
			.body {
				// overflow: auto;
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
