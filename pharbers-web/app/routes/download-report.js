import Route from '@ember/routing/route';

export default class DownloadReportRoute extends Route {
    model(params) {
        console.log(params);
        const id = params.report_id
        const reportsList = this.store.findRecord("report", id, { include: "cover"})
    }
}
