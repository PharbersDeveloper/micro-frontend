// eslint-disable-next-line no-unused-vars
export async function flowIframeRouteModel(route, parseParams, curPage) {
	route.browserEventsService.clearListener()
	route.browserEventsService.registerListener("flow")
	let uri = `${curPage.uri}?projectId=${parseParams.query.projectId}&projectName=${parseParams.query.projectName}&flowVersion=developer`
	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		url: uri
	}
}
