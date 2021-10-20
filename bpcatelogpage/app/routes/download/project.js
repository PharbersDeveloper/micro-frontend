import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import RSVP from 'rsvp';

export default class DownloadProjectRoute extends Route {
	@service store
    @service cookies

	async model( params ) {
        let projects = await this.store.query( "stateMachine")
		debugger
        return RSVP.hash({
            projects: projects.filter( it => it),
			_isVue: true
        })
    }

}
