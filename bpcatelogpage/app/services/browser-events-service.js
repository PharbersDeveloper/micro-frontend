import Service from '@ember/service'
import { inject as service } from "@ember/service"
import fetch from 'fetch'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'


export default class BrowserEventsServiceService extends Service {
	@tracked param
	@tracked routeName
	@service router

	// 注册浏览器监听事件
	registerListener(route) {
		let that = this
		$(function(){
			that.param = this.location.href.split('?')[1]
			that.routeName = `/${route}?`
			//回退
			if (window.history && window.history.pushState) {
				history.pushState(null, null, document.URL);
				
				window.addEventListener("popstate", that.popstateFun, false);
			}
			//关闭
			window.onbeforeunload=function(e){
				return false
			}
			//刷新
			window.onload = function(){
                that.router.transitionTo( `${that.routeName}${that.param}` )
			}	
		});
	}

	@action
	popstateFun() {
		let that = this
		let sel = confirm("您还没有保存更改，确认返回吗?")
		if(sel) {
			window.removeEventListener("popstate", that.popstateFun);
			that.router.transitionTo( `${that.routeName}${that.param}` )
		} else {
			history.pushState(null, null, document.URL);
		}
	}
	//清除浏览器监听事件
	clearListener() {
		window.onbeforeunload = undefined
		window.removeEventListener("popstate",this.popstateFun)
	}
}
