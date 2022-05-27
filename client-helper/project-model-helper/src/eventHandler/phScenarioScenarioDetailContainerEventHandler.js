// eslint-disable-next-line no-unused-vars
import { hostName, actionTableName } from "../config/envConfig"

export async function phScenarioScenarioDetailContainerEventHandler(e, route) {
	let params = e.detail[0].args.param
	let uri = ""
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			if (params.name === "scenario-detail") {
				uri = `scenario-detail?projectId=${params.projectId}?projectName=${params.projectName}&scenarioName=${params.scenario.name}&scenarioId=${params.scenario.id}`
			}
			route.router.transitionTo("shell", uri)
			break
		case "saveScenario":
			if (params) {
				// const targetscenario = params.scenario //需要更新的scenario
				const traceId = guid()
				const scenarioId = guid()
				const url = `${hostName}/phscenariostrigger`
				const accessToken = route.cookies.read("access_token")
				const tenantId = route.cookies.read("company_id")

				let body = {
					common: {
						traceId: traceId,
						projectId: params.projectId,
						projectName: params.projectName,
						owner: route.cookies.read("account_id"),
						showName: decodeURI(
							route.cookies.read("user_name_show")
						),
						tenantId: tenantId
					},
					action: {
						cat: "createOrUpdateScenario",
						desc: "create or update scenario",
						comments: "something need to say",
						message: "createOrUpdateScenario",
						required: true
					},
					notification: {
						required: true
					},
					scenario: {
						id:
							params.scenarioId ||
							`${params.projectId}_${scenarioId}`,
						active: true,
						scenarioName: params.scenarioName,
						deletion: false,
						index: 0
					},
					triggers: params.triggerDisplay,
					steps: params.stepDisplay,
					// triggers: [
					// 	{
					// 		active: true,
					// 		detail: {
					// 			timezone: "中国北京",
					// 			start: "2022-05-27 16:10:14",
					// 			period: "minute",
					// 			value: 1
					// 		},
					// 		index: 0,
					// 		mode: "timer",
					// 		id: guid()
					// 	}
					// ],
					// steps: [
					// 	{
					// 		confData: {},
					// 		detail: {
					// 			type: "dataset",
					// 			recursive: false,
					// 			"ignore-error": false,
					// 			name: "1235"
					// 		},
					// 		index: 0,
					// 		mode: "dataset",
					// 		name: "alfred",
					// 		id: guid()
					// 	}
					// ],
					result: {}
				}

				let options = {
					method: "POST",
					headers: {
						Authorization: accessToken,
						"Content-Type":
							"application/x-www-form-urlencoded; charset=UTF-8",
						accept: "application/json"
					},
					body: JSON.stringify(body)
				}
				await fetch(url, options)
			}
			break

		default:
			console.log("other click event!")
	}

	function guid() {
		return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
			/[xy]/g,
			function (c) {
				var r = (Math.random() * 16) | 0,
					v = c == "x" ? r : (r & 0x3) | 0x8
				return v.toString(16)
			}
		)
	}
}
