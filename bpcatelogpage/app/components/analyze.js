import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AnalyzeComponent extends Component {
	@service router
	@service store
	@service cookies
    @service('loading') loadingService;
    @service noticeService;
	@service ajax

	@action
	async listener(e) {
		switch(e.detail[0].args.callback) {
			case "linkToPage":
				let params = e.detail[0].args.param;
				let uri = ''
				if(params.name === "project") {
					//返回project
					uri = `/projects/`+ params.projectId
				} else if (params.name == "datasets") {
					uri = '/dataset-lst?projectName=' + params.projectName +'&projectId=' + params.projectId
				} else if(params.name === "scripts") {
					uri = '/recipes?projectName=' + params.projectName + '&projectId=' + params.projectId
				} else if (params.name == "flow") {

				}
                this.router.transitionTo( uri )
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
