import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'
import { inject as service } from "@ember/service"

export default class PhPntLayoutComponent extends Component {
	@service cookies;
	@service router
	@tracked projectName
	@tracked projectId

	get navComponent() {
		if(this.args.navComponent) {
			return this.args.navComponent
		} else return "ph-analyze-bp-nav-top-max"
	}

	@action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                let params = e.detail[0].args.param;
                let uri = ''
				if (params.name === "projects") {
					window.open(`https://general.pharbers.com/projects`)
				} else {
					if(params.name === "project") {
						//返回project
						uri = `projects/${this.projectId}?projectName=${this.projectName}&projectId=${this.projectId}`
					} else if (params.name == "datasets") {
						uri = 'dataset-lst?projectName=' + this.projectName +'&projectId=' + this.projectId
					} else if(params.name === "scripts") {
						uri = 'recipes?projectName=' + this.projectName + '&projectId=' + this.projectId
					} else if (params.name == "flow") {
						uri = 'flow?projectName=' + this.projectName + '&projectId=' + this.projectId
					}  else if(params.name == "airflow") {
						uri = 'airflow?projectName=' + this.projectName + '&projectId=' + this.projectId
					} 
                	this.router.transitionTo( "shell", uri )
				}
                break
            default:
                console.log("other click event!")
        }
    }

	@action
    registerListener(element) {
		const href = window.location.href.split("?")[1]
		const hrefParam = href.split("&")
		this.projectName = hrefParam[0].split("=")[1]
		this.projectId = hrefParam[1].split("=")[1]
        element.allData = {
			projectName: this.projectName,
			projectId: this.projectId,
			_isVue: true
		}
        element.addEventListener("event", this.listener)
    }

	@action
    unregisterListener(element) {
        element.removeEventListener("event", this.listener)
    }
}
