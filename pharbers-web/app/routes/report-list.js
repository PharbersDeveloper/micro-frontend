import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';
import RSVP from 'rsvp'

export default class ReportListRoute extends Route {
  @service store;

  model() {
    let lang = localStorage.getItem('lang');
    if (lang === '中文') {
        lang = 1;
    } else {
        lang = 0;
    }
    const reportsList = this.store.query('report', {
        sort: '-date',
        'filter[language]': lang,
        include: 'cover',
    });
    return RSVP.hash({
        reportsList: reportsList.then((x) => x.filter((it) => it.language === lang))
    });
  }
}
