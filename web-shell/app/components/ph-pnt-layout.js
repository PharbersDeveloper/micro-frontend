import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from "@ember/service"

export default class PhPntLayoutComponent extends Component {
	@service cookies;
	@service router

	get navComponent() {
		if(this.args.navComponent) {
			return this.args.navComponent
		} else return "ph-analyze-bp-nav-top-max"
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

	@action
    unregisterListener(element) {
        element.removeEventListener("event", this.listener)
    }
}
