import Controller from '@ember/controller';
import { computed, set, action } from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class BoyunhuiController extends Controller {
    @tracked allData = {};
    init() {
        super.init(...arguments)

        window.addEventListener('setItemEvent', function(event) {
            window.location.reload(true)
        })
    } 

    @action
    linkToPage(data) {
        this.transitionToRoute(data.detail[0])
    }

    @action
    linkToActivity(data) {
        this.transitionToRoute(data.detail[0])
    }

    @action
	transferData() {
        this.allData = { 
            activitys: this.model.activitys,
            reportList: this.model.reportList,
            participants: this.model.participantList.filter(x => x.avatar.content != null),
            cooperationListA: this.model.cooperationListA,
            cooperationListB: this.model.cooperationListB,
            activityDays: this.model.activityDays,
            galleryShow: this.model.galleryShow,
            galleryList: this.model.galleryList,
            allZone: this.model.allZone,
            hostList: this.model.hostList
        }
    }

    @action 
    downloadReport(data) {
        this.transitionToRoute(data.detail[0], this.index)
    }
}
