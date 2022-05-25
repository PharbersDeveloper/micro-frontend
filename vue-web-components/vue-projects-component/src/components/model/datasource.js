import { hostName } from '../../config/envConfig'

export default class PhProjectDatasource {
    constructor(id) {
        this.id = id
        this.debugToken = 'b7604b151b7afbd62548270f6a9076573bdf8524b97cc9a4be2fae367d3f8f25'
    }

    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr === document.cookie.match(reg))
            return (arr[2]);
        else
            return this.debugToken
    }

    buildQuery() {
        const url = `${hostName}/tenantstatus`
        const accessToken = this.getCookie("access_token") || this.debugToken
        let body = {
            "tenantId": "12345",
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

    refreshStatus() {

    }
}
