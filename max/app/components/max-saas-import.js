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

	@action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "clickFile": // 选择文件按钮
				//todo: getCurrentDate
				let currentDate1 = new Date().getTime()
				let date1 = new Date(currentDate1)
				let y1 = date1.getFullYear()
				let m1 = date1.getMonth() + 1
				m1 = m1 < 10 ? ('0' + m1) : m1;
				let time1 = y1 + '-' + m1 + '-' + '01';
				let currentstamp1 = time1.replace(/-/g, '/');
				let timesTamp1 = new Date(currentstamp1).getTime()
				
                let optParam = e.detail[0].args.param
				let schemas = []
				let message = null
				if(optParam.attr.message) {
					//获取源数据表头
					message = JSON.parse(optParam.attr.message)
					let sheetName =  message.sheet //输入的sheet名是哪个就显示哪个
					schemas = message.schemas.filter(it => it.name == sheetName)[0]
				}
				let jobLogs = await this.store.query("jobLog", { "filter[provider]": optParam.attr.provider, "filter[version]": optParam.attr.version, "filter[jobCat]": "mapper"})
				let jobLogsList = jobLogs.filter(it => it)
				if(optParam.name == 'file') {
					e.target.allData.eventName = "clickFile"
					e.target.allData.jobLogs = jobLogsList //mapping弹框数据
					e.target.allData.schemas = schemas
					e.target.allData.targetNames = {"headers":["pack_id","mole_name_en","mole_name_ch","prod_desc","prod_name_ch", "corp_name_ch", "mnf_name_ch", "dosage", "spec", "pack", "atc4_code"], "name": "sourceList"}
					e.target.allData.fileName = message.name
					this.random = Math.random()
				} else if(optParam.name == 'import') {
					// 1.处理mappers空值为null mapper_list
					let mappers = JSON.parse(jobLogsList[jobLogsList.length - 1].message)
					mappers.forEach(item => {
						if(Object.values(item)[0] == '') {
							item[Object.keys(item)[0]] = null
						}
					})
					//2.获取文件位置
					let stateUrl = "https://api.pharbers.com/phetlsfn"
					let options = {
						method: "POST",
						mode: "cors",
						headers: {
							"Authorization": this.cookies.read( "access_token" ),
							"Content-Type": "application/vnd.api+json",
							"Accept": "application/vnd.api+json",
						},
						body: JSON.stringify({
							mapper_list: mappers,
							key: JSON.parse(optParam.attr.message).location
						})
					}
					let datas = await fetch(stateUrl, options).then(res=>res.json())
					let that = this
					// 暂时去掉上传文件触发ETL流程
					if (datas.executionArn && datas.executionArn != '') {
						that.uploadLoadedSize = 70
						let exArn = datas.executionArn
						//请求phstatus
						let stateUrl = "https://api.pharbers.com/phstepstatus"
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
						let dagStatusInt = setInterval(function() { 
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
										"time": timesTamp1,
										"version": optParam.attr.version,
										"code": 0,
										"jobDesc": status,
										"jobCat": "mapper",
										"comments": "mapper",
										"message": optParam.attr.message,
										"date": new Date().getTime()
									}
									that.store.createRecord('jobLog', jobLogsParam).save()
									that.router.transitionTo( "/" )
									let urlParam = window.location.href.split('?')[1]
									that.router.transitionTo( `/max-saas/import?${urlParam}`)
								}
							}) 
						}, 20*1000)
					}
				}
                break
			case "confirmMapping":
				//todo: getCurrentDate
				let currentDate = new Date().getTime()
				let date = new Date(currentDate)
				let y = date.getFullYear()
				let m = date.getMonth() + 1
				m = m < 10 ? ('0' + m) : m;
				let time = y + '-' + m + '-' + '01';
				let currentstamp = time.replace(/-/g, '/');
				let timesTamp = new Date(currentstamp).getTime()

				let conParam = e.detail[0].args.param
				// message数据
				let mapp = []
				conParam.targetsList.forEach((item,index) => {
					let obj = {}
					obj[item] = conParam.mappingList[index]
					mapp.push(obj)
				})
				let jobLogsParam = {
					"provider": conParam.fileData.provider,
					"owner": conParam.fileData.owner,
					"showName": conParam.fileData.showName,
					"time": timesTamp,
					"version": conParam.fileData.version,
					"code": 0,
					"jobDesc": "mapped",
					"jobCat": "mapper",
					"comments": "mapper",
					"message": JSON.stringify(mapp),
					"date": new Date().getTime()
				}
				await this.store.createRecord('jobLog', jobLogsParam).save()
				//刷新页面
				this.router.transitionTo( "/" )
				let urlParam = window.location.href.split('?')[1]
				this.router.transitionTo( `/max-saas/import?${urlParam}`)
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
