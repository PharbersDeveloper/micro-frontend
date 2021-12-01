
export default class PhDagDatasource {
    constructor(id, adapter) {
        this.id = id
        this.nodes= []
        this.links= []
        this.data = []
        this.title = "need a title"
        this.debugToken = '13d77ce3b3644268685c3581de95754789338c00a923b82725c8fc5e8ed90173'

        if (!adapter)
            this.adapter = this.defaultAdapter
    }

    defaultAdapter(row) {
        const attr = row["attributes"]
        if (attr["ctype"] === "node" && attr["cat"] !== "flow") {
            const node = {}
            node["name"] = attr["name"]
            const position = JSON.parse(attr['position'])
            node["x"] = position["x"]
            node["y"] = position["y"]
            node["level"] = attr["level"]
            node["category"] = attr["cat"]
            return [true, node]
        } else if (attr["ctype"] === "link") {
            const link = {}
            const cmessage = JSON.parse(attr['cmessage'])
            // link["source"] = cmessage["sourceId"]
            link["source"] = cmessage["sourceName"]
            // link["target"] = cmessage["targetId"]
            link["target"] = cmessage["targetName"]
            return [false, link]
        }
    }

    buildQuery(ele, isAppend=false) {
        const url = "https://apiv2.pharbers.com/phdydatasource/query"
        // const accessToken = this.cookies.read( "access_token" ) | this.debugToken
        const accessToken = this.debugToken
        let body = {
            "table": "dag",
            "conditions": {
                "projectId": ["=", "JfSmQBYUpyb4jsei"],
                "sortVersion": ["begins_with", "developer_"]
            },
            "limit": 100,
            "start_key": {}
        }

        let options = {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "accept": "application/json"
            },
            body: JSON.stringify(body)
        }
        return fetch(url, options)
    }

    refreshData(ele) {
        ele.datasource.buildQuery(ele)
            .then((response) => response.json())
            .then((response) => {
                const tmp = response.data.map(ele.datasource.adapter)
                ele.datasource.nodes = tmp.filter(x => x[0]).map(x => x[1])
                ele.datasource.refreshLocationByLevel(ele)
                ele.datasource.links = tmp.filter(x => !x[0]).map(x => x[1])
                ele.needRefresh++
            })
    }

    refreshLocationByLevel(ele) {
        const LEVEL_VER_STEP = 1000
        const LEVEL_HOR_STEP = 1000
        const levelGroupBy = ele.datasource.nodes.reduce((acc, value) => {
            if (!acc[value.level]) {
                acc[value.level] = [];
            }
            acc[value.level].push(value)
            return acc;
        }, {});

        ele.datasource.nodes = []

        let anchor_x = 0
        let anchor_y = 0
        let provious_level_anchor_x = 0
        let provious_level_anchor_y = 0

        for (var idx in levelGroupBy) {
            // anchor_x = anchor_x + parseInt(idx) * LEVEL_HOR_STEP
            anchor_x = provious_level_anchor_x + LEVEL_VER_STEP
            anchor_y = provious_level_anchor_y
            provious_level_anchor_x = anchor_x

            const cur_level = levelGroupBy[idx]
            for (var iter = 0; iter < cur_level.length; ++iter) {
                anchor_y = anchor_y + parseInt(iter) * LEVEL_VER_STEP
                cur_level[iter]['x'] = anchor_x
                cur_level[iter]['y'] = anchor_y
                // delete cur_level[iter].level
                ele.datasource.nodes.push(cur_level[iter])
            }
            const base_anchor_y_arr = levelGroupBy[idx].map(x => parseInt(x['y']))
            let base_anchor_y = base_anchor_y_arr.reduce(function (accumVariable, curValue) {
                return accumVariable + curValue
            }, 0);
            provious_level_anchor_y = base_anchor_y / base_anchor_y_arr.length
        }
    }
}
