import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import ENV from 'bpcatelogpage/config/environment';

export default class DatasetLstRoute extends Route {
	@service cookies
	@service ajax
	@service('loading') loadingService;
	@service store
	namespace = ENV.namespace

	beforeModel() {
		let cookies = this.get( "cookies" )

		if ( !cookies.read( "access_token" ) ) {
			this.transitionTo( "index" )
		}
		this.loadingService.loading.style.display = 'inline-block'
	}
	queryParams = {
		projectName: {
			refreshModel: true
		},
		projectId: {
			refreshModel: true
		}
    }
	async model(params) {
		this.store.unloadAll("dataset");
		const url = "https://apiv2.pharbers.com/phdydatasource/scan"
		const accessToken = this.cookies.read( "access_token" )
		let body = {
			"table": "dataset",
			"conditions": {
				"projectId": "Max"
			},
			"limit": 100,
			"start_key": {}
		}

		let options = {
			method: "POST",
			headers: {
				"Authorization": accessToken,
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				"accept": "application/json"
			},
			body: JSON.stringify(body)
		}
		const ds = fetch(url, options)
		let that = this
		let tmp = await ds.then((response) => response.json()).then((response) => {
			this.store.pushPayload(response)
			return new Promise((resolve, reject) => {
				resolve(that.store.peekAll("dataset"))
			})
		})

		this.afterModel = function() {
			if(this.loadingService.afterLoading){
				this.loadingService.loading.style.display = 'none'
			}
		}
		return RSVP.hash( {
			projectName: params.projectName,
			projectId: params.projectId,
			dss: tmp.filter(it => it),
			_isVue: true
		} )
	}
}
