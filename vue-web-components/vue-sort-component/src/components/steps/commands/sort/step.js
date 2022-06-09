import PhDistinctCmd from "./cmd"

/**
 * 这个就是我所说的Command
 */
export default class PhSortStep {
    constructor(dbstep) {
        this.content= dbstep
        this.expressions = JSON.parse(dbstep["expressions"])
        const defs = this.expressions["parmas"]["orders"]
        this.command = new PhDistinctCmd(defs)

        this.denseRank = this.expressions["parmas"]["denseRank"]
        this.rank = this.expressions["parmas"]["rank"]
        this.rowNumber = this.expressions["parmas"]["rowNumber"]
    }

    exec() {
        if (this.command.validations())
            this.command.exec()
    }

    revert2Defs() {
        return {
            orders: this.command.revert2Defs(),
            denseRank: this.denseRank,
            rank: this.rank,
            rowNumber: this.rowNumber
        }
    }
}
