import { hostName, actionTableName } from "../config/envConfig"

// eslint-disable-next-line no-unused-vars
export async function phAnalyzeBpPrepareContainerEventHandler(e, route) {
	let params = e.detail[0].args.param
	let uri = ""
	route.msg = "新建"
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			if (params.name === "linkToProject" || params.name == "project") {
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
		case "prepare":
			if (params) {
				let createPrepareData = await route.store.Record(
					"tempdata",
					"createPrepare"
				)
				let editPrepareData = await route.store.Record(
					"tempdata",
					"editPrepare"
				)
				let scriptsParams = {}
				let operatorParameters = []
				if (createPrepareData) {
					scriptsParams = createPrepareData.jsondata
					operatorParameters = params.itemArr
				}
				if (editPrepareData) {
					scriptsParams = editPrepareData.jsondata.scripts
					operatorParameters =
						editPrepareData.jsondata.operatorParameters
				}
				console.log(createPrepareData, editPrepareData)
				const url = `${hostName}/phdydatasource/put_item`
				const accessToken = route.cookies.read("access_token")
				const uuid = guid()
				route.loadingService.loading.style.display = "flex"
				route.loadingService.loading.style["z-index"] = 2
				route.projectId = params.projectId
				route.projectName = params.projectName
				//需要新建dataset
				if (scriptsParams.outputs[0].id == "") {
					scriptsParams.outputs[0].id = uuid
					let body = {
						table: "dataset",
						item: {
							projectId: params.projectId,
							id: uuid,
							label: JSON.stringify([]),
							name: scriptsParams.outputs[0].name,
							schema: JSON.stringify([]),
							path: scriptsParams.path,
							format: scriptsParams.format,
							cat: "intermediate",
							prop: ""
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
				let message = {}
				let job_cat_name = ""
				if (
					scriptsParams.jobCat &&
					scriptsParams.jobCat === "prepare_edit"
				) {
					//用于配置页面数据回显
					message = {
						actionName: scriptsParams.jobShowName,
						projectId: scriptsParams.projectId,
						flowVersion: "developer",
						jobCat: "prepare_edit",
						jobDisplayName: scriptsParams.jobDisplayName,
						projectName: params.projectName,
						jobName: scriptsParams.jobName,
						operatorParameters: operatorParameters,
						runtime: "prepare"
					}
					job_cat_name = "prepare_edit"
					route.msg = "编辑"
				} else {
					// 创建
					message = {
						actionName: scriptsParams.jobName,
						dagName: params.projectName,
						flowVersion: "developer",
						jobName: scriptsParams.jobName,
						jobId: "",
						inputs: scriptsParams.inputs,
						outputs: scriptsParams.outputs,
						jobVersion: scriptsParams.jobVersion,
						projectId: params.projectId,
						timeout: "1000",
						runtime: "prepare",
						// owner: decodeURI(route.cookies.read("user_name_show")),
						owner: route.cookies.read("account_id"),
						showName: decodeURI(
							route.cookies.read("user_name_show")
						),
						targetJobId: "",
						projectName: params.projectName,
						labels: [],
						operatorParameters: operatorParameters,
						prop: {
							path: scriptsParams.path,
							partitions: 1
						}
					}
					job_cat_name = "dag_create"
				}
				// route.noticeService.defineAction({
				// 	type: "iot",
				// 	id: job_cat_name,
				// 	projectId: params.projectId,
				// 	ownerId: route.cookies.read("account_id"),
				// 	callBack: createScriptNoticeCallback
				// })
				let scriptBody = {
					table: actionTableName,
					item: {
						projectId: scriptsParams.projectId,
						owner: route.cookies.read("account_id"),
						showName: decodeURI(
							route.cookies.read("user_name_show")
						),
						code: 0,
						jobDesc: job_cat_name,
						jobCat: job_cat_name,
						comments: "",
						date: String(new Date().getTime()),
						message: JSON.stringify(message)
					}
				}
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
				route.creatScriptsQuery = await fetch(url, scriptOptions).then(
					(res) => res.json()
				)

				route.noticeService.defineAction({
					type: "iot",
					remoteResource: "notification",
					runnerId: "",
					id: route.creatScriptsQuery.data.id,
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
			alert(`${route.msg}脚本成功！`)
			route.router.transitionTo(
				"shell",
				`flow?projectId=${route.projectId}&projectName=${route.projectName}&flowVersion=developer`
			)
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
