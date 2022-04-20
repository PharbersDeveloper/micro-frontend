export async function phAnalyzeBpExecutionsHistoryEventHandler(e, route) {
	let params = e.detail[0].args.param
	console.log(params)
	let uri = ""
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			if (params.name == "changeHistogram") {
				uri =
					"insightpage?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId +
					"&dashboardId=" +
					params.dashboardId +
					"&slideId=" +
					params.slideId +
					"&contentId=" +
					params.contentId
			}
			route.router.transitionTo("shell", uri)
			break
	}
}
