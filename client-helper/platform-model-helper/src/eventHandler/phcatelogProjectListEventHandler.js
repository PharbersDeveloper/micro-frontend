// eslint-disable-next-line no-unused-vars
export async function pharbersAboutUsEventHandler(e, route) {
	console.log("component", e)
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			if (e.detail[0].args.param.index != undefined) {
				route.router.transitionTo(
					"shell",
					`${e.detail[0].args.param.name}/${e.detail[0].args.param.index}`
				)
			} else {
				console.log(
					" e.detail[0].args.param.name",
					e.detail[0].args.param.name
				)
				route.router.transitionTo("shell", e.detail[0].args.param)
			}
			break
		default:
			console.log("submit event to parent")
	}
}
