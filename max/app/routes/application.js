import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from "@ember/service"
import ENV from "max/config/environment"

export default class ApplicationRoute extends Route {
	@service cookies
	@service oauthService
	@service store
	@service ajax

	redirectUri = ENV.redirectUri
	accountsUri = ENV.accountsUri
	
	beforeModel( { targetName } ) {
		this._super( ...arguments )
		window.console.log( "target route:" + targetName )
		if ( targetName === "oauth-callback" ) {
			return
		} else if(this.oauthService.judgeAuth()) {
			// this.mqttService.mqttConnect()
			// let storage = window.localStorage
			// for(let i = 0; i < storage.length; i++) {
			// 	let key = storage.key(i),
			// 		value = storage.getItem(key),
			// 		content = JSON.parse(value)
				
			// 	this.store.pushPayload(content)
			// }
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
			let userData = await this.store.findRecord( "account", this.cookies.read('account_id') )
			//请求employer的数据
			let employerId = userData.belongsTo('employer').id()
			applicationAdapter.set("partner",1)
			let employerData = await this.store.findRecord( "partner", employerId )
			
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
