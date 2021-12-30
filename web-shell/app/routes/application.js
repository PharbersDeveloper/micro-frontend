import { inject as service } from "@ember/service"
import Route from "@ember/routing/route"

export default class ApplicationRoute extends Route {
	@service intl
	// @service oauthService

	beforeModel() {
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

		// TODO: 判断token
		// const judge = this.oauthService.judgeAuth()
		// if (!judge) {
		// 	window.href = ""
		// }
	}
}
