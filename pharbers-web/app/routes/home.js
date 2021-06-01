/* eslint-disable prettier/prettier */
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp'
// import { action } from '@ember/object';

export default class HomeRoute extends Route {
    @service store;
    beforeModel() {
        this.controllerFor('application').set('inverse', false)
    }
    model() {
        const activityList = this.store.query("activity", { 'sort': "-startDate", "page[limit]": 6,"page[offset]": 0, include: "logo,gallery" })

        const reportsList = this.store.query("report", { 'sort': "-date",'page[limit]': 2, include: "cover"})

        return hash({
            activityData: activityList.then(x => x.slice(0,6).filter(it => it.language === 1)),
            activityDataEN: activityList.then(x => x.slice(0,6).filter(it => it.language === 0)),
        })
    }
}
