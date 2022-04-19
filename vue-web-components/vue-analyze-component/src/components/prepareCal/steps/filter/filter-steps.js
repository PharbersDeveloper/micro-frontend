
import { staticFilePath, hostName } from "../../../../config/envConfig"
import PhFilterOnValueCmd from "./commands/FilterOnValue"

/**
 * 这个就是我所说的Command
 */
export default class PhFilterStep {
    constructor(dbstep) {
        this.content= dbstep
        this.expressions = JSON.parse(dbstep["expressions"])
        this.command = this.instanceWithName()
        // this.groupName = dbstep["group-name"]
        // this.groupId = dbstep["group-id"]
        // this.isGrouped = len(this.groupName) > 0
    }

    instanceWithName() {
        switch (this.expressions.type) {
        case "FilterOnValue":
            return new PhFilterOnValueCmd(this.expressions)
        default:
            return null
        }
    }

    exec() {
        if (this.command.validations())
            this.command.exec()
    }
}
