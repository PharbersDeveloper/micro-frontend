import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class FlowComponent extends Component {
    @service router
    @service store
    @service cookies
    @service('loading') loadingService;
    @service ajax
	// @tracked iframeURL = "https://dag.pharbers.com/index.html#/graph"
	@tracked iframeURL = "http://dag.pharbers.com.s3-website.cn-northwest-1.amazonaws.com.cn/#/graph"


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
                    uri = '/flow?projectName=' + params.projectName + '&projectId=' + params.projectId
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
		this.iframeURL = this.iframeURL + "?projectId=" + element.allData.projectId
        element.addEventListener("event", this.listener)
	}

    get calAllData() {
        this.args.model._isVue = true
        return this.args.model
    }
}

