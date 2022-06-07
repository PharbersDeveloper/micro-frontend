// import { hostName } from "../config/envConfig"

// eslint-disable-next-line no-unused-vars
export async function phSyncContainerRouteModel(route, parseParams) {
	let createPrepareData = await route.store.peekRecord(
		"tempdata",
		"createSync"
	)
	let editPrepareData = await route.store.peekRecord("tempdata", "editSync")
	let scriptsParams = {}
	if (editPrepareData) {
		scriptsParams = editPrepareData.jsondata.scripts
	} else if (createPrepareData) {
		scriptsParams = createPrepareData.jsondata
	}

	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		message: parseParams.query.message,
		operatorParameters: parseParams.query.operatorParameters
			? JSON.parse(
					unescape(decodeURI(parseParams.query.operatorParameters))
			  )
			: [],
		scriptsParams: scriptsParams,
		_isVue: true,
		popupBack: true
	}
}
