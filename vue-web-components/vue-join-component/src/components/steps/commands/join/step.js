import PhJoinCmd from "./cmd"

/**
 * 这个就是我所说的Command
 */
export default class PhJoinStep {
    constructor(dbstep) {
        this.content= dbstep
        this.expressions = JSON.parse(dbstep["expressions"])
        const defs = this.expressions["parmas"]
        this.command = new PhJoinCmd(defs)
    }

    exec() {
        if (this.command.validations())
            this.command.exec()
    }

    revert2Defs() {
        return this.command.revert2Defs()
    }
}
