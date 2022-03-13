export async function phHistogramSlidespageRouteModel(route, parseParams) {
	let debugToken =
		"eada79ed5c7cc86b2008345886689f47db798c29a53c550753d0fd60bc729a06"
	route.store.unloadAll("dashboard")
	route.store.unloadAll("slide")
	const url = "https://apiv2.pharbers.com/phdydatasource/query"
	const accessToken = route.cookies.read("access_token") || debugToken
	const projectId = parseParams.query.projectId
	const projectName = parseParams.query.projectName
	const dashboardId = parseParams.query.dashboardId
	let body = {
		table: "dashboard",
		conditions: {
			projectId: ["=", projectId],
			dashboardId: ["=", dashboardId]
		},
		limit: 100,
		start_key: ""
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
	// const ds = fetch(url, options)
	let that = route
	const dashboardQuery = await fetch(url, options)
		.then((response) => response.json())
		.then((response) => {
			that.store.pushPayload(response)
			return new Promise((resolve) => {
				resolve(that.store.peekAll("dashboard"))
			})
		})

	const dashboard = dashboardQuery.filter((it) => it)[0]

	let body_slide = {
		table: "slide",
		conditions: {
			pdId: ["=", projectId + "_" + dashboardId]
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
	const slides = slidesQuery.filter((it) => it)
	return {
		projectName: projectName,
		projectId: projectId,
		dashboard: dashboard,
		slides: slides,
		_isVue: true
	}
}
