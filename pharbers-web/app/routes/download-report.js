import Route from '@ember/routing/route';

export default class DownloadReportRoute extends Route {
    model(params) {
        console.log(params);
    }
}
