import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';


export default class ExcelCleanRoute extends Route {
    @service('loading') loadingService;
    @service browserEventsService;

	queryParams = {
		projectName: {
			refreshModel: true
		},
		projectId: {
			refreshModel: true
		},
		path: {
			refreshModel: true
		},
		datasetName: {
			refreshModel: true
		}
    }

	beforeModel( params ) {
		this._super( ...arguments )
	}
	
	async model(params) {
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
		return RSVP.hash( {
			projectName: params.projectName,
			path: params.path,
			projectId: params.projectId,
			datasetName: params.datasetName,
			_isVue: true
		} )
	}
}
