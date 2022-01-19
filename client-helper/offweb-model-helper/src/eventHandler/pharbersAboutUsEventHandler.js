// eslint-disable-next-line no-unused-vars
export async function pharbersAboutUsEventHandler(e, route) {
	console.log("component", e)
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			route.router.transitionTo("shell", e.detail[0].args.param.name)
			break
		default:
			console.log("submit event to parent")
	}
}
