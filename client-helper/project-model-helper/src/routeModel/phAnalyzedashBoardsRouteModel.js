// eslint-disable-next-line no-unused-vars
export async function phAnalyzeDashboardsRouteModel(route, parseParams) {
	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		dashboards: [],
		tagsArray: [],
		_isVue: true
	}
}
