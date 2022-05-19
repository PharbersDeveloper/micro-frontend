import { hostName } from "../config/envConfig"

// eslint-disable-next-line no-unused-vars
export async function phAnalyzeBpPrepareContainerRouteModel(
	route,
	parseParams
) {
	// route.browserEventsService.registerListener("recipes")
	let datasetCat = ""
	let targetDataset = null
	if (parseParams.query.datasetId) {
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
				"Content-Type":
					"application/x-www-form-urlencoded; charset=UTF-8",
				accept: "application/json"
			},
			body: JSON.stringify(body)
		}

		const query = await fetch(url, options).then((response) =>
			response.json()
		)

		targetDataset = query["data"][0]["attributes"]
		datasetCat = targetDataset.cat
	}
	return {
		targetDataset: targetDataset,
		datasetCat: datasetCat,
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		message: parseParams.query.message,
		operatorParameters: parseParams.query.operatorParameters
			? JSON.parse(
					unescape(decodeURI(parseParams.query.operatorParameters))
			  )
			: [],
		_isVue: true,
		popupBack: true
	}
}
