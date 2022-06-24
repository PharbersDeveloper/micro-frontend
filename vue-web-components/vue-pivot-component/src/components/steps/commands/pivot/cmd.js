/**
 * 这个就是我所说的Command Instance
 */
export default class PhPivotCmd {
    constructor(defs, identifiers, schema) {
        this.identifiers = identifiers
        this.globalCount = defs["globalCount"]
        this.keyColumns = defs["keyColumns"]
        this.pivotedColumnType = defs["pivotedColumnType"]
        this.topnLimit = defs["topnLimit"]
        this.minOccLimit = defs["minOccLimit"]
        this.explicitValues = defs["explicitValues"]
        this.valueColumns = defs["valueColumns"]

        this.schema = schema
        this.resetCandiSelection()
    }

    resetCandiSelection() {
        this.selection = []
        const vcs = this.valueColumns.map(x => x.column)
        const vcods = this.valueColumns.map(x => x.orderColumn)
        for (let idx = 0; idx < this.schema.length; ++idx) {
            const tmp = this.schema[idx].src
            if (!this.identifiers.includes(tmp)
                && !this.keyColumns.includes(tmp)
                && !vcs.includes(tmp)
                && !vcods.includes(tmp)) {
                this.selection.push(tmp)
            }
        }
    }

    insertKeyColumn(item) {
        this.keyColumns.push(item)
    }

    removeKeyColumn(idx) {
        this.keyColumns.splice(idx, 1)
    }

    insertIdfColumn(item) {
        this.identifiers.push(item)
    }

    removeIdfColumn(idx) {
        this.identifiers.splice(idx, 1)
    }

    insertValueColumn(item) {
        this.valueColumns.push({
            "avg": true,
            "column": item,
            "concat": false,
            "concatDistinct": false,
            "concatSeparator": ",",
            "count": false,
            "countDistinct": false,
            "first": false,
            "firstLastNotNull": false,
            "last": false,
            "max": false,
            "min": true,
            "orderColumn": "",
            "stddev": false,
            "sum": false
        })
    }

    removeValueColumn(idx) {
        this.valueColumns.splice(idx, 1)
    }

    exec() {

    }

    validations() {
        return true
    }

    revert2Defs() {
        return {
            identifiers: this.identifiers,
            pivot: {
                globalCount: this.globalCount,
                keyColumns: this.keyColumns,
                pivotedColumnType: this.pivotedColumnType,
                topnLimit: this.topnLimit,
                minOccLimit: this.minOccLimit,
                explicitValues: this.explicitValues,
                valueColumns: this.valueColumns
            }
        }
    }
}