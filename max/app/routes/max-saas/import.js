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
		let time 
		if(params.ym) {
			let ym = params.ym.slice(0,4) + '/' + params.ym.slice(4) +'/01'
			time = new Date(ym).getTime()
		}
		//文件列表显示
		let assets = this.store.query("jobLog", { "filter[provider]": params.provider, "filter[time]": time, "filter[jobDesc]": "SUCCEEDED", "filter[jobCat]": "upload"})
		// 文件列表状态显示
		let mapperAssets = this.store.query("jobLog", { "filter[provider]": params.provider, "filter[time]": time, "filter[jobCat]": "mapper"})
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
		let datasource = fetch(stateUrl, options).then(res=>res.json())
		//schemas
		let schemaUrl = "https://api.pharbers.com/schemaexplorer"
		let schemaOptions = {
			method: "POST",
			mode: "cors",
			headers: {
				"Authorization": this.cookies.read( "access_token" ),
				"Content-Type": "application/vnd.api+json",
				"Accept": "application/vnd.api+json",
			},
			body:'{\n    \"tempfile\": \"29538509ce17b6648f6635cb50a86f9d.xlsx\",\n    \"sheet\": \"【辉致项目】2017-2018年6省\",\n    \"start_number\": 1,\n    \"out_number\": 10\n}'
		}
		let schemasData = fetch(schemaUrl, schemaOptions).then(res=>res.json())
		await Promise.all([assets,schemasData, mapperAssets, datasource])
		let filterData = assets.filter( it => it)
		//mapper数据
		let jobLogs = await this.store.query("jobLog", { "filter[provider]": params.provider, "filter[version]": filterData[0] ? filterData[0].version : '', "filter[jobCat]": "mapper"})
		//excel表格数据
		let schemas = {}
		if(filterData[0] && filterData[0].message) {
			//获取源数据表头
			let message = JSON.parse(filterData[0].message)
			let sheetName =  message.sheet
			let schemasResult = schemasData._result ? schemasData._result[0] : {}
			schemas = schemasResult.schema
		}
        return RSVP.hash({
			jobLogs: jobLogs.filter( it => it), //mapper弹框数据
            assets: filterData, //文件列表
			mapperAssets: mapperAssets.filter( it => it), //列表状态
			schemas: schemas, //源数据表头
			fileName: filterData[0] ? filterData[0].name : '', //当前文件名称
			sourceData: JSON.parse(datasource._result.body).slice(0,5), //目标文件数据
			targetNames: {"headers":["pack_id","mole_name_en","mole_name_ch","prod_desc","prod_name_ch", "corp_name_ch", "mnf_name_ch", "dosage", "spec", "pack", "atc4_code"], "name": "sourceList"}, //目标文件表头
			_isVue: true
        })
    }
}
