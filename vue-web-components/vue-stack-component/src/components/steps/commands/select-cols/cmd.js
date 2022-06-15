/**
 * 这个就是我所说的Command Instance
 */
export default class PhSelectColsCmd {
    constructor(columns, matches) {
        this.columns = columns
        this.ds = matches.map(x => x["ds"])
        for (let idx = 0; idx < matches.length; ++idx) {
            this[matches[idx]["ds"]] = matches[idx]["columns"]
        }
    }

    exec() {

    }

    removeStackDs(item, index) {
        this.ds.splice(index, 1)
        delete this[item]
    }

    addSelectColumn() {
        this.columns.push("")
        this.ds.forEach(x => {
            this[x].push(null)
        })
    }

    // insertComputedCol() {
    //     this.computedCols.push({
    //         "expr": "",
    //         "name": "",
    //         "type": "int"
    //     })
    // }
    //
    // removeComputedCol(idx) {
    //     this.computedCols.splice(idx, 1)
    // }

    validations() {
        return true
    }

    revert2Defs() {
        // return this.computedCols
    }
}
