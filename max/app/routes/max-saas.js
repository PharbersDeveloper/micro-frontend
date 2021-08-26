import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from "@ember/service"


export default class MaxSaasRoute extends Route {
	@service cookies
	@service store
	@service ajax

	async model() {
		const accessToken = this.cookies.read( "access_token" )
		const applicationAdapter = this.get( "store" ).adapterFor( "application" )
		applicationAdapter.toggleProperty( "oauthRequest" )
		applicationAdapter.set("getUserInfo", 1)
		applicationAdapter.set("userAuthorization", accessToken)
		let allUserData
		let userData
		if(this.cookies.read('account_id')) {
			userData = await this.store.findRecord( "account", this.cookies.read('account_id') )
			applicationAdapter.toggleProperty( "oauthRequest" )
			applicationAdapter.set("getUserInfo", 1)
			applicationAdapter.set("userAuthorization", accessToken)
			applicationAdapter.set('needUserData', allUserData)
		}
		return RSVP.hash({
			userData: userData,
			_isVue: true
        })
	}
}
