import { hostName, actionTableName } from "../config/envConfig"

// eslint-disable-next-line no-unused-vars
export async function phAnalyzeUploadDatasetEventHandler(e, route) {
	let params = e.detail[0].args.param
	console.log(params)
	let uri = ""
	// addTags
	let selectedDatasets = params.selectedDatasets //需要更新的dataset
	let datasetArray = params.datasetArray //发送请求的参数在这取
	let selectedTags = params.selectedTags //选中的tag数组
	const accessToken = route.cookies.read("access_token")
	const deleteDatasetsEventName = "deleteDatasets"
	const clearTagsEventName = "clearDS"
	const createCatalogEventName = "catalog"
	// const createCatalogSampleEventName = "createCatalogSampleEventName"
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			if (params.name === "upload") {
				uri = `dataset?projectName=${params.projectName}&projectId=${params.projectId}&uploadType=${params.type}`
			} else if (
				params.name === "linkToProject" ||
				params.name === "project"
			) {
				uri = `projects/${this.projectId}?projectName=${this.projectName}&projectId=${this.projectId}`
			} else if (
				params.name === "analyze" &&
				params.dataset.cat !== "input_index" &&
				params.dataset.cat !== "output_index"
			) {
				uri = `dataset/${params.dataset.name}?projectName=${params.projectName}&projectId=${params.projectId}&datasetId=${params.dataset.id}&datasetName=${params.dataset.name}`
			} else if (
				params.name === "analyze" &&
				params.dataset.cat !== "uploaded" &&
				params.dataset.cat !== "intermediate"
			) {
				console.log(params.dataset)
				uri = `dataset-max?projectName=${params.projectName}&projectId=${params.projectId}&path=${params.dataset.path}&datasetName=${params.dataset.name}&format=${params.dataset.format}&cat=${params.dataset.cat}`
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
			route.router.transitionTo("shell", uri)
			break
		case "addTags":
			selectedDatasets.forEach(async (targetId) => {
				let targetDataset = datasetArray.filter(
					(it) => it.id == targetId
				)[0]
				let targetLabels = Array.from(
					new Set(targetDataset.label.concat(selectedTags))
				)
				const url = `${hostName}/phdydatasource/put_item`
				let body = {
					table: "dataset",
					item: {
						id: targetDataset.id,
						projectId: params.projectId,
						label: JSON.stringify(targetLabels),
						schema: targetDataset.schema,
						date: new Date().getTime(),
						version: targetDataset.version,
						name: targetDataset.name,
						cat: targetDataset.cat,
						path: targetDataset.path,
						format: targetDataset.format,
						prop: targetDataset.prop
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
			break
		case "deleteDatasets":
			route.loadingService.loading.style.display = "flex"
			route.loadingService.loading.style["z-index"] = 2
			if (params) {
				let selectedDatasetsDel = params.selectedDatasets //需要更新的dataset
				let datasetArrayDel = params.datasetArray //发送请求的参数
				let msgArr = []
				selectedDatasetsDel.forEach(async (targetId) => {
					let targetDataset = datasetArrayDel.filter(
						(it) => it.id == targetId
					)[0]
					msgArr.push({
						actionName: targetDataset.name,
						projectName: params.projectName,
						version: "",
						dsid: targetDataset.id,
						destination: targetDataset.name,
						opname: route.cookies.read("account_id"),
						opgroup: route.cookies.read("company_id")
					})
				})
				const urldel = `${hostName}/phdydatasource/put_item`
				let body = {
					table: actionTableName,
					item: {
						projectId: params.projectId,
						code: 0,
						comments: "delete_dataset",
						jobCat: "remove_DS",
						jobDesc: deleteDatasetsEventName,
						message: JSON.stringify(msgArr),
						date: String(new Date().getTime()),
						owner: route.cookies.read("account_id"),
						showName: decodeURI(
							route.cookies.read("user_name_show")
						)
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
				const result = await fetch(urldel, options).then((res) =>
					res.json()
				)

				route.noticeService.defineAction({
					type: "iot",
					remoteResource: "notification",
					runnerId: "",
					id: result.data.id,
					eventName: deleteDatasetsEventName,
					projectId: params.projectId,
					ownerId: route.cookies.read("account_id"),
					callBack: delNoticeCallback
				})
			}
			break
		case "createCatalog":
			if (params) {
				route.loadingService.loading.style.display = "flex"
				route.loadingService.loading.style["z-index"] = 2
				let catauuid = guid()
				const catalog_url = `${hostName}/phdydatasource/put_item`
				let catamessage = {
					actionName: params.dsName,
					keys: "",
					name: params.dsName,
					version: "",
					id: catauuid,
					cat: "catalog",
					format: "",
					prop: {
						path: "",
						partitions: 1,
						format: "",
						tableName: params.tableName,
						databaseName: route.cookies.read("company_id")
					},
					opname: route.cookies.read("account_id"),
					opgroup: route.cookies.read("company_id")
				}
				let catalog_body = {
					table: actionTableName,
					item: {
						projectId: params.projectId,
						code: 0,
						comments: "",
						jobCat: "catalog",
						jobDesc: createCatalogEventName,
						message: JSON.stringify(catamessage),
						date: String(new Date().getTime()),
						owner: route.cookies.read("account_id"),
						showName: decodeURI(
							route.cookies.read("user_name_show")
						)
					}
				}
				let catalog_options = {
					method: "POST",
					headers: {
						Authorization: route.cookies.read("access_token"),
						"Content-Type":
							"application/x-www-form-urlencoded; charset=UTF-8",
						accept: "application/json"
					},
					body: JSON.stringify(catalog_body)
				}
				let catalog_result = await fetch(
					catalog_url,
					catalog_options
				).then((res) => res.json())
				params.catalog_result = catalog_result.data.attributes.message
				route.create_catalog_result = params
				route.noticeService.defineAction({
					type: "iot",
					remoteResource: "notification",
					runnerId: "",
					id: catalog_result.data.id,
					eventName: createCatalogEventName,
					projectId: params.projectId,
					ownerId: route.cookies.read("account_id"),
					callBack: createCatalogNoticeCallback
				})
			}
			break
		case "fitMax":
			if (params) {
				let uuid = guid()
				const suit_max_url = `${hostName}/phdydatasource/put_item`
				let message = {
					actionName: params.dsName,
					keys: params.path,
					name: params.dsName,
					version: params.version,
					id: uuid,
					cat: params.maxcat,
					format: params.format,
					prop: {
						path: params.path,
						partitions: 1,
						format: params.format
					},
					opname: route.cookies.read("account_id"),
					opgroup: route.cookies.read("company_id")
				}
				let suit_max_body = {
					table: actionTableName,
					item: {
						projectId: params.projectId,
						code: 0,
						comments: "",
						jobCat: "max1.0",
						jobDesc: "max1.0",
						message: JSON.stringify(message),
						date: String(new Date().getTime()),
						owner: route.cookies.read("account_id"),
						showName: decodeURI(
							route.cookies.read("user_name_show")
						)
					}
				}
				let suit_max_options = {
					method: "POST",
					headers: {
						Authorization: route.cookies.read("access_token"),
						"Content-Type":
							"application/x-www-form-urlencoded; charset=UTF-8",
						accept: "application/json"
					},
					body: JSON.stringify(suit_max_body)
				}
				let suit_max_result = await fetch(
					suit_max_url,
					suit_max_options
				).then((res) => res.json())
				if (suit_max_result.data) {
					// route.noticeService.register("notification", result.data.id, delNoticeCallback, route, params.projectId)
				}
				alert("新建数据集成功！")
				window.location.reload()
			}
			break
		case "clearTags":
			route.loadingService.loading.style.display = "flex"
			route.loadingService.loading.style["z-index"] = 2
			if (params) {
				let selectedDatasetsClear = params.selectedDatasets //需要更新的dataset
				let datasetArrayClear = params.datasetArray //发送请求的参数在这取
				// let promiseList = []
				let msg = []
				selectedDatasetsClear.forEach(async (targetId) => {
					let targetDataset = datasetArrayClear.filter(
						(it) => it.id == targetId
					)[0]
					msg.push({
						actionName: targetDataset.name,
						version: "",
						dsid: targetDataset.id,
						destination: targetDataset.name,
						opname: route.cookies.read("account_id"),
						opgroup: route.cookies.read("company_id")
					})
				})

				const url = `${hostName}/phdydatasource/put_item`
				const token = route.cookies.read("access_token")
				let clearBody = {
					table: actionTableName,
					item: {
						projectId: params.projectId,
						code: 0,
						comments: "clear_dataset_tags",
						jobCat: "clear_DS_data",
						jobDesc: clearTagsEventName,
						message: JSON.stringify(msg),
						date: String(new Date().getTime()),
						owner: route.cookies.read("account_id"),
						showName: decodeURI(
							route.cookies.read("user_name_show")
						)
					}
				}
				let clearOptions = {
					method: "POST",
					headers: {
						Authorization: token,
						"Content-Type":
							"application/x-www-form-urlencoded; charset=UTF-8",
						accept: "application/json"
					},
					body: JSON.stringify(clearBody)
				}
				let clearResult = await fetch(url, clearOptions).then((res) =>
					res.json()
				)
				route.noticeService.defineAction({
					type: "iot",
					id: clearResult.data.id,
					remoteResource: "notification",
					runnerId: "",
					eventName: clearTagsEventName,
					projectId: params.projectId,
					ownerId: route.cookies.read("account_id"),
					callBack: clearTagsNoticeCallback
				})
				// TODO: 暂时注释

				// promiseList.push(clearResult)
				// await Promise.all(promiseList)
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

	function genRunnerId(projectName, flowVersion = "developer") {
		let d = new Date().toISOString()
		const i = d.indexOf(".")
		d = d.substring(0, i) + "+00:00"
		return [projectName, projectName, flowVersion, d].join("_")
	}

	async function createCatalogSample() {
		let { catalog_result, projectId, projectName } =
			route.create_catalog_result
		let message = JSON.parse(catalog_result)
		console.log(projectName)
		// const url = `${hostName}/phdydatasource/put_item`
		const url = `${hostName}/statemachinetrigger`
		const runnerId = genRunnerId("sample")
		const sourceProjectIdValue = "zudIcG_17yj8CEUoCTHg"
		const sample = "F_1"
		let sampleBody = {
			common: {
				runnerId: runnerId,
				projectId: projectId,
				projectName: "sample",
				owner: route.cookies.read("account_id"),
				showName: decodeURI(route.cookies.read("user_name_show"))
			},
			calculate: {
				type: "sample",
				sourceProjectId: sourceProjectIdValue,
				targetProjectId: projectId,
				datasetId: message.id,
				datasetName: message.name,
				sample: sample,
				recursive: true
			}
		}
		//发送action
		// let messages = {
		// 	actionName: message.name,
		// 	sourceProjectId: sourceProjectIdValue,
		// 	targetProjectId: projectId,
		// 	projectName: projectName,
		// 	datasetName: message.name,
		// 	datasetId: message.id,
		// 	sample: sample,
		// 	owner: route.cookies.read("account_id"),
		// 	showName: decodeURI(route.cookies.read("user_name_show"))
		// }
		// let scriptBody = {
		// 	table: actionTableName,
		// 	item: {
		// 		projectId: projectId,
		// 		owner: route.cookies.read("account_id"),
		// 		showName: decodeURI(route.cookies.read("user_name_show")),
		// 		code: 0,
		// 		jobDesc: createCatalogSampleEventName,
		// 		jobCat: "edit_sample",
		// 		comments: "",
		// 		date: String(new Date().getTime()),
		// 		message: JSON.stringify(messages)
		// 	}
		// }
		let editSampleOptions = {
			method: "POST",
			headers: {
				Authorization: accessToken,
				"Content-Type":
					"application/x-www-form-urlencoded; charset=UTF-8",
				accept: "application/json"
			},
			body: JSON.stringify(sampleBody)
		}
		let results = await fetch(url, editSampleOptions).then((res) =>
			res.json()
		)
		if (results.status === "failed") {
			alert("启动出错，请重新运行！")
			route.loadingService.loading.style.display = "none"
			return false
		}
		// this.noticeService.defineAction({
		// 	type: "iot",
		// 	remoteResource: "notification",
		// 	runnerId: "",
		// 	id: event.data.message.notification.id,
		// 	eventName: event.data.message.notification.eventName,
		// 	projectId: jobNamePre,
		// 	ownerId: this.cookies.read("account_id"),
		// 	callBack: this.runDagCallback
		// })
		route.noticeService.defineAction({
			type: "iot",
			remoteResource: "notification",
			runnerId: "",
			id: runnerId,
			eventName: "sampleTrigger",
			projectId: projectId,
			ownerId: route.cookies.read("account_id"),
			callBack: createCatalogSampleNoticeCallback
		})
	}

	function createCatalogSampleNoticeCallback(param, payload) {
		const { message, status } = JSON.parse(payload)
		const {
			cnotification: { error }
		} = JSON.parse(message)
		if (status == "success" || status == "succeed") {
			alert("新建数据集成功！")
			window.location.reload()
		} else if (status == "failed") {
			let errorObj = error !== "" ? JSON.parse(error) : ""
			let msg =
				errorObj["message"]["zh"] !== ""
					? errorObj["message"]["zh"]
					: "新建数据集失败！"
			route.loadingService.loading.style.display = "none"
			alert(msg)
		}
	}

	function createCatalogNoticeCallback(param, payload) {
		const { message, status } = JSON.parse(payload)
		const {
			cnotification: { error }
		} = JSON.parse(message)
		if (status == "succeed") {
			createCatalogSample()
		} else if (status == "failed") {
			let errorObj = error !== "" ? JSON.parse(error) : ""
			let msg =
				errorObj["message"]["zh"] !== ""
					? errorObj["message"]["zh"]
					: "新建数据集失败！"
			alert(msg)
			route.loadingService.loading.style.display = "none"
		}
	}

	function clearTagsNoticeCallback(param, payload) {
		const { message, status } = JSON.parse(payload)
		const {
			cnotification: { error }
		} = JSON.parse(message)

		if (status == "succeed") {
			alert("清除数据成功！")
			window.location.reload()
		} else if (status == "failed") {
			let errorObj = error !== "" ? JSON.parse(error) : ""
			let msg =
				errorObj["message"]["zh"] !== ""
					? errorObj["message"]["zh"]
					: "清除数据失败，请重新操作！"
			alert(msg)
		}
		route.loadingService.loading.style.display = "none"
	}

	function delNoticeCallback(param, payload) {
		const { message, status } = JSON.parse(payload)
		const {
			cnotification: { error }
		} = JSON.parse(message)

		if (status == "succeed") {
			alert("删除数据集成功！")
			window.location.reload()
		} else if (status == "failed") {
			let errorObj = error !== "" ? JSON.parse(error) : ""
			let msg =
				errorObj["message"]["zh"] !== ""
					? errorObj["message"]["zh"]
					: "删除数据集失败，请重新操作！"
			alert(msg)
		}
		route.loadingService.loading.style.display = "none"
	}
}