import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class ExcelCleanComponent extends Component {
	@tracked dataset
	@tracked display = "none"
	@service router
    @service cookies
    @service ajax

	@action
    async listener(e) {
		switch(e.detail[0].args.callback) {
			case "linkToPage":
				let params = e.detail[0].args.param;
				let uri = '/projects'
				if(params.name === "datasets") {
					uri = '/dataset-lst?projectName=' + params.projectName + '&projectId=' + params.projectId
				} else if(params.name === "scripts") {
					uri = '/recipes?projectName=' + params.projectName + '&projectId=' + params.projectId
				} else if (params.name == "flow") {
					uri = '/flow?projectName=' + params.projectName + '&projectId=' + params.projectId
				} else if(params.name === "linkToProject" || params.name === "project") {
					uri = `projects/${this.projectId}?projectName=${this.projectName}&projectId=${this.projectId}`
				} else if(params.name == "airflow") {
					uri = '/airflow?projectName=' + params.projectName + '&projectId=' + params.projectId
				}
                this.router.transitionTo( uri )
				break
		}
	}

	@action
	async on_btn_click() {
		let body = {
			"bucket": "ph-platform",
			"path": this.dataset.path.split("ph-platform/")[1],
			"dataset_name": this.dataset.datasetName
		}
		let url = "https://api.pharbers.com/phoutputdown"
		let scriptOptions = {
			method: "POST",
			headers: {
				"Authorization": this.cookies.read("access_token"),
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				"accept": "application/json"
			},
			body: JSON.stringify(body)
		}
		let result = await fetch(url, scriptOptions).then(res => res.json())
		if(result.status === 1) {
			let downloadUrl = result.message
			window.open(downloadUrl)
		} else {
			alert(result.message)
		}
	}

    @action
    registerListener(element) {
        element.allData = this.calAllData
		if(element.allData.cat === "output_index") {
			this.display = "block"
		}
		element.allData.popupBack = true
		this.dataset = this.calAllData
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
