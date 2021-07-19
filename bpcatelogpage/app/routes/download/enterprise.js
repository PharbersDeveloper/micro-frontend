import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import RSVP from 'rsvp';

export default class DownloadEnterpriseRoute extends Route {
    @service store
    @service cookies
    @service ajax

	async model() {
		const applicationAdapter = this.get( "store" ).adapterFor( "application" )
		const curReportId = "539ff8c7-939e-4045-97d1-dd98f5f870bd"
        const curGroupId = "75f38933-4c5b-428c-91ee-b7be6befdef5"
		
        applicationAdapter.set( "pbiToken", 1 )
		applicationAdapter.set( "powerBITokenQuery", {
			"rid": curReportId,
			"gid": curGroupId
		} )

		const urlHeader = applicationAdapter.get( "headers" )
        const tokenURL = "https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn/v0/pbi/token?"
                        + "rid=" + curReportId
                        + "&gid=" + curGroupId
        // const powerBItoken = await this.ajax.request(tokenURL, {
        //     urlHeader
        // })

		// TODO
        applicationAdapter.set( "pbiToken", 0 )
        return RSVP.hash( {
			curReportId:curReportId,
			curGroupId:curGroupId,
            // token: powerBItoken
        } )
	}
}
