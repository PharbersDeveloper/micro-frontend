// eslint-disable-next-line no-unused-vars
export async function phAnalyzeDataListHomeRouteModel(route, parseParams) {
	let debugToken =
		"eada79ed5c7cc86b2008345886689f47db798c29a53c550753d0fd60bc729a06"
	let numShow = {}
	let promiseList = []
	// project基本信息
	let projectDetail = route.store.findRecord(
		"project",
		parseParams.param.project_id
	)
	// 目前只有数据集和脚本的num
	const url = "https://apiv2.pharbers.com/phgetnumber"
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
	let numsArr = results[1]
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
		_isVue: true
	}
}
