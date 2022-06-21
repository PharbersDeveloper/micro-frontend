
// import { hostName } from "../../config/envConfig"


export default class PhDataSource {
    constructor(id) {
        this.id = id
        this.status = {}
        this.debugToken = "956c2519cddd8c76a896b85018d89892440afc31b896546b21293cb5d306937f"
    }

    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
        arr = document.cookie.match(reg)
        if (arr) return (arr[2])
        else return null
    }

    buildStatusQuery(tenantId, resourceId) {
        console.log(tenantId)
        console.log(resourceId)
        // TODO: refreshStatus 逻辑
        // const url = `${hostName}/phdydatasource/put_item`
        // const accessToken = this.getCookie( "access_token" ) || this.debugToken
        // let body = {
        //     table: "step",
        //     item: {
        //         pjName: this.step["pj-name"],
        //         stepId: this.step["step-id"],
        //         ctype: this.step["ctype"],
        //         expressions: JSON.stringify({ "parmas": param }),
        //         expressionsValue: this.step["expressions-value"],
        //         groupIndex: this.step["group-index"],
        //         groupName: this.step["group-name"],
        //         id: this.step["id"],
        //         index: this.step["index"],
        //         runtime : this.step["runtime"],
        //         stepName: this.step["step-name"]
        //     }
        // }
        //
        // let options = {
        //     method: "POST",
        //     headers: {
        //         "Authorization": accessToken,
        //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        //         "accept": "application/json"
        //     },
        //     body: JSON.stringify(body)
        // }
        // return fetch(url, options)
    }

    refreshStatus(tenantId, resourceId) {
        this.buildStatusQuery(tenantId, resourceId)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
            })
    }
}
