
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
        dns.forEach(x => { this.model.push(new PhStatusModel(x.id, 0, this.guid(), x)) })
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
                    const tmp = that.model.find(x => x.resourceId === x.id)
                    if (tmp && tmp.status !== 0) {
                        tmp.status = x.status
                        tmp.switch = x.status === 0 || x.status === 4
                        tmp.editable = x.status === 0 || x.status === 2
                        tmp.traceId = x.traceId
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
            "owner": this.getCookie("account_id"),
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
        model.editable = false
        const that = this
        this.buildStartQuery(tenantId, model)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                console.log(model)
                that.parent.dealResourceStart(model, this.resourceStartCallback)
            })
    }

    resourceStartCallback(payload) {
        console.log(payload)
    }

    resourceStopCallback(payload) {
        console.log(payload)
    }

    buildStopQuery(tenantId, model) {
        const url = `${hostName}/phjupyterstoptrigger`
        const accessToken = this.getCookie("access_token")
        // const traceId = this.getCookie("jupyterTraceId")
        let body = {
            "tenantId": tenantId,
            "traceId": model.traceId,
            "owner": this.getCookie("account_id"),
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
        model.editable = false
        const that = this
        this.buildStopQuery(tenantId, model)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                console.log(model)
                that.parent.dealResourceStop(model, this.resourceStopCallback)
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
