import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BoyunhuiRoute extends Route {
    @service store;

    model(params) {
        const id = params.boyunhui_id,
            activityList = this.store.findRecord("activity", id, {include: "gallery"}),
            reportList = this.store.query( "report",  { 'sort': "-date" } )

    }
}
