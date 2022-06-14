/**
 * 这个就是我所说的Command Instance
 */
export default class PhGroupCmd {
    constructor() {

    }

    initWithSchema(col, tp) {
        this.countDistinct = false
        this.min = false
        this.avg = false
        this.last = false
        this.max = false
        this.column = col
        this.count = false
        this.concat = false
        this.sum = false
        this.type = tp
        this.stddev = false
        this.first = false
        this.index = 0
        this.firstLastNotNull = false
        this.orderColumn = ""
        this.concatSeparator = ","
        this.concatDistinct = ""

        this.isUsed = false
    }

    initWithDefs(defs) {
        console.log(defs)
        this.countDistinct = defs["countDistinct"]
        this.min = defs["min"]
        this.avg = defs["avg"]
        this.last = defs["last"]
        this.max = defs["max"]
        this.column = defs["column"]
        this.count = defs["count"]
        this.concat = defs["concat"]
        this.sum = defs["sum"]
        this.type = defs["type"]
        this.stddev = defs["stddev"]
        this.first = defs["first"]
        this.index = defs["index"]
        this.firstLastNotNull = defs["firstLastNotNull"]
        this.orderColumn = defs["orderColumn"]
        this.concatSeparator = defs["concatSeparator"]
        this.concatDistinct = defs["concatDistinct"]

        this.isUsed = true
    }

    exec() {

    }

    validations() {
        return true
    }

    revert2Defs() {
        return this
    }
}
