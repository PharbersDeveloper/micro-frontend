import PhGroupCmd from "./cmd"

/**
 * 这个就是我所说的Command
 */
export default class PhGroupStep {
    constructor(dbstep, keys, schema) {
        this.content= dbstep
        this.expressions = JSON.parse(dbstep["expressions"])
        this.schema = schema
        this.defs = this.expressions["params"]["otherColumns"]
        this.refreshCols(keys)
        this.needRefresh = 0
        this.commands = this.schema.map(x => {
            const tmp = new PhGroupCmd()
            const par = this.defs.filter(xi => xi["column"] === x.src)
            if (par.length > 0) tmp.initWithDefs(par[0])
            else tmp.initWithSchema(x.src, x.type)
            return tmp
        })
    }

	resetCommands(schema) {
		const results = schema.map(x => {
            const tmp = new PhGroupCmd()
			let par = []
			if (!this.commands || this.commands.length === 0) {
				par = this.defs.filter(it => it["column"] === x.src)
			} else {
				par = this.commands.filter(it => it["column"] === x.src) 
			}
            if (par.length > 0) tmp.initWithDefs(par[0])
            else tmp.initWithSchema(x.title, x.type)
            return tmp
        })
		this.commands = results
	}

    refreshCols(keys) {
        this.needRefresh++
        this.keys = keys.map(it => it.src)
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

    // isComputedGroupCount() {
    //     if (this.commands.length > 0) return this.commands[0].count
    //     return false
    // }

    // changeComputedGroupCount(v) {
    //     this.commands.forEach(x => x.count = v)
    // }

    exec() {
        // if (this.command.validations())
        //     this.command.exec()
    }

    revert2Defs() {
        return this.commands.filter(x => !this.keys.includes(x.column) && Object.values(x).includes(true)).map(x => x.revert2Defs())
    }
}
