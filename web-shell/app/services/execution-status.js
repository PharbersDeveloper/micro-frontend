import Service from '@ember/service';
import ENV from "web-shell/config/environment";
import { inject as service } from "@ember/service"
import fetch from "fetch"
import Iot from '../lib/iot/PhIot';


export default class ExecutionStatusService extends Service {

    @service cookies

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
        "iot": async (item) => {
            const topic = `${item.projectId}/${item.ownerId}`
            const iotId = this.iotInstance.find((iot) => iot.id == item.id)
            if (!iotId) {
                const iotTopic = this.iotInstance.find((iot) => iot.topic == topic)
                if (iotTopic) {
                    this.destroyQueue.push(iotTopic.id)
                }
                const iotConfig = {
                    id: item.id,
                    type: this.mqtt_type,
                    topic: topic,
                    client_id: item.ownerId,
                    endpoint: this.endpoint,
                    aws_region: this.aws_region,
                    aws_access_id: this.aws_access_id,
                    aws_secret_key: this.aws_secret_key,
                    timeout: item.timeout || this.timeout,
                    parameter: item
                }
                const iot = Iot.PhIot.newInstance(iotConfig, item.callBack, this.destroyQueue)
                this.iotInstance.push({
                    id: item.id,
                    topic: topic,
                    ins: iot
                })
                await iot.connect()
            }
        },
        // "other": (item) => {
        //     const parameter = Object.assign({}, item)
        //     delete parameter.callBack
        //     item.callBack(parameter, this.destroyQueue)
        // },
        // "executionStatus": async (item) => {
        //     const url = "https://apiv2.pharbers.com/phdydatasource/query"
        //     const headers = {
        //         Authorization: that.cookies.read("access_token"),
        //         "Content-Type": "application/vnd.api+json",
        //         Accept: "application/vnd.api+json",
        //     }
        //     const body = {
        //         table: item.tableName,
        //         conditions: {
        //             "id": ["=", `${item.projectId}${item.ownerId}`],
        //             "date": ["<", `${new Date().getTime()}`]
        //         }
        //     }
        //     const response = await fetch(url, {
        //         method: "POST",
		// 			headers: headers,
		// 			body: JSON.stringify(body)
        //     })
        //     if (response) {
        //         this.__destroyQueue.push(item.id)
        //         item.callBack(response)
        //     }
        // }

    }

    defineAction(
        {   
            type,
            id,
            tableName,
            projectId,
            ownerId,
            callBack,
            timeout = this.timeout
        } = {}) { 
        if (!this.action.find(item => item.id == id)) {
            this.action.push({
                type: type,
                id: id,
                tableName: tableName,
                projectId: projectId,
                ownerId: ownerId,
                timeout: timeout,
                callBack: callBack,
            })
        } else {
            console.warn("id 重复")
        }
        if (!this.startOb) { 
            this.__observer()
        }
    }

    __unregister(id) {
        this.action = this.action.filter(item => item.id != id)
        const iot = this.iotInstance.find((item) => item.id == id)
        this.iotInstance = this.iotInstance.filter(item => item.id != id)
        if (iot) { 
            iot.ins.disconnect()
        }
    }

    __destroyQueue() {
        setInterval(() => {
            const id = this.destroyQueue.shift()
            if (id) {
                this.__unregister(id)
            }
        }, 1000)
    }

    __observer() {
        this.__destroyQueue();
        this.startOb = true;
        setInterval(() => {
            if (this.action.length > 0) {
                this.action.forEach(async (item, index) => {
                    this.functions[item.type](item)
                })
            } else {
                console.log("notice observer")
            }
        }, 1000 * 5)
    }
}
