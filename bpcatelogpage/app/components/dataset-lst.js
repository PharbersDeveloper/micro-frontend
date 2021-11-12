import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';



export default class DatasetLstComponent extends Component {
	@service router
	@service store
	@service cookies
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
				break
			case "addTags":
				let that = this
				let tagParam = e.detail[0].args.param;
				console.log(tagParam)
				let selectedDatasets = tagParam.selectedDatasets //需要更新的dataset
				let datasetArray = tagParam.datasetArray //发送请求的参数在这取
				let selectedTags = tagParam.selectedTags //选中的tag数组
				await selectedDatasets.forEach(async targetId => {
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
