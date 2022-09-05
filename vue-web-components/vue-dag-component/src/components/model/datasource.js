
import { hostName } from "../../config/envConfig"
// import { Message } from 'element-ui'

export default class PhDagDatasource {
    constructor(id, projectId, parent) {
        this.id = id
        this.debugToken = '34814cb23df681ed0d3a1ba7cc74a3148f9f673c91921e384920914970865111'

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

    // 返回是否运行和错误信息的回调  用于嵌套外侧的使用
    runningStatusCallback(event) {
        if (event.data.toVueDagRunStatus) { 
            const {
                isRunning, failedLogs,
                progressOver, retryButtonShow
            } = event.data.toVueDagRunStatus
            console.debug("progressOver", progressOver)
            this.datasource.parent.isRunning = isRunning
            this.datasource.parent.failedLogs = JSON.parse(failedLogs)
            this.datasource.parent.progressOver = progressOver
            this.datasource.parent.retryButtonShow = retryButtonShow

        }
    }
}
