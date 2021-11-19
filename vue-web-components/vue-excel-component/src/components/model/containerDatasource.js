
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
	}

	defaultAdapter(row) {
		return [row.Index, row.Id, row.Hospname, row.Province, row.City,
			row.lHospnaem, row.lHospalias, row.lDistrictct, row.lLevel,
			row.lCat, row.lOffweb]
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
				sql_str = sql_str + filterParam + key + " LIKE '%" + ele.datasource.filter[key]+ "%'"
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
		const accessToken = ele.getCookie("access_token") || "ab8bca823bd9c6da5910025b85a125d91709f21d42dbc3060ba7f91a02f2ef9e"
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
		const accessToken = ele.getCookie("access_token") || "ab8bca823bd9c6da5910025b85a125d91709f21d42dbc3060ba7f91a02f2ef9e"
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

	refreshData(ele) {
		ele.datasource.buildQuery(ele)
			.then((response) => response.json())
			.then((response) => {
				ele.datasource.data = response.map(ele.datasource.adapter)
				ele.needRefresh++
			})
	}

	appendData(ele) {
		ele.datasource.buildQuery(ele, true)
			.then((response) => response.json())
			.then((response) => {
				ele.datasource.data = ele.datasource.data.concat(response.map(ele.datasource.adapter))
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
}
