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
		//文件列表显示
		let assets = this.store.query("jobLog", { "filter[provider]": params.provider, "filter[time]": time, "filter[jobDesc]": "SUCCEEDED", "filter[jobCat]": "upload"})
		// 文件列表状态显示
		let mapperAssets = this.store.query("jobLog", { "filter[provider]": params.provider, "filter[time]": time, "filter[jobCat]": "mapper"})
		let userData = this.store.peekRecord( "account", this.cookies.read('account_id') )
		// datacource
		let stateUrl = "https://api.pharbers.com/phdatasource"
		let options = {
			method: "GET",
			mode: "cors",
			headers: {
				"Authorization": this.cookies.read( "access_token" ),
				"Content-Type": "application/vnd.api+json",
				"Accept": "application/vnd.api+json",
			}
		}
		let datasource = await fetch(stateUrl, options).then(res=>res.json())
		await Promise.all([userData, assets, mapperAssets, datasource])
		let filterData = assets.filter( it => it)
		let jobLogs = await this.store.query("jobLog", { "filter[provider]": params.provider, "filter[version]": filterData[0] ? filterData[0].version : '', "filter[jobCat]": "mapper"})
		//excel表格数据
		let schemas = {}
		if(filterData[0] && filterData[0].message) {
			//获取源数据表头
			let message = JSON.parse(filterData[0].message)
			let sheetName =  message.sheet
			schemas = message.schemas.filter(it => it.name == sheetName)[0]
		}
        return RSVP.hash({
			userData: userData,
			jobLogs: jobLogs.filter( it => it), //mapper数据
            assets: filterData,
			mapperAssets: mapperAssets.filter( it => it),
			schemas: schemas,
			fileName: filterData[0] ? filterData[0].name : '',
			sourceData: JSON.parse(datasource.body).slice(0,5),
			targetNames: {"headers":["pack_id","mole_name_en","mole_name_ch","prod_desc","prod_name_ch", "corp_name_ch", "mnf_name_ch", "dosage", "spec", "pack", "atc4_code"], "name": "sourceList"},
			_isVue: true
        })
    }
}
