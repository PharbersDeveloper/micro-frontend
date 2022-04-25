
import { staticFilePath, hostName } from "../../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"

export default class PhStepsDyModel {
    constructor(id, projectId='ggjpDje0HUC2JW', jobName='demo_demo_developer_compute_q_out') {
        this.id = id
        this.projectId = projectId
        this.jobName = jobName
        this.stepsCount = 100
        this.currentPageToken = ""
        this.debugToken = "1b1a30df30fcaf0075fa7745b308cbcc97df92ee0ee46d3e2db60bc4deb5fd3a"
        this.data = []
        this.store = new JsonApiDataStore()
        this.isEdited = false
    }

    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    }

    buildQuery() {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "step",
            "conditions": {
                "pjName": ["=", this.projectId + "_" + this.jobName]
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

    appendData() {
        const that = this
        this.buildQuery()
            .then((response) => response.json())
            .then((response) => {
                that.currentPageToken = response.meta.start_key
                that.store.sync(response)
                that.data = that.store.findAll("steps").sort((l, r) => l["index"] - r["index"])
            })
    }

    refreshData() {
        this.data = []
        this.store.reset()
        this.appendData()
    }
}
