import { staticFilePath, hostName } from "../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"


export default class PhDataSource {
    constructor(id, adapter=null) {
        this.id = id
        this.data = []
        this.key = ""
        this.projectId = ''
        this.batch_size = 20
        this.curPage = 0
        this.store = new JsonApiDataStore()
        this.dubbgerToken = "df8578e46fff0258f95195704e38f14ee98488c3b31f43199fd6225a8dba739a"
        if (!adapter) {
            this.adapter = this.defaultAdapter
        }
    }

    defaultAdapter(row, schema) {
        let schemas = this
        let arr = []
        schemas.forEach(item => {
            arr.push(row[item])
        })
        return arr
    }

    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
        arr = document.cookie.match(reg)
        if (arr) return (arr[2])
        else return null
    }

    buildQuery(projectId){
        const accessToken = route.cookies.read("access_token") || debugToken
        let body = {
            table: "dataset",
            conditions: {
                projectId: ["=", parseParams.query.projectId]
            },
            index_name: "dataset-projectId-name-index",
            limit: 20,
            start_key: this.key
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

    refreshData(ele) {
        let that = this
        ele.datasource.buildQuery(ele)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                ele.needRefresh++
            })
    }

    appendData(ele) {
        ele.datasource.buildQuery(ele, true)
            .then((response) => {
                // ele.datasource.data = ele.datasource.data.concat(response.map(ele.datasource.adapter))
                // ele.datasource.data = this.data
                // ele.cur_page++
                ele.needRefresh++
            })
    }


}
