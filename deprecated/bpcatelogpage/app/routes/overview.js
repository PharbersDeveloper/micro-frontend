import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import ENV from 'bpcatelogpage/config/environment';

export default class OverviewRoute extends Route {
	@service cookies
	@service ajax
	@service store
	@service oauthService
	namespace = ENV.namespace

	beforeModel() {
		let cookies = this.get( "cookies" )

		if ( !cookies.read( "access_token" ) ) {
			this.transitionTo( "index" )
		}
	}

	async model() {
		let name_show, company_name_show
		if(this.cookies.read('account_id')) {
			name_show = decodeURI(this.cookies.read('user_name_show'))
			company_name_show = decodeURI(this.cookies.read('company_name_show'))
		}
		return RSVP.hash( {
			name_show: name_show,
			company_name_show: company_name_show,
			_isVue: true
		} )
	}
}
