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
		//请求user的数据
		const accessToken = this.cookies.read( "access_token" )
		const applicationAdapter = this.get( "store" ).adapterFor( "application" )
		applicationAdapter.toggleProperty( "oauthRequest" )
		applicationAdapter.set("getUserInfo", 1)
		applicationAdapter.set("userAuthorization", accessToken)
		let allUserData
		let userData = await this.store.findRecord( "account", this.cookies.read('account_id') )
		//请求employer的数据
		let employerId = userData.belongsTo('employer').id()
		applicationAdapter.set("partner",1)
		let employerData = this.store.findRecord( "partner", employerId )
		
		const options = {
			domain: ".pharbers.com",
			path: "/",
			maxAge: this.cookies.read( "expires_in" )
		}

		this.cookies.write( "account_id", userData.id, options )
		this.cookies.write( "user_email", userData.email, options )

		applicationAdapter.toggleProperty( "oauthRequest" )
		applicationAdapter.set("getUserInfo", 1)
		applicationAdapter.set("userAuthorization", accessToken)
		applicationAdapter.set('needUserData', allUserData)

		let projects = this.store.query( "state-machine", {})
		await Promise.all([userData,employerData,projects])
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
		return RSVP.hash( {
			projects: projects.filter( it => it),
			personalData: userData,
			employerId: employerId,
			employerData: employerData,
			_isVue: true
		} )
	}
}