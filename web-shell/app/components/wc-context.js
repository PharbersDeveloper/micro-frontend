import Component from "@glimmer/component"
import { action } from "@ember/object"
import { tracked } from "@glimmer/tracking"

export default class WcContextComponent extends Component {
	// @tracked name = "alfred"

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
