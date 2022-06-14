// import { hostName } from "../config/envConfig"

// eslint-disable-next-line no-unused-vars
export async function phSortContainerRouteModel(route, parseParams) {
	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		_isVue: true,
		popupBack: true
	}
}
