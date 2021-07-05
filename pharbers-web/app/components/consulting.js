import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ConsultingComponent extends Component {
    @service router
    @action
	listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                console.log("linkTopage")
                this.router.transitionTo(e.detail[0].args.param)
                break
            default: 
                console.log("submit event to parent")
        }
	}

    @action
	registerListener(element) {
		element.addEventListener("event", this.listener)
	}

	@action
	unregisterListener(element) {
		element.removeEventListener("event", this.listener)
	}
}
