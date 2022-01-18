import Route from "@ember/routing/route"
import { inject as service } from "@ember/service"
import RSVP from "rsvp"
import { camelize } from "@ember/string"
import ENV from "web-shell/config/environment"

export default class ShellRoute extends Route {
	@service store
	@service("remote-loading") jsl
	@service("route-parse") rps

	async model(params) {
		/**
		 * 1. 第一步，需要从读取JS模版
		 */
		let pages = this.store.peekAll("page")
		pages = pages.filter((_) => true)
		if (pages.length === 0) {
			pages = await this.store.query("page", {
				"filter[clientId]": ENV.APP.clientId
			})
			pages = pages.filter(_ => true)
		}

		const pageCount = pages.length
		let curPage = "" // not found page
		for (let idx = 0; idx < pageCount; ++idx) {
			const tmp = pages[idx]
			const [match, parseParams] = this.rps.parse(
				"/" + params.path,
				tmp.route
			)
			if (match) {
				curPage = tmp
				break
			}
		}
		// const curPage = pages.find((x) => x.route === "/" + params.path)

		/**
		 * 2. 动态的把需要的JS加载到dom中
		 */
		this.jsl.loadRemoteJs(curPage.uri)
		this.jsl.loadRemoteJs(curPage.cat)

		const clientName = curPage.clientName
		const modelName = camelize(curPage.name) + "RouteModel"
		const data = await window[clientName][modelName](this)
		return RSVP.hash({
			page: curPage,
			data: data ? data : {},
			isVue: true
		})
	}
}
