import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'


export default class DagComponent extends Component {
    @service router
    @service store
    @tracked random

    @action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                let params = e.detail[0].args.param
                let uri = ''
				console.log(params.name)
				if(params.name == 'datasets') {
                    uri = '/dataset-lst?projectName=' + params.projectName + '&projectId=' + params.projectId
                } else if(params.name == 'project') {
					uri = '/projects/' + params.projectId
				}
                //执行列表 分页
                this.router.transitionTo( uri )
                break
            default:
                console.log("other click event!")
        }
    }

    @action
    registerListener(element) {
        element.allData = this.calAllData
		element.allData.projectName = element.allData.projectDetail.name
		element.allData.projectId = element.allData.projectDetail.id
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
