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

    deleteJoinCloase(idx) {
        this.on.splice(idx, 1)
    }

    revert2Defs() {
        return {
            datasets: this.datasets,
            normalizeText: this.normalizeText,
            caseInsensitive: this.caseInsensitive,
            on: this.on.map(x => { return {
                type: x["type"],
                conditions: x["conditions"]
            }})
        }
    }
}
