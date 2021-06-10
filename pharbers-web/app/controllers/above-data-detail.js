import Controller from '@ember/controller';
import { computed, set, action } from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class AboveDataDetailController extends Controller {
    @tracked allData = {};
    init() {
        super.init(...arguments)

        window.addEventListener('setItemEvent', function(event) {
            window.location.reload(true)
        })
    }

    @action
	transferData() {
        this.allData = { 
            activity: this.model.data
        }
    }
}
