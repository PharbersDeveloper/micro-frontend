import Route from "@ember/routing/route"
import { inject as service } from "@ember/service"
import RSVP from "rsvp"
import { camelize } from "@ember/string"
import ENV from "web-shell/config/environment"

export default class ShellRoute extends Route {
    @service cookies
	@service store
	@service("remote-loading") jsl
	@service("route-parse") rps

	async model(params) {
		console.log(params)
		if (Object.keys(params).length === 0) {
			params["path"] = "home"
		}

		/**
		 * 1. 第一步，需要从读取JS模版
		 */
		let pages = this.store.peekAll("page")
		pages = pages.filter((_) => true)
		if (pages.length === 0) {
			pages = await this.store.query("page", {
				"filter[clientId]": ENV.APP.clientId
			})
			pages = pages.filter((_) => true)
		}

		const pageCount = pages.length
		let curPage = "" // not found page
		let parseParams
		for (let idx = 0; idx < pageCount; ++idx) {
			const tmp = pages[idx]
			// let path = window.location.href.split("/")[window.location.href.split("/").length - 1]
			const [match, result] = this.rps.parse("/" + params.path, tmp.route)
			if (match) {
				curPage = tmp
				parseParams = result
				break
			}
		}

		/**
		 * 2. 动态的把需要的JS加载到dom中
		 */
		await this.jsl.loadRemoteJs(curPage.uri)
		await this.jsl.loadRemoteJsSync(curPage.cat)
		const clientName = curPage.clientName
		const modelName = camelize(curPage.name) + "RouteModel"
		const data = await window[clientName][modelName](this, parseParams)
		return RSVP.hash({
			page: curPage,
			data: data ? data : {},
			_isVue: true
		})
	}
}
