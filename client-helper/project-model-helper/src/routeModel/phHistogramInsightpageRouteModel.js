import { hostName } from "../config/envConfig"

export async function phHistogramInsightpageRouteModel(route, parseParams) {
	let debugToken =
		"4e0feeb1d5de7e5a3f4e17b0bfb110bef8b17f1d102e747b80843fe12adf62ee"
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
