import Route from "@ember/routing/route"
import { inject as service } from "@ember/service"
import config from "web-shell/config/environment"

export default class ShellRoute extends Route {
	@service store

	debugToken = config.APP.debugToken

	model() {
		return ["小逼崽子"]
	}
}
