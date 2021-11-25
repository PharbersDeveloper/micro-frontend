
export default class PhExcelDataSchema {
    constructor(id, adapter) {
        this.id = id
        this.schema = ["Index", "Id", "Hospname", "Province", "City", "lHospname", "lHospalias", "lDistrict", "lLevel", "lCat", "lOffweb"]
        this.dtype= ["Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text"]
        this.cellWidth= [118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118]
        this.cols = this.schema
    }

    colWidth(index) {
        return this.cellWidth[index]
    }

    totalWidth() {
        return this.cellWidth.reduce((a, v) => a + v)
    }
}
