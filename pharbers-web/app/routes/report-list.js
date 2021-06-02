import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp'

export default class ReportListRoute extends Route {
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
        const reportsList = this.store.query("report", { 'sort': "-date", 'filter[language]': lang, include: 'cover' })
        return hash({
            data: reportsList.then(x => x.filter(it => it.language === lang))
        })
    }
}
