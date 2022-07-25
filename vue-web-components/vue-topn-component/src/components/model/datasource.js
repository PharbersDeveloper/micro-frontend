
import { hostName } from "../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"


export default class PhDataSource {
    constructor(id, parent) {
        this.id = id
        this.store = new JsonApiDataStore()
        this.resetData()
		this.parent = parent
        this.debugToken = "27a68748c55abfadcab0a85e012b1c73f7380ed319cf734a6cb179d45b1ea24d"
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

    buildQuery(projectId, jobName, jobId) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "step",
            "conditions": {
                // "pjName": ["=", this.projectId + "_" + this.jobName]
                "pjName": ["=", projectId + "_" + jobId]
            },
            "limit": 1,
			"index_name": "id-index-index",
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

    refreshData(projectId, jobName, jobId) {
        const that = this
        this.buildQuery(projectId, jobName, jobId)
            .then((response) => response.json())
            .then((response) => {
                that.currentPageToken = response.meta.start_key
                that.store.sync(response)
                const data = that.store.findAll("steps").sort((l, r) => l["index"] - r["index"])
                if (data.length === 0) {
                    that.step = {
                        "pj-name": [projectId, jobName].join("_"),
                        "step-id": "1",
                        ctype: "TopN",
                        expressions: JSON.stringify({
                            "params": {
                                "firstRows": 0,
                                "lastRows": 0,
                                "keys": [],
                                "preFilter": {
                                    "distinct": false,
                                    "enabled": false,
                                    "expression": ""
                                },
                                "orders": [],
                                "denseRank": false,
                                "duplicateCount": false,
                                "rank": false,
                                "rowNumber": false,
                                "retrievedColumns": [],
                                "computedColumns": []
                            }
                        }),
                        "expressions-value": "JSON",
                        "group-index": "0",
                        "group-name": "",
                        id: [projectId, jobId].join("_"),
                        index: "1",
                        runtime : "topn",
                        "step-name": "topn"
                    }
                } else {
                    that.step = data[0]
                }
                that.isReady = true
            })
    }

	refreshDataset(projectId, dsId) {
        const that = this
        this.buildDatasetQuery(projectId)
            .then((response) => response.json())
            .then((response) => {
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
}
