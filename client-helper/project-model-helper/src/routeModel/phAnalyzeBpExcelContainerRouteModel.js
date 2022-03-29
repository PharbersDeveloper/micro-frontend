import { hostName } from "../config/envConfig"

// eslint-disable-next-line no-unused-vars
export async function phAnalyzeBpExcelContainerRouteModel(route, parseParams) {
	// route.browserEventsService.registerListener("dataset-lst")
	// let targetDataset = await route.store.peekRecord(
	// 	"dataset",
	// 	parseParams.query.datasetId
	// )
	const url = `${hostName}/phdydatasource/query`
	const accessToken = route.cookies.read("access_token")
	const body = {
		table: "dataset",
		conditions: {
			projectId: ["=", parseParams.query.projectId],
			id: ["=", parseParams.query.datasetId]
		},
		limit: 100,
		start_key: ""
	}
	const options = {
		method: "POST",
		headers: {
			Authorization: accessToken,
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
			accept: "application/json"
		},
		body: JSON.stringify(body)
	}

	const query = await fetch(url, options).then((response) => response.json())

	const targetDataset = query["data"][0]["attributes"]

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
