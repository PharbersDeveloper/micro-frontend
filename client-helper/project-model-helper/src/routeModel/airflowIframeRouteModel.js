// eslint-disable-next-line no-unused-vars
export async function airflowIframeRouteModel(route, parseParams) {
	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		url: route.args.allData.cat
	}
}
