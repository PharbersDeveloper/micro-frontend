import { hostName, actionTableName } from "../config/envConfig"

// eslint-disable-next-line no-unused-vars
export async function phAnalyzeBpExcelContainerEventHandler(e, route) {
	let params = e.detail[0].args.param
	let uri = ""
	const editSampleEventName = "editSampleEventName"
	const eventName = "changeSchemaType"
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			if (params.name === "project") {
				//返回project
				uri = `projects/${this.projectId}?projectName=${this.projectName}&projectId=${this.projectId}`
			} else if (params.name == "datasets") {
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
		case "changeSchemaType":
			if (params) {
				route.loadingService.loading.style.display = "flex"
				let cstParam = e.detail[0].args.param
				route.vueComponentEnv = e.detail[0].args.element
				route.vueComponentEnvType = cstParam.itemValueType
				let type =
					cstParam.itemValueType === "Number"
						? "Double"
						: cstParam.itemValueType
				const url = `${hostName}/phdydatasource/put_item`
				let body = {
					table: actionTableName,
					item: {
						projectId: cstParam.projectId,
						code: 0,
						comments: "transform_schema",
						jobCat: "transform_schema",
						jobDesc: eventName,
						message: JSON.stringify({
							actionName: cstParam.datasetName,
							dsid: cstParam.datasetId,
							destination: cstParam.datasetName,
							schema: [
								{
									src: cstParam.title,
									des: cstParam.title,
									type: type
								}
							]
						}),
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
						Authorization: route.cookies.read("access_token"),
						"Content-Type":
							"application/x-www-form-urlencoded; charset=UTF-8",
						accept: "application/json"
					},
					body: JSON.stringify(body)
				}
				const result = await fetch(url, options).then((res) =>
					res.json()
				)
				route.noticeService.defineAction({
					type: "iot",
					remoteResource: "notification",
					runnerId: "",
					id: result.data.id,
					eventName: eventName,
					projectId: params.projectId,
					ownerId: route.cookies.read("account_id"),
					callBack: changeSchemaTypeCallback
				})
			}
			break
		case "clickSample":
			if (params) {
				const url = `${hostName}/phdydatasource/put_item`
				const accessToken = route.cookies.read("access_token")
				route.loadingService.loading.style.display = "flex"
				route.loadingService.loading.style["z-index"] = 2
				params.targetDataset.sample = params.sample
				params.targetDataset.projectId = params.projectId
				params.targetDataset.id = params.datasetId
				let sourceProjectIdValue = ""
				if (params.targetDataset.cat === "catalog") {
					// 与后端沟通,catalog类型的projectId都是一个，暂时写死
					sourceProjectIdValue = "zudIcG_17yj8CEUoCTHg"
				} else {
					sourceProjectIdValue = params.projectId
				}
				// 更新dataset表
				let body = {
					table: "dataset",
					item: params.targetDataset
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
				//发送action
				let message = {
					actionName: params.targetDataset.name,
					sourceProjectId: sourceProjectIdValue,
					targetProjectId: params.projectId,
					projectName: params.projectName,
					datasetName: params.targetDataset.name,
					datasetId: params.targetDataset.id,
					sample: params.sample,
					owner: route.cookies.read("account_id"),
					showName: decodeURI(route.cookies.read("user_name_show"))
				}
				let scriptBody = {
					table: actionTableName,
					item: {
						projectId: params.projectId,
						owner: route.cookies.read("account_id"),
						showName: decodeURI(
							route.cookies.read("user_name_show")
						),
						code: 0,
						jobDesc: editSampleEventName,
						jobCat: "edit_sample",
						comments: "",
						date: String(new Date().getTime()),
						message: JSON.stringify(message)
					}
				}
				let editSampleOptions = {
					method: "POST",
					headers: {
						Authorization: accessToken,
						"Content-Type":
							"application/x-www-form-urlencoded; charset=UTF-8",
						accept: "application/json"
					},
					body: JSON.stringify(scriptBody)
				}
				let results = await fetch(url, editSampleOptions).then((res) =>
					res.json()
				)
				route.noticeService.defineAction({
					type: "iot",
					remoteResource: "notification",
					runnerId: "",
					id: results.data.id,
					eventName: editSampleEventName,
					projectId: params.projectId,
					ownerId: route.cookies.read("account_id"),
					callBack: editSampleCallback
				})
			}
			break
		default:
			console.log("other click event!")
	}

	function changeSchemaTypeCallback(param, payload) {
		console.log("更改表名")

		const { message, status } = JSON.parse(payload)
		const {
			cnotification: { error }
		} = JSON.parse(message)

		if (status == "succeed") {
			alert("修改成功")
		} else if (status == "failed") {
			let errorObj = error !== "" ? JSON.parse(error) : ""
			let msg =
				errorObj["message"]["zh"] !== ""
					? errorObj["message"]["zh"]
					: "修改失败，请重新检查数据！"
			alert(msg)
			//刷新页面数据
			if (route.vueComponentEnvType === "Number") {
				route.vueComponentEnv.itemValueType = "Text"
			} else {
				route.vueComponentEnv.itemValueType = "Number"
			}
		}
		route.loadingService.loading.style.display = "none"
	}

	function editSampleCallback(param, payload) {
		console.log("更改表名")
		const { message, status } = JSON.parse(payload)
		const {
			cnotification: { error }
		} = JSON.parse(message)

		if (status == "succeed") {
			alert("数据样本配置成功")
			window.location.reload()
		} else if (status == "failed") {
			let errorObj = error !== "" ? JSON.parse(error) : ""
			let msg =
				errorObj["message"]["zh"] !== ""
					? errorObj["message"]["zh"]
					: "数据样本配置失败，请重新操作！"
			alert(msg)
			// TODO:刷新页面数据
		}
		route.loadingService.loading.style.display = "none"
	}
}
