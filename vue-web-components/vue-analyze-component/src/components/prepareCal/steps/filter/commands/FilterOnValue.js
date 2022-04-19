/**
 * 这个就是我所说的Command Instance
 */
export default class PhFilterOnValueCmd {
    constructor(defs) {
        this.name = defs["type"]
        this.code = defs["code"]
        this.values = defs["params"]["values"]
        this.matchingMode = defs["params"]["matchingMode"]
        this.normalizationMode = defs["params"]["normalizationMode"]
        this.action = defs["params"]["action"]
        this.booleanMode = defs["params"]["booleanMode"]
        this.appliesTo = defs["params"]["appliesTo"]
        this.columns = defs["params"]["columns"]
    }

    exec() {

    }

    validations() {
        return true
    }

    revert2Defs() {
        const params = {
            values: this.values,
            matchingMode: this.matchingMode,
            normalizationMode: this.normalizationMode,
            action: this.action,
            booleanMode: this.booleanMode,
            appliesTo: this.appliesTo,
            columns: this.columns
        }

        return {
            type: this.name,
            code: this.code,
            params: params
        }
    }
}
