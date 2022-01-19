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
		this.loadingService.loading.style.display = 'flex'
		this.loadingService.loading.style['z-index'] = 2
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
		if(param.router.activeTransition.intent.url === "/home") {
			this.inverse = false
		} else {
			this.inverse = true
		}
	}

	@action
	willTransition(transition) {
		this.loadingService.loading.style.display = 'flex'
		this.loadingService.loading.style['z-index'] = 2
		let context = transition.router.activeTransition.intent.contexts
		if(context) {
			if(context[0] === "home" || context[0].indexOf("download-report") != -1) {
				this.inverse = false
			} else {
				this.inverse = true
			}
		}
		this.currentModel.inverse = this.inverse
		this.loadingService.loading.style.display = 'none'
	}

	@action
    didTransition() {
		//跳转到页面顶部
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
    }

	async model() {
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
		return RSVP.hash({
			inverse: this.inverse
		})
	}
}
