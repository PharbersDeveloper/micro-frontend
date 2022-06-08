/**
 * 这个就是我所说的Command Instance
 */
export default class PhComputedCmd {
    constructor(defs) {
        this.computedCols = defs
        this.pattern = "SQL Expression"
    }

    exec() {

    }

    insertComputedCol() {
        this.computedCols.push({
            "expr": "",
            "name": "",
            "type": "int"
        })
    }

    removeComputedCol(idx) {
        this.computedCols.splice(idx, 1)
    }

    validations() {
        return true
    }

    revert2Defs() {
        // const params = {
        //     mapping: this.mapping,
        //     columns: this.columns,
        //     matchingMode: this.matchingMode
        // }
        //
        // return {
        //     type: this.name,
        //     code: this.code,
        //     params: params
        // }
    }
}
