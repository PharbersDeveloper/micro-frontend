import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class MaxRoute extends Route {
    @action
    didTransition() {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
    }
}
