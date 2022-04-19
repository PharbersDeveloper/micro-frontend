
import { staticFilePath, hostName } from "../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"

export default class PhContainerDataSource {
    constructor(id) {
        this.id = id
        this.debugToken = "259f327ae7af315e3b234b834321546c4c3973db79f4153dd0352dd2f6b02a84"
        this.currentPageToken = ""
        this.stepsCount = 20
        this.data = [{
            "project-id": "abcde",
            "jobindex": "alfred",
            "job-name": "alfredtest",
            "job-show-name": "jobShowName",
            "status": "failed",
            "start-at": 1650346033091,
            "end-at": 1650346096091
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
                that.currentPageToken = response.meta.start_key
                that.store.sync(response)
                // ele.needRefresh++
                that.data = that.store.findAll("executions")
            })
    }
}
