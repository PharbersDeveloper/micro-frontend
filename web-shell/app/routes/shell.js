import Route from "@ember/routing/route"
import { inject as service } from "@ember/service"

export default class ShellRoute extends Route {
	@service store
	@service oauthService

	// 判断token
	beforeModel() {
		const judge = this.oauthService.judgeAuth()
		console.log(judge)
	}

	model() {
		return ""
	}
}
