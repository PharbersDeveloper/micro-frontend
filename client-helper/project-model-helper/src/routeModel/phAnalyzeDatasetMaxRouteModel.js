// eslint-disable-next-line no-unused-vars
export async function phAnalyzeDatasetMaxRouteModel(route, parseParams) {
	route.browserEventsService.clearListener()
	return {
		projectName: parseParams.query.projectName,
		path: parseParams.query.path,
		projectId: parseParams.query.projectId,
		datasetName: parseParams.query.datasetName,
		format: parseParams.query.format,
		cat: parseParams.query.cat,
		_isVue: true,
		display: parseParams["output_index"] ? "block" : "none"
	}
}
