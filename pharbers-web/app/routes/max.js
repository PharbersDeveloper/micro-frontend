import Route from '@ember/routing/route';

export default class MaxRoute extends Route {
    beforeModel() {
        this.controllerFor('application').set('inverse', true)
    }
}