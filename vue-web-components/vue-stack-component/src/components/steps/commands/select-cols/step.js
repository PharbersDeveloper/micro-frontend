import PhSelectColsCmd from "./cmd"

/**
 * 这个就是我所说的Command
 */
export default class PhSelectColsStep {
    constructor(dbstep) {
        this.content= dbstep
        this.expressions = JSON.parse(dbstep["expressions"])
        const columns = this.expressions["params"]["selectedColumns"]
        const matches = this.expressions["params"]["columnsMatches"]
        this.command = new PhSelectColsCmd(columns, matches)
    }

	refreshData(name, i) {
		const columns = this.command.columns.map(it => it.name)
        const matches = this.expressions["params"]["columnsMatches"]
		const dscols = this.command.dscols
		dscols[name] = new Array()
		matches.push({
			"ds": name,
			"index": i,
			"columns": []
		})
        this.command = new PhSelectColsCmd(columns, matches)
		this.command.dscols = dscols
	}

    exec() {
        if (this.command.validations())
            this.command.exec()
    }

    validate() {
        return true
    }

    revert2Defs() {
        return this.command.revert2Defs()
    }
}
