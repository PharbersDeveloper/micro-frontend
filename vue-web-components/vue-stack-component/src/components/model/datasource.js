
import { hostName } from "../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"


export default class PhDataSource {
    constructor(id, parent) {
        this.id = id
		this.parent = parent
        this.store = new JsonApiDataStore()
        this.resetData()
        this.debugToken = "74c791b26de28fc7fb6731bd98c2336a0d60917c9b58f50838064b9c7076affe"
    }

    resetData() {
        this.store.reset()
        this.isReady = false
        this.isMetaReady = false
        this.hasNoSchema = false
        this.step = null
        this.datasets = null
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
                    const defaultPreFilter = this.datasets.map(x => { return {
                        "ds": x,
                        "preFilter": {
                            "distinct": false,
                            "enabled": true,
                            "expr": ""
                        }
                    }})
                    const defaultColumnMatches = this.datasets.map(x => { return {
                        "ds": x,
                        "columns": []
                    }})
                    const defaultOriginColumns = {
                        "enabled": false,
                        "columnName": "provider",
                        "originDatasets": this.datasets.map(x => { return {
                            "ds": x,
                            "value": x
                        }})
                    }

                    that.step = {
                        "pj-name": [projectId, jobName].join("_"),
                        "step-id": "1",
                        ctype: "Stack",
                        expressions: JSON.stringify({
                            "params": {
                                "preFilters": defaultPreFilter,
                                "selectedColumns": [],
                                "columnsMatches": defaultColumnMatches,
                                "originColumn": defaultOriginColumns,
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
                        id: [projectId, jobName, "1"].join("_"),
                        index: "1",
                        runtime : "stack",
                        "step-name": "stack"
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
