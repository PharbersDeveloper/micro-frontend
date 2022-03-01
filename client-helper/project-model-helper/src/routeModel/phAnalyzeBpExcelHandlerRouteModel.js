// eslint-disable-next-line no-unused-vars
export async function phAnalyzeBpExcelHandlerRouteModel(route, parseParams) {
	console.log("注册浏览器事件")
	route.browserEventsService.clearListener()
	// route.browserEventsService.registerListener("dataset-lst")
	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		tmpname: parseParams.query.tmpname,
		filename: parseParams.query.filename,
		version: parseParams.query.version,
		dataset: parseParams.query.dataset,
		_isVue: true
	}
}
