<template>
    <div class="max-entry-replacement">
			<div class="max-entry-area">
			<div class="entry-header">
            <span>条目替换</span>
            <div class="icon_cross cursor-pointer" @click="close"></div>
        </div>

        <div class="entry-search-container">
            <div class="entry-search-left">
                <div class="single-search mr-3">
                    <span class="mb-1 heading-xsmall">通用名</span>
                    <input type="text" placeholder="请输入" v-model="dnValue">
                </div>

                <div class="single-search">
                    <span class="mb-1 heading-xsmall">生产厂商</span>
                    <input type="text" placeholder="请输入" v-model="fnpyValue">
                </div>
            </div>

            <div class="entry-search-right">
                <button class="filter-button mr-2">
                    <div class=""></div>
                    <span class="btn_secondary_initial">筛选条件</span>
                </button>

                <button class="search-button btn_primary-initial" @click="search">搜索</button>
            </div>
        </div>

        <div class="source-entry-container">
            <span class="heading-small">源条目</span>
            <div class="source-entry-border">
                <bp-excel :datasource="sourceData" :page_size="1" v-if="sonRefresh" :isNeedKeyBoardEvent="false"></bp-excel>
            </div>
        </div>

        <div class="master-container">
            <span class="heading-small">Master文件检索结果</span>
            <div class="master-border">
                <bp-excel :cols="cols" :schema="schemaData"  :viewHeight="300" :page_size="10" :datasource="sourceDataMaster" v-if="masterRefresh" ref="masterExcel"></bp-excel>
            </div>
        </div>

        <div class="button-container">
            <button class="btn_secondary_initial cancel-button" @click="close">取消</button>
            <button class="btn_secondary_initial" @click="confirm">确认替换</button>
        </div>
		</div>
    </div>
</template>

<script>
import bpExcel from './bp-excel.vue'
export default {
	components: {
		bpExcel
	},
	data() {
		return {
			dnValue: '',
			fnpyValue: '',
			paramQuery: "SELECT * FROM clean_master LIMIT 100",
			schemaData: ["id", "dn", "fnpy", "notes", "csn", "esn", "name", "ename", "fcode", "manu", "specifi", "lpd", "packcode", "inprice", "launchdate", "pzwh", "otcflag", "otherflag", "chccode", "who_atc", "local_chc", "pre_fix", "sur_fix", "manu_id"],
			cols: ["dn", "fnpy", "notes", "csn", "esn", "name", "ename", "fcode", "manu", "specifi", "lpd", "packcode", "inprice", "launchdate", "pzwh", "otcflag", "otherflag", "chccode", "who_atc", "local_chc", "pre_fix", "sur_fix", "manu_id"],
			masterRefresh: true,
			sourceData: {
				data: [],
				name: "clean_master",
				refreshData:(ele) => {
					ele.needRefresh++
				},
				appendData: (ele, cb) => {
					cb()
				}
			},
			sourceDataMaster: {
				data: [],
				sort: {},
				filter: {},
				name: "clean_master",
				batch_size: 200,
				adapter: (row) => [row.id, row.dn ? row.dn : '', row.fnpy ? row.fnpy : '', row.notes ? row.notes : '', row.csn ? row.csn: '', row.esn ? row.esn: '', row.name ? row.name : '', row.ename ? row.ename : '', row.fcode ? row.fcode : '', row.manu ? row.manu : '', row.specifi ? row.specifi : '', row.lpd ? row.lpd : '', row.packcode ? row.packcode : '', row.inprice ? row.inprice : '', row.launchdate ? row.launchdate : '', row.pzwh ? row.pzwh : '', row.otcflag ? row.otcflag : '', row.otherflag ? row.otherflag : '', row.chccode ? row.chccode : '', row.who_atc ? row.who_atc : '', row.local_chc ? row.local_chc : '', row.pre_fix ? row.pre_fix : '', row.sur_fix ? row.sur_fix : '', row.manu_id ? row.manu_id : ''],
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
						sql_str = sql_str + " OFFSET " + (isAppend ? 0 : ele.datasource.data.length).toString()
						console.log(ele.datasource.sort)
						console.log(sql_str)
						return sql_str
					}

					const url = "https://api.pharbers.com/phchproxyquery"
					const accessToken = ele.getCookie("access_token") || "d5c8e917402c60e2d44e235ee52427b1feda4e9351f3a591b2aa910f9efbe939"
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
				refreshData:(ele) => {
					ele.datasource.buildQuery(ele)
						.then((response) => response.json())
						.then((response) => {
							ele.datasource.data = response.map(ele.datasource.adapter)
							ele.needRefresh++
						})
				},
				appendData: (ele, cb) => {
					ele.datasource.buildQuery(ele, true)
						.then((response) => response.json())
						.then((response) => {
							ele.datasource.data = ele.datasource.data.concat(response.map(ele.datasource.adapter))
							ele.cur_page++
							ele.needRefresh++
						})
				}
			},
			sonRefresh: true
		}
	},
	props: {
		showDialog: {
			type: Boolean,
			default: false
		},
		sourceArr: Array,
		excelComponent: Object,
		provider: String,
		dt: String
	},
	methods: {
		getCookie(name) {
			let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
			if (arr = document.cookie.match(reg))
				return (arr[2]);
			else
				return null;
		},
		close() {
			this.$emit('dialog-visible',false)
		},
		search() {
			if(this.dnValue && this.dnValue != '') {
				this.sourceDataMaster.filter["csn"] = this.dnValue
			}
			if(this.fnpyValue && this.fnpyValue != '') {
				this.sourceDataMaster.filter["manu"] = this.fnpyValue
			}
			if(this.dnValue == '' && this.fnpyValue == '') {
				this.sourceDataMaster.filter = {}
			}
			this.sourceDataMaster.filter["dt"] = this.dt
			this.sourceDataMaster.filter["provider"] = this.provider
			// 刷新子组件数据
			this.masterRefresh= false;
			this.$nextTick(() => {
				this.masterRefresh= true;
			});
		},
		confirm() {
			let id = this.sourceArr[0] // source表的id
			let cur_page_row = this.$refs.masterExcel.cur_page * this.$refs.masterExcel.page_size + this.$refs.masterExcel.cur_row //master表当前行数
			let cur_data = this.sourceDataMaster.data[cur_page_row] //master表当前行数据
			let fcode = cur_data[8]
			const url = "https://api.pharbers.com/phchproxyupdate"
			const accessToken = this.getCookie("access_token") || "d5c8e917402c60e2d44e235ee52427b1feda4e9351f3a591b2aa910f9efbe939"
			let body = {
				"query": `ALTER TABLE clean_source UPDATE pkc='${fcode}' WHERE id='${id}'`
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
			fetch(url, options).then((response) => {
				const event = new Event("event")
				event.args = {
					callback: "refresh",
					element: this,
					param: {
						fcode: fcode
					}
				}
				this.$emit('refreshData', event)
			})
		}
	},
	watch: { 
		sourceArr: function(data) {
			this.sourceData.data = []
			this.sourceData.data.push(data)
			//搜索条件
			this.fnpyValue = this.sourceArr[6]
			this.search()
			// 刷新source表单组件数据
			this.sonRefresh= false;
			this.$nextTick(() => {
				this.sonRefresh= true;
			});
		}
	}
}
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    .cursor-pointer {
        cursor: pointer;
    }

    .heading-xsmall {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #706F79;
        letter-spacing: 0.25px;
        text-align: left;
        line-height: 16px;
        font-weight: 400;
    }

    .heading-small {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #25232D;
        letter-spacing: 0.25px;
        text-align: left;
        line-height: 20px;
        font-weight: 400;
    }

    .btn_secondary_initial {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #57565F;
        letter-spacing: 0;
        line-height: 20px;
        font-weight: 500;
    }

    .btn_primary-initial {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
        line-height: 20px;
        font-weight: 500;
    }

    .icon_cross {
        width: 20px;
        height: 20px;
        background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.784 5.089l.07.057L10.5 9.793l4.646-4.647a.5.5 0 0 1 .765.638l-.057.07-4.647 4.646 4.647 4.646a.5.5 0 0 1-.638.765l-.07-.057-4.646-4.647-4.646 4.647a.5.5 0 0 1-.765-.638l.057-.07L9.793 10.5 5.146 5.854a.5.5 0 0 1 .638-.765z' fill='%2357565F' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center/100% !important; 
    }

    .mb-1 {
        margin-bottom: 4px;
    }

    .mr-2 {
        margin-right: 8px;
    }

    .mr-3 {
        margin-right: 12px;
    }

    input {
        border: 1px solid #E1DFE9;
        border-radius: 2px;
        outline: 0;
        padding: 8px;

        &::placeholder {
            font-family: SFProText-Regular;
            font-size: 14px;
            color: #A3A1AB;
            font-weight: 400;
        }
    }

    button {
        border: 0;
        outline: 0;
        cursor: pointer;
    }
    .max-entry-replacement {
		height: 100vh;
   	 	width: 100vw;
    	background: rgba(37, 35, 45, 0.55);
    	display: flex;
    	flex-direction: row;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		right: 0;
		z-index: 9999;
		.max-entry-area {
			width: 1080px;
			height: 718px;
			background-color: #fff;
		}
        .entry-header {
            display: flex;
            height: 55px;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            background-color: #FAFBFC;
            margin-bottom: 20px;
            border-bottom: 1px solid rgba(37,35,45,0.08);
        }

        .entry-search-container {
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            margin-bottom: 32px;

            .entry-search-left {
                display: flex;

                .single-search {
                    display: flex;
                    flex-direction: column;

                    input {
                        width: 120px;
                        height: 32px;
                    }
                }
            }

            .entry-search-right {
                display: flex;
                align-self: flex-end;

                .filter-button {
                    width: 96px;
                    height: 32px;
                    background-color: rgba(37, 35, 45, 0.04);
                    border-radius: 2px;
                }

                .search-button {
                    width: 80px;
                    height: 32px;
                    background: #7163C5;
                    border-radius: 2px;
                }
            }
        }

        .source-entry-container {
            display: flex;
            flex-direction: column;
            padding: 0 20px;

            .source-entry-border {
                display: flex;
                border: 1px solid rgba(37,35,45,0.12);
                border-radius: 2px;
                margin-top: 12px;
                height: 64px;
                overflow: hidden;
            }
        }

        .master-container {
            display: flex;
            flex-direction: column;
            margin: 25px 0 35px;
            padding: 0 20px;
			height: 320px;

            .master-border {
                border: 1px solid rgba(37,35,45,0.12);
                border-radius: 2px;
                height: 320px;
            }
        }

        .button-container {
            display: flex;
            justify-content: flex-end;
            padding: 20px;

            .cancel-button {
                margin-right: 4px;
                background-color: #fff;
            }

            button {
                width: 80px;
                height: 32px;
            }
        }
    }

</style>