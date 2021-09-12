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
                let optParam = e.detail[0].args.param
				let schemas = []
				let message = null
				if(optParam.attr.message) {
					//获取源数据表头
					message = JSON.parse(optParam.attr.message)
					let sheetName =  message.sheet //输入的sheet名是哪个就显示哪个
					schemas = message.schemas.filter(it => it.name == sheetName)[0]
				}
				let jobLogs = await this.store.query("jobLog", { "filter[provider]": optParam.attr.provider, "filter[date]": optParam.attr.date, "filter[version]": optParam.attr.version, "filter[jobCat]": "import"})
				e.target.allData.jobLogs = jobLogs.filter(it => it)
				e.target.allData.schemas = schemas
				e.target.allData.targetNames = {"headers":["aaa1","aaa2","aaa3","aaa4","aaa5"], "name": "sourceList"}
				e.target.allData.fileName = message.name
                this.random = Math.random()
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
					"jobDesc": "SUCCESS",
					"jobCat": "import",
					"comments": "import",
					"message": JSON.stringify(mapp),
					"date": new Date().getTime()
				}
				this.store.createRecord('jobLog', jobLogsParam).save()
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
