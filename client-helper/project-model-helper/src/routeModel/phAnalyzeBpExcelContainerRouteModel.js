// eslint-disable-next-line no-unused-vars
export async function phAnalyzeBpExcelContainerRouteModel(route, parseParams) {
	// route.browserEventsService.registerListener("dataset-lst")
	let targetDataset = await route.store.peekRecord(
		"dataset",
		parseParams.query.datasetId
	)
	let targetSchema = JSON.parse(targetDataset.schema)
	let schemaArr = []
	let schemaArrType = []
	targetSchema.forEach((item) => {
		schemaArr.push(item.src)
		schemaArrType.push(item.type)
	})
	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		datasetId: parseParams.query.datasetId,
		schemaArr: schemaArr,
		schemaArrType: schemaArrType,
		datasetName: parseParams.query.datasetName,
		database: "default",
		_isVue: true
	}
}
