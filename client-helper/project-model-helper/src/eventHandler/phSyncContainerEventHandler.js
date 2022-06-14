import { hostName } from "../config/envConfig"

// eslint-disable-next-line no-unused-vars
export async function phSyncContainerEventHandler(e, route) {
	const params = e.detail[0].args.param
	const element = e.detail[0].args.element
	let uri = ""
	route.msg = "新建"
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			if (params.name === "linkToProject" || params.name === "project") {
				uri = `/projects/` + params.projectId
			} else if (params.name === "datasets") {
				uri =
					"/dataset-lst?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (params.name === "scripts") {
				uri =
					"/recipes?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (params.name == "flow") {
				uri =
					"/flow?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (params.name == "airflow") {
				uri =
					"/airflow?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			}
			route.router.transitionTo(uri)
			break
		case "saveSync":
			if (params) {
				let editPrepareData = await route.store.peekRecord(
					"tempdata",
					"sync"
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
				} else {
					route.router.transitionTo(
						"shell",
						`recipes?projectId=${params.projectId}&projectName=${params.projectName}`
					)
				}
				console.log(scriptsParams)
				const url = `${hostName}/phresourcecodegentrigger`
				const accessToken = route.cookies.read("access_token")
				const uuid = guid()
				route.loadingService.loading.style.display = "flex"
				route.loadingService.loading.style["z-index"] = 2
				route.projectId = params.projectId
				route.projectName = params.projectName
				let job_cat_name = "sync_edit"
				let scriptBody = {
					common: {
						traceId: uuid,
						projectId: params.projectId,
						projectName: params.projectName,
						flowVersion: "developer",
						dagName: params.projectName,
						owner: route.cookies.read("account_id"),
						showName: decodeURI(
							route.cookies.read("user_name_show")
						)
					},
					action: {
						cat: "editSync",
						desc: "edit sync steps",
						comments: "something need to say",
						message: JSON.stringify({
							optionName: "sync_edit",
							cat: "intermediate",
							runtime: "sync",
							actionName: scriptsParams.jobShowName
								? scriptsParams.jobShowName
								: scriptsParams.jobName
						}),
						required: true
					},
					script: {
						id: "",
						jobName: scriptsParams.jobShowName
							? scriptsParams.jobShowName
							: scriptsParams.jobName,
						jobPath: "",
						inputs: inputs,
						outputs: outputs,
						runtime: "sync"
					},
					steps: [],
					notification: {
						required: true
					},
					oldImage: []
				}
				console.log(scriptBody)
				let scriptOptions = {
					method: "POST",
					headers: {
						Authorization: accessToken,
						"Content-Type":
							"application/x-www-form-urlencoded; charset=UTF-8",
						accept: "application/json"
					},
					body: JSON.stringify(scriptBody)
				}
				await fetch(url, scriptOptions).then((res) => res.json())

				route.noticeService.defineAction({
					type: "iot",
					remoteResource: "notification",
					runnerId: "",
					id: uuid,
					eventName: job_cat_name,
					projectId: scriptsParams.projectId,
					ownerId: route.cookies.read("account_id"),
					callBack: createScriptNoticeCallback
				})
			}
			break
		default:
			console.log("submit event to parent")
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

	function createScriptNoticeCallback(param, payload) {
		const { message, status } = JSON.parse(payload)
		const {
			cnotification: { error }
		} = JSON.parse(message)
		if (status == "succeed") {
			if (params.type === "preview") {
				element.steps.refreshData()
			} else {
				alert(`${route.msg}脚本成功！`)
				route.router.transitionTo(
					"shell",
					`flow?projectId=${route.projectId}&projectName=${route.projectName}&flowVersion=developer`
				)
			}
		} else {
			let errorObj = error !== "" ? JSON.parse(error) : ""
			let msg =
				errorObj["message"]["zh"] !== ""
					? errorObj["message"]["zh"]
					: `${route.msg}脚本失败，请重新操作！`
			alert(msg)
		}
		route.loadingService.loading.style.display = "none"
	}
}
