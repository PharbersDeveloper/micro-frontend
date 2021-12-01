
export default class PhDagDatasource {
    constructor(id, adapter) {
        this.id = id
        this.nodes= []
        this.links= []
        this.data = []
		this.projectId = "JfSmQBYUpyb4jsei"
        this.title = "need a title"
        this.debugToken = '8eaa30f7952f959a21846dded74387a37e208315ac47bd697e9666e6f9012092'

        if (!adapter)
            this.adapter = this.defaultAdapter
    }

    defaultAdapter(row) {

        function resetCategory(cat, runtime) {
            let result = ""
            if (cat === "dataset" && runtime === "uploaded") {
                result = "DSuploaded"
            } else if (cat === "dataset" && runtime === "intermediate") {
                result = "DSIntermediate"
            } else if (cat === "job" && runtime === "python3") {
                result = "Python3"
            } else if (cat === "job" && runtime === "pyspark") {
                result = "PySpark"
            } else if (cat === "job" && runtime === "sparkr") {
                result = "SparkR"
            } else if (cat === "job" && runtime === "r") {
                result = "R"
            } else if (cat === "dataset") {
                result = "dataset"
            } else if (cat === "job") {
                result = "job"
            } else {

            }
            return result
        }

        const attr = row["attributes"]
        if (attr["ctype"] === "node" && attr["cat"] !== "flow") {
            const node = {}
            node["name"] = attr["name"]
            const position = JSON.parse(attr['position'])
            node["x"] = position["x"]
            node["y"] = position["y"]
            node["level"] = attr["level"]
            node["category"] = resetCategory(attr["cat"], attr["runtime"])
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
        const accessToken = ele.getCookie( "access_token" ) || this.debugToken
        // const accessToken = this.debugToken
        let body = {
            "table": "dag",
            "conditions": {
                "projectId": ["=", this.projectId],
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

	getCookie(name) {
		let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg))
			return (arr[2]);
		else
			return null;
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
        const LEVEL_VER_STEP = 100
        const LEVEL_HOR_STEP = 100
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
