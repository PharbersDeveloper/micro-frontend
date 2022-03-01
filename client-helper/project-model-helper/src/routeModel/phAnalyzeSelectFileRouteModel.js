export async function phAnalyzeSelectFileRouteModel(route, parseParams) {
	console.log("注册浏览器事件")
	route.browserEventsService.clearListener()
	route.browserEventsService.registerListener("dataset-lst")
	console.log("注册完成")
	let datasets = await route.store.peekAll("dataset")
	console.log(parseParams)
	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		uploadType: parseParams.query.uploadType,
		datasetArr: datasets.filter((it) => it.id != ""),
		_isVue: true
	}
}
