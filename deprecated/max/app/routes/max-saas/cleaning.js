import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import RSVP from 'rsvp';

export default class MaxSaasImportRoute extends Route {
	@service store
    @service cookies
	queryParams = {
        ym: {
            refreshModel: true
        },
        provider: {
            refreshModel: true
        }
    }
	async model( params ) {
		let time 
		if(params.ym) {
			let ym = params.ym.slice(0,4) + '/' + params.ym.slice(4) +'/01'
			time = new Date(ym).getTime()
		}
        return RSVP.hash({
			dt: params.ym,
			provider: params.provider,
			_isVue: true
        })
    }
}
