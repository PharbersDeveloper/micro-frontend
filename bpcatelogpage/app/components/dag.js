import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'


export default class DagComponent extends Component {
	@service router
	@service store
    @tracked executionsData;

	@action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
				let param = e.detail[0].args.param
				if(param.name == 'toDagPageList') {
					let project = this.store.peekRecord('project', param.pid)
					let datas = {}
					//input暂时写死
					if(project.name == 'MAX') {
						datas = {
							"dag_name": "Auto_extract_refactor",
							"parameters": {
								"time_left": "201801",
								"time_right": "201912",
								"project": "Servier",
								"molecule": "二甲双胍, 格列喹酮",
								"out_suffix": "test3_project_molecule"
							}
						}
					} else if(project.name == "ETL") {
						datas = {
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
						}
					}
					let execution = await this.store.createRecord('execution', {
						input: JSON.stringify(datas),
						projectExecution: project
					}).save()
					// run执行execution
					this.router.transitionTo( `/projects/`+ param.pid + `/` +  execution.id)
				} else if(param.name == 'toProjectsList') {
					// 返回工作平台
					this.router.transitionTo( '/projects' )
				} else if(param.name == 'tabletoDagPageList') {
					// 执行列表跳转execution
					this.router.transitionTo( `/projects/`+ param.pid + `/` +  param.execid)
				}
                break
			case "changePage":
				//执行列表 分页
				let params = e.detail[0].args.param
				let executions = await this.store.query( "execution", { "filter[projectExecution]": params.project_id, "page[limit]": 10, "page[offset]": params.page * 10} )
				e.target.allData.executions = executions.filter(function(item) {
					return item.id !== ''
				})
				this.executionsData = e.target.allData.executions
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
