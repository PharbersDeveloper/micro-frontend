import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class DatasetLstComponent extends Component {
	@service router
	@service store
	@service cookies
	@service ajax

	@action
	listener(e) {
		switch(e.detail[0].args.callback) {
			case "linkToPage":
				let param = e.detail[0].args.param;
				this.router.transitionTo( `/projects/`+ param.pid )
				break
			default:
				console.log("other click event!")
		}
	}

	@action
	registerListener(element) {
		element.allData = this.calAllData
		element.addEventListener("event", this.listener)
	}

	@action
	unregisterListener(element) {
		element.removeEventListener("event", this.listener)
	}

	get calAllData() {
		this.args.model._isVue = true
		return this.args.model
	}
}
