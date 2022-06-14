
import { hostName } from "../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"


export default class PhDataSource {
    constructor(id, parent) {
        this.id = id
		this.parent = parent
        this.store = new JsonApiDataStore()
        this.resetData()
        this.debugToken = "e4da3ad093da0c4aa80b752310f333af76f35c2ae10de7ea517e028dcdd858ba"
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
                        ctype: "Sort",
                        expressions: JSON.stringify({
                            "params": {
                                "preFilter": {
                                    "distinct": false,
                                    "enabled": true,
                                    "expression": ""
                                },
                                "orders": [],
                                "denseRank": false,
                                "rank": false,
                                "rowNumber": false,
                                "computedColumns": [
									{
										"expr": "",
										"name": "",
										"type": "int"
									}
								]
                            }
                        }),
                        "expressions-value": "JSON",
                        "group-index": "0",
                        "group-name": "",
                        id: [projectId, jobName, "1"].join("_"),
                        index: "1",
                        runtime : "sort",
                        "step-name": "sort"
                    }
                } else {
                    that.step = data[0]
                }
                that.isReady = true
            })
    }

    buildDsMetaQuery(projectId, dsId) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "dataset",
            "conditions": {
                "projectId": ["=", projectId],
                "id": ["=", dsId]
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

    refreshMateData(projectId, dsId) {
        const that = this
        this.buildDsMetaQuery(projectId, dsId)
            .then((response) => response.json())
            .then((response) => {
                // that.currentPageToken = response.meta.start_key
                that.store.sync(response)
                const data = that.store.findAll("datasets")
                that.dataset = data[0]
                that.dataset.schema = JSON.parse(that.dataset["schema"])
                if (that.dataset.schema.length === 0) {
                    that.hasNoSchema = true
                } else {
                    that.isMetaReady = true
                }
            })
    }

    buildSaveQuery(projectId, jobName, param) {
		const steps = [{
			pjName: this.step["pj-name"],
			stepId: this.step["step-id"],
			ctype: this.step["ctype"],
			expressions: {
				"type": "sort",
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
			callback: "saveSort",
			element: this,
			param: {
				name: "saveSort",
				projectId: this.parent.projectId,
				projectName: this.parent.projectName,
				stepsArr: steps
			}
		}
		this.parent.$emit('event', event)
        // @wodelu 这里改成code gen 逻辑
        // const url = `${hostName}/phdydatasource/put_item`
        // const accessToken = this.getCookie( "access_token" ) || this.debugToken
        // let body = {
        //     table: "step",
        //     item: {
        //         pjName: this.step["pj-name"],
        //         stepId: this.step["step-id"],
        //         ctype: this.step["ctype"],
        //         expressions: JSON.stringify({ "params": param }),
        //         expressionsValue: this.step["expressions-value"],
        //         groupIndex: this.step["group-index"],
        //         groupName: this.step["group-name"],
        //         id: this.step["id"],
        //         index: this.step["index"],
        //         runtime : this.step["runtime"],
        //         stepName: this.step["step-name"]
        //     }
        // }

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

    saveAndGenCode(projectId, jobName, parame) {
        this.buildSaveQuery(projectId, jobName, parame)
            // .then((response) => response.json())
            // .then((response) => {
            //     console.log(response)
            // })
    }
}
