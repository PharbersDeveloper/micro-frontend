
export default class PhCodeEditorModel {
    constructor(dict) {
        const property = JSON.parse(dict["properties"])
        this.role = dict["role"]
        this.ctype = dict["ctype"]
        this.owner = dict["owner"]
        this.ownership = dict["ownership"]
        this.platform = dict["platform"]

        this.applicationType = property["type"]
        this.applicationVersion = property["version"]
        this.applicationLabels = property["label"]

        this.metadata = property["parameters"]
        console.log(this.metadata)
    }
}
