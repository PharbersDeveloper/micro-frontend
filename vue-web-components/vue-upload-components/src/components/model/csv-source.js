
import PhExcelPreviewSource from "./previewDatasource"
import PhExcelPreviewSchema from "./previewSchema"

export default class PhCsvSource {
    constructor(id, file, proxy, delimiter=",") {
        this.id = id
        this.batchSize = 20
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

    resetDataEvent(v) {
        const text = this.left + new TextDecoder("utf-8").decode(v.value)
        const lastIndex = text.lastIndexOf("\n")
        this.left = text.substring(lastIndex + 1)
        const lines = text.substring(0, lastIndex).split(/\r\n|\n/)
        for (let idx = 0; idx < lines.length; ++idx) {
            this.data.push(lines[idx].split(this.delimiter))
        }
        if (this.data.length < this.batchSize) {
            this.reader.read().then(value => this.resetDataEvent(value))
        } else {
            this.datasource.resetData(this.data.slice(0, this.batchSize))
            const header = this.data[this.headerLine]
            const colsLength = header.length
            const dtype = new Array(colsLength).fill("Text")
            const colsWidth = new Array(colsLength).fill(118)
            this.schema.resetSchema(header, dtype, colsWidth)
            this.proxy.readyCallback(this.id)
        }
    }
}
