
import { staticFilePath, hostName } from "../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"

export default class PhContainerDataSource {
    constructor(id) {
        this.id = id
        this.debugToken = "113c407aa539686fa2737a99a05e37ee7bda129ef5bfa8b455f4d44e5ed72151"
        this.currentPageToken = ""
        this.stepsCount = 20
        this.data = []
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

    queryLogs(ele) {
        const logsUrl = `${hostName}/phquerylogfile`
        const accessToken = ele.getCookie( "access_token" ) || this.debugToken
        let logsBody = {
            "projectId": this.projectId,
            "jobIndex": ele["executionItem"]["job-index"]
        }
        let logsOptions = {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "accept": "application/json"
            },
            body: JSON.stringify(logsBody)
        }
        return fetch(logsUrl, logsOptions)
    }

    buildLogsQuery(ele) {
        const that = this
        ele.datasource.queryLogs(ele)
            .then((response) => response.json())
            .then((response) => {
                if(response.status === 1) {
                    alert("数据暂未生成，请刷新重试！")
                } else if (response.status === 0) {
                    window.location.open("http://localhost:8080/executions?projectId=ggjpDje0HUC2JW")
                }
            })
    }
}
