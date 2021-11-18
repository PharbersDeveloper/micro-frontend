<template>
    <div ref="viewport" @click="focusHandler" class="viewport" :style="{height: viewHeight, width: '100%'}" @scroll="scrollGet($event)">
	    <div class="excel-container">
		    <div class="schemas" style="width: 100%" ref="schemas">
                <div class="view" >
                    <header-item v-for="(item, index) in datasource.cols" :title="item" :itemWidth="sizePolicy.cell_hit_width" :key="index"/>
                </div>
            </div>
		</div>
		<div ref="viewport" @click="focusHandler" class="viewport" :style="{height: viewHeight}" @scroll="scrollGet($event)">
			<div class="body" :style="{height: page_size * sizePolicy.cell_hit_height +'px'}">
				<canvas ref="canvas" class="canvas"></canvas>
				<div ref="select" class="row-select"></div>
				<select class="hidden" ref="hidden" @keydown="keyPressHandler" style="width: 0px;height: 0px"></select>
			</div>
		</div>
	</div>
</template>
<script>
import PhDataSource from './model/datasource'
import PhDefaultSizePolicy from './model/sizepolicy'
import PhDefaultPalettePolicy from './model/palettepolicy'
import PhDefaultFontPolicy from './model/fontpolicy'
import PhDefaultRenderPolicy from './model/renderpolicy'
export default {
	data() {
		return {
			anchor: {x: 0, y: 0},

			// all states
			needRefresh: 0,
			dataRefresh: 0,
			dataAppend: 0,
			cur_row: 0,
			cur_page: 0,

			renderPolicy: null
		}
	},
	components: {
		headerItem:require('./bp-excel-header.vue').default
	},
	props: {
		isNeedKeyBoardEvent: {
			type: Boolean,
			default: true
		},
		viewHeight: {
			type: String,
			default: '600px'
		},
		page_size: {
			type: Number,
			default: 50
		},
		datasource: {
			type: Object,
			default: function () {
				return new PhDataSource('1')
			}
		},
		sizePolicy: {
			type: Object,
			default: function() {
				return new PhDefaultSizePolicy()
			}
		},
		palettePolicy: {
			type: Object,
			default: function() {
				return new PhDefaultPalettePolicy()
			}
		},
		fontPolicy: {
			type: Object,
			default: function() {
				return new PhDefaultFontPolicy()
			}
		}
	},
	beforeMount() {
		this.datasource.refreshData(this)
	},
	mounted() {
		this.focusHandler()
		if (this.renderPolicy == null) {
			this.renderPolicy = new PhDefaultRenderPolicy(
				this.$refs.canvas, this.sizePolicy,
				this.datasource, this.palettePolicy,
				this.fontPolicy, this.page_size,
				this.$refs.hidden,
				false
			)
		}
	},
	methods: {
		scrollGet (e) {
			this.$refs.schemas.scrollLeft = e.target.scrollLeft
		},
		getCookie(name) {
			let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
			if (arr = document.cookie.match(reg))
				return (arr[2]);
			else
				return null;
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
			this.renderPolicy.render(this.cur_row, this.cur_page)
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
	.excel-container {
		.viewport {
			overflow: auto;
			position: relative;
			display: flex;
			.body {
				// overflow: auto;
			}

        }
        .schemas {
            display: flex;
            margin-left: 0px;
            margin-right: 10px;
            overflow: hidden;
            .view {
                display: flex;
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
