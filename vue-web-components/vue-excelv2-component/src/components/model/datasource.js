
export default class PhDataSource {
    constructor(id, adapter, schema, cur_page) {
        this.id = id
        // this.data = []
        this.sort = {}
        this.filter = {}
        this.projectId = ''
        this.name = "prod_clean_v2"
        this.batch_size = 100
        this.cur_page = 0
        this.schema = ["Index", "Id", "Hospname", "Province", "City", "lHospname", "lHospalias", "lDistrict", "lLevel", "lCat", "lOffweb"]
        // this.schema = schema
        this.cols = this.schema
        if (!adapter)
            this.adapter = this.defaultAdapter
        this.debugToken = "eb82959519b7fb7af713f6056dfc9fb0ff0a428f88b841cd1344d46ea6113bbc"
    }

    defaultAdapter(row, cols) {
        let result = []
        for (var idx in cols) {
            result.push(row[cols[idx]])
        }
        return result
    }

    buildQuery(ele) {
        function buildQueryString() {
            let sql_str = "SELECT "
            let selectParam = ele.datasource.schema.map(item => '`' + item + '`').join(',')
            // sql_str = sql_str + ele.datasource.schema.toString() + " FROM " + ele.datasource.name
            // sql_str = sql_str + selectParam + " FROM `" + ele.datasource.projectId + '_' +ele.datasource.name +'`'
            sql_str = sql_str + selectParam + " FROM `" + ele.datasource.name + '`'

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
            sql_str = sql_str + " OFFSET " + (ele.datasource.cur_page * ele.datasource.batch_size).toString()

            return sql_str
        }
        const url = "https://api.pharbers.com/phchproxyquery"
        const accessToken = ele.getCookie("access_token") || this.debugToken
        let body = {
            "query": buildQueryString(),
            "schema": ele.datasource.schema
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
        if (ele.datasource.schema.length > 0) {
            ele.datasource.buildQuery(ele)
                .then((response) => response.json())
                .then((response) => {
                    const tmp = []
                    for (var idx in response) {
                        tmp.push(ele.datasource.adapter(response[idx], ele.datasource.cols))
                    }
                    ele.data = tmp //response.map(ele.datasource.adapter)
                    // ele.datasource.data = tmp //response.map(ele.datasource.adapter)
                    ele.dataIsReady++
                })
        }
    }

    buildCountQuery(ele) {
        function buildQueryCountString() {
            let sql_str = "SELECT count(*)"

            // sql_str = sql_str + " FROM `"  + ele.datasource.projectId + '_' + ele.datasource.name + "`"
            sql_str = sql_str + " FROM `"  +  ele.datasource.name + "`"

            // filter
            let firstFilter = Object.keys(ele.datasource.filter)[0]
            let filterParam = " WHERE "
            for (const key in ele.datasource.filter) {
                if(key != firstFilter) {
                    filterParam = " AND "
                }
                sql_str = sql_str + filterParam + key + " LIKE '%" + ele.datasource.filter[key]+ "%'"
            }

            return sql_str
        }
        const url = "https://api.pharbers.com/phchproxyquery"
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

    queryTotalCount(ele) {
        return ele.datasource.buildCountQuery(ele)
            .then((response) => response.json())
            .then((response) => {
                return response[0]["count"]
            })
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
