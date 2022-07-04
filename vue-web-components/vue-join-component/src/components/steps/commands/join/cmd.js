/**
 * 这个就是我所说的Command Instance
 */
export default class PhJoinCmd {
    constructor(defs, schema) {
        this.datasets = defs["datasets"].sort(x => x.index)
		this.schema = schema
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
                    "column": this.schema[left][0]["src"]
                },
                {
                    "ds": right,
                    "column": this.schema[right][0]["src"]
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
			type: this.type,
            caseInsensitive: this.caseInsensitive,
            on: this.on.map(x => { return {
                type: x["type"],
                conditions: x["conditions"]
            }})
        }
    }
}
