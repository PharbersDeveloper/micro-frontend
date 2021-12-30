import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class AnalyzeComponent extends Component {
	@service router
	@service store
	@service cookies
    @service noticeService;
    @service('loading') loadingService;
	@service ajax
    @tracked vueComponentEnv = null
	@tracked vueComponentEnvType = ""


	@action
	async listener(e) {
		switch(e.detail[0].args.callback) {
			case "linkToPage":
				let params = e.detail[0].args.param;
				let uri = '/projects'
				if(params.name === "project") {
					//返回project
					uri = `/projects/`+ params.projectId
				} else if (params.name == "datasets") {
					uri = '/dataset-lst?projectName=' + params.projectName +'&projectId=' + params.projectId
				} else if(params.name === "scripts") {
					uri = '/recipes?projectName=' + params.projectName + '&projectId=' + params.projectId
				} else if (params.name == "flow") {
					uri = '/flow?projectName=' + params.projectName + '&projectId=' + params.projectId
				} else if(params.name == "airflow") {
					uri = '/airflow?projectName=' + params.projectName + '&projectId=' + params.projectId
				}
                this.router.transitionTo( uri )
				break
			case "changeSchemaType":
				this.loadingService.loading.style.display = 'flex'
				let cstParam = e.detail[0].args.param;
				this.vueComponentEnv = e.detail[0].args.element
				this.vueComponentEnvType = cstParam.itemValueType
				let type = cstParam.itemValueType === "Number" ? "Double" : cstParam.itemValueType
				const url = "https://apiv2.pharbers.com/phdydatasource/put_item"
				let body = {
					"table": "action",
					"item": {
						"projectId": cstParam.projectId,
						"code": 0,
						"comments": "transform_schema",
						"jobCat": "transform_schema",
						"jobDesc": "running",
						"message": JSON.stringify({
							"dsid": cstParam.datasetId,
							"destination": cstParam.datasetName,
							"schema": [{
								"src": cstParam.title,
								"des": cstParam.title,
								"type": type
							}]
						}),
						"date": new Date().getTime(),
						"owner": this.cookies.read( "account_id" ),
						"showName": decodeURI(this.cookies.read('user_name_show'))
					}
				}
				let options = {
					method: "POST",
					headers: {
						"Authorization": this.cookies.read( "access_token" ),
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
						"accept": "application/json"
					},
					body: JSON.stringify(body)
				}
				let result = await fetch(url, options).then(res => res.json())
				this.noticeService.register("notification", result.data.id, this.changeSchemaTypeCallback, this, cstParam.projectId)
				break
			default:
				console.log("other click event!")
		}
	}

	@action changeSchemaTypeCallback(response, ele) {
		let status = JSON.parse(response.data[0].attributes.message).cnotification.status
		let error = JSON.parse(response.data[0].attributes.message).cnotification.error
		if(status == "transform_schema_succeed") {
			//跳转下一页面
			alert("修改成功")
		} else if(status == "transform_schema_failed") {
			alert(error)
			//刷新页面数据
			if(this.vueComponentEnvType === "Number") {
				this.vueComponentEnv.itemValueType = "Text"
			} else {
				this.vueComponentEnv.itemValueType = "Number"
			}
		}
		this.loadingService.loading.style.display = 'none'
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
