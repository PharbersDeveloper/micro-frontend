import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';


export default class ExcelCleanRoute extends Route {
    @service('loading') loadingService;

	async model() {
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
		return RSVP.hash( {
			_isVue: true
		} )
	}
}
