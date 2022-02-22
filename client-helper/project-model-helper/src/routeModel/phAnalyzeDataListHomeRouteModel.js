// eslint-disable-next-line no-unused-vars
export async function phAnalyzeDataListHomeRouteModel(route, parseParams) {
	let debugToken =
		"57ce1cb2b12549a964e20345c9727468ca1fbc8f38019c3773deb4427e51b198"
	let numShow = {}
	let promiseList = []
	let showStartButton = true
	// project基本信息
	let projectDetail = route.store.findRecord(
		"project",
		parseParams.param.project_id
	)
	// 目前只有数据集和脚本的num
	const url = "https://apiv2.pharbers.com/phgetnumber"
	const accessToken = route.cookies.read("access_token") || debugToken
	const startUrl = "https://apiv2.pharbers.com/phresourceaction"
	let body = {
		tableName: "dataset",
		projectId: parseParams.param.project_id
	}
	let options = {
		method: "POST",
		headers: {
			Authorization: accessToken,
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
			accept: "application/json"
		},
		body: JSON.stringify(body)
	}
	let startBody = {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		content_type: "start",
		owner: route.cookies.read("account_id"),
		showName: decodeURI(route.cookies.read("user_name_show")),
		operation_type: "get_status"
	}
	let startOptions = {
		method: "POST",
		headers: {
			Authorization: accessToken,
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
			accept: "application/json"
		},
		body: JSON.stringify(startBody)
	}
	//数量
	const nums = fetch(url, options).then((res) => res.json())
	//启动资源
	const start = fetch(startUrl, startOptions).then((res) => res.json())
	promiseList.push(projectDetail, nums, start)
	let results = await Promise.all(promiseList)
	let projectDetailData = results[0]
	let numsArr = results[1]
	let startResults = results[2]
	console.log("判断是否启动：", startResults)
	if (startResults.data.resource_status === "starting") {
		route.loadingService.loading.style.display = "flex"
		route.loadingService.loading.style["z-index"] = 2
		route.noticeService.defineAction({
			type: "iot",
			id: "resource_create",
			projectId: projectDetailData.id,
			ownerId: "*",
			callBack: callback
		})
	} else if (startResults.data.resource_status === "started") {
		showStartButton = false
	} else {
		showStartButton = true
	}
	function callback(param, payload) {
		console.log(payload)
		route.loadingService.loading.style.display = "none"
		const { status } = JSON.parse(payload)
		if (status == "succeed") {
			alert("资源启动成功！")
			showStartButton = false
		} else if (status == "failed") {
			alert("资源启动异常，请联系管理员。")
			showStartButton = true
		}
	}
	numShow.dataset = numsArr.dataset ? numsArr.dataset : 0
	numShow.flow = numsArr.dagconf ? numsArr.dagconf : 0
	numShow.analysis = numsArr.analysis ? numsArr.length : 0
	numShow.model = numsArr.models ? numsArr.length : 0
	numShow.notebook = numsArr.notebooks ? numsArr.length : 0
	numShow.dashBoard = numsArr.dashBoards ? numsArr.length : 0
	numShow.wiki = numsArr.wiki ? numsArr.length : 0
	return {
		projectDetail: projectDetailData,
		projectName: projectDetailData.name,
		projectId: projectDetailData.id,
		numShow: numShow,
		showStartButton: showStartButton,
		_isVue: true
	}
}
