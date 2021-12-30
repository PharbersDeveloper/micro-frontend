import Route from "@ember/routing/route"
import { inject as service } from "@ember/service"

export default class ShellRoute extends Route {
	@service store

	model() {
		return ["小逼崽子"]
	}
}
