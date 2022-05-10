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
        this.isCurrentReady = this.readyList[this.currentFile]
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

    // isCurrentReady() {
    //     return this.readyList[this.currentFile]
    // }

    getDatasource() {
        return this.files[this.currentFile].getDatasource()
    }

    getSchema() {
        return this.files[this.currentFile].getSchema()
    }
}
