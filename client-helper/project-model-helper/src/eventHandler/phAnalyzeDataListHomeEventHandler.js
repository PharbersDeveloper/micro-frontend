import { hostName } from "../config/envConfig"

// eslint-disable-next-line no-unused-vars
export async function phAnalyzeDataListHomeEventHandler(e, route) {
	let params = e.detail[0].args.param
	const accessToken = route.cookies.read("access_token")
	let uri = "/projects"
	let argsCallback = e.detail[0].args.callback
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
			} else if (params.name == "dashboard") {
				uri =
					"dashboards?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (params.name == "slide") {
				uri =
					"slide?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			}
			//执行列表 分页
			route.router.transitionTo("shell", uri)
			break
		case "deleteProject":
			if (params) {
				/**
				 * 1.判断是否正在启动
				 * 2.删除resource
				 * 3.删除project
				 */
				let delResourceUri = `${hostName}/phcreateproject/resources/${params.resourceId}`
				await fetch(delResourceUri, {
					method: "delete",
					headers: {
						Authorization: accessToken,
						"Content-Type": "application/vnd.api+json",
						Accept: "application/vnd.api+json"
					}
				})
				let uri = `${hostName}/phcreateproject/projects/${params.projectId}`
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
		default:
			console.log("submit event to parent")
	}
}
