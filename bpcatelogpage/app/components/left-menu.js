import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LeftMenuComponent extends Component {
	@service router
    @action
    listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
				let idx = e.detail[0].args.param.index
				if(idx == 0) {
					this.router.transitionTo( `/download/enterprise` )
				} else if(idx == 1) {
					this.router.transitionTo(`/download/my-data`)
				} else if(idx == 2) {
					this.router.transitionTo(`/projects`)
				}
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
