
// import PhExcelPreviewSource from "./previewDatasource"
// import PhExcelPreviewSchema from "./previewSchema"
import * as XLSX from 'xlsx/xlsx.mjs'
import PhExcelPreviewSource from "./previewDatasource"
import PhExcelPreviewSchema from "./previewSchema"


export default class PhExcelSource {
    constructor(id, file, proxy) {
        this.id = id
        this.batchSize = 20

        this.proxy = proxy
        this.sheets = []
        this.currentSheet = ""

        this.reader = new FileReader()
        const that = this
        this.reader.onload = function(e) {
            that.resetDataEvent(e, that)
        }
        this.reader.readAsArrayBuffer(file)

        this.data = {}
    }

    getDatasource() {
        return this.data[this.currentSheet].datasource
    }

    getSchema() {
        return this.data[this.currentSheet].schema
    }

    getSkipFirstLines() {
        return this.data[this.currentSheet].skipFirstLines
    }

    getSkipNextLines() {
        return this.data[this.currentSheet].skipNextLines
    }

    getSheetNames() {
        return this.sheets
    }

    getCurrentSheetName() {
        return this.currentSheet
    }

    resetDataEvent(e, s) {
        const workbook = XLSX.read(e.target.result, {type: "binary"})
        s.sheets = workbook.SheetNames
        s.currentSheet = this.sheets[0]

        for (let idx = 0; idx < this.sheets.length; ++idx) {
            const worksheet = workbook.Sheets[workbook.SheetNames[idx]]
            let data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }).slice(0, this.batchSize)
            const tmp = {}
            // tmp["data"] = data.slice(0, this.batchSize)
            tmp.skipFirstLines = 0
            tmp.skipNextLines = 0
            tmp.headerLine = 0

            tmp.datasource = new PhExcelPreviewSource(this.id)
            tmp.schema = new PhExcelPreviewSchema(this.id)

            tmp.datasource.resetData(data)
            const colsLength = Math.max(...data.map(x => x.length))
            const header = new Array(colsLength).fill("col") // this.data[tmp.headerLine]
            const ht = data[tmp.headerLine]
            for (let htIdx = 0; htIdx < header.length; ++htIdx) {
                if (htIdx < ht.length) {
                    header[htIdx] = ht[htIdx]
                } else {
                    header[htIdx] = "col_" + (htIdx - ht.length).toString()
                }
            }

            const dtype = new Array(colsLength).fill("Text")
            const colsWidth = new Array(colsLength).fill(118)
            tmp.schema.resetSchema(header, dtype, colsWidth)

            s.data[workbook.SheetNames[idx]] = tmp
        }
        s.proxy.readyCallback(this.id)
    }
}
