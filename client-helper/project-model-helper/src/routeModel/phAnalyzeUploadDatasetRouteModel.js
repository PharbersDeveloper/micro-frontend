// eslint-disable-next-line no-unused-vars
export async function phAnalyzeUploadDatasetRouteModel(route, parseParams) {
	let debugToken =
		"eada79ed5c7cc86b2008345886689f47db798c29a53c550753d0fd60bc729a06"
	route.store.unloadAll("dataset")
	const url = "https://apiv2.pharbers.com/phdydatasource/scan"
	const accessToken = route.cookies.read("access_token") || debugToken
	let body = {
		table: "dataset",
		conditions: {
			projectId: ["=", parseParams.query.projectId]
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
	const ds = fetch(url, options)
	let that = route
	let tmp = await ds
		.then((response) => response.json())
		.then((response) => {
			that.store.pushPayload(response)
			return new Promise((resolve) => {
				resolve(that.store.peekAll("dataset"))
			})
		})

	let dss = tmp.filter((it) => it)
	let tags = new Set()
	dss.forEach((iter) => {
		if (typeof iter.label == "string") {
			iter.label = JSON.parse(iter.label)
			iter.label.map((it) => {
				tags.add(it)
			})
		}
	})
	let tagsArray = Array.from(tags)
	return {
		projectName: parseParams.query.projectName,
		projectId: parseParams.query.projectId,
		dss: dss,
		tagsArray: tagsArray,
		_isVue: true
	}
}
