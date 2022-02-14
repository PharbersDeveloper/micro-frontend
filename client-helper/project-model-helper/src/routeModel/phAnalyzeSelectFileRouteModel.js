export async function phAnalyzeSelectFileRouteModel(route, parseParams) {
	let datasets = await route.store.peekAll("dataset")
	return {
		projectName: parseParams.param.projectName,
		projectId: parseParams.param.projectId,
		uploadType: parseParams.param.uploadType,
		datasetArr: datasets.filter((it) => it.id != ""),
		_isVue: true
	}
}
