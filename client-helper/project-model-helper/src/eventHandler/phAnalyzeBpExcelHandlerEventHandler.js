// eslint-disable-next-line no-unused-vars
export async function phAnalyzeBpExcelHandlerEventHandler(e, route) {
	let params = e.detail[0].args.param
	let uri = ""
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
		case "createDataSetIndex":
			route.tranParam = params
			createDataSetIndex(params)
			break
		default:
			console.log("submit event to parent")
	}

	function postUrl(type, body) {
		const url = "https://apiv2.pharbers.com/phdydatasource/"
		let headers = {
			Authorization: route.cookies.read("access_token"),
			"Content-Type": "application/vnd.api+json",
			Accept: "application/vnd.api+json"
		}
		let options = {
			method: "POST",
			headers: headers,
			body: JSON.stringify(body)
		}
		return fetch(url + type, options).then((res) => res.json())
	}

	function EHnoticeCallback(param, payload) {
		console.log("导入的", payload)
		console.log(param)
		let cnotification = JSON.parse(
			JSON.parse(payload).message
		).cnotification
		let upload_status = cnotification.status
		let error =
			cnotification.error !== "" ? JSON.parse(cnotification.error) : ""
		if (upload_status == "project_file_to_DS_succeed") {
			//跳转下一页面
			// route.router.transitionTo(
			// 	"shell",
			// 	`dataset-lst?projectName=${route.tranParam.projectName}&projectId=${route.tranParam.projectId}`
			// )
			console.log("跳转下一页面跳转下一页面跳转下一页面")
		} else if (upload_status == "project_file_to_DS_failed") {
			let msg =
				error["message"]["zh"] !== ""
					? error["message"]["zh"]
					: "导入失败，请重新上传！"
			alert(msg)
		}
		route.loadingService.loading.style.display = "none"
	}

	async function createDataSetIndex(param) {
		route.noticeService.defineAction({
			type: "iot",
			// id: results[0].data.id,
			ele: route,
			id: "importfiles",
			projectId: params.projectId,
			ownerId: route.cookies.read("account_id"),
			callBack: EHnoticeCallback
		})
		route.loadingService.loading.style.display = "flex"
		route.loadingService.loading.style["z-index"] = 2
		param.opname = route.cookies.read("account_id")
		param.opgroup = route.cookies.read("company_id")
		param.cat = "uploaded"
		param.actionName = param.destination // actions列表展示的名称
		param.prop = JSON.stringify({
			path: "",
			partitions: 1
		})
		//直接导入数据集
		const push_type = "put_item"
		const project_files_body = {
			table: "action",
			item: {
				projectId: param.projectId,
				code: 0,
				comments: "project file to Data set",
				jobCat: "project_file_to_DS",
				jobDesc: "creating",
				message: JSON.stringify(param),
				date: String(new Date().getTime()),
				owner: route.cookies.read("account_id"),
				showName: decodeURI(route.cookies.read("user_name_show"))
			}
		}
		await postUrl(push_type, project_files_body)
	}
}
