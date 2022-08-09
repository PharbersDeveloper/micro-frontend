import { staticFilePath, hostName } from "../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"


export default class PhDataSource {
    constructor(id, adapter=null) {
        this.id = id
        this.dcs = []
        this.dss = []
        this.startKey = ""
        this.totalCount = 0
        this.projectId = ''
        this.batch_size = 10
        this.dataset_size = 1000
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

    // 脚本
    buildQuery(ele, key){
        const url = `${hostName}/phdydatasource/query`
        const accessToken = ele.getCookie("access_token") || this.debugToken
        let body = {
            table: "dagconf",
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

    // 首次加载脚本 
    refreshData(ele, key, callback=null) {
        let that = this
        ele.datasource.buildQuery(ele, key)
            .then((response) => response.json())
            .then((response) => {
                that.store.sync(response)
                // 下一页的key
                that.startKey = response.meta.start_key
                that.totalCount = response.meta.total_count
                that.dcs = that.store.findAll("dag-confs")
                // that.curPage = 1
                ele.needRefresh++
                if(callback)
                    callback()
            })
    }

    // 下一页脚本
    appendData(ele, key, callback=null) {
        let that = this
        ele.datasource.buildQuery(ele, key)
            .then((response) => response.json())
            .then((response) => {
                that.store.sync(response)
                // var newData = response.data.map(x=>{
                //     let attributes = x.attributes
                //     attributes.id = x.id
                //     return attributes
                // })
                ele.datasource.dcs = that.store.findAll("dag-confs")
                that.startKey = response.meta.start_key
                // ele.cur_page++
                ele.needRefresh++
                if(callback)
                    callback()
            })
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

    // 加载数据集
    refreshData1(ele, callback=null) {
        let that = this
        ele.datasource.buildQuery1(ele)
            .then((response) => response.json())
            .then((response) => {
                that.store.sync(response)
                // 下一页的key
                // that.startKey = response.meta.start_key
                // that.totalCount = response.meta.total_count
                that.dss = that.store.findAll("datasets")
                // that.curPage = 1
                ele.needRefresh++
                if(callback)
                    callback()
            })
    }

}
