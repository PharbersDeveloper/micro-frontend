// import { hostName } from "../config/envConfig"

// eslint-disable-next-line no-unused-vars
export async function phSyncContainerRouteModel(route, parseParams) {
	let createsyncData = await route.store.peekRecord(
		"tempdata",
		"sync"
	)
	let outputs = []
	if (createsyncData) {
		let scriptsParams = createsyncData.jsondata
		let outputsData = scriptsParams.outputs[0].name
			? scriptsParams.outputs[0].name
			: scriptsParams.outputs
		outputs.push(outputsData)
	}

	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		outputs: outputs,
		_isVue: true,
		popupBack: true
	}
}
