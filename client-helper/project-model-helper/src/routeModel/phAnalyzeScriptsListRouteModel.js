export async function phAnalyzeScriptsListRouteModel(route, parseParams) {
	route.store.unloadAll("dagConf")
	route.store.unloadAll("dataset")
	const url = "https://apiv2.pharbers.com/phdydatasource/scan"
	const accessToken = route.cookies.read("access_token")
	let body = {
		table: "dagconf",
		conditions: {
			projectId: ["=", parseParams.query.projectId]
			// "sortVersion": ["begins_with", "developer_"]
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
	const dc = await fetch(url, options)
		.then((response) => response.json())
		.then((response) => {
			route.store.pushPayload(response)
			return new Promise((resolve) => {
				resolve(route.store.peekAll("dagConf"))
			})
		})

	let body1 = {
		table: "dataset",
		conditions: {
			projectId: ["=", parseParams.query.projectId]
			// "sortVersion": ["begins_with", "developer_"]
		},
		limit: 100,
		start_key: {}
	}

	let options1 = {
		method: "POST",
		headers: {
			Authorization: accessToken,
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
			accept: "application/json"
		},
		body: JSON.stringify(body1)
	}
	const ds = await fetch(url, options1)
		.then((response) => response.json())
		.then((response) => {
			route.store.pushPayload(response)
			return new Promise((resolve) => {
				resolve(route.store.peekAll("dataset"))
			})
		})

	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		dcs: dc.filter((it) => it),
		dss: ds.filter((it) => it),
		tagsArray: [],
		_isVue: true
	}
}
