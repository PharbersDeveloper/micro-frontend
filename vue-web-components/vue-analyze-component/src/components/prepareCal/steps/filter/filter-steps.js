
import { staticFilePath, hostName } from "../../../../config/envConfig"

/**
 * 这个就是我所说的Command
 */
export default class PhFilterStep {
    constructor(dbstep) {
        this.content= dbstep
        this.expressions = JSON.parse(dbstep["expressions"])
    }

    exec() {

    }
}
