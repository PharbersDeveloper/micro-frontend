
export default class PhDataSource {
    constructor(id, adapter) {
        this.id = id
        this.data = []
        this.sort = {}
        this.filter = {}
        this.name = "prod_clean_v2"
        this.batch_size = 200
        this.schema = ["Index", "Id", "Hospname", "Province", "City", "lHospname", "lHospalias", "lDistrict", "lLevel", "lCat", "lOffweb"]
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
        const accessToken = ele.getCookie("access_token") || "37288a0f8436ffd4e3bb84cbf250f083cd67ef97a503927b0fbf1d093b262d41"
        let body = {
            "project":"max",
            "tempfile":"66875db6f287aaa382bd04152b092b90.xlsx",
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
        let sheets =  await fetch(url, options).then(res => res.json())
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
            console.log(obj)
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
