import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp'
import { action } from '@ember/object';


export default class ReportListRoute extends Route {
    @service store;
	@service('loading') loadingService;
	beforeModel() {
		this.loadingService.loading.style.display = 'inline-block'
    }
    @action
    didTransition() {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
    }
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
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
        return RSVP.hash({
            reportsList: reportsList.then((x) => x.filter((it) => it.language === lang))
        });
    }
}
