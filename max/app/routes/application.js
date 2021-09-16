import Route from '@ember/routing/route';
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
		}
	}

}