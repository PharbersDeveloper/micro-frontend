<template>
    <div class="max-saas-import">
        <!-- <div class="header">
            <img src="https://www.pharbers.com/public/img_logo_ph_theme.svg" class="logo" alt="">
            <img src=" " class="user-img" alt="">
        </div> -->
        <div class="main">
            <div class="import-introduction">
                <div class="import-message">
                    <span class="heading-large" @click="clickfile">导入<span class="body-secondary ml-2">de522809-937c-5</span></span>
                    <span class="body-tertiary">上次更新时间 17 Oct,2020 22:45</span>
                </div>
                <!-- <button @click="confirmImport">确认导入</button> -->
            </div>

            <div class="file-main">
                <div class="file-left-container">
                    <span class="heading-small">源文件：{{allData.fileName}}</span>
                    <div class="source-content-container ">
                        <div class="source-border">
                            <bp-excel :cols="allData.schemas" :datasource="sourceData" :page_size="5" v-if="sonRefresh"></bp-excel>
                        </div>

                         <bp-select-vue choosedValue="" :src="selectIcon" iconClass="select-icon">
                            <bp-option-vue text="自定映射" :disabled=true @click="mappingClick"></bp-option-vue>
                            <bp-option-vue text="显示条目" :disabled=true></bp-option-vue>
                            <bp-option-vue text="换一批" :disabled=true></bp-option-vue>
                            <bp-option-vue text="显示全部" :disabled=true></bp-option-vue>
                        </bp-select-vue>
                    </div>
                    <span class="heading-small">目标文件</span>
                    <div class="target-content-container ">
                        <div class="target-border">
                            <bp-excel name="targer" :viewHeight="1250"></bp-excel>
                        </div>
                        <bp-select-vue choosedValue="" :src="selectIcon" iconClass="select-icon">
                            <!-- <bp-option-vue text="显示条目" :disabled=true></bp-option-vue>
                            <bp-option-vue text="换一批" :disabled=true></bp-option-vue>
                            <bp-option-vue text="显示全部" :disabled=true></bp-option-vue> -->
                        </bp-select-vue>
                    </div>
                </div>

                <div class="file-right-container">
                    <import-file-list @clickfile="clickfile" :lists="allData.assets" :stateList="allData.mapperAssets"></import-file-list>
                </div>
            </div>
        </div>
        <mapping-box v-if="mappingModelShow" @cancel="closeMappingModal" :fileName="allData.fileName" :sourceList="allData.schemas" :targetList="allData.targetNames" @confirmMappingEvent="confirmMappingEvent" :projectData="middleList"></mapping-box>
        <!-- 进度条 -->
        <div v-if="closeuploadToast == '0'"
            class="upload-toast" 
            :class="[
                {'upload-toast-border-green': uploadToastBorder == 'green'},
                {'upload-toast-border-blue': uploadToastBorder == 'blue'},
                {'upload-toast-border-red': uploadToastBorder == 'red'}
            ]">
            <div class="upload-toast-img-container">
                <div :class="[
                    {'check_circle-24px': uploadToastBorder == 'green'},
                    {'upload-24px': uploadToastBorder == 'blue'},
                    {'cancel-24px': uploadToastBorder == 'red'}
                ]"></div>
            </div>
            <bp-text class="size-14-6B7376">{{uploadTextStatus}}</bp-text>
            <bp-text class="size-12-6B7376">{{uploadText}}</bp-text>
            <!-- 进度条 -->
            <div class="progress" v-if="showProgress == '1'"> 
                <span class="meter" :style="{width:proBar+'%',}" >{{proBar}}%</span> 
            </div> 
            <!-- <bp-text class="size-12-6B7376" v-if="showProgress == '1'">
                {{formatFileSize(uploadLoadedSize)}} / {{formatFileSize(uploadFileSize)}}
            </bp-text> -->
            <div class="upload-toast-close-container" @click="closeToast" v-if="uploadToastBorder != 'blue'">
                <div class="cross"></div>
            </div>
        </div>
    </div>
</template>

<script>
import mappingBox from '../mapping-box.vue'
import importFileList from '../import-file-list.vue'
import bpExcel from '../bp-excel.vue'
import bpSelectVue from '../../../node_modules/vue-components/src/components/bp-select-vue.vue'
import bpText from '../../../node_modules/vue-components/src/components/bp-text.vue'
import bpOptionVue from '../../../node_modules/vue-components/src/components/bp-option-vue.vue'
export default {
	components: {
		importFileList,
		bpSelectVue,
		bpOptionVue,
		mappingBox,
		bpExcel,
		bpText
	},
	data() {
		return {
			mappingModelShow: false,
			fileIndex: 0,
			middleList: [],
			jobLogs: null,
			proBar: 0,
			selectIcon: "https://s3.cn-northwest-1.amazonaws.com.cn/deploy.pharbers.com/public/icon_more-horizontal.svg",
			sourceData: {
				data: [
					['安徽省', '蚌埠市', '2019', '1', '1', '230461', 'N01AH03', '舒芬太尼', '舒芬太尼', 'A', '50 UG 1 ML', '1', '240835', '4800', 'SOLN', 'IJ', '宜昌人福药业有限责任公司']
				],
				sql: "",
				refreshData:(ele) => {
					ele.needRefresh++
				},
				appendData: (ele, cb) => {
					cb()
				}
			},
			sonRefresh: true
		}
	},
	methods: {
		// 关闭进度条
		closeToast() {
			const event = new Event("event")
			event.args = {
				callback: "closeToast",
				element: this,
				param: {
					name: 'closeToast',
					value: 0
				}
			}
			this.$emit('event', event)
		},
		//点击文件，或确认导入
		clickfile(data) {
			let that = this;
			this.fileIndex = data.args.param.select
			data.args.param.readNumber = this.allData.readNumber
			if(data.args.param.name == "import") {
				//进度条
				this.proBar = 0;
				var clearInt = setInterval(function() { 
					that.proBar++; 
					console.log(that.proBar); 
					if (that.proBar >= 60) { 
						clearInterval(clearInt); 
					} 
				}, 60)
			}
			this.$emit('event', data)
		},
		mappingClick() {
			this.mappingModelShow = true
		},
		closeMappingModal() {
			this.mappingModelShow = false
		},
		confirmMappingEvent(data) {
			data.args.param.userData = this.allData.userData
			data.args.param.fileData = this.allData.assets[this.fileIndex]
			this.$emit('event', data)
			this.mappingModelShow = false
		}
	},
	props: {
		allData: {
			type: Object,
			default: function() {
				return {
					assets: [],//文件列表
					schemas: ['省', '城市', '年', '季度', '月', '医院编码', 'ATC编码', '药品名称', '商品名', '包装', '规格', '包装数量', '金额（元）', '数量(支/片)', '剂型', '给药途径', '生产企业'],//源数据表头
					targetNames: [],//目标文件表头
					fileName: '',
					mapperAssets: [], //列表状态
					sourceData: [],
					readNumber: 1
				}
			}
		},
		random: Number,
		uploadToastBorder: String,
		uploadTextStatus: {
			type: String,
			default: "正在上传"
		},
		uploadText: String,
		closeuploadToast: {
			type: String,
			default: '1'
		},
		showProgress: {
			type: String,
			default: '0'
		},
		uploadLoadedSize: Number,
		uploadFileSize: Number
	},
	watch: {
		random: function() {
			this.$forceUpdate()
			this.middleList = []
			if(this.allData.eventName == "clickFile") {
				//刷新数据
				this.sonRefresh= false;
				//获取源文件列表数据
				this.sourceData.data = this.allData.sourceData
				this.$nextTick(() => {
					this.sonRefresh= true;
				});
			}
			//点击文件列表
			if(this.allData.eventName == "clickFile" && this.allData.jobLogs.length > 0) {
				//需要更新mapping数据
				let jobdatas = this.allData.jobLogs.filter(it => it.jobDesc == "mapped")
				//已创建映射
				let message = JSON.parse(jobdatas[jobdatas.length - 1].message)
				this.middleList = message.mapper
			} else if(this.allData.eventName == "clickFile" && this.allData.jobLogs < 1) {
				//未创建映射
				this.allData.targetNames.forEach(item => {
					let it = {}
					it[item] = ''
					this.middleList.push(it)
				})
			}
		},
		"allData.jobLogs": function(data) {
			//第一次进入页面 渲染mapping弹框数据
			this.middleList = []
			if(this.allData.jobLogs.length > 0) {
				let jobdatas = this.allData.jobLogs.filter(it => it.jobDesc == "mapped")
				//已创建映射
				let message = JSON.parse(jobdatas[jobdatas.length - 1].message)
				this.middleList = message.mapper
			} else {
				//未创建映射
				this.allData.targetNames.forEach(item => {
					let it = {}
					it[item] = ''
					this.middleList.push(it)
				})
			}
		},
		uploadLoadedSize: function() {
			console.log("uploadLoadedSize", this.uploadLoadedSize)
			this.proBar = this.uploadLoadedSize
		},
		"allData.sourceData": function(data) {
			this.sourceData.data = data
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

    @mixin btn_primary-initial {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
        line-height: 20px;
        font-weight: 500;
    }

    @mixin body-primary {
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #25232D;
        letter-spacing: 0.25px;
        line-height: 20px;
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
        margin-bottom: 12px;
    }

    .max-saas-import {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 80px 24px 24px;
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
            margin-bottom: 20px;
            flex: 1;
            .import-introduction {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                margin-bottom: 20px;
                .import-message {
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

            .file-main {
                display: flex;
                height: 100%;
                flex: 1;
                .file-right-container {
                    min-width: 218px;
                }
                .file-left-container {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
					overflow: hidden;
                    border-right: 1px solid rgba(37,35,45,0.08);
                    margin-right: 20px;
                    padding-right: 9px;
                    .bp-select {
                        width: 24px;
                        height: 24px;

                        /deep/.bp-select-title {
                            padding: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        /deep/.bp-option-group {
                            width: 81px;
							position: absolute;
							right: 0px;
                            .bp-option {
                                padding: 0 12px;
                                @include body-primary;
                            }
                        }
                    }
                    .source-content-container {
                        display: flex;
                        margin-bottom: 20px;
                        width: 100%;
						padding-right: 30px;
                        .source-border {
                            width: 100%;
                            height: 130px;
                            border: 1px solid rgba(37,35,45,0.12);
                            border-radius: 2px;
                            padding: 4px;
                            margin-right: 4px;
							// overflow: hidden;
                        }
						.select-icon {
							width: 24px !important;
						}
                    }

                    .target-content-container {
                        display: flex;
                        width: 100%;
                        .target-border {
                            width: 100%;
							height: calc(100vh - 400px);
                            border: 1px solid rgba(37,35,45,0.12);
                            border-radius: 2px;
                            padding: 4px;
                            margin-right: 4px;
							overflow: hidden;
							/deep/.excel_container {
								height: calc(100vh - 400px);
								overflow: auto;
							}
							/deep/.viewport {
								overflow-y: hidden !important;
							}
                        }
                    }
                }
            }
        }
        //与upload-toast是一体的
        .upload-toast-border-blue {
            border-left: 2px solid #1C9DD9;
        }

        .upload-toast-border-green {
            border-left: 2px solid #78A013;
        }

        .upload-toast-border-red {
            border-left: 2px solid #E74D32;
        }

        .upload-toast {
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 24px;
            right: 24px;
            width: 320px;
            height: 36px;
            background: #FFF;
            box-shadow: 0 0 1px 0 rgba(7, 10, 14, 0.12), 0 8px 16px -4px rgba(9, 30, 66, 0.25);
            border-radius: 2px; 
            span {
                display: flex;
                align-items: center;
            }
            .upload-toast-img-container {
                display: flex;
                align-items: center;
                margin: 0 8px 0 16px;
                //底部上传弹窗小icon
                .check_circle-24px {
                    width: 16px;
                    height: 16px;
                    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' fill='%2378A013' /%3E%3C/svg%3E") no-repeat center/100% !important;
                }
                .cancel-24px {
                    width: 16px;
                    height: 16px;
                    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none' opacity='.87'/%3E%3Cpath d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z' fill='%23E74D32' /%3E%3C/svg%3E") no-repeat center/100% !important;
                }
                .upload-24px {
                    width: 16px;
                    height: 16px;
                    background: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cpath d='M384 682.667v-256H213.333L512 128l298.667 298.667H640v256H384M213.333 853.333V768h597.334v85.333H213.333z' fill='%231C9DD9' /%3E%3C/svg%3E") no-repeat center/100% !important;
                }
            }
            .size-14-6B7376 {
                font-size: 14px;
                color: #6B7376;
                margin-right: .5rem!important;
            }
            .size-12-6B7376 {
                font-family: Lato-Regular;
                font-size: 12px;
                color: #6B7376;
                line-height: 16px;
            }
            .progress {
                background-color: #F6F6F6;
                border: 1px solid #fff;
                height: 20px;
                padding: 0.125rem;
                width: 180px;
                border-radius: 1000px;
                .meter {
                    background: #1b9dd9;
                    display: block;
                    height: 100%;
                    float: left;
                    width: 100%;
                    border-radius: 999px;
                    color: #fff;
                    text-align: center;
                    font-size: 12px;
                }
            }
            .upload-toast-close-container {
                position: absolute;
                right: 16px;
                top: 10px;
                .cross {
                    width: 16px;
                    height: 16px;
                    background: url("data:image/svg+xml,%3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%2351585C' d='M512 451.66l225.83-225.83c16.662-16.662 43.678-16.662 60.34 0 16.662 16.662 16.662 43.678 0 60.34L572.34 512l225.83 225.83c16.662 16.662 16.662 43.678 0 60.34-16.662 16.662-43.678 16.662-60.34 0L512 572.34 286.17 798.17c-16.662 16.662-43.678 16.662-60.34 0-16.662-16.662-16.662-43.678 0-60.34L451.66 512 225.83 286.17c-16.662-16.662-16.662-43.678 0-60.34 16.662-16.662 43.678-16.662 60.34 0L512 451.66z'/%3E%3C/svg%3E") no-repeat center/100%;
                }
            }
        }
    }
</style>
