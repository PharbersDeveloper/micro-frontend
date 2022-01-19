import { inject as service } from "@ember/service"
import { tracked } from '@glimmer/tracking'
import RSVP from 'rsvp';
import Route from "@ember/routing/route"
import { action } from '@ember/object'

export default class ApplicationRoute extends Route {
	@service intl
	@tracked inverse = true
	
	beforeModel(param) {
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
		if(transition.router.activeTransition.intent.contexts[0] === "home") {
			this.inverse = false
		} else {
			this.inverse = true
		}
		this.currentModel.inverse = this.inverse
		console.log("willTransition",this.inverse)
	}

	async model() {
		console.log("inverse", this.inverse)
		return RSVP.hash({
			inverse: this.inverse
		})
	}
}
