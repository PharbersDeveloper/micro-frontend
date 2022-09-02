
import { hostName } from "../../config/envConfig"
// import { Message } from 'element-ui'

export default class PhDagDatasource {
    constructor(id, projectId, parent) {
        this.id = id
        this.debugToken = 'b2b7c31a591c8d44e7f9fc9ba42861e1b7712a8dc59fe69fa26ba06f219c52e8'

        this.adapter = this.defaultAdapter
        this.projectId = projectId
        this.title = "need a title"
        this.sizeHit = [0, 0]
        this.name = "demo"
        this.data = []
        this.cal = { calculate: {}, selected: [] }
        this.parent = parent
    }

    iframeComplete(event) {
		if(event.data.dagIsComplete && event.data.dagIsComplete.status === "complete") {
            console.info("complete is ok")
            const { data } = event.data.dagIsComplete
            this.datasource.data = JSON.parse(data)
		}
	}

    getClickNodeEvent(event) {
        if (event.data.dagSelectItem) {
            console.debug("click node")
            console.debug(event.data.dagId)
            console.debug(event.data.dagSelectItem)
            const { selectItemName, icon_header, cal } = JSON.parse(event.data.dagSelectItem)
            this.datasource.parent.selectItemName = selectItemName
            this.datasource.parent.icon_header = icon_header
            this.datasource.cal = cal
        }
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
            "limit": 3000,
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
}
