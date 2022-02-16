import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class AirflowComponent extends Component {
    @service router
    @service store
    @service cookies
    @service('loading') loadingService;
    @service ajax
	@tracked iframeURL = "https://max.pharbers.com/airflow/graph"


    @action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                let params = e.detail[0].args.param;
                let uri = '/projects'
                if(params.name === "project") {
                    //返回project
                    uri = `projects/${this.projectId}?projectName=${this.projectName}&projectId=${this.projectId}`
                } else if (params.name == "datasets") {
                    uri = '/dataset-lst?projectName=' + params.projectName +'&projectId=' + params.projectId
                } else if(params.name === "scripts") {
                    uri = '/recipes?projectName=' + params.projectName + '&projectId=' + params.projectId
                } else if (params.name == "flow") {
                    uri = '/flow?projectName=' + params.projectName + '&projectId=' + params.projectId
                }  else if(params.name == "airflow") {
					uri = '/airflow?projectName=' + params.projectName + '&projectId=' + params.projectId
				}
                this.router.transitionTo( uri )
                break
            case "itemClicked":
                console.log("alfred test item clicked")
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

	@action
	registerListenerIframe(element) {
		element.allData = this.calAllData
		this.iframeURL = `${this.iframeURL}?dag_id=${element.allData.projectName}_${element.allData.projectName}_developer`
		console.log(this.iframeURL)
        element.addEventListener("event", this.listener)
        document.domain = "pharbers.com"
	}

    get calAllData() {
        this.args.model._isVue = true
        return this.args.model
    }
}

