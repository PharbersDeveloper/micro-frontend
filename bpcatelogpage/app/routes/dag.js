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
		//显示数量
		let flow = projectDetail.belongsTo('flow').id()
		let analysis = projectDetail.belongsTo('analysis').id()
		let datasets = projectDetail.hasMany('datasets').ids()
		let models = projectDetail.hasMany('models').ids()
		let notebooks = projectDetail.hasMany('notebooks').ids()
		let dashBoards = projectDetail.hasMany('dashBoards').ids()
		let wiki = projectDetail.hasMany('wikis').ids()
		if(flow && flow != '') {
			numShow.flow = 1
		} else {
			numShow.flow = 0
		}
		numShow.dataset = datasets ? datasets.length : 0
		numShow.analysis = analysis ? analysis.length : 0
		numShow.model = models ? models.length : 0
		numShow.notebook = notebooks ? notebooks.length : 0
		numShow.dashBoard = dashBoards ? dashBoards.length : 0
		numShow.wiki = wiki ? wiki.length : 0
        // let executions = this.store.query( "execution", { "filter[projectExecution]": params.project_id, "page[limit]": limit, "page[offset]": page * limit} )
		// await Promise.all([dagDetail,executions])


		// let executionsIdArr = dagDetail.hasMany('executions').ids()
		// let ids = [
		// 	...new Set(executionsIdArr.reduce((acc, val) => acc.concat(val), [])),
		// ];
		// let executions = await this.store.query('execution', { 'ids[]': ids });
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
