
import { staticFilePath, hostName } from "../../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"

export default class PhStepsDyModel {
    constructor(id, ele) {
        this.id = id
        this.flowVersion = "developer"
        this.projectId = this.getUrlParam("projectId")
        this.projectName = this.getUrlParam("projectName")
        this.jobName = this.getJobName()
        this.stepsCount = 100
        this.currentPageToken = ""
        this.debugToken = "8eade362b221e1f7c4da38e70cd432771c4d392791b5d9822656634c50b4a0d9"
        this.data = []
        this.store = new JsonApiDataStore()
        this.isEdited = false
    }

    getUrlParam( value) {
        let href = window.location.href
        console.log(href)
        let paramArr = href.split("?")[1].split("&")
        let data = paramArr.find(item => item.indexOf(value) > -1)
        return data ? decodeURI(data).split("=")[1] : undefined
    }

    getJobName() {
        let jobShowName = this.getUrlParam("jobShowName") ? this.getUrlParam("jobShowName") : this.getUrlParam("jobName")
        return [this.projectName, this.projectName, this.flowVersion, jobShowName].join("_")
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
