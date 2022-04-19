
// import { staticFilePath, hostName } from "../../config/envConfig"

export default class PhFilterStepDefs {
    constructor() {
        this.defs = {
            actions: [
                {
                    desc: "只保留匹配行",
                    cal: "KEEP_ROW"
                },
                {
                    desc: "去除匹配行",
                    cal: "not match"
                }
                // ,
                // {
                //     desc: "清除匹配单元格"
                // },
                // {
                //     desc: "清除不匹配单元格"
                // }
            ],
            relations: [
                {
                    desc: "交集（AND）",
                    cal: "AND"
                },
                {
                    desc: "并集（OR）",
                    cal: "OR"
                }
            ],
            pattern: [
                {
                    desc: "完全匹配",
                    cal: "FULL_STRING"
                },
                {
                    desc: "不完全匹配",
                    cal: "CONTAINS"
                },
                {
                    desc: "正则表达式",
                    cal: "REGX"
                }
            ]
        }
    }
}
