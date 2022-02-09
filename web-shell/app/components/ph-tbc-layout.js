import Component from "@glimmer/component"

export default class PhTbcLayoutComponent extends Component {
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
