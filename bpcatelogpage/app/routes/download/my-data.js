import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import RSVP from 'rsvp';

export default class DownloadMyDataRoute extends Route {
    @service store
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

    async model( params ) {
        const limit = 10
        let tab = params.tab || "mine"
		let page = parseInt( params.page, 10 )
		let sortType = params.sort || '-created'
        if ( isNaN( page ) ) {
			page = 0
		}

        let files = await this.store.query( "asset", { "filter[type]": "file", "filter[owner]": this.cookies.read('account_id'), "page[limit]": limit, "page[offset]": page * limit, sort: sortType } )
            // .then()
            // .catch(err => {
            //     // this.toast.error( "", this.get('intl').t('permission.permissionDenied'), this.toastOptions )
            //     // return {
            //     //     meta: {
            //     //         count: 1
            //     //     }
            //     // }
            // })

        if ( files.length === 0 && page !== 0 ) {
            this.transitionTo( `/download/my-data?tab=${tab}&page=${page}sort=${sortType}`)
        }

        return RSVP.hash({
            files: files.filter( it => it),
            tab: tab,
            page: page,
            sort: sortType,
            count: files.meta.count
        })
    }
}
