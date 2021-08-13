import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DagComponent extends Component {
	@service router
	@service store

	@action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
				let param = e.detail[0].args.param
				if(param.name == 'toDagPageList') {
					let project = this.store.peekRecord('project', param.pid)
					let execution = await this.store.createRecord('execution', {
						input: JSON.stringify({
							"dag_name": "ETL_Iterator",
							"parameters": [
								{
									"p_input": "s3://ph-max-auto/v0.0.1-2020-06-08/Common_files/extract_data_files/MAX_city_normalize.csv",
									"p_output": "s3://ph-platform/2020-11-11/etl/readable_files/test",
									"g_partition": "provider, version",
									"g_filldefalut": "provider:common,version:20210623_u0079u0079u0077,owner:pharbers",
									"g_bucket": "NONE",
									"g_mapping": "NONE",
									"type": "csv"
								},
								{
									"p_input": "s3://ph-max-auto/v0.0.1-2020-06-08/奥鸿/202012/prod_mapping",
									"p_output": "s3://ph-platform/2020-11-11/etl/readable_files/test",
									"g_partition": "provider, version",
									"g_filldefalut": "provider:奥鸿,version:202012_u0079u0079u0077,owner:pharbers",
									"g_bucket": "NONE",
									"g_mapping": "NONE",
									"type": "parquet"
								}
							]
						}),
						projectExecution: project
					}).save()
					debugger
					// this.router.transitionTo( `/projects/`+ param.pid + `/` +  execution.id)
					this.router.transitionTo( `/projects/`+ param.pid + `/` +  'sV3S4O9TmqIZz2by')
				} else if(param.name == 'toProjectsList') {
					this.router.transitionTo( route )
				}
                break
			case "changePage":
				//执行列表 分页
				let params = e.detail[0].args.param
				let executions = await this.store.query( "execution", { "filter[projectExecution]": params.project_id, "page[limit]": 10, "page[offset]": params.page * 10} )
				e.target.allData.executions = executions.filter(function(item) {
					return item.name !== ''
				})
				break
            default: 
                console.log("other click event!")
        }
    }

    @action
	registerListener(element) {
		element.allData = this.calAllData
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
