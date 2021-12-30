import { dasherize } from "@ember/string"
import { pluralize } from "ember-inflector"
import { inject as service } from "@ember/service"
import ENV from "web-shell/config/environment"
import JSONAPIAdapter from "@ember-data/adapter/json-api"

export default class ApplicationAdapter extends JSONAPIAdapter {
	@service cookies

	curMethod = "GET"

	pathForType(type) {
		return pluralize(dasherize(type))
	}

	sortQueryParams(params) {
		this.queryParamsAWS = params
	}

	buildURL(modelName, id, snapshot, requestType, query) {
		const requestMethod = {
			query: "GET",
			findRecord: "GET",
			createRecord: "POST",
			updateRecord: "PATCH",
			deleteRecord: "DELETE",
			push: "POST"
		}
		let url = super.buildURL(...arguments)
		let curType = url.split("/").splice(4, 2) // ["activities" , ... ]
		let curPath = curType.join("/")
		let newUrl = `/phplatform/${curPath}` // newUrl: "/v0/entry/assets"

		this.curMethod = requestMethod[requestType]
		this.modelName = modelName
		this.requestURL = curType.join("/")

		if (query && Object.keys(query).length) {
			let queryString = ""
			const queryParamsArr = Object.keys(query)

			this.queryParamsArr = queryParamsArr // 处理是因为object没有顺序，参数位置不同，可能导致token错误
			for (let index = 0; index < queryParamsArr.length; index++) {
				const element = queryParamsArr[index]
				let queryValue = query[element]

				// 处理ids的数组转换为字符串
				if (element === "ids[]" && query[element] instanceof Array) {
					const ids = query[element]
					const idsArr = ids.sort()
					let idsStr = ""

					idsArr.forEach((ele) => {
						this.idsStr += ele + "&ids[]="
					})
					idsStr = idsStr.substr(0, idsStr.length - 7)
					queryValue = idsStr
				}
				queryString += `${element}=${queryValue}&`
			}
			queryString = queryString.substr(0, queryString.length - 1)
			newUrl += "?" + encodeURI(queryString)
		} else {
			this.queryParamsAWS = {}
		}
		this.newUrl = newUrl
		return ENV.APP.apiUri + newUrl
	}

	attributesToDeal(data) {
		// data is object
		const keys = Object.keys(data).sort()
		const obj = {}

		keys.forEach((k) => {
			const key = dasherize(k)

			obj[key] = data[k]
		})
		return obj
	}

	// eslint-disable-next-line no-unused-vars
	handleResponse(status, headers, payload, _) {
		//处理project list(resource)数据
		if (
			payload &&
			payload.data &&
			payload.data.length > 0 &&
			payload.meta &&
			payload.meta.count > 0
		) {
			// eslint-disable-next-line no-unused-vars
			payload.data.forEach((item, _) => {
				item.attributes.meta = item.meta
				item.attributes.includes = payload.included
			})
		}
		//处理executions数据
		if (
			payload &&
			payload.data &&
			payload.data.length > 0 &&
			payload.data[0].meta
		) {
			// eslint-disable-next-line no-unused-vars
			payload.data.forEach((item, _) => {
				item.attributes.meta = item.meta
			})
		}
		//处理dag数据
		else if (payload && payload.data && payload.data.meta) {
			payload.data.attributes.meta = payload.data.meta
		}
		return payload
	}
	// urlForFindHasMany(id, modelName, snapshot) {
	// 	let baseUrl = this.buildURL(modelName, id);
	// 	return `${baseUrl}/relationships`;
	// },
	get headers() {
		if (ENV.environment === "development") {
			return {
				Accept: "application/vnd.api+json",
				"Content-Type": "application/vnd.api+json",
				Authorization: ENV.APP.debugToken
			}
		} else {
			return {
				Accept: "application/vnd.api+json",
				"Content-Type": "application/vnd.api+json",
				Authorization: this.cookies.read("access_token")
			}
		}
	}
}
