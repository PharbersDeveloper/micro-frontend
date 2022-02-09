import Component from "@glimmer/component"
import { inject as service } from "@ember/service"
import ENV from "web-shell/config/environment"

export default class PhMenuLayoutComponent extends Component {
	@service router
	@service("ph-menu") ms
	@service store

	get layoutCss() {
		const layout = this.store.peekRecord("layout", ENV.APP.clientId)
		return layout.css
	}

	get menuComponent() {
		if (this.args.menuComponent) {
			return this.args.menuComponent
		} else return "phcatelog-menu"
	}

	get navComponent() {
		if (this.args.navComponent) {
			return this.args.navComponent
		} else return ""
	}
}
