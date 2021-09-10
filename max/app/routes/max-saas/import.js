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
		let schemas = []
		let schemasName = []
		if(filterData[0]) {
			let fileName = filterData[0].labels.length > 0 ? filterData[0].labels[5] + '_' + filterData[0].labels[11].split('.')[0] + '_' + filterData[0].labels[9] : ''
			let options = {
				method: "GET",
				mode: "cors",
				headers: {
					"Authorization": this.cookies.read( "access_token" ),
					"Content-Type": "application/vnd.api+json",
					"Accept": "application/vnd.api+json",
				}
			}
			schemas = await fetch(encodeURI(`https://api.pharbers.com/phmax/findTableSchema?table=${fileName}`), options).then(res=>res.json())
			schemas.forEach(item => {
				if(item.Name) {
					schemasName.push(item.Name)
				}
			})
		}
        return RSVP.hash({
			userData: userData,
			projectData: projectData,
            assets: filterData,
			schemas: schemas.filter( it => it),
			schemasNames: schemasName, //源文件数组
			fileName: filterData[0] ? filterData[0].name : '',
			targetNames: [1,2,3,4,5,6],
			_isVue: true
        })
    }
}
