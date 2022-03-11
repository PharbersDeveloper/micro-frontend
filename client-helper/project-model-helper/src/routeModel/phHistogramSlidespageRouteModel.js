export async function phHistogramSlidespageRouteModel(route, parseParams) {
	let debugToken =
		"ff9765423e02ae501c5080572cf17ae4114169a0805edf958d5262f08ffd8df4"
	route.store.unloadAll("dashboard")
	route.store.unloadAll("slide")
	const url = "https://apiv2.pharbers.com/phdydatasource/query"
	const accessToken = route.cookies.read("access_token") || debugToken
	const projectId = parseParams.projectId || "1"
	const projectName = parseParams.projectName || "alfred test"
	let body = {
		table: "dashboard",
		conditions: {
			projectId: ["=", "1"],
			dashboardId: ["=", "1"]
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
			pdId: ["=", "1_1"]
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
