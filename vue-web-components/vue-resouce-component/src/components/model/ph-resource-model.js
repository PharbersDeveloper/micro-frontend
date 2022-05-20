
import { hostName } from "../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"
import PhEngineModel from "./res/engine"
import PhCodeEditorModel from "./res/codeeditor"
import PhStorageModel from "./res/static-storage"
import PhOlapModel from './res/olap'

export default class PhResourceModel {
    constructor(id, tenantId='zudIcG_17yj8CEUoCTHg') {
        this.id = id
        this.tenantId = tenantId
        this.debugToken = "b5f0866e5c0dc419be494464bc66dc6274a8f250b6d7e1d3c9785d8b2c816f1a"
        this.store = new JsonApiDataStore()
        this.data = []

        this.engine = null
        this.olap = null
        this.codeeditors = []
        this.storage = []
    }

    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr === document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    }

    async model() {
        if (this.data.length === 0) {
            this.store.reset()
            const scenarios = await this.buildResourceQuery(this.tenantId).then((response) => response.json())
            this.store.sync(scenarios)
            this.data = this.store.findAll("resources")

            for (let idx = 0; idx < this.data.length; ++idx) {
                const tmp = this.data[idx]
                if (tmp["role"] === "engine") {
                    this.engine = new PhEngineModel(tmp)
                } else if (tmp["role"] === "olap") {
                    this.olap = new PhOlapModel(tmp)
                } else if (tmp["role"] === "codeeditor") {
                    this.codeeditors.push(new PhCodeEditorModel(tmp))
                } else if (tmp["role"] === "storage") {
                    this.storage.push(new PhStorageModel(tmp))
                }
            }
        }
    }

    buildResourceQuery(tenantId) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "resource",
            "conditions": {
                "tenantId": ["=", tenantId],
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
}
