import Route from '@ember/routing/route';
import { inject as service } from "@ember/service"
import RSVP from 'rsvp';

export default class DagRoute extends Route {
	@service store
    @service cookies
    @service('loading') loadingService;
	async model( params ) {
		let numShow = {}
        let projectDetail = await this.store.findRecord( "project", params.project_id, {include: 'flow'})
		const url = "https://apiv2.pharbers.com/phgetnumber"
		const accessToken = this.cookies.read( "access_token" )
		let body = {
			"tableName": "dataset",
			"projectId": params.project_id
		}

		let options = {
			method: "POST",
			headers: {
				"Authorization": accessToken,
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				"accept": "application/json"
			},
			body: JSON.stringify(body)
		}
		const nums = await fetch(url, options).then(res=>res.json())
		//显示数量
		let flow = projectDetail.belongsTo('flow').id()
		let analysis = projectDetail.belongsTo('analysis').id()
		let models = projectDetail.hasMany('models').ids()
		let notebooks = projectDetail.hasMany('notebooks').ids()
		let dashBoards = projectDetail.hasMany('dashBoards').ids()
		let wiki = projectDetail.hasMany('wikis').ids()
		numShow.dataset = nums.dataset ? nums.dataset : 0
		numShow.flow = nums.dagconf ? nums.dagconf : 0
		numShow.analysis = analysis ? analysis.length : 0
		numShow.model = models ? models.length : 0
		numShow.notebook = notebooks ? notebooks.length : 0
		numShow.dashBoard = dashBoards ? dashBoards.length : 0
		numShow.wiki = wiki ? wiki.length : 0
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
        return RSVP.hash({
            projectDetail: projectDetail,
			numShow: numShow,
			_isVue: true
        })
    }
}
