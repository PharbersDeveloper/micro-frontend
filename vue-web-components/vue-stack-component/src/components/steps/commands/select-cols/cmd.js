/**
 * 这个就是我所说的Command Instance
 */
export default class PhSelectColsCmd {
    constructor(columns, matches) {
		if (columns) {
			this.columns = columns.map(x => { return { name: x }})
		}
        this.ds = matches.map(x => x["ds"])
        for (let idx = 0; idx < matches.length; ++idx) {
            this[matches[idx]["ds"]] = matches[idx]["columns"].map(x => { return { name: x }})
        }
    }

    exec() {

    }

    removeStackDs(item, index) {
        this.ds.splice(index, 1)
        delete this[item]
    }

    addSelectColumn() {
        this.columns.push({ name: "" })
        this.ds.forEach(x => {
            this[x].push({ name: null })
        })
    }

    deleteSelectColumn(index) {
        this.columns.splice(index, 1)
        this.ds.forEach(x => {
            this[x].splice(index, 1)
        })
    }

    validations() {
        return true
    }

    revert2Defs() {
        // return this.computedCols
        const result = { "columnsMatches": [] }
        const keys = Object.keys(this)
        for (let idx = 0; idx < keys.length; ++idx) {
            const key = keys[idx]
            if (key === "ds") { // TODO: @wodelu 肯定会是一个bug
                result["selectedColumns"] = this["columns"].map(x => x.name)
            } else if (key === "columns") {
                result["selectedColumns"] = this["columns"].map(x => x.name)
            } else {
                result["columnsMatches"].push({
                    "ds": key,
                    "columns": this[key].map(x => x.name)
                })
            }
        }
        return result
    }
}
