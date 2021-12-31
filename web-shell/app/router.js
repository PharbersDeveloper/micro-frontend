import EmberRouter from "@ember/routing/router"
import config from "web-shell/config/environment"

export default class Router extends EmberRouter {
	location = config.locationType
	rootURL = config.rootURL
}

Router.map(async function () {
	// let scriptOptions = {
	// 	method: "GET",
	// 	headers: {
	// 		Authorization: config.APP.debugToken,
	// 		Accept: "application/vnd.api+json",
	// 		"Content-Type": "application/vnd.api+json",
	// 	}
	// }
	// const result = await fetch("https://apiv2.pharbers.com/phplatform/projects", scriptOptions).then(res => res.json())
	// console.log(result)
	this.route("shell", { path: "/" })
})
