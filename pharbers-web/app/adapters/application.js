// eslint-disable-next-line ember/use-ember-data-rfc-395-imports
import { computed } from "@ember/object"
import { inject as service } from "@ember/service"
import ENV from "../config/environment"
import PhSigV4AWSClientFactory from "../helpers/PhSigV4AWSClientFactory"
import PhSigV4ClientUtils from "../helpers/PhSigV4ClientUtils"
import PhUrlTemplate from "../helpers/PhUrlTemplate"
import JSONAPIAdapter from "@ember-data/adapter/json-api"

// eslint-disable-next-line ember/no-classic-classes
export default JSONAPIAdapter.extend({
  cookies: service(),
  oauthRequest: false,
  // host: 'http://www.pharbers.com',
  namespace: ENV.namespace, // 根据后端发布版本修改命名空间, 生产环境用这个，nginx 做了转发
  sortQueryParams(params) {
    this.set("queryParamsAWS", params)
  },
  buildURL: function (modelName, id, snapshot, requestType, query) {
    this.set("modelName", modelName)
    let url = this._super(...arguments)
    const curType = url.split("/").splice(2, 2) // ["activities" , ... ]
    this.set("modelName", modelName)
    if (modelName === "account" || modelName === "applyuser") {
      this.toggleProperty("oauthRequest")
      return "http://oauth.pharbers.com/" + url
    }
    if (modelName === "cooperation") {
      curType[0] = "cooperation"
      url = url.split("/")
      url[2] = "cooperation"
      url = url.join("/")
    }
    this.set("requestURL", url)
    const curPath = curType.join("/")
    let newUrl = `/${ENV.namespace}/offweb/${curPath}`
    if (query && Object.keys(query).length) {
      let queryString = ""
      const queryParamsArr = Object.keys(query)

      this.set("queryParamsArr", queryParamsArr) // 放进来是因为object没有顺序，参数位置不同，可能导致token错误
      if (queryParamsArr == "ids[]") {
        for (
          let index = 0;
          index < query[queryParamsArr[0]].length;
          index++
        ) {
          const element = queryParamsArr[0]
          // console.log('element',element)
          if (index === 0) {
            // console.log('query[element][0]',query[element][index])
            queryString += `${element}=${query[element][index]}`
            // console.log(queryString)
          } else {
            queryString += `&${element}=${query[element][index]}`
          }
        }
        // queryString = `ids[]=AFxTm_-JK5HX9_Gzu-BS&ids[]=AFxTm_-JK5HX9_Gzu-BS`
      } else {
        for (let index = 0; index < queryParamsArr.length; index++) {
          const element = queryParamsArr[index]
          if (index === 0) {
            queryString += `${element}=${query[element]}`
          } else {
            queryString += `&${element}=${query[element]}`
          }
        }
      }

      newUrl += "?" + encodeURI(queryString)
    }
    this.set("newUrl", newUrl)
    // if(modelName === "zone")
    // 	return "https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn/v0/offweb/zones?ids%5B%5D=AFxTm_-JK5HX9_Gzu-BS&ids%5B%5D=yhwPulzG0J_2qMnN8PKo&ids%5B%5D=mgFzuAWjaZZcgEdmFD8C&ids%5B%5D=Jbg2caAVuJt6iIjqIQL6"
    return (
      "https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn" +
      newUrl
    )
  },

  headers: computed(
    "auth",
    "cookies",
    "newUrl",
    "oauthRequest",
    "oauthRequestComponentQuery",
    "oauthRequestTokenQuery",
    "queryParamsAWS",
    "queryParamsArr",
    "requestURL",
    "token",
    function () {
      const factory = PhSigV4AWSClientFactory
      const utils = PhSigV4ClientUtils
      const uriTemp = PhUrlTemplate
      const config = {
        accessKey: ENV.APP.AWS_ACCESS_KEY,
        secretKey: ENV.APP.AWS_SECRET_KEY,
        sessionToken: "",
        region: "cn-northwest-1",
        apiKey: undefined,
        defaultContentType: "application/vnd.api+json",
        defaultAcceptType: "application/vnd.api+json"
      }
      // extract endpoint and path from url
      const invokeUrl =
        "https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn/v0"
      const endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1]
      const pathComponent = invokeUrl.substring(endpoint.length)

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
      const client = factory.PhSigV4AWSClientFactory.newClient(
        sigV4ClientConfig
      )

      // 请求login hbs的时候使用
      if (this.auth && this.oauthRequestComponentQuery) {
        // eslint-disable-next-line ember/no-side-effects
        this.set("auth", 0)
        let req = {
          verb: "get".toUpperCase(),
          path: "/v0/common/components/OXE67oMY7RuFJ_rmBUzL",
          headers: { Accept: "text/html" },
          queryParams: this.oauthRequestComponentQuery,
          body: {}
        }

        // console.log("req", req)
        const request = client.makeRequest(req)
        // console.log("request", request)
        return request.headers
      }

      if (this.token && this.oauthRequestTokenQuery) {
        // eslint-disable-next-line ember/no-side-effects
        this.set("token", 0)
        let req = {
          verb: "get".toUpperCase(),
          path: "/v0/oauth/token",
          queryParams: this.oauthRequestTokenQuery,
          body: {}
        }

        // console.log("req", req)

        const request = client.makeRequest(req)
        // console.log("request", request)
        return request.headers
      }

      // apiGateway.core.utils.assertParametersDefined(params, ['type', 'Accept'], ['body']);
      const requestURL = this.requestURL.split("/") // ["", "v0", "accounts", "5d725825bd33a54c8213a5ae"]
      // const curType = requestURL[2]
      const curType = requestURL[2]
      // let curId = ""
      // let curRelationship = ""
      let paramsArr = []
      let urlArr = ["type"] // type id relationship
      let awsPath = "/offweb/{type}"
      // 如果有id 和relationship 加上
      const params = {
        type: curType,
        Accept: "application/vnd.api+json"
      }

      let queryParamsAWS = this.queryParamsAWS

      if (requestURL.length >= 4) {
        urlArr.push("id")
        params.id = requestURL[3]
        awsPath += "/{id}"
        queryParamsAWS = {}
        // 需要修改
      }

      if (Object.keys(queryParamsAWS).length) {
        let queryParamsArr = this.queryParamsArr
        // console.log('queryParamsAWS',queryParamsAWS[queryParamsArr[0]])
        if (queryParamsArr == "ids[]") {
          let encodeURIEle = encodeURI(queryParamsArr[0])
          paramsArr.push(encodeURIEle)
          let paramsString = ``
          let sortArr = queryParamsAWS[queryParamsArr[0]].sort()

          for (let i = 0; i < sortArr.length - 1; i++) {
            paramsString += `${sortArr[i]}&ids[]=`
          }
          params[encodeURIEle] =
            paramsString + sortArr[sortArr.length - 1]
        } else {
          queryParamsArr.forEach((element) => {
            let encodeURIEle = encodeURI(element)

            paramsArr.push(encodeURIEle)
            params[encodeURIEle] = queryParamsAWS[element]
          })
        }

        // Object.assign( params, queryParamsAWS )
      }

      // { verb: 'GET',
      // path: '/v0/offweb/proposals',
      // headers: { Accept: 'application/vnd.api+json' },
      // queryParams: {},
      // body: {}
      // }
      let req = {
        verb: "get".toUpperCase(),
        path:
          pathComponent +
          uriTemp
            .PhUriTemplate(awsPath)
            .expand(utils.parseParametersToObject(params, urlArr)),
        headers: utils.parseParametersToObject(params, ["Accept"]),
        queryParams: utils.parseParametersToObject(params, paramsArr),
        // queryParams: queryParamsAWS,
        body: {}
      }
      // console.log('req.queryParams',req.queryParams)
      // console.log("req", req)

      // if (this.get('modelName') === "zone"){
      // 	let SortArr = ['AFxTm_-JK5HX9_Gzu-BS','yhwPulzG0J_2qMnN8PKo','mgFzuAWjaZZcgEdmFD8C','Jbg2caAVuJt6iIjqIQL6'].sort()
      // 	console.log('SortArr',SortArr)
      // 	req.queryParams = {'ids%5B%5D': `${SortArr[0]}&ids[]=${SortArr[1]}&ids[]=${SortArr[2]}&ids[]=${SortArr[3]}`}
      // }

      const request = client.makeRequest(req)
      // console.log("request", request)
      // {   method: 'GET',
      // 	url:
      // 	'https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn/v0/offweb/proposals',
      // 	headers:
      // 	{ Accept: 'application/vnd.api+json',
      // 		'x-amz-date': '20200605T073304Z',
      // 		Authorization:
      // 		'AWS4-HMAC-SHA256 Credential=AKIAWPBDTVEAJ6CCFVCP/20200605/cn-northwest-1/execute-api/aws4_request, SignedHeaders=accept;host;x-amz-date, Signature=1295d2ea428819bc40d6cd35a7dc0dca20d0ef335ccfda5e7e346b17223ae0d9',
      // 		'Content-Type': 'application/vnd.api+json' },
      // 	data: '',
      // 	timeout: 30000
      // }

      // console.log("request", request)
      return request.headers
    }
  )
})
