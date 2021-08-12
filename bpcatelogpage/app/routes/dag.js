import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import RSVP from 'rsvp';

export default class DagRoute extends Route {
	@service store
    @service cookies
	
	async model( params ) {
        let dagDetail = await this.store.findRecord( "project", params.project_id)
		let executionsIdArr = dagDetail.hasMany('executions').ids()
		let ids = [
			...new Set(executionsIdArr.reduce((acc, val) => acc.concat(val), [])),
		];
		let executions = await this.store.query('execution', { 'ids[]': ids });
        return RSVP.hash({
            dagDetail: dagDetail,
			executions:executions,
			_isVue: true
        })
    }
}
