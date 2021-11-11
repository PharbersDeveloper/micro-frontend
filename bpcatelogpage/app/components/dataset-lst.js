import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';



export default class DatasetLstComponent extends Component {
	@service router
	@service store
	@service cookies
	@service ajax

	@action
	listener(e) {
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
		this.args.model.dss.forEach(iter => {
			iter.label = eval(iter.label)
		})
		return this.args.model
	}
}
