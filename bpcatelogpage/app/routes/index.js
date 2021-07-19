import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import ENV from "bpcatelogpage/config/environment"

export default class IndexRoute extends Route {
	@service cookies;
	@service ajax;
	redirectUri = ENV.redirectUri
	accountsUri = ENV.accountsUri
	clientId = ENV.clientId
	scope =  ENV.scope
	isLogin = true
	beforeModel(){
		let cookies = this.get( "cookies" )
		if (!cookies.read("access_token")) {
			const x = JSON.stringify({"client_id": this.clientId, "redirect_uri": this.redirectUri, "time": new Date().getTime()})
			const state = window.btoa(x)
			window.location.href =
				`${this.accountsUri}/welcome?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&state=${state}&scope=${this.scope}`
		}else {
			this.transitionTo("/download")
		}
	}
}
