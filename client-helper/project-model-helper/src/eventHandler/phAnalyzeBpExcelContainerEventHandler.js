// eslint-disable-next-line no-unused-vars
export async function phAnalyzeBpExcelContainerEventHandler(e, route) {
	let params = e.detail[0].args.param
	let uri = ""
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
			route.noticeService.defineAction({
				type: "iot",
				id: eventName,
				projectId: params.projectId,
				ownerId: route.cookies.read("account_id"),
				callBack: changeSchemaTypeCallback
			})
			if (params) {
				route.loadingService.loading.style.display = "flex"
				let cstParam = e.detail[0].args.param
				route.vueComponentEnv = e.detail[0].args.element
				route.vueComponentEnvType = cstParam.itemValueType
				let type =
					cstParam.itemValueType === "Number"
						? "Double"
						: cstParam.itemValueType
				const url = "https://apiv2.pharbers.com/phdydatasource/put_item"
				let body = {
					table: "action",
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
				await fetch(url, options).then((res) => res.json())
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

		// let cnotification = JSON.parse(
		// 	JSON.parse(payload).message
		// ).cnotification
		// let status = cnotification.status
		// let error =
		// 	cnotification.error !== "" ? JSON.parse(cnotification.error) : ""
		// if (status == "transform_schema_succeed") {
		// 	alert("修改成功")
		// } else if (status == "transform_schema_failed") {
		// 	alert(error)
		// 	//刷新页面数据
		// 	if (route.vueComponentEnvType === "Number") {
		// 		route.vueComponentEnv.itemValueType = "Text"
		// 	} else {
		// 		route.vueComponentEnv.itemValueType = "Number"
		// 	}
		// }
		route.loadingService.loading.style.display = "none"
	}
}
