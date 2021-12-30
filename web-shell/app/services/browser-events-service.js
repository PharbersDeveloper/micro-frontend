import Service from "@ember/service"
import { inject as service } from "@ember/service"
// import fetch from 'fetch'
import { tracked } from "@glimmer/tracking"
import { action } from "@ember/object"

export default class BrowserEventsServiceService extends Service {
	@tracked param
	@tracked routeName
	@service router

	// 注册浏览器监听事件
	registerListener(route) {
		let that = this
		// eslint-disable-next-line no-undef
		$(function(){
			that.param = this.location.href.split("?")[1]
			that.routeName = `/${route}?`
			//回退
			if (window.history && window.history.pushState) {
				history.pushState(null, null, document.URL);

				window.addEventListener("popstate", that.popstateFun, false);
			}
			//关闭&刷新（页面有变动或距上次刷新间隔超过5s时生效）
			window.onbeforeunload=function(e){
				return false
			}
			//文档加载完成后立即触发
			window.onload = function(){
				// 刷新回到指定页面
				that.router.transitionTo(`${that.routeName}${that.param}`)
			}
		})
	}

	@action
	popstateFun() {
		let that = this
		let sel = confirm("您还没有保存更改，确认返回吗?")
		if (sel) {
			window.removeEventListener("popstate", that.popstateFun)
			that.router.transitionTo(`${that.routeName}${that.param}`)
		} else {
			history.pushState(null, null, document.URL)
		}
	}
	//清除浏览器监听事件
	clearListener() {
		window.onbeforeunload = undefined
		window.removeEventListener("popstate", this.popstateFun)
	}
}
