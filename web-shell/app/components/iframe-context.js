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
	iframeEvent(event) {
		console.log("ember接受iframe消息", event)
		if(event.data.message) {
			//dag实时
			this.noticeService.defineAction({
				type: "iot",
				timeout: 60 * 60 * 5,
				id: event.data.message.dagRunCmd,
				projectId: this.args.allData.data.projectId,
				ownerId: this.cookies.read("account_id"),
				callBack: this.runDagCallback
			})
			//dag整体
			this.noticeService.defineAction({
				type: "iot",
				timeout: 60 * 60 * 5,
				id: event.data.message.dagExecutionCmd,
				projectId: this.args.allData.data.projectId,
				ownerId: this.cookies.read("account_id"),
				callBack: this.executionStatusCallback
			})
		}
	}

	@action
	executionStatusCallback(param, payload) {
		console.log("dag整体callback")
		console.log(payload)
		console.log(param)
		let obj = {
			param,
			payload,
			cmd: "finish_dag"
		}
		// 向iframe传递消息
		document.getElementById("mainIframe").contentWindow.postMessage({
			message: obj
		}, '*')
	}

	@action
	runDagCallback(param, payload) {
		console.log("dag实时callback")
		console.log(payload)
		console.log(param)
		let obj = {
			param,
			payload,
			cmd: "render_dag"
		}
		// 向iframe传递消息
		document.getElementById("mainIframe").contentWindow.postMessage({
			message: obj
		}, '*')
	}

	@action
	async registerListener(element) {
		window.addEventListener('message', this.iframeEvent)
		this.args.allData.data._isVue = true
		element.allData = this.args.allData.data
		console.log(element.allData.data)
		element.addEventListener("event", this.listener)
		document.domain = "pharbers.com"
	}

	@action
	unregisterListener(element) {
		element.removeEventListener("event", this.listener)
	}
}
