// import { hostName } from "../config/envConfig"

// eslint-disable-next-line no-unused-vars
export async function phTopnContainerRouteModel(route, parseParams) {
	let editPrepareData = await route.store.peekRecord(
		"tempdata",
		"topn"
	)
	let scriptsParams = {}
	let inputs = []
	let outputs = []
	if (editPrepareData) {
		scriptsParams = editPrepareData.jsondata
		let inputsData = scriptsParams.inputs[0].name
			? scriptsParams.inputs[0].name
			: scriptsParams.inputs[0]
		inputs.push(inputsData)
		let outputsData = scriptsParams.outputs[0].name
			? scriptsParams.outputs[0].name
			: scriptsParams.outputs
		outputs.push(outputsData)
	}
	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		inputs: inputs,
		outputs: outputs,
		_isVue: true,
		popupBack: true
	}
}
