
export default class PhExcelPreviewProxy {
    constructor(id, activePane, fileList, filePath) {
        this.id = id
        // this.datasource = datasource
        // this.schema = schema
        this.sheets = []
        this.currentSheet = ""
        this.ready = false
        this.suffixType = ""
        console.log(activePane)
        console.log(fileList)
        console.log(filePath)
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
