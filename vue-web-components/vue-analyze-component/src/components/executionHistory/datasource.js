
import { staticFilePath, hostName } from "../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"

export default class PhContainerDataSource {
    constructor(id) {
        this.id = id
        this.debugToken = "118d038fddcc70ed5bb66365e7d0335022cf4e9dfab0c0cc1fe1f3e4310c82e1"
        this.currentPageToken = ""
        this.stepsCount = 20
        this.data = []
        this.store = new JsonApiDataStore()
        this.projectId = ""
        this.jobIndex = ''
        this.jobName = ''
        this.runnerId = ''
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
            "start_key": this.currentPageToken !== "" ? this.currentPageToken : {}
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
                if(that.currentPageToken === "") {
                    ele.hasMore = false
                }
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
            "jobIndex": this.jobIndex
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
                ele.dealBuildLogsQuery(response)
            })
    }

    queryFlow(ele) {
        const logsUrl = `${hostName}/phreadjsonfile`
        const accessToken = ele.getCookie( "access_token" ) || this.debugToken
        let phreadjsonfileBody = {
            "path": ele.executionTemplate.substring(0, ele.executionTemplate.length - 5)
        }
        let logsOptions = {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "accept": "application/json"
            },
            body: JSON.stringify(phreadjsonfileBody)
        }
        return fetch(logsUrl, logsOptions)
    }

    buildFlowQuery(ele) {
        const that = this
        ele.datasource.queryFlow(ele)
            .then((response) => response.json())
            .then((response) => {
                ele.dealBuildFlowQuery(response)
            })
    }

    queryExecution(ele) {
        const logsUrl = `${hostName}/phdydatasource/query`
        const accessToken = ele.getCookie( "access_token" ) || this.debugToken
        let queryExeBody = {}
        if(this.jobIndex) {
            queryExeBody = {
                "table": "execution",
                "conditions": {
                    "projectId": [
                        "=",
                        this.projectId
                    ],
                    "jobIndex": [
                        "=",
                        this.jobIndex
                    ]
                },
                "start_key": {}
            }
        } else {
            queryExeBody = {
                "table": "execution",
                "conditions": {
                    "runnerId": [
                        "=",
                        this.runnerId
                    ],
                    "jobName": [
                        "=",
                        this.jobName
                    ]
                },
                "index_name": "runnerId-jobName-index",
                "start_key": {}
            }
        }
        let queryExeOptions = {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "accept": "application/json"
            },
            body: JSON.stringify(queryExeBody)
        }
        return fetch(logsUrl, queryExeOptions)
    }

    buildExecutionQuery(ele) {
        const that = this
        ele.datasource.queryExecution(ele)
            .then((response) => response.json())
            .then((response) => {
                ele.dealBuildExecutionQuery(response)
            })
    }
}
