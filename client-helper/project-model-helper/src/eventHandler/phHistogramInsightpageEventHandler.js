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
			} else if (params.name === "analyze") {
				uri = `dataset/${params.dataset.name}?projectName=${params.projectName}&projectId=${params.projectId}&datasetId=${params.dataset.id}&datasetName=${params.dataset.name}`
			}
			route.router.transitionTo("shell", uri)
			break
	}
}
