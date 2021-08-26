import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'


export default class DagComponent extends Component {
	@service router
	@service store
	@tracked random

	@action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
				let param = e.detail[0].args.param
				if(param.name == 'toDagPageList') {
					let project = this.store.peekRecord('project', param.pid)
					let datas = {}
					//input暂时写死
					if(project.name == 'Max提数') {
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
					} else if(project.name == 'Max') {
						datas = {
							"dag_name": "Auto_max_refactor",
							"parameters": {
								"project_name": "Takeda",
								"monthly_update": "True",
								"model_month_left": "202001",
								"model_month_right": "202012",
								"all_models": "TK1",
								"time_left": "202101",
								"time_right": "202103",
								"first_month": "1",
								"current_month": "3",
								"if_two_source": "True",
								"add_47": "True",
								"current_year": "2021",
								"g_input_version": {
									"raw_data": {
										"data": "202103_u0079u0079u0077",
										"data_std": "202103_u0079u0079u0077",
										"data_delivery": "202103_u0079u0079u0077"
									},
									"prod_mapping": "202103_u0079u0079u0077",
									"universe_base": "2020_u0079u0079u0077",
									"universe_base_common": "2020_u0079u0079u0077",
									"weight": {
										"weight": "20210624_u0079u0079u0077",
										"weight_default": "20210624_u0079u0079u0077"
									},
									"factor": {
										"TK1": "20210623_u0079u0079u0077"
									},
									"universe_outlier": {
										"TK1": "20210623_u0079u0079u0077"
									},
									"cpa_pha_mapping": "20210623_u0079u0079u0077",
									"cpa_pha_mapping_common": "20210623_u0079u0079u0077",
									"id_bedsize": "20210623_u0079u0079u0077",
									"product_map_all_atc": "20210617",
									"master_data_map": "20210623_u0079u0079u0077",
									"mkt_mapping": "20210623_u0079u0079u0077",
									"province_city_mapping": "20210623_u0079u0079u0077",
									"province_city_mapping_common": "20210623_u0079u0079u0077",
									"poi": "20210623_u0079u0079u0077",
									"not_arrived": "202103_u0079u0079u0077, 202012_u0079u0079u0077, 201912_u0079u0079u0077, 201812_u0079u0079u0077",
									"published": "2017_u0079u0079u0077, 2018_u0079u0079u0077, 2019_u0079u0079u0077, 2020_u0079u0079u0077, 2021_u0079u0079u0077"
								}
							}
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
					return item
				})
				this.random = Math.random()
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
