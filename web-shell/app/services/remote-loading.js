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

	loadRemoteJsSync(source) {
		return new Promise((resolve, reject) => {
			const script = document.createElement("script")
			script.src = source
			script.onload = () => {
				resolve()
			}
			script.onerror = () => {
				reject("cannot load script " + source)
			}
			document.body.appendChild(script)
		})
	}
}
