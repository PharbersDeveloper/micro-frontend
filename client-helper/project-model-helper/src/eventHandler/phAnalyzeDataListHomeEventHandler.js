// eslint-disable-next-line no-unused-vars
export async function phAnalyzeDataListHomeEventHandler(e, route) {
	let params = e.detail[0].args.param
	const startUrl = "https://apiv2.pharbers.com/phresourceaction"
	const accessToken = route.cookies.read("access_token")
	let uri = "/projects"
	switch (e.detail[0].args.callback) {
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
			}
			//执行列表 分页
			route.router.transitionTo("shell", uri)
			break
		case "startResource":
			console.log(params)
			route.loadingService.loading.style.display = "flex"
			route.loadingService.loading.style["z-index"] = 2
			// route.noticeService.defineAction({
			// 	type: "iot",
			// 	id: "startResource",
			// 	projectId: params.projectId,
			// 	ownerId: "*",
			// 	callBack: callback
			// })
			if (params) {
				let body = {
					projectName: params.projectName,
					projectId: params.projectId,
					content_type: "start",
					owner: route.cookies.read("account_id"),
					showName: decodeURI(route.cookies.read("user_name_show"))
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
				let results = await fetch(startUrl, options).then((res) =>
					res.json()
				)
				console.log(results)
			}
			break
		default:
			console.log("submit event to parent")
	}

	function callback(param, payload) {
		console.log(payload)
	}
}
