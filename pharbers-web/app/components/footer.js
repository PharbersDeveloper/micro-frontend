import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FooterComponent extends Component {
    @action
    linkToPage(data) {
        this.router.transitionTo(data.detail[0])
    }
}
