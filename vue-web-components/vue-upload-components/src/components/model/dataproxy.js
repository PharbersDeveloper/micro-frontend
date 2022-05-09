import PhExcelSource from "./excel-source"
import PhCsvSource from "./csv-source"


export default class PhExcelPreviewProxy {
    constructor(id, fileList, currentFile=0) {
        this.id = id
        this.files = []
        this.currentSheet = ""
        this.ready = false
        this.suffixType = ""
        this.fileList = fileList
        console.log(currentFile)
    }

    prepareDatasource(activePane) {
        if (activePane === "local") {
            return this.prepareLocalDatasource()
        } else if (activePane === "s3") {
            return this.prepareS3Datasource()
        }
    }

    prepareLocalDatasource() {
        for (let index = 0; index  < this.fileList.length; ++index) {
            const item = this.fileList[index]
            const fname = item.name
            const suffix = fname.split('.')[1]
            if (suffix === "xlsx") {
                this.files.push(new PhExcelSource(1, item))
            } else if (suffix === "csv") {
                this.files.push(new PhCsvSource(1, item))
            } else {
                alert("not implemented")
            }
        }
        // eslint-disable-next-line no-debugger
        debugger
    }

    prepareS3Datasource() {
        // TODO: s3 的 以后再调试
        // eslint-disable-next-line no-debugger
        debugger
    }

    isReady() {
        return true
    }

    getDatasource() {
        return this.sheets[this.currentSheet].datasource
    }

    getSchema() {
        return this.sheets[this.currentSheet].schema
    }

    refreshData(ele) {
        this.datasource.proxyRefreshData(ele)
    }
}
