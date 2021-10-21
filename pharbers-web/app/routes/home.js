import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp'
import { action } from '@ember/object';

export default class HomeRoute extends Route {
    @service store;
    @service('loading') loadingService;
    @action
    didTransition() {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
    }
    beforeModel() {
		this.loadingService.loading.style.display = 'inline-block'
    }
    model() {
        let lang = localStorage.getItem('lang')
        if (lang === "中文") {
            lang = 1
        } else {
            lang = 0
        }
        const activityList = this.store.query("activity", { 'sort': "-startDate", "page[limit]": 3,"page[offset]": 0, "filter[language]": lang, include: "logo,gallery" })

        const reportsList = this.store.query("report", { 'sort': "-date",'page[limit]': 1, "filter[language]": lang, include: "cover"})
        
        this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
		await Promise.all([activityList,reportsList])
        return RSVP.hash({
            activities: activityList.then(x => x.filter(it => it.language === lang)),
            reports: reportsList.then(x => x.filter(it => it.language === lang))
        })
    }
}
