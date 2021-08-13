import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import RSVP from 'rsvp';

export default class DagRunRoute extends Route {
	@service store
    @service cookies

	async model( params ) {
		const limit = 10
		let page = parseInt( params.page, 10 )
        if ( isNaN( page ) ) {
			page = 0
		}
        let dagDetail = await this.store.findRecord( "project", params.project_id)
        let executions = await this.store.query( "execution", { "filter[projectExecution]": params.project_id, "page[limit]": limit, "page[offset]": page * limit} )
		let targetExecution = await this.store.findRecord( "execution", params.execution_id)
		//arn通过model传给component
        return RSVP.hash({
			targetExecution: targetExecution,
            page: page,
            count: executions.meta.count,
            dagDetail: dagDetail,
			executions: executions.filter( it => it.id != ''),
			_isVue: true
        })
	}
}
