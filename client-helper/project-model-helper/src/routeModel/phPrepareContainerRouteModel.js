// import { hostName } from "../config/envConfig"

// eslint-disable-next-line no-unused-vars
export async function phPrepareContainerRouteModel(route, parseParams) {
	return {
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
