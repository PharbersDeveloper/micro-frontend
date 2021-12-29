import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class ExcelCleanComponent extends Component {
	@tracked dataset
	@tracked display = "none"
	@service router
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
					uri = `/projects/`+ params.projectId
				} else if(params.name == "airflow") {
					uri = '/airflow?projectName=' + params.projectName + '&projectId=' + params.projectId
				}
                this.router.transitionTo( uri )
				break
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
