import { staticFilePath, hostName } from "../../config/envConfig"

export default class PhDagDatasource {
    constructor(id, adapter, url) {
        this.id = id
        this.data = []
        this.jobArr = []
        this.name = "demo"
        this.projectId = "ggjpDje0HUC2JW"
        this.title = "need a title"
        this.debugToken = '2f6f97c9df7244ae2405ff673596db041e33ceb6465e752cf948fefacefb3ace'
        this.sizeHit = [0, 0]
        this.hitWidthStep = 100
        this.hitHeightStep = 500
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

    //查询version
    buildDistinctColQuery(ele, col, cat, dsName) {
        const uri = `${hostName}/phdydatasource/query`
        const accessToken = ele.getCookie("access_token") || this.debugToken
        const companyId = ele.getCookie("company_id") || "zudIcG_17yj8CEUoCTHg"
        let id = ""
        if (cat === "catalog") {
            id = (companyId + "_" + dsName).toLowerCase()
        } else {
            id = ele.projectId + "_" + ele.representId
        }
        let body = {
            "table": "version",
            "conditions": {
                "id": [
                    "=",
                    id
                ]
            },
            "limit": 100,
            "start_key": ""
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
        return fetch(uri, options)
        // const url = `${hostName}/phdadatasource`
        // function buildDistinctColSql() {
        //     let sql_str = "SELECT DISTINCT " + col

        //     if (ele.datasource.projectId.length === 0)
        //         sql_str = sql_str + " FROM `" + ele.datasource.name + "`"
        //     else
        //         sql_str = sql_str + " FROM `" + ele.datasource.projectId + '_'  + ele.datasource.name + "`"

        //     sql_str = sql_str + " ORDER BY " + col

        //     return sql_str
        // }
        // const accessToken = ele.getCookie("access_token") || this.debugToken
        // let body = {
        //     "query": buildDistinctColSql(),
        //     "schema": [col],
        //     "projectId": this.projectId
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

    queryDlgDistinctCol(ele, row, cat, dsName) {
        return ele.datasource.buildDistinctColQuery(ele, row, cat, dsName)
            .then((response) => response.json())
            .then((response) => {
                return response.data.map(x => x["attributes"]["name"])
            })
    }

    refreshData(ele) {
        let that = this
        ele.datasource.buildQuery(ele)
            .then((response) => response.json())
            .then((response) => {
                that.jobArr = response.data.filter(it => it.attributes.cat === "job" && it.attributes.ctype === "node")
                ele.datasource.data = response.data.filter(x => x["attributes"]["ctype"] === "node")
                let maxLevel = -999
                ele.datasource.data = ele.datasource.data.map(x => {
                    x["id"] = x["attributes"]["represent-id"]
                    x["parentIds"] = []
                    x["representId"] = x["attributes"]["represent-id"]
                    x["status"] = x["attributes"]["runtime"]
                    const cat = x["attributes"]["cat"]
                    const runtime = x["attributes"]["runtime"]
                    const name = x["attributes"]["name"]
                    let result = "dataset"
                    if (cat === "dataset" && runtime === "uploaded") {
                        result = "DSuploaded"
                    } else if (cat === "dataset" && runtime === "intermediate") {
                        result = "DSIntermediate"
                    } else if (cat === "dataset" && runtime === "input_index") {
                        result = "DSInputIndex"
                    } else if (cat === "dataset" && runtime === "output_index") {
                        result = "DSOutputIndex"
                    } else if (cat === "dataset" && runtime === "catalog") {
                        result = "DSCatalog"
                    } else if (cat === "job" && runtime === "python3") {
                        result = "Python3"
                    } else if (cat === "job" && runtime === "pyspark") {
                        result = "PySpark"
                    } else if (cat === "job" && runtime === "sparkr") {
                        result = "SparkR"
                    } else if (cat === "job" && runtime === "r") {
                        result = "R"
                    } else if (cat === "job" && runtime === "prepare") {
                        result = "prepare"
                    } else if (cat === "dataset") {
                        result = "dataset"
                    } else if (cat === "job") {
                        result = "job"
                    }
                    x["category"] = result
                    const tmp = parseInt(x["attributes"]["level"])
                    if (tmp > maxLevel) {
                        maxLevel = tmp
                    }
                    return x
                })
                const links = response.data.filter(x => x["attributes"]["ctype"] === "link")
                let maxHeight = -999
                for (let idx = 0; idx < links.length; ++idx) {
                    const cmessage = JSON.parse(links[idx]["attributes"]["cmessage"])
                    const targetId = cmessage["targetId"]
                    const sourceId = cmessage["sourceId"]
                    if (sourceId && sourceId.length > 0) {
                        const tmp = ele.datasource.data.find(x => x["id"] === targetId)
                        if(tmp) {
                            tmp["parentIds"].push(sourceId)
                            if (maxHeight < tmp["parentIds"].length) {
                                maxHeight = tmp["parentIds"].length
                            }
                        }

                    }
                }
                that.sizeHit = [maxLevel * that.hitWidthStep, maxHeight * that.hitHeightStep]
                ele.needRefresh++
            })
    }
}
