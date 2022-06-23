import PhGroupCmd from "./cmd"

/**
 * 这个就是我所说的Command
 */
export default class PhGroupStep {
    constructor(dbstep, keys, schema) {
        this.content= dbstep
        this.expressions = JSON.parse(dbstep["expressions"])
        // this.keys = this.expressions["params"]["keys"]
        this.schema = schema
        this.defs = this.expressions["params"]["otherColumns"]
        this.refreshCols(keys)
        this.needRefresh = 0
        this.commands = this.schema.map(x => {
            const tmp = new PhGroupCmd()
            const par = this.defs.filter(x => x["column"] === x.src)
            if (par.length > 0) tmp.initWithDefs(par[0])
            else tmp.initWithSchema(x.src, x.type)
            return tmp
        })
    }

    refreshCols(keys) {
        this.needRefresh++
        this.keys = keys
        // this.commands = this.schema.map(x => {
        //     const tmp = new PhGroupCmd()
        //     const par = this.defs.filter(x => x["column"] === x.src)
        //     if (par.length > 0) tmp.initWithDefs(par[0])
        //     else tmp.initWithSchema(x.src, x.type)
        //     return tmp
        // })
    }

    addCol2Key(col) {
        this.keys.push(col)
    }

    isComputedGroupCount() {
        if (this.commands.length > 0) return this.commands[0].count
        return false
    }

    changeComputedGroupCount(v) {
        this.commands.forEach(x => x.count = v)
    }

    exec() {
        // if (this.command.validations())
        //     this.command.exec()
    }

    revert2Defs() {
        return this.commands.filter(x => x.isUsed).map(x => x.revert2Defs())
    }
}
