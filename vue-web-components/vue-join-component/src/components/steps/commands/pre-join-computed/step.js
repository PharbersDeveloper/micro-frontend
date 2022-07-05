import PhComputedCmd from "./cmd"

/**
 * 这个就是我所说的Command
 */
export default class PhComputedStep {
    constructor(dbstep) {
        this.content= dbstep
        this.expressions = JSON.parse(dbstep["expressions"])
        const defs = this.expressions["params"]["preJoinComputedColumns"]
        this.commands = defs.map(x => { return {
            meta: {
                "name": x["ds"],
				"index": x["index"],
            },
            detail: new PhComputedCmd(x["computedColumns"])
        }})
    }

    exec() {
        if (this.command.validations())
            this.command.exec()
    }

    validate() {
        return true
    }

    revert2Defs() {
        return this.commands.map(x => { return {
                "ds": x["meta"]["name"],
                "computedColumns": x["detail"].revert2Defs()
        }})
    }
}
