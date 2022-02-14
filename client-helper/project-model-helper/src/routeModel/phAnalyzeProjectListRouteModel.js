// eslint-disable-next-line no-unused-vars
export async function phAnalyzeProjectListRouteModel(route, parseParams) {
	let resources = await route.store.query("resource", {
		"filter[tenant]": route.cookies.read("company_id"),
		"filter[resourceType]": "project",
		include: "accounts"
	})

	//菜单栏个人信息
	let name_show, company_name_show
	if (route.cookies.read("account_id")) {
		name_show = decodeURI(route.cookies.read("user_name_show"))
		company_name_show = decodeURI(route.cookies.read("company_name_show"))
	}
	//去掉loading
	this.afterModel = function () {
		if (this.loadingService.afterLoading) {
			this.loadingService.loading.style.display = "none"
		}
	}
	let resourcesList = resources.filter((it) => it)
	return {
		resources: resourcesList,
		projects: resourcesList[0].includes,
		name_show: name_show,
		company_name_show: company_name_show,
		_isVue: true
	}
}
