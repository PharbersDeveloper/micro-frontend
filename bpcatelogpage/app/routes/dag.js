import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import RSVP from 'rsvp';

export default class DagRoute extends Route {
	@service store
    @service cookies
    @service('loading') loadingService;

	queryParams = {
        page: {
            refreshModel: true
        }
    }
	
	async model( params ) {
		// const limit = 10
		// let page = parseInt( params.page, 10 )
        // if ( isNaN( page ) ) {
		// 	page = 0
		// }
        // let dagDetail = this.store.findRecord( "state-machine", params.project_id)
        // let executions = this.store.query( "execution", { "filter[projectExecution]": params.project_id, "page[limit]": limit, "page[offset]": page * limit} )
		// await Promise.all([dagDetail,executions])


		// let executionsIdArr = dagDetail.hasMany('executions').ids()
		// let ids = [
		// 	...new Set(executionsIdArr.reduce((acc, val) => acc.concat(val), [])),
		// ];
		// let executions = await this.store.query('execution', { 'ids[]': ids });
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
        return RSVP.hash({
            // page: page,
            // count: executions.meta.count,
            // dagDetail: dagDetail,
			// executions: executions.filter( it => it),
			_isVue: true
        })
    }
}
