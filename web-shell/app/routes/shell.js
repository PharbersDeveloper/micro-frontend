import Route from "@ember/routing/route"
import { inject as service } from "@ember/service"
import RSVP from "rsvp"

export default class ShellRoute extends Route {
	@service store
	@service("remote-loading") jsl

	async model(params) {
		/**
		 * 1. 第一步，需要从读取JS模版
		 */
		let pages = this.store.peekAll("page")
		if (pages.length === 0) {
			console.log("need query page configures")
			pages = await this.store.query("page", {
				"filter[clientId]": "fjjnl2uSalHTdrppHG9u"
			})
		}

		const curPage = pages.find((x) => x.route === "/" + params.path)

		/**
		 * 2. 动态的把需要的JS加载到dom中
		 */
		this.jsl.loadRemoteJs(curPage.uri)

		const projects = await alfredTest(this)
		debugger
		return RSVP.hash({
			page: curPage,
			projects: projects
		})
	}
}
