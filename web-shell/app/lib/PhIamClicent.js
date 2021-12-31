/**
 *  alfredyang@pharbers.com 2021.12.31
 */

import PhSigV4AWSClientFactory from "./PhSigV4AWSClientFactory"
import PhSigV4ClientUtils from "./PhSigV4ClientUtils"
import PhUrlTemplate from "./PhUrlTemplate"

function ComputeIamHeader(
	apiHost,
	invokeUrl,
	method,
	resource,
	body,
	queryParams,
	ak,
	sk,
	ct = "application/json",
	at = "application/json"
) {
	const factory = PhSigV4AWSClientFactory
	const utils = PhSigV4ClientUtils
	const uriTemp = PhUrlTemplate
	const endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1]
	const pathComponent = invokeUrl.substring(endpoint.length)
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

	// apiGateway.core.utils.assertParametersDefined(params, ['type', 'Accept'], ['body']);
	const requestURL = this.requestURL.split("/") // ["", "v0", "accounts", "5d725825bd33a54c8213a5ae"]
	// const curType = requestURL[2]
	const curType = requestURL[2]
	let urlArr = ["type"] // type id relationship
	let awsPath = "/" + resource + "/{type}"
	// 如果有id 和relationship 加上
	let paramsArr = []
	const params = {
		type: curType,
		Accept: at
	}

	let queryParamsAWS = queryParams

	if (requestURL.length >= 4) {
		urlArr.push("id")
		params.id = requestURL[3]
		awsPath += "/{id}"
		queryParamsAWS = {}
		// 需要修改
	}

	if (Object.keys(queryParamsAWS).length) {
		let queryParamsArr = Object.keys(queryParamsAWS)
		// console.log('queryParamsAWS',queryParamsAWS[queryParamsArr[0]])
		queryParamsArr.forEach((element) => {
			let encodeURIEle = encodeURI(element)

			paramsArr.push(encodeURIEle)
			params[encodeURIEle] = queryParamsAWS[element]
		})

		// Object.assign( params, queryParamsAWS )
	}

	let req = {
		verb: method.toUpperCase(),
		path:
			pathComponent +
			uriTemp
				.PhUriTemplate(awsPath)
				.expand(utils.parseParametersToObject(params, urlArr)),
		headers: utils.parseParametersToObject(params, ["Accept"]),
		queryParams: utils.parseParametersToObject(params, paramsArr),
		// queryParams: queryParamsAWS,
		body: {},
		host: apiHost
	}
	const request = client.makeRequest(req)
	return request.headers
}

export { ComputeIamHeader }
