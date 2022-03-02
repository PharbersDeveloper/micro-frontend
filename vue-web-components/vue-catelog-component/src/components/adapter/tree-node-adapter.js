
import { JsonApiDataStore } from "jsonapi-datastore"

export default class PhTreeNodeAdapter {
    constructor(id) {
        this.id = id
        this.store = new JsonApiDataStore()
        this.expandedIcon = "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/drop_down_icon.svg"
        this.unExpandedIcon = "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/Database.svg"
        this.url = "https://apiv2.pharbers.com/"
        this.debugToken = "e93301fe363280d0eae4518edc6771e07559361c7848fa7f695fb86dd770e986"
    }

    resetTenantId(id) {
        this.tenantId = id
    }

    render(h, { node, data, store }) {
        if (node.expanded) {
            return (
                <div class="item-line">
                    <img src={this.expandedIcon}
                         class="icon" alt=""/>
                    <div class="content">
                        <p class="title">{data.label}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div class="item-line">
                    <img src={this.unExpandedIcon}
                         class="icon" alt=""/>
                    <div class="content">
                        <p class="title">{data.label}</p>
                    </div>
                </div>
            )
        }
    }

    async lazyLoadWithLevel(ele, node, resolve) {
        const projectId = node.data.id
        const that = this
        function loadProjectLevel() {
            const accessToken = ele.getCookie("access_token") || that.debugToken
            const requestArgs = "phplatform/resources?filter%5BresourceType%5D=standalone&filter%5Btenant%5D=" + that.tenantId + "&include=accounts"
            const url = that.url + requestArgs
            let options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/vnd.api+json",
                    "Accept": "application/vnd.api+json",
                    "Authorization": accessToken
                }
                // body:JSON.stringify(body)
            }

            return fetch(url, options)
                .then((response) => response.json())
                .then((response) => {
                    that.store.sync(response)
                    return that.store.findAll("projects")
                })
        }

        function loadDatasetLevel() {
            const accessToken = ele.getCookie("access_token") || that.debugToken
            const requestArgs = "phdydatasource/scan"
            const url = that.url + requestArgs
            const body = {
                table: "dataset",
                conditions: {
                    projectId: ["=", projectId]
                },
                limit: 100,
                start_key: ""
            }
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/vnd.api+json",
                    "Accept": "application/vnd.api+json",
                    "Authorization": accessToken
                },
                body:JSON.stringify(body)
            }

            return fetch(url, options)
                .then((response) => response.json())
                .then((response) => {
                    that.store.sync(response)
                    return that.store.findAll("datasets")
                })
        }

        function adapterProjectLevel(data) {
            let result = []
            for (let idx = 0; idx < data.length; ++idx) {
                const tmp = {}
                tmp["id"] = data[idx].id
                tmp["label"] = data[idx].name
                tmp["provider"] = data[idx].provider
                tmp["children"] = []
                result.push(tmp)
            }
            return result
        }

        function adapterDatasetLevel(data) {
            let result = []
            for (let idx = 0; idx < data.length; ++idx) {
                const tmp = {}
                tmp["id"] = data[idx].id
                tmp["label"] = data[idx].name
                tmp["schema"] = data[idx].schema
                tmp["leaf"] = true
                tmp["children"] = []
                result.push(tmp)
            }
            return result
        }

        if (node.level === 0) {
            resolve(adapterProjectLevel(await loadProjectLevel()))
        } else if (node.level === 1) {
            resolve(adapterDatasetLevel(await loadDatasetLevel()))
        }
    }

    exec(data) {
        return []
    }
}
