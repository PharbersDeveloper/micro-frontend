export async function phHistogramInsightpageEventHandler(e, route) {
	let params = e.detail[0].args.param
	console.log(params)
	let uri = ""
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			if (params.name === "slidespage") {
				uri =
					"slidespage?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId +
					"&dashboardId=" +
					params.dashboardId
			} else if (params.name === "dataset-lst") {
				uri =
					"dataset-lst?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			}
			route.router.transitionTo("shell", uri)
			break
	}
}
