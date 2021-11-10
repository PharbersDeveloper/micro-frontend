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

	beforeModel( { targetName } ) {
		this._super( ...arguments )
		// window.onbeforeunload = function(e) {
		// 	debugger
		// };
	}
	async model(params) {
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
		let datasets = await this.store.peekAll('dataset')
		return RSVP.hash( {
			projectName: params.projectName,
			projectId: params.projectId,
			datasetArr: datasets.filter(it => it.id != ''),
			_isVue: true
		} )
	}
}
