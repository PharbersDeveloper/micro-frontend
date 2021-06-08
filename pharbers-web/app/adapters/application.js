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
  namespace: ENV.namespace,
  sortQueryParams(params) {
    this.set("queryParamsAWS", params)
  },
  buildURL: function (modelName, id, snapshot, requestType, query) {
    let url = this._super(...arguments)
    const curType = url.split("/").splice(2, 2)
    // if (modelName === "account" || modelName === "applyuser") {
    //   this.toggleProperty("oauthRequest")
    //   return "http://oauth.pharbers.com/" + url
    // }
    if (modelName === "cooperation") {
      curType[0] = "cooperation"
      url = url.split("/")
      url[2] = "cooperation"
      url = url.join("/")
    }
    this.set("requestURL", url)
    if (requestType === 'findRecord' && snapshot.include) {
      this.set('findRecordInclude', snapshot.include)
    }
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
          if (index === 0) {
            queryString += `${element}=${query[element][index]}`
          } else {
            queryString += `&${element}=${query[element][index]}`
          }
        }
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
    return `https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn${newUrl}`
    
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
      
      if(this.get('findRecordInclude')) {
        paramsArr.push('include')
        params.include = this.get('findRecordInclude')
        this.set('findRecordInclude', null)
      }
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
      const request = client.makeRequest(req)
      return request.headers
    }
  )
})
