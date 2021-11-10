
export default class PhDefaultRenderPolicy {
	constructor(canvas, sp, ds, pp, fp, psize, focus, hasSelected=false) {
		this.canvas = canvas
		this.ctx = canvas.getContext('2d')
		this.buffer_canvas = document.createElement('canvas')
		this.buffer_ctx = this.buffer_canvas.getContext('2d')

		this.sizePolicy = sp
		this.palettePolicy = pp
		this.datasource = ds
		this.fontPolicy = fp
		this.page_size = psize
		this.hidden = focus
		this.hasSelected = hasSelected
	}

	render(cur_row, cur_page) {
		this.beforeRender()
		this.borderRender()
		this.gridRender()
		this.textRender(cur_page)
		if (this.hasSelected)
			this.selectRender(cur_row)
		this.afterRender()
	}

	beforeRender() {
		const hit_size = this.sizePolicy.sheetHitSize(this.datasource.cols.length, this.page_size)
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
		this.canvas.height = hit_size.height
		this.canvas.width = hit_size.width
		this.buffer_canvas.height = hit_size.height
		this.buffer_canvas.width = hit_size.width
	}

	afterRender() {
		this.ctx.drawImage(this.buffer_canvas,
			0, 0, this.buffer_canvas.width, this.buffer_canvas.height,
			0, 0, this.buffer_canvas.width, this.buffer_canvas.height)
	}

	borderRender() {
		const ctx = this.buffer_ctx
		ctx.strokeStyle = this.palettePolicy.sheet_border_color
		ctx.lineWidth = this.sizePolicy.sheet_border_width
		ctx.save()
		ctx.beginPath()
		ctx.rect(this.sizePolicy.sheet_margin, this.sizePolicy.sheet_margin,
			this.canvas.width - 2 * this.sizePolicy.sheet_margin,
			this.canvas.height - 2 * this.sizePolicy.sheet_margin)
		ctx.stroke()
		ctx.restore()
	}

	gridRender() {
		const ctx = this.buffer_ctx
		const that = this
		// 横线
		ctx.save()
		ctx.beginPath()
		this.datasource.data.forEach((row, index) => {
			ctx.strokeStyle = that.palettePolicy.cell_border_color
			ctx.lineWidth = that.sizePolicy.cell_border_width
			{
				const y = index * that.sizePolicy.cell_hit_height + that.sizePolicy.sheet_margin
				const x1 = that.sizePolicy.sheet_margin

				// const x2 = that.canvas.width - 2 * that.sizePolicy.sheet_margin
				const x2 = that.canvas.width - that.sizePolicy.sheet_margin
				ctx.moveTo(x1, y)
				ctx.lineTo(x2, y)
			}
		})
		// 纵线
		this.datasource.cols.forEach((col, index) => {
			ctx.strokeStyle = that.palettePolicy.cell_border_color
			ctx.lineWidth = that.sizePolicy.cell_border_width
			{
				const x = index * that.sizePolicy.cell_hit_width + that.sizePolicy.sheet_margin
				const y1 = that.sizePolicy.sheet_margin
				const y2 = that.canvas.height - that.sizePolicy.sheet_margin
				ctx.moveTo(x, y1)
				ctx.lineTo(x, y2)
			}
		})
		ctx.stroke()
		ctx.restore()
	}

	textRender(cur_page) {
		const ctx = this.buffer_ctx
		ctx.save()
		ctx.beginPath()

		ctx.font = `${this.fontPolicy.font_size}px ${this.fontPolicy.font_family}`
		ctx.fillStyle = this.fontPolicy.font_color
		ctx.textAlign = this.fontPolicy.text_Align

		const that = this
		const start_index = cur_page * this.page_size
		this.datasource.data.slice(start_index, start_index + this.page_size).forEach((row, row_index) => {
			row.forEach((col, col_index) => {
				// 没有请求接口的数据
				if(this.datasource.adapter && col_index === row.length) {
					return
				}
				const pos = that.getCellPosition(row_index, col_index)
				let text = that.datasource.data[row_index + start_index][col_index]
				if (!text)
					text = ""
				ctx.fillText(text, that.sizePolicy.cell_inner_margin + pos.x,
					pos.y + that.fontPolicy.font_size + that.sizePolicy.cell_inner_margin, pos.w, pos.h)
			})
		})

		ctx.stroke()
		ctx.restore()
	}

	selectRender(cur_row) {
		const ctx = this.buffer_ctx
		ctx.save()
		ctx.beginPath()

		const x = this.sizePolicy.sheet_margin - 1
		const y = cur_row * this.sizePolicy.cell_hit_height - 1 + this.sizePolicy.sheet_margin
		const w = this.canvas.width /*- 2 * this.sizePolicy.select_border_width*/ - 2 * this.sizePolicy.sheet_margin
		const h = this.sizePolicy.cell_hit_height + 2 * this.sizePolicy.select_border_width

		ctx.fillStyle = this.palettePolicy.select_bg_color
		ctx.lineWidth = this.sizePolicy.select_border_width
		ctx.strokeStyle = this.palettePolicy.select_border_color
		ctx.fillRect(x, y, w, h)
		ctx.strokeRect(x, y, w, h)
		this.hidden.style.top = y + 'px'
	}
	getCellPosition(row, col) {
		const x = this.sizePolicy.sheet_margin + col * this.sizePolicy.cell_hit_width
		const y = this.sizePolicy.sheet_margin + row * this.sizePolicy.cell_hit_height
		const w = this.sizePolicy.cell_hit_width
		const h = this.sizePolicy.cell_hit_width
		return { x: x, y: y, w: w, h: h }
	}
}
