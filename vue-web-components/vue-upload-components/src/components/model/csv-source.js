
import PhExcelPreviewSource from "./previewDatasource"
import PhExcelPreviewSchema from "./previewSchema"

export default class PhCsvSource {
    constructor(id, file, proxy, delimiter=",") {
        this.id = id
        this.batchSize = 10
        this.bufferSize = 100
        this.data = []
        this.delimiter = delimiter
        this.left = ""
        this.proxy = proxy

        this.reader = file.stream().getReader()
        this.reader.read().then(value => this.resetDataEvent(value))

        this.datasource = new PhExcelPreviewSource(id)
        this.schema = new PhExcelPreviewSchema(id)
        this.skipFirstLines = 0
        this.skipNextLines = 0
        this.headerLine = 0
    }

    getDatasource() {
        return this.datasource
    }

    getSchema() {
        return this.schema
    }

    getSkipFirstLines() {
        return this.skipFirstLines
    }

    getSkipNextLines() {
        return this.skipNextLines
    }

    getSheetNames() {
        return ["csv"]
    }

    getCurrentSheetName() {
        return "csv"
    }

    getType() {
        return "csv"
    }

    resetDataEvent(v) {
        const text = this.left + new TextDecoder("utf-8").decode(v.value)
        const lastIndex = text.lastIndexOf("\n")
        this.left = text.substring(lastIndex + 1)
        const lines = text.substring(0, lastIndex).split(/\r\n|\n/)
        for (let idx = 0; idx < lines.length; ++idx) {
            this.data.push(lines[idx].split(this.delimiter))
        }
        if (this.data.length < this.bufferSize) {
            this.reader.read().then(value => this.resetDataEvent(value))
        } else {
            this.__headerRefresh()
            this.__dataRefresh()
            this.proxy.readyCallback(this.id)
        }
    }

    __headerRefresh() {
        const header = [...this.data[this.headerLine]]
        const colsLength = header.length

        let idx = 0
        for (let tmp = 0; tmp < colsLength; ++tmp) {
            if (header[tmp] === "") {
                header[tmp] = "col_" + idx.toString()
                idx += 1
            }
        }

        const dtype = new Array(colsLength).fill("Text")
        const colsWidth = new Array(colsLength).fill(118)
        this.schema.resetSchema(header, dtype, colsWidth)
    }

    __dataRefresh() {
        const startPos = this.skipFirstLines + 1 + this.skipNextLines
        const endPos = this.skipFirstLines + 1 + this.skipNextLines + this.batchSize
        this.datasource.resetData(this.data.slice(startPos, endPos))
    }

    setSkipFirstLines(v) {
        this.skipFirstLines = v
        this.headerLine = v
        this.__headerRefresh()
        this.__dataRefresh()
    }

    setSkipNextLines(v) {
        this.skipNextLines = v
        this.__headerRefresh()
        this.__dataRefresh()
    }

    setCurrentSheet(v) {
        // Do nothing ...
        console.log(v)
    }
}
