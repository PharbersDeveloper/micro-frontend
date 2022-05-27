import { staticFilePath, hostName } from "../../config/envConfig"

export default class PhDagDatasource {
    constructor(id, adapter, url) {
        this.id = id
        this.data = []
        this.rundata = []
        this.runJobNames = []
        // this.jobArr = []
        this.name = "demo"
        this.projectId = "ggjpDje0HUC2JW"
        this.runnerId = "ggjpDje0HUC2JW"
        this.title = "need a title"
        this.debugToken = 'b1cf714c0847173cea20f1a111797677aa9cdd0ac2fc6223fcf0d0078ea93667'
        // this.sizeHit = [0, 0]
        // this.hitWidthStep = 300
        // this.hitHeightStep = 500
        this.cal = { calculate: {}, selected: [] }
    }

    buildRunJobsNameQuery(ele) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = ele.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "execution",
            "conditions": {
                "runnerId": ["=", this.runnerId]
            },
            "index_name": "runnerId-jobName-index",
            "limit": 200,
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

    refreshRunJobsData(ele) {
        let that = this
        ele.datasource.buildRunJobsNameQuery(ele)
            .then((response) => response.json())
            .then((response) => {
                that.runJobNames = response["data"].map(x => x.jobShowName)
                ele.needRefresh++
            })
    }

    buildQuery(ele, isAppend=false) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = ele.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "dag",
            "conditions": {
                "projectId": ["=", this.projectId],
                "sortVersion": ["begins_with", "developer_"]
            },
            "limit": 200,
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

    refreshData(ele) {
        let that = this
        ele.datasource.buildQuery(ele)
            .then((response) => response.json())
            .then((response) => {
                const jobArr = response.data.filter(it => it.attributes.cat === "job" && it.attributes.ctype === "node")
                ele.datasource.data = response.data.filter(x => x["attributes"]["ctype"] === "node")
                let maxLevel = -999
                ele.datasource.data = ele.datasource.data.map(x => {
                    x["id"] = x["attributes"]["represent-id"]
                    x["parentIds"] = []
                    x["childrenIds"] = []
                    x["representId"] = x["attributes"]["represent-id"]
                    x["status"] = "normal"
                    const cat = x["attributes"]["cat"]
                    const runtime = x["attributes"]["runtime"]
                    const name = x["attributes"]["name"]
                    let result = "dataset"
                    if (cat === "dataset" && runtime === "uploaded") {
                        result = "DSuploaded"
                    } else if (cat === "dataset" && runtime === "intermediate") {
                        result = "DSIntermediate"
                    } else if (cat === "dataset" && runtime === "input_index") {
                        result = "max-in"
                    } else if (cat === "dataset" && runtime === "output_index") {
                        result = "max-out"
                    } else if (cat === "dataset" && runtime === "catalog") {
                        result = "catalog"
                    } else if (cat === "job" && runtime === "python3") {
                        result = "python"
                    } else if (cat === "job" && runtime === "pyspark") {
                        result = "pyspark"
                    } else if (cat === "job" && runtime === "sparkr") {
                        result = "sparkr"
                    } else if (cat === "job" && runtime === "r") {
                        result = "r"
                    } else if (cat === "job" && runtime === "prepare") {
                        result = "prepare"
                    } else if (cat === "dataset") {
                        result = "dataset"
                    } else if (cat === "job") {
                        result = "job"
                    }
                    x["category"] = result
                    x["selected"] = false
                    const tmp = parseInt(x["attributes"]["level"])
                    // if (tmp > maxLevel) {
                    //     maxLevel = tmp
                    // }
                    return x
                })
                const links = response.data.filter(x => x["attributes"]["ctype"] === "link")
                // let maxHeight = -999
                // let maxHeightV2 = -999
                // let maxHeightV3 = 0
                for (let idx = 0; idx < links.length; ++idx) {
                    const cmessage = JSON.parse(links[idx]["attributes"]["cmessage"])
                    const targetId = cmessage["targetId"]
                    const sourceId = cmessage["sourceId"]
                    if (sourceId && sourceId.length > 0) {
                        const tmp = ele.datasource.data.find(x => x["id"] === targetId)
                        if(tmp) {
                            tmp["parentIds"].push(sourceId)
                            // if (maxHeight < tmp["parentIds"].length) {
                            //     maxHeight = tmp["parentIds"].length
                            // }
                        }
                    }

                    if (targetId && targetId.length > 0) {
                        const tmp = ele.datasource.data.find(x => x["id"] === sourceId)
                        if(tmp) {
                            tmp["childrenIds"].push(targetId)
                            // if (maxHeightV2 < tmp["childrenIds"].length) {
                            //     maxHeightV2 = tmp["childrenIds"].length
                            // }
                        }
                    }
                }

                // for (let idx = 0; idx < ele.datasource.data.length; ++idx) {
                //     if (ele.datasource.data[idx]['parentIds'].length === 0 &&
                //         ele.datasource.data[idx]['childrenIds'].length === 0) {
                //         ++maxHeightV3
                //     }
                // }

                // that.sizeHit = [maxLevel * that.hitWidthStep, Math.max(maxHeight, maxHeightV2) * that.hitHeightStep]
                ele.needRefresh++
            })
    }
}
