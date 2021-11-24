import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import ENV from 'bpcatelogpage/config/environment';

export default class AnalyzeRoute extends Route {
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
		this.loadingService.loading.style.display = 'flex'
		let that = this
		var popstateFun = null
		$(function(){
			//后退按钮
			if (window.history && window.history.pushState) {
				popstateFun = function(e){
					let sel = confirm("您还没有保存更改，确认返回吗?")
					if(sel) {
						window.removeEventListener("popstate",popstateFun);
						let uriParam = this.location.href.split("?")[1]
						that.transitionTo('/dataset-lst?' + uriParam);
					} else {
						history.pushState(null, null, document.URL);
					}
				}
				history.pushState(null, null, document.URL);
				window.addEventListener("popstate",popstateFun,false);
			}
			//关闭
			window.onbeforeunload=function(e){
				return false
			}
			//刷新
			window.onload = function(){
				console.log("onload")
				let uriParam = this.location.href.split("?")[1]
				that.transitionTo('/dataset-lst?' + uriParam);
			}			
		});
	}
	queryParams = {
		projectName: {
			refreshModel: true
		},
		projectId: {
			refreshModel: true
		},
		datasetId: {
			refreshModel: true
		},
		datasetName: {
			refreshModel: true
		}
    }
	async model(params) {
		let targetDataset = await this.store.peekRecord('dataset', params.datasetId)
		let targetSchema = JSON.parse(targetDataset.schema)
		let schemaArr = []
		targetSchema.forEach(item => {
			schemaArr.push(item.des)
		})

		this.afterModel = function() {
			if(this.loadingService.afterLoading){
				this.loadingService.loading.style.display = 'none'
			}
		}
		return RSVP.hash( {
			projectName: params.projectName,
			projectId: params.projectId,
			schemaArr: schemaArr,
			datasetName: params.datasetName,
			database: 'default',
			_isVue: true
		} )
	}
}
