import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';


export default class ExcelCleanRoute extends Route {
    @service('loading') loadingService;
	queryParams = {
		projectName: {
			refreshModel: true
		},
		tmpname: {
			refreshModel: true
		}
    }
	async model(params) {
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
		return RSVP.hash( {
			projectName: params.projectName,
			tmpname: params.tmpname,
			_isVue: true
		} )
	}
}
