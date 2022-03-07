
export default class PhSlideModel {
    constructor(id) {
        this.id = id
        this.debugToken = "4150a5d913b3a1563400a49db30ccffd8f6d026f0490d473c84d3f119e9339ab"
        this.isEdited = false
    }

    async querySlideContent() {
        // TODO: query content from Dynamodb
        // 做到这个地方的时候，问我 @wodelu
        //  this.queryContent = await {
        this.queryContent = {
            title: "slide test",
            // 这个是一个JSON String 需要Adapter一下，做到的时候问我 @wodelu
            content: [
                {
                    tp: "histogram", // 这里只可能是histogram 活着 table 暂时，全部写死都写histogram
                    index: 0,
                    histogramName: "alfred test",
                    policyName: "bar", // bar, pie and other histogram name
                    datasourceClass: "default",
                    schemaClass: "default",
                    x: "标准省份名称",
                    y: "sales",
                    conditions: {}, // like filter etc.
                    position: [0, 0, 5, 5]  // 顺序是 左， 上， 右， 下
                },
                {
                    tp: "histogram", // 这里只可能是histogram 活着 table 暂时，全部写死都写histogram
                    index: 1,
                    histogramName: "alfred test",
                    policyName: "pie", // bar, pie and other histogram name
                    datasourceClass: "default",
                    schemaClass: "default",
                    x: "year",
                    y: "sales",
                    conditions: {}, // like filter etc.
                    position: [6, 0, 11, 5]  // 顺序是 左， 上， 右， 下
                }
            ]
        }
        this.title = this.queryContent.title
        this.content = Object.assign({}, this.queryContent.content)
        this.isEdited = false
    }

    save() {
        // TODO: 掉用接口将数据同步到dynamodb上去
        console.log(this.queryContent)
        console.log(this.content)
    }
}
