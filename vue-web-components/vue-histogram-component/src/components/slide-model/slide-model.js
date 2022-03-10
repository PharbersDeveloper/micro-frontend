
export default class PhSlideModel {
    constructor(id, data) {
        this.id = id
        this.debugToken = 	"253e674e1f9e037982e795758a6e2f4a8bcd50af9d7b9a465d9e0f6dd430c72a"

        if (data) {
            this.queryContent = JSON.parse(data.content)
            this.content = Object.assign({}, this.queryContent)
            this.slideId = data.slideId
            this.pdId = data.pdId
            this.title = data.title
            this.idx = data.idx
            // this.datasetId = data.datasetId
            this.datasetName = data.datasetName
            this.isSave = true
        } else {
            this.isSave = false
        }
    }

    querySlideContent() {
        // do nothing ...
    }

    async save(ele) {
        const body = {
            table: "slide",
            item: {
                id: this.pdId + "_" + this.slideId,
                pdId: this.pdId,
                slideId: this.slideId,
                title: this.title,
                content: JSON.stringify(this.queryContent),
                idx: this.idx,
                datasetName: this.datasetName
            }
        }

        const url = "https://apiv2.pharbers.com/phdydatasource/put_item"
        let headers = {
            Authorization: ele.getCookie("access_token") || this.debugToken,
            "Content-Type": "application/vnd.api+json",
            Accept: "application/vnd.api+json"
        }
        let options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        }
        // const result = await fetch(url, options).then((res) => res.json())
        const result = await fetch(url, options) //.then((res) => res.json())
        return result.status === 200
    }
}
