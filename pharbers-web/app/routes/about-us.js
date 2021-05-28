import Route from '@ember/routing/route';

export default class AboutUsRoute extends Route {
    beforeModel() {
        this.controllerFor('application').set('inverse', true)
    }
}
