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
				let schemasName = []
				if(optParam.attr) {
					let fileName = optParam.attr.labels.length > 0 ? optParam.attr.labels[5] + '_' + optParam.attr.labels[11].split('.')[0] + '_' + optParam.attr.labels[9] : ''
					let options = {
						method: "GET",
						mode: "cors",
						headers: {
							"Authorization": this.cookies.read( "access_token" ),
							"Content-Type": "application/vnd.api+json",
							"Accept": "application/vnd.api+json",
						}
					}
					schemas = await fetch(encodeURI(`https://api.pharbers.com/phmax/findTableSchema?table=${fileName}`), options).then(res=>res.json())
					schemas.forEach(item => {
						if(item.Name) {
							schemasName.push(item.Name)
						}
					})
				}
				e.target.allData.schemasNames = schemasName
				e.target.allData.targetNames = schemasName.slice[0,5]
				e.target.allData.fileName = optParam.attr.labels[11].split('.')[0]
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
				let jobLogsParam = {
					"provider": conParam.fileData.labels[5],
					"owner": conParam.userData.id,
					"showName": conParam.userData.name,
					"time": timesTamp,
					"version": conParam.fileData.labels[11],
					"code": 0,
					"jobDesc": "SUCCESS",
					"jobCat": "import",
					"comments": "import",
					"message": JSON.stringify(conParam.mappingList),
					"date": new Date().getTime()
				}
				let jobLogsObj = this.store.createRecord('jobLog', jobLogsParam).save()
				// e.target.allData.middleList = jobLogsObj.message
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
