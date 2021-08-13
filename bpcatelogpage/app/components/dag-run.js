import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class DagRunComponent extends Component {
    @tracked dagid;
	@service router
	@service store

	@action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
				let linkParam = e.detail[0].args.param
				if(linkParam.name == 'linkToPageDag'){
					this.router.transitionTo( `/projects/`+ linkParam.project_id )
				} else {
					this.router.transitionTo( '/projects' )
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
		element.allData = this.calAllData
		if(element.allData.targetExecution) {
			element.allData.arn = element.allData.targetExecution.arn
		}
		if(element.allData.arn) {
			this.dagid = element.allData.arn.split("execution:")[1].split(":")[0]+'_id'
		}
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
