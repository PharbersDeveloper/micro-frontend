import { hostName } from "../config/envConfig"

// eslint-disable-next-line no-unused-vars
export async function phAnalyzeDataListHomeRouteModel(route, parseParams) {
	let debugToken =
		"1a441cdc88503a4812aa48cb4586c2acd65c3117756ce8c5d0ea9afb767511d0"
	let numShow = {}
	let promiseList = []
	// project基本信息
	let projectDetail = route.store.findRecord(
		"project",
		parseParams.param.project_id,
		{ include: "resources" }
	)
	// 目前只有数据集和脚本的num
	const url = `${hostName}/phgetnumber`
	const accessToken = route.cookies.read("access_token") || debugToken
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

	//数量
	const nums = fetch(url, options).then((res) => res.json())
	promiseList.push(projectDetail, nums)
	let results = await Promise.all(promiseList)
	let projectDetailData = results[0]
	let resource = projectDetailData.belongsTo("resources").id()
	console.log(resource)
	let numsArr = results[1]
	numShow.dataset = numsArr.dataset ? numsArr.dataset : 0
	numShow.flow = numsArr.dagconf ? numsArr.dagconf : 0
	numShow.dashBoard = numsArr.dashboard ? numsArr.dashboard : 0
	numShow.analysis = numsArr.analysis ? numsArr.length : 0
	numShow.model = numsArr.models ? numsArr.length : 0
	numShow.notebook = numsArr.notebooks ? numsArr.length : 0
	numShow.wiki = numsArr.wiki ? numsArr.length : 0
	return {
		projectDetail: projectDetailData,
		projectName: projectDetailData.name,
		projectId: projectDetailData.id,
		resource: resource,
		numShow: numShow,
		_isVue: true
	}
}
