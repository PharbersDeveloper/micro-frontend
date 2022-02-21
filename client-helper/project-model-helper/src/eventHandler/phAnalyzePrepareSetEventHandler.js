// eslint-disable-next-line no-unused-vars
export async function phAnalyzePrepareSetEventHandler(e, route) {
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
			route.noticeService.defineAction({
				type: "iot",
				ele: route,
				id: "prepare",
				projectId: params.projectId,
				ownerId: route.cookies.read("account_id"),
				callBack: createScriptNoticeCallback
			})
			if (params) {
				let scriptsParams = JSON.parse(
					unescape(decodeURI(params.message))
				)
				const url = "https://apiv2.pharbers.com/phdydatasource/put_item"
				const accessToken = route.cookies.read("access_token")
				const uuid = guid()
				route.loadingService.loading.style.display = "flex"
				route.loadingService.loading.style["z-index"] = 2
				route.projectId = scriptsParams.projectId
				route.projectName = scriptsParams.projectName
				let operatorParameters = []
				operatorParameters.push(
					"filter",
					params.rowParams,
					"select",
					params.colParams,
					"operation_null",
					params.changeParams
				)
				//需要新建dataset
				if (scriptsParams.outputs[0].id == "") {
					scriptsParams.outputs[0].id = uuid
					let body = {
						table: "dataset",
						item: {
							projectId: scriptsParams.projectId,
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
						projectName: scriptsParams.projectName,
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
						dagName: scriptsParams.projectName,
						flowVersion: "developer",
						jobName: scriptsParams.jobName,
						jobId: "",
						inputs: scriptsParams.inputs,
						outputs: scriptsParams.outputs,
						jobVersion: scriptsParams.jobVersion,
						projectId: scriptsParams.projectId,
						timeout: "1000",
						runtime: "prepare",
						// owner: decodeURI(route.cookies.read("user_name_show")),
						owner: route.cookies.read("account_id"),
						showName: decodeURI(
							route.cookies.read("user_name_show")
						),
						targetJobId: "",
						projectName: scriptsParams.projectName,
						labels: [],
						operatorParameters: operatorParameters,
						prop: {
							path: scriptsParams.path,
							partitions: 1
						}
					}
					job_cat_name = "dag_create"
				}
				let scriptBody = {
					table: "action",
					item: {
						projectId: scriptsParams.projectId,
						owner: route.cookies.read("account_id"),
						showName: decodeURI(
							route.cookies.read("user_name_show")
						),
						code: 0,
						jobDesc: "created",
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
		let cnotification = JSON.parse(
			JSON.parse(payload).message
		).cnotification
		let create_scripts_status = cnotification.status
		let error =
			cnotification.error !== "" ? JSON.parse(cnotification.error) : ""
		route.loadingService.loading.style.display = "none"
		if (create_scripts_status == "dag insert success") {
			alert(`${route.msg}脚本成功！`)
			route.router.transitionTo(
				`/flow?projectId=${route.projectId}&projectName=${route.projectName}&flowVersion=developer`
			)
		} else {
			let msg =
				error["message"]["zh"] !== ""
					? error["message"]["zh"]
					: `${route.msg}脚本失败，请重新操作！`
			alert(msg)
		}
	}
}
