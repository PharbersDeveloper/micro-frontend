/**
 * 这个就是我所说的Command Instance
 */
export default class PhPivotCmd {
    constructor(defs, identifiers, schema) {
        console.log(defs)
        console.log(identifiers)
        console.log(schema)
    }

    exec() {

    }

    validations() {
        return true
    }

    revert2Defs() {
        // return {
        //     datasets: this.datasets,
        //     normalizeText: this.normalizeText,
		// 	type: this.type,
        //     caseInsensitive: this.caseInsensitive,
        //     on: this.on.map(x => { return {
        //         type: x["type"],
        //         conditions: x["conditions"]
        //     }})
        // }
    }
}
