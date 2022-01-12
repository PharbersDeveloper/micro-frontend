import Component from "@glimmer/component"
import { action } from "@ember/object"

export default class WcContextComponent extends Component {
	@action
	listener(e) {
		console.log("alfred listener action")
	}

	@action
	registerListener(element) {
		element.addEventListener("event", this.listener)
	}

	@action
	unregisterListener(element) {
		element.removeEventListener("event", this.listener)
	}
}
