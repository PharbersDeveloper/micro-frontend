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
		$(function(){
			//后退按钮点击监听实现
			window.addEventListener("popstate",function(e){
				// console.log("popstate")
				// let sel = confirm("You have unsaved changes, are you sure you want to leave ?")
				// if(sel) {
				// 	let uriParam = this.location.href.split("?")[1]
				// 	this.location.href=this.location.origin + '/dataset-lst?' + uriParam
				// }
				// return false
				let uriParam = this.location.href.split("?")[1]
				this.location.href=this.location.origin + '/dataset-lst?' + uriParam
			},false);
			//关闭
			window.onbeforeunload=function(e){
				return false
			}
			//刷新
			window.onload = function(){
				console.log("onload")
				let uriParam = this.location.href.split("?")[1]
				this.location.href=this.location.origin + '/dataset-lst?' + uriParam
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
