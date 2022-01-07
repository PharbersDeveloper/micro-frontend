import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class PrepareSetComponent extends Component {
    @service router
    @service store
    @service cookies
    @service('loading') loadingService;
    @service noticeService;
    @service ajax
	@tracked msg = "新建"

    @action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                let param = e.detail[0].args.param
				let uri = '/projects'
				if(param.name === "linkToProject" || param.name == "project") {
					uri = `/projects/`+ param.projectId
				} else if (param.name === "datasets") {
					uri = '/dataset-lst?projectName=' + param.projectName + '&projectId=' + param.projectId
				} else if(param.name === "scripts") {
					uri = '/recipes?projectName=' + param.projectName + '&projectId=' + param.projectId
				} else if (param.name == "flow") {
					uri = '/flow?projectName=' + param.projectName + '&projectId=' + param.projectId
				}  else if(param.name == "airflow") {
					uri = '/airflow?projectName=' + param.projectName + '&projectId=' + param.projectId
				}
                this.router.transitionTo( uri )
                break
			case "prepare":
				let preParam = e.detail[0].args.param
				let scriptsParams = JSON.parse(decodeURI(preParam.message))
				const url = "https://apiv2.pharbers.com/phdydatasource/put_item"
				const accessToken = this.cookies.read( "access_token" )
				const uuid = this.guid()
				this.loadingService.loading.style.display = 'flex'
        		this.loadingService.loading.style['z-index'] = 2
				this.projectId = scriptsParams.projectId
				this.projectName = scriptsParams.projectName
				let operatorParameters = []
				operatorParameters.push("filter", preParam.rowParams, "select", preParam.colParams, "operation_null", preParam.changeParams)
				//需要新建dataset
				if(scriptsParams.outputs[0].id == "") {
					scriptsParams.outputs[0].id = uuid
					let body = {
						"table": "dataset",
						"item": {
							"projectId": scriptsParams.projectId,
							"id": uuid,
							"label": JSON.stringify([]),
							"name": scriptsParams.outputs[0].name,
							"schema": JSON.stringify([]),
							"path": scriptsParams.path,
							"format": scriptsParams.format,
							"cat": "intermediate"
						}
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
					await fetch(url, options)
				}
				let message = {}
				if(scriptsParams.jobCat && scriptsParams.jobCat === "prepare_edit") {
					//用于配置页面数据回显
					message = {
						"actionName": scriptsParams.jobShowName,
						"projectId": scriptsParams.projectId,
						"flowVersion": "developer",
						"jobCat": "prepare_edit",
						"jobDisplayName": scriptsParams.jobDisplayName,
						"projectName": scriptsParams.projectName,
						"jobName": scriptsParams.jobName,
						"operatorParameters": operatorParameters,
						"runtime": "prepare"
					}
					this.msg = "编辑"
				} else {
					// 创建
					message = {
						"actionName": scriptsParams.jobName,
						"dagName": scriptsParams.projectName,
						"flowVersion": "developer",
						"jobName": scriptsParams.jobName,
						"jobId": "",
						"inputs": scriptsParams.inputs,
						"outputs": scriptsParams.outputs,
						"jobVersion": scriptsParams.jobVersion,
						"projectId": scriptsParams.projectId,
						"timeout": "1000",
						"runtime": "prepare",
						"owner": decodeURI(this.cookies.read('user_name_show')),
						"targetJobId": "",
						"projectName": scriptsParams.projectName,
						"labels": [],
						"operatorParameters": operatorParameters,
						"prop": {
							path: scriptsParams.path,
							partitions: 1
						}
					}

				}
				let scriptBody = {
					"table": "action",
					"item": {
						"projectId": scriptsParams.projectId,
						"owner": this.cookies.read( "account_id" ),
						"showName": decodeURI(this.cookies.read('user_name_show')),
						"code": 0,
						"jobDesc": "created",
						"jobCat": "intermediate",
						"comments": "",
						"date": String(new Date().getTime()),
						"message": JSON.stringify(message)
					}
				}
				let scriptOptions = {
					method: "POST",
					headers: {
						"Authorization": accessToken,
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
						"accept": "application/json"
					},
					body: JSON.stringify(scriptBody)
				}
				this.creatScriptsQuery = await fetch(url, scriptOptions).then(res => res.json())
				this.noticeService.register("notification", this.creatScriptsQuery.data.id, this.createScriptNoticeCallback, this, scriptsParams.projectId)
                break
            default: 
                console.log("submit event to parent")
        }
    }

	@action
	guid() {
		return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
			return v.toString(16);
		});
	}

	@action createScriptNoticeCallback(response, ele) {
		let create_scripts_status = JSON.parse(response.data[0].attributes.message).cnotification.status
		this.loadingService.loading.style.display = 'none'
		if(create_scripts_status == "dag insert success") {
			alert(`${this.msg}脚本成功！`)
			this.router.transitionTo(`/flow?projectId=${this.projectId}&projectName=${this.projectName}&flowVersion=developer`)
		} else {
			alert(`${this.msg}脚本失败，请重新操作！`)
		}
	}

    @action
    registerListener(element) {
        element.allData = this.calAllData
		console.log(element.allData)
        element.allData.popupBack = true
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
