import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import ENV from 'bpcatelogpage/config/environment';

export default class RecipesRoute extends Route {
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
		}
    }
	async model(params) {
		let that = this
		this.store.unloadAll("dagConf");
		this.store.unloadAll("dataset");
		const url = "https://apiv2.pharbers.com/phdydatasource/scan"
		const accessToken = this.cookies.read( "access_token" )
		let body = {
			"table": "dagconf",
			"conditions": {
				"projectId":  ["=", params.projectId]
				// "sortVersion": ["begins_with", "developer_"]
			},
			"limit": 100,
			"start_key": ""
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
		const dc = await fetch(url, options).then((response) => response.json()).then((response) => {
			this.store.pushPayload(response)
			return new Promise((resolve, reject) => {
				resolve(that.store.peekAll("dagConf"))
			})
		})

		let body1 = {
			"table": "dataset",
			"conditions": {
				"projectId":  ["=", params.projectId]
				// "sortVersion": ["begins_with", "developer_"]
			},
			"limit": 100,
			"start_key": {}
		}

		let options1 = {
			method: "POST",
			headers: {
				"Authorization": accessToken,
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				"accept": "application/json"
			},
			body: JSON.stringify(body1)
		}
		const ds = await fetch(url, options1).then((response) => response.json()).then((response) => {
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
			dcs: dc.filter(it => it),
			dss: ds.filter(it => it),
			tagsArray: [],
			_isVue: true
		} )
	}
}
