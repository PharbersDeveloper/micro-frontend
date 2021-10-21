import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import ENV from 'bpcatelogpage/config/environment';

export default class DownloadRoute extends Route {
	@service cookies
	@service ajax
	@service store
	namespace = ENV.namespace

	beforeModel() {
		let cookies = this.get( "cookies" )

		if ( !cookies.read( "access_token" ) ) {
			this.transitionTo( "index" )
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
		let userData = await this.store.findRecord( "account", this.cookies.read('account_id') )
		//请求employer的数据
		let employerId = userData.belongsTo('employer').id()
		applicationAdapter.set("partner",1)
		let employerData = await this.store.findRecord( "partner", employerId )
		await Promise.all([userData,employerId])
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
