// eslint-disable-next-line no-unused-vars
export async function phAnalyzeUploadDatasetRouteModel(route, parseParams) {
	let debugToken =
		"55f195f5335a89acccaa713c3f94b9f100cd9aad8217b00e98790e23e62bd89b"
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
