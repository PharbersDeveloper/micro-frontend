import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import RSVP from 'rsvp';

export default class DownloadMyDataRoute extends Route {
    @service store
    @service('loading') loadingService;
    @service cookies
    
    queryParams = {
        tab: {
            refreshModel: true
        },
        sort: {
            refreshModel: true,
        },
        page: {
            refreshModel: true
        }
    }

    beforeModel() {
		this.loadingService.loading.style.display = 'inline-block'
    }
    async model( params ) {
        const limit = 10
        let tab = params.tab || "mine"
		let page = parseInt( params.page, 10 )
		let sortType = params.sort || '-created'
        if ( isNaN( page ) ) {
			page = 0
		}
        let files = this.store.query( "file", {"filter[owner]": this.cookies.read('account_id'), "page[limit]": limit, "page[offset]": page * limit, sort: sortType } )

		let database = this.store.query("db", {})
		// let userData = await this.store.findRecord( "account", this.cookies.read('account_id') )
		//请求employer的数据
		await Promise.all([files,database])
		// let employerId = userData.belongsTo('employer').id()
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
        return RSVP.hash({
            files: files.filter( it => it),
            tab: tab,
            page: page,
            sort: sortType,
			// employerId: employerId,
            count: files.meta.count,
			database: database.filter( it => it),
			_isVue: true
        })
    }
}
