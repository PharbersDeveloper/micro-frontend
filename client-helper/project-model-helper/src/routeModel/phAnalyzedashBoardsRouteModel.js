import { hostName } from "../config/envConfig"

// eslint-disable-next-line no-unused-vars
export async function phAnalyzeDashboardsRouteModel(route, parseParams) {
	const debugToken =
		"1a441cdc88503a4812aa48cb4586c2acd65c3117756ce8c5d0ea9afb767511d0"
	route.store.unloadAll("dashboard")
	const projectId = parseParams.query.projectId
	const projectName = parseParams.query.projectName

	const url = `${hostName}/phdydatasource/query`
	const accessToken = route.cookies.read("access_token") || debugToken

	const body = {
		table: "dashboard",
		conditions: {
			projectId: ["=", projectId]
		},
		limit: 100,
		start_key: ""
	}

	const options = {
		method: "POST",
		headers: {
			Authorization: accessToken,
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
			accept: "application/json"
		},
		body: JSON.stringify(body)
	}

	let that = route
	const query = await fetch(url, options)
		.then((response) => response.json())
		.then((response) => {
			that.store.pushPayload(response)
			return new Promise((resolve) => {
				resolve(that.store.peekAll("dashboard"))
			})
		})

	const dashboards = query.filter((it) => it)

	let tags = new Set()
	dashboards.forEach((iter) => {
		if (typeof iter.label == "string") {
			iter.label = JSON.parse(iter.label)
			iter.label.map((it) => {
				tags.add(it)
			})
		}
	})
	const tagsArray = Array.from(tags)

	return {
		projectName: projectName,
		projectId: projectId,
		dashboards: dashboards,
		tagsArray: tagsArray,
		_isVue: true
	}
}
