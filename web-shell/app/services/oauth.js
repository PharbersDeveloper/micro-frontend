import Service from "@ember/service"
import { inject as service } from "@ember/service"

export default Service.extend( {
	cookies: service(),
	ajax: service(),
	router: service(),
	store: service(),
	oauthCallback( transition ) {
		const cookies = this.get( "cookies" )
		const ajax = this.get( "ajax" )
		const { queryParams } = transition.to
		const applicationAdapter = this.get( "store" ).adapterFor( "application" )

        // console.log("?", transition, queryParams)
		if ( queryParams.code && queryParams.state) {
			// 获取oauth-callback 中的query 
			const redirectUri = queryParams.redirect_uri
			const clientId = queryParams.client_id
			const code = queryParams.code
			const grantType = queryParams.grant_type
			const state = queryParams.state
			const url = `https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn/v0/oauth/token?`
					+ `client_id=${clientId}`
					+ `&code=${code}`
					+ `&grant_type=${grantType}`
					+ `&redirect_uri=${redirectUri}`
                    + `&state=${state}`
			
			// adapter 获取对应的header
            applicationAdapter.set("token", 1)

            applicationAdapter.toggleProperty("oauthRequest")
            applicationAdapter.set("oauthRequestTokenQuery", {
				"redirect_uri": redirectUri,
				"client_id": clientId,
				"code": code,
				"grant_type": grantType,
				"state": state

			})

			const a = applicationAdapter.get("headers")
			
			ajax.request( url , {
				headers: a
			})
				.then( response => {
					this.removeAuth()
					let options = {
						domain: ".pharbers.com",
						path: "/",
						maxAge: response.expires_in
					}

					// console.log(response)

					cookies.write( "access_token", response.access_token, options )
					cookies.write( "refresh_token", response.refresh_token, options )
					cookies.write( "token_type", response.token_type, options )
					cookies.write( "expires_in", response.expires_in, options )

					this.get( "router" ).transitionTo( "product-list")
				} )
				.catch( ( ) => {
					this.get( "router" ).transitionTo( "product-list")
				} )
		} else {
			this.get( "router" ).transitionTo( "product-list")
		}
	},

	judgeAuth() {
		let tokenFlag = false
		let token = this.get( "cookies" ).read( "access_token" )

		if ( typeof token !== "undefined" && token !== null && token !== "" ) {
			tokenFlag = true
		}

		return tokenFlag

		// 前端没有scope，能否访问进行对应的query
	},

	removeAuth() {
		let options = {
			domain: ".pharbers.com",
			path: "/"
		}

		let keys = document.cookie.match(/[^ =;]+(?=\=)/g)
		if(keys) {
			keys.forEach(x=> {
				this.cookies.clear( x, options )
			})
		}
        
        // 如果在product list页面，应该跳回到登录页面
        // 其他页面随意了
        // if ( this.get( "router.currentRouteName" ) === "product-list" ) {
        // }
		// this.get( "router" ).transitionTo("home")
		window.location.reload(true)
		window.console.log( "clear cookies!" )
	}

} )
