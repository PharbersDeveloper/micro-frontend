// eslint-disable-next-line no-unused-vars
export async function airflowIframeRouteModel(route, parseParams, curPage) {
	let name = parseParams.query.projectName
		.toLowerCase()
		.replace(/[^a-z0-9]/gi, "")
	let uri = `https://${name}.pharbers.com/airflow/graph?dag_id=${parseParams.query.projectName}_${parseParams.query.projectName}_developer`

	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		url: uri
	}
}
