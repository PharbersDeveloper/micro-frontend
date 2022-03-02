import Route from "@ember/routing/route"
import { inject as service } from "@ember/service"
import RSVP from "rsvp"
import { camelize } from "@ember/string"
import ENV from "web-shell/config/environment"

export default class ShellRoute extends Route {
	@service oauthService
	@service cookies
	@service store
    @service browserEventsService;
	@service("remote-loading") jsl
	@service("route-parse") rps
	@service("ph-menu") ms
	@service('loading') loadingService
	@service("execution-status") noticeService


	beforeModel(transition){
		if (!this.oauthService.judgeAuth()) {
			alert("登录过期，请重新登录")
			this.oauthService.obtainAuth()
		}
	}

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
			let param = window.location.href.split("?")[1]
			let routeName = params.path
			if(param && !params.path.split("?")[1]) {
				routeName = `${params.path}?${param}`
			}
			const [match, result] = this.rps.parse("/" + routeName, tmp.route)
			if (match) {
				curPage = tmp
				parseParams = result
				break
			}
		}

		/**
		 * 2. 动态的把需要的JS加载到dom中
		 */
		if (curPage.uri)
			await this.jsl.loadRemoteJs(curPage.uri)
		if (curPage.cat)
			await this.jsl.loadRemoteJsSync(curPage.cat)
		const clientName = curPage.clientName
		const modelName = camelize(curPage.name) + "RouteModel"
		const data = await window[clientName][modelName](this, parseParams, curPage)
		return RSVP.hash({
			page: curPage,
			data: data ? data : {},
			_isVue: true
		})
	}
}
