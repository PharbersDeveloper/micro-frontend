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
			}
			route.router.transitionTo("shell", uri)
			break
		case "clickNewChartName":
			uri =
				"insightpage?projectName=" +
				params.projectName +
				"&projectId=" +
				params.projectId
			route.router.transitionTo("shell", uri)
	}
}
