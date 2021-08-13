import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DagRunComponent extends Component {

	@action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
				let name = e.detail[0].args.param.name
				let route = e.detail[0].args.param.route
				debugger
				if(name == 'toDagPageList') {
					this.router.transitionTo( 'projects/dag-run' )
				} else if(name == 'toProjectsList') {
					this.router.transitionTo( route )
				}
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
		debugger
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
