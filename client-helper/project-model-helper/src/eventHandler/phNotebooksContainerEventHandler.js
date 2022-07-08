// eslint-disable-next-line no-unused-vars
import { hostName, actionTableName } from "../config/envConfig"

export async function phNotebooksContainerEventHandler(e, route) {
	let params = e.detail[0].args.param
	let uri = "projects"

	// let preUrl = ""
	// const createScriptsEventName = "createScripts"
	// const deleteDatasetsEventName = "deleteDatasets"
	// const deleteScriptsEventName = "deleteResource"
	const dealResourceStartEventName = "dealJupyterStart"
	const dealResourceStopEventName = "dealJupyterStop"
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			if (params.name === "localUpload") {
				uri =
					"index-input?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (
				params.name === "linkToProject" ||
				params.name === "project"
			) {
				uri = `projects/${this.projectId}?projectName=${this.projectName}&projectId=${this.projectId}`
			} else if (params.name === "analyze") {
				uri = `dataset/${params.dataset.name}?projectName=${params.projectName}&projectId=${params.projectId}&datasetId=${params.dataset.id}&datasetName=${params.dataset.name}`
			} else if (params.name === "datasets") {
				uri =
					"dataset-lst?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (params.name === "scripts") {
				uri =
					"recipes?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (
				params.name === "codeditor" &&
				params.recipt.runtime === "sort"
			) {
				let recipt = params.recipt
				let inputName = JSON.parse(recipt.inputs)[0]
				let scripts = {
					name: "editScripts",
					jobName: recipt.jobName,
					jobId: recipt.jobId,
					targetJobId: recipt.targetJobId,
					inputs: JSON.parse(recipt.inputs),
					outputs: recipt.outputs,
					jobVersion: recipt.jobVersion,
					projectName: params.projectName,
					jobDisplayName: recipt.jobDisplayName,
					jobShowName: recipt.jobShowName,
					projectId: params.projectId,
					jobCat: "sort_edit"
				}
				route.store.unloadAll("tempdata")
				route.store.pushPayload({
					data: [
						{
							type: "tempdatas",
							id: "sort",
							attributes: {
								jsondata: scripts
							}
						}
					]
				})
				uri =
					"sort?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId +
					"&jobName=" +
					recipt.jobName +
					"&jobShowName=" +
					recipt.jobShowName +
					"&inputName=" +
					inputName +
					"&datasetId=" +
					params.inputDS[0]["id"]
			} else if (
				params.name === "codeditor" &&
				params.recipt.runtime === "distinct"
			) {
				let recipt = params.recipt
				let inputName = JSON.parse(recipt.inputs)[0]
				let scripts = {
					name: "editScripts",
					jobName: recipt.jobName,
					jobId: recipt.jobId,
					targetJobId: recipt.targetJobId,
					inputs: JSON.parse(recipt.inputs),
					outputs: recipt.outputs,
					jobVersion: recipt.jobVersion,
					projectName: params.projectName,
					jobDisplayName: recipt.jobDisplayName,
					jobShowName: recipt.jobShowName,
					projectId: params.projectId,
					jobCat: "distinct_edit"
				}
				route.store.unloadAll("tempdata")
				route.store.pushPayload({
					data: [
						{
							type: "tempdatas",
							id: "distinct",
							attributes: {
								jsondata: scripts
							}
						}
					]
				})
				uri =
					"distinct?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId +
					"&jobName=" +
					recipt.jobName +
					"&jobShowName=" +
					recipt.jobShowName +
					"&inputName=" +
					inputName +
					"&datasetId=" +
					params.inputDS[0]["id"]
			} else if (
				params.name === "codeditor" &&
				params.recipt.runtime === "topn"
			) {
				let recipt = params.recipt
				let inputName = JSON.parse(recipt.inputs)[0]
				let scripts = {
					name: "editScripts",
					jobName: recipt.jobName,
					jobId: recipt.jobId,
					targetJobId: recipt.targetJobId,
					inputs: JSON.parse(recipt.inputs),
					outputs: recipt.outputs,
					jobVersion: recipt.jobVersion,
					projectName: params.projectName,
					jobDisplayName: recipt.jobDisplayName,
					jobShowName: recipt.jobShowName,
					projectId: params.projectId,
					jobCat: "topn_edit"
				}
				route.store.unloadAll("tempdata")
				route.store.pushPayload({
					data: [
						{
							type: "tempdatas",
							id: "topn",
							attributes: {
								jsondata: scripts
							}
						}
					]
				})
				uri =
					"topn?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId +
					"&jobName=" +
					recipt.jobName +
					"&jobShowName=" +
					recipt.jobShowName +
					"&inputName=" +
					inputName +
					"&datasetId=" +
					params.inputDS[0]["id"]
			} else if (
				params.name === "codeditor" &&
				params.recipt.runtime === "sync"
			) {
				let recipt = params.recipt
				let inputName = JSON.parse(recipt.inputs)[0]
				let scripts = {
					name: "editScripts",
					jobName: recipt.jobName,
					jobId: recipt.jobId,
					targetJobId: recipt.targetJobId,
					inputs: JSON.parse(recipt.inputs),
					outputs: recipt.outputs,
					jobVersion: recipt.jobVersion,
					projectName: params.projectName,
					jobDisplayName: recipt.jobDisplayName,
					jobShowName: recipt.jobShowName,
					projectId: params.projectId,
					jobCat: "sync_edit"
				}
				route.store.unloadAll("tempdata")
				route.store.pushPayload({
					data: [
						{
							type: "tempdatas",
							id: "sync",
							attributes: {
								jsondata: scripts
							}
						}
					]
				})
				uri =
					"sync?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId +
					"&jobName=" +
					recipt.jobName +
					"&jobShowName=" +
					recipt.jobShowName +
					"&inputName=" +
					inputName +
					"&outputName=" +
					recipt.outputs
			} else if (
				params.name === "codeditor" &&
				params.recipt.runtime === "prepare"
			) {
				let recipt = params.recipt
				let inputName = JSON.parse(recipt.inputs)[0]
				let scripts = {
					name: "editScripts",
					jobName: recipt.jobName,
					jobId: recipt.jobId,
					targetJobId: recipt.targetJobId,
					inputs: JSON.parse(recipt.inputs),
					outputs: recipt.outputs,
					jobVersion: recipt.jobVersion,
					projectName: params.projectName,
					jobDisplayName: recipt.jobDisplayName,
					jobShowName: recipt.jobShowName,
					projectId: params.projectId,
					jobCat: "prepare_edit"
				}
				// let operatorParameters = recipt.operatorParameters
				route.store.unloadAll("tempdata")
				route.store.pushPayload({
					data: [
						{
							type: "tempdatas",
							id: "editPrepare",
							attributes: {
								jsondata: {
									scripts: scripts,
									operatorParameters: {}
								}
							}
						}
					]
				})
				uri =
					"prepare-set?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId +
					"&jobName=" +
					recipt.jobName +
					"&jobShowName=" +
					recipt.jobShowName +
					"&inputName=" +
					inputName
				// +
				// "&operatorParameters=" +
				// escape(recipt.operatorParameters) +
				// "&message=" +
				// encodeURI(JSON.stringify(scripts))
			} else if (params.name === "codeditor") {
				uri =
					"codeditor?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId +
					"&jobName=" +
					params.recipt.jobName +
					"&jobPath=" +
					params.recipt.jobPath
			} else if (params.name === "flow") {
				uri =
					"flow?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (params.name === "airflow") {
				uri =
					"airflow?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (
				params.name === "notebook-jupyter" ||
				params.name === "notebook-c9"
			) {
				const tenantId = route.cookies.read("company_id")
				uri = `notebook-editor?tenantId=${tenantId}&resourceId=${params.resourceId}&projectId=${params.projectId}&projectName=${params.projectName}`
			}
			route.router.transitionTo("shell", encodeURI(uri))
			break
		case "createNotebook":
			if (params) {
				// const priority = 100
				const { status, priority, message, exist } =
					await queryCreateValidate()

				if (exist) {
					alert("一个用户只能创建一个线上编译器")
					return
				}

				if (status !== "ok") {
					alert(message)
					return
				}

				const name = params.name
				const projectId = params.projectId
				const accessToken = route.cookies.read("access_token")
				const tenantId = route.cookies.read("company_id")
				const owner = route.cookies.read("account_id")
				const url = `${hostName}/phdydatasource/put_item`
				const properties = [
					{
						type: "jupyter",
						version: "alfred-0.0.1",
						label: {
							jupyter: "3.0.2"
						},
						dependencies: [],
						cfn: "https://ph-platform.s3.cn-northwest-1.amazonaws.com.cn/2020-11-11/automation/jupyterec2cfn-07-08.yaml",
						parameters: {
							EC2User: name,
							InstanceType: "t3.small",
							Priority: priority.toString(),
							ExportPort: "8888"
						}
					}
				]
				let body = {
					table: "resource",
					item: {
						id: guid(),
						name: name,
						label: "[]",
						tenantId: tenantId,
						ctype: "jupyter",
						owner: owner,
						ownership: projectId,
						platform: "AWS",
						properties: JSON.stringify(properties),
						resultPath: "codeeditor[]",
						role: "codeeditor",
						priority: priority
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
				window.location.reload()
			}
			break
		case "addTags":
			if (params) {
				let selectedNotebooks = params.selectednotebooks //需要更新的dataset
				let notebooksArray = params.notebooksArray //发送请求的参数在这取
				let selectedTags = params.selectedTags //选中的tag数组
				for (const targetId of selectedNotebooks) {
					let targetNotebook = notebooksArray.filter(
						(it) => it.id === targetId
					)[0]
					let targetLabels = Array.from(
						new Set(targetNotebook.label.concat(selectedTags))
					)
					const url = `${hostName}/phdydatasource/put_item`
					const accessToken = route.cookies.read("access_token")
					let body = {
						table: "resource",
						item: {
							id: targetNotebook.id,
							name: targetNotebook.name,
							label: JSON.stringify(targetLabels),
							tenantId: targetNotebook.tenantId,
							ctype: targetNotebook.ctype,
							owner: targetNotebook.owner,
							ownership: targetNotebook.ownership,
							platform: targetNotebook.platform,
							properties: targetNotebook.properties,
							resultPath: targetNotebook.resultPath,
							role: targetNotebook.role,
							priority: targetNotebook.priority
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
					window.location.reload()
				}
			}
			break
		case "dealResourceStart":
			// route.cookies.write(
			// 	"jupyterTraceId",
			// 	params.traceId,
			// 	cookiesOptions
			// )
			if (!route.customCallbackFuncs) {
				route.customCallbackFuncs = {}
			}

			route.customCallbackFuncs[params.traceId] = params.callback
			route.noticeService.defineAction({
				type: "iot",
				remoteResource: "notification",
				runnerId: "",
				id: params.traceId,
				eventName: dealResourceStartEventName,
				projectId: "projectid",
				// ownerId: route.cookies.read("account_id"),
				ownerId: params.owner,
				callBack: dealResourceStartCallback
			})
			break
		case "dealResourceStop":
			// route.cookies.clear("jupyterTraceId", cookiesOptions)
			if (!route.customCallbackFuncs) {
				route.customCallbackFuncs = {}
			}

			route.customCallbackFuncs[params.traceId] = params.callback
			route.noticeService.defineAction({
				type: "iot",
				remoteResource: "notification",
				runnerId: "",
				id: params.traceId,
				eventName: dealResourceStopEventName,
				projectId: "projectid",
				// ownerId: route.cookies.read("account_id"),
				ownerId: params.owner,
				callBack: dealResourceStopCallback
			})
			break
		//删除脚本
		case "deleteNotebook":
			if (params) {
				const resourceId = params.resourceId
				const accessToken = route.cookies.read("access_token")
				const tenantId = route.cookies.read("company_id")
				const url = `${hostName}/phdydatasource/delete_item`

				let body = {
					table: "resource",
					conditions: {
						tenantId: tenantId,
						id: resourceId
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
				window.location.reload()
			}
			break
		default:
			console.log("other click event!")
	}

	// function deleteDatasetsNoticeCallback(param, payload) {
	// 	const { message, status } = JSON.parse(payload)
	// 	const {
	// 		cnotification: { error }
	// 	} = JSON.parse(message)
	// 	if (status == "succeed") {
	// 		alert("删除脚本成功！")
	// 		window.location.reload()
	// 	} else if (status == "failed") {
	// 		let errorObj = error !== "" ? JSON.parse(error) : ""
	// 		let msg =
	// 			errorObj["message"]["zh"] !== ""
	// 				? errorObj["message"]["zh"]
	// 				: "删除脚本失败，请重新操作！"
	// 		alert(msg)
	// 	}
	// 	route.loadingService.loading.style.display = "none"
	// }

	// function createScriptNoticeCallback(param, payload) {
	// 	console.log(payload)
	// 	const { message, status } = JSON.parse(payload)
	// 	const {
	// 		cnotification: {
	// 			data: { jobName, runtime },
	// 			error
	// 		}
	// 	} = JSON.parse(message)
	// 	if (
	// 		runtime === "prepare" ||
	// 		runtime === "topn" ||
	// 		runtime === "distinct" ||
	// 		runtime === "sort" ||
	// 		runtime === "sync"
	// 	) {
	// 		route.router.transitionTo("shell", preUrl)
	// 	} else if (status === "succeed") {
	// 		alert("新建脚本成功！")
	// 		route.router.transitionTo(
	// 			"shell",
	// 			`codeditor?projectName=${route.projectName}&projectId=${route.projectId}&jobName=${jobName}`
	// 		)
	// 	} else if (status === "failed") {
	// 		// let errorObj = error !== "" ? JSON.parse(error) : ""
	// 		// let msg =
	// 		// 	errorObj["message"]["zh"] !== ""
	// 		// 		? errorObj["message"]["zh"]
	// 		// 		: "新建脚本失败，请重新操作！"
	// 		alert(error)
	// 	}
	// 	route.loadingService.loading.style.display = "none"
	// }

	function dealResourceStartCallback(param, payload) {
		const { message, status } = JSON.parse(payload)
		const {
			cnotification: { error }
		} = JSON.parse(message)

		if (status === "started") {
			route.customCallbackFuncs[param.id](param, payload)
			delete route.customCallbackFuncs[param.id]
			alert("启动资源成功")
		} else if (status === "startfailed") {
			let errorObj = error !== "" ? JSON.parse(error) : ""
			let msg =
				errorObj["message"]["zh"] !== ""
					? errorObj["message"]["zh"]
					: "启动资源失败，请重新操作！"
			alert(msg)
		}
		route.loadingService.loading.style.display = "none"
	}
	function dealResourceStopCallback(param, payload) {
		console.log(payload)
		console.log(param)
		const { message, status } = JSON.parse(payload)
		const {
			cnotification: { error }
		} = JSON.parse(message)

		if (status === "stopped") {
			route.customCallbackFuncs[param.id](param, payload)
			delete route.customCallbackFuncs[param.id]
			alert("关闭资源成功")
		} else if (status === "stopfailed") {
			let errorObj = error !== "" ? JSON.parse(error) : ""
			let msg =
				errorObj["message"]["zh"] !== ""
					? errorObj["message"]["zh"]
					: "关闭资源失败，请重新操作！"
			alert(msg)
		}
		route.loadingService.loading.style.display = "none"
	}

	function guid() {
		return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
			/[xy]/g,
			function (c) {
				var r = (Math.random() * 16) | 0,
					v = c === "x" ? r : (r & 0x3) | 0x8
				return v.toString(16)
			}
		)
	}

	// eslint-disable-next-line no-unused-vars
	async function queryCreateValidate() {
		const accessToken = route.cookies.read("access_token")
		const tenantId = route.cookies.read("company_id")
		const accountId = route.cookies.read("account_id")
		const url = `${hostName}/phgetjupyternumber`

		let body = {
			tenantId: tenantId,
			ownerId: accountId
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
		const p = await fetch(url, options)
			.then((response) => response.json())
			.then((response) => {
				return response
			})
		const fp = await p
		if (fp.code === 0)
			return {
				status: "ok",
				priority: fp.priority,
				message: null,
				exist: fp.exist
			}
		else
			return {
				status: "error",
				priority: -99,
				message: fp.message,
				exist: false
			}
	}
}
