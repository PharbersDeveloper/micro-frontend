import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AboutUsRoute extends Route {
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
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
	}
}
