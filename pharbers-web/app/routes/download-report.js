import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import { action } from '@ember/object';


export default class DownloadReportRoute extends Route {
    @service store;
    @action
    didTransition() {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
    }
    beforeModel() {
        // this.controllerFor('application').set('inverse', false);
    }
    model(params) {
        let lang = localStorage.getItem('lang');
        if (lang === '中文') {
            lang = 1;
        } else {
            lang = 0;
        }
        const id = params.report_id;
        const reportsList = this.store.query('report', {
            'filter[language]': lang,
            'page[limit]': 1,
            'page[offset]': id,
            sort: '-date',
            include: 'cover',
        });
        return hash({
            reports: reportsList.then((x) =>
                x.filter((it) => it.language === lang)
            ),
        });
    }
}
