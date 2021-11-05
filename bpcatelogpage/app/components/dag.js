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
                if(params.name == 'projects') {
                    uri = '/projects'
                } else if(params.name == 'dataset') {
                    // uri = '/dataset?projectName=' + params.projectName +'&projectId=' + params.projectId
                    uri = '/dataset-lst?projectName=' + params.projectName + '&projectId=' + params.projectId
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
