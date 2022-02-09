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
		this.loadingService.loading.style.display = 'flex'
	}

	async model() {
		// let projects = await this.store.query( "project", {"filter[owner]":this.cookies.read('account_id')})
		let resources = await this.store.query( "resource", {"filter[tenant]":this.cookies.read('company_id'), "filter[resourceType]":"project", include: 'accounts'})

		//菜单栏个人信息
		let name_show, company_name_show
		if(this.cookies.read('account_id')) {
			name_show = decodeURI(this.cookies.read('user_name_show'))
			company_name_show = decodeURI(this.cookies.read('company_name_show'))
		}
		//去掉loading
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
		return RSVP.hash( {
			resources: resources.filter( it => it),
			name_show: name_show,
			company_name_show: company_name_show,
			_isVue: true
		} )
	}
}
