import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';
export default class ExcelHandlerRoute extends Route {
	@service('loading') loadingService;
    @service browserEventsService;

	queryParams = {
		projectName: {
			refreshModel: true
		},
		projectId: {
			refreshModel: true
		},
		tmpname: {
			refreshModel: true
		},
		filename: {
			refreshModel: true
		},
		version: {
			refreshModel: true
		},
		dataset: {
			refreshModel: true
		}
    }
	beforeModel( params ) {
		this._super( ...arguments )
		this.browserEventsService.clearListener()
		// this.browserEventsService.registerListener('dataset-lst')
	}
	async model(params) {
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
		return RSVP.hash( {
			projectName: params.projectName,
			projectId: params.projectId,
			tmpname: params.tmpname,
			filename: params.filename,
			version: params.version,
			dataset: params.dataset,
			_isVue: true
		} )
	}
}
