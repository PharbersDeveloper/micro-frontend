import {hostName} from "../../../../../vue-histogram-component/src/config/envConfig"

export default class PhStepSchema {
    constructor(id, projectId = 'ggjpDje0HUC2JW', tableName='q') {
        this.projectId = projectId
        this.name = tableName
        this.id = id
        this.schema = []
        this.dtype = []
        this.cellWidth = []
        this.cols = this.schema
        this.debugToken = "d6086afc54dadb7e67181ed1613addba6af8069bbd0f60845c156cf1daecd92e"
    }

    resetSchema(schema, dtype, cellWidth) {
        this.schema = schema
        this.dtype = dtype
        this.cellWidth = cellWidth
        this.cols = this.schema
    }

    colWidth(index) {
        return this.cellWidth[index]
    }

    totalWidth() {
        let idx_arr = []
        for (var idx = 0; idx < this.cols.length; ++idx) {
            const tmp = this.cols[idx]
            idx_arr.push(this.schema.indexOf(tmp))
        }

        let width_arr = []
        for (var iter = 0; iter < idx_arr.length; ++iter) {
            const tmp = idx_arr[iter]
            width_arr.push(this.cellWidth[tmp])
        }

        if (width_arr.length > 0)
            return width_arr.reduce((a, v) => a + v)
        else return 0
    }

    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    }

    buildSchemaQuery() {
        const url = `${hostName}/phdadatasource`
        const accessToken = this.getCookie("access_token") || this.debugToken
        let body = {
            "query": "SELECT `name`, `type` FROM system.columns where database='default' and table='"+ this.projectId + "_" + this.name + "';", // TODO:
            // "query": "SELECT `name`, `type` FROM system.columns where database='phmax' and table='ma';",
            "schema": ["name", "type"],
            "projectId": this.projectId
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

    async requestSchema() {
        if (this.schema.length === 0) {
            const that = this
            await this.buildSchemaQuery()
                .then((response) => response.json())
                .then((response) => {
                    const s = []
                    const dt = []
                    for (let idx = 0; idx < response.length; ++idx) {
                        s.push(response[idx].name)
                        dt.push(response[idx].type)
                    }
                    that.resetSchema(s, dt, [])
                })
            return that.schema
        }
        else {
            return that.schema
        }
    }
}
