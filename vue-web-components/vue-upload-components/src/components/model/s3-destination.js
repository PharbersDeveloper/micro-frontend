
import * as AWS from "aws-sdk"

export default class PhS3Destination {
    constructor(id) {
        // constructor(id, bucket="", prefix="") {
        this.id = id
        this.client = new AWS.S3(
            {
                apiVersion: '2006-03-01',
                accessKeyId: "AKIAWPBDTVEAMBDRQWIQ",
                secretAccessKey: "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",
                region: "cn-northwest-1"
            }
        )
    }

    async upload(data, to, timestamp) {
        const lines = data.map(x => x.join(","))
        const body = lines.join("\n")
        const params = {
            Body: body,
            Bucket: "ph-platform",
            Key: `2020-11-11/lake/${to}/pharbers_lake_` + timestamp.toString()
        }

        const that = this
        return await new Promise((resolve, reject) => {
            that.client.putObject(params, function(err, data) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
       })
    }
}
