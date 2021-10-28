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
		let that = this
		let type = 'scan' //scan, query
		let body = ''
		if(type == 'scan') {
			// body = {"table": "execution","conditions": {"smId": "8jhCNXk5PZaO0UcZCFOz"},"limit": 10,"start_key": {}}
			body = {"table": "action","conditions": {"projectId": "xx1ioq"},"limit": 2,"start_key": {}}
		} else {
			body = {"table": "step","conditions": {"id": "9_sk14milngeAuk"},"limit": 10,"start_key": {}}
		}
		let url = "https://apiv2.pharbers.com/phdydatasource/" + type
		let options = {
			method: "POST",
			headers: {
				"authorization": this.cookies.read( "access_token" ),
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				"accept": "application/json, text/javascript, */*; q=0.01"
			},
			body: JSON.stringify(body)
		}
		let projects = this.store.query( "project", {"filter[owner]":this.cookies.read('account_id')})
		let peekExecutions = this.store.peekAll("execution").filter(it => it)
		let peekStep = this.store.peekAll("execution").filter(it => it)
		let results = []
		if(peekExecutions.length < 1) {
			let executions = fetch(url, options).then(res => res.json())
			results = await Promise.all([projects, executions])
			results[1].data.forEach(ele => {
				that.store.createRecord('execution', {
					type: ele.type,
					id: ele.id,
					input: ele.attributes.input, //项目名称,如max提数
					endTime: ele.attributes.endTime,
					owner: ele.attributes.owner,
					smId: ele.attributes.smId,
					startTime: ele.attributes.startTime,
					state: ele.attributes.state,
					steps: ele.attributes.steps
				})
			})
		} else {
			results = await Promise.all([projects])
		}
		
		//菜单栏个人信息
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