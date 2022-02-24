// eslint-disable-next-line no-unused-vars
export async function phcatelogProjectListRouteModel(route, parseParams) {
	let resources = route.store.query("resource", {
		"filter[tenant]": route.cookies.read("company_id"),
		// "filter[resourceType]": "project",
		"filter[resourceType]": "standalone",
		include: "accounts"
	})
	let resourcesTypes = route.store.query("resource", {
		"filter[tenant]": route.cookies.read("company_id")
	})
	let results = await Promise.all([resources, resourcesTypes])
	//菜单栏个人信息
	let name_show, company_name_show
	if (route.cookies.read("account_id")) {
		name_show = decodeURI(route.cookies.read("user_name_show"))
		company_name_show = decodeURI(route.cookies.read("company_name_show"))
	}
	let resourcesList = results[0].filter((it) => it)
	return {
		resources: resourcesList,
		projects: resourcesList[0].includes,
		resourcesTypesList: results[1].filter((it) => it),
		name_show: name_show,
		company_name_show: company_name_show,
		_isVue: true
	}
}
