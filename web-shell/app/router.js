import EmberRouter from "@ember/routing/router"
import config from "web-shell/config/environment"
import { ComputeJSONAPIIamHeader } from "web-shell/lib/PhIamClicent"
import ENV from "web-shell/config/environment"

export default class Router extends EmberRouter {
	location = config.locationType
	rootURL = config.rootURL
}

Router.map(async function () {
	let scriptOptions = {
		method: "GET",
		headers: ComputeJSONAPIIamHeader(
			ENV.APP.apiHost,
			"https://apiv2.pharbers.com/phtemplate/projects",
			{},
			{},
			ENV.APP.AWS_ACCESS_KEY,
			ENV.APP.AWS_SECRET_KEY
		)
	}
	const result = await fetch("https://apiv2.pharbers.com/phtemplate/projects", scriptOptions).then(res => res.json())
	console.log(result)
	this.route("shell", { path: "/" })
})
