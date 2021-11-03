
export default class PhDataSource {
    constructor(id, tmpname, firstSkipValue, nextSkipValue, sheet, par, adapter) {
        this.id = id
        this.par = par
        this.tmpname = tmpname
        this.nextSkipValue = nextSkipValue
        this.firstSkipValue = firstSkipValue
        this.sheet = sheet
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
        const accessToken = ele.getCookie("access_token") || "37288a0f8436ffd4e3bb84cbf250f083cd67ef97a503927b0fbf1d093b262d41"
        console.log(this.tmpname)
        let body = {
            "project":"max",
            // "tempfile":"66875db6f287aaa382bd04152b092b90.xlsx",
            "tempfile": this.tmpname || "66875db6f287aaa382bd04152b092b90.xlsx",
            "sheet": this.sheet || '',
            "out_number": 10,
            "skip_first": this.firstSkipValue || 1,
            "skip_next": this.nextSkipValue || -1
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
        let sheetArray = []
        sheets.forEach(item => {
            sheetArray.push(item.sheet)
        })
        this.par.sheetArr = sheetArray //单选选项
        this.par.sheet = this.par.sheetArr[0] //默认选中
        //表格数据
        let datas = sheets.length > 0 ? sheets[0] : []
        //表头
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
