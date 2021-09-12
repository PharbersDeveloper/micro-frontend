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
		let allUserData
		if(this.cookies.read('account_id')) {
			let userData = await this.store.findRecord( "account", this.cookies.read('account_id'), { include: 'employer' } )
			let employerId = userData.belongsTo('employer').id()
			let employerData = await userData.employer

			applicationAdapter.set("partner",1)
			const options = {
				domain: ".pharbers.com",
				path: "/",
				maxAge: this.cookies.read( "expires_in" )
			}
			this.cookies.write( "account_id", userData.id, options )
			this.cookies.write( "user_email", userData.email, options )

			applicationAdapter.toggleProperty( "oauthRequest" )
			applicationAdapter.set("getUserInfo", 1)
			applicationAdapter.set("userAuthorization", accessToken)
			applicationAdapter.set('needUserData', allUserData)
			return RSVP.hash( {
				personalData: userData,
				employerId: employerId,
				employerData: employerData,
				_isVue: true
			} )
		}
		
	}
}
