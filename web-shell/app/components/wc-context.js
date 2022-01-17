import Component from "@glimmer/component"
import { action } from "@ember/object"

export default class WcContextComponent extends Component {
	@action
	listener(e) {
		console.log("alfred listener action")
	}

	@action
	async registerListener(element) {
		element.allData = await this.calAllData
		debugger
		element.addEventListener("event", this.listener)
	}

	@action
	unregisterListener(element) {
		element.removeEventListener("event", this.listener)
	}
	get calAllData() {
		this.args.model._isVue = true
		return this.args.model
    }
}
