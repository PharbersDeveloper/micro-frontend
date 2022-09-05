export async function phDagContainerEventHandler(e, route) {
	const params = e.detail[0].args.param

	let callbacks = {}

	if (e.detail[0].args.callback === "runDagStatus") {
		if (params) {
			callbacks = params.callbacks
			const notification = callbacks["notification"]
			const executionStatus = callbacks["executionStatus"]
			route.projectId = params.projectId
			route.noticeService.defineAction({
				type: "iot",
				remoteResource: "notification",
				runnerId: "",
				id: notification["runnerId"],
				eventName: notification["eventName"],
				projectId: params.projectId,
				ownerId: route.cookies.read("account_id"),
				callBack: runDagCallBack
			})
			route.noticeService.defineAction({
				type: "iot",
				remoteResource: "notification",
				runnerId: "",
				id: executionStatus["runnerId"],
				eventName: executionStatus["eventName"],
				projectId: params.projectId,
				ownerId: route.cookies.read("account_id"),
				callBack: executionStatusCallback
			})
		}
	}

	function runDagCallBack(param, payload) {
		console.debug("run dag callback", param, payload)
	}

	function executionStatusCallback(param, payload) {
		console.debug("execution status callback", param, payload)
	}
}
