/**
 * 这个就是我所说的Command Instance
 */
export default class PhJoinCmd {
    constructor(defs) {
        this.datasets = defs["datasets"].sort(x => x.index)
        this.caseInsensitive = defs["caseInsensitive"]
        this.normalizeText = defs["normalizeText"]
        this.type = defs["type"]
        this.on = defs["on"]
    }

    exec() {

    }

    validations() {
        return true
    }

    insertJoinCloase(left, right) {
        this.on.push({
            "type": "=",
            "conditions": [
                {
                    "ds": left,
                    "column": ""
                },
                {
                    "ds": right,
                    "column": "`col`"
                }
            ]
        })
    }

    // deleteSortCloase(idx) {
    //     // this.orders.splice(idx, 1)
    // }
    //
    // insertKeyCloase(col) {
    //     // this.keys.push(col)
    // }
    //
    // deleteKeyCloase(idx) {
    //     this.keys.splice(idx, 1)
    // }

    revert2Defs() {
        return this
    }
}
