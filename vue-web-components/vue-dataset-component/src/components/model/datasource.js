import { staticFilePath, hostName } from "../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"


export default class PhDataSource {
    constructor(id, adapter=null) {
        this.id = id
        this.data = []
        this.startKey = ""
        this.totalCount = 0
        this.projectId = ''
        this.batch_size = 20
        // this.curPage = 0
        this.store = new JsonApiDataStore()
        this.debugToken = "2d2c2d462cff65ef47ad18d7ad3bae299639e5fa2a4adb7dc2c483ee2c7e9357"
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

    buildQuery(ele, key){
        const url = `${hostName}/phdydatasource/query`
        const accessToken = ele.getCookie("access_token") || this.debugToken
        let body = {
            table: "dataset",
            conditions: {
                projectId: ["=", ele.projectId]
            },
            index_name: "dataset-projectId-name-index",
            limit: this.batch_size,
            start_key: key
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

    refreshData(ele, key, callback=null) {
        let that = this
        ele.datasource.buildQuery(ele, key)
            .then((response) => response.json())
            .then((response) => {
                that.store.sync(response)
                // 下一页的key
                that.startKey = response.meta.start_key
                that.totalCount = response.meta.total_count
                that.data = that.store.findAll("datasets")
                // that.curPage = 1
                ele.needRefresh++
                if(callback)
                    callback()
            })
    }

    appendData(ele, key, callback=null) {
        let that = this
        ele.datasource.buildQuery(ele, key)
            .then((response) => response.json())
            .then((response) => {
                that.store.sync(response)
                that.data = that.store.findAll("datasets")
                // var newData = response.data.map(x=>{
                //     let attributes = x.attributes
                //     attributes.id = x.id
                //     return attributes
                // })
                // ele.datasource.data = ele.AllData.concat(newData)
                ele.datasource.data = that.data
                that.startKey = response.meta.start_key
                // ele.cur_page++
                ele.needRefresh++
                if(callback)
                    callback()
            })
    }


}
