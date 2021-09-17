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
		let assets = await this.store.query("jobLog", { "filter[provider]": params.provider, "filter[time]": time, "filter[jobDesc]": "SUCCEEDED", "filter[jobCat]": "upload"})
		let filterData = assets.filter( it => it)
		let defaultFile = filterData ? filterData[0] : {}
		let defaultVersion = defaultFile.version
		let defaultMessage = JSON.parse(defaultFile.message)
		// 1. 请求文件列表第一条数据的schemas
		let schemaUrl = "https://api.pharbers.com/schemaexplorer"
		let reqBody = {
			"tempfile": defaultMessage.tempfile,
			"sheet": defaultMessage.sheet,
			"out_number": 100
		}
		let schemaOptions = {
			method: "POST",
			mode: "cors",
			headers: {
				"Authorization": this.cookies.read( "access_token" ),
				"Content-Type": "application/vnd.api+json",
				"Accept": "application/vnd.api+json",
			},
			body: JSON.stringify(reqBody)
		}
		let schemasData = fetch(schemaUrl, schemaOptions).then(res=>res.json())
		// 2. 请求mapper数据
		let defaultJobLog = this.store.query("jobLog", { "filter[provider]": params.provider, "filter[version]": defaultVersion, "filter[jobCat]": "mapper"})
		// 3. 文件列表状态显示
		let mapperAssets = this.store.query("jobLog", { "filter[provider]": params.provider, "filter[time]": time, "filter[jobCat]": "mapper"})
		await Promise.all([schemasData, defaultJobLog, mapperAssets])
		// 4. schemas默认数据处理
		let schemasResult = schemasData._result ? schemasData._result[0] : {}
		let schemas = schemasResult ? schemasResult.schema : []
		console.log("jobLogs",defaultJobLog.filter( it => it))
		console.log("mapperAssets",mapperAssets.filter( it => it))
        return RSVP.hash({
			jobLogs: defaultJobLog.filter( it => it), //mapper弹框数据
            assets: filterData, //文件列表
			mapperAssets: mapperAssets.filter( it => it), //列表状态
			schemas: schemas, //源数据表头
			fileName: filterData[0] ? filterData[0].name : '', //当前文件名称
			targetNames: ["pack_id","mole_name_en","mole_name_ch","prod_desc","prod_name_ch", "corp_name_ch", "mnf_name_ch", "dosage", "spec", "pack", "atc4_code"], //目标文件表头
			_isVue: true
        })
    }
}
