import { inject as service } from "@ember/service"
import { tracked } from '@glimmer/tracking'
import RSVP from 'rsvp';
import Route from "@ember/routing/route"
import { action } from '@ember/object'

export default class ApplicationRoute extends Route {
	@service intl
	@service('loading') loadingService;
	@tracked inverse = true
	
	beforeModel(param) {
		this.loadingService.beforeLoading()
		let curLang = window.localStorage.getItem("lang")
		if (curLang) {
			if (curLang === "中文") {
				this.intl.setLocale(["zh-cn"])
			} else {
				this.intl.setLocale(["en-us"])
			}
		} else {
			this.intl.setLocale(["zh-cn"])
			window.localStorage.setItem("lang", "中文")
		}
		//临时解决方案，判断当前route是否为home
		// window.location.href.split("?")[0].indexOf("home")
		let url = param.router.activeTransition.intent.url
		if(url === "/home" || url === "/") {
			this.inverse = false
		} else {
			this.inverse = true
		}
	}

	@action
	willTransition(transition) {
		this.loadingService.beforeLoading()
		let context = transition.router.activeTransition.intent.contexts
		if(context) {
			if(context[0] === "home" || context[0].indexOf("download-report") != -1 || context[0] === "/") {
				this.inverse = false
			} else {
				this.inverse = true
			}
		}
		this.currentModel.inverse = this.inverse
	}

	@action
    didTransition() {
		//跳转到页面顶部
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
		this.loadingService.afterLoading()
    }

	async model() {
		this.afterModel = function() {
            this.loadingService.afterLoading()
        }
		return RSVP.hash({
			inverse: this.inverse
		})
	}
}
