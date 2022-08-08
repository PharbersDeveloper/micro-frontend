import PhGroupCmd from "./cmd"

/**
 * 这个就是我所说的Command
 */
export default class PhGroupStep {
    constructor(dbstep, schema) {
        this.content= dbstep
        this.expressions = JSON.parse(dbstep["expressions"])
		this.globalCount = this.expressions["params"]["globalCount"]
        this.keys = this.expressions["params"]["keys"]
        const defs = this.expressions["params"]["values"].filter(x => !Object.keys(x).includes("customExpr"))
        this.commands = schema.map(x => {
            const tmp = new PhGroupCmd()
            const par = defs.filter(xi => xi["column"] === x.title)
            if (par.length > 0) tmp.initWithDefs(par[0])
            else tmp.initWithSchema(x.title, x.type)
            return tmp
        })
    }

    addCol2Key(col) {
        this.keys.push(col)
    }

    // isComputedGroupCount() {
    //     if (this.commands.length > 0) return this.commands[0].count
    //     return false
    // }

    changeComputedGroupCount(v) {
        // this.commands.forEach(x => x.count = v)
		this.globalCount = v
    }

    exec() {
        // if (this.command.validations())
        //     this.command.exec()
    }

    revert2Defs() {
        return {
			globalCount: this.globalCount,
            keys: this.keys,
            values: this.commands.filter(x => !this.keys.includes(x.column) && Object.values(x).includes(true)).map(x => x.revert2Defs())
        }
    }
}
