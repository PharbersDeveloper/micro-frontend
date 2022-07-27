
import { hostName } from "../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"

export default class PhDataSource {
    constructor(id, parent) {
        this.id = id
		this.parent = parent
        this.store = new JsonApiDataStore()
        this.resetData()
        this.debugToken = "956c2519cddd8c76a896b85018d89892440afc31b896546b21293cb5d306937f"
    }

    resetData() {
        this.store.reset()
        this.isReady = false
        this.isMetaReady = false
        this.hasNoSchema = false
        this.step = null
        this.datasets = []
    }

    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
        arr = document.cookie.match(reg)
        if (arr) return (arr[2])
        else return null
    }

    buildJobQuery(projectId, jobId) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "dagconf",
            "index_name": "dagconf-projectId-id-indexd",
            "conditions": {
                "projectId": ["=", projectId],
                "id": ["=", jobId],
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

    async queryJob(projectId, jobName) {
        const that = this
        await this.buildJobQuery(projectId, jobName)
            .then((response) => response.json())
            .then((response) => {
                // console.log(response)
                that.store.sync(response)
                const data = that.store.findAll("dag-confs")
                that.job = data[0]
                that.datasets = JSON.parse(that.job["inputs"])
            })
    }

    buildQuery(projectId, jobName, jobId) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "step",
            "conditions": {
				"id": ["=", projectId + "_" + jobId]
            },
			"index_name": "id-index-index",
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

    refreshData(projectId, jobName, jobId) {
        const that = this
        this.buildQuery(projectId, jobName, jobId)
            .then((response) => response.json())
            .then((response) => {
                that.currentPageToken = response.meta.start_key
                that.store.sync(response)
                const data = that.store.findAll("steps").sort((l, r) => l["index"] - r["index"])
                if (data.length === 0) {
                    const defaultPreFilter = this.datasets.map((x, i) => { return {
                        "ds": x,
						"index": i,
                        "preFilter": {
                            "distinct": false,
                            "enabled": true,
                            "expr": ""
                        }
                    }})
                    const defaultPreComputed = this.datasets.map((x, i) => { return {
                        "ds": x,
						"index": i,
                        "computedColumns": []
                    }})
                    const defaultJoin = [{
                        "datasets": this.datasets.map((x, i) => { return {
                            name: x,
                            index: i
                        }}),
                        "caseInsensitive": false,
                        "normalizeText": false,
                        "type": "LEFT",
                        "on": []
                    }]
                    const defaultSelectCols = this.datasets.map((x, i) => { return {
                        "ds": x,
						"index": i,
                        "prefix": "",
                        "type": "select",
                        "columns": []
                    }})

                    that.step = {
                        "pj-name": [projectId, jobName].join("_"),
                        "step-id": "1",
                        ctype: "Join",
                        expressions: JSON.stringify({
                            "params": {
                                "preFilters": defaultPreFilter,
                                "preJoinComputedColumns": defaultPreComputed,
                                "joins": defaultJoin,
                                "selectedColumns": defaultSelectCols,
                                "postJoinComputedColumns": [],
                                "postFilter": {
                                    "distinct": false,
                                    "enabled": false,
                                    "expr": ""
                                }
                            }
                        }),
                        "expressions-value": "JSON",
                        "group-index": "0",
                        "group-name": "",
						id: [projectId, jobId].join("_"),
                        index: "1",
                        runtime : "join",
                        "step-name": "join"
                    }
                } else {
                    that.step = data[0]
                }
                that.isReady = true
            })
    }

    buildDsMetaQuery(projectId, dsName) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "dataset",
            "index_name": "dataset-projectId-name-index",
            "conditions": {
                "projectId": ["=", projectId],
                "name": ["=", dsName]
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

    async refreshMateData(projectId, dsNames) {
        const that = this
        const ps = dsNames.map(x => this.buildDsMetaQuery(projectId, x)
            .then((response) => response.json())
            .then((response) => {
                that.store.sync(response)
            }))

        Promise.all(ps).then(() => {
            const data = that.store.findAll("datasets")
            that.schema = {}
            data.forEach(ds => {
                that.schema[ds["name"]] = JSON.parse(ds["schema"])
            })

            Object.keys(that.schema).forEach(x => that.hasNoSchema | that.schema[x].length === 0)

            if (Object.keys(that.schema).length !== dsNames.length) {
                that.hasNoSchema = true
            } else {
                that.isMetaReady = true
            }

			that.refreshDataset(projectId)
        })
    }

	refreshDataset(projectId) {
        const that = this
        this.buildDatasetQuery(projectId)
            .then((response) => response.json())
            .then((response) => {
				console.log(response)
				that.store.sync(response)
                const data = that.store.findAll("datasets")
				that.parent.datasetArray = data
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

    buildSaveQuery(projectId, jobName, param, changeDs) {
		const steps = [{
			pjName: this.step["pj-name"],
			stepId: this.step["step-id"],
			ctype: this.step["ctype"],
			expressions: {
				"type": "join",
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
			callback: "saveJoin",
			element: this,
			param: {
				name: "saveJoin",
				changeDs: changeDs,
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
