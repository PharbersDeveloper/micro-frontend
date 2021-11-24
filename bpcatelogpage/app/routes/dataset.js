import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class DatasetRoute extends Route {
    @service('loading') loadingService;

	queryParams = {
		projectName: {
			refreshModel: true
		},
		projectId: {
			refreshModel: true
		}
    }

	beforeModel( params ) {
		this._super( ...arguments )
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
	async model(params) {
		this.afterModel = function() {
            if(this.loadingService.afterLoading){
                this.loadingService.loading.style.display = 'none'
            }
        }
		let datasets = await this.store.peekAll('dataset')
		return RSVP.hash( {
			projectName: params.projectName,
			projectId: params.projectId,
			datasetArr: datasets.filter(it => it.id != ''),
			_isVue: true
		} )
	}
}
