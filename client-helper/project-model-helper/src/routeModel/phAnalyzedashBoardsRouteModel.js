// eslint-disable-next-line no-unused-vars
export async function phAnalyzeDashboardsRouteModel(route, parseParams) {
	route.browserEventsService.clearListener()
	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		dashboards: [],
		tagsArray: [],
		_isVue: true
	}
}
