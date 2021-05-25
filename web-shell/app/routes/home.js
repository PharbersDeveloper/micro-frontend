/* eslint-disable prettier/prettier */
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
// import { action } from '@ember/object';

export default class HomeRoute extends Route {
    @service store;
    model() {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        // 请求数据
        // const activityList = this.store.findAll("activity")
        debugger
    }
}
