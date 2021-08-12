import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DagComponent extends Component {
	@service router
	@service store

	@action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
				this.router.transitionTo( '/download/projects' )
                break
			case "changePage":
				//执行列表 分页
				let params = e.detail[0].args.param
				let executions = await this.store.query( "execution", { "filter[projectExecution]": params.project_id, "page[limit]": 10, "page[offset]": params.page * 10} )
				e.target.allData.executions = executions.filter(function(item) {
					return item.name !== ''
				})
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
