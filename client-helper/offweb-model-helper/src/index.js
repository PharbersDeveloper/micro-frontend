// eslint-disable-next-line no-unused-vars
async function pharbersHomeRouteModel(route) {
	let lang = localStorage.getItem("lang")
	if (lang === "中文") {
		lang = 1
	} else {
		lang = 0
	}
	const activityList = route.store.query("activity", {
		sort: "-startDate",
		"page[limit]": 3,
		"page[offset]": 0,
		"filter[language]": lang,
		include: "logo,gallery"
	})

	const reportsList = route.store.query("report", {
		sort: "-date",
		"page[limit]": 1,
		"filter[language]": lang,
		include: "cover"
	})

	this.afterModel = function () {
		if (this.loadingService.afterLoading) {
			this.loadingService.loading.style.display = "none"
		}
	}
	// eslint-disable-next-line no-undef
	await Promise.all([activityList, reportsList])
	return {
		activities: activityList.then((_) =>
			_.filter((it) => it.language === lang)
		),
		reports: reportsList.then((_) => _.filter((it) => it.language === lang))
	}
}

// eslint-disable-next-line no-undef
// module.exports = {
// 	pharbersHomeRouteModel: pharbersHomeRouteModel
// }
export { pharbersHomeRouteModel }
