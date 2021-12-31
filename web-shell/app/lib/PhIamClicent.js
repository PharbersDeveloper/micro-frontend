/**
 *  alfredyang@pharbers.com 2021.12.31
 */

import PhSigV4AWSClientFactory from "./PhSigV4AWSClientFactory"
import PhSigV4ClientUtils from "./PhSigV4ClientUtils"
import PhUrlTemplate from "./PhUrlTemplate"

function ComputeJSONAPIIamHeader(
	apiHost,
	path,
	body,
	query,
	ak,
	sk,
	ct = "application/vnd.api+json",
	at = "application/vnd.api+json",
	method = "GET"
) {
	const factory = PhSigV4AWSClientFactory
	const utils = PhSigV4ClientUtils
	const uriTemp = PhUrlTemplate
	const invokeUrl = 'https://apiv2.pharbers.com';
	const endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
	// const endpoint = /(^https?:\/\/[^\/]+)/g.exec(path)[1]
	const pathComponent = ""
	let queryURL = path
	const queryParamIndex = queryURL.lastIndexOf("?")
	if (queryParamIndex > -1) {
		queryURL = queryURL.substring(0, queryParamIndex)
	}
	const sigV4ClientConfig = {
		accessKey: ak,
		secretKey: sk,
		sessionToken: "",
		serviceName: "execute-api",
		region: "cn-northwest-1",
		endpoint: endpoint,
		defaultContentType: ct,
		defaultAcceptType: at
	}
	const client = factory.PhSigV4AWSClientFactory.newClient(sigV4ClientConfig)

	let req = {
		verb: 'get'.toUpperCase(),
		path: "/phtemplate/projects",
		queryParams: {},
		body: {}
	};
	const request = client.makeRequest(req);
	return request.headers;

	// let req = {
	// 	verb: method.toUpperCase(),
	// 	path: queryURL,
	// 	headers: utils.parseParametersToObject(headers, ["Accept"]),
	// 	queryParams: query,
	// 	body: body,
	// 	host: apiHost
	// }
	// const request = client.makeRequest(req)
	// return request.headers
}

export { ComputeJSONAPIIamHeader }
