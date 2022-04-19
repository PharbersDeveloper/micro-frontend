
// import { staticFilePath, hostName } from "../../config/envConfig"

export default class PhFilterStepDefs {
    constructor() {
        this.defs = {
            actions: [
                {
                    desc: "只保留匹配行",
                    cal: "match",
                    func: this.match
                },
                {
                    desc: "去除匹配行",
                    cal: "not match",
                    func: this.match
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
                    cal: "and",
                    func: this.and

                },
                {
                    desc: "并集（OR）",
                    cal: "or"
                }
            ],
            pattern: [
                {
                    desc: "完全匹配",
                    cal: "match",
                    func: this.match
                },
                {
                    desc: "不完全匹配",
                    cal: "contains",
                    func: this.contains
                },
                {
                    desc: "正则表达式",
                    cal: "regx",
                    func: this.regx
                }
            ]
        }
    }

    match(l, r) {
        return l === r
    }

    contains(l, r) {
        return l.includes(r)
    }

    and(actions) {

    }

    or(actions) {

    }

    getBindStep() {
        return this.stepId
    }
}
