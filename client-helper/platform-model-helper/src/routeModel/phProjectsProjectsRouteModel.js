// eslint-disable-next-line no-unused-vars
export async function phProjectsProjectsRouteModel(route, parseParams) {
    // let resources = route.store.query("resource", {
    //     "filter[tenant]": route.cookies.read("company_id"),
    //     "filter[resourceType]": "standalone",
    //     include: "accounts"
    // })
    let projects = route.store.query("project", {
        "filter[owner]": route.cookies.read("company_id")
    })
    // let resourcesTypes = route.store.query("resource", {
    //     "filter[tenant]": route.cookies.read("company_id"),
    //     sort: "created"
    // })
    let results = await Promise.all([projects])
    //菜单栏个人信息
    let name_show, company_name_show, tenantId
    if (route.cookies.read("account_id")) {
        name_show = decodeURI(route.cookies.read("user_name_show"))
        company_name_show = decodeURI(route.cookies.read("company_name_show"))
        tenantId = route.cookies.read("company_id")
    }
    // let resourcesList = results[0].filter((it) => it)
    return {
        projects: results[0].filter((it) => it),
        // resourcesTypesList: results[1].filter((it) => it),
        name_show: name_show,
        company_name_show: company_name_show,
        tenantId: tenantId,
        _isVue: true
    }
}
