import Controller from '@ember/controller';
import { computed, set, action } from '@ember/object'
import { tracked } from '@glimmer/tracking';
export default class HomeController extends Controller {
    @tracked allData = [];
    init() {
        super.init(...arguments)

        window.addEventListener('setItemEvent', function(event) {
            window.location.reload(true)
        })
    }

    @action
	transferData() {
		this.allData = {
            activities: this.model.activityData
        }
	}

    @action
    linkToPage(data) {
        this.transitionToRoute(data.detail[0])
    }

    @action 
    downloadReport(data) {
        this.transitionToRoute(data.detail[0], 0)
    }
}
