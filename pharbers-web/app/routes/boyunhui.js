import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class BoyunhuiRoute extends Route {
    @service store;

    model(params) {
        const id = params.boyunhui_id
        const activityList = this.store.findRecord('activity', id, {include: 'logo,gallery,attachments,agendas,agendas.agendas,agendas.agendas.speakers,agendas.agendas.speakers.avatar'})

        return hash({
            data: activityList
        })
    }
}
