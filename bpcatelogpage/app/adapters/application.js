import DS from "ember-data"
import { computed } from "@ember/object"
import { dasherize } from "@ember/string"
import { pluralize } from "ember-inflector"
import { inject as service } from "@ember/service"
import ENV from "../config/environment"
import PhSigV4AWSClientFactory from "../lib/PhSigV4AWSClientFactory"
import PhSigV4ClientUtils from "../lib/PhSigV4ClientUtils"
import PhUrlTemplate from "../lib/PhUrlTemplate"

export default DS.JSONAPIAdapter.extend( {
	namespace: ENV.namespace,
	host: "http://general.pharbers.com",
	serviceHost: ENV.host,
	scope: "APP/CHC",
	cookies: service(),
	oauthRequest: false,
	curMethod: "GET",
	pathForType( type ) {
		let newType = pluralize( dasherize( type ) )

		return newType
	},
	sortQueryParams( params ) {
		this.set( "queryParamsAWS", params )
	},
	buildURL: function( modelName, id, snapshot, requestType, query ) {
		const requestMethod = {
			"query": "GET",
			"findRecord": "GET",
			"createRecord": "POST",
			"updateRecord": "PATCH",
			"deleteRecord": "DELETE"
		}
		let url = this._super( ...arguments ) // url: http://general.pharbers.com:4200/v0/assets
		let curType = url.split( "/" ).splice( 4,2 ) // ["activities" , ... ]
		let curPath = curType.join( "/" )
		let newUrl = `/${ENV.namespace}/entry/${curPath}` // newUrl: "/v0/entry/assets"

		this.set( "curMethod", requestMethod[requestType] )
		this.set( "modelName", modelName )
		this.set( "requestURL", curType.join( "/" ) )

		// login components
		if ( modelName === "component" ) {
			newUrl = `/${ENV.namespace}/common/${curPath}`
		}
		//account component
		if(modelName === "account" || modelName === "role" || modelName === "scope") {
			newUrl = `/${ENV.namespace}/phcommon/${curPath}`
		}
		if(modelName === "partner") {
			newUrl = `/${ENV.namespace}/phcommon/${curPath}`
			if(query && Object.keys(query).indexOf("filter[pid]") !== -1){
				newUrl = `/${ENV.namespace}/reports/${curPath}`
			}
		}
		if(modelName === "template") {
			newUrl = `/${ENV.namespace}/reports/${curPath}`
		}

		if(modelName === "trigger") {
			newUrl = `/${ENV.namespace}/phproject/${curPath}`
		}

		if ( query && Object.keys( query ).length ) {
			let queryString = ""
			const queryParamsArr = Object.keys( query )

			this.set( "queryParamsArr", queryParamsArr ) // 处理是因为object没有顺序，参数位置不同，可能导致token错误
			for ( let index = 0; index < queryParamsArr.length; index++ ) {
				const element = queryParamsArr[index]
				let queryValue = query[element]

				// 处理ids的数组转换为字符串
				if ( element === "ids[]" && query[element] instanceof Array ) {
					const ids = query[element]
					const idsArr = ids.sort()
					let idsStr = ""

					idsArr.forEach( ele => {
						idsStr += ele + "&ids[]="
					} )
					idsStr = idsStr.substr( 0, idsStr.length - 7 )
					queryValue = idsStr
				}
				queryString += `${element}=${queryValue}&`

			}
			queryString = queryString.substr( 0, queryString.length - 1 )
			newUrl += "?" + encodeURI( queryString )
		} else {
			this.set( "queryParamsAWS", {} )
		}
		this.set( "newUrl", newUrl )
		return "https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn" + newUrl
	},
	attributesToDeal( data ){
		// data is object
		const keys = Object.keys( data ).sort()
		const obj = {}

		keys.forEach( k => {
			const key = dasherize( k )

			obj[key] = data[k]
		} )
		return obj
	},
	headers: computed( "cookies", "requestURL", "newUrl", "curMethod","queryParamsAWS", "oauthRequest",function() {
		const curMethod = this.get( "curMethod" )
		const factory = PhSigV4AWSClientFactory
		const utils = PhSigV4ClientUtils
		const uriTemp = PhUrlTemplate
		const config = {
			accessKey: '',
			secretKey: '',
			sessionToken: '',
			region: 'cn-northwest-1',
			sessionToken: "",
			apiKey: undefined,
			defaultContentType: "application/vnd.api+json",
			defaultAcceptType: "application/vnd.api+json"
		}
		// extract endpoint and path from url
		const invokeUrl = "https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn/v0"
		const endpoint = /(^https?:\/\/[^\/]+)/g.exec( invokeUrl )[1]
		const pathComponent = invokeUrl.substring( endpoint.length )
		const sigV4ClientConfig = {
			accessKey: config.accessKey,
			secretKey: config.secretKey,
			sessionToken: config.sessionToken,
			serviceName: "execute-api",
			region: config.region,
			endpoint: endpoint,
			defaultContentType: config.defaultContentType,
			defaultAcceptType: config.defaultAcceptType
		}
		const client = factory.PhSigV4AWSClientFactory.newClient( sigV4ClientConfig )

		if(this.get("avatarToken")) {
			this.set('avatarToken', 0)
			const req = {
				verb: "GET",
				path: "",
				body: {}
			}
			const request = client.makeRequest(req)
			return request.headers
		}
		// if( this.get('ingestData') || this.get('ingestGetData')) {
		// 	let req = {
		// 		verb: "POST",
		// 		path: "/v0/phproject/trigger",
		// 		body: this.get("ingestDataQuery")
		// 	}
		// 	if(this.get('ingestGetData')) {
		// 		req.verb = "GET",
		// 		req.body = {}
		// 	}
		// 	this.set('ingestData', 0)
		// 	this.set('ingestGetData', 0)
		// 	const request = client.makeRequest(req)
		// 	return request.headers
		// }
		// 请求login hbs的时候使用
		if ( this.get( "auth" ) && this.get( "oauthRequestComponentQuery" ) ) {
			this.set( "auth", 0 )
			let req = {
				verb: "get".toUpperCase(),
				path: "/v0/common/components/OXE67oMY7RuFJ_rmBUzL",
				headers: { Accept: "text/html" },
				queryParams: this.get( "oauthRequestComponentQuery" ),
				body: {}
			}

			const request = client.makeRequest( req )

			return request.headers
		}

		// 请求token时使用
		if ( this.get( "token" ) && this.get( "oauthRequestTokenQuery" ) ) {
			this.set( "token", 0 )
			const req = {
				verb: "GET",
				path: "/v0/oauth/token",
				queryParams: this.get( "oauthRequestTokenQuery" ),
				body: {}
			}

			const request = client.makeRequest( req )

			return request.headers
		}

		// get user info
		if ( this.get( "getUserInfo" )) {
			this.set( "getUserInfo", 0 )
			const req = {
				verb: "GET",
				path: "/v0/phcommon/accounts",
				// headers: this.get( "gerUserInfoQuery" ),
				body: {}
			}
			let request = client.makeRequest( req )
			request.headers.Authorization = this.get( 'userAuthorization' )
			return request.headers
		}

		if( this.get( "getUser" )) {
			this.get('getUser', 0)
			const req = {
				verb: 'PATCH',
				path: "/v0/phcommon/accounts",
				body: {}
			}
			let request = client.makeRequest(req)
			request.headers.Authorization = this.get( 'userAuthorization')
			return request.headers
		}

		if( this.get( "partner")) {
			this.get("partner", 0)
			const req = {
				verb: "GET",
				path: "/v0/phcommon/partners",
				body: {}
			}
			let request = client.makeRequest( req )
			request.headers.Authorization = this.get( 'userAuthorization' )
			return request.headers
		}

		// power bi token
		if ( this.get( "pbiToken" ) && this.get( "powerBITokenQuery" ) ) {
			this.set( "pbiToken", 0 )
			const req = {
				verb: "GET",
				path: "/v0/pbi/token",
				queryParams: this.get( "powerBITokenQuery" ),
				body: {}
			}

			const request = client.makeRequest( req )

			return request.headers
		}

		const requestURL = this.get( "requestURL" ).split( "/" ) // ["accounts", "5d725825bd33a54c8213a5ae", "relationship"]
		const curType = requestURL[0]
		const curId = requestURL.length >= 2 ? requestURL[1] : undefined
		const curRelationship = requestURL.length >= 3 ? requestURL[2] : undefined
		const pathParams = {
			type: curType,
			id: curId,
			relationship: curRelationship
		}
		const pathUrlArr = Object.keys( pathParams ).filter( it => pathParams[it] ) // value 为空，则去掉对应的key
		const queryParamsAWS = this.get( "queryParamsAWS" )
		const params = {
			"type": curType,
			"Accept": "application/vnd.api+json",
			"Content-Type": "application/vnd.api+json"
		}
		let awsPath = "/entry/{type}"
		let paramsArr = []

		// 对请求body进行处理
		const reqBody = this.get( "reqBody" ) ? this.get( "reqBody" ) : {}
		const attrs = this.attributesToDeal( reqBody )
		const bodyData = {
			"POST": {
				"data": {
					"attributes": attrs,
					"type": curType
				}
			},
			"PATCH": {
				"data": {
					"id": pathParams.id,
					"attributes": attrs,
					"type": curType
				}
			},
			"GET": {},
			"DELETE": {}
		}

		// 路径处理
		if ( pathParams.id ) {
			awsPath += "/{id}"
			params["id"] = pathParams.id

			if ( pathParams.relationship ) {
				awsPath += "/{relationship}"
				pathParams["relationship"] = pathParams.relationship
			}
		}

		// query params 转换
		if ( Object.keys( queryParamsAWS ).length ) {
			let queryParamsArr = this.get( "queryParamsArr" )

			queryParamsArr.forEach( element => {
				let encodeURIEle = encodeURI( element )
				let queryValue = queryParamsAWS[element]

				// 将 query 对象中的 ids[] 数组 转换为字符串
				if ( element === "ids[]" ) {
					const ids = queryParamsAWS[element]
					const idsArr = ids.sort()
					let idsStr = ""

					idsArr.forEach( ele => {
						idsStr += ele + "&ids[]="
					} )
					idsStr = idsStr.substr( 0, idsStr.length - 7 )
					queryValue = idsStr
				}

				paramsArr.push( encodeURIEle )
				params[encodeURIEle] = queryValue
			} )
		}


		/**
		 * { verb: 'GET',
			path: '/v0/offweb/proposals',
			headers: { Accept: 'application/vnd.api+json' },
			queryParams: {},
			body: {}
			}
		 */
		let req = {
			verb: curMethod,
			path: pathComponent + uriTemp.PhUriTemplate( awsPath ).expand( utils.parseParametersToObject( params, pathUrlArr ) ),
			headers: utils.parseParametersToObject( params, ["Accept", "Content-Type"] ),
			queryParams: utils.parseParametersToObject( params, paramsArr ),
			body: bodyData[curMethod]
		}

		/**
		 * 	{   method: 'GET',
			url:
			'https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn/v0/offweb/proposals',
			headers:
			{ Accept: 'application/vnd.api+json',
				'x-amz-date': '20200605T073304Z',
				Authorization:
				'AWS4-HMAC-SHA256 Credential=AKIAWPBDTVEAJ6CCFVCP/20200605/cn-northwest-1/execute-api/aws4_request, SignedHeaders=accept;host;x-amz-date, Signature=1295d2ea428819bc40d6cd35a7dc0dca20d0ef335ccfda5e7e346b17223ae0d9',
				'Content-Type': 'application/vnd.api+json' },
			data: '',
			timeout: 30000
		}
		 */
		const request = client.makeRequest( req )


		// 登录后的token 读取access token
		return {
			"Accept": "application/vnd.api+json",
			"Content-Type": "application/vnd.api+json",
			"Authorization": this.cookies.read( "access_token" )
		}
		// return request.headers

	} )
} )

