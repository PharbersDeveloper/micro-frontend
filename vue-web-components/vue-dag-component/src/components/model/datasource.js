
import { hostName } from "../../config/envConfig"
// import { Message } from 'element-ui'
import { JsonApiDataStore } from "jsonapi-datastore"


export default class PhDagDatasource {
    constructor(id, projectId, parent) {
        this.id = id
        this.store = new JsonApiDataStore()
        this.debugToken = 'ebc42cb215e3b18013ee69c75272e1cac202da49b566c8bd41bda948da00d432'

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

	// 数据集
    buildQuery1(ele){
        const url = `${hostName}/phdydatasource/query`
        const accessToken = ele.getCookie("access_token") || this.debugToken
        let body = {
            table: "dataset",
            conditions: {
                projectId: ["=", ele.projectId]
            },
            index_name: "dataset-projectId-name-index",
            limit: this.dataset_size,
            start_key: ''
        }

        let options = {
            method: "POST",
            headers: {
                Authorization: accessToken,
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                accept: "application/json"
            },
            body: JSON.stringify(body)
        }
        return fetch(url, options)
    }
	
	jsonapiAdapter(data) {
        const dashToHump = function (value) {
            const textArr = value.split("-")
            return textArr.map((item, index) => {
                if (index === 0) return item
                return item.slice(0, 1).toUpperCase() + item.slice(1);
            }).join("");
        }
        if (Array.isArray(data)) {
            data.map(item => {
                Object.keys(item).map(keys => {
                    let newK = dashToHump(keys)
                    if (newK !== keys) {
                        item[newK] = item[keys]
                        delete item[keys]
                    }
                })
                return item
            })
        } else {
            Object.keys(data).map(keys => {
                let newK = dashToHump(keys)
                if (newK !== keys) {
                    data[newK] = data[keys]
                    delete data[keys]
                }
            })
        }
        return data
    }

    // 加载数据集
    async refreshData1(ele) {
        let that = this
        await ele.datasource.buildQuery1(ele)
            .then((response) => response.json())
            .then((response) => {
                that.store.sync(response)
                that.dss = that.jsonapiAdapter(that.store.findAll("datasets"))
            })
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
