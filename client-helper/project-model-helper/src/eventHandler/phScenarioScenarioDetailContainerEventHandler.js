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
		case "addTags":
			if (params) {
				let selectedscenarios = params.selectedscenarios //需要更新的scenario
				let scenarioArray = params.scenarioArray //发送请求的参数在这取
				let selectedTags = params.selectedTags //选中的tag数组
				selectedscenarios.forEach(async (targetId) => {
					let targetscenario = scenarioArray.filter(
						(it) => it.id == targetId
					)[0]
					let targetLabels = Array.from(
						new Set(targetscenario.label.concat(selectedTags))
					)
					const url = `${hostName}/phdydatasource/put_item`
					const accessToken = route.cookies.read("access_token")
					let body = {
						table: "scenario",
						item: {
							id: targetscenario.id,
							projectId: params.projectId,
							projectName: params.projectName,
							scenarioName: targetscenario.scenarioName,
							label: JSON.stringify(targetLabels),
							args: targetscenario.args,
							owner: targetscenario.owner,
							active: targetscenario.active,
							index: targetscenario.index,
							name: targetscenario.name,
							traceId: targetscenario.traceId
						}
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
				})
				window.location.reload()
			}
			break
		//删除脚本
		case "deletescenarios":
			// TODO: ... @wodelu
			// if (params) {
			// 	route.loadingService.loading.style.display = "flex"
			// 	route.loadingService.loading.style["z-index"] = 2
			// 	let selectedscenariosDel = params.selectedscenarios //需要更新的scenario
			// 	let scenarioArrayDel = params.scenarioArray //发送请求的参数在这取
			// 	let msgArr = []
			// 	selectedscenariosDel.forEach(async (targetId) => {
			// 		let targetscenario = scenarioArrayDel.filter(
			// 			(it) => it.id == targetId
			// 		)[0]
			// 		msgArr.push({
			// 			actionName: targetscenario.jobShowName,
			// 			projectName: params.projectName,
			// 			targetId: targetscenario.jobId,
			// 			jobName: targetscenario.jobName,
			// 			flowVersion: "developer"
			// 		})
			// 	})
			// 	let body = {
			// 		table: actionTableName,
			// 		item: {
			// 			projectId: params.projectId,
			// 			code: 0,
			// 			comments: "delete_scenario",
			// 			jobCat: "remove_Job",
			// 			jobDesc: deletescenariosEventName,
			// 			message: JSON.stringify(msgArr),
			// 			date: String(new Date().getTime()),
			// 			owner: route.cookies.read("account_id"),
			// 			showName: decodeURI(
			// 				route.cookies.read("user_name_show")
			// 			)
			// 		}
			// 	}
			// 	const urldel = `${hostName}/phdydatasource/put_item`
			// 	const accessTokendel = route.cookies.read("access_token")
			// 	let options = {
			// 		method: "POST",
			// 		headers: {
			// 			Authorization: accessTokendel,
			// 			"Content-Type":
			// 				"application/x-www-form-urlencoded; charset=UTF-8",
			// 			accept: "application/json"
			// 		},
			// 		body: JSON.stringify(body)
			// 	}
			// 	let result = await fetch(urldel, options).then((res) =>
			// 		res.json()
			// 	)
			//
			// 	route.noticeService.defineAction({
			// 		type: "iot",
			// 		remoteResource: "notification",
			// 		runnerId: "",
			// 		id: result.data.id,
			// 		eventName: deletescenariosEventName,
			// 		projectId: params.projectId,
			// 		ownerId: route.cookies.read("account_id"),
			// 		callBack: deletescenariosNoticeCallback
			// 	})
			// }
			break
		case "resetScenario":
			if (params) {
				const targetscenario = params.scenario //需要更新的scenario
				const url = `${hostName}/phdydatasource/put_item`
				const accessToken = route.cookies.read("access_token")
				let body = {
					table: "scenario",
					item: {
						id: targetscenario.id,
						projectId: params.projectId,
						projectName: params.projectName,
						scenarioName: targetscenario.scenarioName,
						label: targetscenario.label,
						args: targetscenario.args,
						owner: targetscenario.owner,
						active: targetscenario.active,
						index: targetscenario.index,
						traceId: targetscenario.traceId
					}
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
		case "createScenario":
			if (params) {
				const targetscenario = params.scenario //需要更新的scenario
				let scenarioDetailUri = `scenario-detail?projectId=${params.projectId}?projectName=${params.projectName}&scenarioName=${targetscenario}`
				route.router.transitionTo("shell", scenarioDetailUri)
				// const url = `${hostName}/phdydatasource/put_item`
				// const accessToken = route.cookies.read("access_token")
				// let body = {
				// 	table: "scenario",
				// 	item: {
				// 		// id: targetscenario.id,
				// 		projectId: params.projectId,
				// 		projectName: params.projectName,
				// 		scenarioName: targetscenario.scenarioName,
				// 		label: targetscenario.label,
				// 		args: targetscenario.args,
				// 		owner: targetscenario.owner,
				// 		active: targetscenario.active,
				// 		index: targetscenario.index,
				// 		traceId: targetscenario.traceId
				// 	}
				// }

				// let options = {
				// 	method: "POST",
				// 	headers: {
				// 		Authorization: accessToken,
				// 		"Content-Type":
				// 			"application/x-www-form-urlencoded; charset=UTF-8",
				// 		accept: "application/json"
				// 	},
				// 	body: JSON.stringify(body)
				// }
				// await fetch(url, options)
			}
			// window.location.reload()
			break
		default:
			console.log("other click event!")
	}
}
