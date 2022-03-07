// eslint-disable-next-line no-unused-vars
export async function phAnalyzeDataListHomeEventHandler(e, route) {
	let params = e.detail[0].args.param
	const startUrl = "https://apiv2.pharbers.com/phresourceaction"
	const accessToken = route.cookies.read("access_token")
	let uri = "/projects"
	//未启动项目资源时，点击按钮提示弹窗。
	let argsCallback = e.detail[0].args.callback
	if (
		route.resourceActionService.checkStarted() &&
		argsCallback !== "deleteProject" &&
		argsCallback !== "startResource" &&
		argsCallback !== "checkStartResource"
	) {
		alert("请先启动项目资源！")
		return false
	}
	switch (argsCallback) {
		case "linkToPage":
			if (params.name == "datasets") {
				uri =
					"dataset-lst?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (params.name == "project") {
				uri = "projects/" + params.projectId
			} else if (params.name === "scripts") {
				//recipe页面
				uri =
					"recipes?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (params.name === "script") {
				//script list页面
				uri =
					"recipes?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (params.name === "flow") {
				uri =
					"flow?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (params.name == "projects") {
				uri = "projects"
			} else if (params.name == "airflow") {
				uri =
					"airflow?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (params.name == "dsahboards") {
				uri =
					"dashboards?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			}
			//执行列表 分页
			route.router.transitionTo("shell", uri)
			break
		case "deleteProject":
			if (params) {
				let uri = `https://apiv2.pharbers.com/phcreateproject/projects/${params.projectId}`
				let results = await fetch(uri, {
					method: "delete",
					headers: {
						Authorization: accessToken,
						"Content-Type": "application/vnd.api+json",
						Accept: "application/vnd.api+json"
					}
				})
				if (results.status === 204) {
					alert("删除项目成功！")
					window.location.href =
						"https://general.pharbers.com/projects"
				} else {
					alert("删除失败！")
				}
			}
			break
		case "checkStartResource":
			if (params) {
				route.loadingService.loading.style.display = "flex"
				route.loadingService.loading.style["z-index"] = 2
				await checkStartResourceFun()
				route.loadingService.loading.style.display = "none"
			}
			break
		case "startResource":
			console.log(params)
			route.loadingService.loading.style.display = "flex"
			route.loadingService.loading.style["z-index"] = 2
			if (params) {
				let checked = await checkStartResourceFun()
				if (checked) {
					console.log("判断完了，closed，重新注册")
					route.noticeService.defineAction({
						type: "iot",
						id: "resource_create",
						projectId: params.projectId,
						ownerId: "*",
						callBack: callback
					})
					let body = {
						projectName: params.projectName,
						projectId: params.projectId,
						content_type: "start",
						owner: route.cookies.read("account_id"),
						showName: decodeURI(
							route.cookies.read("user_name_show")
						),
						operation_type: "operate_resource"
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
					await fetch(startUrl, options).then((res) => res.json())
				}
			}
			break
		default:
			console.log("submit event to parent")
	}

	function callback(param, payload) {
		console.log(payload)
		const { status } = JSON.parse(payload)
		if (status == "succeed") {
			route.resourceActionService.boolChecked = false
			e.detail[0].args.element.dialogStartSucceed = true //成功弹窗
			e.detail[0].args.element.showStartButton = false //按钮disabled
		} else if (status == "failed" || status == "mqtt timeout") {
			route.resourceActionService.boolChecked = true
			e.detail[0].args.element.dialogStartFailed = true //失败弹窗
		}
		route.loadingService.loading.style.display = "none"
	}

	async function checkStartResourceFun() {
		const startUrl = "https://apiv2.pharbers.com/phresourceaction"
		let startBody = {
			projectName: params.projectName,
			projectId: params.projectId,
			content_type: "start",
			owner: route.cookies.read("account_id"),
			showName: decodeURI(route.cookies.read("user_name_show")),
			operation_type: "get_status"
		}
		let startOptions = {
			method: "POST",
			headers: {
				Authorization: accessToken,
				"Content-Type":
					"application/x-www-form-urlencoded; charset=UTF-8",
				accept: "application/json"
			},
			body: JSON.stringify(startBody)
		}
		const startResults = await fetch(startUrl, startOptions).then((res) =>
			res.json()
		)
		console.log("判断是否启动：", startResults)
		if (startResults.data.resource_status === "starting") {
			console.log("starting")
			route.loadingService.loading.style.display = "flex"
			route.loadingService.loading.style["z-index"] = 2
			route.noticeService.defineAction({
				type: "iot",
				id: "resource_create",
				projectId: params.projectId,
				ownerId: "*",
				callBack: callback
			})
			route.resourceActionService.boolChecked = false
			return false
		} else if (startResults.data.resource_status === "started") {
			e.detail[0].args.element.showStartButton = false //按钮disabled
			route.loadingService.loading.style.display = "none"
			route.resourceActionService.boolChecked = false
			return false
		}
		console.log("closed,我要重新注册")
		route.resourceActionService.boolChecked = true
		return true
	}
}
