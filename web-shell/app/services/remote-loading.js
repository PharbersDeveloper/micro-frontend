import Service from "@ember/service"

export default class RemoteLoadingService extends Service {
	loadedJs = []

	loadRemoteJs(source, callback) {
		let that = this
		const script = document.createElement("script")
		script.onload = function () {
			that.loadedJs.push(source)
			if (callback) {
				callback()
			}
		}
		script.src = source
		document.head.appendChild(script)
	}
}
