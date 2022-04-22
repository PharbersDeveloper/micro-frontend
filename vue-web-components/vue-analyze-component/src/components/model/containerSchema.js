
export default class PhContainerSchema {
    constructor(id) {
        this.id = id
        this.schema = [
            "通用名称",
            "商品名称",
            "生产企业",
            "剂型",
            "规格",
            "包装数量",
            "包装单位",
            "PACKCODE",
            "项目",
            "version"
        ]
        this.cols = [
            "通用名称",
            "商品名称",
            "生产企业",
            "剂型",
            "规格",
            "包装数量",
            "包装单位",
            "PACKCODE",
            "项目",
            "version"
        ]
        this.dtype = [
            "String",
            "String",
            "String",
            "String",
            "String",
            "String",
            "String",
            "String",
            "String",
            "String"
        ]
        this.cellWidth = [
            118,
            118,
            118,
            118,
            118,
            118,
            118,
            118,
            118,
            118
        ]
        this.cols = this.schema
    }

    resetSchema(schema, dtype, cellWidth) {
        this.schema = schema
        this.dtype = dtype
        this.cellWidth = cellWidth
        this.cols = this.schema
    }

    colWidth(index) {
        return this.cellWidth[index]
    }

    totalWidth() {
        let idx_arr = []
        for (var idx = 0; idx < this.cols.length; ++idx) {
            const tmp = this.cols[idx]
            idx_arr.push(this.schema.indexOf(tmp))
        }

        let width_arr = []
        for (var iter = 0; iter < idx_arr.length; ++iter) {
            const tmp = idx_arr[iter]
            width_arr.push(this.cellWidth[tmp])
        }

        if (width_arr.length > 0)
            return width_arr.reduce((a, v) => a + v)
        else return 0
    }

    requestSchema(url, arr) {
        return new Promise((resolve, reject) => {
            this.resetSchema(
                arr,
                ["Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text"],
                [118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118]
            )
            resolve(true)
        })
    }
}
