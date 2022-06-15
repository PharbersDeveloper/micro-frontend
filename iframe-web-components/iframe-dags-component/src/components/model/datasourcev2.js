import { staticFilePath, hostName } from "../../config/envConfig"

export default class PhDagDatasource {
    constructor(id, adapter, url) {
        this.id = id
        this.data = []
        this.jobArr = []
        this.name = "demo"
        this.projectId = "ggjpDje0HUC2JW"
        this.title = "need a title"
        this.debugToken = '04e86af3bb4473ddc9275225b75ae03b45cc53b00fc37530035adc377522b37b'
        this.sizeHit = [0, 0]
        // this.hitWidthStep = 300
        // this.hitHeightStep = 500
        this.cal = { calculate: {}, selected: [] }
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
                    } else if (cat === "job" && runtime === "sort") {
                        result = "sort"
                    } else if (cat === "job" && runtime === "sync") {
                        result = "sync"
                    } else if (cat === "job" && runtime === "distinct") {
                        result = "distinct"
                    } else if (cat === "job" && runtime === "topn") {
                        result = "topn"
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

    //查询 select
    buildSelectItemsQuery(ele) {
        const uri = `${hostName}/phstatemachineselect`
        const accessToken = ele.getCookie("access_token") || this.debugToken

        const tmp = {}
        if (ele.selectItem.attributes.cat === "job") {
            tmp['job'] = {
                "name": ele.selectItem.attributes.name,
                "represent-id": ele.selectItem.attributes['represent-id']
            }
        } else {
            tmp['dataset'] = {
                "name": ele.selectItem.attributes.name,
                "represent-id": ele.selectItem.attributes['represent-id']
            }
        }

        let body = {
            "projectId": ele.projectId,
            "projectName": ele.projectName,
            "element": tmp
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
        // return null
        return fetch(uri, options)
    }

    selectOneElement(ele) {
        let that = this
        ele.datasource.buildSelectItemsQuery(ele)
            .then((response) => response.json())
            .then((response) => {
                that.cal = response
                ele.needRefresh++
            })
    }
}
