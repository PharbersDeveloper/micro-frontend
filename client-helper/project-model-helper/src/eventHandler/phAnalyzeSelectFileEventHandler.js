// eslint-disable-next-line no-unused-vars
export async function phAnalyzeSelectFileEventHandler(e, route) {
	let param = e.detail[0].args.param
	let uri = ""
	console.log("upload", route)
	/** localUpload */
	let uploadParam = true
	let datasetName = param.property.dataset
	let dataID = param.property.dataID
	let datasetArray = route.args.allData.data.datasetArr

	switch (e.detail[0].args.callback) {
		case "linkToPage":
			if (param.name === "linkToProject" || param.name == "project") {
				uri = `projects/` + param.projectId
			} else if (param.name === "datasets") {
				uri =
					"dataset-lst?projectName=" +
					param.projectName +
					"&projectId=" +
					param.projectId
			} else if (param.name === "scripts") {
				uri =
					"recipes?projectName=" +
					param.projectName +
					"&projectId=" +
					param.projectId
			} else if (param.name == "flow") {
				uri =
					"flow?projectName=" +
					param.projectName +
					"&projectId=" +
					param.projectId
			} else if (param.name == "airflow") {
				uri =
					"airflow?projectName=" +
					param.projectName +
					"&projectId=" +
					param.projectId
			}
			route.router.transitionTo("shell", uri)
			break
		case "s3UploadFiles":
			console.log("s3UploadFiles")
			if (param.s3UploadMessage.message) {
				let resMessage = {
					tmpname: param.s3UploadMessage.message.refer_name,
					filename: param.s3UploadMessage.message.file_name
				}
				let file = param.s3UploadMessage.message
				param.property.projectId = param.projectId
				param.property.opname = route.cookies.read("account_id")
				param.property.owner = route.cookies.read("account_id")
				param.property.opgroup = route.cookies.read("company_id")
				param.property.showName = decodeURI(
					route.cookies.read("user_name_show")
				)
				//关闭弹框
				e.detail[0].args.element.show = false
				route.random = Math.random()
				//notice回调函数参数
				route.tranParam = {
					file: file,
					property: param.property,
					projectName: param.projectName,
					message: resMessage,
					projectId: param.projectId
				}
				//请求接口
				route.updateDataset(
					file,
					param.property,
					param.projectName,
					resMessage,
					param.projectId,
					"uploaded"
				)
			}
			break
		case "uploadFiles":
			console.log("uploadFiles")
			//如果数据集为下拉框选择，需要判断
			if (param.property.type == "selectDataset") {
				// 判断数据id是否存在
				let opt = {
					query: `select count(1) from \`${param.projectId}_${datasetName}\` where version = '${dataID}'`,
					schema: ["count"]
				}
				let url = "https://apiv2.pharbers.com/phcheckversion"
				let headers = {
					Authorization: route.cookies.read("access_token"),
					"Content-Type": "application/vnd.api+json",
					Accept: "application/vnd.api+json"
				}
				let options = {
					method: "POST",
					headers: headers,
					body: JSON.stringify(opt)
				}
				let versionResult = await fetch(url, options).then((res) =>
					res.json()
				)
				let NUMResult = Number(versionResult[0].count)
				if (NUMResult != 0) {
					uploadParam = false
					alert("数据ID重复，请重新输入！")
					throw new Error("数据集已存在")
				}
			}
			// 如果数据集是新创建，判断数据集是否存在
			else if (param.property.type == "createDataset") {
				datasetArray.forEach((item) => {
					if (item.name === datasetName) {
						uploadParam = false
						alert("数据集已存在，请在下拉框选择数据集！")
						throw new Error("数据集已存在")
					}
				})
			}
			if (uploadParam) {
				e.detail[0].args.element.show = false
				param.property.projectId = param.projectId
				param.property.opname = route.cookies.read("account_id")
				param.property.owner = route.cookies.read("account_id")
				param.property.opgroup = route.cookies.read("company_id")
				param.property.showName = decodeURI(
					route.cookies.read("user_name_show")
				)
				confirmUploadFiles(
					param.files[0],
					param.property,
					param.projectName,
					param.projectId,
					"uploaded"
				)
			}
			break
		default:
			console.log("submit event to parent")
	}

	async function confirmUploadFiles(
		file,
		property,
		projectName,
		projectId,
		cat
	) {
		let uploadMessage = {}
		uploadMessage.file = file

		const API_ENDPOINT = "https://max.pharbers.com/upload"
		const request = new XMLHttpRequest()
		const formData = new FormData()
		route.loadingService.loading.style.display = "flex"
		route.loadingService.loading.style["z-index"] = 2
		request.open("POST", API_ENDPOINT, true)
		request.onreadystatechange = () => {
			if (request.readyState === 4 && request.status === 200) {
				//上传成功
				let res = JSON.parse(request.responseText)
				if (res.tmpname) {
					route.tranParam = {
						file: file,
						property: property,
						projectName: projectName,
						message: res,
						projectId: projectId
					}
					updateDataset(
						file,
						property,
						projectName,
						res,
						projectId,
						cat
					)
				}
			}
		}
		formData.append("file", uploadMessage.file)
		request.send(formData)
	}

	async function updateDataset(
		file,
		property,
		projectName,
		message,
		projectId,
		cat
	) {
		route.loadingService.loading.style.display = "flex"
		route.loadingService.loading.style["z-index"] = 2
		//push project_files
		let push_type = "put_item"
		let project_files_body = {
			table: "project_files",
			item: {
				smID: projectName,
				name: message.filename,
				status: "creating",
				category: message.filename.split(".")[1],
				property: JSON.stringify(property),
				id: message.tmpname
			}
		}
		let project_files = postUrl(push_type, project_files_body)
		//push actions
		let messages = {
			actionName: property.dataset,
			file: file,
			message: message,
			property: property,
			projectId: projectId,
			projectName: projectName,
			cat: cat,
			prop: JSON.stringify({
				path: "",
				partitions: 1
			})
		}
		let actions_body = {
			table: "action",
			item: {
				projectId: projectId,
				owner: route.cookies.read("access_token"),
				showName: decodeURI(route.cookies.read("user_name_show")),
				code: 0,
				jobDesc: "created",
				jobCat: "upload",
				comments: "",
				date: String(new Date().getTime()),
				message: JSON.stringify(messages)
			}
		}
		let actions = postUrl(push_type, actions_body)
		await Promise.all([project_files, actions])
		//请求status，持续30s
		// route.noticeService.register(
		// 	"notification",
		// 	results[0].data.id,
		// 	noticeCallback,
		// 	route,
		// 	projectId
		// )
		console.log(route)
		route.noticeService.defineAction({
			type: "iot",
			// id: results[0].data.id,
			ele: route,
			id: "uploadfiles",
			projectId: projectId,
			ownerId: route.cookies.read("account_id"),
			callBack: noticeCallback
		})
	}

	async function postUrl(type, body) {
		let url = "https://apiv2.pharbers.com/phdydatasource/"
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

	function noticeCallback(params, payload) {
		let cnotification = JSON.parse(
			JSON.parse(payload).message
		).cnotification
		let upload_status = cnotification.status
		let error =
			cnotification.error !== "" ? JSON.parse(cnotification.error) : ""
		if (upload_status != "upload_succeed") {
			//跳转回dataset页面
			let msg =
				error["message"]["zh"] !== ""
					? error["message"]["zh"]
					: "上传失败，请重新上传！"
			alert(msg)
			route.router.transitionTo(
				"/dataset-lst?projectName=" +
					route.tranParam.projectName +
					"&projectId=" +
					route.tranParam.projectId
			)
		} else {
			route.noticeService.uploadStatus = true
			route.router.transitionTo(
				"shell",
				`excel-handler?projectName=${route.tranParam.projectName}&projectId=${route.tranParam.projectId}&filename=${route.tranParam.file.name}&version=${route.tranParam.property.dataID}&dataset=${route.tranParam.property.dataset}&tmpname=${route.tranParam.message.tmpname}`
			)
		}
		route.loadingService.loading.style.display = "none"
	}
}
