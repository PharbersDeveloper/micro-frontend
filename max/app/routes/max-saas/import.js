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
        // let assets = this.store.query( "asset", { "filter[type]": "file", "filter[labels]": params.ym+','+params.provider } )
		let time 
		if(params.ym) {
			let ym = params.ym.slice(0,4) + '/' + params.ym.slice(4) +'/01'
			time = new Date(ym).getTime()
		}
		let assets = this.store.query("jobLog", { "filter[provider]": params.provider, "filter[time]": time, "filter[jobDesc]": "SUCCEEDED", "filter[jobCat]": "upload"})
		let userData = this.store.peekRecord( "account", this.cookies.read('account_id') )
		let projectData = this.store.findRecord( "project", params.projectId )
		let resultArr = await Promise.all([userData, assets, projectData])
		let filterData = assets.filter( it => it)
		let projectDataPro = resultArr[2]
		let schemas = {}
		if(projectDataPro.actions) {
			//获取源数据表头
			let actions = JSON.parse(projectDataPro.actions).filter(it => it.jobCat == "upload")
			let message = actions[actions.length - 1].message
			let sheetName =  JSON.parse(message) ? JSON.parse(message).sheet : ''
			schemas = JSON.parse(message).schemas.filter(it => it.name == sheetName)[0]
		}
        return RSVP.hash({
			userData: userData,
			projectData: projectDataPro,
            assets: filterData,
			schemas: schemas,
			fileName: filterData[0] ? filterData[0].name : '',
			targetNames: {"headers":["test1","test2","test3","test4","test5","test6"], "name": "sourceList"},
			_isVue: true
        })
    }
}
