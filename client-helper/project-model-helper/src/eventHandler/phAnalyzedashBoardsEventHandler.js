// eslint-disable-next-line no-unused-vars
export async function phAnalyzeDashboardsEventHandler(e, route) {
	let params = e.detail[0].args.param
	console.log(params)
	let uri = ""
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			if (params.name === "clickDashboardName") {
				uri =
					"slidespage?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			}
			route.router.transitionTo("shell", uri)
			break
		case "createDashboard":
			uri =
				"slidespage?projectName=" +
				params.projectName +
				"&projectId=" +
				params.projectId
			route.router.transitionTo("shell", uri)
			break
		default:
			console.log("other click event!")
	}
}
