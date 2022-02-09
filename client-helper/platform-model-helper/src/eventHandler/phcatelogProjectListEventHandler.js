// eslint-disable-next-line no-unused-vars
export async function phcatelogProjectListEventHandler(e, route) {
	console.log("component", e)
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			route.router.transitionTo(`/projects/` + e.detail[0].args.param.pid)
			break
		default:
			console.log("submit event to parent")
	}
}
