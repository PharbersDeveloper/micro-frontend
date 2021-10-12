import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'
import fetch, { Headers, Request, Response, AbortController } from 'fetch';
import { inject as service } from '@ember/service';

export default class MaxSaasImportComponent extends Component {
	@service oauthService
    @service cookies
    @service awsService
    @service store
    @service router
    @tracked random
	//进度条
	@tracked uploadDate
    @tracked uploadToastBorder
    @tracked uploadTextStatus
    @tracked uploadText
    @tracked closeuploadToast
    @tracked uploadFileSize
    @tracked uploadLoadedSize
    @tracked showProgress
	@tracked ymTime

	@action
	getCurrentDate() {
		//获取当前时间的时间戳，格式为 2020-10-01
		let currentDate = new Date().getTime()
		let date = new Date(currentDate)
		let y = date.getFullYear()
		let m = date.getMonth() + 1
		m = m < 10 ? ('0' + m) : m;
		let time = y + '-' + m + '-' + '01';
		let currentstamp = time.replace(/-/g, '/');
		let timesTamp = new Date(currentstamp).getTime()
		return timesTamp
	}

	@action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "clickFile": // 选择文件按钮
                let optParam = e.detail[0].args.param
				this.ymTime = optParam.attr.time
				let schemas = [], sourceData = [], readNumber = 0
				let defaultMessage = null
				if(optParam.attr.message) {
					// 1. 请求文件的schemas，获取源数据表头
					defaultMessage = JSON.parse(optParam.attr.message)
					let schemaUrl = "https://api.pharbers.com/schemaexplorer"
					let reqBody = {
						"tempfile": defaultMessage.tempfile,
						"sheet": defaultMessage.sheet,
						"out_number": 5
					}
					let schemaOptions = {
						method: "POST",
						mode: "cors",
						headers: {
							"Authorization": this.cookies.read( "access_token" ),
							"Content-Type": "application/vnd.api+json",
							"Accept": "application/vnd.api+json",
						},
						body: JSON.stringify(reqBody)
					}
					let schemasData = await fetch(schemaUrl, schemaOptions).then(res=>res.json())
					schemas = schemasData[0] ? schemasData[0].schema : []
					sourceData = schemasData[0] ? schemasData[0].data : []
					readNumber = schemasData[0] ? schemasData[0].readNumber : 1
				}
				// 上传文件的时间戳,如2020-10-01
				let jobLogs = await this.store.query("jobLog", { "filter[provider]": optParam.attr.provider, "filter[version]": optParam.attr.version, "filter[jobCat]": "mapper"})
				let jobLogsList = jobLogs.filter(it => it)
				if(optParam.name == 'file') {
					e.target.allData.eventName = "clickFile"
					e.target.allData.jobLogs = jobLogsList //mapping弹框数据
					e.target.allData.schemas = schemas //源文件表头
					e.target.allData.sourceData = sourceData //源文件数据
					e.target.allData.sourceData.readNumber = readNumber //读取开始的行数
					// e.target.allData.targetNames = ["pack_id","mole_name_en","mole_name_ch","prod_desc","prod_name_ch", "corp_name_ch", "mnf_name_ch", "dosage", "spec", "pack", "atc4_code"]
					e.target.allData.targetNames = ["gn","pn","mn","do","sp","pk","pku"]
					e.target.allData.fileName = defaultMessage.name
					this.random = Math.random()
				} else if(optParam.name == 'import') {
					// 显示导入弹框
					this.uploadToastBorder = "blue"
					this.uploadTextStatus = "正在导入"
					this.uploadText = ""
					this.closeuploadToast = "0" //显示导入弹框
					this.showProgress = '1'// 显示导入进度条
					let message = JSON.parse(optParam.attr.message)
					//查询mapper joblog，获取tag
					let Logs = await this.store.query("jobLog", { "filter[provider]": optParam.attr.provider, "filter[version]": optParam.attr.version, "filter[jobCat]": "mapper"})
					let mapperLog = Logs.filter(it => it)
					let mapperData = mapperLog ? JSON.parse(mapperLog[0].message) : {}

					let mapperTags = mapperData.tags
					let tags = message.tags.concat(mapperTags)
					let ym = tags.filter(it => it.Key == "date")[0]
					let dateym = ym.Value
					let mapper = mapperData.mapper
					let delArr = ['id', 'measure', 'provider', 'version', 'owner']
					let dealMapper = []
					mapper.forEach((mapperItem) => {
						if(delArr.indexOf(Object.keys(mapperItem)[0]) == -1) {
							dealMapper.push(mapperItem)
						}
					})
					// 1.流程
					let puts3_event = {
						"asset": message.asset,
						"owner": this.cookies.read('account_id'),
						"tempfile": message.tempfile,
						"tags": tags,
					}
					let click_event = {
						"file_path": `/mnt/tmp/${message.tempfile}`,
						"sheet_name": message.sheet,
						"database_name": "default",
						"table_name": "clean_source",
						"batch": 10000,
						"begin_line": optParam.readNumber,
						"mapper_args": dealMapper,
						"provider": optParam.attr.provider, 
						"version": optParam.attr.version,
						"owner": this.cookies.read('account_id'),
						"date": dateym,
					}
					let parameters = {
						puts3_event: puts3_event, 
						click_event: click_event
					}
					// 2.调ETL
					let executionUrl = "https://api.pharbers.com/phproject/execution"
					let reqBody = {
						"data": {
							"attributes": {
								"arn": null,
								"name": null,
								"input": JSON.stringify({
									"dag_name": "ETL_to_clickhouse",
									"parameters": parameters
								})
							},
							"relationships": {
								"projectExecution": {
									"data": {
										"type": "projects",
										"id": "0iveStO4gzwMuyZx"
									}
								}
							},
							"type": "executions"
						}
					  }
					let executionOptions = { 
						method: "POST",
						mode: "cors",
						headers: {
							"Authorization": this.cookies.read( "access_token" ),
							"Content-Type": "application/vnd.api+json",
							"Accept": "application/vnd.api+json",
						},
						body: JSON.stringify(reqBody)
					}
					let executionData = await fetch(executionUrl, executionOptions).then(res=>res.json())
					let datas = executionData.data.attributes
					let that = this
					// 触发ETL后获取状态
					if (datas.arn && datas.arn != '') {
						that.uploadLoadedSize = 70
						let exArn = datas.arn
						//请求phstatus
						let stateUrl = "https://apiv2.pharbers.com/phstepstatus"
						let options = {
							method: "POST",
							mode: "cors",
							headers: {
								"Authorization": that.cookies.read( "access_token" ),
								"Content-Type": "application/vnd.api+json",
								"Accept": "application/vnd.api+json",
							},
							body: JSON.stringify({"executionArn": exArn})
						}
						let dagStatusInt = setInterval(async function() { 
							fetch(stateUrl, options).then(res=>res.json()).then(response => {
								let execution_status = response.execution_status
								if (execution_status && execution_status !== 'RUNNING') {
									clearInterval(dagStatusInt); //循环结束
									let status = ''
									if(execution_status == "SUCCEEDED") {
										status = 'succeed'
									} else {
										status = 'failed'
									}
									let jobLogsParam = {
										"provider": optParam.attr.provider,
										"owner": optParam.attr.owner,
										"showName": optParam.attr.showName,
										"time": that.ymTime,
										"version": optParam.attr.version,
										"code": 0,
										"jobDesc": status,
										"jobCat": "mapper",
										"comments": "mapper",
										"message": optParam.attr.message,
										"date": new Date().getTime()
									}
									that.store.createRecord('jobLog', jobLogsParam).save().then((res) => {
										if(status == "succeed") {
											that.uploadLoadedSize = 100 //文件导入成功
										}
										that.showProgress = '0'// 关闭导入进度条
										//导入成功提示
										if(that.uploadLoadedSize == 100) {
											that.uploadTextStatus = "导入成功"
											that.uploadText = "在“我的数据”中查看结果"
											that.uploadToastBorder = "green"
										} else {
										//导入失败提示
											that.uploadTextStatus = "导入失败" 
											that.uploadText = ""
											that.uploadToastBorder = "red"
										}
										that.router.transitionTo( "/" )
										let urlParam = window.location.href.split('?')[1]
										that.router.transitionTo( `/max-saas/import?${urlParam}&tempfile=${message.tempfile}&sheet=${message.sheet}`)
									})
								}
							}) 
						}, 20*1000)
					}
				} else if (optParam.name == 'rollback') {
					let message = JSON.parse(optParam.attr.message)
					let Logs = await this.store.query("jobLog", { "filter[provider]": optParam.attr.provider, "filter[version]": optParam.attr.version, "filter[jobCat]": "mapper", "filter[jobDesc]":"mapped"})
					let mapperLog = Logs.filter(it => it)
					let mapperData = mapperLog ? JSON.parse(mapperLog[mapperLog.length - 1].message) : {}

					let mapperTags = mapperData.tags
					let mapperArr = mapperData.mapper
					let tags = message.tags.concat(mapperTags)
					let ym = tags.filter(it => it.Key == "date")[0]
					let dateym = ym.Value
					let mapper = mapperData.mapper
					let delArr = ['id', 'measure', 'provider', 'version', 'owner']
					let dealMapper = []
					let that = this
					mapper.forEach((mapperItem) => {
						if(delArr.indexOf(Object.keys(mapperItem)[0]) == -1) {
							dealMapper.push(mapperItem)
						}
					})
					let puts3_event = {
						"asset": message.asset,
						"owner": this.cookies.read('account_id'),
						"tempfile": message.tempfile,
						"tags": tags,
					}
					let click_event = {
						"file_path": `/mnt/tmp/${message.tempfile}`,
						"sheet_name": message.sheet,
						"database_name": "default",
						"table_name": "clean_source",
						"batch": 10000,
						// "begin_line": optParam.readNumber,
						// "mapper_args": dealMapper,
						"mapper_args":mapper,
						// "provider": "MAX", 
						// "version": "max",
						// "owner": "wodelu",
						"provider": optParam.attr.provider, 
						"version": optParam.attr.version,
						"owner": this.cookies.read('account_id'),
						"date": dateym,
						"provider_name":  optParam.attr.provider,
            			"version_name":  optParam.attr.version,
						"owner_name":  decodeURI(this.cookies.read('user_name_show')),
					}
					let parameters = {
						puts3_event: puts3_event, 
						click_event: click_event
					}
					let queryParam = {
						"dag_name": "ETL_to_clickhouse",
						"parameters": parameters
					}
					let rollBackUrl = "https://apiv2.pharbers.com/phrollback"
					let options = {
						method: "POST",
						mode: "cors",
						headers: {
							"Authorization": that.cookies.read( "access_token" ),
							"Content-Type": "application/vnd.api+json",
							"Accept": "application/vnd.api+json",
						},
						body: JSON.stringify(queryParam)
					}
					// console.log(options);
					fetch(rollBackUrl, options).then(function(res) {
						return res.json()
					}).catch(function(err) {
						console.log(err);
					})

				}
                break
			case "confirmMapping":
				let conParam = e.detail[0].args.param
				let message = JSON.parse(conParam.fileData.message)
				// message数据
				let mapp = []
				conParam.targetsList.forEach((item,index) => {
					let obj = {}
					//必须填写所有映射，否则不能提交
					if(!conParam.mappingList[index] || conParam.mappingList[index] == '') {
						alert("请输入所有映射关系")
						throw new Error("请输入所有映射关系")
					}
					obj[item] = conParam.mappingList[index]
					mapp.push(obj)
				})
				let messageObj = {
					tempfile: message.tempfile,
					mapper: mapp,
					tags: [
						{Key: 'mapper', Value: ''}
					]
				}
				let jobLogsParam = {
					"provider": conParam.fileData.provider,
					"owner": conParam.fileData.owner,
					"showName": conParam.fileData.showName,
					"time": this.ymTime, //上传文件时间戳
					"version": conParam.fileData.version,
					"code": 0,
					"jobDesc": "mapped",
					"jobCat": "mapper",
					"comments": "mapper",
					"message": JSON.stringify(messageObj),
					"date": new Date().getTime()
				}
				await this.store.createRecord('jobLog', jobLogsParam).save()
				//刷新页面
				this.router.transitionTo( "/" )
				let urlParam = window.location.href.split('?')[1]
				this.router.transitionTo( `/max-saas/import?${urlParam}&tempfile=${message.tempfile}&sheet=${message.sheet}`)
				break
			default: 
                console.log("other click event!")
        }
    }

	@action
    registerListener(element) {
        element.allData = this.calAllData
        element.addEventListener("event", this.listener)
    }

    @action
    unregisterListener(element) {
        element.removeEventListener("event", this.listener)
    }

    get calAllData() {
        this.args.model._isVue = true
        return this.args.model
    }
}
