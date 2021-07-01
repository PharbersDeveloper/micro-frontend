import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class HomeComponentComponent extends Component {
    @service router
    @action
	listener(e) {
        console.log(e)
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                console.log("linkTopage")
                this.router.transitonTo(e.detail[0].args.param)
        }
	}

    @action
	registerListener(element) {
        debugger
		element.addEventListener("event", this.listener)
	}

	@action
	unregisterListener(element) {
        debugger
		element.removeEventListener("event", this.listener)
	}
}
