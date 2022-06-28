
import { hostName } from "../../config/envConfig"
import PhStatusModel from "./status-model"

export default class PhDataSource {
    constructor(id, parent) {
        this.id = id
        this.status = {}
        this.debugToken = "dfdf526d4d9d56b4ef30f4d6b344158aec3726e2dd65b9587e732c7b7efcd8a4"
        this.isReady = false
        this.parent = parent
        this.model = []
    }

    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
        arr = document.cookie.match(reg)
        if (arr) return (arr[2])
        else return null
    }

    refreshPlaceholders(dns) {
		let that = this
        dns.forEach(x => { 
			let statusModel =  new PhStatusModel(x.id, 0, that.guid(), x)
			that.model.push(statusModel) 
		})
    }

    buildStatusQuery(tenantId, resourceIds) {
        console.log(tenantId)
        console.log(resourceIds)
        const url = `${hostName}/phjupyterstatus`
        const accessToken = this.getCookie("access_token")
        let body = {
            "tenantId": tenantId,
            "resourceIds": resourceIds
        }
        let options = {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "accept": "application/json"
            },
            body: JSON.stringify(body)
        }
        return fetch(url, options)
    }

    refreshStatus(tenantId, resourceIds) {
        const that = this
        this.buildStatusQuery(tenantId, resourceIds)
            .then((response) => response.json())
            .then((response) => {
                response["data"].forEach(x => {
                    if (x && x.status !== -99 && x.status !== 0) {
                        const tmp = that.model.find(it => it.resourceId === x.id)
                        tmp.status = x.status
                        tmp.switch = x.status === 1 || x.status === 2
                        tmp.editable = x.status === 0 || x.status === 2
                        tmp.traceId = x.traceId
                        tmp.resetMessage()
                    }
                })
                this.isReady = true
            })
    }

    buildStartQuery(tenantId, model) {
        const url = `${hostName}/phjupyterboottrigger`
        const accessToken = this.getCookie("access_token")
        // const traceId = this.guid()
        let body = {
            "tenantId": tenantId,
            "traceId": model.traceId,
            // "owner": this.getCookie("account_id"),
			owner: model.detail.owner,
            "showName":  decodeURI(
                decodeURI(
                    this.getCookie("user_name_show")
                )
            ),
            "resourceId": model.resourceId
        }
        let options = {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "accept": "application/json"
            },
            body: JSON.stringify(body)
        }
        return fetch(url, options)
    }

    resourceStart(tenantId, model) {
        const that = this
        this.buildStartQuery(tenantId, model)
            .then((response) => response.json())
            .then((response) => {
                if (response.status === "succeed") {
                    model.editable = false
                    model.status = 1
                    model.resetMessage()

                    that.parent.dealResourceStart(model, (param, payload) => {
                        console.log("resource start callback")
                        const { status } = JSON.parse(payload)
                        const tmp = that.model.find(x => x.traceId === param.id)

                        if (tmp) {
                            if (status === "started") {
                                tmp.status = 2
                            }
                            tmp.switch = tmp.status === 1 || tmp.status === 2
                            tmp.editable = tmp.status === 0 || tmp.status === 2
                            tmp.resetMessage()
                        }
                    })
                } else {
                    alert("启动失败")
                }
            })
    }

    buildStopQuery(tenantId, model) {
        const url = `${hostName}/phjupyterstoptrigger`
        const accessToken = this.getCookie("access_token")
        // const traceId = this.getCookie("jupyterTraceId")
        let body = {
            "tenantId": tenantId,
            "traceId": model.traceId,
            // "owner": this.getCookie("account_id"),
			owner: model.detail.owner,
            "showName":  decodeURI(
                decodeURI(
                    this.getCookie("user_name_show")
                )
            ),
            "resourceId": model.resourceId
        }
        let options = {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "accept": "application/json"
            },
            body: JSON.stringify(body)
        }
        return fetch(url, options)
    }

    resourceStop(tenantId, model) {
        this.buildStopQuery(tenantId, model)
            .then((response) => response.json())
            .then((response) => {
                if (response.status === "succeed") {
                    model.editable = false
                    const that = this
                    model.status = 4
                    model.resetMessage()

                    that.parent.dealResourceStop(model, (param, payload) => {
                        console.log("resource stop callback")
                        const { status } = JSON.parse(payload)
                        const tmp = that.model.find(x => x.traceId === param.id)

                        if (tmp) {
                            if (status === "stopped") {
                                tmp.status = 0
                            }
                            tmp.switch = tmp.status === 1 || tmp.status === 2
                            tmp.editable = tmp.status === 0 || tmp.status === 2
                            tmp.resetMessage()
                        }
                    })
                } else {
                    alert("停止失败")
                }
            })
    }

    guid() {
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c === "x" ? r : (r & 0x3) | 0x8
                return v.toString(16)
            }
        )
    }
}
