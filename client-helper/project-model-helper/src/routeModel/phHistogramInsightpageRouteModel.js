export async function phHistogramInsightpageRouteModel(route, parseParams) {
	let debugToken =
		"eada79ed5c7cc86b2008345886689f47db798c29a53c550753d0fd60bc729a06"
	route.store.unloadAll("dashboard")
	route.store.unloadAll("slide")
	const projectId = parseParams.projectId || "1"
	const projectName = parseParams.projectName || "alfred test"
	const dashboardId = parseParams.dashboardId || "1"
	const slideId = parseParams.slideId || "1"
	const contentId = parseParams.contentId || "0"

	const url = "https://apiv2.pharbers.com/phdydatasource/query"
	const accessToken = route.cookies.read("access_token") || debugToken

	let that = route
	let body_slide = {
		table: "slide",
		conditions: {
			pdId: ["=", projectId + "_" + dashboardId],
			slideId: ["=", slideId]
		},
		limit: 100,
		start_key: ""
	}

	let options_slide = {
		method: "POST",
		headers: {
			Authorization: accessToken,
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
			accept: "application/json"
		},
		body: JSON.stringify(body_slide)
	}

	const slidesQuery = await fetch(url, options_slide)
		.then((response) => response.json())
		.then((response) => {
			that.store.pushPayload(response)
			return new Promise((resolve) => {
				resolve(that.store.peekAll("slide"))
			})
		})
	const slide = slidesQuery.filter((it) => it)[0]
	return {
		projectName: projectName,
		projectId: projectId,
		slide: slide,
		contentId: contentId,
		_isVue: true
	}
}
