// eslint-disable-next-line no-unused-vars
export async function phAnalyzeScriptsListEventHandler(e, route) {
	let params = e.detail[0].args.param
	let uri = "projects"
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			if (params.name === "localUpload") {
				uri =
					"dataset?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId
			} else if (
				params.name === "linkToProject" ||
				params.name === "project"
			) {
				uri = `projects/${this.projectId}?projectName=${this.projectName}&projectId=${this.projectId}`
			} else if (params.name === "analyze") {
				uri = `dataset/${params.dataset.name}?projectName=${params.projectName}&projectId=${params.projectId}&datasetId=${params.dataset.id}&datasetName=${params.dataset.name}`
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
			} else if (
				params.name === "codeditor" &&
				params.recipt.runtime !== "prepare"
			) {
				uri =
					"codeditor?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId +
					"&jobName=" +
					params.recipt.jobName +
					"&jobPath=" +
					params.recipt.jobPath
			} else if (
				params.name === "codeditor" &&
				params.recipt.runtime === "prepare"
			) {
				let recipt = params.recipt
				let scripts = {
					name: "editScripts",
					jobName: recipt.jobName,
					jobId: recipt.jobId,
					targetJobId: recipt.targetJobId,
					inputs: JSON.parse(recipt.inputs),
					outputs: JSON.parse(recipt.outputs),
					jobVersion: recipt.jobVersion,
					projectName: params.projectName,
					jobDisplayName: recipt.jobDisplayName,
					jobShowName: recipt.jobShowName,
					projectId: params.projectId,
					jobCat: "prepare_edit"
				}
				uri =
					"prepare-set?projectName=" +
					params.projectName +
					"&projectId=" +
					params.projectId +
					"&operatorParameters=" +
					escape(recipt.operatorParameters) +
					"&message=" +
					encodeURI(JSON.stringify(scripts))
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
			route.router.transitionTo("shell", encodeURI(uri))
			break
		case "createScripts":
			route.noticeService.defineAction({
				type: "iot",
				// id: results[0].data.id,
				ele: route,
				id: "createScripts",
				projectId: params.projectId,
				ownerId: route.cookies.read("account_id"),
				callBack: createScriptNoticeCallback
			})
			if (params) {
				const url = "https://apiv2.pharbers.com/phdydatasource/put_item"
				const accessToken = route.cookies.read("access_token")
				const uuid = guid()
				route.loadingService.loading.style.display = "flex"
				route.loadingService.loading.style["z-index"] = 2
				//需要新建dataset
				route.projectId = params.projectId
				route.projectName = params.projectName
				if (params.runtime === "prepare") {
					let preUrl = `prepare-set?projectName=${
						params.projectName
					}&projectId=${params.projectId}&message=${encodeURI(
						JSON.stringify(params)
					)}`
					route.router.transitionTo("shell", preUrl)
				} else {
					if (params.outputs[0].id == "") {
						//没有id要先创建dataset
						params.outputs[0].id = uuid
						let body = {
							table: "dataset",
							item: {
								projectId: params.projectId,
								id: uuid,
								label: JSON.stringify([]),
								name: params.outputs[0].name,
								schema: JSON.stringify([]),
								path: params.path,
								format: params.format,
								cat: "intermediate"
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
					let message = {
						actionName: params.jobName,
						dagName: params.projectName,
						flowVersion: "developer",
						jobName: params.jobName,
						jobId: "",
						inputs: params.inputs,
						outputs: params.outputs,
						jobVersion: params.jobVersion,
						projectId: params.projectId,
						timeout: "1000",
						runtime: params.runtime,
						owner: decodeURI(route.cookies.read("user_name_show")),
						targetJobId: "",
						projectName: params.projectName,
						labels: [],
						operatorParameters: ["script", ""],
						prop: {
							path: params.path,
							partitions: 1
						}
					}
					let scriptBody = {
						table: "action",
						item: {
							projectId: params.projectId,
							owner: route.cookies.read("account_id"),
							showName: decodeURI(
								route.cookies.read("user_name_show")
							),
							code: 0,
							jobDesc: "created",
							jobCat: "dag_create",
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
					route.creatScriptsQuery = await fetch(
						url,
						scriptOptions
					).then((res) => res.json())
				}
			}
			break
		case "addTags":
			if (params) {
				let selectedDatasets = params.selectedDatasets //需要更新的dataset
				let datasetArray = params.datasetArray //发送请求的参数在这取
				let selectedTags = params.selectedTags //选中的tag数组
				selectedDatasets.forEach(async (targetId) => {
					let targetDataset = datasetArray.filter(
						(it) => it.id == targetId
					)[0]
					let targetLabels = Array.from(
						new Set(targetDataset.label.concat(selectedTags))
					)
					const url =
						"https://apiv2.pharbers.com/phdydatasource/put_item"
					const accessToken = route.cookies.read("access_token")
					let body = {
						table: "dataset",
						item: {
							id: targetDataset.id,
							projectId: params.projectId,
							label: JSON.stringify(targetLabels),
							schema: targetDataset.schema,
							date: new Date().getTime(),
							version: targetDataset.version,
							name: targetDataset.name
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
			}
			break
		//删除脚本
		case "deleteDatasets":
			route.noticeService.defineAction({
				type: "iot",
				// id: results[0].data.id,
				ele: route,
				id: "deleteDatasets",
				projectId: params.projectId,
				ownerId: route.cookies.read("account_id"),
				callBack: noticeCallback
			})
			if (params) {
				let selectedDatasetsDel = params.selectedDatasets //需要更新的dataset
				let datasetArrayDel = params.datasetArray //发送请求的参数在这取
				let msgArr = []
				selectedDatasetsDel.forEach(async (targetId) => {
					let targetDataset = datasetArrayDel.filter(
						(it) => it.id == targetId
					)[0]
					msgArr.push({
						actionName: targetDataset.jobShowName,
						targetId: targetDataset.jobId,
						jobName: targetDataset.jobName,
						flowVersion: "developer"
					})
				})
				let body = {
					table: "action",
					item: {
						projectId: params.projectId,
						code: 0,
						comments: "delete_dataset",
						jobCat: "remove_Job",
						jobDesc: "running",
						message: JSON.stringify(msgArr),
						date: String(new Date().getTime()),
						owner: route.cookies.read("account_id"),
						showName: decodeURI(
							route.cookies.read("user_name_show")
						)
					}
				}
				const urldel =
					"https://apiv2.pharbers.com/phdydatasource/put_item"
				const accessTokendel = route.cookies.read("access_token")
				let options = {
					method: "POST",
					headers: {
						Authorization: accessTokendel,
						"Content-Type":
							"application/x-www-form-urlencoded; charset=UTF-8",
						accept: "application/json"
					},
					body: JSON.stringify(body)
				}
				await fetch(urldel, options).then((res) => res.json())
				alert("删除脚本成功！")
				window.location.reload()
			}
			break
		case "clearTags":
			route.noticeService.defineAction({
				type: "iot",
				// id: results[0].data.id,
				ele: route,
				id: "deleteDatasets",
				projectId: params.projectId,
				ownerId: route.cookies.read("account_id"),
				callBack: noticeCallback
			})
			if (params) {
				route.loadingService.loading.style.display = "flex"
				route.loadingService.loading.style["z-index"] = 2
				let selectedDatasetsClear = params.selectedDatasets //需要更新的dataset
				let datasetArrayClear = params.datasetArray //发送请求的参数在这取
				let promiseList = []
				selectedDatasetsClear.forEach(async (targetId) => {
					let targetDataset = datasetArrayClear.filter(
						(it) => it.id == targetId
					)[0]
					const url =
						"https://apiv2.pharbers.com/phdydatasource/put_item"
					const accessToken = route.cookies.read("access_token")
					let msg = {
						actionName: targetDataset.name,
						version: "",
						dsid: targetDataset.id,
						destination: targetDataset.name,
						opname: route.cookies.read("account_id"),
						opgroup: route.cookies.read("company_id")
					}
					let body = {
						table: "action",
						item: {
							projectId: params.projectId,
							code: 0,
							comments: "clear_dataset_tags",
							jobCat: "clear_DS_data",
							jobDesc: "running",
							message: JSON.stringify(msg),
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
					let result = fetch(url, options).then((res) => res.json())
					promiseList.push(result)
				})
				await Promise.all(promiseList)
				alert("清除数据成功！")
				window.location.reload()
			}
			break
		default:
			console.log("other click event!")
	}

	function createScriptNoticeCallback(param, payload) {
		route.loadingService.loading.style.display = "none"
		let cnotification = JSON.parse(
			JSON.parse(payload).message
		).cnotification
		let create_scripts_status = cnotification.status
		let error =
			cnotification.error !== "" ? JSON.parse(cnotification.error) : ""
		if (create_scripts_status == "dag insert success") {
			alert("新建脚本成功！")
			let jobName = cnotification.jobName
			let jobPath = cnotification.jobPath
			route.router.transitionTo(
				"shell",
				`codeditor?projectName=${route.projectName}&projectId=${route.projectId}&jobName=${jobName}&jobPath=${jobPath}`
			)
		} else {
			let msg =
				error["message"]["zh"] !== ""
					? error["message"]["zh"]
					: "新建脚本失败，请重新操作！"
			alert(msg)
		}
	}

	function noticeCallback(param, payload) {
		let cnotification = JSON.parse(
			JSON.parse(payload).message
		).cnotification
		let upload_status = cnotification.status
		let error =
			cnotification.error !== "" ? JSON.parse(cnotification.error) : ""
		if (upload_status == "project_file_to_DS_succeed") {
			//跳转下一页面
			this.router.transitionTo(
				"shell",
				`dataset-lst?projectName=${this.tranParam.projectName}&projectId=${this.tranParam.projectId}`
			)
		} else if (upload_status == "project_file_to_DS_failed") {
			let msg =
				error["message"]["zh"] !== ""
					? error["message"]["zh"]
					: "清除数据失败，请重新操作！"
			alert(msg)
		}
		this.loadingService.loading.style.display = "none"
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
}
