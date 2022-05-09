
// import { hostName } from "../../config/envConfig"

export default class PhExcelPreviewSource {
    constructor(id, projectId, firstSkipValue, nextSkipValue, sheet, adapter) {
        this.id = id
        this.projectId = projectId
        this.nextSkipValue = nextSkipValue
        this.firstSkipValue = firstSkipValue
        this.sheet = sheet
        this.data = []
        this.name = "not Implemented"
        this.batch_size = 10
        // this.debugToken = "0fa192ba642b0f63dbd6d457268030b39751190d8a10c9e1f667ef6adea8bb19"
        if (!adapter) {
            this.adapter = this.defaultAdapter
        }
    }

    defaultAdapter(row, cols) {
        let result = []
        for (var idx in cols) {
            result.push(row[cols[idx]])
        }
        return result
    }

    refreshData(ele) {
        // ele.data = this.data
        ele.dataIsReady++
    }

    queryTotalCount() {
        let that = this
        return new Promise((resolve) => {
            resolve(that.batch_size)
        })
    }
}
