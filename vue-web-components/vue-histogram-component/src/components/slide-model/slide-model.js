
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
        }
    }

    querySlideContent() {
        // do nothing ...
    }

    save() {
        // TODO: 掉用接口将数据同步到dynamodb上去
        console.log(this.queryContent)
        console.log(this.content)
    }
}
