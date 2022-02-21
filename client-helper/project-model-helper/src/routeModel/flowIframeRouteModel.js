// eslint-disable-next-line no-unused-vars
export async function flowIframeRouteModel(route, parseParams, curPage) {
	let uri = `${curPage.uri}?projectId=${parseParams.query.projectId}&projectName=${parseParams.query.projectName}&flowVersion=developer`
	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		uri: uri
	}
}
