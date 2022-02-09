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
	@service("ph-menu") ms

	async model(params) {
		if (Object.keys(params).length === 0) {
			params["path"] = "home"
		}

		/**
		 * 1. 第一步，需要从读取JS模版
		 */
		const pages = await this.ms.queryClientPages()

		const pageCount = pages.length
		let curPage = "" // not found page
		let parseParams
		for (let idx = 0; idx < pageCount; ++idx) {
			const tmp = pages[idx]
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
