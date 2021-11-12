import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';



export default class DatasetLstComponent extends Component {
	@service router
	@service store
	@service cookies
    @service('loading') loadingService;
	@service ajax

	@action
	async listener(e) {
		switch(e.detail[0].args.callback) {
			case "linkToPage":
				let params = e.detail[0].args.param;
				let uri = ''
				if(params.name === "localUpload") {
					uri = '/dataset?projectName=' + params.projectName +'&projectId=' + params.projectId
				}
				if(params.name === "linkToProject") {
					uri = `/projects/`+ params.projectId
				}
                this.router.transitionTo( uri )
				// this.loadingService.loading.style.display = 'flex'
        		// this.loadingService.loading.style['z-index'] = 2
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
				let datasetArrayDel = delTagParam.datasetArray //发送请求的参数在这取
				let promiseListDel = [];
				selectedDatasetsDel.forEach(async targetId => {
					let targetDataset = datasetArrayDel.filter(it => it.id == targetId)[0]
					const url = "https://apiv2.pharbers.com/phdydatasource/put_item"
					const accessToken = this.cookies.read( "access_token" )
					let body = {
						"table": "action",
						"item": {
							"projectId": delTagParam.projectId,
							"code": 0,
							"comments": "delete_dataset",
							"jobCat": "remove_DS",
							"jobDesc": "running",
							"message": {
								"version": "",
								"dsid": targetDataset.id,
								"destination": targetDataset.name
							},
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
					// await fetch(url, options)
					let result = fetch(url, options)
					promiseListDel.push(result)

					//请求status，持续30s
					// let statusType = 'query'
					// let statusBody = {
					// 	"table": "project_files",
					// 	"conditions": {
					// 		"id": results[0].data.id
					// 	},
					// 	"limit": 10,
					// 	"start_key": {}
					// }
					// let startTime = new Date().getTime();
					// let dagStatusInt = setInterval(async function() { 
					// 	that.postUrl(statusType, statusBody).then(response => {
					// 		let project_files_status = response.data[0].attributes.status
					// 		if (project_files_status !== 'creating') {
					// 			clearInterval(dagStatusInt); //循环结束
					// 			let status = ''
					// 			if(project_files_status == "success") {
					// 				console.log(project_files_status)
					// 			} else {
					// 				console.log(project_files_status)
					// 			}
					// 			that.loadingService.loading.style.display = 'none'
					// 			// that.router.transitionTo( `/excel-clean?tmpname=${message.tmpname}&projectName=${projectName}` )
					// 			that.router.transitionTo( `/excel-handler?projectName=${projectName}&projectId=${projectId}&filename=${file.name}&version=${property.dataID}&dataset=${property.dataset}&tmpname=${message.tmpname}` )
					// 		} else if(new Date().getTime() - startTime >= 60000) {
					// 			clearInterval(dagStatusInt); //循环结束
					// 			alert("超时，连接终止！")
					// 		}
					// 	}) 
					// }, 5 * 1000)
					// window.location.reload()
				})
				Promise.all(promiseListDel).then((rspList)=> {
					window.location.reload()
					alert("删除数据集成功！")
				})
			break
			case "clearTags":
				let clearTagParam = e.detail[0].args.param;
				let selectedDatasetsClear = clearTagParam.selectedDatasets //需要更新的dataset
				let datasetArrayClear = clearTagParam.datasetArray //发送请求的参数在这取

				let promiseList = [];
				selectedDatasetsClear.forEach(async targetId => {
					let targetDataset = datasetArrayClear.filter(it => it.id == targetId)[0]
					const url = "https://apiv2.pharbers.com/phdydatasource/put_item"
					const accessToken = this.cookies.read( "access_token" )
					let body = {
						"table": "action",
						"item": {
							"projectId": clearTagParam.projectId,
							"code": 0,
							"comments": "clear_dataset_tags",
							"jobCat": "clear_DS_data",
							"jobDesc": "running",
							"message": {
								"version": "",
								"dsid": targetDataset.id,
								"destination": targetDataset.name
							},
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
					// await fetch(url, options)
					let result = fetch(url, options)
					promiseList.push(result)
					// window.location.reload()
					// alert("清除数据成功！")
				})
				Promise.all(promiseList).then((rspList)=> {
					window.location.reload()
					alert("清除数据成功！")
				})
			break
			default:
				console.log("other click event!")
		}
	}

	@action
	registerListener(element) {
		element.allData = this.calAllData
		console.log(element.allData)
		element.addEventListener("event", this.listener)
	}

	@action
	unregisterListener(element) {
		element.removeEventListener("event", this.listener)
	}

	get calAllData() {
		this.args.model._isVue = true
		let tags = new Set()
		this.args.model.dss.forEach(iter => {
			iter.label = JSON.parse(iter.label)
			iter.label.map(it => {
				tags.add(it)
			})
			console.log(tags)
		})
		this.args.model.tagsArray = Array.from(tags)
		return this.args.model
	}
}
