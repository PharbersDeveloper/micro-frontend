import Component from "@glimmer/component"
import { action } from "@ember/object"
import { inject as service } from '@ember/service';
import { camelize } from "@ember/string"

export default class WcContextComponent extends Component {
	@service router
	@action
	async listener(e) {
		console.log("alfred listener action")
		let modelName = camelize(this.args.allData.page.name) + "EventHandler"
		await window[this.args.allData.page.clientName][modelName](e, this)
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