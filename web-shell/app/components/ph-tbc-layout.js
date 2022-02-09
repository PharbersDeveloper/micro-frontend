import Component from "@glimmer/component"
import { inject as service } from "@ember/service"

export default class PhTbcLayoutComponent extends Component {
	@service router

	get needInverse() {
		return [
			"max",
			"rw",
			"consulting",
			"activity-list",
			"about-us",
			"report-list",
			"boyunhui",
			"download-report",
			"above-data-detail",
			"industry-activity-detail"
		]
	}

	get activeRoute() {
		return this.router.currentRouteName
	}

	get navComponent() {
		if (this.args.navComponent) {
			return this.args.navComponent
		} else return "pharbers-nav-top"
	}

	get footComponent() {
		if (this.args.footComponent) {
			return this.args.footComponent
		} else return "pharbers-footer"
	}
}
