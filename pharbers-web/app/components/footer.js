import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class FooterComponent extends Component {
    @service router

    @action
    linkToPage(data) {
		if(data.detail[0] == "home" && this.router.currentRouteName == "home") {
			window.location.reload()
		} else {
			this.router.transitionTo(data.detail[0])
		}
    }
}
