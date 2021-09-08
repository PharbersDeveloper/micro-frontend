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
        let assets = await this.store.query( "asset", { "filter[type]": "file", "filter[labels]": params.ym+','+params.provider } )
        return RSVP.hash({
            assets: assets.filter( it => it),
			_isVue: true
        })
    }
}
