
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
        const accessToken = ele.getCookie("access_token") || "4f286eb01ebc23da04ba9187e0f4d3d3e60324091fd5dadeab1734110b7ecd7a"
        console.log(this.tmpname)
        let body = {
            "project":"max", //66875db6f287aaa382bd04152b092b90.xlsx
            "tempfile": this.tmpname || "2f18101b999e2d2802d543baf21b92a6.xlsx",
            "sheet": this.sheet || '',
            "out_number": 10,
            "skip_first": Number(this.firstSkipValue) || 0,
            "skip_next": Number(this.nextSkipValue) || 0
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
        this.par.sheetArr = sheetsResult.sheets //单选选项
        if(!this.par.sheet || this.par.sheet == '') {
            this.par.sheet = this.par.sheetArr[0] //默认选中
        }
        //表格数据
        let datas = sheets.length > 0 ? sheets[0] : []
        //表头
        that.schema = datas.schema
        that.cols = datas.schema
        that.data = datas.data
        return datas.data
    }

    refreshData(ele) {
        let that = this
        ele.datasource.buildQuery(ele)
            .then((response) => {
                // ele.datasource.data = response.map(ele.datasource.adapter, that.schema)
                ele.datasource.data = this.data
                ele.needRefresh++
            })
    }

    appendData(ele) {
        ele.datasource.buildQuery(ele, true)
            .then((response) => {
                // ele.datasource.data = ele.datasource.data.concat(response.map(ele.datasource.adapter))
                ele.datasource.data = this.data
                ele.cur_page++
                ele.needRefresh++
            })
    }
}
