// eslint-disable-next-line no-unused-vars
export async function phcatelogProjectListEventHandler(e, route) {
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			window.open("https://deploy.pharbers.com/projects/JfSmQBYUpyb4jsei")

			break
		default:
			console.log("submit event to parent")
	}
}
