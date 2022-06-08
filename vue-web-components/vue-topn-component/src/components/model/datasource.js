
import { hostName } from "../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"


export default class PhDataSource {
    constructor(id) {
        this.id = id
        this.store = new JsonApiDataStore()
        // this.currentPageToken = ""
        this.resetData()
        // this.isReady = false
        // this.isMetaReady = false
        // this.hasNoSchema = false
        // this.step = null
        // this.dataset = null
        this.debugToken = "08f0e5530dec4088ee76fbe5a452a7714834023ff75f16c7627ed17f842df5f1"
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
                that.step = data[0]
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
}
