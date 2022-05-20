// eslint-disable-next-line no-unused-vars
import { hostName, actionTableName } from "../config/envConfig"

export async function phAnalyzeScriptsListEventHandler(e, route) {
	let params = e.detail[0].args.param
	let uri = "projects"
	let preUrl = ""
	const createScriptsEventName = "createScripts"
	// const deleteDatasetsEventName = "deleteDatasets"
	const deleteScriptsEventName = "deleteResource"
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
				params.recipt.runtime !== "prepare"
			) {
				uri =
					"codeditor?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId +
					"&jobName=" +
					params.recipt.jobName +
					"&jobPath=" +
					params.recipt.jobPath
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
			} else if (params.name == "flow") {
				uri =
					"flow?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (params.name == "airflow") {
				uri =
					"airflow?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			}
			route.router.transitionTo("shell", encodeURI(uri))
			break
		case "createScripts":
			if (params) {
				const url = `${hostName}/phresourcecreationtrigger`
				const accessToken = route.cookies.read("access_token")
				const uuid = guid()
				route.loadingService.loading.style.display = "flex"
				route.loadingService.loading.style["z-index"] = 2
				//需要新建dataset
				route.projectId = params.projectId
				route.projectName = params.projectName
				route.store.unloadAll("tempdata")

				if (params.runtime === "prepare") {
					route.store.pushPayload({
						data: [
							{
								type: "tempdatas",
								id: "createPrepare",
								attributes: {
									jsondata: params
								}
							}
						]
					})
					preUrl =
						"prepare-set?projectName=" +
						params.projectName +
						"&projectId=" +
						params.projectId +
						"&jobName=" +
						params.jobName +
						"&inputName=" +
						params.inputs[0]["name"] +
						"&datasetId=" +
						params.inputs[0]["id"]
				}
				let datasets = []
				let dsNames = []
				params.inputs.forEach((item) => {
					datasets.push({
						name: item.name,
						cat: item.cat,
						format: "parquet",
						schema: []
					})
					dsNames.push(item.name)
				})
				datasets.push({
					name: params.outputs[0].name,
					cat: "intermediate",
					format: "parquet",
					schema: []
				})
				let message = {
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
						cat: "createScript",
						desc: "create script",
						comments: "something need to say",
						message: "create_script",
						required: true
					},
					datasets: datasets,
					script: {
						name: params.jobName,
						flowVersion: "developer",
						runtime: params.runtime,
						inputs: JSON.stringify(dsNames),
						output: params.outputs[0].name
					},
					notification: {
						required: true
					},
					result: {}
				}
				let scriptOptions = {
					method: "POST",
					headers: {
						Authorization: accessToken,
						"Content-Type":
							"application/x-www-form-urlencoded; charset=UTF-8",
						accept: "application/json"
					},
					body: JSON.stringify(message)
				}
				route.creatScriptsQuery = await fetch(url, scriptOptions).then(
					(res) => res.json()
				)
				route.noticeService.defineAction({
					type: "iot",
					remoteResource: "notification",
					runnerId: "",
					id: uuid,
					eventName: createScriptsEventName,
					projectId: params.projectId,
					ownerId: route.cookies.read("account_id"),
					callBack: createScriptNoticeCallback
				})
			}
			break
		case "addTags":
			if (params) {
				let selectedDatasets = params.selectedDatasets //需要更新的dataset
				let datasetArray = params.datasetArray //发送请求的参数在这取
				let selectedTags = params.selectedTags //选中的tag数组
				selectedDatasets.forEach(async (targetId) => {
					let targetDataset = datasetArray.filter(
						(it) => it.id == targetId
					)[0]
					let targetLabels = Array.from(
						new Set(targetDataset.label.concat(selectedTags))
					)
					const url = `${hostName}/phdydatasource/put_item`
					const accessToken = route.cookies.read("access_token")
					let body = {
						table: "dataset",
						item: {
							id: targetDataset.id,
							projectId: params.projectId,
							label: JSON.stringify(targetLabels),
							schema: targetDataset.schema,
							date: new Date().getTime(),
							version: targetDataset.version,
							name: targetDataset.name
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
				})
			}
			break
		//删除脚本
		case "deleteScripts":
			if (params) {
				route.loadingService.loading.style.display = "flex"
				route.loadingService.loading.style["z-index"] = 2
				let selectedScriptsDel = params.selectedScripts //需要更新的dataset
				let scriptArrayDel = params.scriptArray //发送请求的参数在这取
				let msgArr = []
				selectedScriptsDel.forEach(async (targetId) => {
					let targetDataset = scriptArrayDel.filter(
						(it) => it.id == targetId
					)[0]
					msgArr.push({
						actionName: targetDataset.jobShowName,
						jobName: targetDataset.jobName
					})
				})
				const deluuid = guid()
				let body = {
					common: {
						traceId: deluuid,
						projectId: params.projectId,
						projectName: params.projectName,
						flowVersion: "developer",
						owner: route.cookies.read("account_id"),
						showName: decodeURI(
							route.cookies.read("user_name_show")
						),
						tenantId: route.cookies.read("company_id")
					},
					action: {
						cat: "deleteResource",
						desc: "delete script",
						comments: "something need to say",
						message: "delete_script",
						required: true
					},
					datasets: [],
					scripts: msgArr,
					notification: {
						required: true
					},
					result: {}
				}
				const urldel = `${hostName}/phresdeletiontrigger`
				const accessTokendel = route.cookies.read("access_token")
				let options = {
					method: "POST",
					headers: {
						Authorization: accessTokendel,
						"Content-Type":
							"application/x-www-form-urlencoded; charset=UTF-8",
						accept: "application/json"
					},
					body: JSON.stringify(body)
				}
				await fetch(urldel, options).then((res) => res.json())
				route.noticeService.defineAction({
					type: "iot",
					remoteResource: "notification",
					runnerId: "",
					id: deluuid,
					eventName: deleteScriptsEventName,
					projectId: params.projectId,
					ownerId: route.cookies.read("account_id"),
					callBack: deleteDatasetsNoticeCallback
				})
			}
			break
		default:
			console.log("other click event!")
	}

	function deleteDatasetsNoticeCallback(param, payload) {
		const { message, status } = JSON.parse(payload)
		const {
			cnotification: { error }
		} = JSON.parse(message)
		if (status == "succeed") {
			alert("删除脚本成功！")
			window.location.reload()
		} else if (status == "failed") {
			let errorObj = error !== "" ? JSON.parse(error) : ""
			let msg =
				errorObj["message"]["zh"] !== ""
					? errorObj["message"]["zh"]
					: "删除脚本失败，请重新操作！"
			alert(msg)
		}
		route.loadingService.loading.style.display = "none"
	}

	function createScriptNoticeCallback(param, payload) {
		console.log(payload)
		const { message, status } = JSON.parse(payload)
		const {
			cnotification: {
				data: { jobName, runtime },
				error
			}
		} = JSON.parse(message)
		if (runtime === "prepare") {
			route.router.transitionTo("shell", preUrl)
		} else if (status == "succeed") {
			alert("新建脚本成功！")
			route.router.transitionTo(
				"shell",
				`codeditor?projectName=${route.projectName}&projectId=${route.projectId}&jobName=${jobName}`
			)
		} else if (status == "failed") {
			// let errorObj = error !== "" ? JSON.parse(error) : ""
			// let msg =
			// 	errorObj["message"]["zh"] !== ""
			// 		? errorObj["message"]["zh"]
			// 		: "新建脚本失败，请重新操作！"
			alert(error)
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
