import Component from "@glimmer/component"
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class IframeContextComponent extends Component {
	@service router
    @service store
    @service cookies
    @service('loading') loadingService;
    @service ajax
	@tracked iframeURL = "https://dag.pharbers.com/index.html#/graph"
	@tracked projectName
	@tracked projectId

	@action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                let params = e.detail[0].args.param;
                let uri = ''
                if(params.name === "project") {
                    //返回project
                    uri = `projects/`+ params.projectId
                } else if (params.name == "datasets") {
                    uri = 'dataset-lst?projectName=' + params.projectName +'&projectId=' + params.projectId
                } else if(params.name === "scripts") {
                    uri = 'recipes?projectName=' + params.projectName + '&projectId=' + params.projectId
                } else if (params.name == "flow") {
                    uri = 'flow?projectName=' + params.projectName + '&projectId=' + params.projectId
                }  else if(params.name == "airflow") {
					uri = 'airflow?projectName=' + params.projectName + '&projectId=' + params.projectId
				}
                this.router.transitionTo( "shell", uri )
                break
            case "itemClicked":
                console.log("alfred test item clicked")
                break
            default:
                console.log("other click event!")
        }
    }

    @action
    unregisterListener(element) {
        element.removeEventListener("event", this.listener)
    }

	@action
	registerListenerIframe(element) {
		// href param
		const href = window.location.href.split("?")[1]
		const hrefParam = href.split("&")
		this.projectName = hrefParam[0].split("=")[1]
		this.projectId = hrefParam[1].split("=")[1]

		this.args.allData._isVue = true
		element.allData = this.args.allData
		this.iframeURL = `${this.iframeURL}?projectId=${this.projectId}&projectName=${this.projectId}&flowVersion=developer`
        element.addEventListener("event", this.listener)
        document.domain = "pharbers.com"
	}
}
