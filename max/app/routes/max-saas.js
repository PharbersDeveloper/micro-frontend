import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from "@ember/service"


export default class MaxSaasRoute extends Route {
	@service cookies
	@service store
	@service ajax

	queryParams = {
        page: {
            refreshModel: true
        }
    }
	async model(params) {
		const limit = 10
		let page = parseInt( params.page, 10 )
        if ( isNaN( page ) ) {
			page = 0
		}

		const accessToken = this.cookies.read( "access_token" )
		const applicationAdapter = this.get( "store" ).adapterFor( "application" )
		applicationAdapter.toggleProperty( "oauthRequest" )
		applicationAdapter.set("getUserInfo", 1)
		applicationAdapter.set("userAuthorization", accessToken)
		let allUserData
		let userData
		if(this.cookies.read('account_id')) {
			userData = await this.store.findRecord( "account", this.cookies.read('account_id') )
			applicationAdapter.toggleProperty( "oauthRequest" )
			applicationAdapter.set("getUserInfo", 1)
			applicationAdapter.set("userAuthorization", accessToken)
			applicationAdapter.set('needUserData', allUserData)
		}
		//todo: getCurrentDate
		let currentDate = new Date().getTime()
		let date = new Date(currentDate)
		let y = date.getFullYear()
		let m = date.getMonth() + 1
		m = m < 10 ? ('0' + m) : m;
		let time = y + '-' + m + '-' + '01';
		let currentstamp = time.replace(/-/g, '/');
		let timesTamp = new Date(currentstamp).getTime()
		let projects = await this.store.query("project",{ "filter[time]": timesTamp})
		let jobLogs = await this.store.query("jobLog", {"page[limit]": limit, "page[offset]": page * limit})
		return RSVP.hash({
			userData: userData,
			projectsData: projects.filter( it => it),
			jobLogs: jobLogs.filter( it => it),
			jobsCount: jobLogs.meta.count,
			page: page,
			_isVue: true
        })
	}
}
