import Route from "@ember/routing/route"
import { inject as service } from "@ember/service"
import config from "web-shell/config/environment"

export default class ShellRoute extends Route {
	@service store
	@service oauthService

	debugToken = config.APP.debugToken

	beforeModel() {
		// TODO: 判断token
		// const judge = this.oauthService.judgeAuth()
		// if (!judge) {
		// 	window.href = ""
		// }
	}

	model() {
		return ""
	}
}
