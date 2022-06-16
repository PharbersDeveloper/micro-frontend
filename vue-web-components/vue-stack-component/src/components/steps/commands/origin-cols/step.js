import PhStackOriginCmd from "./cmd"

/**
 * 这个就是我所说的Command
 */
export default class PhStackOriginStep {
    constructor(dbstep) {
        this.content= dbstep
        this.expressions = JSON.parse(dbstep["expressions"])
        const defs = this.expressions["params"]["originColumn"]
        this.command = new PhStackOriginCmd(defs)
        //
        // this.denseRank = this.expressions["params"]["denseRank"]
        // this.rank = this.expressions["params"]["rank"]
        // this.rowNumber = this.expressions["params"]["rowNumber"]
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
