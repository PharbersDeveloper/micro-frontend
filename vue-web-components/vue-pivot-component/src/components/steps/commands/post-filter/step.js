import PhPreFilterCmd from "./cmd"

/**
 * 这个就是我所说的Command
 */
export default class PhFilterStep {
    constructor(dbstep) {
        this.content= dbstep
        this.expressions = JSON.parse(dbstep["expressions"])
        const defs = this.expressions["params"]["postFilter"]
        this.distinct = defs["distinct"]
        this.enabled = defs["enabled"]
        this.preFilterExpression = defs["expr"]
        this.command = new PhPreFilterCmd(this.preFilterExpression)
        console.log(this.command.cloases)
    }

    exec() {
        if (this.command.validations())
            this.command.exec()
    }

    revert2Defs() {
        const result = this.enabled ? this.command.revert2Defs() : ""
        return {
            "distinct": this.distinct,
            "enabled": this.enabled,
            "expr": result
        }
    }

}
