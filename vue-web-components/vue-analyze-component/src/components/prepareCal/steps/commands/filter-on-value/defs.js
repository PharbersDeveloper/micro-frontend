export const PhFilterStepDefs = {
    actions: [
        {
            desc: "只保留匹配行",
            cal: "KEEP_ROW"
        },
        {
            desc: "去除匹配行",
            cal: "EXACT_ROW"
        },
        {
            desc: "清除匹配单元格",
            cal: "EXACT_CELL"
        },
        {
            desc: "清除不匹配单元格",
            cal: "EXACT_NOT_CELL"
        }
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

const PhInitialFOVExpressions = {
    type: "FilterOnValue",
    code: "pyspark",
    params: {
        values: [""],
        matchingMode: "FULL_STRING",
        normalizationMode: "EXACT",
        action: "EXACT_ROW",
        booleanMode: "AND",
        appliesTo: "COLUMNS",
        columns: [""]
    }
}

export const PhInitialFOVStepDefs = {
    attributes: {
        pjName: "",
        stepId: "",
        index: 0,
        ctype: "filter",
        expressions: JSON.stringify(PhInitialFOVExpressions),
        runtime: "prepare",
        groupName: "",
        groupIndex: 0,
        expressionsValue: "JSON",
        stepName: "Initial Filter On Value"
    },

    id: "",
    type: "steps"
}
