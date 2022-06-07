/**
 * 这个就是我所说的Command Instance
 */
export default class PhPreFilterCmd {
    constructor(preFilterExpression) {
        if (preFilterExpression.length > 0) {
            this.enabled = true
        }

        if (preFilterExpression.include(" && ")) {
            this.action = "AND"
            this.cloases = preFilterExpression.split(" && ")
        } else if (preFilterExpression.include(" || ")) {
            this.action = "OR"
            this.cloases = preFilterExpression.split(" || ")
        } else if (!preFilterExpression.include(" && ") && !preFilterExpression.include(" || ")) {
            this.action = "AND"
            this.cloases = preFilterExpression.split(" && ")
        }
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
