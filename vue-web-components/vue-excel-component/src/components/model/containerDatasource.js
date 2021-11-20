
export default class PhContainerDataSource {
	constructor(id, adapter) {
		this.id = id
		this.data = []
		this.sort = {}
		this.filter = {}
		this.name = "prod_clean_v2"
		this.batch_size = 200
		this.schema = ["Index", "Id", "Hospname", "Province", "City", "lHospname", "lHospalias", "lDistrict", "lLevel", "lCat", "lOffweb"]
		this.cols = this.schema
		if (!adapter)
			this.adapter = this.defaultAdapter
		this.debugToken = "ff4702f524dec9f8a47854483851dbb332d00c0892d317ad67f496401c6edada"
	}

	defaultAdapter(row, cols) {
		let result = []
		for (var idx in cols) {
			result.push(row[cols[idx]])
		}
		return result
	}

	buildQuery(ele, isAppend=false) {
		function buildQueryString() {
			let sql_str = "SELECT "
			sql_str = sql_str + ele.datasource.schema.toString() + " FROM " + ele.datasource.name

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
			for (const key in ele.datasource.sort) {
				sql_str = sql_str + " ORDER BY " + key
				if (ele.datasource.sort[key] < 0) {
					sql_str = sql_str + " desc "
				}
			}

			// pages
			sql_str = sql_str + " LIMIT " + ele.datasource.batch_size
			sql_str = sql_str + " OFFSET " + (isAppend ? ele.datasource.data.length : 0).toString()
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

	buildCountQuery(ele) {
		function buildQueryCountString() {
			let sql_str = "SELECT count(*)"
			sql_str = sql_str + " FROM " + ele.datasource.name

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

	buildDistinctColQuery(ele, col) {
		function buildDistinctColSql() {
			let sql_str = "SELECT DISTINCT " + col
			sql_str = sql_str + " FROM " + ele.datasource.name
			sql_str = sql_str + " ORDER BY " + col + " LIMIT 20"

			return sql_str
		}
		const url = "https://api.pharbers.com/phchproxyquery"
		const accessToken = ele.getCookie("access_token") || "9202290782fb2c03a77e234cbb314cbb72ec6059acc804d1be41f57b14f308eb"
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

	refreshData(ele) {
		ele.datasource.buildQuery(ele)
			.then((response) => response.json())
			.then((response) => {
				const tmp = []
				for (var idx in response) {
					tmp.push(ele.datasource.adapter(response[idx], ele.datasource.cols))
				}
				ele.datasource.data = tmp //response.map(ele.datasource.adapter)
				ele.cur_page = 0
				ele.needRefresh++
			})
	}

	appendData(ele) {
		ele.datasource.buildQuery(ele, true)
			.then((response) => response.json())
			.then((response) => {
				const tmp = []
				for (var idx in response) {
					tmp.push(ele.datasource.adapter(response[idx], ele.datasource.cols))
				}
				// ele.datasource.data = ele.datasource.data.concat(response.map(ele.datasource.adapter))
				ele.datasource.data = ele.datasource.data.concat(tmp)
				ele.cur_page++
				ele.needRefresh++
			})
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
				return response.map(x => x["Province"])
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
}
