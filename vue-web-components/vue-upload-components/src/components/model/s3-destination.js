
// import { S3 }  from "@aws-sdk/client-s3"
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
        const params = {
            Bucket: "ph-max-auto"
        }
        this.client.listObjects(params, function (err, data) {
            if (err) console.log(err, err.stack) // an error occurred
            else console.log(data)           // successful response
        })
    }

    upload(data) {
        console.log(data)
    }
}
