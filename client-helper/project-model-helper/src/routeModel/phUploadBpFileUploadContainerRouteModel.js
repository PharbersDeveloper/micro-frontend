export async function phUploadBpFileUploadContainerRouteModel(
	route,
	parseParams
) {
	// route.browserEventsService.registerListener("dataset-lst")
	// let datasets = await route.store.peekAll("dataset")
	console.log(parseParams)
	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		_isVue: true
	}
}
