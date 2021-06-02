import Route from '@ember/routing/route';

export default class AboveDataDetailRoute extends Route {
    model(params) {
        console.log(params);
    }
}
