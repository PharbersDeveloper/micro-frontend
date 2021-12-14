import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class ExcelCleanComponent extends Component {
	@service router
    @service store
    @service cookies
    @service ajax


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
				} else if(params.name === "scripts") {
					uri = '/recipes?projectName=' + params.projectName + '&projectId=' + params.projectId
				} else if (params.name == "flow") {
					uri = '/flow?projectName=' + params.projectName + '&projectId=' + params.projectId
				}
                this.router.transitionTo( uri )
                break
            default: 
                console.log("submit event to parent")
        }
    }

    @action
    registerListener(element) {
        element.allData = this.calAllData
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
