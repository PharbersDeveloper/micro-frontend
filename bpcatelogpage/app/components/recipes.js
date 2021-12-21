import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class RecipesComponent extends Component {
	@service router
	@service store
	@service cookies
    @service('loading') loadingService;
    @service noticeService;
	@service ajax
	@tracked firstRegister = true
	@tracked creatScriptsQuery = null
	@tracked projectId
	@tracked projectName

	@action
	async listener(e) {
		switch(e.detail[0].args.callback) {
			case "linkToPage":
				let params = e.detail[0].args.param;
				let uri = '/projects'
				if(params.name === "localUpload") {
					uri = '/dataset?projectName=' + params.projectName +'&projectId=' + params.projectId
				}else if(params.name === "linkToProject" || params.name === "project") {
					uri = `/projects/`+ params.projectId
				} else if(params.name === "analyze") {
					uri = `/dataset/${params.dataset.name}?projectName=${params.projectName}&projectId=${params.projectId}&datasetId=${params.dataset.id}&datasetName=${params.dataset.name}`
				} else if(params.name === "datasets") {
					uri = '/dataset-lst?projectName=' + params.projectName + '&projectId=' + params.projectId
				} else if(params.name === "scripts") {
					uri = '/recipes?projectName=' + params.projectName + '&projectId=' + params.projectId
				} else if (params.name === "codeditor") {
					uri = '/codeditor?projectName=' + params.projectName + '&projectId=' + params.projectId + '&jobName=' + params.recipt.jobName + '&jobPath=' + params.recipt.jobPath
				} else if (params.name == "flow") {
					uri = '/flow?projectName=' + params.projectName + '&projectId=' + params.projectId
				}
                this.router.transitionTo( uri )
				break
			case "createScripts":
				let scriptsParams = e.detail[0].args.param;
				const url = "https://apiv2.pharbers.com/phdydatasource/put_item"
				const accessToken = this.cookies.read( "access_token" )
				// const uuid = this.guid() + '.xlsx'
				const uuid = this.guid()
				this.loadingService.loading.style.display = 'flex'
        		this.loadingService.loading.style['z-index'] = 2
				//需要新建dataset
				this.projectId = scriptsParams.projectId
				this.projectName = scriptsParams.projectName
				if(scriptsParams.outputs[0].id == "") {
					scriptsParams.outputs[0].id = uuid
					let body = {
						"table": "dataset",
						"item": {
							"projectId": scriptsParams.projectId,
							"id": uuid,
							"label": JSON.stringify([]),
							"name": scriptsParams.outputs[0].name,
							"schema": JSON.stringify([])
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
				let message = {
					"dagName": scriptsParams.projectName,
					"flowVersion": "developer",
					"jobName": scriptsParams.jobName,
					"jobId": "",
					"inputs": scriptsParams.inputs,
					"outputs": scriptsParams.outputs,
					"jobVersion": scriptsParams.jobVersion,
					"projectId": scriptsParams.projectId,
					"timeout": "1000",
					"runtime": scriptsParams.runtime,
					"owner": decodeURI(this.cookies.read('user_name_show')),
					"targetJobId": "",
					"projectName": scriptsParams.projectName,
					"labels": []
				}
				let scriptBody = {
					"table": "action",
					"item": {
						"projectId": scriptsParams.projectId,
						"owner": this.cookies.read( "account_id" ),
						"showName": decodeURI(this.cookies.read('user_name_show')),
						"code": 0,
						"jobDesc": "created",
						"jobCat": "upload",
						"comments": "",
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
			case "addTags":
				let that = this
				let tagParam = e.detail[0].args.param;
				console.log(tagParam)
				let selectedDatasets = tagParam.selectedDatasets //需要更新的dataset
				let datasetArray = tagParam.datasetArray //发送请求的参数在这取
				let selectedTags = tagParam.selectedTags //选中的tag数组
				selectedDatasets.forEach(async targetId => {
					let targetDataset = datasetArray.filter(it => it.id == targetId)[0]
					let targetLabels = Array.from(new Set(targetDataset.label.concat(selectedTags)))
					const url = "https://apiv2.pharbers.com/phdydatasource/put_item"
					const accessToken = this.cookies.read( "access_token" )
					let body = {
						"table": "dataset",
						"item": {
							"id": targetDataset.id,
							"projectId": tagParam.projectId,
							"label": JSON.stringify(targetLabels),
							"schema": targetDataset.schema,
							"date": new Date().getTime(),
							"version": targetDataset.version,
							"name": targetDataset.name
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
					window.location.reload()
				})
			break
			//删除脚本
			case "deleteDatasets":
				let delTagParam = e.detail[0].args.param;
				let selectedDatasetsDel = delTagParam.selectedDatasets //需要更新的dataset
				let datasetArrayDel = delTagParam.datasetArray //发送请求的参数在这取
				let _that = this
				let msgArr = []
				selectedDatasetsDel.forEach(async targetId => {
					let targetDataset = datasetArrayDel.filter(it => it.id == targetId)[0]
					msgArr.push({
						"targetId": targetDataset.jobId, 
						"jobName":targetDataset.jobName,
						"flowVersion": "developer"
					})
				})
				let body = {
					"table": "action",
					"item": {
						"projectId": delTagParam.projectId,
						"code": 0,
						"comments": "delete_dataset",
						"jobCat": "remove_Job",
						"jobDesc": "running",
						"message": JSON.stringify(msgArr),
						"date": new Date().getTime(),
						"owner": this.cookies.read( "account_id" ),
						"showName": decodeURI(this.cookies.read('user_name_show'))
					}
				}
				const urldel = "https://apiv2.pharbers.com/phdydatasource/put_item"
				const accessTokendel = this.cookies.read( "access_token" )
				let options = {
					method: "POST",
					headers: {
						"Authorization": accessTokendel,
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
						"accept": "application/json"
					},
					body: JSON.stringify(body)
				}
				let result = await fetch(urldel, options).then(res => res.json())
				if(result.data) {
					_that.noticeService.register("notification", result.data.id, this.noticeCallback, this, delTagParam.projectId)
				}
				alert("删除脚本成功！")
				window.location.reload()
			break
			case "clearTags":
				this.loadingService.loading.style.display = 'flex'
        		this.loadingService.loading.style['z-index'] = 2
				let clearTagParam = e.detail[0].args.param;
				let selectedDatasetsClear = clearTagParam.selectedDatasets //需要更新的dataset
				let datasetArrayClear = clearTagParam.datasetArray //发送请求的参数在这取
				let _this = this
				let promiseList = [];
				selectedDatasetsClear.forEach(async targetId => {
					let targetDataset = datasetArrayClear.filter(it => it.id == targetId)[0]
					const url = "https://apiv2.pharbers.com/phdydatasource/put_item"
					const accessToken = this.cookies.read( "access_token" )
					let msg = {
						"version": "",
						"dsid": targetDataset.id,
						"destination": targetDataset.name,
						"opname": this.cookies.read( "account_id" ),
						"opgroup": this.cookies.read( "company_id" )
					}
					let body = {
						"table": "action",
						"item": {
							"projectId": clearTagParam.projectId,
							"code": 0,
							"comments": "clear_dataset_tags",
							"jobCat": "clear_DS_data",
							"jobDesc": "running",
							"message": JSON.stringify(msg),
							"date": new Date().getTime(),
							"owner": this.cookies.read( "account_id" ),
							"showName": decodeURI(this.cookies.read('user_name_show'))
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
					let result = fetch(url, options).then(res => res.json())
					promiseList.push(result)
				})
				let results = await Promise.all(promiseList)
				results.forEach(item => {
					if(item.data) {
						_this.noticeService.register("notification", item.data.id, this.noticeCallback, this, clearTagParam.projectId)
					}
				})
				alert("清除数据成功！")
				window.location.reload()
			break
			default:
				console.log("other click event!")
		}
	}

	@action createScriptNoticeCallback(response, ele) {
		let create_scripts_status = JSON.parse(response.data[0].attributes.message).cnotification.status
		this.loadingService.loading.style.display = 'none'
		if(create_scripts_status == "dag insert success") {
			alert("新建脚本成功！")
			
			let message = JSON.parse(response.data[0].attributes.message)
			let jobName = message.cnotification.jobName
			let jobPath = message.cnotification.jobPath
			this.router.transitionTo(`/codeditor?projectName=${this.projectName}&projectId=${this.projectId}&jobName=${jobName}&jobPath=${jobPath}`)
		} else {
			alert("新建脚本失败，请重新操作！")
		}
	}

	@action noticeCallback(response, ele) {
		let upload_status = JSON.parse(response.data[0].attributes.message).cnotification.status
		if(upload_status == "project_file_to_DS_succeed") {
			//跳转下一页面
			this.router.transitionTo( `/dataset-lst?projectName=${this.tranParam.projectName}&projectId=${this.tranParam.projectId}` )
		} else if(upload_status == "project_file_to_DS_failed") {
			alert("清除数据失败，请重新操作！")
		}
		this.loadingService.loading.style.display = 'none'
	}

	@action
	guid() {
		return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
			return v.toString(16);
		});
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
		if(this.firstRegister) {
			this.firstRegister = false
			//tags
			let tags = new Set()
			this.args.model.dss.forEach((iter,index) => {
				if(typeof(iter.label) == 'string') {
					iter.label = JSON.parse(iter.label)
					iter.label.map(it => {
						tags.add(it)
					})
				}
			})
			this.args.model.tagsArray = Array.from(tags)
		}

		return this.args.model
	}
}
