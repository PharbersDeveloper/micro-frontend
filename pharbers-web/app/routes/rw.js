import Route from '@ember/routing/route';

export default class RwRoute extends Route {
    beforeModel() {
        this.controllerFor('application').set('inverse', true)
    }
}
