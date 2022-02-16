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

	// @action
    // async listener(e) {
    //     switch(e.detail[0].args.callback) {
    //         case "linkToPage":
    //             let params = e.detail[0].args.param;
    //             let uri = ''
    //             if(params.name === "project") {
    //                 //返回project
    //                 uri = `projects/`+ params.projectId
    //             } else if (params.name == "datasets") {
    //                 uri = 'dataset-lst?projectName=' + params.projectName +'&projectId=' + params.projectId
    //             } else if(params.name === "scripts") {
    //                 uri = 'recipes?projectName=' + params.projectName + '&projectId=' + params.projectId
    //             } else if (params.name == "flow") {
    //                 uri = 'flow?projectName=' + params.projectName + '&projectId=' + params.projectId
    //             }  else if(params.name == "airflow") {
	// 				uri = 'airflow?projectName=' + params.projectName + '&projectId=' + params.projectId
	// 			}
    //             this.router.transitionTo( "shell", uri )
    //             break
    //         case "itemClicked":
    //             console.log("alfred test item clicked")
    //             break
    //         default:
    //             console.log("other click event!")
    //     }
    // }

    // @action
    // unregisterListener(element) {
    //     element.removeEventListener("event", this.listener)
    // }

	// @action
	// registerListenerIframe(element) {
	// 	// href param
	// 	const href = window.location.href.split("?")[1]
	// 	const hrefParam = href.split("&")
	// 	this.projectName = hrefParam[0].split("=")[1]
	// 	this.projectId = hrefParam[1].split("=")[1]

	// 	this.args.allData._isVue = true
	// 	element.allData = this.args.allData
	// 	this.iframeURL = `${this.iframeURL}?projectId=${this.projectId}&projectName=${this.projectId}&flowVersion=developer`
    //     element.addEventListener("event", this.listener)
    //     document.domain = "pharbers.com"
	// }
	@action
	async listener(e) {
		let modelName = camelize(this.args.allData.page.name) + "EventHandler"
		await window[this.args.allData.page.clientName][modelName](e, this)
	}

	@action
	iframeEvent(msg) {
		debugger
		let that = this
		this.noticeService.defineAction({
			type: "iot",
			// id: results[0].data.id,
			ele: that,
			id: msg.cmd,
			projectId: this.args.allData.data.projectId,
			ownerId: this.cookies.read("account_id"),
			callBack: this[`${msg.cmd}Callback`]
		})
		// 向iframe传递消息
		document.getElementById("mainIframe").contentWindow.postMessage({
			cmd: "you know???"
		}, '*')
	}

	@action
	runDagCallback(param, payload) {
		debugger
	}

	@action
	async registerListener(element) {
		window.addEventListener('message', this.iframeEvent)
		this.args.allData.data._isVue = true
		element.allData = this.args.allData.data
		element.addEventListener("event", this.listener)
		document.domain = "pharbers.com"
	}

	@action
	unregisterListener(element) {
		element.removeEventListener("event", this.listener)
	}
}
