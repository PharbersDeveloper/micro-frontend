import Component from "@glimmer/component"
import { action } from "@ember/object"
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'
import { camelize } from "@ember/string"

export default class IframeContextComponent extends Component {
	@service router
	@service store
	@service cookies
	@service awsService
	@service downloadFile
    // @service noticeService;
    @service('loading') loadingService
	@service("execution-status") noticeService
	@tracked allData

	@action
	async listener(e) {
		let modelName = camelize(this.args.allData.page.name) + "EventHandler"
		await window[this.args.allData.page.clientName][modelName](e, this)
	}

	@action
	iframeEvent(msg) {
		console.log("ember接受iframe消息", msg)
		// this.noticeService.defineAction({
		// 	type: "iot",
		// 	// id: results[0].data.id,
		// 	ele: this,
		// 	id: msg.cmd,
		// 	projectId: this.args.allData.data.projectId,
		// 	ownerId: this.cookies.read("account_id"),
		// 	callBack: this.runDagCallback
		// })
		document.getElementById("mainIframe").contentWindow.postMessage({
			cmd: obj
		}, '*')
	}

	@action
	runDagCallback(param, payload) {
		debugger
		let obj = {
			param,
			payload,
			cmd: "renderDag"
		}
		// 向iframe传递消息
		document.getElementById("mainIframe").contentWindow.postMessage({
			cmd: obj
		}, '*')
	}

	@action
	async registerListener(element) {
		window.addEventListener('message', this.iframeEvent)
		this.args.allData.data._isVue = true
		element.allData = this.args.allData.data
		element.addEventListener("event", this.listener)
		// document.domain = "pharbers.com"
	}

	@action
	unregisterListener(element) {
		element.removeEventListener("event", this.listener)
	}
}
