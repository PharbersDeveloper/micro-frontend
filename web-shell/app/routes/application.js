import { inject as service } from "@ember/service"
import { tracked } from "@glimmer/tracking"
import Route from "@ember/routing/route"
import { action } from "@ember/object"
import ENV from "web-shell/config/environment"

export default class ApplicationRoute extends Route {
	@service intl
	@service("loading") loadingService
	@service("ph-menu") menuService
	@service("remote-loading") jsl

	get clientName() {
		return ENV.APP.clientName
	}

	beforeModel(param) {
		this.loadingService.beforeLoading()
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
		const layout = await this.menuService.queryLayoutByClient()
		if (layout.script !== null) {
			this.jsl.loadRemoteJs(layout.script)
		}

		// TODO: remote load css
		if (layout.css !== null) {

		}

		return layout
	}
}
