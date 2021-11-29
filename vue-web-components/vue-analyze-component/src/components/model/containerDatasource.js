
export default class PhContainerDataSource {
    constructor(id, adapter, url) {
        this.id = id
        this.data = []
        this.sort = {}
        this.projectId = ''
        this.filter = {}
        this.name = "prod_clean_v2"
        this.batch_size = 100
        // this.schema = []
        // this.cols = this.schema
        if (!url)
            this.url= "https://api.pharbers.com/phchproxyquery"
        if (!adapter)
            this.adapter = this.defaultAdapter
        this.debugToken = "6ad6902543c99e965ac84e84e619369748f56655acd4f55ebe9ea2699aa1eb15"
    }

    resetUrl(url) {
        this.url = url
    }

    defaultAdapter(row, cols) {
        let result = []
        for (var idx in cols) {
            result.push(row[cols[idx]])
        }
        return result
    }

    buildQuery(ele, page, schema) {
        function buildQueryString() {
            let sql_str = "SELECT "
            let selectParam = schema.map(item => '`' + item + '`').join(',')
            if (ele.datasource.projectId.length === 0)
                sql_str = sql_str + schema.toString() + " FROM " + ele.datasource.name
            else
                sql_str = sql_str + selectParam + " FROM `" + ele.datasource.projectId + '_' +ele.datasource.name +'`'

            // filter
            let firstFilter = Object.keys(ele.datasource.filter)[0]
            let filterParam = " WHERE "
            for (const key in ele.datasource.filter) {
                if(key != firstFilter) {
                    filterParam = " AND "
                }
                sql_str = sql_str + filterParam + ele.datasource.filter[key]
            }

            // sorts
            if(ele.datasource.sort && Object.keys(ele.datasource.sort).length !== 0) {
                sql_str = sql_str + " ORDER BY `"
                let lastSort = Object.keys(ele.datasource.sort)[Object.keys(ele.datasource.sort).length - 1]
                for (const key in ele.datasource.sort) {
                    if(lastSort == key) {
                        sql_str = sql_str + key +'`'
                    } else {
                        sql_str = sql_str + key +'`,`'
                    }
                    if (ele.datasource.sort[key] < 0) {
                        sql_str = sql_str + " desc "
                    }
                }
            }

            // pages
            sql_str = sql_str + " LIMIT " + ele.datasource.batch_size
            sql_str = sql_str + " OFFSET " + (page * ele.datasource.batch_size).toString()
            return sql_str
        }
        const url = this.url
        const accessToken = ele.getCookie("access_token") || this.debugToken
        let body = {
            "query": buildQueryString(),
            "schema": schema
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

    buildCountQuery(ele) {
        function buildQueryCountString() {
            let sql_str = "SELECT count(*)"

            if (ele.datasource.projectId.length === 0)
                sql_str = sql_str + " FROM `"  + ele.datasource.name + "`"
            else
                sql_str = sql_str + " FROM `"  + ele.datasource.projectId + '_' + ele.datasource.name + "`"

            // filter
            let firstFilter = Object.keys(ele.datasource.filter)[0]
            let filterParam = " WHERE "
            for (const key in ele.datasource.filter) {
                if(key != firstFilter) {
                    filterParam = " AND "
                }
                sql_str = sql_str + filterParam + ele.datasource.filter[key]
            }

            return sql_str
        }
        const url = this.url
        const accessToken = ele.getCookie("access_token") || this.debugToken
        let body = {
            "query": buildQueryCountString(),
            "schema": ["count"]
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

    //显示行拼接sql
    buildDistinctColQuery(ele, col) {
        function buildDistinctColSql() {
            let sql_str = "SELECT DISTINCT " + col

            if (ele.datasource.projectId.length === 0)
                sql_str = sql_str + " FROM `" + ele.datasource.name + "`"
            else
                sql_str = sql_str + " FROM `" + ele.datasource.projectId + '_'  + ele.datasource.name + "`"

            sql_str = sql_str + " ORDER BY " + col + " LIMIT 20"

            return sql_str
        }
        const url = this.url
        const accessToken = ele.getCookie("access_token") || this.debugToken
        let body = {
            "query": buildDistinctColSql(),
            "schema": [col]
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

    refreshData(ele, page, schema) {
        if (schema.schema.length > 0) {
            ele.datasource.buildQuery(ele, page, schema.schema)
                .then((response) => response.json())
                .then((response) => {
                    const tmp = []
                    for (var idx in response) {
                        tmp.push(ele.datasource.adapter(response[idx], schema.cols))
                    }
                    ele.data = tmp //response.map(ele.datasource.adapter)
                    // ele.datasource.data = tmp //response.map(ele.datasource.adapter)
                    ele.dataIsReady++
                })
        }
    }

    queryTotalCount(ele) {
        return ele.datasource.buildCountQuery(ele)
            .then((response) => response.json())
            .then((response) => {
                return response[0]["count"]
            })
    }

    queryDlgDistinctCol(ele, row) {
        return ele.datasource.buildDistinctColQuery(ele, row)
            .then((response) => response.json())
            .then((response) => {
                return response.map(x => x[row])
            })
    }

    clientSideSearch(ele, txt) {
        let result = 0
        for (var idx = 0; idx < this.data.length; idx++) {
            const line = this.data[idx]
            for (const word in line) {
                if ((line[word]) && (line[word].startsWith(txt))) {
                    result++
                    break
                }
            }
        }
        return result
    }

    pushFilterCondition(key, condi) {
        this.filter[key] = condi
    }

    pushSortCondition(key, value) {
        this.sort[key] = value
    }

    clearSortCondition() {
        this.sort = {}
    }
}
