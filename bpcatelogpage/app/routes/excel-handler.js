import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';
export default class ExcelHandlerRoute extends Route {
	@service('loading') loadingService;
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
