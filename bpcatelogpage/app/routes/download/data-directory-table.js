import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import RSVP from 'rsvp';

export default class DownloadDataDirectoryTableRoute extends Route {
	@service store
    @service cookies

	queryParams = {
        tab: {
            refreshModel: true
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

       
        return RSVP.hash({
            tab: tab,
            page: page,
			allDate: {
				title: "data表单",
				files: [
					{
						name: "cpa_pha_mapping",
						database: "database",
						location: "s3://ph-platform/2020-11-11/etl/readable_files/...",
						time: "YYYY/MM/DD hh:mm"
					},
					{
						name: "cpa_pha_mapping",
						database: "database",
						location: "s3://ph-platform/2020-11-11/etl/readable_files/...",
						time: "YYYY/MM/DD hh:mm"
					}
				]
			}
        })
    }
}
