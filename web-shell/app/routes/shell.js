import Route from "@ember/routing/route"
import { inject as service } from "@ember/service"

export default class ShellRoute extends Route {
	@service store

	async model(params) {
		console.log(params)
		/**
		 * 1. 第一步，需要从读取模版
		 */
		const pages = await this.store.query("page", {
			"filter[route]": "/" + params.path
		})
		console.log(pages)
		debugger

		return this.store.query("project", {
			"ids[]": ["jFlL0WS1Qwy5buKh", "JfSmQBYUpyb4jsei"]
		})
	}
}
