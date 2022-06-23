
import { hostName } from "../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"


export default class PhDataSource {
    constructor(id, parent) {
        this.id = id
        this.store = new JsonApiDataStore()
        this.resetData()
        this.parent = parent
        this.debugToken = "ddeb79b7adc7ded85017991c05dd6a1618a92dec2e1ce0221ad4747ded97118d"
    }

    resetData() {
        this.store.reset()
        this.isReady = false
        this.isMetaReady = false
        this.hasNoSchema = false
        this.step = null
        this.dataset = null
    }

    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
        arr = document.cookie.match(reg)
        if (arr) return (arr[2])
        else return null
    }

    buildQuery(projectId, jobName) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "step",
            "conditions": {
                // "pjName": ["=", this.projectId + "_" + this.jobName]
                "pjName": ["=", projectId + "_" + jobName]
            },
            "limit": 1,
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

    refreshData(projectId, jobName) {
        const that = this
        this.buildQuery(projectId, jobName)
            .then((response) => response.json())
            .then((response) => {
                that.currentPageToken = response.meta.start_key
                that.store.sync(response)
                const data = that.store.findAll("steps").sort((l, r) => l["index"] - r["index"])
                if (data.length === 0) {
                    that.step = {
                        "pj-name": [projectId, jobName].join("_"),
                        "step-id": "1",
                        ctype: "Pivot",
                        expressions: JSON.stringify({
                            "params": {
                                "preFilter": {
                                    "distinct": true,
                                    "enabled": true,
                                    "expr": ""
                                },
                                "computedColumns":  [],
                                "identifiers": [],
                                "pivot": {
                                    "globalCount": false,
                                    "keyColumns": [],
                                    "pivotedColumnType": "all",
                                    "topnLimit": 0,
                                    "minOccLimit": 0,
                                    "explicitValues": [],
                                    "valueColumns": []
                                },
                                "otherColumns": []
                            }
                        }),
                        "expressions-value": "JSON",
                        "group-index": "0",
                        "group-name": "",
                        id: [projectId, jobName].join("_"),
                        index: "1",
                        runtime : "pivot",
                        "step-name": "pivot"
                    }
                } else {
                    that.step = data[0]
                }
                that.isReady = true
            })
    }

    // buildDsMetaQuery(projectId, dsId) {
    //     const url = `${hostName}/phdydatasource/query`
    //     const accessToken = this.getCookie( "access_token" ) || this.debugToken
    //     let body = {
    //         "table": "dataset",
    //         "conditions": {
    //             "projectId": ["=", projectId],
    //             "id": ["=", dsId]
    //         },
    //         "limit": 1,
    //         "start_key": {}
    //     }

    //     let options = {
    //         method: "POST",
    //         headers: {
    //             "Authorization": accessToken,
    //             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //             "accept": "application/json"
    //         },
    //         body: JSON.stringify(body)
    //     }
    //     return fetch(url, options)
    // }

    // refreshMateData(projectId, dsId) {
    //     const that = this
    //     this.buildDsMetaQuery(projectId, dsId)
    //         .then((response) => response.json())
    //         .then((response) => {
    //             // that.currentPageToken = response.meta.start_key
    //             that.store.sync(response)
    //             const data = that.store.findAll("datasets")
    //             that.dataset = data[0]
    //             that.dataset.schema = JSON.parse(that.dataset["schema"])
    //             if (that.dataset.schema.length === 0) {
    //                 that.hasNoSchema = true
    //             } else {
    //                 that.isMetaReady = true
    //             }
    //         })
    // }

    refreshDataset(projectId, dsId) {
        const that = this
        this.buildDatasetQuery(projectId)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                that.store.sync(response)
                const data = that.store.findAll("datasets")
                that.parent.datasetArray = data
                that.dataset = data.filter(it => it.id === dsId)[0]
                that.dataset.schema = JSON.parse(that.dataset["schema"])
                if (that.dataset.schema.length === 0) {
                    that.hasNoSchema = true
                } else {
                    that.isMetaReady = true
                }
            })
    }

    buildDatasetQuery(projectId) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "dataset",
            "conditions": {
                "projectId": ["=", projectId]
            },
            index_name: "dataset-projectId-name-index",
            "limit": 1000,
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

    refreshInOut(projectId, jobName) {
        const that = this
        this.buildInOutQuery(projectId, jobName)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                that.parent.inArray = response.input
                that.parent.outArray = response.output
            })
    }

    buildInOutQuery(projectId, jobName) {
        const url = `${hostName}/phcheckinout`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "name": jobName,
            "projectId": projectId
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

    buildSaveQuery(projectId, jobName, param) {
        const steps = [{
            pjName: this.step["pj-name"],
            stepId: this.step["step-id"],
            ctype: this.step["ctype"],
            expressions: {
                "type": "topn",
                "code": "pyspark",
                "params": param
            },
            expressionsValue: this.step["expressions-value"],
            groupIndex: this.step["group-index"],
            groupName: this.step["group-name"],
            id: this.step["id"],
            index: this.step["index"],
            runtime : this.step["runtime"],
            stepName: this.step["step-name"]
        }]
        const event = new Event("event")
        event.args = {
            callback: "saveTopn",
            element: this,
            param: {
                name: "saveTopn",
                projectId: this.parent.projectId,
                projectName: this.parent.projectName,
                stepsArr: steps
            }
        }
        this.parent.$emit('event', event)
    }

    saveAndGenCode(projectId, jobName, parame) {
        this.buildSaveQuery(projectId, jobName, parame)
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
