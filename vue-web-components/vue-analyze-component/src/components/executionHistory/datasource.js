
import { staticFilePath, hostName } from "../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"

export default class PhContainerDataSource {
    constructor(id) {
        this.id = id
        this.debugToken = "5f674a1058c5c0d8ee6b049f07d7d1832dc97ddac7cfe0c9fb6a2dd5430f155f"
        this.nextToken = ""
        this.stepsCount = 20
        this.data = [{
            projectId: "abcde",
            jobIndex: "alfred",
            jobName: "alfredtest",
            jobShowName: "jobShowName",
            status: "failed",
            startAt: 1600000000,
            endAt: 1700000000
        }]
        this.store = new JsonApiDataStore()
    }

    buildQuery(ele) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = ele.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "execution",
            "conditions": {
                "projectId": ["=", this.projectId]
            },
            "limit": this.stepsCount,
            "start_key": {}
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

    appendExecutionHistory(ele) {
        const that = this
        ele.datasource.buildQuery(ele)
            .then((response) => response.json())
            .then((response) => {
                that.store.sync(response)
                // ele.needRefresh++
                // that.data = that.store.findAll("execution")
            })
    }
}
