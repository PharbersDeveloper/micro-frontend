import Service from "@ember/service"
import { inject as service } from "@ember/service"
import ENV from "bpcatelogpage/config/environment"
// import fetch, { Headers, Request, Response, AbortController } from 'fetch'
import fetch from "fetch"

export default class OauthServiceService extends Service {
	@service cookies
	@service ajax
	@service router
	@service store

	clientId = ENV.clientId
	clientSecret = ENV.clientSecret
	redirectUri = ENV.redirectUri

	oauthCallback(transition) {
		const cookies = this.cookies
		let that = this
		// let urli = window.location.href
		transition.queryParams = {
			// "code": urli.substring(urli.lastIndexOf('code=')+5, urli.lastIndexOf('&state')),
			// "state":urli.substring(urli.lastIndexOf('state=')+6, urli.length),
			code: transition.intent.router._lastQueryParams.code,
			state: transition.intent.router._lastQueryParams.state
		}
		const { queryParams } = transition

		if (queryParams.code && queryParams.state) {
			// 获取oauth-callback 中的query
			const redirectUri = this.redirectUri
			const clientId = this.clientId
			const secret = this.clientSecret
			const grantType = "authorization_code"
			const code = queryParams.code
			// const url = "https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn/v0/oauth/token"
			const url = "https://apiv2.pharbers.com/oauth/token"
			const body = `code=${code}&grant_type=${grantType}&redirect_uri=${redirectUri}`
			// const data = {
			// 	code: code,
			// 	grant_type: grantType,
			// 	redirect_uri: redirectUri
			// }
			const b64 = window.btoa(`${clientId}:${secret}`)
			const authorization = `Basic ${b64}`
			let options = {
				method: "POST",
				headers: {
					authorization,
					"Content-Type":
						"application/x-www-form-urlencoded; charset=UTF-8",
					accept: "application/json, text/javascript, */*; q=0.01"
				},
				body: body
			}
			fetch(url, options)
				.then((res) => {
					return res.json()
				})
				.then(async (response) => {
					this.removeAuth()
					let options = {
						domain: ".pharbers.com",
						path: "/",
						maxAge: response.expiresIn
					}
					cookies.write(
						"access_token",
						response.access_token,
						options
					)
					cookies.write(
						"refresh_token",
						response.refresh_token,
						options
					)
					cookies.write("token_type", response.token_type, options)
					cookies.write("expires_in", response.expiresIn, options)
					cookies.write("user_name", response.user.name, options)
					cookies.write(
						"user_name_show",
						encodeURI(
							response.user.lastName + response.user.firstName
						),
						options
					)
					cookies.write("user_email", response.user.email, options)
					cookies.write(
						"company_id",
						response.user.employerId,
						options
					)
					cookies.write(
						"user_name_show",
						encodeURI(
							response.user.lastName + response.user.firstName
						),
						options
					)
					cookies.write("account_id", response.user.id, options)
					let userData = await that.store.findRecord(
						"account",
						that.cookies.read("account_id")
					)
					//请求employer的数据
					let employerId = await userData.belongsTo("employer").id()
					let employerData = await that.store.findRecord(
						"partner",
						employerId
					)
					cookies.write(
						"company_name_show",
						encodeURI(employerData.name),
						options
					)
					// this.mqttService.mqttConnect()
					this.router.transitionTo("/download/my-data")
				})
				.catch((_) => {
					this.router.transitionTo("/download/my-data")
				})
		} else {
			this.router.transitionTo("/download/my-data")
		}
	}

	judgeAuth() {
		let tokenFlag = false
		let token = this.cookies.read("access_token")

		if (typeof token !== "undefined" && token !== null && token !== "") {
			tokenFlag = true
		}

		return tokenFlag

		// 前端没有scope，能否访问进行对应的query
	}

	removeAuth() {
		let options = {
			domain: ".pharbers.com",
			path: "/"
		}

		let keys = document.cookie.match(/[^ =;]+(?=\=)/g)
		if (keys) {
			keys.forEach((x) => {
				this.cookies.clear(x, options)
			})
		}

		window.console.log("clear cookies!")
	}
}
