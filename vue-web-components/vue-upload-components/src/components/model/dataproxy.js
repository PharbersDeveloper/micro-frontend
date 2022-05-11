import PhExcelSource from "./excel-source"
import PhCsvSource from "./csv-source"


export default class PhExcelPreviewProxy {
    constructor(id, activePane, fileList, currentFile=0) {
        this.id = id
        this.files = []
        this.readyList = []
        this.suffixType = ""
        this.fileList = fileList
        this.currentFile = currentFile

        this.prepareDatasource(activePane)
        this.isCurrentReady = false

        this.skipFirstLines = 0
        this.skipNextLines = 0
        this.dataRefresh = 0
        this.currentSheet = ""
    }

    viewNeedRefresh() {
        this.isCurrentReady = this.readyList[this.currentFile]
        this.suffixType = this.files[this.currentFile].getType()
        this.skipFirstLines = this.files[this.currentFile].getSkipFirstLines()
        this.skipNextLines = this.files[this.currentFile].getSkipNextLines()
        this.currentSheet = this.files[this.currentFile].getCurrentSheetName()
        this.dataRefresh++
    }

    prepareDatasource(activePane) {
        if (activePane === "local") {
            return this.prepareLocalDatasource()
        } else if (activePane === "s3") {
            return this.prepareS3Datasource()
        }
    }

    readyCallback(idx) {
        this.readyList[idx] = true
        this.viewNeedRefresh()
    }

    prepareLocalDatasource() {
        for (let index = 0; index  < this.fileList.length; ++index) {
            const item = this.fileList[index]
            const fname = item.name
            const suffix = fname.split('.')[1]
            if (suffix === "xlsx") {
                this.files.push(new PhExcelSource(index, item, this))
            } else if (suffix === "csv") {
                this.files.push(new PhCsvSource(index, item, this))
            } else {
                alert("not implemented")
            }
            this.readyList.push(false)
        }
    }

    prepareS3Datasource() {
        // TODO: s3 的 以后再调试
        // eslint-disable-next-line no-debugger
        debugger
    }

    isReady() {
        // return this.readyList[this.currentFile]
        // TODO: ...
        return false
    }

    getDatasource() {
        return this.files[this.currentFile].getDatasource()
    }

    getSchema() {
        return this.files[this.currentFile].getSchema()
    }

    getSheetNames() {
        return this.files[this.currentFile].getSheetNames()
    }

    getCurrentSheetName() {
        return this.files[this.currentFile].getCurrentSheetName()
    }

    setSkipFirstLines(v) {
        if (this.skipFirstLines !== v) {
            this.files[this.currentFile].setSkipFirstLines(v)
            this.viewNeedRefresh()
        }
    }

    setSkipNextLines(v) {
        if (this.skipNextLines !== v) {
            this.files[this.currentFile].setSkipNextLines(v)
            this.viewNeedRefresh()
        }
    }

    setCurrentSheet(v) {
        this.files[this.currentFile].setCurrentSheet(v)
        this.viewNeedRefresh()
    }
}
