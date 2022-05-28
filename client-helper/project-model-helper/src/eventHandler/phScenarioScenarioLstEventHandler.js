// eslint-disable-next-line no-unused-vars
import { hostName, actionTableName } from "../config/envConfig"

export async function phScenarioScenarioLstEventHandler(e, route) {
	let params = e.detail[0].args.param
	let uri = ""
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			if (params.name === "scenario-detail") {
				uri = `scenario-detail?projectId=${params.projectId}&projectName=${params.projectName}&scenarioName=${params.scenario.scenarioName}&scenarioId=${params.scenario.id}`
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
				route.loadingService.loading.style.display = "flex"
				route.loadingService.loading.style["z-index"] = 2
				const targetscenario = params.scenario //需要更新的scenario
				const url = `${hostName}/phscenariostrigger`
				const accessToken = route.cookies.read("access_token")
				const tenantId = route.cookies.read("company_id")
				const traceId = guid()
				const scenarioId = guid()
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
						cat: "createScenario",
						desc: "create scenario",
						comments: "create scenario",
						message: "createScenario",
						required: true
					},
					notification: {
						required: true
					},
					scenario: {
						id: `${params.projectId}_${scenarioId}`,
						active: true,
						scenarioName: targetscenario.scenarioName,
						deletion: false,
						index: 0
					},
					triggers: [],
					steps: [],
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
				let createScenarioResult = await fetch(url, options).then(
					(res) => res.json()
				)
				console.log(createScenarioResult)
				route.noticeService.defineAction({
					type: "iot",
					remoteResource: "notification",
					runnerId: "",
					id: createScenarioResult.trace_id,
					eventName: "createScenario",
					projectId: params.projectId,
					ownerId: route.cookies.read("account_id"),
					callBack: createScenarioCallback
				})
				route.scenarioDetailUri = `scenario-detail?projectId=${params.projectId}&projectName=${params.projectName}&scenarioName=${targetscenario.scenarioName}&scenarioId=${params.projectId}_${scenarioId}`
				// if (result.status === "failed") {
				// 	alert("创建失败！")
				// } else {
				// 	const scenarioDetailUri = `scenario-detail?projectId=${params.projectId}&projectName=${params.projectName}&scenarioName=${targetscenario.scenarioName}&scenarioId=${params.projectId}_${scenarioId}`
				// 	route.router.transitionTo("shell", scenarioDetailUri)
				// }
			}
			break
		default:
			console.log("other click event!")
	}

	function createScenarioCallback(param, payload) {
		console.log(payload)
		const { message, status } = JSON.parse(payload)
		const {
			cnotification: { error }
		} = JSON.parse(message)
		if (status == "success") {
			alert("新建scenario成功！")
			route.router.transitionTo("shell", route.scenarioDetailUri)
		} else if (status == "failed") {
			alert("新建失败")
			console.log(error)
		}
		route.loadingService.loading.style.display = "none"
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
