import Service from '@ember/service';
import { inject as service } from "@ember/service"
import fetch from 'fetch'
import { tracked } from '@glimmer/tracking'

export default class NoticeServiceService extends Service {
	@service cookies
	//被观察的对象，需要维持一个观察者对象的id列表（添加，删除，通知）
    @tracked subjectID = []
    @tracked subjectCallback = []

	register(tableName, id, callback, ele, sortid) {
		// 持续30s，调用unregister删除
		if(this.subjectID.indexOf(id) == -1) {
			this.subjectID.push(id)
			this.subjectCallback.push({
				ele: ele,
				callback: callback,
				tableName: tableName,
				date: new Date().getTime()
			})
		}
	}

	unregister(id) {
		//删除id和callback函数
		let index = this.subjectID.indexOf(id)
		this.subjectID.splice(index, 1)
		this.subjectCallback.splice(index, 1)
	}

	observer() {
		// 定义timer，5秒请求一次, 无限循环，id数组大于0调用register，无返回不进行处理
		//query notification, id数组大于0时请求数据，超过30秒删除id，用callback进行处理
		let that = this
       	setInterval(async function() {
			if(that.subjectID.length > 0) {
				let url = "https://apiv2.pharbers.com/phdydatasource/query"
				let headers = {
					"Authorization": that.cookies.read( "access_token" ),
					"Content-Type": "application/vnd.api+json",
					"Accept": "application/vnd.api+json",
				}
				let statusBody = {
					"table": "notification",
					"conditions": {
						"id": that.subjectID[0]
					},
					"limit": 10,
					"start_key": {}
				}
				let options = {
					method: "POST",
					headers: headers,
					body: JSON.stringify(statusBody)
				}
				fetch(url, options)
					.then(res => res.json())
					.then(response => {
						let index = that.subjectID.indexOf(response.data[0].id)
						let targetCallback = that.subjectCallback[index]
						//将消息分发给不同component处理
						targetCallback.callback(response, targetCallback.ele)
						// 返回结果即调用unregister
						that.unregister(response.data[0].id)
					}) 
			} else {
				console.log("notice observer")
			}
        }, 5 * 1000)
	}
}
