import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class DatasetRoute extends Route {
    @service('loading') loadingService;

	queryParams = {
		projectName: {
			refreshModel: true
		},
		projectId: {
			refreshModel: true
		}
    }
	async model(param) {
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
		return RSVP.hash( {
			projectName: param.projectName,
			projectId: param.projectId,
			_isVue: true
		} )
	}
}
