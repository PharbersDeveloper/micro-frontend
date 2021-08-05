import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MaxExtractComponent extends Component {
	@service router

	@action
    listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
				this.router.transitionTo( e.detail[0].args.param.name )
                break
            default: 
                console.log("other click event!")
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
