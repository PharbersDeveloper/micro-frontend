import Component from "@glimmer/component"
import { tracked } from "@glimmer/tracking"
import { action } from "@ember/object"

export default class ExampleWebComponentComponent extends Component {
	@tracked componentTitle = "example component title"

	@action
	handleClick() {
		console.log("alfred test")
		const event = new Event("example-event")
		this.dispatchEvent(event)
	}
}
