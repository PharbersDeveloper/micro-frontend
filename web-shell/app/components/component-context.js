import Component from "@glimmer/component"
import { action } from "@ember/object"
// import { tracked } from "@glimmer/tracking"
// import { inject as service } from '@ember/service'

export default class ComponentContextComponent extends Component {
	@action
	listener(e) {
		// coloring ember body
		// passing color value to react context via props
		// const webcomponent = e.target
		// webcomponent.color = newColor
		// webcomponent.msg_title = { test: "alfred" }
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
