import Route from "@ember/routing/route"
import { inject as service } from "@ember/service"

export default class ShellRoute extends Route {
	@service store

	model() {
		// return this.store.findAll("project")
		return this.store.query("project", { "ids[]": ["jFlL0WS1Qwy5buKh"] })
	}
}
