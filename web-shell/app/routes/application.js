import { inject as service } from "@ember/service"
import { tracked } from "@glimmer/tracking"
import Route from "@ember/routing/route"
import { action } from "@ember/object"
import ENV from "web-shell/config/environment"

export default class ApplicationRoute extends Route {
	@service intl
	@service("loading") loadingService

	get layoutName() {
		return this.layout.name
	}

	get clientName() {
		return ENV.APP.clientName
	}

	beforeModel(param) {
		this.loadingService.beforeLoading()
		let curLang = window.localStorage.getItem("lang")
		if (curLang) {
			if (curLang === "中文") {
				this.intl.setLocale(["zh-cn"])
			} else {
				this.intl.setLocale(["en-us"])
			}
		} else {
			this.intl.setLocale(["zh-cn"])
			window.localStorage.setItem("lang", "中文")
		}
	}

	@action
	willTransition(_) {
		this.loadingService.beforeLoading()
	}

	@action
	didTransition() {
		//跳转到页面顶部
		document.documentElement.scrollTop = 0
		document.body.scrollTop = 0
		this.loadingService.afterLoading()
	}

	async model() {
		this.afterModel = function () {
			this.loadingService.afterLoading()
		}

		let layout = this.store.peekRecord("layout", ENV.APP.clientId)
		if (layout === null) {
			layout = await this.store.findRecord("layout", ENV.APP.clientId)
		}
		return layout
	}
}
