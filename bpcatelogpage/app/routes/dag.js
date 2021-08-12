import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import RSVP from 'rsvp';

export default class DagRoute extends Route {
	@service store
    @service cookies
	
	async model( params ) {
        let dagDetail = await this.store.findRecord( "project", params.project_id)
        return RSVP.hash({
            dagDetail: dagDetail,
			_isVue: true
        })
    }
}
