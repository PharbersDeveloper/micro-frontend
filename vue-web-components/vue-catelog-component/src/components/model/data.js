
export default class PhDataSource {
    constructor(id, tmpname, adapter) {
        this.id = id
        this.tmpname = tmpname
        this.data = []
        this.sort = {}
        this.filter = {}
        this.name = "not Implemented"
        this.batch_size = 10
        this.schema = []
        this.cols = this.schema
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

    async buildQuery(ele, isAppend=false) {
        let that = this
        const url = "https://apiv2.pharbers.com/schemaexplorer"
        const accessToken = ele.getCookie("access_token") || "e7a64592e9847cb3a166cba40ec7939759ab35e35352a9b6e9d7cd9b2ba3480f"
        console.log(this.tmpname)
        let body = {
            "project":"max",
            // "tempfile":"66875db6f287aaa382bd04152b092b90.xlsx",
            "tempfile": this.tmpname || "66875db6f287aaa382bd04152b092b90.xlsx",
            "sheet":"",
            "out_number": 10
        }
        let options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/vnd.api+json",
                "Accept": "application/vnd.api+json",
                "Authorization": accessToken
            },
            body:JSON.stringify(body)
        }
        let sheetsResult =  await fetch(url, options).then(res => res.json())
        let sheets = sheetsResult.body

        let datas = sheets.length > 0 ? sheets[0] : []
        that.schema = datas.schema
        that.cols = datas.schema
        let obj = {}
        let result = []
        datas.data.forEach(element => {
            obj = {}
            datas.schema.forEach((item, index) => {
                obj[item] = element[index]
            })
            result.push(obj)
        })
        console.log(result)
        return result
    }

    refreshData(ele) {
        let that = this
        ele.datasource.buildQuery(ele)
            .then((response) => {
                ele.datasource.data = response.map(ele.datasource.adapter, that.schema)
                ele.needRefresh++
            })
    }

    appendData(ele) {
        ele.datasource.buildQuery(ele, true)
            .then((response) => {
                ele.datasource.data = ele.datasource.data.concat(response.map(ele.datasource.adapter))
                ele.cur_page++
                ele.needRefresh++
            })
    }
}
