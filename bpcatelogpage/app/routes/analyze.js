import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import ENV from 'bpcatelogpage/config/environment';

export default class AnalyzeRoute extends Route {
	@service cookies
	@service ajax
	@service('loading') loadingService;
    @service browserEventsService;
	@service store
	namespace = ENV.namespace

	beforeModel() {
		let cookies = this.get( "cookies" )

		if ( !cookies.read( "access_token" ) ) {
			this.transitionTo( "index" )
		}
		this.loadingService.loading.style.display = 'flex'
		this.browserEventsService.clearListener()
		this.browserEventsService.registerListener('dataset-lst')
	}
	queryParams = {
		projectName: {
			refreshModel: true
		},
		projectId: {
			refreshModel: true
		},
		datasetId: {
			refreshModel: true
		},
		datasetName: {
			refreshModel: true
		}
    }
	async model(params) {
		let targetDataset = await this.store.peekRecord('dataset', params.datasetId)
		let targetSchema = JSON.parse(targetDataset.schema)
		let schemaArr = []
		let schemaArrType = []
		targetSchema.forEach(item => {
			schemaArr.push(item.src)
			schemaArrType.push(item.type)
		})

		this.afterModel = function() {
			if(this.loadingService.afterLoading){
				this.loadingService.loading.style.display = 'none'
			}
		}
		return RSVP.hash( {
			projectName: params.projectName,
			projectId: params.projectId,
			datasetId: params.datasetId,
			schemaArr: schemaArr,
			schemaArrType: schemaArrType,
			datasetName: params.datasetName,
			database: 'default',
			_isVue: true
		} )
	}
}
