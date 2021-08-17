import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import RSVP from 'rsvp';

export default class DownloadDataDirectoryTableRoute extends Route {
	@service store
    @service cookies

	queryParams = {
		database: {
			refreshModel: true
		},
		page: {
			refreshModel: true
		}
    }

	async model( params ) {
		const limit =50
		let page = parseInt( params.page, 10 )
        if ( isNaN( page ) ) {
			page = 0
		}
		let tables = await this.store.query( "table", { "filter[database]": params.database, "page[limit]": limit, "page[offset]": page * limit,} )
		let name = params.database
        return RSVP.hash({
			tables: tables.filter( it => it),
			name: name
        })
    }
}
