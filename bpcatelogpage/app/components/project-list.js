import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProjectListComponent extends Component {
	@service router
	@service store
    @service cookies
    @service ajax

	@action
    listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
				console.log(e.detail[0].args.param.name)
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
