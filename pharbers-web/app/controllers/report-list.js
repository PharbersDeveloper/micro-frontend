import Controller from '@ember/controller';
import { computed, set, action } from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class ReportListController extends Controller {
    @tracked allData = [];
    init() {
        super.init(...arguments)
        window.addEventListener('setItemEvent', function(event) {
            window.location.reload(true)
        })
    }

    @action
	transferData(element) {
        this.allData = {
            reportsList: this.model.data
        }
	}

    @action
    linkToPage(data) {
        this.transitionToRoute(data.detail[0])
    }
}
