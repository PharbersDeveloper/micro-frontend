import { hostName } from "../config/envConfig"

export async function phHistogramInsightpageRouteModel(route, parseParams) {
	let debugToken =
		"548333c2afa7b2a966c4141a7c8c60e7d83d6523599bf48c4069487fffe58432"
	route.store.unloadAll("dashboard")
	route.store.unloadAll("slide")
	const projectId = parseParams.query.projectId
	const projectName = parseParams.query.projectName
	const dashboardId = parseParams.query.dashboardId
	const slideId = parseParams.query.slideId
	const contentId = parseParams.query.contentId

	const url = `${hostName}/phdydatasource/query`
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
		dashboardId: dashboardId,
		slide: slide,
		contentId: contentId,
		_isVue: true
	}
}
