
import { hostName } from "../../config/envConfig"
import PhStatusModel from "./status-model"

export default class PhDataSource {
    constructor(id, parent) {
        this.id = id
        this.status = {}
        this.debugToken = "01fd7265fb086fe622224fada621ce778b454ee862926426638502dcb9d4061b"
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
        this.model = dns.map(x => { return new PhStatusModel(x.id, 0, this.guid()) })
    }

    buildStatusQuery(tenantId, resourceIds) {
        console.log(tenantId)
        console.log(resourceIds)
        const url = `${hostName}/phjupyterboottrigger`
        const accessToken = this.getCookie("access_token")
        let body = {
            "tenantId": tenantId,
            "resouceIds": resourceIds
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
                console.log(that)
                console.log(response)
                response["data"].forEach(x => {
                    const tmp = this.model.find(x => x.resourceId === x.id)
                    if (tmp) {
                        tmp.status = x.status
                        tmp.traceId = x.traceId
                    }
                })
                this.isReady = true
                // that.parent.dealResourceStop(response, row)
            })
    }

    buildStartQuery(tenantId, model) {
        const url = `${hostName}/phjupyterboottrigger`
        const accessToken = this.getCookie("access_token")
        const traceId = this.guid()
        console.log(tenantId)
        let body = {
            "tenantId": tenantId,
            // "tenantId": "alfredtest",
            "traceId": traceId,
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
        const that = this
        this.buildStartQuery(tenantId, model)
            .then((response) => response.json())
            .then((response) => {
                that.parent.dealResourceStart(response, model)
            })
    }

    buildStopQuery(tenantId, model) {
        const url = `${hostName}/phjupyterstoptrigger`
        const accessToken = this.getCookie("access_token")
        const traceId = this.getCookie("jupyterTraceId")
        console.log(tenantId)
        let body = {
            "tenantId": tenantId,
            // "tenantId": "alfredtest",
            "traceId": traceId,
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
        const that = this
        this.buildStopQuery(tenantId, model)
            .then((response) => response.json())
            .then((response) => {
                that.parent.dealResourceStop(response, model)
            })
    }

    guid() {
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c == "x" ? r : (r & 0x3) | 0x8
                return v.toString(16)
            }
        )
    }
}
