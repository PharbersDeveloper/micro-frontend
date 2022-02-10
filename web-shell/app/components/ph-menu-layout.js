import Component from "@glimmer/component"
import { inject as service } from "@ember/service"
import { action } from '@ember/object';
import ENV from "web-shell/config/environment"

export default class PhMenuLayoutComponent extends Component {
	@service router
	@service("ph-menu") ms
	@service oauthService
	@service cookies;
	@service store

	accountsUri = ENV.APP.accountsUri
	scope =  ENV.APP.scope

	get redirectUri() {
		if (ENV.environment === "development") {
			return ENV.APP.DEV.redirectUri
		} else {
			return ENV.APP.redirectUri
		}
	}

	get clientId() {
		if (ENV.environment === "development") {
			return ENV.APP.DEV.clientId
		} else {
			return ENV.APP.clientId
		}
	}

	get layoutCss() {
		const layout = this.store.peekRecord("layout", ENV.APP.clientId)
		return layout.css
	}

	get menuComponent() {
		if (this.args.menuComponent) {
			return this.args.menuComponent
		} else return "phcatelog-menu"
	}

	get navComponent() {
		if (this.args.navComponent) {
			return this.args.navComponent
		} else return ""
	}

	@action
    listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
				let idx = e.detail[0].args.param.index
				if(idx == 0) {
					this.router.transitionTo(`/overview`)
				} else if(idx == 1) {
					this.router.transitionTo(`/download/my-data`)
				} else if(idx == 2) {
					this.router.transitionTo(`/projects`)
				}
                break
			case "logOut":
				this.oauthService.removeAuth()
				window.localStorage.clear()
				const x = JSON.stringify({"client_id": this.clientId, "redirect_uri": this.redirectUri, "time": new Date().getTime()})
				const state = window.btoa(x)
				window.location.href = `${this.accountsUri}/welcome?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&state=${state}&scope=${this.scope}`
				break
            default: 
                console.log("other click event!")
        }
    }

    @action
    registerListener(element) {
        element.allData = {
			name_show: decodeURI(this.cookies.read('user_name_show')),
			company_name_show: decodeURI(this.cookies.read('company_name_show')),
			_isVue: true
		}
        element.addEventListener("event", this.listener)
    }
}
