// eslint-disable-next-line no-unused-vars
export async function codeditorIframeRouteModel(route, parseParams) {
	let uri = `${route.args.allData.cat}?projectId=${parseParams.query.projectId}&projectName=${parseParams.query.projectName}&flowVersion=developer`
	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		url: uri
	}
}
