import Service from "@ember/service"
import ENV from "web-shell/config/environment"
import Iot from "../lib/iot/PhIot"

export default class ExecutionStatusService extends Service {
	endpoint = ENV.APP.AWS_IOT_ENDPOINT
	aws_region = ENV.APP.AWS_REGION
	aws_access_id = ENV.APP.AWS_ACCESS_KEY
	aws_secret_key = ENV.APP.AWS_SECRET_KEY
	mqtt_type = ENV.APP.MQTT_TYPE
	timeout = ENV.APP.OBSERVER_TIME_OUT
	startOb = false

	action = []
	iotInstance = [] // 测试重点
	destroyQueue = [] // 测试重点

	functions = {
		iot: async (item, topic) => {
			const hisIot = this.iotInstance.find((iot) => iot.topic == topic)
			if (hisIot) {
				this.destroyQueue.push(hisIot.topic)
			}
			const iotConfig = {
				type: this.mqtt_type,
				topic: item.topic,
				client_id: item.ownerId,
				endpoint: this.endpoint,
				aws_region: this.aws_region,
				aws_access_id: this.aws_access_id,
				aws_secret_key: this.aws_secret_key,
				timeout: item.timeout || this.timeout,
				parameter: item
			}
			const iotIns = Iot.PhIot.newInstance(
				iotConfig,
				item.callBack,
				this.destroyQueue
			)
			this.iotInstance.push({
				topic: item.topic,
				ins: iotIns
			})
			await iotIns.connect()
		}
	}

	defineAction({
		type,
		id,
		projectId,
		ownerId,
		callBack,
		timeout = this.timeout
	} = {}) {
		const topic = `${projectId}/${ownerId}/${id}`
		console.warn("Topic =====> ", topic)
		if (!this.action.find((item) => item.topic == topic)) {
			const item = {
				type: type,
				topic: topic,
				id: id,
				projectId: projectId,
				ownerId: ownerId,
				timeout: timeout,
				callBack: callBack
			}
			this.action.push(item)
			this.functions[item.type](item, topic)
		} else {
			console.warn("重复定义操作, Topic ===>  " + topic)
		}
		if (!this.startOb) {
			this.__observer()
		}
	}

	__unregister(topic) {
		this.action = this.action.filter((item) => item.topic != topic)
		const iot = this.iotInstance.find((item) => item.topic == topic)
		this.iotInstance = this.iotInstance.filter(
			(item) => item.topic != topic
		)
		if (iot) {
			iot.ins.disconnect()
		}
	}

	__destroyQueue() {
		setInterval(() => {
			const topic = this.destroyQueue.shift()
			if (topic) {
				this.__unregister(topic)
			}
		}, 1000 * 1)
	}

	__observer() {
		this.startOb = true
		this.__destroyQueue()
		// setInterval(() => {
		//     if (this.action.length > 0) {
		//         this.action.forEach(async (item, index) => {
		//             this.functions[item.type](item)
		//         })
		//     } else {
		//         console.log("notice observer")
		//     }
		// }, 500 * 1)
	}
}
