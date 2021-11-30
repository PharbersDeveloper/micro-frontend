import Service from '@ember/service';
import { inject as service } from "@ember/service"
import fetch from 'fetch'
import { tracked } from '@glimmer/tracking'

export default class BrowserEventsServiceService extends Service {
	// 注册浏览器监听事件
	registerListener() {

	}

	clearListener() {
		history.pushState(null, null, document.URL);
		window.onbeforeunload = undefined
		window.removeEventListener()
	}
}
