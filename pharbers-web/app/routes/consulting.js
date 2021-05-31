import Route from '@ember/routing/route';

export default class ConsultingRoute extends Route {
    beforeModel() {
        this.controllerFor('application').set('inverse', true)
    }
}
