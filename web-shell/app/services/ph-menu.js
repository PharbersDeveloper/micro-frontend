import Service from "@ember/service"
import ENV from "web-shell/config/environment"
import { inject as service } from "@ember/service"

export default class PhMenuService extends Service {
	@service store

	async queryLayoutByClient() {
		let layout = this.store.peekRecord("layout", ENV.APP.clientId)
		if (layout === null) {
			layout = await this.store.findRecord("layout", ENV.APP.clientId)
		}
		return layout
	}

	async queryClientPages() {
		let pages = this.store.peekAll("page")
		pages = pages.filter((_) => true)
		if (pages.length === 0) {
			pages = await this.store.query("page", {
				"filter[clientId]": ENV.APP.clientId
			})
			pages = pages.filter((_) => true)
		}
		return pages
	}
}
