/**
 * 这个就是我所说的Command Instance
 */
export default class PhPreFilterCmd {
    constructor(preFilterExpression) {
        if (preFilterExpression.length > 0) {
            this.enabled = true
        }

        if (preFilterExpression.includes(" and ")) {
            this.action = "AND"
            this.cloases = preFilterExpression.split(" and ")
        } else if (preFilterExpression.includes(" or ")) {
            this.action = "OR"
            this.cloases = preFilterExpression.split(" or ")
        } else if (!preFilterExpression.includes(" and ") && !preFilterExpression.includes(" or ")) {
            this.action = "AND"
            this.cloases = [preFilterExpression]
        }
        this.cloases2Struct()
        console.log(this.cloases)
    }

    cloases2Struct() {
        const strArr = this.cloases
        const result = []
        for (let idx = 0; idx < strArr.length; ++idx) {
            try {
                this.tryContainsCloases(strArr[idx])
                this.tryEqualsCloases(strArr[idx])
                this.tryNotEqualsCloases(strArr[idx])
                this.tryExistsCloases(strArr[idx])
                this.tryNotExistsCloases(strArr[idx])
                this.tryColEqualsCloases(strArr[idx])
                this.tryColNotEqualsCloases(strArr[idx])

            } catch (e) {
                result.push(e["result"])
            }
        }
        this.cloases = result
    }

    tryNotExistsCloases(c) {
        const tmp = {}
        if (c.includes("is not null")) {
            tmp["status"] = "ok"
            tmp["result"] = {
                "left": c.substring(0, c.indexOf(" ")),
                "op": "NOT-EXISTS",
                "right": undefined
            }
            throw tmp
        }
    }

    tryExistsCloases(c) {
        const tmp = {}
        if (c.include("is null")) {
            tmp["status"] = "ok"
            tmp["result"] = {
                "left": c.substring(0, c.indexOf(" ")),
                "op": "EXISTS",
                "right": undefined
            }
            throw tmp
        }
    }

    tryEqualsCloases(c) {
        const tmp = {}
        if (c.includes("'") && c.includes("==")) {
            tmp["status"] = "ok"
            tmp["result"] = {
                "left": c.substring(0, c.indexOf(" ")),
                "op": "EQUALS",
                "right": c.substring(c.indexOf("'") + 1, c.lastIndexOf("'"))
            }
            throw tmp
        }
    }

    tryNotEqualsCloases(c) {
        const tmp = {}
        if (c.includes("'") && c.includes("!=")) {
            tmp["status"] = "ok"
            tmp["result"] = {
                "left": c.substring(0, c.indexOf(" ")),
                "op": "NOT-EQUALS",
                "right": c.substring(c.indexOf("'") + 1, c.lastIndexOf("'"))
            }
            throw tmp
        }
    }

    tryColEqualsCloases(c) {
        const tmp = {}
        if (c.includes("==")) {
            tmp["status"] = "ok"
            tmp["result"] = {
                "left": c.substring(0, c.indexOf(" ")),
                "op": "COL-EQUALS",
                "right": c.substring(c.indexOf(" ") + 1)
            }
            throw tmp
        }
    }

    tryColNotEqualsCloases(c) {
        const tmp = {}
        if (c.includes("!=")) {
            tmp["status"] = "ok"
            tmp["result"] = {
                "left": c.substring(0, c.indexOf(" ")),
                "op": "COL-NOT-EQUALS",
                "right": c.substring(c.indexOf(" ") + 1)
            }
            throw tmp
        }
    }

    tryContainsCloases(c) {
        const tmp = {}
        if (c.includes("like")) {
            tmp["status"] = "ok"
            tmp["result"] = {
                "left": c.substring(0, c.indexOf(" ")),
                "op": "CONTAINS",
                "right": c.substring(c.indexOf("%"), c.lastIndexOf("%"))
            }
            throw tmp;
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
