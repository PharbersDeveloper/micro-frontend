import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import fetch, { Headers, Request, Response, AbortController } from 'fetch';
import RSVP from 'rsvp';

export default class MaxSaasImportRoute extends Route {
	@service store
    @service cookies
	queryParams = {
        ym: {
            refreshModel: true
        },
        provider: {
            refreshModel: true
        },
		projectId: {
            refreshModel: true
		}
    }
	async model( params ) {
        let assets = await this.store.query( "asset", { "filter[type]": "file", "filter[labels]": params.ym+','+params.provider } )
		let filterData = assets.filter( it => it)
		let userData = await this.store.peekRecord( "account", this.cookies.read('account_id') )
		let projectData = await this.store.findRecord( "project", params.projectId )
		let schemas = {}
		if(projectData.actions) {
			//获取源数据表头
			let actions = JSON.parse(projectData.actions).filter(it => it.jobCat == "upload")
			let message = actions[actions.length - 1].message
			let sheetName =  JSON.parse(message).sheet
			schemas = JSON.parse(message).schemas.filter(it => it.name == sheetName)[0]
		}
        return RSVP.hash({
			userData: userData,
			projectData: projectData,
            assets: filterData,
			schemas: schemas,
			fileName: filterData[0] ? filterData[0].name : '',
			targetNames: {"headers":["test1","test2","test3","test4","test5","test6"], "name": "sourceList"},
			_isVue: true
        })
    }
}
