import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class PrepareSetRoute extends Route {
    @service('loading') loadingService;
    @service browserEventsService;

	queryParams = {
		projectName: {
			refreshModel: true
		},
		projectId: {
			refreshModel: true
		},
		message: {
			refreshModel: true
		},
		operatorParameters: {
			refreshModel: true
		}
    }

	beforeModel( params ) {
		this._super( ...arguments )
		this.browserEventsService.clearListener()
		this.browserEventsService.registerListener('recipes')
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
			message: params.message,
			operatorParameters: params.operatorParameters ? JSON.parse(unescape(params.operatorParameters)) : [],
			_isVue: true
		} )
	}
}
