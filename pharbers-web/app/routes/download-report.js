import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp'

export default class DownloadReportRoute extends Route {
    @service store;
    beforeModel() {
        this.controllerFor('application').set('inverse', false)
    }
    model(params) {
        console.log(params);
        const id = params.report_id
        const reportsList = this.store.findRecord("report", id, { include: "cover"})
        let lang = localStorage.getItem('lang')
        if (lang === "中文") {
            lang = 1
        } else {
            lang = 0
        }
        const reportsData = this.store.findRecord("report", "MzsAreGknrYrBiSax9Xk")
        return hash({
            data: reportsData
        })
    }
}
