import { hostName } from "../config/envConfig"

// eslint-disable-next-line no-unused-vars
export async function phUploadBpFileUploadContainerEventHandler(e, route) {
	let params = e.detail[0].args.param
	let uri = ""
	const accessToken = route.cookies.read("access_token")
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			if (params.name === "advancedMapping") {
				uri =
					"excel-clean?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (
				params.name === "linkToProject" ||
				params.name == "project"
			) {
				uri = `projects/` + params.projectId
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
			//执行列表 分页
			route.router.transitionTo("shell", uri)
			break
		case "importCurrentDataToDS":
			createDataSetIndex(params)
			break
		default:
			console.log("submit event to parent")
	}

	function EHnoticeCallback(param, payload) {
		const { message, status } = JSON.parse(payload)
		const {
			cnotification: { data, error }
		} = JSON.parse(message)

		if (status == "succeed") {
			//跳转下一页面
			const params = [
				`projectName=${route.tranParam.projectName}`,
				`projectId=${route.tranParam.projectId}`
			]
			route.router.transitionTo(
				"shell",
				`dataset-lst?${params.join("&")}`
			)
			route.loadingService.loading.style.display = "none"
		} else if (status == "failed") {
			const errorObj = error !== "" ? JSON.parse(error) : ""
			let msg =
				errorObj["message"]["zh"] !== ""
					? errorObj["message"]["zh"]
					: "导入失败，请重新上传！"
			alert(msg)
			route.loadingService.loading.style.display = "none"
		} else if (status == "running") {
			console.info(data)
			console.info("running", data.progress)
		}
	}

	async function createDataSetIndex(param) {
		console.log(param)
		const eventName = "importfiles"
		route.loadingService.loading.style.display = "flex"
		route.loadingService.loading.style["z-index"] = 2
		const url = `${hostName}/phresourcecreationtrigger`
		let message = {
			common: {
				traceId: param.uuid,
				projectId: param.projectId,
				projectName: param.projectName,
				flowVersion: "developer",
				dagName: param.projectName,
				owner: route.cookies.read("account_id"),
				showName: decodeURI(route.cookies.read("user_name_show"))
			},
			action: {
				cat: "createDS",
				desc: "create DS",
				comments: "something need to say",
				message: "something need to say",
				required: true
			},
			datasets: [
				{
					name: param.dsName,
					cat: "uploaded",
					format: "csv"
				}
			],
			script: {},
			notification: {
				required: true
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
			body: JSON.stringify(message)
		}
		await fetch(url, options).then((res) => res.json())

		// param.opname = route.cookies.read("account_id")
		// param.opgroup = route.cookies.read("company_id")
		// param.cat = "uploaded"
		// param.actionName = param.destination // actions列表展示的名称
		// param.prop = JSON.stringify({
		// 	path: "",
		// 	partitions: 1
		// })
		// //直接导入数据集
		// const push_type = "put_item"
		// const project_files_body = {
		// 	table: actionTableName,
		// 	item: {
		// 		projectId: param.projectId,
		// 		code: 0,
		// 		comments: "project file to Data set",
		// 		jobCat: "project_file_to_DS",
		// 		jobDesc: eventName,
		// 		message: JSON.stringify(param),
		// 		date: String(new Date().getTime()),
		// 		owner: route.cookies.read("account_id"),
		// 		showName: decodeURI(route.cookies.read("user_name_show"))
		// 	}
		// }
		// await postUrl(push_type, project_files_body)
		route.noticeService.defineAction({
			type: "iot",
			id: param.uuid,
			remoteResource: "notification",
			runnerId: "",
			eventName: eventName,
			projectId: params.projectId,
			ownerId: route.cookies.read("account_id"),
			callBack: EHnoticeCallback
		})
	}
}
