import Component from "@glimmer/component"
import { action } from "@ember/object"

export default class WcContextComponent extends Component {
	@action
	listener(e) {
		console.log("alfred listener action")
	}

	@action
	async registerListener(element) {
		this.args.allData.data.isVue = true
		element.allData = this.args.allData.data
		element.addEventListener("event", this.listener)
	}

	@action
	unregisterListener(element) {
		element.removeEventListener("event", this.listener)
	}
}
