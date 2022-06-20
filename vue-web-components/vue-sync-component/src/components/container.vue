<template>
    <div class="sync">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="sync_header">
            <div class="header_left">
                <img :src="defs.iconsByName('prepare')" alt="" />
                <span>Sync</span>
            </div>
            <div class="header_right">
                <el-button class="save" @click="save">保存</el-button>
            </div>
        </div>
        <div class="sync_area">
            <div class="sync_left">
                <div class="content"  v-show="!selectInput">
                    <div class="content-column">
                        <span>Input</span>
                        <el-input readonly v-model="inputDsName"></el-input>
                        <el-button type="primary" @click="selectInput=!selectInput">更改数据集</el-button>
                    </div>
                </div>
				<div class="input-for-select" v-show="selectInput">
					<div class="search">
						<el-form label-width="60px">
							<el-form-item label="搜索">
								<el-input
									placeholder="搜索"
									v-model="searchInputName"></el-input>
							</el-form-item>
						</el-form>
						<i 
							@click="selectInput=!selectInput"
							class="el-icon-close pointer"></i>
					</div>
					<ul class="list">
						<li 
							@click="selectInputItem(item)"
							class="addInput pointer" 
							:key="item+'input'" 
							v-for="item in inArray">
							<i class="el-icon-plus pointer mr-4"></i>
							{{item}}
						</li>
					</ul>
				</div>
            </div>
            <div class="sync_divider"></div>
            <div class="sync_right">
                <div class="content" v-show="!selectOutput">
                    <div class="content-column">
                        <span>Output</span>
                        <el-input readonly v-model="outputDsName"></el-input>
                        <el-button type="primary" @click="selectOutput=!selectOutput">更改数据集</el-button>
                    </div>
                </div>
				<div class="input-for-select" v-show="selectOutput">
					<div class="search">
						<el-form label-width="60px">
							<el-form-item label="搜索">
								<el-input
									placeholder="搜索"
									v-model="searchInputName"></el-input>
							</el-form-item>
						</el-form>
						<i class="el-icon-close pointer" 			
							@click="selectOutput=!selectOutput"></i>
					</div>
					<ul class="list">
						<li 
							@click="selectOutputItem(item)"
							class="addInput pointer" 
							:key="item+'output'" 
							v-for="item in outArray">
							<i class="el-icon-plus pointer mr-4"></i>
							{{item}}
						</li>
					</ul>
				</div>
            </div>
        </div>
    </div>
</template>
<script>
import PhDagDefinitions from './policy/definitions/definitions'
import ElButton from 'element-ui/packages/button/index'
import ElInput from 'element-ui/packages/input/index'

export default {
    components: {
        ElButton,
        ElInput,
    },
    data() {
        return {
            inputDsName: this.getUrlParam("inputName"),
            outputDsName: this.getUrlParam("outputName"),
            selectInput: false,
            selectOutput: false,
            outputsArray: [],
            inputsArray: [],
            searchInputName: ""
        }
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    projectId: "YZYijD17N9L6LXx",
                    projectName: "autorawdata2021",
                    scriptsParams: null,
                    dss: []
                }
            }
        },
        defs: {
            type: Object,
            default: function() {
                return new PhDagDefinitions(1)
            }
        },
        outputs: Array,
        inputs: Array,
        inArray: Array,
        outArray: Array
    },
    methods: {
        getUrlParam(value) {
            let href = window.location.href
            let paramArr = href.split("?")[1].split("&")
            let data = paramArr.find(item => item.indexOf(value) > -1)
            return data ? decodeURI(data).split("=")[1] : undefined
        },
        getJobName() {
            let jobShowName = this.getUrlParam("jobShowName") ? this.getUrlParam("jobShowName") : this.getUrlParam("jobName")
            return [this.projectName, this.projectName, this.flowVersion, jobShowName].join("_")
        },

        save() {
			const event = new Event("event")
			event.args = {
				callback: "saveSync",
				element: this,
				param: {
					name: "saveSync",
					projectId: this.projectId,
					projectName: this.projectName
				}
			}
			this.$emit('event', event)
        },
        changeInputDsName() {

        },
        changeOutputDsName() {

        }
    },
    mounted() {
        this.projectId = this.getUrlParam("projectId")
        this.projectName = this.getUrlParam("projectName")
        this.jobName = this.getJobName()
        this.inputDsName = this.getUrlParam("inputName")
    },

    watch: {
        "inputs": function(n) {
            this.inputsArray = n
        },
		"outputs": function(n) {
            this.outputsArray = n
		}
    }
}
</script>
<style lang="scss">
    .sync {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;\

		.pointer {
			cursor: pointer;
		}
		.left {
			flex: 1;
			padding: 20px;
		}
		.right {
			flex: 1;
			padding: 20px;
		}
		.title {
			margin-bottom: 10px;
		}

        .op-factories {
            // background: red;
        }

        .sync_header {
            height: 48px;
            padding: 0 15px;
            border-bottom: 1px solid #cccccc;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .header_left {
                display: flex;
                align-items: center;

                img {
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                }

                span {
                    font-size: 20px;
                    color: #000000;
                    letter-spacing: 0.21px;
                    font-weight: 600;
                }
            }

            .header_right {
                /*button {*/
                /*    width: 65px;*/
                /*    height: 26px;*/
                /*    border: 1px solid #57565F;*/
                /*    border-radius: 2px;*/
                /*    background: none;*/
                /*    cursor: pointer;*/
                /*}*/
            }
        }

        .sync_area {
            // width: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: row;
			height: calc(100vh - 100px);
			background: #f2f2f2;
			padding: 40px;

			.input-for-select {
				width: 100%;
				.search {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding-bottom: 10px;
					border-bottom: 1px solid #ccc;

					.el-form-item {
						margin-bottom: 0;
					}
				}

				.list {
					padding: 0;
					margin: 0;
					font-size: 15px;
					color: #666666;

					.addInput {
						list-style: none;
						height: 41px;
						line-height: 41px;
						padding: 0px 28px 0px 28px;
						box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
						border-bottom: 1px solid #ccc;
					}

					.mr-4 {
						margin-right: 4px;
					}
				}
			}

            .sync_left {
                flex-grow: 1;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
				padding: 40px;
            }

            .sync_divider {
                border: 1px solid grey;
            }

            .sync_right {
                flex-grow: 1;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
				padding: 40px;

            }

            .content {
                .content-column {
                    display: flex;
                    flex-direction: column;
                    margin: 50px 50px;

                    span {
                        text-align: left;
                    }

                    select {
                        margin: 30px 0;
                        min-width: 347px;
                        min-height: 53px;
                    }

                    input {
                        margin: 30px 0;
                        min-width: 347px;
                        min-height: 53px;
                    }

                    button {
                        /*margin: 30px 0;*/
                    }
                }

            }

            .content-bottom {
                margin: 30px 0;
            }

            .version-tags-container {
                min-height: 100px;
                border: 1px solid grey;
                display: flex;
                flex-direction: row;

            }
        }
    }
</style>

