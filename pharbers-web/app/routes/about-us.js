import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class AboutUsRoute extends Route {
    @action
    didTransition() {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
    }
}
