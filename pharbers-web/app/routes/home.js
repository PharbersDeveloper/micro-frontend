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
        let lang = localStorage.getItem('lang')
        if (lang === "中文") {
            lang = 1
        } else {
            lang = 0
        }
        const activityList = this.store.query("activity", { 'sort': "-startDate", "page[limit]": 3,"page[offset]": 0, "filter[language]": lang, include: "logo,gallery" })

        const reportsList = this.store.query("report", { 'sort': "-date",'page[limit]': 2, include: "cover"})

        return hash({
            activityData: activityList.then(x => x.filter(it => it.language === lang)),
        })
    }
}
