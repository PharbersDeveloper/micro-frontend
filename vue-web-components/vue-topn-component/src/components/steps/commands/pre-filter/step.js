import PhPreFilterCmd from "./cmd"

/**
 * 这个就是我所说的Command
 */
export default class PhFilterStep {
    constructor(dbstep) {
        this.content= dbstep
        this.expressions = JSON.parse(dbstep["expressions"])
        const defs = this.expressions["preFilter"]
        this.distinct = defs["distinct"]
        this.enabled = defs["enabled"]
        this.preFilterExpression = defs["expression"]
        this.command = new PhPreFilterCmd(this.preFilterExpression)
    }

    exec() {
        if (this.command.validations())
            this.command.exec()
    }
}
