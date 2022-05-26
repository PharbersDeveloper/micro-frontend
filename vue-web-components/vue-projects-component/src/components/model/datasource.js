import { hostName } from '../../config/envConfig'

export default class PhProjectDatasource {
    constructor(id) {
        this.id = id
        this.debugToken = '6445aa0d7c3cc866c8501dc0df4b9ca1a181de0d0fa0015a99bdaf5588d79bc2'
        this.traceId = ""
        this.statusCode = 0
        this.status = "stoped"
        this.resetSwitch()
    }

    resetSwitch() {
        this.switch = this.statusCode === 1 || this.statusCode === 2
    }

    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr === document.cookie.match(reg))
            return (arr[2]);
        else
            return this.debugToken
    }

    buildQuery(tenantId) {
        const url = `${hostName}/tenantstatus`
        const accessToken = this.getCookie("access_token") || this.debugToken
        let body = {
            "tenantId": tenantId
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

    refreshStatus(tenantId) {
        const that = this
        this.buildQuery(tenantId)
            .then((response) => response.json())
            .then((response) => {
                that.traceId = response.traceId
                that.statusCode = response.status
                that.status = response.message
                that.resetSwitch()
            })
    }
}
