import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class DataSetComponent extends Component {
	@service router
	@service store
    @service cookies
    @service ajax
	@tracked random

    @action
	async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                let param = e.detail[0].args.param
                if (param.index != undefined) {
                    if (param.queryParams) {
                        this.router.transitionTo(`${param.name}/${param.index}?${param.queryParams}`)
                    } else {
                        this.router.transitionTo(`${param.name}/${param.index}`)
                    }
                } else {
                    if (param.queryParams) {
                        this.router.transitionTo(`${param.name}?${param.queryParams}`)
                    } else {
                        this.router.transitionTo(param.name)
                    }
                }
                break
			case "requestData":
				const limit = 100
				let storage = window.localStorage
                let requestParam = e.detail[0].args.param
				let page = requestParam.queryParams.page || 0
				let nextToken = ''
				if(page != 0) {
					nextToken = JSON.parse(storage.getItem('partitionsToken'))[page]
				}
				let partTables = await this.store.query( requestParam.name, { "filter[database]": requestParam.queryParams.database, "filter[table]": requestParam.queryParams.table, "page[limit]": limit, "nextToken": nextToken} )
				if(partTables.meta && partTables.meta.token && partTables.meta.token.length > 0) {
					storage.setItem('partitionsToken', JSON.stringify(partTables.meta.token))
				}
				e.target.allData.partitionsCount = partTables.meta.count
				e.target.allData.partTables = partTables.filter(function(item) {
					return item.schema !== null
				})
				this.random = Math.random()
				break
            default: 
                console.log("submit event to parent")
        }
	}

    @action
	registerListener(element) {
        element.allData = this.calAllData
		console.log(element.allData)
		element.addEventListener("event", this.listener)
	}

	@action
	unregisterListener(element) {
		element.removeEventListener("event", this.listener)
	}

    get calAllData() {
        this.args.model._isVue = true
        return this.args.model
    }
}
