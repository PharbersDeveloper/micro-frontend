import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class CodeditorComponent extends Component {
	@service router
	@service store
	@service cookies
    @service('loading') loadingService;
    @service noticeService;
	@service ajax
	@tracked firstRegister = true
	@tracked iframeURL = "https://codeditor.pharbers.com/index.html"

	@action
	async listener(e) {
		switch(e.detail[0].args.callback) {
			case "linkToPage": {
				let params = e.detail[0].args.param;
				let uri = ''
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
				}
				this.router.transitionTo( uri )
				break
			}
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

	@action
	registerListenerIframe(element) {
		element.allData = this.calAllData
		this.iframeURL = this.iframeURL + "?jobName=" + element.allData.jobName
		// let iframe = document.getElementById('mainIframe')
		// iframe.contentWindow.postMessage(element.allData.jobName, '*')
	}

	get calAllData() {
		this.args.model._isVue = true
		return this.args.model
	}

	@action
	loaded() {
		console.log("iframe page loaded")
	}
}
