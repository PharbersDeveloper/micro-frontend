import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import ENV from "bpcatelogpage/config/environment"

export default class ApplicationRoute extends Route {
	@service cookies
	@service oauthService
	@service noticeService
	@service store

	redirectUri = ENV.redirectUri
	accountsUri = ENV.accountsUri
	
	beforeModel( { targetName } ) {
		this._super( ...arguments )
		window.console.log( "target route:" + targetName )
		console.log("调用Observer")
		this.noticeService.observer()
	}
}
