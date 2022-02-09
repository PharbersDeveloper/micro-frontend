// eslint-disable-next-line no-unused-vars
export async function phcatelogDataListHomeRouteModel(route, parseParams) {
	let debugToken = "bf6e5cb27179218c0b00efe11e25ddd9acecc2c029902ccced92b2ff3b853def"
	route.store.unloadAll("dataset");
	const url = "https://apiv2.pharbers.com/phdydatasource/scan"
	const accessToken = route.cookies.read( "access_token" ) || debugToken
	let body = {
		"table": "dataset",
		"conditions": {
			"projectId":  ["=", parseParams.params.projectId]
		},
		"limit": 100,
		"start_key": ""
	}

	let options = {
		method: "POST",
		headers: {
			"Authorization": accessToken,
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			"accept": "application/json"
		},
		body: JSON.stringify(body)
	}
	const ds = fetch(url, options)
	let that = this
	let tmp = await ds.then((response) => response.json()).then((response) => {
		this.store.pushPayload(response)
		return new Promise((resolve, reject) => {
			resolve(that.store.peekAll("dataset"))
		})
	})

	this.afterModel = function() {
		if(this.loadingService.afterLoading){
			this.loadingService.loading.style.display = 'none'
		}
	}
	return RSVP.hash( {
		projectName: params.projectName,
		projectId: params.projectId,
		dss: tmp.filter(it => it),
		tagsArray: [],
		_isVue: true
	} )
}
