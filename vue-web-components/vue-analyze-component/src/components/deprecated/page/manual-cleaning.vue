<template>
    <div class="manual-cleaning">
        <div class="header">
            <img src="https://www.pharbers.com/public/img_logo_ph_theme.svg" class="logo" alt="">
            <img src=" " class="user-img" alt="">
        </div>

        <div class="main">
            <div class="cleaning-introduction">
                <div class="cleaning-message">
                    <span class="heading-large">人工清洗<span class="body-secondary ml-2">de522809-937c-5</span></span>
                    <span class="body-tertiary">上次更新时间 17 Oct,2020 22:45</span>
                </div>
                <button >确认清洗</button>
            </div>

            <div class="cleaning-function">
                <span class="heading-small">源文件：cpa_pchc_universe</span>
                <div class="cleaning-function-buttons">
                    <button disabled>机器匹配</button>
                    <button disabled>检查匹配进度</button>
                    <button disabled>显示全部数据</button>
                </div>
            </div>
            <div class="content-container">
<!--                <bp-excel :viewHeight="1250" @showModel="showModel" ref="targerExcel"></bp-excel>-->
            </div>
        </div>
		<max-entry v-show="showDialog" :showDialog="showDialog" @dialog-visible="show" :sourceArr="source_data" :excelComponent="excelComponent" @refreshData="refreshData" :provider="allData.provider" :dt="allData.dt"></max-entry>
    </div>
</template>

<script>
// import bpExcel from '../bp-excel.vue'
import maxEntry from '../max-entry-replacement.vue'
export default {
	data() {
		return {
			showDialog: false,
			hidden:true,
			source_data: [],
			excelComponent: {}
		}
	},
	methods: {
		show(val) {
			this.showDialog = val
		},
		showModel(data) {
			this.source_data = data.args.param.data
			this.excelComponent = data.args.element
			this.showDialog = true
		},
		refreshData(data) {
			this.showDialog = false
			let fcode = data.args.param.fcode
			let cur_page_row = this.excelComponent.cur_page * this.excelComponent.page_size + this.excelComponent.cur_row //master表当前行数
			this.excelComponent.datasource.data[cur_page_row][1] = fcode
			this.excelComponent.needRefresh++
		}
	},
	components: {
		// bpExcel,
		maxEntry
	},
	props: {
		allData: {
			type: Object,
			default:  function() {
				return {
					dt: '',
					provider: ""
				}
			}
		}
	},
	watch: {
		"allData.provider": function(data) {
			this.$refs.targerExcel.datasource.filter['provider'] = this.allData.provider
			this.$refs.targerExcel.datasource.filter['dt'] = this.allData.dt
			this.$refs.targerExcel.dataRefresh++
		}
	}
}
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    .ml-2 {
        margin-left: 8px;
    }

    button {
        border: 0;
        outline: 0;
        cursor: pointer;
    }
	button:disabled {
		color: #777 !important;
	}

    @mixin btn_primary-initial {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
        line-height: 20px;
        font-weight: 500;
    }

    .heading-large {
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #25232D;
        letter-spacing: 0.25px;
        line-height: 28px;
        font-weight: 400;
    }

    .body-secondary {
        font-family: SFProText-Light;
        font-size: 14px;
        color: #706F79;
        letter-spacing: 0.25px;
        line-height: 20px;
        font-weight: 200;
    }

    .body-tertiary {
        font-family: PingFangSC-Light;
        font-size: 12px;
        color: #706F79;
        letter-spacing: 0.25px;
        line-height: 16px;
        font-weight: 200;
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

    @mixin btn_secondary_initial {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #57565F;
        letter-spacing: 0;
        text-align: center;
        line-height: 20px;
        font-weight: 500;
    }

    .manual-cleaning {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .header {
            display: flex;
            width: 100%;
            height: 72px;
            justify-content: space-between;
            align-items: center;
            background: #FFFFFF;
            box-shadow: 0 0 1px 0 rgba(37,35,45,0.12), 0 1px 1px 0 rgba(37,35,45,0.25);
            padding: 0 20px;
            margin-bottom: 20px;
            flex-shrink: 0;

            .logo {
                width: 100px;
                height: 32px;
            }

            .user-img {
                width: 32px;
                height: 32px;
            }
        }

        .main {
            display: flex;
            flex-direction: column;
            padding: 0 20px;
            margin-bottom: 20px;
            flex-grow: 1;

            .cleaning-introduction {
                display: flex;
                justify-content: space-between;
                margin-bottom: 20px;

                .cleaning-message {
                    display: flex;
                    flex-direction: column;
                }

                button {
                    width: 82px;
                    height: 32px;
                    background: #7163C5;
                    border-radius: 2px;
                    @include btn_primary-initial;
                }
            }

            .cleaning-function {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;

                .cleaning-function-buttons {
                    display: flex;
                    justify-content: space-between;

                    button {
                        height: 24px;
                        background: rgba(37, 35, 45, 0.04);
                        border-radius: 2px;
                        padding: 0 12px;
                        margin-right: 8px;
                        @include btn_secondary_initial;

                        &:last-of-type {
                            margin-right: 0;
                        }
                    }
                }
            }

            .content-container {
                height: calc(100vh - 220px);
				overflow: auto;
                border: 1px solid rgba(37,35,45,0.12);
                border-radius: 2px;
                padding: 4px;
				/deep/.viewport {
					overflow-y: hidden !important;
				}
            }
        }
    }
</style>
