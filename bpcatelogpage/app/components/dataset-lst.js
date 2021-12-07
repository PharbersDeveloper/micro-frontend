import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class DatasetLstComponent extends Component {
	@service router
	@service store
	@service cookies
    @service('loading') loadingService;
    @service noticeService;
	@service ajax 
	@tracked firstRegister = true

	@action
	async listener(e) {
		switch(e.detail[0].args.callback) {
			case "linkToPage":
				let params = e.detail[0].args.param;
				let uri = ''
				if(params.name === "upload") {
					uri = `/dataset?projectName='${params.projectName}&projectId=${params.projectId}&uploadType=${params.type}`
				}else if(params.name === "linkToProject" || params.name === "project") {
					uri = `/projects/`+ params.projectId
				} else if(params.name === "analyze") {
					uri = `/dataset/${params.dataset.name}?projectName=${params.projectName}&projectId=${params.projectId}&datasetId=${params.dataset.id}&datasetName=${params.dataset.name}`
				} else if(params.name === "datasets") {
					uri = '/dataset-lst?projectName=' + params.projectName + '&projectId=' + params.projectId
				} else if(params.name === "scripts") {
					uri = '/recipes?projectName=' + params.projectName + '&projectId=' + params.projectId
				} else if (params.name == "flow") {
					uri = '/flow?projectName=' + params.projectName + '&projectId=' + params.projectId
				}
                this.router.transitionTo( uri )
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
			case "deleteDatasets":
				let delTagParam = e.detail[0].args.param;
				let selectedDatasetsDel = delTagParam.selectedDatasets //需要更新的dataset
				let datasetArrayDel = delTagParam.datasetArray //发送请求的参数
				const accessToken = this.cookies.read( "access_token" )
				let promiseListDel = [];
				let _that = this
				selectedDatasetsDel.forEach(async targetId => {
					let targetDataset = datasetArrayDel.filter(it => it.id == targetId)[0]
					const url = "https://apiv2.pharbers.com/phdydatasource/put_item"
					let body = {
						"table": "action",
						"item": {
							"projectId": delTagParam.projectId,
							"code": 0,
							"comments": "delete_dataset",
							"jobCat": "remove_DS",
							"jobDesc": "running",
							"message": JSON.stringify({
								"version": "",
								"dsid": targetDataset.id,
								"destination": targetDataset.name,
								"opname": this.cookies.read( "account_id" ),
								"opgroup": this.cookies.read( "company_id" )
							}),
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
					promiseListDel.push(result)
				})
				let delResults = await Promise.all(promiseListDel)
				delResults.forEach(item => {
					if(item.data) {
						_that.noticeService.register("notification", item.data.id, this.delNoticeCallback, this, delTagParam.projectId)
					}
				})
				alert("删除数据集成功！")
				window.location.reload()
				// Promise.all(promiseListDel).then((rspList)=> {
				// 	window.location.reload()
				// 	alert("删除数据集成功！")
				// })
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

	@action delNoticeCallback(response, ele) {
		let upload_status = JSON.parse(response.data[0].attributes.message).cnotification.status
		if(upload_status == "remove_DS_succeed") {
			//跳转下一页面
			this.router.transitionTo( `/dataset-lst?projectName=${this.tranParam.projectName}&projectId=${this.tranParam.projectId}` )
		} else if(upload_status == "remove_DS_failed") {
			alert("删除数据集失败，请重新操作！")
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
