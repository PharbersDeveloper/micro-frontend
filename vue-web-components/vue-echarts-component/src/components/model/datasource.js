
export default class PhDagDatasource {
    constructor(id, adapter) {
        this.id = id
        this.nodes= []
        this.links= []
        this.data = []
        this.title = "prod_clean_v2"

        if (!adapter)
            this.adapter = this.defaultAdapter
    }

    defaultAdapter(row) {
        this.data.append(row)
        if (row["ctype"] === "node" && row["cat"] !== "flow") {
            const tmp = {}
            tmp["name"] = row["name"]
            tmp["x"] = row["cmessage"]["x"]
            tmp["y"] = row["cmessage"]["y"]
            tmp["category"] = row["cat"]
            this.nodes.append(tmp)
        } else if (row["ctype"] === "link") {
            const tmp = {}
            tmp["source"] = row["source"]
            tmp["target"] = row["target"]
        }
    }

    buildQuery(ele, isAppend=false) {
        const url = "https://apiv2.pharbers.com/phdydatasource/scan"
        const accessToken = this.cookies.read( "access_token" )
        let body = {
            "table": "dag",
            "conditions": {
                "projectId": "Max"
            },
            "limit": 100,
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
        ele.datasource.buildQuery(ele)
            .then((response) => response.json())
            .then((response) => {
                response.map(ele.datasource.adapter)
                ele.needRefresh++
            })
    }
}
