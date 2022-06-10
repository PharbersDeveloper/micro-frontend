import PhPreFilterCmd from "./cmd"

/**
 * 这个就是我所说的Command
 */
export default class PhFilterStep {
    constructor(dbstep) {
        this.content= dbstep
        this.expressions = JSON.parse(dbstep["expressions"])
        const defs = this.expressions["params"]["preFilters"]
        this.commands = defs.map(x => { return {
            meta: {
                "name": x["ds"],
                "distinct": x["preFilter"]["distinct"],
                "enabled": x["preFilter"]["enabled"],
            },
            detail: new PhPreFilterCmd(x["preFilter"]["expr"])
        }})
        // console.log(this.commands)
    }

    exec() {
        if (this.command.validations())
            this.command.exec()
    }

    revert2Defs() {
        // const result = this.enabled ? this.command.revert2Defs() : ""
        // return {
        //     "distinct": false,
        //     "enabled": this.enabled,
        //     "expression": result
        // }
    }

}
