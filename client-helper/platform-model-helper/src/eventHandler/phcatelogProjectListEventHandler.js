// eslint-disable-next-line no-unused-vars
export async function phcatelogProjectListEventHandler(e, route) {
	const param = e.detail[0].args.param
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			window.open(`https://deploy.pharbers.com/projects/${param.pid}`)
			break
		default:
			console.log("submit event to parent")
	}
}
