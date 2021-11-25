
export default class PhExcelDataSchema {
    constructor(id, adapter) {
        this.id = id
        this.schema = ["Index", "Id", "Hospname", "Province", "City", "lHospname", "lHospalias", "lDistrict", "lLevel", "lCat", "lOffweb"]
        this.cols = this.schema
    }
}
