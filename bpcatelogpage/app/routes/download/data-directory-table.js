import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import RSVP from 'rsvp';

export default class DownloadDataDirectoryTableRoute extends Route {
	@service store
    @service cookies

	queryParams = {
		database: {
			refreshModel: true
		}
    }

	async model( params ) {
		let tables = await this.store.query( "table", { "filter[database]": params.database} )
		let name = params.database
        return RSVP.hash({
			tables: tables.filter( it => it),
			name: name
        })
    }
}
