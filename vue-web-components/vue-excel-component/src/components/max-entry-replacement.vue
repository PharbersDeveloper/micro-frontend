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
                    <span class="mb-1 heading-xsmall">Name_1</span>
                    <input type="text" placeholder="yang">
                </div>

                <div class="single-search">
                    <span class="mb-1 heading-xsmall">Name_1</span>
                    <input type="text" placeholder="yang">
                </div>
            </div>

            <div class="entry-search-right">
                <button class="filter-button mr-2">
                    <div class=""></div>
                    <span class="btn_secondary_initial">筛选条件</span>
                </button>

                <button class="search-button btn_primary-initial">搜索</button>
            </div>
        </div>

        <div class="source-entry-container">
            <span class="heading-small">源条目</span>
            <div class="source-entry-border">
                <bp-excel :data="sourceData" :colHeaders="sourceColHeaders"></bp-excel>
            </div>
        </div>

        <div class="master-container">
            <span class="heading-small">Master文件检索结果</span>
            <div class="master-border">
                <bp-excel :data="masterData" :colHeaders="masterColHeaders"></bp-excel>
            </div>
        </div>

        <div class="button-container">
            <button class="btn_secondary_initial cancel-button" @click="close">取消</button>
            <button class="btn_secondary_initial">确认替换</button>
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
		visible: this.showDialog
	},
	watch: {
		immediate:true,
		visible(val) {
			this.showDialog = val
		}
	},
	props: {
		showDialog: {
			type: Boolean,
			default: false
		},
		sourceData: {
			type: Array,
			default() {
				return [
					['000,000,000', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder']
				]
			}
		},
		sourceColHeaders: {
			type: Array,
			default() {
				return ['','Name_1','Name_2','Name_3','Name_4','Name_5','Name_6','Name_7','Name_8']
			}
		},
		masterData: {
			type: Array,
			default() {
				return [
					['000,000,000', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder'],
					['000,000,000', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder'],
					['000,000,000', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder'],
					['000,000,000', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder'],
					['000,000,000', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder'],
					['000,000,000', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder'],
					['000,000,000', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder']
				]
			}
		},
		masterColHeaders: {
			type: Array,
			default() {
				return ['','Name_1','Name_2','Name_3','Name_4','Name_5','Name_6','Name_7','Name_8']
			}
		}
	},
	methods: {
		close() {
			this.$emit('dialog-visible',false)
			this.$parent.show()
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
			overflow: hidden;
		
			
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
            padding: 0 20px;

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