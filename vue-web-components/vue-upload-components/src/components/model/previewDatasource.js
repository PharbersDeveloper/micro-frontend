
// import { hostName } from "../../config/envConfig"
// import

export default class PhExcelPreviewSource {
    constructor(id) {
        this.id = id
        this.data = []
        this.batch_size = 10
        this.name = "not Implemented"
        // this.datasource = new
    }

    resetData(data) {
        this.data = data
        this.batch_size = data.length
    }

    refreshData(ele) {
        ele.data = this.data.slice(0, this.batch_size)
        ele.dataIsReady++
    }

    queryTotalCount() {
        let that = this
        return new Promise((resolve) => {
            resolve(that.batch_size)
        })
    }
}
