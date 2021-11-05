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

	async model() {
		this.afterModel = function() {
			if(this.loadingService.afterLoading){
				this.loadingService.loading.style.display = 'none'
			}
		}
		return RSVP.hash( {
			_isVue: true
		} )
	}
}
