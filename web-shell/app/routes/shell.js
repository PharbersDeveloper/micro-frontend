import Route from "@ember/routing/route"
import { inject as service } from "@ember/service"

export default class ShellRoute extends Route {
	@service store
	@service oauth

	// 判断token
	beforeModel() {
		const judge = oauth.judgeAuth()
		console.log(judge)
	}

	model() {
		return ""
	}
}
