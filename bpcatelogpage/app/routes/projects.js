import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import ENV from 'bpcatelogpage/config/environment';

export default class ProjectsRoute extends Route {
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
		let projects = this.store.query( "project", {"filter[owner]":this.cookies.read('account_id')})
		await Promise.all([projects])
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
		let name_show, company_name_show
		if(this.cookies.read('account_id')) {
			name_show = decodeURI(this.cookies.read('user_name_show'))
			company_name_show = decodeURI(this.cookies.read('company_name_show'))
		}
		return RSVP.hash( {
			projects: projects.filter( it => it),
			name_show: name_show,
			company_name_show: company_name_show,
			_isVue: true
		} )
	}
}