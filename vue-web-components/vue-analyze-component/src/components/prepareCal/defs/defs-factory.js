
// import { staticFilePath, hostName } from "../../config/envConfig"
import PhFilterStepDefs from "./filter-defs"

export default class PhStepDefsFactory {
    constructor(id) {
        this.id = id
    }

    instanceWithType(ctype) {
        switch (ctype) {
        case "filter":
            return new PhFilterStepDefs()
        default:
            return null
        }
    }

}
