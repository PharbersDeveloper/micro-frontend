import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from "@ember/service"


export default class MaxSaasRoute extends Route {
	@service cookies
	@service oauthService
	@service store
	@service ajax

	beforeModel() {
		let cookies = this.get( "cookies" )

		if ( !cookies.read( "access_token" ) ) {
			this.transitionTo( "/" )
		}
	}

	async model() {
		//请求user的数据
		const accessToken = this.cookies.read( "access_token" )
		const applicationAdapter = this.get( "store" ).adapterFor( "application" )
		applicationAdapter.toggleProperty( "oauthRequest" )
		applicationAdapter.set("getUserInfo", 1)
		applicationAdapter.set("userAuthorization", accessToken)
		if(this.cookies.read('account_id')) {
			let name_show = decodeURI(this.cookies.read('user_name_show'))
			applicationAdapter.set("partner",1)
			applicationAdapter.toggleProperty( "oauthRequest" )
			applicationAdapter.set("getUserInfo", 1)
			applicationAdapter.set("userAuthorization", accessToken)
			return RSVP.hash( {
				name_show: name_show,
				_isVue: true
			} )
		}
		
	}
}
