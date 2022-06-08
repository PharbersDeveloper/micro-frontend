/**
 * 这个就是我所说的Command Instance
 */
export default class PhTopNCmd {
    constructor(defs) {
        this.firstRows = defs["firstRows"]
        this.lastRows = defs["lastRows"]
        this.keys = defs["keys"]
        this.orders = defs["orders"]
        this.denseRank = defs["denseRank"]
        this.rank = defs["rank"]
        this.duplicateCount = defs["duplicateCount"]
        this.rowNumber = defs["rowNumber"]
    }

    exec() {

    }

    validations() {
        return true
    }

    revert2Defs() {
        // const params = {
        //     values: this.values,
        //     matchingMode: this.matchingMode,
        //     normalizationMode: this.normalizationMode,
        //     action: this.action,
        //     booleanMode: this.booleanMode,
        //     appliesTo: this.appliesTo,
        //     columns: this.columns
        // }
        //
        // return {
        //     type: this.name,
        //     code: this.code,
        //     params: params
        // }
    }
}
