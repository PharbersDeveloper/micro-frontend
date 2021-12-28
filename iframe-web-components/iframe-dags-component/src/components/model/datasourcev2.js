
export default class PhDagDatasource {
    constructor(id, adapter) {
        this.id = id
        this.data = []
        this.jobArr = []
        // this.projectId = "JfSmQBYUpyb4jsei"
        this.projectId = "HfSZTr74gRcQOYoA"
        this.title = "need a title"
        this.debugToken = 'c125fe5fd1cf3d2b95f7c38ffdbed1f23d6db83a227bb9ad395845a6f4817971'
        this.sizeHit = [0, 0]
        this.hitWidthStep = 100
        this.hitHeightStep = 500
    }

    buildQuery(ele, isAppend=false) {
        const url = "https://apiv2.pharbers.com/phdydatasource/query"
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
                that.jobArr = response.data.filter(it => it.attributes.cat === "job" && it.attributes.ctype === "node")
                ele.datasource.data = response.data.filter(x => x["attributes"]["ctype"] === "node")
                let maxLevel = -999
                ele.datasource.data = ele.datasource.data.map(x => {
                    x["id"] = x["attributes"]["represent-id"]
                    x["parentIds"] = []
                    x["representId"] = x["attributes"]["represent-id"]
                    x["status"] = "normal"
                    const cat = x["attributes"]["cat"]
                    const runtime = x["attributes"]["runtime"]
					const name = x["attributes"]["name"]
					// if(name === "published") {
					// 	debugger
					// }
                    let result = "dataset"
                    if (cat === "dataset" && runtime === "uploaded") {
                        result = "DSuploaded"
                    } else if (cat === "dataset" && runtime === "intermediate") {
                        result = "DSIntermediate"
                    } else if (cat === "dataset" && runtime === "input_index") {
                        result = "DSInputIndex"
                    } else if (cat === "dataset" && runtime === "output_index") {
                        result = "DSOutputIndex"
                    } else if (cat === "job" && runtime === "python3") {
                        result = "Python3"
                    } else if (cat === "job" && runtime === "pyspark") {
                        result = "PySpark"
                    } else if (cat === "job" && runtime === "sparkr") {
                        result = "SparkR"
                    } else if (cat === "job" && runtime === "r") {
                        result = "R"
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
                        tmp["parentIds"].push(sourceId)
                        if (maxHeight < tmp["parentIds"].length) {
                            maxHeight = tmp["parentIds"].length
                        }
                    }
                }
                that.sizeHit = [maxLevel * that.hitWidthStep, maxHeight * that.hitHeightStep]
                ele.needRefresh++
            })
    }
}
