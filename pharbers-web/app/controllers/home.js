import Controller from '@ember/controller';
import { computed, set, action } from '@ember/object'
import { tracked } from '@glimmer/tracking';
export default class HomeController extends Controller {
    @tracked language;
    init() {
        super.init(...arguments)
        let that = this

        this.language = localStorage.getItem('lang')
        window.addEventListener('setItemEvent', function(event) {
            that.language = event.newValue
        })
    }

    @action
    linkToPage(data) {
        this.transitionToRoute(data.detail[0])
    }

    @action 
    downloadReport(data) {
        this.transitionToRoute(data.detail[0], 0)
    }

    @computed('language')
    get allData() {
        let activities
        if (this.language === '中文') {
            activities = this.model.activityData
        } else {
            activities = this.model.activityDataEN
        }

        return [activities]
    }
}
