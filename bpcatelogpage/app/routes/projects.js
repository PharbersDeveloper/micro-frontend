import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import ENV from 'bpcatelogpage/config/environment';

export default class ProjectsRoute extends Route {
	@service cookies
	@service ajax
    @service('loading') loadingService;
	@service store
	namespace = ENV.namespace

	beforeModel() {
		let cookies = this.get( "cookies" )

		if ( !cookies.read( "access_token" ) ) {
			this.transitionTo( "index" )
		}
		this.loadingService.loading.style.display = 'inline-block'
	}

	async model() {
		// fetch请求存到ember data
		// let aaa = await fetch("https://apiv2.pharbers.com/phplatform/projects", {
		// 	method: "GET",
		// 	headers: {
		// 		"authorization": '32aefb89ab21aafee6ecbc9201b846742809b6d506f1b4dfd4e1f1e9c7507776'
		// 	}
		// })
		// .then(res => { 
		// 	return res.json()
		// })
		// let that = this
		// aaa.data.forEach(ele => {
		// 	that.store.createRecord('project', {
		// 		id: ele.id,
		// 		name: ele.attributes.name, //项目名称,如max提数
		// 		provider: ele.attributes.provider,
		// 		owner: ele.attributes.owner,
		// 		type: ele.attributes.type,
		// 		created: ele.attributes.created,
		// 	})
		// });
		let options = {
			method: "POST",
			headers: {
				"authorization": this.cookies.read( "access_token" ),
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				"accept": "application/json, text/javascript, */*; q=0.01"
			},
			body: JSON.stringify({"table": "execution","conditions": {"smId": "0iveStO4gzwMuyZx"},"limit": 10,"start_key": {}})
		}
		fetch("https://apiv2.pharbers.com/phdydatasource/scan", options).then(res => res.json()).then(ress => {
			console.log("resss", ress)
		})
		let projects = this.store.query( "project", {"filter[owner]":this.cookies.read('account_id')})
		await Promise.all([projects])
		let name_show, company_name_show
		if(this.cookies.read('account_id')) {
			name_show = decodeURI(this.cookies.read('user_name_show'))
			company_name_show = decodeURI(this.cookies.read('company_name_show'))
		}
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
		return RSVP.hash( {
			projects: projects.filter( it => it),
			name_show: name_show,
			company_name_show: company_name_show,
			_isVue: true
		} )
	}
}