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
        this.store = new JsonApiDataStore()
        this.debugToken = "0a741ed989acbf5672a6616be1afcfff294aa1bb4658a9c194d9eda3ea3f6a80"
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
            table: "scenario",
            conditions: {
                projectId: ["=", ele.projectId]
            },
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
                that.startKey = response.meta.start_key
                that.totalCount = response.meta.total_count
                that.data = that.jsonapiAdapter(that.store.findAll("scenarios"))
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
                // that.store = new JsonApiDataStore()
                that.store.sync(response)
                that.data = that.jsonapiAdapter(that.store.findAll("scenarios"))
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