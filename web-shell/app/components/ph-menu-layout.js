import Component from "@glimmer/component"
import { inject as service } from "@ember/service"

export default class PhMenuLayoutComponent extends Component {
	@service router
	@service("ph-menu") ms

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
