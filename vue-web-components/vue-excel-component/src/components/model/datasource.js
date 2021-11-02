
export default class PhDataSource {
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
		const accessToken = ele.getCookie("access_token") || "2ea1975fda78cfa0bf49c4c300cb8804b1a7c38e41c86b4d66937c952bbf99f8"
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
}
