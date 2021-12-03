import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import ENV from 'bpcatelogpage/config/environment';

export default class CodeditorRoute extends Route {
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
		this.loadingService.loading.style.display = 'flex'
		window.onbeforeunload = undefined
	}
	queryParams = {
		projectName: {
			refreshModel: true
		},
		projectId: {
			refreshModel: true
		},
		jobName: {
			refreshModel: true
		},
		jobPath: {
			refreshModel: true
		}
    }
	async model(params) {
		this.store.unloadAll("dataset");
		const url = "https://apiv2.pharbers.com/phdydatasource/scan"
		const accessToken = this.cookies.read( "access_token" )
		let body = {
			"table": "dagconf",
			"conditions": {
				"projectId":  ["=", params.projectId]
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
			response.data.map((item,index) => {
				item.id = index
			})

			this.store.pushPayload(response)
			return new Promise((resolve, reject) => {
				resolve(that.store.peekAll("dagConf"))
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
			tagsArray: [],
			jobName: params.jobName,
			jobPath: params.jobPath,
			_isVue: true
		} )
	}
}
