
export default class PhExcelDataSchema {
    constructor(id, projectId, datasetName) {
        this.id = id
        this.schema = []
        this.cols = []
        this.dtype = []
        this.cellWidth = []
        this.cols = this.schema
        this.projectId = projectId
        this.name = datasetName
        this.debugToken = "c332c1ff0fc63558f2c987a8ac0364f8dbc1f0a60886fda6e575a1ebc68c5687"
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
        if (this.cellWidth.length > 0)
            return this.cellWidth.reduce((a, v) => a + v)
        else return 0
    }

    buildPolicyQuery(ele, query, schema) {
        // const url = "https://api.pharbers.com/phchproxyquery"
        const url = "https://apiv2.pharbers.com/phdadatasource"
        const accessToken = ele.getCookie("access_token") || this.debugToken
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

    async requestSchema(ele) {
        if (this.schema.length === 0) {
            await ele.policy.schema.buildPolicyQuery(ele)
                .then((response) => response.json())
                .then((response) => {
                    const s = []
                    const dt = []
                    for (let idx = 0; idx < response.length; ++idx) {
                        s.push(response[idx].name)
                        dt.push(response[idx].type)
                    }
                    this.resetSchema(s, dt, [])
                })
            return this.schema
        }
        else {
            return this.schema
        }
    }
}
