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
        return hash({
            data: reportsList
        })
    }
}
